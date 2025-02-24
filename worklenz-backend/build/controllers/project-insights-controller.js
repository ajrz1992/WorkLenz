"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const constants_1 = require("../shared/constants");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const utils_1 = require("../shared/utils");
const moment_1 = tslib_1.__importDefault(require("moment"));
class ProjectInsightsController extends worklenz_controller_base_1.default {
    static async getById(req, res) {
        const { archived } = req.query;
        const q = `SELECT get_project_overview_data($1, $2) AS overview;`;
        const result = await db_1.default.query(q, [req.params.id, archived === "true"]);
        const [data] = result.rows;
        const { total_minutes_sum, time_spent_sum } = data.overview;
        const totalMinutes = moment_1.default.duration(total_minutes_sum, "minutes");
        const totalSeconds = moment_1.default.duration(time_spent_sum, "seconds");
        data.overview.total_estimated_hours_string = (0, utils_1.formatDuration)(totalMinutes);
        data.overview.total_logged_hours_string = (0, utils_1.formatDuration)(totalSeconds);
        data.overview.overlogged_hours = (0, utils_1.formatDuration)(totalMinutes.subtract(totalSeconds));
        return res.status(200).send(new server_response_1.ServerResponse(true, data.overview));
    }
    static async getMemberInsightsByProjectId(req, res) {
        const { archived } = req.query;
        const q = `SELECT get_project_member_insights($1, $2) AS overview;`;
        const result = await db_1.default.query(q, [req.params.id, archived === "true"]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data.overview));
    }
    static async getLastUpdatedtasks(req, res) {
        const { archived } = req.query;
        const q = `SELECT get_last_updated_tasks_by_project($1, $2, $3, $4) AS last_updated;`;
        const result = await db_1.default.query(q, [req.params.id, 10, 0, archived]);
        const [data] = result.rows;
        for (const task of data.last_updated) {
            task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data.last_updated));
    }
    static async getProjectLogs(req, res) {
        const q = `SELECT description, created_at
               FROM project_logs
               WHERE project_id = $1
               ORDER BY created_at DESC
               LIMIT $2 OFFSET $3;`;
        const result = await db_1.default.query(q, [req.params.id, 10, 0]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getStatusOverview(req, res) {
        const { archived } = req.query;
        const q = `
      SELECT task_statuses.id,
             task_statuses.name,
             stsc.color_code
      FROM task_statuses
             INNER JOIN sys_task_status_categories stsc ON task_statuses.category_id = stsc.id
      WHERE project_id = $1
        AND team_id = $2
      ORDER BY task_statuses.sort_order;`;
        const status = await db_1.default.query(q, [req.params.id, req.user?.team_id]);
        const statusCounts = [];
        for (const element of status.rows) {
            const q = `SELECT COUNT(*)
                 FROM tasks
                 WHERE status_id = $1
                   AND CASE
                         WHEN ($2 IS TRUE) THEN project_id IS NOT NULL
                         ELSE archived IS FALSE END;`;
            const count = await db_1.default.query(q, [element.id, archived === "true"]);
            const [data] = count.rows;
            statusCounts.push({ name: element.name, color: element.color_code, y: parseInt(data.count) });
            element.status_color = element.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, statusCounts || []));
    }
    static async getPriorityOverview(req, res) {
        const { archived } = req.query;
        const q = `SELECT id, name, value
               FROM task_priorities
               ORDER BY value;`;
        const result = await db_1.default.query(q, []);
        for (const item of result.rows)
            item.color_code = constants_1.PriorityColorCodes[item.value] || constants_1.PriorityColorCodes["0"];
        const statusCounts = [];
        for (const element of result.rows) {
            const q = `SELECT COUNT(*)
                 FROM tasks
                 WHERE priority_id = $1
                   AND CASE
                         WHEN ($3 IS TRUE) THEN project_id IS NOT NULL
                         ELSE archived IS FALSE END
                   AND project_id = $2;`;
            const count = await db_1.default.query(q, [element.id, req.params.id, archived === "true"]);
            const [data] = count.rows;
            statusCounts.push({ name: element.name, color: element.color_code, data: [parseInt(data.count)] });
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, statusCounts || []));
    }
    static async getOverdueTasks(req, res) {
        const { archived } = req.query;
        const q = `
      SELECT id,
             name,
             status_id AS status,
             end_date,
             priority_id AS priority,
             (SELECT name FROM task_statuses WHERE id = tasks.status_id) AS status_name,
             updated_at,
             NOW()::DATE - end_date::DATE AS days_overdue,
             (SELECT color_code
              FROM sys_task_status_categories
              WHERE id = (SELECT category_id FROM task_statuses WHERE id = status_id)) AS status_color
      FROM tasks
      WHERE project_id = $1
        AND end_date::DATE < NOW()::DATE
        AND CASE
              WHEN ($2 IS TRUE) THEN project_id IS NOT NULL
              ELSE archived IS FALSE END
        AND status_id IN (SELECT id
                          FROM task_statuses
                          WHERE project_id = $1
                            AND category_id IN
                                (SELECT id
                                 FROM sys_task_status_categories
                                 WHERE sys_task_status_categories.is_done IS FALSE));
    `;
        const result = await db_1.default.query(q, [req.params.id, archived]);
        for (const element of result.rows) {
            element.status_color = element.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getTasksFinishedEarly(req, res) {
        const { archived } = req.query;
        const q = `
      SELECT id,
             name,
             status_id AS status,
             end_date,
             priority_id AS priority,
             (SELECT name FROM task_statuses WHERE id = tasks.status_id) AS status_name,
             updated_at,
             completed_at,
             (SELECT color_code
              FROM sys_task_status_categories
              WHERE id = (SELECT category_id FROM task_statuses WHERE id = status_id)) AS status_color
      FROM tasks
      WHERE project_id = $1
        AND completed_at::DATE < end_date::DATE
        AND CASE
              WHEN ($2 IS TRUE) THEN project_id IS NOT NULL
              ELSE archived IS FALSE END
        AND status_id IN (SELECT id
                          FROM task_statuses
                          WHERE project_id = $1
                            AND category_id IN
                                (SELECT id
                                 FROM sys_task_status_categories
                                 WHERE sys_task_status_categories.is_done IS TRUE));
    `;
        const result = await db_1.default.query(q, [req.params.id, archived]);
        for (const element of result.rows) {
            element.status_color = element.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getTasksFinishedLate(req, res) {
        const { archived } = req.query;
        const q = `
      SELECT id,
             name,
             status_id AS status,
             end_date,
             priority_id AS priority,
             (SELECT name FROM task_statuses WHERE id = tasks.status_id) AS status_name,
             updated_at,
             completed_at,
             (SELECT color_code
              FROM sys_task_status_categories
              WHERE id = (SELECT category_id FROM task_statuses WHERE id = status_id)) AS status_color
      FROM tasks
      WHERE project_id = $1
        AND completed_at::DATE > end_date::DATE
        AND CASE
              WHEN ($2 IS TRUE) THEN project_id IS NOT NULL
              ELSE archived IS FALSE END
        AND status_id IN (SELECT id
                          FROM task_statuses
                          WHERE project_id = $1
                            AND category_id IN
                                (SELECT id
                                 FROM sys_task_status_categories
                                 WHERE sys_task_status_categories.is_done IS TRUE));
    `;
        const result = await db_1.default.query(q, [req.params.id, archived]);
        for (const element of result.rows) {
            element.status_color = element.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
    static async getTasksByProjectMember(req, res) {
        const { member_id, project_id, archived } = req.body;
        const q = `SELECT get_tasks_by_project_member($1, $2, $3)`;
        const result = await db_1.default.query(q, [project_id || null, member_id || null, archived]);
        const [data] = result.rows;
        for (const element of data.get_tasks_by_project_member) {
            element.status_color = element.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
            element.total_minutes = (0, utils_1.formatDuration)(moment_1.default.duration(~~(element.total_minutes), "minutes"));
            element.overlogged_time = (0, utils_1.formatDuration)(moment_1.default.duration(element.overlogged_time, "seconds"));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data.get_tasks_by_project_member || []));
    }
    static async getProjectDeadlineStats(req, res) {
        const { archived } = req.query;
        const q = `SELECT get_project_deadline_tasks($1, $2);`;
        const result = await db_1.default.query(q, [req.params.id || null, archived === "true"]);
        const [data] = result.rows;
        for (const task of data.get_project_deadline_tasks.tasks) {
            task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        const logged_hours = data.get_project_deadline_tasks.deadline_logged_hours || 0;
        data.get_project_deadline_tasks.deadline_logged_hours_string = (0, utils_1.formatDuration)(moment_1.default.duration(logged_hours, "seconds"));
        return res.status(200).send(new server_response_1.ServerResponse(true, data.get_project_deadline_tasks || {}));
    }
    static async getOverloggedTasksByProject(req, res) {
        const { archived } = req.query;
        const q = `
      WITH work_log AS (SELECT task_id, SUM(time_spent) AS total_time_spent
                        FROM task_work_log
                        GROUP BY task_id)
      SELECT id,
             name,
             status_id AS status,
             (SELECT name FROM task_statuses WHERE id = tasks.status_id) AS status_name,
             end_date,
             priority_id AS priority,
             updated_at,
             (work_log.total_time_spent - (total_minutes * 60)) AS overlogged_time,
             (SELECT color_code
              FROM sys_task_status_categories
              WHERE id = (SELECT category_id FROM task_statuses WHERE id = status_id)) AS status_color,
             (SELECT get_task_assignees(tasks.id)) AS assignees
      FROM tasks
             JOIN work_log ON work_log.task_id = tasks.id
      WHERE project_id = $1
        AND CASE
              WHEN ($2 IS TRUE) THEN project_id IS NOT NULL
              ELSE archived IS FALSE END
        AND total_minutes < work_log.total_time_spent;
    `;
        const result = await db_1.default.query(q, [req.params.id || null, archived]);
        for (const task of result.rows) {
            task.overlogged_time_string = (0, utils_1.formatDuration)(moment_1.default.duration(task.overlogged_time, "seconds"));
            task.assignees.map((a) => a.color_code = (0, utils_1.getColor)(a.name));
            task.names = this.createTagList(task.assignees);
            task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows || []));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectInsightsController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectInsightsController, "getLastUpdatedtasks", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectInsightsController, "getProjectLogs", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectInsightsController, "getStatusOverview", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectInsightsController, "getPriorityOverview", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectInsightsController, "getOverdueTasks", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectInsightsController, "getTasksFinishedEarly", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectInsightsController, "getTasksFinishedLate", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectInsightsController, "getTasksByProjectMember", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectInsightsController, "getProjectDeadlineStats", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectInsightsController, "getOverloggedTasksByProject", null);
exports.default = ProjectInsightsController;
