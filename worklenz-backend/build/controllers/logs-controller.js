"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class LogsController extends worklenz_controller_base_1.default {
    static async getActivityLog(req, res) {
        const q = `
      SELECT description, (SELECT name FROM projects WHERE projects.id = project_logs.project_id) AS project_name, created_at
      FROM project_logs
      WHERE team_id = $1
        AND (CASE
                WHEN (is_owner($2, $1) OR
                      is_admin($2, $1)) THEN TRUE
                ELSE is_member_of_project(project_id, $2, $1) END)
      ORDER BY created_at DESC
      LIMIT 5;
    `;
        const result = await db_1.default.query(q, [req.user?.team_id || null, req.user?.id || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], LogsController, "getActivityLog", null);
exports.default = LogsController;
