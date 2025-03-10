"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const exceljs_1 = tslib_1.__importDefault(require("exceljs"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const utils_1 = require("../shared/utils");
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const constants_1 = require("../shared/constants");
const YESTERDAY = "YESTERDAY";
const LAST_WEEK = "LAST_WEEK";
const LAST_MONTH = "LAST_MONTH";
const LAST_QUARTER = "LAST_QUARTER";
class ReportingController extends worklenz_controller_base_1.default {
    static async create(req, res) {
        const q = ``;
        const result = await db_1.default.query(q, []);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getEstimatedVsActualTime(req, res) {
        const teams = (req.body.teams || []);
        const teamIds = teams.map(id => `'${id}'`).join(",");
        const projectStatus = (req.body.projectStatus || []);
        const projectStatusIds = projectStatus.map(id => `'${id}'`).join(",");
        if (!teams.length || !projectStatus.length) {
            return res.status(200).send(new server_response_1.ServerResponse(true, {}));
        }
        const q = `SELECT id,
                      name,
                      (SELECT SUM(time_spent)
                       FROM task_work_log
                       WHERE task_id IN (SELECT id
                                         FROM tasks
                                         WHERE project_id = projects.id))::INT AS total_logged_time,
                      (SELECT SUM(total_minutes * 60)
                       FROM tasks
                       WHERE project_id = projects.id)::INT AS total_estimated_time,
                      (SELECT COUNT(*) FROM tasks WHERE project_id = projects.id)
               FROM projects
               WHERE team_id IN (${teamIds})
                 AND status_id IN (${projectStatusIds})
               ORDER BY name;`;
        const result = await db_1.default.query(q, []);
        const selectedProjects = [];
        const estimated = [];
        const estimated_string = [];
        const logged = [];
        const logged_string = [];
        if (result.rows.length) {
            result.rows.forEach((element) => {
                selectedProjects.push(element.name);
                estimated.push(element.total_estimated_time ? parseFloat(moment_1.default.duration(element.total_estimated_time, "seconds").asHours().toFixed(2)) : 0);
                logged.push(element.total_logged_time ? parseFloat(moment_1.default.duration(element.total_logged_time, "seconds").asHours().toFixed(2)) : 0);
                estimated_string.push((0, utils_1.formatDuration)(moment_1.default.duration(element.total_logged_time || "0", "seconds")));
                logged_string.push((0, utils_1.formatDuration)(moment_1.default.duration(element.total_logged_time || "0", "seconds")));
            });
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, {
            projects: selectedProjects,
            estimated,
            logged,
            estimated_string,
            logged_string
        }));
    }
    static getDateRangeClause(key, dateRange) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            if (start === end) {
                return `task_work_log.created_at::DATE = '${start}'::DATE`;
            }
            return `task_work_log.created_at::DATE >= '${start}'::DATE AND task_work_log.created_at < '${end}'::DATE + INTERVAL '1 day'`;
        }
        if (key === YESTERDAY)
            return "task_work_log.created_at >= (CURRENT_DATE - INTERVAL '1 day')::DATE AND task_work_log.created_at < CURRENT_DATE::DATE";
        if (key === LAST_WEEK)
            return "task_work_log.created_at >= (CURRENT_DATE - INTERVAL '1 week')::DATE AND task_work_log.created_at < CURRENT_DATE::DATE";
        if (key === LAST_MONTH)
            return "task_work_log.created_at >= (CURRENT_DATE - INTERVAL '1 month')::DATE AND task_work_log.created_at < CURRENT_DATE::DATE";
        if (key === LAST_QUARTER)
            return "task_work_log.created_at >= (CURRENT_DATE - INTERVAL '3 months')::DATE AND task_work_log.created_at < CURRENT_DATE::DATE";
        return null;
    }
    static async getTimeLoggesByProjects(projects, users, key, dateRange, archived = false) {
        try {
            const projectIds = projects.map(p => `'${p}'`).join(",");
            const userIds = users.map(u => `'${u}'`).join(",");
            const duration = ReportingController.getDateRangeClause(key || LAST_WEEK, dateRange);
            const q = `
        SELECT projects.name,
               projects.color_code,
               sps.name AS status_name,
               sps.color_code AS status_color_code,
               sps.icon AS status_icon,
               (SELECT COUNT(*)
                FROM tasks
                WHERE CASE WHEN ($1 IS TRUE) THEN project_id IS NOT NULL ELSE archived = FALSE END
                  AND project_id = projects.id) AS all_tasks_count,
               (SELECT COUNT(*)
                FROM tasks
                WHERE CASE WHEN ($1 IS TRUE) THEN project_id IS NOT NULL ELSE archived = FALSE END
                  AND project_id = projects.id
                  AND status_id IN (SELECT id
                                    FROM task_statuses
                                    WHERE project_id = projects.id
                                      AND category_id IN
                                          (SELECT id FROM sys_task_status_categories WHERE is_done IS TRUE))) AS completed_tasks_count,
               (
                 --
                 SELECT COALESCE(JSON_AGG(r), '[]'::JSON)
                 FROM (
                        --
                        SELECT name,
                               (SELECT COALESCE(SUM(time_spent), 0)
                                FROM task_work_log
                                       LEFT JOIN tasks t ON task_work_log.task_id = t.id
                                WHERE user_id = users.id
                                  AND CASE WHEN ($1 IS TRUE) THEN t.project_id IS NOT NULL ELSE t.archived = FALSE END
                                  AND t.project_id = projects.id
                                  AND ${duration}) AS time_logged
                        FROM users
                        WHERE id IN (${userIds})
                        ORDER BY name
                        --
                      ) r
                 --
               ) AS time_logs
        FROM projects
               LEFT JOIN sys_project_statuses sps ON projects.status_id = sps.id
        WHERE projects.id IN (${projectIds})
          AND EXISTS(SELECT 1
                     FROM task_work_log
                            LEFT JOIN tasks t ON task_work_log.task_id = t.id
                     WHERE CASE WHEN ($1 IS TRUE) THEN t.project_id IS NOT NULL ELSE t.archived = FALSE END
                       AND t.project_id = projects.id
                       AND ${duration});
      `;
            const result = await db_1.default.query(q, [archived]);
            const format = (seconds) => {
                const duration = moment_1.default.duration(seconds, "seconds");
                const formattedDuration = `${~~(duration.asHours())}h ${duration.minutes()}m ${duration.seconds()}s`;
                return formattedDuration;
            };
            for (const project of result.rows) {
                if (project.all_tasks_count > 0) {
                    project.progress = Math.round((project.completed_tasks_count / project.all_tasks_count) * 100);
                }
                else {
                    project.progress = 0;
                }
                let total = 0;
                for (const log of project.time_logs) {
                    total += log.time_logged;
                    log.time_logged = format(log.time_logged);
                }
                project.total = format(total);
            }
            return result.rows;
        }
        catch (error) {
            (0, utils_1.log_error)(error);
        }
        return [];
    }
    static async getReportingOverviewStats(req, res) {
        const { includeArchived } = req.query;
        const q = `SELECT get_reporting_overview_stats($1, $2);`;
        const result = await db_1.default.query(q, [req.user?.id, includeArchived]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data.get_reporting_overview_stats || {}));
    }
    static async getReportingProjectStats(req, res) {
        const { includeArchived } = req.query;
        const q = `SELECT get_reporting_projects_stats($1, $2) AS stats;`;
        const result = await db_1.default.query(q, [req.user?.id, includeArchived]);
        const [data] = result.rows;
        const { total_estimated, total_logged } = data.stats;
        data.stats.progress = data.stats.all_tasks_count > 0
            ? ((data.stats.completed_tasks_count / data.stats.all_tasks_count) * 100).toFixed(0) : 0;
        const totalMinutes = moment_1.default.duration(total_estimated, "seconds");
        const totalSeconds = moment_1.default.duration(total_logged, "seconds");
        data.stats.total_estimated_hours_string = (0, utils_1.formatDuration)(totalMinutes);
        data.stats.total_logged_hours_string = (0, utils_1.formatDuration)(totalSeconds);
        data.stats.overlogged_hours = (0, utils_1.formatDuration)(totalMinutes.subtract(totalSeconds));
        return res.status(200).send(new server_response_1.ServerResponse(true, data.stats || {}));
    }
    static async getReportingTeams(req, res) {
        const { includeArchived } = req.query;
        const q = `SELECT t.id,
                      t.name,
                      (SELECT COUNT(*)
                       FROM projects
                       WHERE projects.team_id = tm.team_id
                         AND CASE
                               WHEN ($2 IS TRUE) THEN team_id IS NOT NULL
                               ELSE NOT EXISTS(SELECT project_id
                                               FROM archived_projects
                                               WHERE project_id = projects.id
                                                 AND user_id = $1) END) AS projects_count,
                      (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
                       FROM (SELECT CASE
                                      WHEN u.name IS NOT NULL THEN u.name
                                      ELSE (SELECT name
                                            FROM email_invitations
                                            WHERE team_member_id = team_members.id) END,
                                    avatar_url
                             FROM team_members
                                    LEFT JOIN users u ON team_members.user_id = u.id
                             WHERE team_id = t.id) rec) AS team_members
               FROM teams t
                      CROSS JOIN team_members tm
               WHERE tm.team_id = t.id
                 AND tm.user_id = $1
                 AND role_id IN
                     (SELECT id FROM roles WHERE roles.team_id = t.id AND (admin_role IS TRUE OR owner IS TRUE))
               ORDER BY t.name;`;
        const result = await db_1.default.query(q, [req.user?.id, includeArchived]);
        for (const team of result.rows) {
            team.names = this.createTagList(team?.team_members);
            team.names.map((a) => a.color_code = (0, utils_1.getColor)(a.name));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getProjectsByTeam(req, res) {
        const { id, includeArchived } = req.query;
        const q = `SELECT p.name,
                      sps.name AS status,
                      sps.icon AS status_icon,
                      sps.color_code AS status_color,
                      p.color_code,
                      end_date AS due_date,
                      (SELECT SUM(time_spent)
                       FROM task_work_log
                       WHERE task_id IN (SELECT id FROM tasks WHERE project_id = p.id))::INT AS total_spent,
                      (SELECT SUM(total_minutes * 60) FROM tasks WHERE project_id = p.id)::INT AS total_estimated,
                      (SELECT get_project_members(p.id)) AS project_members,
                      (SELECT (SELECT CASE
                                        WHEN (end_date::DATE < NOW()::DATE AND p.status_id NOT IN (SELECT ID
                                                                                                   FROM sys_project_statuses
                                                                                                   WHERE sys_project_statuses.name IN ('Completed', 'Cancelled')))
                                          THEN NOW()::DATE - end_date::DATE
                                        ELSE 0 END)) AS overdue

               FROM projects p
                      LEFT JOIN sys_project_statuses sps ON p.status_id = sps.id
               WHERE team_id = $1
                 AND CASE
                       WHEN ($2 IS TRUE) THEN team_id IS NOT NULL
                       ELSE NOT EXISTS(SELECT project_id
                                       FROM archived_projects
                                       WHERE project_id = p.id
                                         AND user_id = $3) END
               ORDER BY p.name`;
        const result = await db_1.default.query(q, [id, includeArchived, req.user?.id]);
        for (const project of result.rows) {
            project.total_spent_string = (0, utils_1.formatDuration)(moment_1.default.duration(project.total_spent || "0", "seconds"));
            project.total_allocation = (0, utils_1.formatDuration)(moment_1.default.duration(project.total_estimated || "0", "seconds"));
            const overlogged = project.total_estimated - project.total_spent;
            project.overlogged = (0, utils_1.formatDuration)(moment_1.default.duration((overlogged < 0 ? overlogged : 0) || "0", "seconds"));
            project.project_member_names = this.createTagList(project?.project_members);
            project.project_member_names.map((a) => a.color_code = (0, utils_1.getColor)(a.name));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getEstimatedVsLogged(req, res) {
        const { includeArchived } = req.query;
        const q = `SELECT t.id,
                      t.name,
                      (SELECT SUM(time_spent)
                       FROM task_work_log
                       WHERE task_id IN (SELECT id
                                         FROM tasks
                                         WHERE project_id IN (SELECT id
                                                              FROM projects
                                                              WHERE team_id = t.id
                                                                AND CASE
                                                                      WHEN ($2 IS TRUE) THEN team_id IS NOT NULL
                                                                      ELSE NOT EXISTS(SELECT project_id
                                                                                      FROM archived_projects
                                                                                      WHERE project_id = projects.id
                                                                                        AND user_id = $1) END)))::INT AS total_logged,
                      (SELECT SUM(total_minutes * 60)
                       FROM tasks
                       WHERE project_id IN (SELECT id
                                            FROM projects
                                            WHERE team_id = t.id
                                              AND CASE
                                                    WHEN ($2 IS TRUE) THEN team_id IS NOT NULL
                                                    ELSE NOT EXISTS(SELECT project_id
                                                                    FROM archived_projects
                                                                    WHERE project_id = projects.id
                                                                      AND user_id = $1) END))::INT AS total_estimated
               FROM teams t
                      LEFT JOIN team_members tm ON t.id = tm.team_id
               WHERE tm.user_id = $1
                 AND role_id IN (SELECT id
                                 FROM roles
                                 WHERE (admin_role IS TRUE OR owner IS TRUE))
               ORDER BY name;`;
        const result = await db_1.default.query(q, [req.user?.id, includeArchived]);
        const total_logged = [];
        const total_estimated = [];
        result.rows.forEach((element) => {
            total_logged.push({ name: element.name, y: element.total_logged || 0 });
            total_estimated.push({ name: element.name, y: element.total_estimated || 0 });
        });
        return res.status(200).send(new server_response_1.ServerResponse(true, { total_estimated, total_logged }));
    }
    static async getById(req, res) {
        const { id, includeArchived } = req.query;
        const q = `SELECT p.name,
                      sps.name,
                      sps.icon,
                      sps.color_code AS status_color,
                      p.color_code,
                      end_date AS due_date,
                      (SELECT SUM(time_spent)
                       FROM task_work_log
                       WHERE task_id IN (SELECT id FROM tasks WHERE project_id = p.id)),
                      (SELECT SUM(total_minutes * 60) FROM tasks WHERE project_id = p.id)
               FROM projects p
                      LEFT JOIN sys_project_statuses sps ON p.status_id = sps.id
               WHERE team_id = $1
                 AND CASE
                       WHEN ($2 IS TRUE) THEN team_id IS NOT NULL
                       ELSE NOT EXISTS(SELECT project_id
                                       FROM archived_projects
                                       WHERE project_id = p.id
                                         AND user_id = $3) END`;
        const result = await db_1.default.query(q, [id, includeArchived, req.user?.id]);
        for (const team of result.rows) {
            team.names = this.createTagList(team?.team_members);
            team.names.map((a) => a.color_code = (0, utils_1.getColor)(a.name));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getAllocation(req, res) {
        const teams = (req.body.teams || []);
        const teamIds = teams.map(id => `'${id}'`).join(",");
        const projectIds = (req.body.projects || []);
        if (!teamIds || !projectIds.length)
            return res.status(200).send(new server_response_1.ServerResponse(true, { users: [], projects: [] }));
        const q = `SELECT id, (SELECT name)
               FROM users
               WHERE id IN (SELECT user_id
                            FROM team_members
                            WHERE team_id IN (${teamIds}))
               GROUP BY id
               ORDER BY name`;
        const result = await db_1.default.query(q, []);
        const users = result.rows;
        const userIds = users.map((u) => u.id);
        const projects = await ReportingController.getTimeLoggesByProjects(projectIds, userIds, req.body.duration, req.body.date_range, (req.query.archived === "true"));
        return res.status(200).send(new server_response_1.ServerResponse(true, { users, projects }));
    }
    static async getMyTeams(req, res) {
        const q = `SELECT team_id AS id, name
               FROM team_members tm
                      LEFT JOIN teams ON teams.id = tm.team_id
               WHERE tm.user_id = $1
                 AND role_id IN (SELECT id
                                 FROM roles
                                 WHERE (admin_role IS TRUE OR owner IS TRUE))
               ORDER BY name;`;
        const result = await db_1.default.query(q, [req.user?.id]);
        result.rows.forEach((team) => team.selected = true);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getCategoriesByTeams(req, res) {
        const selectedTeams = (req.body || []);
        const ids = selectedTeams.map(id => `'${id}'`).join(",");
        if (!ids)
            return res.status(200).send(new server_response_1.ServerResponse(true, []));
        const q = `SELECT id, name, color_code FROM project_categories WHERE team_id IN (${ids}) ORDER BY name`;
        const result = await db_1.default.query(q, []);
        result.rows.forEach((team) => team.selected = true);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getProjectsByTeams(req, res) {
        const selectedTeams = (req.body.selectedTeams || []);
        const selectedCategories = (req.body.selectedCategories || []);
        const isNoCategorySelected = req.body.noCategoryIncluded;
        const ids = selectedTeams.map(id => `'${id}'`).join(",");
        const categories = selectedCategories.map(id => `'${id}'`).join(",");
        let categoryQ = "";
        let noCategoryQ = "";
        if (!ids || (!categories && !isNoCategorySelected))
            return res.status(200).send(new server_response_1.ServerResponse(true, []));
        if (categories && isNoCategorySelected) {
            categoryQ = `AND (category_id IS NULL OR category_id IN (${categories}))`;
        }
        else if (!categories && isNoCategorySelected) {
            noCategoryQ = `AND category_id IS NULL`;
        }
        else if (categories && !isNoCategorySelected) {
            categoryQ = `AND category_id IN (${categories})`;
        }
        const q = `SELECT id, name
               FROM projects
               WHERE team_id IN (${ids})
               ${categoryQ}
               ${noCategoryQ}
               ORDER BY name;`;
        const result = await db_1.default.query(q, []);
        result.rows.forEach((team) => team.selected = true);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getReportingTeamsExport(userId, include_archived) {
        if (!userId)
            return [];
        const q = `
      SELECT t.id,
             t.name,
             (SELECT COUNT(*)
              FROM projects
              WHERE projects.team_id = tm.team_id
                AND CASE
                      WHEN ($2 IS TRUE) THEN team_id IS NOT NULL
                      ELSE NOT EXISTS(SELECT 1
                                      FROM archived_projects
                                      WHERE project_id = projects.id
                                        AND user_id = $1) END) AS projects_count,
             (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
              FROM (SELECT COALESCE(u.name, (SELECT name
                                             FROM email_invitations
                                             WHERE team_member_id = team_members.id)),
                           avatar_url
                    FROM team_members
                           LEFT JOIN users u ON team_members.user_id = u.id
                    WHERE team_id = t.id) rec) AS team_members,
             (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
              FROM (SELECT p.name,
                           sps.name AS status,
                           end_date AS due_date,
                           (SELECT SUM(time_spent)
                            FROM task_work_log
                            WHERE task_id IN (SELECT id FROM tasks WHERE project_id = p.id))::INT AS total_spent,
                           (SELECT SUM(total_minutes * 60) FROM tasks WHERE project_id = p.id)::INT AS total_estimated,
                           (SELECT get_project_members(p.id)) AS project_members,
                           (SELECT (SELECT CASE
                                             WHEN (end_date::DATE < NOW()::DATE AND p.status_id NOT IN (SELECT ID
                                                                                                        FROM sys_project_statuses
                                                                                                        WHERE sys_project_statuses.name IN ('Completed', 'Cancelled')))
                                               THEN NOW()::DATE - end_date::DATE
                                             ELSE 0 END)) AS overdue

                    FROM projects p
                           LEFT JOIN sys_project_statuses sps ON p.status_id = sps.id
                    WHERE team_id = t.id
                      AND (CASE
                             WHEN ($2 IS TRUE) THEN team_id IS NOT NULL
                             ELSE NOT EXISTS(SELECT 1
                                             FROM archived_projects
                                             WHERE project_id = p.id
                                               AND user_id = $1) END)
                    ORDER BY p.name) rec) AS projects
      FROM teams t
             CROSS JOIN team_members tm
      WHERE tm.team_id = t.id
        AND tm.user_id = $1
        AND role_id IN (SELECT id FROM roles WHERE roles.team_id = t.id AND (admin_role IS TRUE OR owner IS TRUE))
      ORDER BY t.name;
    `;
        const result = await db_1.default.query(q, [userId, include_archived]);
        return result.rows;
    }
    static async exportOverviewExcel(req, res) {
        const includeArchived = req.query.includeArchived == "true";
        const results = await this.getReportingTeamsExport(req.user?.id, includeArchived);
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `${exportDate} - Reporting Overview`;
        const workbook = new exceljs_1.default.Workbook();
        for (const item of results) {
            const sheet = workbook.addWorksheet(item.name.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "_"));
            sheet.columns = [
                { header: "Project", key: "project", width: 30 },
                { header: "Status", key: "status", width: 20 },
                { header: "Due Date", key: "due_date", width: 20 },
                { header: "Overdue", key: "overdue", width: 20 },
                { header: "Total Allocation", key: "total_allocation", width: 20 },
                { header: "Over Logged Time", key: "over_logged_time", width: 20 },
                { header: "Members", key: "members", width: 30 },
            ];
            sheet.getCell("A1").value = `Team : ${item.name}`;
            sheet.mergeCells("A1:G1");
            sheet.getCell("A1").alignment = { horizontal: "center" };
            sheet.getCell("A1").style.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "D9D9D9" }
            };
            sheet.getCell("A1").font = {
                size: 16
            };
            sheet.getCell("A2").value = `Exported on : ${exportDate}`;
            sheet.mergeCells("A2:G2");
            sheet.getCell("A2").alignment = { horizontal: "center" };
            sheet.getCell("A2").style.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "F2F2F2" }
            };
            sheet.getCell("A2").font = {
                size: 12
            };
            sheet.getRow(4).values = [
                "Project",
                "Status",
                "Due Date",
                "Overdue",
                "Total Allocation",
                "Over Logged Time",
                "Members",
            ];
            sheet.getRow(4).font = {
                bold: true
            };
            for (const project of item.projects) {
                const overlogged = project.total_estimated - project.total_spent;
                const overloggedTime = (0, utils_1.formatDuration)(moment_1.default.duration((overlogged < 0 ? overlogged : 0) || "0", "seconds"));
                sheet.addRow({
                    project: project.name,
                    status: project.status,
                    due_date: project.due_date ? (0, moment_1.default)(project.due_date).format("MMM DD,YYYY") : "-",
                    overdue: project.overdue ? `${project.overdue} days` : "-",
                    total_allocation: (0, utils_1.formatDuration)(moment_1.default.duration(project.total_estimated || "0", "seconds")),
                    over_logged_time: overloggedTime,
                    members: this.getMembers(project)
                });
            }
        }
        res.setHeader("Content-Type", "application/vnd.openxmlformats");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res)
            .then(() => {
            res.end();
        });
    }
    static getMembers(project) {
        return project.project_members.length > 0 ? project.project_members.map((member) => member.name).join(", ") : "-";
    }
    static async getAllocationExport(include_archived, teamIds, projectIds, duration, date_range) {
        if (!teamIds || !projectIds.length)
            return { users: [], projects: [] };
        const q = `SELECT id, (SELECT name)
               FROM users
               WHERE id IN (SELECT user_id
                            FROM team_members
                            WHERE team_id IN (${teamIds}))
               GROUP BY id
               ORDER BY name`;
        const result = await db_1.default.query(q, []);
        const users = result.rows;
        const userIds = users.map((u) => u.id);
        const projects = await ReportingController.getTimeLoggesByProjects(projectIds, userIds, duration, date_range, (include_archived === "true"));
        const dataReturn = { users, projects };
        return dataReturn;
    }
    static async exportAllocation(req, res) {
        const { includeArchived } = req.query;
        const teams = req.query.teams?.split(",");
        const teamIds = teams.map(t => `'${t}'`).join(",");
        const projectIds = req.query.projects?.split(",");
        const { duration } = req.query;
        const dateRange = req.query.date_range?.split(",");
        const results = await this.getAllocationExport(includeArchived, teamIds, projectIds, duration, dateRange);
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `${exportDate} - Reporting Allocation`;
        const workbook = new exceljs_1.default.Workbook();
        const sheet = workbook.addWorksheet("Allocation");
        sheet.columns = [
            { header: "Project", key: "project", width: 25 },
            { header: "Logged Time", key: "logged_time", width: 20 },
            { header: "Total", key: "total", width: 25 },
        ];
        sheet.getCell("A1").value = `Allocation`;
        sheet.mergeCells("A1:G1");
        sheet.getCell("A1").alignment = { horizontal: "center" };
        sheet.getCell("A1").style.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "D9D9D9" }
        };
        sheet.getCell("A1").font = {
            size: 16
        };
        sheet.getCell("A2").value = `Exported on : ${exportDate}`;
        sheet.mergeCells("A2:G2");
        sheet.getCell("A2").alignment = { horizontal: "center" };
        sheet.getCell("A2").style.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "F2F2F2" }
        };
        sheet.getCell("A2").font = {
            size: 12
        };
        if (results.projects.length > 0) {
            const rowTop = sheet.getRow(4);
            rowTop.getCell(1).value = "";
            results.users.forEach((user, index) => {
                rowTop.getCell(index + 2).value = user.name;
            });
            rowTop.getCell(results.users.length + 2).value = "Total";
            rowTop.font = {
                bold: true
            };
            for (const project of results.projects) {
                const rowValues = [];
                rowValues[1] = project.name;
                project.time_logs.forEach((log, index) => {
                    rowValues[index + 2] = log.time_logged === "0h 0m 0s" ? "-" : log.time_logged;
                });
                rowValues[project.time_logs.length + 2] = project.total;
                sheet.addRow(rowValues);
                const { lastRow } = sheet;
                if (lastRow) {
                    const totalCell = lastRow.getCell(project.time_logs.length + 2);
                    totalCell.style.font = { bold: true };
                }
            }
        }
        res.setHeader("Content-Type", "application/vnd.openxmlformats");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res)
            .then(() => {
            res.end();
        });
    }
    static async getActiveProjects(req, res) {
        const { includeArchived } = req.query;
        const q = `SELECT id,
                      name,
                      updated_at,
                      end_date,
                      (SELECT name FROM sys_project_statuses WHERE status_id = sys_project_statuses.id) AS status
               FROM projects
               WHERE team_id IN (SELECT team_id
                                 FROM team_members
                                 WHERE user_id = $1
                                   AND role_id IN (SELECT id
                                                   FROM roles
                                                   WHERE (admin_role IS TRUE OR owner IS TRUE)))
                 AND CASE
                       WHEN ($2 IS TRUE) THEN team_id IS NOT NULL
                       ELSE NOT EXISTS(SELECT project_id
                                       FROM archived_projects
                                       WHERE project_id = projects.id
                                         AND user_id = $1) END
                 AND status_id IN (SELECT ID
                                   FROM sys_project_statuses
                                   WHERE sys_project_statuses.name NOT IN ('Completed', 'Cancelled'))
               ORDER BY updated_at DESC
               LIMIT 10`;
        const result = await db_1.default.query(q, [req.user?.id, includeArchived]);
        for (const project of result.rows) {
            project.updated_at_string = (0, moment_1.default)(project.updated_at).fromNow();
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getOverdueProjects(req, res) {
        const { includeArchived } = req.query;
        const q = `SELECT id,
                      name,
                      updated_at,
                      end_date,
                      (SELECT name FROM sys_project_statuses WHERE status_id = sys_project_statuses.id) AS status,
                      (SELECT SUM(time_spent)
                       FROM tasks t
                              RIGHT JOIN task_work_log twl ON t.id = twl.task_id
                       WHERE project_id = p.id
                         AND end_date::DATE < twl.created_at::DATE) AS overlogged_hours
               FROM projects p
               WHERE team_id IN (SELECT team_id
                                 FROM team_members
                                 WHERE user_id = $1
                                   AND role_id IN (SELECT id
                                                   FROM roles
                                                   WHERE (admin_role IS TRUE OR owner IS TRUE)))
                 AND end_date::DATE < CURRENT_DATE::DATE
                 AND CASE
                       WHEN ($2 IS TRUE) THEN team_id IS NOT NULL
                       ELSE NOT EXISTS(SELECT project_id
                                       FROM archived_projects
                                       WHERE project_id = p.id
                                         AND user_id = $1) END
                 AND status_id IN (SELECT ID
                                   FROM sys_project_statuses
                                   WHERE sys_project_statuses.name NOT IN ('Completed', 'Cancelled'))
               ORDER BY updated_at DESC
               LIMIT 10;`;
        const result = await db_1.default.query(q, [req.user?.id, includeArchived]);
        for (const project of result.rows) {
            project.overlogged_hours = (0, utils_1.formatDuration)(moment_1.default.duration(project.overlogged_hours, "seconds"));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getReportingCustom(req, res) {
        const { includeArchived } = req.query;
        const { searchQuery, size, offset } = this.toPaginationOptions(req.query, "name");
        const teams = (req.body.teams || []);
        const teamIds = teams.map(id => `'${id}'`).join(",");
        const status = (req.body.status || []);
        const statusIds = status.map(p => `'${p}'`).join(",");
        if (!teams.length || !status.length)
            return res.status(200).send(new server_response_1.ServerResponse(true, { users: [], projects: [] }));
        const q = `SELECT COUNT(*) AS total,
                      (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                       FROM (SELECT id,
                                    name,
                                    (SELECT name FROM sys_project_statuses WHERE id = status_id) AS status,
                                    (SELECT color_code FROM sys_project_statuses WHERE id = status_id) AS status_color,
                                    (SELECT icon FROM sys_project_statuses WHERE id = status_id) AS status_icon,
                                    (SELECT name FROM teams WHERE team_id = teams.id) AS team_name,
                                    color_code,
                                    start_date,
                                    end_date,
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
                                     FROM tasks
                                     WHERE archived IS FALSE
                                       AND project_id = projects.id
                                       AND status_id IN (SELECT id
                                                         FROM task_statuses
                                                         WHERE project_id = projects.id
                                                           AND category_id IN
                                                               (SELECT id FROM sys_task_status_categories WHERE is_doing IS TRUE))) AS is_doing_tasks_count,
                                    (SELECT COUNT(*)
                                     FROM tasks
                                     WHERE archived IS FALSE
                                       AND project_id = projects.id
                                       AND status_id IN (SELECT id
                                                         FROM task_statuses
                                                         WHERE project_id = projects.id
                                                           AND category_id IN
                                                               (SELECT id FROM sys_task_status_categories WHERE is_todo IS TRUE))) AS is_todo_tasks_count,
                                    (SELECT COUNT(*) FROM project_members WHERE project_id = projects.id) AS members_count,
                                    (SELECT get_project_members(projects.id)) AS names,
                                    (SELECT name FROM clients WHERE id = projects.client_id) AS client_name,
                                    (SELECT name FROM users WHERE id = projects.owner_id) AS project_owner,
                                    (SELECT CASE
                                              WHEN ((SELECT MAX(updated_at)
                                                     FROM tasks
                                                     WHERE archived IS FALSE
                                                       AND project_id = projects.id) > updated_at)
                                                THEN (SELECT MAX(updated_at)
                                                      FROM tasks
                                                      WHERE archived IS FALSE
                                                        AND project_id = projects.id)
                                              ELSE updated_at END) AS updated_at
                             FROM projects
                             WHERE team_id IN (${teamIds}) ${searchQuery}
                              AND status_id IN (${statusIds})
                               AND NOT EXISTS (SELECT user_id
                               FROM archived_projects
                               WHERE user_id = $1
                               AND project_id = projects.id)
                               AND CASE
                               WHEN ($4 IS TRUE) THEN team_id IS NOT NULL
                               ELSE NOT EXISTS (SELECT project_id
                               FROM archived_projects
                               WHERE project_id = projects.id) END
                             ORDER BY NAME ASC
                             LIMIT $2 OFFSET $3) t) AS DATA
               FROM projects
               WHERE team_id IN (${teamIds}) ${searchQuery}
                AND status_id IN (${statusIds})
                 AND NOT EXISTS (SELECT user_id
                 FROM archived_projects
                 WHERE user_id = $1
                 AND project_id = projects.id)
                 AND CASE
                 WHEN ($4 IS TRUE) THEN team_id IS NOT NULL
                 ELSE NOT EXISTS (SELECT project_id
                 FROM archived_projects
                 WHERE project_id = projects.id)
    END;`;
        const result = await db_1.default.query(q, [req.user?.id, size, offset, includeArchived]);
        const [obj] = result.rows;
        for (const project of obj.data) {
            project.completed_percentage = Math.round((project.completed_tasks_count / project.all_tasks_count) * 100);
            project.doing_percentage = Math.round((project.is_doing_tasks_count / project.all_tasks_count) * 100);
            project.todo_percentage = 100 - (project.completed_percentage + project.doing_percentage);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, obj || []));
    }
    static async getProjectDetailsById(req, res) {
        const q = `SELECT name, (SELECT name FROM teams WHERE teams.id = team_id) AS team_name
               FROM projects
               WHERE id = $1;`;
        const result = await db_1.default.query(q, [req.params?.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data || { name: "", team_name: "" }));
    }
    static async getReportingCustomExport(user_id, includeArchived, teams, status, searchQuery) {
        if (!teams.length || !status.length || !user_id)
            return { users: [], projects: [] };
        const teamIds = teams.map(id => `'${id}'`).join(",");
        const statusIds = status.map(s => `'${s}'`).join(",");
        const q = `SELECT id,
                      name,
                      (SELECT name FROM sys_project_statuses WHERE id = status_id) AS status,
                      (SELECT color_code FROM sys_project_statuses WHERE id = status_id) AS status_color,
                      (SELECT icon FROM sys_project_statuses WHERE id = status_id) AS status_icon,
                      (SELECT name FROM teams WHERE team_id = teams.id) AS team_name,
                      color_code,
                      start_date,
                      end_date,
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
                       FROM tasks
                       WHERE archived IS FALSE
                         AND project_id = projects.id
                         AND status_id IN (SELECT id
                                           FROM task_statuses
                                           WHERE project_id = projects.id
                                             AND category_id IN
                                                 (SELECT id FROM sys_task_status_categories WHERE is_doing IS TRUE))) AS is_doing_tasks_count,
                      (SELECT COUNT(*)
                       FROM tasks
                       WHERE archived IS FALSE
                         AND project_id = projects.id
                         AND status_id IN (SELECT id
                                           FROM task_statuses
                                           WHERE project_id = projects.id
                                             AND category_id IN
                                                 (SELECT id FROM sys_task_status_categories WHERE is_todo IS TRUE))) AS is_todo_tasks_count,
                      (SELECT COUNT(*) FROM project_members WHERE project_id = projects.id) AS members_count,
                      (SELECT get_project_members(projects.id)) AS names,
                      (SELECT name FROM clients WHERE id = projects.client_id) AS client_name,
                      (SELECT name FROM users WHERE id = projects.owner_id) AS project_owner,
                      (SELECT CASE
                                WHEN ((SELECT MAX(updated_at)
                                       FROM tasks
                                       WHERE archived IS FALSE
                                         AND project_id = projects.id) > updated_at)
                                  THEN (SELECT MAX(updated_at)
                                        FROM tasks
                                        WHERE archived IS FALSE
                                          AND project_id = projects.id)
                                ELSE updated_at END) AS updated_at
               FROM projects
               WHERE team_id IN (${teamIds}) ${searchQuery}
        AND status_id IN (${statusIds})
                 AND NOT EXISTS (SELECT user_id
                 FROM archived_projects
                 WHERE user_id = $1
                 AND project_id = projects.id)
                 AND CASE
                 WHEN ($2 IS TRUE) THEN team_id IS NOT NULL
                 ELSE NOT EXISTS (SELECT project_id
                 FROM archived_projects
                 WHERE project_id = projects.id)
    END ORDER BY NAME ASC;`;
        const result = await db_1.default.query(q, [user_id, includeArchived]);
        return result.rows;
    }
    static async exportProjects(req, res) {
        const { includeArchived } = req.query;
        const { searchQuery } = this.toPaginationOptions(req.query, "name");
        const teams = req.query.teams?.split(",");
        const status = req.query.status?.split(",");
        const results = await this.getReportingCustomExport(req.user?.id, includeArchived, teams, status, searchQuery);
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `${exportDate} - Reporting Projects`;
        const workbook = new exceljs_1.default.Workbook();
        const sheet = workbook.addWorksheet("Projects");
        sheet.columns = [
            { header: "Name", key: "name", width: 25 },
            { header: "Client", key: "client", width: 20 },
            { header: "Status", key: "status", width: 25 },
            { header: "Team", key: "team", width: 25 },
            { header: "Progress", key: "progress", width: 25 },
            { header: "Last Update", key: "updated", width: 25 },
            { header: "Members", key: "members", width: 25 },
        ];
        sheet.getCell("A1").value = `Projects`;
        sheet.mergeCells("A1:G1");
        sheet.getCell("A1").alignment = { horizontal: "center" };
        sheet.getCell("A1").style.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "D9D9D9" }
        };
        sheet.getCell("A1").font = {
            size: 16
        };
        sheet.getCell("A2").value = `Exported on : ${exportDate}`;
        sheet.mergeCells("A2:G2");
        sheet.getCell("A2").alignment = { horizontal: "center" };
        sheet.getCell("A2").style.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "F2F2F2" }
        };
        sheet.getCell("A2").font = {
            size: 12
        };
        sheet.getRow(4).values = [
            "Name",
            "Client",
            "Status",
            "Team",
            "Progress (%)",
            "Last Update",
            "Members",
        ];
        sheet.getRow(4).font = {
            bold: true
        };
        for (const item of results || []) {
            let progressPercentage = "0";
            if (item.all_tasks_count > 0) {
                progressPercentage = ((item.completed_tasks_count / item.all_tasks_count) * 100).toFixed();
            }
            sheet.addRow({
                name: item.name,
                client: item.client_name ? item.client_name : "-",
                status: item.status,
                team: item.team_name,
                progress: progressPercentage,
                updated: (0, moment_1.default)(item.updated_at).format("MMM DD, YYYY"),
                members: item.members_count,
            });
        }
        res.setHeader("Content-Type", "application/vnd.openxmlformats");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res)
            .then(() => {
            res.end();
        });
    }
    static async getUnAssignedUsers(req, res) {
        const q = `SELECT DISTINCT user_id, (SELECT name FROM team_member_info_view tmiv WHERE tmiv.team_member_id = tm.id)
               FROM team_members tm
                      LEFT JOIN email_invitations ei ON tm.id = ei.team_member_id
               WHERE tm.team_id IN (SELECT team_id
                                    FROM team_members
                                    WHERE user_id = $1
                                      AND role_id IN (SELECT id
                                                      FROM roles
                                                      WHERE (admin_role IS TRUE OR owner IS TRUE)))
                 AND team_member_id NOT IN
                     (SELECT team_member_id
                      FROM project_members pm
                      WHERE pm.project_id IN
                            (SELECT id FROM projects WHERE projects.team_id = tm.team_id));`;
        const result = await db_1.default.query(q, [req.user?.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getMembersWithOverDueTasks(req, res) {
        const q = `SELECT DISTINCT tm.user_id,
                               tm.id AS id,
                               tmiv.name,
                               (SELECT COUNT(DISTINCT task_id)
                                FROM tasks_assignees ta
                                       CROSS JOIN tasks t
                                WHERE ta.team_member_id = tm.id
                                  AND t.id = ta.task_id
                                  AND ((t.end_date::DATE < NOW()::DATE) OR
                                       ((t.total_minutes * 60) <
                                        (SELECT SUM(time_spent)
                                         FROM task_work_log twl
                                         WHERE twl.task_id = t.id
                                           AND tm.user_id = tm.user_id)))
                                  AND t.status_id IN
                                      (SELECT id
                                       FROM task_statuses
                                       WHERE category_id IN
                                             (SELECT id FROM sys_task_status_categories WHERE is_done IS FALSE)))::INT AS overdue_tasks,
                               (SELECT COUNT(DISTINCT project_id)
                                FROM tasks_assignees ta
                                       CROSS JOIN tasks t
                                WHERE ta.team_member_id = tm.id
                                  AND t.id = ta.task_id
                                  AND ((t.end_date::DATE < NOW()::DATE) OR
                                       ((t.total_minutes * 60) <
                                        (SELECT SUM(time_spent)
                                         FROM task_work_log twl
                                         WHERE twl.task_id = t.id
                                           AND tm.user_id = tm.user_id)))
                                  AND t.status_id IN
                                      (SELECT id
                                       FROM task_statuses
                                       WHERE category_id IN
                                             (SELECT id FROM sys_task_status_categories WHERE is_done IS FALSE)))::INT AS projects,
                               (SELECT SUM(t.total_minutes * 60) - SUM(twl.time_spent)
                                FROM tasks_assignees ta
                                       CROSS JOIN tasks t,
                                     task_work_log twl
                                WHERE ta.team_member_id = tm.id
                                  AND twl.task_id = t.id
                                  AND twl.user_id = tm.user_id
                                  AND t.id = ta.task_id
                                  AND ((t.end_date::DATE < NOW()::DATE) OR
                                       ((t.total_minutes * 60) <
                                        (SELECT SUM(time_spent)
                                         FROM task_work_log twl
                                         WHERE twl.task_id = t.id
                                           AND tm.user_id = tm.user_id)))
                                  AND t.status_id IN
                                      (SELECT id
                                       FROM task_statuses
                                       WHERE category_id IN
                                             (SELECT id FROM sys_task_status_categories WHERE is_done IS FALSE))) AS overdue_time
               FROM team_members tm
                      LEFT JOIN team_member_info_view tmiv ON tm.id = tmiv.team_member_id
               WHERE tm.team_id = $1
                 AND tm.id IN (SELECT ta.team_member_id
                               FROM tasks_assignees ta
                                      LEFT JOIN tasks t
                                                ON t.id = ta.task_id
                               WHERE ((t.end_date::DATE < NOW()::DATE) OR
                                      ((t.total_minutes * 60) <
                                       (SELECT SUM(time_spent)
                                        FROM task_work_log twl
                                        WHERE twl.task_id = t.id
                                          AND tm.user_id = tm.user_id)))
                                 AND t.status_id IN
                                     (SELECT id
                                      FROM task_statuses
                                      WHERE category_id IN
                                            (SELECT id FROM sys_task_status_categories WHERE is_done IS FALSE)))
               ORDER BY tmiv.name;`;
        const result = await db_1.default.query(q, [req.params?.id]);
        for (const member of result.rows) {
            member.overdue_time = (0, utils_1.formatDuration)(moment_1.default.duration(member.overdue_time || "0", "seconds"));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getReportingMemberStats(req, res) {
        const { includeArchived } = req.query;
        const q = `SELECT get_reporting_members_stats($1, $2, $3) AS stats;`;
        const result = await db_1.default.query(q, [req.params.id, includeArchived, req.user?.id]);
        const [data] = result.rows;
        const { total_estimated, total_logged } = data.stats;
        data.stats.progress = data.stats.total_tasks > 0
            ? ((data.stats.total_tasks_completed / data.stats.total_tasks) * 100).toFixed(0) : 0;
        data.stats.log_progress = data.stats.total_tasks > 0
            ? ((data.stats.overdue_tasks / data.stats.total_tasks) * 100).toFixed(0) : 0;
        const totalMinutes = moment_1.default.duration(total_estimated, "seconds");
        const totalSeconds = moment_1.default.duration(total_logged, "seconds");
        data.stats.total_estimated_hours_string = (0, utils_1.formatDuration)(totalMinutes);
        data.stats.total_logged_hours_string = (0, utils_1.formatDuration)(totalSeconds);
        data.stats.overlogged_hours = (0, utils_1.formatDuration)(totalMinutes.subtract(totalSeconds));
        return res.status(200).send(new server_response_1.ServerResponse(true, data.stats || {}));
    }
    static async getReportingMemberOverview(req, res) {
        const { includeArchived } = req.query;
        const logged_q = `SELECT get_reporting_member_recently_logged_tasks($1, $2, $3) AS recently_logged_tasks;`;
        const loggedResult = await db_1.default.query(logged_q, [req.params.id, req.user?.id, includeArchived]);
        const [loggedData] = loggedResult.rows;
        const current_q = `SELECT get_reporting_member_current_doing_tasks($1, $2, $3, $4, $5) AS current_tasks;`;
        const currentResult = await db_1.default.query(current_q, [req.params.id, req.user?.id, includeArchived, 10, 0]);
        const [currentData] = currentResult.rows;
        const overdue_q = `SELECT get_reporting_member_current_doing_tasks($1, $2, $3, $4, $5) AS overdue_tasks;`;
        const overdueResult = await db_1.default.query(overdue_q, [req.params.id, req.user?.id, includeArchived, 10, 0]);
        const [overdueData] = overdueResult.rows;
        for (const task of loggedData.recently_logged_tasks) {
            task.logged_time = (0, utils_1.formatDuration)(moment_1.default.duration(task.logged_time, "seconds"));
            task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        for (const task of currentData.current_tasks.data) {
            task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        for (const task of overdueData.overdue_tasks.data) {
            task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
            task.overdue = task.end_date ? (0, moment_1.default)(task.end_date).from((0, moment_1.default)()) : "-";
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, {
            logged_tasks: loggedData.recently_logged_tasks,
            current_tasks: currentData.current_tasks.data,
            overdue_tasks: overdueData.overdue_tasks.data
        }));
    }
    static async getMemberProjects(req, res) {
        const { memberId, teamId } = req.query;
        if (!teamId || !memberId)
            return res.status(200).send(new server_response_1.ServerResponse(true, []));
        const q = `SELECT p.id,
                      p.name,
                      (SELECT name FROM teams WHERE teams.id = p.team_id) AS team,
                      (SELECT COUNT(*)
                       FROM tasks_assignees ta
                              LEFT JOIN tasks t ON ta.task_id = t.id
                       WHERE ta.team_member_id = pm.team_member_id
                         AND t.project_id = p.id)::INT AS assigned_task_count,
                      (SELECT COUNT(*) FROM tasks WHERE tasks.project_id = pm.project_id)::INT AS total_task_count,
                      (SELECT COUNT(*)
                       FROM tasks
                              LEFT JOIN tasks_assignees ta ON tasks.id = ta.task_id
                       WHERE tasks.project_id = pm.project_id
                         AND ta.team_member_id = pm.team_member_id
                         AND tasks.status_id IN
                             (SELECT id
                              FROM task_statuses
                              WHERE category_id IN
                                    (SELECT id FROM sys_task_status_categories WHERE is_done IS TRUE)))::INT AS completed_tasks,
                      (SELECT COUNT(*)
                       FROM tasks
                              LEFT JOIN tasks_assignees ta ON tasks.id = ta.task_id
                       WHERE tasks.project_id = pm.project_id
                         AND ta.team_member_id = pm.team_member_id
                         AND tasks.status_id IN
                             (SELECT id
                              FROM task_statuses
                              WHERE category_id IN
                                    (SELECT id FROM sys_task_status_categories WHERE is_done IS FALSE)))::INT AS incompleted_tasks,
                      (SELECT COUNT(*)
                       FROM tasks
                              LEFT JOIN tasks_assignees ta ON tasks.id = ta.task_id
                       WHERE tasks.project_id = pm.project_id
                         AND ta.team_member_id = pm.team_member_id
                         AND tasks.end_date::DATE < NOW()::DATE
                         AND tasks.status_id IN
                             (SELECT id
                              FROM task_statuses
                              WHERE category_id IN
                                    (SELECT id FROM sys_task_status_categories WHERE is_done IS FALSE)))::INT AS overdue_tasks
               FROM projects p
                      LEFT JOIN project_members pm ON p.id = pm.project_id
               WHERE pm.team_member_id = (SELECT id
                                          FROM team_members
                                          WHERE team_members.team_id = $1
                                            AND user_id = (SELECT user_id FROM team_members WHERE team_members.id = $2));`;
        const result = await db_1.default.query(q, [teamId, memberId]);
        for (const project of result.rows) {
            project.contribution = ((project.assigned_task_count / project.total_task_count) * 100).toFixed(1);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getTasksByProject(req, res) {
        const { memberId, projectId } = req.query;
        if (!projectId || !memberId)
            return res.status(200).send(new server_response_1.ServerResponse(true, []));
        const q = `SELECT name,
                      (SELECT name
                       FROM task_statuses
                       WHERE id = t.status_id) AS status,
                      (SELECT color_code
                       FROM sys_task_status_categories
                       WHERE id =
                             (SELECT category_id FROM task_statuses WHERE id = t.status_id)) AS status_color,
                      end_date AS due_date,
                      completed_at AS completed_date,
                      (total_minutes * 60)::INT AS toal_estimated,
                      (SELECT SUM(time_spent)
                       FROM task_work_log
                       WHERE task_work_log.task_id = t.id)::INT AS total_logged,
                      (t.end_date::DATE < NOW()::DATE AND t.status_id IN
                                                          (SELECT id
                                                           FROM task_statuses
                                                           WHERE category_id IN
                                                                 (SELECT id FROM sys_task_status_categories WHERE is_done IS FALSE))) AS is_overdue

               FROM tasks t
                      LEFT JOIN tasks_assignees ta
                                ON t.id = ta.task_id
               WHERE ta.team_member_id = $1
                 AND t.project_id = $2
               ORDER BY name;`;
        const result = await db_1.default.query(q, [memberId, projectId]);
        for (const task of result.rows) {
            task.overlogged_time = (task.toal_estimated && task.total_logged && task.toal_estimated < task.total_logged) ? (0, utils_1.formatDuration)(moment_1.default.duration((task.toal_estimated - task.total_logged), "seconds")) : "-";
            task.toal_estimated = (0, utils_1.formatDuration)(moment_1.default.duration(task.toal_estimated, "seconds"));
            task.total_logged = (0, utils_1.formatDuration)(moment_1.default.duration(task.total_logged, "seconds"));
            task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getReportingMembersTasks(req, res) {
        const { memberId, teamId } = req.query;
        if (!teamId || !memberId)
            return res.status(200).send(new server_response_1.ServerResponse(true, []));
        const overloggedQ = `SELECT t.id,
                                t.name,
                                (SELECT name
                                 FROM task_statuses
                                 WHERE id = t.status_id) AS status,
                                (SELECT color_code
                                 FROM sys_task_status_categories
                                 WHERE id =
                                       (SELECT category_id FROM task_statuses WHERE id = t.status_id)) AS status_color,
                                (SELECT ABS((total_minutes * 60) -
                                            (SELECT SUM(time_spent) FROM task_work_log WHERE task_id = t.id))) AS overlogged_time,
                                (SELECT get_task_assignees(t.id)) AS assignees

                         FROM tasks t
                                LEFT JOIN projects p ON t.project_id = p.id
                                LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                         WHERE p.team_id = $1
                           AND ta.team_member_id = $2
                           AND ((total_minutes * 60) < (SELECT SUM(time_spent) FROM task_work_log WHERE task_id = t.id))
                         ORDER BY name
                         LIMIT 10;`;
        const earlyQ = `SELECT t.id,
                           t.name,
                           (SELECT name
                            FROM task_statuses
                            WHERE id = t.status_id) AS status,
                           completed_at AS completed_at,
                           t.end_date,
                           (SELECT color_code
                            FROM sys_task_status_categories
                            WHERE id =
                                  (SELECT category_id FROM task_statuses WHERE id = t.status_id)) AS status_color
                    FROM tasks t
                           LEFT JOIN projects p ON t.project_id = p.id
                           LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                    WHERE p.team_id = $1
                      AND ta.team_member_id = $2
                      AND t.end_date::DATE > completed_at::DATE
                      AND t.status_id IN
                          (SELECT id
                           FROM task_statuses
                           WHERE category_id IN
                                 (SELECT id FROM sys_task_status_categories WHERE is_done IS TRUE))
                    ORDER BY name
                    LIMIT 10;`;
        const lateQ = `SELECT t.id,
                          t.name,
                          (SELECT name
                           FROM task_statuses
                           WHERE id = t.status_id) AS status,
                          completed_at AS completed_at,
                          t.end_date,
                          (SELECT color_code
                           FROM sys_task_status_categories
                           WHERE id =
                                 (SELECT category_id FROM task_statuses WHERE id = t.status_id)) AS status_color
                   FROM tasks t
                          LEFT JOIN projects p ON t.project_id = p.id
                          LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                   WHERE p.team_id = $1
                     AND ta.team_member_id = $2
                     AND t.end_date::DATE < completed_at::DATE
                     AND t.status_id IN
                         (SELECT id
                          FROM task_statuses
                          WHERE category_id IN
                                (SELECT id FROM sys_task_status_categories WHERE is_done IS TRUE))
                   ORDER BY name
                   LIMIT 10;`;
        const overloggedResult = await db_1.default.query(overloggedQ, [teamId, memberId]);
        const earlyResult = await db_1.default.query(earlyQ, [teamId, memberId]);
        const lateResult = await db_1.default.query(lateQ, [teamId, memberId]);
        for (const task of overloggedResult.rows) {
            task.overlogged_time = (0, utils_1.formatDuration)(moment_1.default.duration((task.overlogged_time), "seconds"));
            task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
            task.assignees?.forEach((a) => a.color_code = (0, utils_1.getColor)(a.name));
            task.names = this.createTagList(task.assignees);
        }
        for (const task of earlyResult.rows) {
            task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        for (const task of lateResult.rows) {
            task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, {
            overloggedTasks: overloggedResult.rows,
            earlyTasks: earlyResult.rows,
            lateTasks: lateResult.rows
        }));
    }
    static async getProjectsByTeamId(req, res) {
        const q = `SELECT id, name, FALSE AS selected
               FROM projects
               WHERE team_id = $1
               ORDER BY name;`;
        const result = await db_1.default.query(q, [req.params.id]);
        result.rows.forEach((team) => team.selected = true);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getTeamMemberInsightData(team_id, projects, status, search, duration, userId) {
        const searchQuery = search ? `AND TO_TSVECTOR(tmiv.name || ' ' || tmiv.email || ' ' || u.name) @@ TO_TSQUERY('${search}:*')` : "";
        const q = `SELECT ROW_TO_JSON(rec) AS team_members
               FROM (SELECT COUNT(*) AS total,
                            (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                             FROM (SELECT team_members.id,
                                          (SELECT name
                                           FROM team_member_info_view
                                           WHERE team_member_info_view.team_member_id = team_members.id),
                                          u.avatar_url,
                                          (u.socket_id IS NOT NULL) AS is_online,
                                          (SELECT COUNT(DISTINCT project_id)
                                           FROM tasks
                                           WHERE id IN (SELECT task_id
                                                        FROM task_work_log
                                                        WHERE ${duration}
                                                          AND task_work_log.user_id = tmiv.user_id
                                                          AND task_id IN (SELECT id
                                                                          FROM tasks
                                                                          WHERE project_id IN (${projects})
                                                                            AND project_id IN (SELECT id
                                                                                               FROM projects
                                                                                               WHERE team_id = $1)))) AS projects_count,
                                          (SELECT COUNT(DISTINCT task_id)
                                           FROM task_work_log
                                           WHERE ${duration}
                                             AND task_work_log.user_id = tmiv.user_id
                                             AND task_id IN (SELECT id
                                                             FROM tasks
                                                             WHERE project_id IN (${projects})
                                                               AND project_id IN (SELECT id
                                                                                  FROM projects
                                                                                  WHERE team_id = $1))) AS task_count,
                                          (SELECT SUM(time_spent)
                                           FROM task_work_log
                                           WHERE ${duration}
                                             AND task_work_log.user_id = tmiv.user_id
                                             AND task_id IN (SELECT id
                                                             FROM tasks
                                                             WHERE project_id IN (${projects})
                                                               AND project_id IN (SELECT id
                                                                                  FROM projects
                                                                                  WHERE team_id = $1))) AS total_logged_time_seconds,
                                          (SELECT name FROM job_titles WHERE id = team_members.job_title_id) AS job_title,
                                          (SELECT name FROM roles WHERE id = team_members.role_id) AS role_name,
                                          EXISTS(SELECT id
                                                 FROM roles
                                                 WHERE id = team_members.role_id
                                                   AND admin_role IS TRUE) AS is_admin,
                                          (CASE
                                             WHEN team_members.user_id =
                                                  (SELECT user_id FROM teams WHERE id = $1)
                                               THEN TRUE
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
                                                                      WHERE team_members.user_id = tmiv.user_id)
                                                           AND id IN (SELECT team_id
                                                                      FROM team_members
                                                                      WHERE user_id = $2
                                                                        AND role_id IN (SELECT id
                                                                                        FROM roles
                                                                                        WHERE (admin_role IS TRUE OR owner IS TRUE)))))) AS member_teams
                                   FROM team_members
                                          LEFT JOIN users u ON team_members.user_id = u.id
                                          LEFT JOIN team_member_info_view tmiv ON team_members.id = tmiv.team_member_id
                                   WHERE team_members.team_id = $1
                                     ${searchQuery}
                                     AND team_members.id IN
                                         (SELECT team_member_id FROM project_members WHERE project_id IN (${projects}))
                                     AND team_members.id IN (SELECT team_member_id
                                                             FROM project_members
                                                             WHERE project_id IN (SELECT id
                                                                                  FROM projects
                                                                                  WHERE projects.team_id = $1
                                                                                    AND status_id IN (${status})))
                                     AND EXISTS(SELECT id
                                                FROM task_work_log
                                                WHERE ${duration}
                                                  AND task_work_log.user_id = u.id
                                                  AND EXISTS(SELECT 1
                                                             FROM tasks
                                                             WHERE task_id = tasks.id
                                                               AND tasks.project_id IN (${projects})
                                                               AND tasks.project_id IN (SELECT id
                                                                                        FROM projects
                                                                                        WHERE projects.team_id = $1
                                                                                          AND status_id IN
                                                                                              (${status}))))
                                   ORDER BY tmiv.name, tmiv.email, u.name ASC) t) AS team_members
                     FROM team_members
                            LEFT JOIN users u ON team_members.user_id = u.id
                            LEFT JOIN team_member_info_view tmiv ON team_members.id = tmiv.team_member_id
                     WHERE team_members.team_id = $1
                       ${searchQuery}
                       AND team_members.id IN
                           (SELECT team_member_id FROM project_members WHERE project_id IN (${projects}))
                       AND team_members.id IN (SELECT team_member_id
                                               FROM project_members
                                               WHERE project_id IN (SELECT id
                                                                    FROM projects
                                                                    WHERE projects.team_id = $1
                                                                      AND status_id IN (${status})))
                       AND EXISTS(SELECT id
                                  FROM task_work_log
                                  WHERE ${duration}
                                    AND task_work_log.user_id = u.id
                                    AND EXISTS(SELECT 1
                                               FROM tasks
                                               WHERE task_id = tasks.id
                                                 AND tasks.project_id IN (${projects})
                                                 AND tasks.project_id IN (SELECT id
                                                                          FROM projects
                                                                          WHERE projects.team_id = $1
                                                                            AND status_id IN
                                                                                (${status}))))) rec;`;
        const result = await db_1.default.query(q, [team_id, userId]);
        const [data] = result.rows;
        return data.team_members;
    }
    static async getReportingMembers(req, res) {
        const { search, dateRange, projects, status, duration, teamId } = req.body;
        if (!projects.length || !status.length || !duration || !teamId) {
            return res.status(200).send(new server_response_1.ServerResponse(true, { total: 0, data: [] }));
        }
        const projectIds = projects.map((p) => `'${p}'`).join(",");
        const statusIds = status.map((u) => `'${u}'`).join(",");
        const dateRangeClause = ReportingController.getDateRangeClause(duration || LAST_WEEK, dateRange);
        const result = await this.getTeamMemberInsightData(teamId, projectIds, statusIds, search, dateRangeClause || "", req.user?.id);
        result.team_members.map((a) => {
            a.color_code = (0, utils_1.getColor)(a.name);
            a.total_logged_time = (0, utils_1.formatDuration)(moment_1.default.duration(a.total_logged_time_seconds || "0", "seconds"));
        });
        result.data = result.team_members;
        delete result.team_members;
        return res.status(200).send(new server_response_1.ServerResponse(true, result));
    }
    static async getProjectsOfMember(projectIds, statusIds, dateRangeClause, memberId) {
        const q = `SELECT p.name,
                      COUNT(*) AS logged_task_count,
                      SUM(time_spent) AS total_logged_time,
                      p.id,
                      color_code,
                      (SELECT name FROM teams WHERE teams.id = p.team_id) AS team
               FROM task_work_log
                      LEFT JOIN tasks t ON task_work_log.task_id = t.id
                      LEFT JOIN projects p ON t.project_id = p.id
               WHERE task_work_log.user_id = (SELECT user_id
                                              FROM team_members
                                              WHERE id = $1
                                                AND team_members.team_id = p.team_id)
                 AND p.id IN (${projectIds})
                 AND p.status_id IN (${statusIds})
                 AND ${dateRangeClause}
               GROUP BY p.id;`;
        const result = await db_1.default.query(q, [memberId,]);
        result.rows.forEach((element) => {
            element.total_logged_time = (0, utils_1.formatDuration)(moment_1.default.duration(element.total_logged_time || "0", "seconds"));
        });
        return result.rows;
    }
    static async getProjectsByMember(req, res) {
        const { dateRange, projects, status, duration, memberId } = req.body;
        const projectIds = projects.map((p) => `'${p}'`).join(",");
        const statusIds = status.map((u) => `'${u}'`).join(",");
        const dateRangeClause = ReportingController.getDateRangeClause(duration || LAST_WEEK, dateRange);
        const data = await this.getProjectsOfMember(projectIds, statusIds, dateRangeClause, memberId);
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async exportMembers(req, res) {
        const { duration, team, start, end } = req.query;
        const { searchQuery } = this.toPaginationOptions(req.query, "name");
        const projects = req.query.projects?.split(",");
        const status = req.query.status?.split(",");
        const projectIds = projects.map((p) => `'${p}'`).join(",");
        const statusIds = status.map((u) => `'${u}'`).join(",");
        const dateRange = [];
        if (start && end) {
            dateRange.push(start, end);
        }
        const dateRangeClause = ReportingController.getDateRangeClause(duration || LAST_WEEK, dateRange);
        const data = await this.getTeamMemberInsightData(team, projectIds, statusIds, searchQuery, dateRangeClause || "", req.user?.id);
        for (const teamMember of data.team_members) {
            teamMember.color_code = (0, utils_1.getColor)(teamMember.name);
            teamMember.total_logged_time = (0, utils_1.formatDuration)(moment_1.default.duration(teamMember.total_logged_time_seconds || "0", "seconds"));
            teamMember.projects = await this.getProjectsOfMember(projectIds, statusIds, dateRangeClause, teamMember.id);
        }
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `Team Member Reporting - ${exportDate} `;
        const workbook = new exceljs_1.default.Workbook();
        for (const item of data.team_members) {
            const sheet = workbook.addWorksheet(item.name.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "_"));
            sheet.columns = [
                { header: "Project", key: "project", width: 30 },
                { header: "Team", key: "team", width: 20 },
                { header: "Logged Task Count", key: "task_count", width: 20 },
                { header: "Total Logged Time", key: "logged_time", width: 20 },
            ];
            sheet.getCell("A1").value = `Team Member : ${item.name}`;
            sheet.mergeCells("A1:D1");
            sheet.getCell("A1").alignment = { horizontal: "center" };
            sheet.getCell("A1").style.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "D9D9D9" }
            };
            sheet.getCell("A1").font = {
                size: 16
            };
            sheet.getCell("A2").value = `Exported on : ${exportDate}`;
            sheet.mergeCells("A2:D2");
            sheet.getCell("A2").alignment = { horizontal: "center" };
            sheet.getCell("A2").style.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "F2F2F2" }
            };
            sheet.getCell("A2").font = {
                size: 12
            };
            const start = dateRange[0] ? (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD") : "-";
            const end = dateRange[1] ? (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD") : "-";
            sheet.getCell("A3").value = `From : ${start} To : ${end}`;
            sheet.mergeCells("A3:D3");
            sheet.getRow(4).values = [
                "Project",
                "Team",
                "Logged Task Count",
                "Total Logged Time"
            ];
            sheet.getRow(4).font = {
                bold: true
            };
            for (const project of item.projects) {
                sheet.addRow({
                    project: project.name,
                    team: project.team,
                    task_count: project.logged_task_count,
                    logged_time: project.total_logged_time
                });
            }
        }
        res.setHeader("Content-Type", "application/vnd.openxmlformats");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res)
            .then(() => {
            res.end();
        });
    }
    static async getHoursLoggedForProject(req, res) {
        const q = `SELECT twl.user_id,
                      (SELECT SUM(time_spent)) AS logged_time,
                      (SELECT name FROM users WHERE id = twl.user_id)
               FROM task_work_log twl
                      LEFT JOIN tasks t ON twl.task_id = t.id
                      LEFT JOIN projects p ON t.project_id = p.id
               WHERE p.id = $1
               GROUP BY twl.user_id;`;
        const result = await db_1.default.query(q, [req.params?.id]);
        const obj = [];
        const names = [];
        for (const member of result.rows) {
            const memberLog = [];
            memberLog.push(member.name, member.logged_time ? parseFloat(moment_1.default.duration(member.logged_time, "seconds").asHours().toFixed(2)) : 0);
            names.push(member.name);
            obj.push(memberLog);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, { names, data: obj }));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getEstimatedVsActualTime", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getReportingOverviewStats", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getReportingProjectStats", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getReportingTeams", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getProjectsByTeam", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getEstimatedVsLogged", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getAllocation", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getMyTeams", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getCategoriesByTeams", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getProjectsByTeams", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "exportOverviewExcel", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "exportAllocation", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getActiveProjects", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getOverdueProjects", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getReportingCustom", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getProjectDetailsById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "exportProjects", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getUnAssignedUsers", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getMembersWithOverDueTasks", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getReportingMemberStats", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getReportingMemberOverview", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getMemberProjects", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getTasksByProject", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getReportingMembersTasks", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getProjectsByTeamId", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getReportingMembers", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getProjectsByMember", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "exportMembers", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingController, "getHoursLoggedForProject", null);
exports.default = ReportingController;
