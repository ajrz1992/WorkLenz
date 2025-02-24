"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
class AccessControlsController extends worklenz_controller_base_1.default {
    static async getRoles(req, res) {
        const q = `SELECT id, name, default_role, admin_role FROM roles WHERE team_id = $1 AND owner IS FALSE ORDER BY name;`;
        const result = await db_1.default.query(q, [req.user?.team_id || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], AccessControlsController, "getRoles", null);
exports.default = AccessControlsController;
