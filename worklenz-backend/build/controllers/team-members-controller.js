"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const exceljs_1 = tslib_1.__importDefault(require("exceljs"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const email_templates_1 = require("../shared/email-templates");
const io_1 = require("../shared/io");
const events_1 = require("../socket.io/events");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const utils_1 = require("../shared/utils");
const constants_1 = require("../shared/constants");
const notifications_service_1 = require("../services/notifications/notifications.service");
class TeamMembersController extends worklenz_controller_base_1.default {
    static async checkIfUserAlreadyExists(owner_id, email) {
        if (!owner_id)
            throw new Error("Owner not found.");
        const q = `SELECT EXISTS(SELECT tmi.team_member_id
              FROM team_member_info_view AS tmi
                       JOIN teams AS t ON tmi.team_id = t.id
              WHERE tmi.email = $1::TEXT
                AND t.user_id = $2::UUID);`;
        const result = await db_1.default.query(q, [email, owner_id]);
        const [data] = result.rows;
        return data.exists;
    }
    static async checkIfUserActiveInOtherTeams(owner_id, email) {
        if (!owner_id)
            throw new Error("Owner not found.");
        const q = `SELECT EXISTS(SELECT tmi.team_member_id
              FROM team_member_info_view AS tmi
                       JOIN teams AS t ON tmi.team_id = t.id
                       JOIN team_members AS tm ON tmi.team_member_id = tm.id
              WHERE tmi.email = $1::TEXT
              AND t.user_id = $2::UUID AND tm.active = true);`;
        const result = await db_1.default.query(q, [email, owner_id]);
        const [data] = result.rows;
        return data.exists;
    }
    static async createOrInviteMembers(body, user) {
        const q = `SELECT create_team_member($1) AS new_members;`;
        const result = await db_1.default.query(q, [JSON.stringify(body)]);
        const [data] = result.rows;
        const newMembers = data?.new_members || [];
        const projectId = body?.project_id;
        notifications_service_1.NotificationsService.sendTeamMembersInvitations(newMembers, user, projectId || "");
        return newMembers;
    }
    static async create(req, res) {
        req.body.team_id = req.user?.team_id || null;
        if (!req.user?.team_id) {
            return res.status(200).send(new server_response_1.ServerResponse(false, "Required fields are missing."));
        }
        const newMembers = await this.createOrInviteMembers(req.body, req.user);
        return res.status(200).send(new server_response_1.ServerResponse(true, newMembers, `Your teammates will get an email that gives them access to your team.`).withTitle("Invitations sent"));
    }
    static async get(req, res) {
        req.query.field = ["is_owner", "active", "u.name", "u.email"];
        req.query.order = "descend";
        const { searchQuery, sortField, sortOrder, size, offset } = this.toPaginationOptions(req.query, ["u.name", "u.email"], true);
        const paginate = req.query.all === "false" ? `LIMIT ${size} OFFSET ${offset}` : "";
        const q = `
      SELECT COUNT(*) AS total,
             (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
              FROM (SELECT team_members.id,
                           (SELECT name
                            FROM team_member_info_view
                            WHERE team_member_info_view.team_member_id = team_members.id),
                           u.avatar_url,
                           (u.socket_id IS NOT NULL) AS is_online,
                           (SELECT COUNT(*)
                            FROM project_members
                            WHERE team_member_id = team_members.id) AS projects_count,
                           (SELECT name FROM job_titles WHERE id = team_members.job_title_id) AS job_title,
                           (SELECT name FROM roles WHERE id = team_members.role_id) AS role_name,
                           EXISTS(SELECT id
                                  FROM roles
                                  WHERE id = team_members.role_id
                                    AND admin_role IS TRUE) AS is_admin,
                           (CASE
                              WHEN user_id = (SELECT user_id FROM teams WHERE id = $1) THEN TRUE
                              ELSE FALSE END) AS is_owner,
                           (SELECT email
                            FROM team_member_info_view
                            WHERE team_member_info_view.team_member_id = team_members.id),
                           EXISTS(SELECT email
                                  FROM email_invitations
                                  WHERE team_member_id = team_members.id
                                    AND email_invitations.team_id = team_members.team_id) AS pending_invitation,
                            active
                    FROM team_members
                           LEFT JOIN users u ON team_members.user_id = u.id
                    WHERE ${searchQuery} team_id = $1
                    ORDER BY ${sortField} ${sortOrder} ${paginate}) t) AS data
      FROM team_members
             LEFT JOIN users u ON team_members.user_id = u.id
      WHERE ${searchQuery} team_id = $1
    `;
        const result = await db_1.default.query(q, [req.user?.team_id || null]);
        const [members] = result.rows;
        members.data?.map((a) => {
            a.color_code = (0, utils_1.getColor)(a.name);
            return a;
        });
        return res.status(200).send(new server_response_1.ServerResponse(true, members || this.paginatedDatasetDefaultStruct));
    }
    static async getAllMembers(req, res) {
        const q = `SELECT get_team_members($1, $2) AS members;`;
        const result = await db_1.default.query(q, [req.user?.team_id || null, req.query.project || null]);
        const [data] = result.rows;
        const members = data?.members || [];
        for (const member of members) {
            member.color_code = (0, utils_1.getColor)(member.name);
            member.usage = +member.usage;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, members));
    }
    static async getById(req, res) {
        const q = `
      SELECT id,
             created_at,
             updated_at,
             (SELECT name FROM team_member_info_view WHERE team_member_info_view.team_member_id = team_members.id),
             (SELECT avatar_url FROM users WHERE id = team_members.user_id),
             EXISTS(SELECT email
                    FROM email_invitations
                    WHERE team_member_id = team_members.id
                      AND email_invitations.team_id = team_members.team_id) AS pending_invitation,
             (SELECT name FROM job_titles WHERE id = team_members.job_title_id) AS job_title,
             COALESCE(
               (SELECT email FROM users WHERE id = team_members.user_id),
               (SELECT email
                FROM email_invitations
                WHERE email_invitations.team_member_id = team_members.id
                  AND email_invitations.team_id = team_members.team_id
                LIMIT 1)
               ) AS email,
             EXISTS(SELECT id FROM roles WHERE id = team_members.role_id AND admin_role IS TRUE) AS is_admin
      FROM team_members
      WHERE id = $1
        AND team_id = $2;
    `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id || null]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getTeamMembersByProject(req, res) {
        const q = `
      SELECT project_members.id,
             team_member_id,
             project_access_level_id,
             (SELECT name
              FROM project_access_levels
              WHERE id = project_access_level_id) AS project_access_level_name,
             (SELECT name FROM team_member_info_view WHERE team_member_info_view.team_member_id = tm.id),
             u.avatar_url,
             (SELECT team_member_info_view.email
              FROM team_member_info_view
              WHERE team_member_info_view.team_member_id = tm.id)
      FROM project_members
             INNER JOIN team_members tm ON project_members.team_member_id = tm.id
             LEFT JOIN users u ON tm.user_id = u.id
      WHERE project_id = $1
      ORDER BY project_members.created_at DESC;
    `;
        const result = await db_1.default.query(q, [req.params.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async update(req, res) {
        req.body.id = req.params.id;
        req.body.team_id = req.user?.team_id || null;
        req.body.is_admin = !!req.body.is_admin;
        const q = `SELECT update_team_member($1) AS team_member;`;
        const result = await db_1.default.query(q, [JSON.stringify(req.body)]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async resend_invitation(req, res) {
        req.body.team_id = req.user?.team_id || null;
        const q = `SELECT resend_team_invitation($1) AS invitation;`;
        const result = await db_1.default.query(q, [JSON.stringify(req.body)]);
        const [data] = result.rows;
        if (!data?.invitation || !data?.invitation.email)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Resend failed! Please try again."));
        const member = data.invitation;
        (0, email_templates_1.sendInvitationEmail)(!member.is_new, req.user, !member.is_new ? member.name : member.team_member_id, member.email, member.team_member_user_id, member.name || member.email?.split("@")[0]);
        if (member.team_member_id) {
            notifications_service_1.NotificationsService.sendInvitation(req.user?.id, req.user?.name, req.user?.team_name, req.user?.team_id, member.team_member_id);
        }
        member.id = member.team_member_id;
        return res.status(200).send(new server_response_1.ServerResponse(true, null, "Invitation resent"));
    }
    static async deleteById(req, res) {
        const { id } = req.params;
        if (!id || !req.user?.team_id)
            return res.status(200).send(new server_response_1.ServerResponse(false, "Required fields are missing."));
        const q = `SELECT remove_team_member($1, $2, $3) AS member;`;
        const result = await db_1.default.query(q, [id, req.user?.id, req.user?.team_id]);
        const [data] = result.rows;
        const message = `You have been removed from <b>${req.user?.team_name}</b> by <b>${req.user?.name}</b>`;
        notifications_service_1.NotificationsService.sendNotification({
            receiver_socket_id: data.socket_id,
            message,
            team: data.team,
            team_id: id
        });
        io_1.IO.emitByUserId(data.member.id, req.user?.id || null, events_1.SocketEvents.TEAM_MEMBER_REMOVED, {
            teamId: id,
            message
        });
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getOverview(req, res) {
        const q = `
      SELECT (SELECT name FROM projects WHERE id = project_members.project_id) AS name,
             (SELECT COUNT(*) FROM tasks_assignees WHERE project_member_id = project_members.id) AS assigned_task_count,

             (SELECT COUNT(*)
              FROM tasks_assignees
                     INNER JOIN tasks t ON tasks_assignees.task_id = t.id
                     INNER JOIN task_statuses ts ON t.status_id = ts.id
              WHERE t.archived IS FALSE
                AND project_member_id = project_members.id
                AND ts.category_id IN
                    (SELECT id FROM sys_task_status_categories WHERE is_done IS TRUE)) AS done_task_count,

             (SELECT COUNT(*)
              FROM tasks_assignees
                     INNER JOIN tasks t ON tasks_assignees.task_id = t.id
                     INNER JOIN task_statuses ts ON t.status_id = ts.id
              WHERE t.archived IS FALSE
                AND project_member_id = project_members.id
                AND ts.category_id IN
                    (SELECT id
                     FROM sys_task_status_categories
                     WHERE is_doing IS TRUE
                        OR is_todo IS TRUE)) AS pending_task_count

      FROM project_members
      WHERE team_member_id = $1;
    `;
        const result = await db_1.default.query(q, [req.params.id]);
        for (const object of result.rows) {
            object.progress =
                object.assigned_task_count > 0
                    ? ((object.done_task_count / object.assigned_task_count) *
                        100).toFixed(0)
                    : 0;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getOverviewChart(req, res) {
        const q = `
        SELECT(SELECT COUNT(*)
              FROM tasks_assignees
                        INNER JOIN tasks t ON tasks_assignees.task_id = t.id
                        INNER JOIN task_statuses ts ON t.status_id = ts.id
              WHERE t.archived IS FALSE AND project_member_id IN
                    (SELECT id FROM project_members WHERE team_member_id = $1)
                AND ts.category_id IN (SELECT id FROM sys_task_status_categories WHERE is_done IS TRUE)) AS done_count,

              (SELECT COUNT(*)
              FROM tasks_assignees
                        INNER JOIN tasks t ON tasks_assignees.task_id = t.id
                        INNER JOIN task_statuses ts ON t.status_id = ts.id
              WHERE t.archived IS FALSE AND project_member_id IN
                    (SELECT id FROM project_members WHERE team_member_id = $1)
                AND ts.category_id IN
                    (SELECT id FROM sys_task_status_categories WHERE is_doing IS TRUE OR is_todo IS TRUE)) AS pending_count;
      `;
        const result = await db_1.default.query(q, [req.params.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getTeamMembersTreeMap(req, res) {
        const { selected, team, archived } = req.query;
        let q = "";
        if (selected === "time") {
            q = `SELECT ROW_TO_JSON(rec) AS team_members
           FROM (SELECT COUNT(*) AS total,
                        (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                         FROM (SELECT team_members.id,
                                      (SELECT COUNT(*)
                                       FROM project_members
                                       WHERE team_member_id = team_members.id
                                         AND CASE
                                               WHEN ($3 IS TRUE) THEN project_id IS NOT NULL
                                               ELSE project_id NOT IN (SELECT project_id
                                                                       FROM archived_projects
                                                                       WHERE archived_projects.project_id = project_members.project_id
                                                                         AND archived_projects.user_id = $2) END) AS projects_count,
                                      (SELECT SUM(time_spent)
                                       FROM task_work_log
                                       WHERE user_id = team_members.user_id
                                         AND task_id IN (SELECT id
                                                         FROM tasks
                                                         WHERE project_id IN (SELECT id
                                                                              FROM projects
                                                                              WHERE team_id = $1)
                                                           AND CASE
                                                                 WHEN ($3 IS TRUE) THEN project_id IS NOT NULL
                                                                 ELSE project_id NOT IN (SELECT project_id
                                                                                         FROM archived_projects
                                                                                         WHERE archived_projects.project_id = tasks.project_id
                                                                                           AND archived_projects.user_id = $2) END)) AS time_logged,
                                      (SELECT name
                                       FROM team_member_info_view
                                       WHERE team_member_info_view.team_member_id = team_members.id),
                                      (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                                       FROM (SELECT project_id,
                                                    (SELECT name
                                                     FROM projects
                                                     WHERE projects.id = project_members.project_id),
                                                    (SELECT SUM(time_spent)
                                                     FROM task_work_log
                                                     WHERE task_work_log.task_id IN (SELECT id
                                                                                     FROM tasks
                                                                                     WHERE tasks.project_id = project_members.project_id)
                                                       AND task_work_log.user_id IN (SELECT user_id
                                                                                     FROM team_members
                                                                                     WHERE team_member_id = team_members.id)
                                                       AND task_id IN (SELECT id
                                                                       FROM tasks
                                                                       WHERE id = task_work_log.task_id
                                                                         AND CASE
                                                                               WHEN ($3 IS TRUE)
                                                                                 THEN project_id IS NOT NULL
                                                                               ELSE project_id NOT IN (SELECT project_id
                                                                                                       FROM archived_projects
                                                                                                       WHERE archived_projects.project_id = tasks.project_id
                                                                                                         AND archived_projects.user_id = $2) END)) AS value
                                             FROM project_members
                                             WHERE team_member_id = team_members.id) t) AS projects
                               FROM team_members
                                      LEFT JOIN users u ON team_members.user_id = u.id
                               WHERE team_id = $1) t) AS data
                 FROM team_members
                        LEFT JOIN users u ON team_members.user_id = u.id
                 WHERE team_id = $1) rec;`;
        }
        if (selected === "tasks") {
            q = `SELECT ROW_TO_JSON(rec) AS team_members
           FROM (SELECT COUNT(*) AS total,
                        (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                         FROM (SELECT team_members.id,
                                      (SELECT COUNT(*)
                                       FROM project_members
                                       WHERE team_member_id = team_members.id
                                         AND CASE
                                               WHEN ($3 IS FALSE) THEN project_id IS NOT NULL
                                               ELSE project_id NOT IN (SELECT project_id
                                                                       FROM archived_projects
                                                                       WHERE archived_projects.project_id = project_members.project_id
                                                                         AND archived_projects.user_id = $2) END) AS projects_count,
                                      (SELECT COUNT(*)
                                       FROM tasks_assignees
                                       WHERE team_member_id = team_members.id
                                         AND CASE
                                               WHEN ($3 IS FALSE) THEN task_id IN (SELECT id
                                                                                   FROM tasks
                                                                                   WHERE id = tasks_assignees.task_id
                                                                                     AND project_id NOT IN
                                                                                         (SELECT project_id
                                                                                          FROM archived_projects
                                                                                          WHERE archived_projects.project_id = tasks.project_id
                                                                                            AND archived_projects.user_id = $2))
                                               ELSE task_id IS NOT NULL END) AS task_count,
                                      (SELECT name
                                       FROM team_member_info_view
                                       WHERE team_member_info_view.team_member_id = team_members.id),
                                      (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                                       FROM (SELECT project_id,
                                                    (SELECT name
                                                     FROM projects
                                                     WHERE projects.id = project_members.project_id),
                                                    (SELECT COUNT(*)
                                                     FROM tasks_assignees
                                                     WHERE project_member_id = project_members.id) AS value
                                             FROM project_members
                                             WHERE team_member_id = team_members.id
                                               AND CASE
                                                     WHEN ($3 IS FALSE) THEN project_id IS NOT NULL
                                                     ELSE project_id NOT IN (SELECT project_id
                                                                             FROM archived_projects
                                                                             WHERE archived_projects.project_id = project_members.project_id
                                                                               AND archived_projects.user_id = $2) END) t) AS projects
                               FROM team_members
                                      LEFT JOIN users u ON team_members.user_id = u.id
                               WHERE team_id = $1) t) AS DATA
                 FROM team_members
                        LEFT JOIN users u
                                  ON team_members.user_id = u.id
                 WHERE team_id = $1) rec`;
        }
        const result = await db_1.default.query(q, [team, req.user?.id, archived]);
        const [data] = result.rows;
        const obj = [];
        data.team_members.data.forEach((element) => {
            obj.push({
                id: element.id,
                name: element.name,
                value: selected === "time" ? element.time_logged || 1 : element.task_count || 0,
                color: (0, utils_1.getColor)(element.name) + constants_1.TEAM_MEMBER_TREE_MAP_COLOR_ALPHA,
                label: selected === "time"
                    ? (0, utils_1.formatDuration)(moment_1.default.duration(element.time_logged || "0", "seconds"))
                    : `<br>${element.task_count} total tasks`,
                labelToolTip: selected === "time"
                    ? (0, utils_1.formatDuration)(moment_1.default.duration(element.time_logged || "0", "seconds"))
                    : `<b><br> - ${element.projects_count} projects <br> - ${element.task_count} total tasks</br>`
            });
            if (element.projects.length) {
                element.projects.forEach(item => {
                    obj.push({
                        id: item.project_id,
                        name: item.name,
                        parent: element.id,
                        value: item.value || 1,
                        label: selected === "time" ? (0, utils_1.formatDuration)(moment_1.default.duration(item.value || "0", "seconds")) : `${item.value} tasks`
                    });
                });
            }
        });
        data.team_members.data = obj;
        return res.status(200).send(new server_response_1.ServerResponse(true, data.team_members));
    }
    static async getProjectsByTeamMember(req, res) {
        const { project, status, startDate, endDate } = req.query;
        let projectsString, statusString, dateFilterString1, dateFilterString2, dateFilterString3 = "";
        if (project && typeof project === "string") {
            const projects = project.split(",").map(s => `'${s}'`).join(",");
            projectsString = `AND project_id IN (${projects})`;
        }
        if (status && typeof status === "string") {
            const statuses = status.split(",").map(s => `'${s}'`).join(",");
            statusString = `AND status_id IN (${statuses})`;
        }
        if (startDate && endDate) {
            dateFilterString1 = `AND twl2.created_at::DATE BETWEEN ${startDate}::DATE AND ${endDate}::DATE) AS total_logged_time`;
            dateFilterString2 = `LEFT JOIN tasks t ON p.id = t.project_id LEFT JOIN task_work_log twl ON t.id = twl.task_id`;
            dateFilterString3 = `AND twl.user_id = (SELECT user_id FROM team_members WHERE id = project_members.team_member_id)
                          AND twl.created_at::DATE BETWEEN ${startDate}::DATE AND ${endDate}::DATE;`;
        }
        const q = `
        (SELECT color_code,
        name,
        (SELECT count(*)
         FROM tasks_assignees
         WHERE project_members.team_member_id = tasks_assignees.team_member_id
           AND task_id IN (SELECT id FROM tasks WHERE tasks.project_id = projects.id)) AS task_count,
        (SELECT name FROM teams WHERE teams.id = projects.team_id)                     AS team,
        (SELECT sum(time_spent)
         FROM task_work_log
         WHERE task_id IN (SELECT id
                           FROM tasks
                           WHERE tasks.project_id = projects.id
                             AND task_work_log.user_id =
                                 (SELECT user_id FROM team_members WHERE id = project_members.team_member_id)) ${dateFilterString1}) AS total_logged_time
        FROM project_members
                  LEFT JOIN projects ON project_id = projects.id
                  ${dateFilterString2}
        WHERE team_member_id = $1 ${projectsString} ${statusString} ${dateFilterString3}
        ORDER BY name)`;
        const result = await db_1.default.query(q, [req.params.id]);
        result.rows.forEach((element) => {
            element.total_logged_time = (0, utils_1.formatDuration)(moment_1.default.duration(element.total_logged_time || "0", "seconds"));
        });
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getTasksByMembers(req, res) {
        const q = `
      SELECT name,
             (SELECT COUNT(*)
              FROM tasks_assignees
              WHERE team_member_info_view.team_member_id = tasks_assignees.team_member_id) ::INT AS y
      FROM team_member_info_view
      WHERE team_id = $1
      ORDER BY name;`;
        const result = await db_1.default.query(q, [req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getTeamMemberInsightData(team_id, start, end, project, status, searchQuery, sortField, sortOrder, size, offset, all) {
        let timeRangeTaskWorkLog = "";
        let projectsFilterString = "";
        let statusFilterString = "";
        if (start && end) {
            timeRangeTaskWorkLog = `AND EXISTS(SELECT id FROM task_work_log
        WHERE created_at::DATE BETWEEN '${start}'::DATE AND '${end}'::DATE
        AND task_work_log.user_id = u.id)`;
        }
        if (project && typeof project === "string") {
            const projects = project.split(",").map(s => `'${s}'`).join(",");
            projectsFilterString = `AND team_members.id IN (SELECT team_member_id FROM project_members WHERE project_id IN (${projects}))`;
        }
        if (status && typeof status === "string") {
            const projects = status.split(",").map(s => `'${s}'`).join(",");
            statusFilterString = `AND team_members.id IN (SELECT team_member_id
                                FROM project_members
                                WHERE project_id IN (SELECT id
                                                     FROM projects
                                                     WHERE projects.team_id = '${team_id}'
                                                       AND status_id IN (${projects})))`;
        }
        const paginate = all === "false" ? `LIMIT ${size} OFFSET ${offset}` : "";
        const q = `
      SELECT ROW_TO_JSON(rec) AS team_members
      FROM (SELECT COUNT(*) AS total,
                   (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                    FROM (SELECT team_members.id,
                                 (SELECT name
                                  FROM team_member_info_view
                                  WHERE team_member_info_view.team_member_id = team_members.id),
                                 u.avatar_url,
                                 (u.socket_id IS NOT NULL) AS is_online,
                                 (SELECT COUNT(*)
                                  FROM project_members
                                  WHERE team_member_id = team_members.id) AS projects_count,
                                 (SELECT COUNT(*)
                                  FROM tasks_assignees
                                  WHERE team_member_id = team_members.id) AS task_count,
                                 (SELECT SUM(time_spent)
                                  FROM task_work_log
                                  WHERE task_work_log.user_id = tmiv.user_id
                                    AND task_id IN (SELECT id
                                                    FROM tasks
                                                    WHERE project_id IN (SELECT id
                                                                         FROM projects
                                                                         WHERE team_id = $1))) AS total_logged_time_seconds,
                                 (SELECT name FROM job_titles WHERE id = team_members.job_title_id) AS job_title,
                                 (SELECT name FROM roles WHERE id = team_members.role_id) AS role_name,
                                 EXISTS(SELECT id
                                        FROM roles
                                        WHERE id = team_members.role_id
                                          AND admin_role IS TRUE) AS is_admin,
                                 (CASE
                                    WHEN team_members.user_id = (SELECT user_id FROM teams WHERE id = $1) THEN TRUE
                                    ELSE FALSE END) AS is_owner,
                                 (SELECT email
                                  FROM team_member_info_view
                                  WHERE team_member_info_view.team_member_id = team_members.id),
                                 EXISTS(SELECT email
                                        FROM email_invitations
                                        WHERE team_member_id = team_members.id
                                          AND email_invitations.team_id = team_members.team_id) AS pending_invitation,
                                 (SELECT (ARRAY(SELECT NAME
                                                FROM teams
                                                WHERE id IN (SELECT team_id
                                                             FROM team_members
                                                             WHERE team_members.user_id = tmiv.user_id)))) AS member_teams
                          FROM team_members
                                 LEFT JOIN users u ON team_members.user_id = u.ID ${timeRangeTaskWorkLog}
                                 LEFT JOIN team_member_info_view tmiv ON team_members.id = tmiv.team_member_id
                          WHERE team_members.team_id = $1 ${searchQuery} ${timeRangeTaskWorkLog} ${projectsFilterString} ${statusFilterString}
                          ORDER BY ${sortField} ${sortOrder} ${paginate}) t) AS data
            FROM team_members
                   LEFT JOIN users u ON team_members.user_id = u.ID ${timeRangeTaskWorkLog}
                   LEFT JOIN team_member_info_view tmiv ON team_members.id = tmiv.team_member_id
            WHERE team_members.team_id = $1 ${searchQuery} ${timeRangeTaskWorkLog} ${projectsFilterString} ${statusFilterString}) rec;
    `;
        const result = await db_1.default.query(q, [team_id || null]);
        const [data] = result.rows;
        return data.team_members;
    }
    static async getTeamMemberList(req, res) {
        const { searchQuery, sortField, sortOrder, size, offset } = this.toPaginationOptions(req.query, ["tmiv.name", "tmiv.email", "u.name"]);
        const { start, end, project, status, teamId } = req.query;
        const teamMembers = await this.getTeamMemberInsightData(teamId, start, end, project, status, searchQuery, sortField, sortOrder, size, offset, req.query.all);
        teamMembers.data.map((a) => {
            a.color_code = (0, utils_1.getColor)(a.name);
            a.total_logged_time = (0, utils_1.formatDuration)(moment_1.default.duration(a.total_logged_time_seconds || "0", "seconds"));
        });
        return res.status(200).send(new server_response_1.ServerResponse(true, teamMembers || this.paginatedDatasetDefaultStruct));
    }
    static async getTreeDataByMember(req, res) {
        const { selected, id } = req.query;
        let valueString = `(SELECT sum(time_spent)
        FROM task_work_log
        WHERE task_work_log.task_id IN (SELECT id
                                        FROM tasks
                                        WHERE tasks.project_id = project_members.project_id)
          AND task_work_log.user_id IN (SELECT user_id
                                        FROM team_members
                                        WHERE team_member_id = team_members.id))::INT AS value`;
        if (selected === "tasks") {
            valueString = `(SELECT count(*) FROM tasks_assignees
        WHERE project_member_id = project_members.id)::INT        AS value`;
        }
        const q = `
      SELECT project_id,
             (SELECT name FROM projects WHERE projects.id = project_members.project_id),
             (SELECT color_code FROM projects WHERE projects.id = project_members.project_id) AS color,
             ${valueString}
      FROM project_members
      WHERE team_member_id = $1`;
        const result = await db_1.default.query(q, [id]);
        const obj = [];
        result.rows.forEach((element) => {
            obj.push({
                name: element.name,
                value: element.value || 1,
                colorValue: element.color + constants_1.TEAM_MEMBER_TREE_MAP_COLOR_ALPHA,
                color: element.color + constants_1.TEAM_MEMBER_TREE_MAP_COLOR_ALPHA,
                label: selected === "tasks" ? `${element.value} tasks` : (0, utils_1.formatDuration)(moment_1.default.duration(element.value || "0", "seconds"))
            });
        });
        return res.status(200).send(new server_response_1.ServerResponse(true, obj));
    }
    static async exportAllMembers(req, res) {
        const { searchQuery, sortField, sortOrder, size, offset } = this.toPaginationOptions(req.query, ["tmiv.name", "tmiv.email", "u.name"]);
        const { start, end, project, status } = req.query;
        const teamMembers = await this.getTeamMemberInsightData(req.user?.team_id, start || null, end, project, status, searchQuery, sortField, sortOrder, size, offset, req.query.all);
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `Worklenz - Team Members Export - ${exportDate}`;
        const metadata = {};
        const title = "";
        const workbook = new exceljs_1.default.Workbook();
        const sheet = workbook.addWorksheet(title);
        sheet.headerFooter = {
            firstHeader: title
        };
        sheet.columns = [
            { header: "Name", key: "name", width: 50 },
            { header: "Task Count", key: "task_count", width: 25 },
            { header: "Projects Count", key: "projects_count", width: 25 },
            { header: "Email", key: "email", width: 40 },
        ];
        sheet.getCell("A1").value = req.user?.team_name;
        sheet.mergeCells("A1:D1");
        sheet.getCell("A1").alignment = { horizontal: "center" };
        sheet.getCell("A2").value = `Exported on (${exportDate})`;
        sheet.getCell("A2").alignment = { horizontal: "center" };
        sheet.getCell("A3").value = `From ${start || "-"} to ${end || "-"}`;
        sheet.getRow(5).values = [
            "Name",
            "Task Count",
            "Projects Count",
            "Email"
        ];
        for (const item of teamMembers.data) {
            const data = {
                name: item.name,
                task_count: item.task_count,
                projects_count: item.projects_count,
                email: item.email
            };
            sheet.addRow(data);
        }
        sheet.getCell("A1").style.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "D9D9D9" }
        };
        sheet.getCell("A1").font = {
            size: 16
        };
        sheet.getCell("A2").style.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "F2F2F2" }
        };
        sheet.getCell("A2").font = {
            size: 12
        };
        sheet.getRow(5).font = {
            bold: true
        };
        res.setHeader("Content-Type", "application/vnd.openxmlformats");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res)
            .then(() => {
            res.end();
        });
    }
    static async exportByMember(req, res) {
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `Team Members - ${exportDate}`;
        const title = "";
        const workbook = new exceljs_1.default.Workbook();
        workbook.addWorksheet(title);
        res.setHeader("Content-Type", "application/vnd.openxmlformats");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res)
            .then(() => {
            res.end();
        });
    }
    static async toggleMemberActiveStatus(req, res) {
        if (!req.user?.team_id)
            return res.status(200).send(new server_response_1.ServerResponse(false, "Required fields are missing."));
        const q1 = `SELECT active FROM team_members WHERE  id = $1;`;
        const result1 = await db_1.default.query(q1, [req.params?.id]);
        const [status] = result1.rows;
        if (status.active) {
            const updateQ1 = `UPDATE users
              SET active_team = (SELECT id FROM teams WHERE user_id = users.id ORDER BY created_at DESC LIMIT 1)
              WHERE id = (SELECT user_id FROM team_members WHERE id = $1 AND active IS TRUE LIMIT 1);`;
            await db_1.default.query(updateQ1, [req.params?.id]);
        }
        const q = `UPDATE team_members SET active = NOT active WHERE id = $1 RETURNING active;`;
        const result = await db_1.default.query(q, [req.params?.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, [], `Team member ${data.active ? " activated" : " deactivated"} successfully.`));
    }
    static async addTeamMember(req, res) {
        req.body.team_id = req.params?.id || null;
        if (!req.body.team_id || !req.user?.id)
            return res.status(200).send(new server_response_1.ServerResponse(false, "Required fields are missing."));
        const newMembers = await this.createOrInviteMembers(req.body, req.user);
        return res.status(200).send(new server_response_1.ServerResponse(true, newMembers, `Your teammates will get an email that gives them access to your team.`).withTitle("Invitations sent"));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({
        raisedExceptions: {
            "ERROR_EMAIL_INVITATION_EXISTS": `Team member with email "{0}" already exists.`
        }
    })
], TeamMembersController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "getAllMembers", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "getTeamMembersByProject", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "resend_invitation", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "deleteById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "getOverview", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "getOverviewChart", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "getTeamMembersTreeMap", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "getProjectsByTeamMember", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "getTasksByMembers", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "getTeamMemberList", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "getTreeDataByMember", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "exportAllMembers", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "exportByMember", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamMembersController, "toggleMemberActiveStatus", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({
        raisedExceptions: {
            "ERROR_EMAIL_INVITATION_EXISTS": `Team member with email "{0}" already exists.`
        }
    })
], TeamMembersController, "addTeamMember", null);
exports.default = TeamMembersController;
