"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
class ProjectManagersController extends worklenz_controller_base_1.default {
    static async getByOrg(_req, res) {
        const q = `SELECT DISTINCT ON (tm.user_id)
                    tm.user_id AS id,
                    u.name,
                    pm.team_member_id
                FROM
                    projects p
                JOIN project_members pm ON p.id = pm.project_id
                JOIN teams t ON p.team_id = t.id
                JOIN team_members tm ON pm.team_member_id = tm.id
                JOIN team_member_info_view tmi ON tm.id = tmi.team_member_id
                JOIN users u ON tm.user_id = u.id
                WHERE
                    t.id IN (SELECT id FROM teams WHERE in_organization(id, $1))
                    AND pm.project_access_level_id = (SELECT id FROM project_access_levels WHERE key = 'PROJECT_MANAGER')
                GROUP BY
                    tm.user_id, u.name, pm.team_member_id`;
        const result = await db_1.default.query(q, [_req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectManagersController, "getByOrg", null);
exports.default = ProjectManagersController;
