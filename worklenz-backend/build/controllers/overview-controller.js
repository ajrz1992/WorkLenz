"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class OverviewController extends worklenz_controller_base_1.default {
    static async getById(req, res) {
        const q = `
      SELECT id,
             name,
             color_code,
             notes,
             (SELECT name FROM clients WHERE id = projects.client_id) AS client_name,

             (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
              FROM (SELECT team_member_id AS id,
                           (SELECT task_id
                            FROM tasks_assignees
                            WHERE EXISTS(SELECT id FROM tasks WHERE project_id = $1)
                              AND project_member_id = id) AS task_count,
                           (SELECT name
                            FROM users
                            WHERE id =
                                  (SELECT user_id
                                   FROM team_members
                                   WHERE team_member_id = project_members.team_member_id)),
                           (SELECT name
                            FROM job_titles
                            WHERE id = (SELECT job_title_id
                                        FROM team_members
                                        WHERE id = project_members.team_member_id)) AS job_title
                    FROM project_members
                    WHERE project_id = projects.id
                    ORDER BY name ASC) rec) AS members,

             (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
              FROM (SELECT id, name, done FROM tasks WHERE project_id = projects.id ORDER BY name ASC) rec) AS tasks
      FROM projects
      WHERE id = $1
        AND team_id = $2;
    `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id || null]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], OverviewController, "getById", null);
exports.default = OverviewController;
