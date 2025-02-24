"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const constants_1 = require("../shared/constants");
class TaskPrioritiesController extends worklenz_controller_base_1.default {
    static async get(_req, res) {
        const q = `SELECT id, name, value From task_priorities ORDER BY value;`;
        const result = await db_1.default.query(q, []);
        for (const item of result.rows)
            item.color_code = constants_1.PriorityColorCodes[item.value] || constants_1.PriorityColorCodes["0"];
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getById(_req, res) {
        const q = `SELECT id, name From priorities WHERE id=$1;`;
        const result = await db_1.default.query(q, [_req.params.id]);
        const data = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskPrioritiesController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskPrioritiesController, "getById", null);
exports.default = TaskPrioritiesController;
