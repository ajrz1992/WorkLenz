"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const utils_1 = require("../shared/utils");
class GanttController extends worklenz_controller_base_1.default {
    static async getPhaseLabel(req, res) {
        const q = `SELECT phase_label
        FROM projects
        WHERE id = $1;`;
        const result = await db_1.default.query(q, [req.query.project_id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async get(req, res) {
        const q = `SELECT id AS "TaskID",
       name AS "TaskName",
       start_date AS "StartDate",
       end_date AS "EndDate",
       (SELECT name FROM task_statuses WHERE id = tasks.status_id) AS status,
       (SELECT color_code
        FROM sys_task_status_categories
        WHERE id = (SELECT category_id FROM task_statuses WHERE id = tasks.status_id)),
       (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
        FROM (SELECT id AS "TaskID",
                     name AS "TaskName",
                     start_date AS "StartDate",
                     end_date AS "EndDate",
                     (SELECT name FROM task_statuses WHERE id = tasks.status_id) AS status,
                     (SELECT color_code
                      FROM sys_task_status_categories
                      WHERE id = (SELECT category_id FROM task_statuses WHERE id = tasks.status_id))
              FROM tasks t
              WHERE t.parent_task_id = tasks.id) rec) AS subtasks
        FROM tasks
        WHERE archived IS FALSE
          AND project_id = $1
          AND parent_task_id IS NULL
        ORDER BY roadmap_sort_order, created_at DESC;`;
        const result = await db_1.default.query(q, [req.query.project_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getPhasesByProject(req, res) {
        const q = `SELECT name AS label,
       (SELECT MIN(start_date)
        FROM tasks
        WHERE id IN (SELECT task_id FROM task_phase WHERE phase_id = project_phases.id)) as day
      FROM project_phases
      WHERE project_id = $1;`;
        const result = await db_1.default.query(q, [req.params.id]);
        for (const phase of result.rows) {
            phase.day = new Date(phase.day);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getWorkload(req, res) {
        const q = `SELECT pm.id AS "TaskID",
       tmiv.team_member_id,
       name AS "TaskName",
       avatar_url,
       email,
       TRUE as project_member,
       (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
        FROM (SELECT id AS "TaskID",
                     name AS "TaskName",
                     start_date AS "StartDate",
                     end_date AS "EndDate"
              FROM tasks
                       INNER JOIN tasks_assignees ta ON tasks.id = ta.task_id
              WHERE archived IS FALSE
                AND project_id = pm.project_id
                AND ta.team_member_id = tmiv.team_member_id
              ORDER BY roadmap_sort_order, start_date DESC) rec) AS subtasks
      FROM project_members pm
              INNER JOIN team_member_info_view tmiv ON pm.team_member_id = tmiv.team_member_id
      WHERE project_id = $1
      ORDER BY tmiv.name;`;
        const result = await db_1.default.query(q, [req.query.project_id]);
        for (const member of result.rows) {
            member.color_code = (0, utils_1.getColor)(member.TaskName);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], GanttController, "getPhaseLabel", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], GanttController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], GanttController, "getPhasesByProject", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], GanttController, "getWorkload", null);
exports.default = GanttController;
