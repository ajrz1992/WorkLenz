"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const tasks_controller_utils_1 = require("../shared/tasks-controller-utils");
const utils_1 = require("../shared/utils");
class ResourceallocationController extends worklenz_controller_base_1.default {
    static async getProjectWiseResources(req, res) {
        const { start, end } = req.query;
        const dates = await (0, tasks_controller_utils_1.getDatesForResourceAllocation)(start, end);
        const months = await (0, tasks_controller_utils_1.getWeekRange)(dates);
        const q = `SELECT get_project_wise_resources($1, $2, $3) as resources;`;
        const result = await db_1.default.query(q, [start, (0, moment_1.default)(dates.length && dates.at(-1)?.date).format("YYYY-MM-DD") || end, req.user?.team_id || null]);
        const [data] = result.rows;
        const scheduleData = JSON.parse(data.resources);
        for (const element of scheduleData) {
            for (const schedule of element.schedule) {
                const min = dates.findIndex((date) => (0, moment_1.default)(schedule.date_series).isSame(date.date, "days")) || 0;
                schedule.min = min + 1;
            }
            for (const task of element.unassigned_tasks) {
                const min = dates.findIndex((date) => (0, moment_1.default)(task.date_series).isSame(date.date, "days")) || 0;
                task.min = min + 1;
            }
            for (const member of element.project_members) {
                for (const task of member.tasks) {
                    const min = dates.findIndex((date) => (0, moment_1.default)(task.date_series).isSame(date.date, "days")) || 0;
                    task.min = min + 1;
                }
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, { projects: scheduleData, dates, months }));
    }
    static async getUserWiseResources(req, res) {
        const { start, end } = req.query;
        const dates = await (0, tasks_controller_utils_1.getDatesForResourceAllocation)(start, end);
        const months = await (0, tasks_controller_utils_1.getWeekRange)(dates);
        const q = `SELECT get_team_wise_resources($1, $2, $3) as resources;`;
        const result = await db_1.default.query(q, [start, (0, moment_1.default)(dates.length && dates.at(-1)?.date).format("YYYY-MM-DD") || end, req.user?.team_id || null]);
        const [data] = result.rows;
        const scheduleData = JSON.parse(data.resources);
        const obj = [];
        for (const element of scheduleData) {
            element.color_code = (0, utils_1.getColor)(element.name);
            for (const schedule of element.schedule) {
                const min = dates.findIndex((date) => (0, moment_1.default)(schedule.date_series).isSame(date.date, "days")) || 0;
                schedule.min = min + 1;
            }
            for (const member of element.project_members) {
                for (const task of member.tasks) {
                    const min = dates.findIndex((date) => (0, moment_1.default)(task.date_series).isSame(date.date, "days")) || 0;
                    task.min = min + 1;
                }
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, { projects: scheduleData, dates, months }));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ResourceallocationController, "getProjectWiseResources", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ResourceallocationController, "getUserWiseResources", null);
exports.default = ResourceallocationController;
