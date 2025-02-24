"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class PersonalOverviewController extends worklenz_controller_base_1.default {
    static async getTasksDueToday(req, res) {
        const q = `
        SELECT id,
              name,
              (SELECT name FROM projects WHERE project_id = projects.id) AS project_name,
              (SELECT name FROM task_statuses WHERE id = t.status_id) AS status,
              (SELECT task_priorities.name FROM task_priorities WHERE id = t.priority_id) AS priority,
              start_date,
              end_date
        FROM tasks t
                JOIN tasks_assignees ta ON t.id = ta.task_id
        WHERE t.archived IS FALSE AND t.end_date::DATE = NOW()::DATE
          AND is_member_of_project(t.project_id, $2, $1)
        ORDER BY end_date DESC
        LIMIT 5;
      `;
        const result = await db_1.default.query(q, [req.user?.team_id || null, req.user?.id || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getTasksRemaining(req, res) {
        const q = `
    SELECT id,
          name,
          (SELECT name FROM projects WHERE project_id = projects.id) AS project_name,
          (SELECT name FROM task_statuses WHERE id = t.status_id) AS status,
          (SELECT task_priorities.name FROM task_priorities WHERE id = t.priority_id) AS priority,
          start_date,
          end_date
    FROM tasks t
            JOIN tasks_assignees ta ON t.id = ta.task_id
    WHERE t.archived IS FALSE AND t.end_date::DATE > NOW()::DATE
      AND is_member_of_project(t.project_id, $2, $1)
    ORDER BY end_date DESC
    LIMIT 5;
  `;
        const result = await db_1.default.query(q, [req.user?.team_id || null, req.user?.id || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getTaskOverview(req, res) {
        const q = `
    SELECT id,
     name,
     color_code,
     (SELECT MIN(start_date) FROM tasks WHERE archived IS FALSE AND project_id = projects.id) AS min_date,
     (SELECT MAX(end_date) FROM tasks WHERE archived IS FALSE AND project_id = projects.id)   AS max_date
    FROM projects
    WHERE team_id = $1
      AND (CASE
               WHEN (is_owner($2, $1) OR
                     is_admin($2, $1)) THEN TRUE
               ELSE is_member_of_project(projects.id, $2,
                                         $1) END)
    ORDER BY NAME;
  `;
        const result = await db_1.default.query(q, [req.user?.team_id || null, req.user?.id || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PersonalOverviewController, "getTasksDueToday", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PersonalOverviewController, "getTasksRemaining", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PersonalOverviewController, "getTaskOverview", null);
exports.default = PersonalOverviewController;
