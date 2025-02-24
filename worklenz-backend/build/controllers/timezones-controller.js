"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class TimezonesController extends worklenz_controller_base_1.default {
    static async get(_req, res) {
        const q = `SELECT id, name, abbrev, utc_offset FROM timezones ORDER BY name;`;
        const result = await db_1.default.query(q, []);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async update(req, res) {
        const q = `UPDATE users SET timezone_id = $2 WHERE id = $1;`;
        const result = await db_1.default.query(q, [req.user?.id, req.body.timezone]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows, "Timezone updated"));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TimezonesController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TimezonesController, "update", null);
exports.default = TimezonesController;
