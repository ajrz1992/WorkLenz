"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class ProjectHealthController extends worklenz_controller_base_1.default {
    static async get(_req, res) {
        const q = `SELECT id, name, color_code, is_default FROM sys_project_healths ORDER BY sort_order;`;
        const result = await db_1.default.query(q, []);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectHealthController, "get", null);
exports.default = ProjectHealthController;
