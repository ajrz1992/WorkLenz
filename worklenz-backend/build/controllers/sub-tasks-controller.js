"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const constants_1 = require("../shared/constants");
const utils_1 = require("../shared/utils");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class SubTasksController extends worklenz_controller_base_1.default {
    static async getNames(req, res) {
        const q = `SELECT name FROM tasks WHERE archived IS FALSE AND parent_task_id = $1;`;
        const result = await db_1.default.query(q, [req.params.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async get(req, res) {
        const q = `
        SELECT t.id,
              t.name,
              t.description,
              t.project_id,
              t.parent_task_id,
              t.priority_id AS priority,
              tp.name AS priority_name,
              t.end_date,
              (ts.id) AS status,
              (ts.name) AS status_name,
              TRUE AS is_sub_task,
              (tsc.color_code) AS status_color,
              (SELECT name FROM projects WHERE id = t.project_id) AS project_name,
              (SELECT value FROM task_priorities WHERE id = t.priority_id) AS priority_value,
              total_minutes,
              (SELECT SUM(time_spent) FROM task_work_log WHERE task_id = t.id) AS total_minutes_spent,
              (SELECT get_task_assignees(t.id)) AS assignees,
              (SELECT ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(r)))
              FROM (SELECT task_labels.label_id AS id,
                           (SELECT name FROM team_labels WHERE id = task_labels.label_id),
                           (SELECT color_code FROM team_labels WHERE id = task_labels.label_id)
                    FROM task_labels
                    WHERE task_id = t.id
                    ORDER BY name) r) AS labels,
              (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
                FROM (SELECT task_statuses.id, task_statuses.name, stsc.color_code
                      FROM task_statuses
                              INNER JOIN sys_task_status_categories stsc ON task_statuses.category_id = stsc.id
                      WHERE project_id = t.project_id
                      ORDER BY task_statuses.name) rec) AS statuses
        FROM tasks t
                INNER JOIN task_statuses ts ON ts.id = t.status_id
                INNER JOIN task_priorities tp ON tp.id = t.priority_id
                LEFT JOIN sys_task_status_categories tsc ON ts.category_id = tsc.id
        WHERE parent_task_id = $1
        ORDER BY created_at;
      `;
        const result = await db_1.default.query(q, [req.params.id]);
        for (const task of result.rows) {
            task.priority_color = constants_1.PriorityColorCodes[task.priority_value] || null;
            task.time_spent = { hours: Math.floor(task.total_minutes_spent / 60), minutes: task.total_minutes_spent % 60 };
            task.time_spent_string = `${task.time_spent.hours}h ${task.time_spent.minutes}m`;
            task.total_time_string = `${Math.floor(task.total_minutes / 60)}h ${task.total_minutes % 60}m`;
            task.assignees.map((a) => a.color_code = (0, utils_1.getColor)(a.name));
            task.names = this.createTagList(task.assignees);
            task.labels = this.createTagList(task.labels, 2);
            task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
            task.priority_color = task.priority_color + constants_1.TASK_PRIORITY_COLOR_ALPHA;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getSubTasksRoadMap(req, res) {
        const dates = req.body;
        const q = `
        SELECT tasks.id,
              tasks.name,
              tasks.start_date,
              tasks.end_date,
              tp.name AS priority,
              tasks.end_date,
              (SELECT name FROM task_statuses WHERE id = tasks.status_id) AS status,
              (SELECT color_code
                FROM sys_task_status_categories
                WHERE id = (SELECT category_id FROM task_statuses WHERE id = tasks.status_id)) AS status_color,
              (SELECT get_task_assignees(tasks.id)) AS assignees
        FROM tasks
                INNER JOIN task_statuses ts ON ts.task_id = tasks.id
                INNER JOIN task_priorities tp ON tp.id = tasks.priority_id
        WHERE archived IS FALSE AND parent_task_id = $1
        ORDER BY created_at DESC;
      `;
        const result = await db_1.default.query(q, [req.params.id]);
        const maxInlineNames = 4;
        for (const task of result.rows) {
            task.assignees.map((a) => a.color_code = (0, utils_1.getColor)(a.name));
            task.names = this.createTagList(task.assignees);
            if (task?.assignees.length <= maxInlineNames) {
                const min = dates.findIndex((date) => (0, moment_1.default)(task.start_date).isSame(date.date, "days"));
                const max = dates.findIndex((date) => (0, moment_1.default)(task.end_date).isSame(date.date, "days"));
                task.min = min + 1;
                task.max = max > 0 ? max + 2 : max;
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], SubTasksController, "getNames", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], SubTasksController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], SubTasksController, "getSubTasksRoadMap", null);
exports.default = SubTasksController;
