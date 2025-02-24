"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const server_response_1 = require("../models/server-response");
const constants_1 = require("../shared/constants");
const utils_1 = require("../shared/utils");
const generate_project_key_1 = require("../utils/generate-project-key");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const notifications_service_1 = require("../services/notifications/notifications.service");
const events_1 = require("../socket.io/events");
const io_1 = require("../shared/io");
class ProjectsController extends worklenz_controller_base_1.default {
    static async getAllKeysByTeamId(teamId) {
        if (!teamId)
            return [];
        try {
            const result = await db_1.default.query("SELECT key FROM projects WHERE team_id = $1;", [teamId]);
            return result.rows.map((project) => project.key).filter((key) => !!key);
        }
        catch (error) {
            return [];
        }
    }
    static async notifyProjecManagertUpdates(projectId, user, projectManagerTeamMemberId) {
        if (projectManagerTeamMemberId) {
            const q = `SELECT (SELECT user_id FROM team_member_info_view WHERE team_member_id = $2) AS user_id,
                        (SELECT socket_id FROM users WHERE id = (SELECT user_id FROM team_member_info_view WHERE team_member_id = $2)) AS socket_id,
                        (SELECT name FROM projects WHERE id = $1) AS project_name
                  FROM project_members pm WHERE project_id = $1
                                          AND project_access_level_id = (SELECT id FROM project_access_levels WHERE key = 'PROJECT_MANAGER')`;
            const result = await db_1.default.query(q, [projectId, projectManagerTeamMemberId]);
            const [data] = result.rows;
            if (projectManagerTeamMemberId !== user.team_member_id) {
                void notifications_service_1.NotificationsService.createNotification({
                    userId: data.user_id,
                    teamId: user?.team_id,
                    socketId: data.socket_id,
                    message: `You're assigned as the <b> Project Manager </b> of the <b> ${data.project_name} </b>.`,
                    taskId: null,
                    projectId: projectId
                });
            }
        }
        io_1.IO.getSocketById(user.socket_id)
            ?.to(projectId)
            .emit(events_1.SocketEvents.PROJECT_DATA_CHANGE.toString(), { user_id: user.id });
    }
    static async create(req, res) {
        const q = `SELECT create_project($1) AS project`;
        req.body.team_id = req.user?.team_id || null;
        req.body.user_id = req.user?.id || null;
        req.body.folder_id = req.body.folder_id || null;
        req.body.category_id = req.body.category_id?.trim() || null;
        req.body.client_name = req.body.client_name?.trim() || null;
        req.body.project_created_log = constants_1.LOG_DESCRIPTIONS.PROJECT_CREATED;
        req.body.project_member_added_log = constants_1.LOG_DESCRIPTIONS.PROJECT_MEMBER_ADDED;
        req.body.project_manager_id = req.body.project_manager ? req.body.project_manager.id : null;
        const keys = await this.getAllKeysByTeamId(req.user?.team_id);
        req.body.key = (0, generate_project_key_1.generateProjectKey)(req.body.name, keys) || null;
        const result = await db_1.default.query(q, [JSON.stringify(req.body)]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data.project || {}));
    }
    static async updatePinnedView(req, res) {
        const projectId = req.body.project_id;
        const teamMemberId = req.user?.team_member_id;
        const defaultView = req.body.default_view;
        const q = `UPDATE project_members SET default_view = $1 WHERE project_id = $2 AND team_member_id = $3`;
        const result = await db_1.default.query(q, [defaultView, projectId, teamMemberId]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getMyProjectsToTasks(req, res) {
        const q = `SELECT id, name, color_code
               FROM projects
               WHERE team_id = $1
                 AND is_member_of_project(projects.id, $2, $1)`;
        const result = await db_1.default.query(q, [req.user?.team_id, req.user?.id || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getMyProjects(req, res) {
        const { searchQuery, size, offset } = this.toPaginationOptions(req.query, "name");
        const isFavorites = req.query.filter === "1" ? ` AND EXISTS(SELECT user_id FROM favorite_projects WHERE user_id = '${req.user?.id}' AND project_id = projects.id)` : "";
        const isArchived = req.query.filter === "2"
            ? ` AND EXISTS(SELECT user_id FROM archived_projects WHERE user_id = '${req.user?.id}' AND project_id = projects.id)`
            : ` AND NOT EXISTS(SELECT user_id FROM archived_projects WHERE user_id = '${req.user?.id}' AND project_id = projects.id)`;
        const q = `
      SELECT ROW_TO_JSON(rec) AS projects
      FROM (SELECT COUNT(*) AS total,
                   (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                    FROM (SELECT id,
                                 name,
                                 EXISTS(SELECT user_id
                                        FROM favorite_projects
                                        WHERE user_id = '${req.user?.id}'
                                          AND project_id = projects.id) AS favorite,
                                 EXISTS(SELECT user_id
                                        FROM archived_projects
                                        WHERE user_id = '${req.user?.id}'
                                          AND project_id = projects.id) AS archived,
                                 color_code,
                                 (SELECT COUNT(*)
                                  FROM tasks
                                  WHERE archived IS FALSE
                                    AND project_id = projects.id) AS all_tasks_count,
                                 (SELECT COUNT(*)
                                  FROM tasks
                                  WHERE archived IS FALSE
                                    AND project_id = projects.id
                                    AND status_id IN (SELECT id
                                                      FROM task_statuses
                                                      WHERE project_id = projects.id
                                                        AND category_id IN
                                                            (SELECT id FROM sys_task_status_categories WHERE is_done IS TRUE))) AS completed_tasks_count,
                                 (SELECT COUNT(*)
                                  FROM project_members
                                  WHERE project_id = projects.id) AS members_count,
                                 (SELECT get_project_members(projects.id)) AS names,
                                 (SELECT CASE
                                           WHEN ((SELECT MAX(updated_at)
                                                  FROM tasks
                                                  WHERE archived IS FALSE
                                                    AND project_id = projects.id) >
                                                 updated_at)
                                             THEN (SELECT MAX(updated_at)
                                                   FROM tasks
                                                   WHERE archived IS FALSE
                                                     AND project_id = projects.id)
                                           ELSE updated_at END) AS updated_at
                          FROM projects
                          WHERE team_id = $1 ${isArchived} ${isFavorites} ${searchQuery}
                            AND is_member_of_project(projects.id
                              , '${req.user?.id}'
                              , $1)
                          ORDER BY updated_at DESC
                          LIMIT $2 OFFSET $3) t) AS data
            FROM projects
            WHERE team_id = $1 ${isArchived} ${isFavorites} ${searchQuery}
              AND is_member_of_project(projects.id
                , '${req.user?.id}'
                , $1)) rec;
    `;
        const result = await db_1.default.query(q, [req.user?.team_id || null, size, offset]);
        const [data] = result.rows;
        const projects = Array.isArray(data?.projects.data) ? data?.projects.data : [];
        for (const project of projects) {
            project.progress = project.all_tasks_count > 0
                ? ((project.completed_tasks_count / project.all_tasks_count) * 100).toFixed(0) : 0;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data?.projects || this.paginatedDatasetDefaultStruct));
    }
    static flatString(text) {
        return (text || "").split(" ").map(s => `'${s}'`).join(",");
    }
    static getFilterByCategoryWhereClosure(text) {
        return text ? `AND category_id IN (${this.flatString(text)})` : "";
    }
    static getFilterByStatusWhereClosure(text) {
        return text ? `AND status_id IN (${this.flatString(text)})` : "";
    }
    static async get(req, res) {
        const { searchQuery, sortField, sortOrder, size, offset } = this.toPaginationOptions(req.query, "name");
        const filterByMember = !req.user?.owner && !req.user?.is_admin ?
            ` AND is_member_of_project(projects.id, '${req.user?.id}', $1) ` : "";
        const isFavorites = req.query.filter === "1" ? ` AND EXISTS(SELECT user_id FROM favorite_projects WHERE user_id = '${req.user?.id}' AND project_id = projects.id)` : "";
        const isArchived = req.query.filter === "2"
            ? ` AND EXISTS(SELECT user_id FROM archived_projects WHERE user_id = '${req.user?.id}' AND project_id = projects.id)`
            : ` AND NOT EXISTS(SELECT user_id FROM archived_projects WHERE user_id = '${req.user?.id}' AND project_id = projects.id)`;
        const categories = this.getFilterByCategoryWhereClosure(req.query.categories);
        const statuses = this.getFilterByStatusWhereClosure(req.query.statuses);
        const q = `
      SELECT ROW_TO_JSON(rec) AS projects
      FROM (SELECT COUNT(*) AS total,
                   (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                    FROM (SELECT id,
                                 name,
                                 (SELECT name FROM sys_project_statuses WHERE id = status_id) AS status,
                                 (SELECT color_code FROM sys_project_statuses WHERE id = status_id) AS status_color,
                                 (SELECT icon FROM sys_project_statuses WHERE id = status_id) AS status_icon,
                                 EXISTS(SELECT user_id
                                        FROM favorite_projects
                                        WHERE user_id = '${req.user?.id}'
                                          AND project_id = projects.id) AS favorite,
                                 EXISTS(SELECT user_id
                                        FROM archived_projects
                                        WHERE user_id = '${req.user?.id}'
                                          AND project_id = projects.id) AS archived,
                                 color_code,
                                 start_date,
                                 end_date,
                                 category_id,
                                 (SELECT COUNT(*)
                                  FROM tasks
                                  WHERE archived IS FALSE
                                    AND project_id = projects.id) AS all_tasks_count,
                                 (SELECT COUNT(*)
                                  FROM tasks
                                  WHERE archived IS FALSE
                                    AND project_id = projects.id
                                    AND status_id IN (SELECT id
                                                      FROM task_statuses
                                                      WHERE project_id = projects.id
                                                        AND category_id IN
                                                            (SELECT id FROM sys_task_status_categories WHERE is_done IS TRUE))) AS completed_tasks_count,
                                 (SELECT COUNT(*)
                                  FROM project_members
                                  WHERE project_id = projects.id) AS members_count,
                                 (SELECT get_project_members(projects.id)) AS names,
                                 (SELECT name FROM clients WHERE id = projects.client_id) AS client_name,
                                 (SELECT name FROM users WHERE id = projects.owner_id) AS project_owner,
                                 (SELECT name FROM project_categories WHERE id = projects.category_id) AS category_name,
                                 (SELECT color_code
                                  FROM project_categories
                                  WHERE id = projects.category_id) AS category_color,

                                  ((SELECT team_member_id as team_member_id
                                    FROM project_members
                                    WHERE project_id = projects.id
                                      AND project_access_level_id = (SELECT id FROM project_access_levels WHERE key = 'PROJECT_MANAGER'))) AS project_manager_team_member_id,

                                  (SELECT default_view
                                    FROM project_members prm
                                    WHERE prm.project_id = projects.id
                                      AND team_member_id = '${req.user?.team_member_id}') AS team_member_default_view,

                                 (SELECT CASE
                                           WHEN ((SELECT MAX(updated_at)
                                                  FROM tasks
                                                  WHERE archived IS FALSE
                                                    AND project_id = projects.id) >
                                                 updated_at)
                                             THEN (SELECT MAX(updated_at)
                                                   FROM tasks
                                                   WHERE archived IS FALSE
                                                     AND project_id = projects.id)
                                           ELSE updated_at END) AS updated_at
                          FROM projects
                          WHERE team_id = $1 ${categories} ${statuses} ${isArchived} ${isFavorites} ${filterByMember} ${searchQuery}
                          ORDER BY ${sortField} ${sortOrder}
                          LIMIT $2 OFFSET $3) t) AS data
            FROM projects
            WHERE team_id = $1 ${categories} ${statuses} ${isArchived} ${isFavorites} ${filterByMember} ${searchQuery}) rec;
    `;
        const result = await db_1.default.query(q, [req.user?.team_id || null, size, offset]);
        const [data] = result.rows;
        for (const project of data?.projects.data || []) {
            project.progress = project.all_tasks_count > 0
                ? ((project.completed_tasks_count / project.all_tasks_count) * 100).toFixed(0) : 0;
            project.updated_at_string = (0, moment_1.default)(project.updated_at).fromNow();
            project.names = this.createTagList(project?.names);
            project.names.map((a) => a.color_code = (0, utils_1.getColor)(a.name));
            if (project.project_manager_team_member_id) {
                project.project_manager = {
                    id: project.project_manager_team_member_id
                };
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data?.projects || this.paginatedDatasetDefaultStruct));
    }
    static async getMembersByProjectId(req, res) {
        const { sortField, sortOrder, size, offset } = this.toPaginationOptions(req.query, "name");
        const q = `
      SELECT ROW_TO_JSON(rec) AS members
      FROM (SELECT COUNT(*) AS total,
                   (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                    FROM (SELECT project_members.id,
                                 team_member_id,
                                 (SELECT name
                                  FROM team_member_info_view
                                  WHERE team_member_info_view.team_member_id = tm.id),
                                 (SELECT email
                                  FROM team_member_info_view
                                  WHERE team_member_info_view.team_member_id = tm.id) AS email,
                                 u.avatar_url,
                                 (SELECT COUNT(*)
                                  FROM tasks
                                  WHERE archived IS FALSE
                                    AND project_id = project_members.project_id
                                    AND id IN (SELECT task_id
                                               FROM tasks_assignees
                                               WHERE tasks_assignees.project_member_id = project_members.id)) AS all_tasks_count,
                                 (SELECT COUNT(*)
                                  FROM tasks
                                  WHERE archived IS FALSE
                                    AND project_id = project_members.project_id
                                    AND id IN (SELECT task_id
                                               FROM tasks_assignees
                                               WHERE tasks_assignees.project_member_id = project_members.id)
                                    AND status_id IN (SELECT id
                                                      FROM task_statuses
                                                      WHERE category_id = (SELECT id
                                                                           FROM sys_task_status_categories
                                                                           WHERE is_done IS TRUE))) AS completed_tasks_count,
                                 EXISTS(SELECT email
                                        FROM email_invitations
                                        WHERE team_member_id = project_members.team_member_id
                                          AND email_invitations.team_id = $2) AS pending_invitation,
                                 (SELECT project_access_levels.name
                                  FROM project_access_levels
                                  WHERE project_access_levels.id = project_members.project_access_level_id) AS access,
                                 (SELECT name FROM job_titles WHERE id = tm.job_title_id) AS job_title
                          FROM project_members
                                 INNER JOIN team_members tm ON project_members.team_member_id = tm.id
                                 LEFT JOIN users u ON tm.user_id = u.id
                          WHERE project_id = $1
                          ORDER BY ${sortField} ${sortOrder}
                          LIMIT $3 OFFSET $4) t) AS data
            FROM project_members
            WHERE project_id = $1) rec;
    `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id ?? null, size, offset]);
        const [data] = result.rows;
        for (const member of data?.members.data || []) {
            member.progress = member.all_tasks_count > 0
                ? ((member.completed_tasks_count / member.all_tasks_count) * 100).toFixed(0) : 0;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data?.members || this.paginatedDatasetDefaultStruct));
    }
    static async getById(req, res) {
        const q = `
      SELECT projects.id,
             projects.name,
             projects.color_code,
             projects.notes,
             projects.key,
             projects.start_date,
             projects.end_date,
             projects.status_id,
             projects.health_id,
             projects.created_at,
             projects.updated_at,
             projects.folder_id,
             projects.phase_label,
             projects.category_id,
             (projects.estimated_man_days) AS man_days,
             (projects.estimated_working_days) AS working_days,
             (projects.hours_per_day) AS hours_per_day,
             (SELECT name FROM project_categories WHERE id = projects.category_id) AS category_name,
             (SELECT color_code
              FROM project_categories
              WHERE id = projects.category_id) AS category_color,
             (EXISTS(SELECT 1 FROM project_subscribers WHERE project_id = $1 AND user_id = $3)) AS subscribed,
             (SELECT name FROM users WHERE id = projects.owner_id) AS project_owner,
             sps.name AS status,
             sps.color_code AS status_color,
             sps.icon AS status_icon,
             (SELECT name FROM clients WHERE id = projects.client_id) AS client_name,

             (SELECT COALESCE(ROW_TO_JSON(pm), '{}'::JSON)
                    FROM (SELECT team_member_id AS id,
                                (SELECT COALESCE(ROW_TO_JSON(pmi), '{}'::JSON)
                                  FROM (SELECT name,
                                              email,
                                              avatar_url
                                        FROM team_member_info_view tmiv
                                        WHERE tmiv.team_member_id = pm.team_member_id
                                          AND tmiv.team_id = (SELECT team_id FROM projects WHERE id = $1)) pmi) AS project_manager_info,
                                EXISTS(SELECT email
                                        FROM email_invitations
                                        WHERE team_member_id = pm.team_member_id
                                          AND email_invitations.team_id = (SELECT team_id
                                                                          FROM team_member_info_view
                                                                          WHERE team_member_id = pm.team_member_id)) AS pending_invitation,
                                (SELECT active FROM team_members WHERE id = pm.team_member_id)
                          FROM project_members pm
                          WHERE project_id = $1
                            AND project_access_level_id = (SELECT id FROM project_access_levels WHERE key = 'PROJECT_MANAGER')) pm) AS project_manager
      FROM projects
             LEFT JOIN sys_project_statuses sps ON projects.status_id = sps.id
      WHERE projects.id = $1
        AND team_id = $2;
    `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id ?? null, req.user?.id ?? null]);
        const [data] = result.rows;
        if (data && data.project_manager) {
            data.project_manager.name = data.project_manager.project_manager_info.name;
            data.project_manager.email = data.project_manager.project_manager_info.email;
            data.project_manager.avatar_url = data.project_manager.project_manager_info.avatar_url;
            data.project_manager.color_code = (0, utils_1.getColor)(data.project_manager.name);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async update(req, res) {
        const q = `SELECT update_project($1) AS project;`;
        const key = req.body.key?.toString().trim().toUpperCase();
        if (!key)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "The project key cannot be empty."));
        if (key.length > 5)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "The project key length cannot exceed 5 characters."));
        req.body.id = req.params.id;
        req.body.team_id = req.user?.team_id || null;
        req.body.user_id = req.user?.id || null;
        req.body.folder_id = req.body.folder_id || null;
        req.body.category_id = req.body.category_id || null;
        req.body.client_name = req.body.client_name?.trim() || null;
        req.body.project_created_log = constants_1.LOG_DESCRIPTIONS.PROJECT_UPDATED;
        req.body.project_member_added_log = constants_1.LOG_DESCRIPTIONS.PROJECT_MEMBER_ADDED;
        req.body.project_member_removed_log = constants_1.LOG_DESCRIPTIONS.PROJECT_MEMBER_REMOVED;
        req.body.team_member_id = req.body.project_manager ? req.body.project_manager.id : null;
        const result = await db_1.default.query(q, [JSON.stringify(req.body)]);
        const [data] = result.rows;
        this.notifyProjecManagertUpdates(req.params.id, req.user, req.body.project_manager ? req.body.project_manager.id : null);
        return res.status(200).send(new server_response_1.ServerResponse(true, data.project));
    }
    static async deleteById(req, res) {
        const q = `DELETE
               FROM projects
               WHERE id = $1
                 AND team_id = $2`;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getOverview(req, res) {
        const q = `
      SELECT (SELECT COUNT(id)
              FROM tasks
              WHERE archived IS FALSE
                AND project_id = $1
                AND status_id IN
                    (SELECT id
                     FROM task_statuses
                     WHERE category_id =
                           (SELECT id FROM sys_task_status_categories WHERE is_done IS TRUE))) AS done_task_count,

             (SELECT COUNT(id)
              FROM tasks
              WHERE archived IS FALSE
                AND project_id = $1
                AND status_id IN
                    (SELECT id
                     FROM task_statuses
                     WHERE category_id IN
                           (SELECT id
                            FROM sys_task_status_categories
                            WHERE is_doing IS TRUE
                               OR is_todo IS TRUE))) AS pending_task_count
      FROM projects
      WHERE id = $1
        AND team_id = $2;
    `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id || null]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getOverviewMembers(req, res) {
        const { archived } = req.query;
        const q = `
      SELECT team_member_id AS id,
             FALSE AS active,
             (SELECT COUNT(*)
              FROM tasks
              WHERE archived IS FALSE
                AND project_id = $1
                AND CASE
                      WHEN ($2 IS TRUE) THEN project_id IS NOT NULL
                      ELSE archived IS FALSE END) AS project_task_count,
             (SELECT COUNT(*)
              FROM tasks_assignees
                     INNER JOIN tasks t ON tasks_assignees.task_id = t.id
              WHERE CASE
                      WHEN ($2 IS TRUE) THEN t.project_id IS NOT NULL
                      ELSE archived IS FALSE END
                AND project_member_id = project_members.id) AS task_count,
             (SELECT COUNT(*)
              FROM tasks_assignees
                     INNER JOIN tasks t ON tasks_assignees.task_id = t.id
                     INNER JOIN task_statuses ts ON t.status_id = ts.id
              WHERE CASE
                      WHEN ($2 IS TRUE) THEN t.project_id IS NOT NULL
                      ELSE archived IS FALSE END
                AND project_member_id = project_members.id
                AND ts.category_id IN
                    (SELECT id FROM sys_task_status_categories WHERE is_done IS TRUE)) AS done_task_count,

             (SELECT COUNT(*)
              FROM tasks_assignees
                     INNER JOIN tasks t ON tasks_assignees.task_id = t.id
                     INNER JOIN task_statuses ts ON t.status_id = ts.id
              WHERE CASE
                      WHEN ($2 IS TRUE) THEN t.project_id IS NOT NULL
                      ELSE archived IS FALSE END
                AND project_member_id = project_members.id
                AND end_date::DATE < CURRENT_DATE::DATE
                AND t.status_id NOT IN (SELECT id
                                        FROM task_statuses
                                        WHERE category_id NOT IN
                                              (SELECT id FROM sys_task_status_categories WHERE is_done IS FALSE))) AS overdue_task_count,
             (SELECT COUNT(*)
              FROM tasks_assignees
                     INNER JOIN tasks t ON tasks_assignees.task_id = t.id
                     INNER JOIN task_statuses ts ON t.status_id = ts.id
              WHERE CASE
                      WHEN ($2 IS TRUE) THEN t.project_id IS NOT NULL
                      ELSE archived IS FALSE END
                AND project_member_id = project_members.id
                AND ts.category_id IN
                    (SELECT id
                     FROM sys_task_status_categories
                     WHERE is_doing IS TRUE
                        OR is_todo IS TRUE)) AS pending_task_count,
             (SELECT name FROM team_member_info_view WHERE team_member_info_view.team_member_id = tm.id),
             u.avatar_url,
             (SELECT team_member_info_view.email
              FROM team_member_info_view
              WHERE team_member_info_view.team_member_id = tm.id),
             (SELECT name FROM job_titles WHERE id = tm.job_title_id) AS job_title
      FROM project_members
             INNER JOIN team_members tm ON project_members.team_member_id = tm.id
             LEFT JOIN users u ON tm.user_id = u.id
      WHERE project_id = $1;
    `;
        const result = await db_1.default.query(q, [req.params.id, archived === "true"]);
        for (const item of result.rows) {
            item.progress =
                item.task_count > 0
                    ? ((item.done_task_count / item.task_count) * 100).toFixed(0)
                    : 0;
            item.contribution =
                item.project_task_count > 0
                    ? ((item.task_count / item.project_task_count) * 100).toFixed(0)
                    : 0;
            item.tasks = [];
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getAllTasks(req, res) {
        const { searchQuery, size, offset } = this.toPaginationOptions(req.query, ["tasks.name"]);
        const filterByMember = !req.user?.owner && !req.user?.is_admin ?
            ` AND is_member_of_project(p.id, '${req.user?.id}', $1) ` : "";
        const isDueSoon = req.query.filter == "1";
        const dueSoon = isDueSoon ? "AND tasks.end_date IS NOT NULL" : "";
        const orderBy = isDueSoon ? "tasks.end_date DESC" : "p.name";
        const assignedToMe = req.query.filter == "2" ? `
      AND tasks.id IN (SELECT task_id
        FROM tasks_assignees
        WHERE team_member_id = (SELECT id
                                FROM team_members
                                WHERE user_id = '${req.user?.id}'
                                  AND team_id = $1))
      ` : "";
        const q = `
      SELECT ROW_TO_JSON(rec) AS projects
      FROM (SELECT COUNT(*) AS total,
                   (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                    FROM (SELECT tasks.id,
                                 tasks.name,
                                 p.team_id,
                                 p.name AS project_name,
                                 tasks.start_date,
                                 tasks.end_date,
                                 p.id AS project_id,
                                 p.color_code AS project_color,
                                 (SELECT name FROM task_statuses WHERE id = tasks.status_id) AS status,
                                 (SELECT color_code
                                  FROM sys_task_status_categories
                                  WHERE id = (SELECT category_id FROM task_statuses WHERE id = tasks.status_id)) AS status_color,
                                 (SELECT get_task_assignees(tasks.id)) AS names
                          FROM tasks
                                 INNER JOIN projects p ON tasks.project_id = p.id
                          WHERE tasks.archived IS FALSE
                            AND p.team_id = $1 ${filterByMember} ${dueSoon} ${searchQuery} ${assignedToMe}
                          ORDER BY ${orderBy}
                          LIMIT $2 OFFSET $3) t) AS data
            FROM tasks
                   INNER JOIN projects p ON tasks.project_id = p.id
            WHERE tasks.archived IS FALSE
              AND p.team_id = $1 ${filterByMember} ${dueSoon} ${searchQuery} ${assignedToMe}) rec;
    `;
        const result = await db_1.default.query(q, [req.user?.team_id || null, size, offset]);
        const [data] = result.rows;
        for (const project of data?.projects.data || []) {
            project.progress = project.all_tasks_count > 0
                ? ((project.completed_tasks_count / project.all_tasks_count) * 100).toFixed(0) : 0;
            project.names = this.createTagList(project?.names);
            project.names.map((a) => a.color_code = (0, utils_1.getColor)(a.name));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data.projects || this.paginatedDatasetDefaultStruct));
    }
    static async getAllProjects(req, res) {
        const q = `SELECT id AS value, name AS text
               FROM projects
               WHERE team_id = $1
               ORDER BY name;`;
        const result = await db_1.default.query(q, [req.user?.team_id || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async toggleFavorite(req, res) {
        const q = `SELECT toggle_favorite_project($1, $2);`;
        const result = await db_1.default.query(q, [req.user?.id, req.params.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async toggleArchive(req, res) {
        const q = `SELECT toggle_archive_project($1, $2);`;
        const result = await db_1.default.query(q, [req.user?.id, req.params.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async toggleArchiveAll(req, res) {
        const q = `SELECT toggle_archive_all_projects($1);`;
        const result = await db_1.default.query(q, [req.params.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getProjectManager(projectId) {
        const q = `SELECT team_member_id FROM project_members WHERE project_id = $1 AND project_access_level_id = (SELECT id FROM project_access_levels WHERE key = 'PROJECT_MANAGER')`;
        const result = await db_1.default.query(q, [projectId]);
        return result.rows || [];
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({
        raisedExceptions: {
            "PROJECT_EXISTS_ERROR": `A project with the name "{0}" already exists. Please choose a different name.`
        }
    })
], ProjectsController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "updatePinnedView", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "getMyProjectsToTasks", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "getMyProjects", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "getMembersByProjectId", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({
        raisedExceptions: {
            "PROJECT_EXISTS_ERROR": `Project with "{0}" name already exists. Please choose a different project name.`
        }
    })
], ProjectsController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "deleteById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "getOverview", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "getOverviewMembers", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "getAllTasks", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "getAllProjects", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "toggleFavorite", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "toggleArchive", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectsController, "toggleArchiveAll", null);
exports.default = ProjectsController;
