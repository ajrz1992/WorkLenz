"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const utils_1 = require("../shared/utils");
class ActivitylogsController extends worklenz_controller_base_1.default {
    static async get(req, res) {
        const { id } = req.params;
        const q = `SELECT get_activity_logs_by_task($1) AS activity_logs;`;
        const result = await db_1.default.query(q, [id]);
        const [data] = result.rows;
        for (const log of data.activity_logs.logs) {
            if (log.attribute_type === "estimation") {
                log.previous = (0, utils_1.formatDuration)(moment_1.default.duration(log.previous, "minutes"));
                log.current = (0, utils_1.formatDuration)(moment_1.default.duration(log.current, "minutes"));
            }
            if (log.assigned_user)
                log.assigned_user.color_code = (0, utils_1.getColor)(log.assigned_user.name);
            log.done_by.color_code = (0, utils_1.getColor)(log.done_by.name);
            log.log_text = await (0, utils_1.formatLogText)(log);
            log.attribute_type = log.attribute_type?.replace(/_/g, " ");
        }
        data.activity_logs.color_code = (0, utils_1.getColor)(data.activity_logs.name);
        return res.status(200).send(new server_response_1.ServerResponse(true, data.activity_logs));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ActivitylogsController, "get", null);
exports.default = ActivitylogsController;
