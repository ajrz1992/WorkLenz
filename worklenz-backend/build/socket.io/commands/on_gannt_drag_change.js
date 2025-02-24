"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_gannt_drag_change = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const moment_1 = tslib_1.__importDefault(require("moment"));
const moment_timezone_1 = tslib_1.__importDefault(require("moment-timezone"));
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
async function on_gannt_drag_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const chartStartDate = (0, moment_1.default)(body.chart_start);
        const taskStartDate = chartStartDate.add(body.from_start, "days");
        const taskEndDate = (0, moment_1.default)(taskStartDate).add(body.task_duration - 1, "days");
        const task_start_date_data = await (0, activity_logs_service_1.getTaskDetails)(body.task_id, "start_date");
        const task_end_date_data = await (0, activity_logs_service_1.getTaskDetails)(body.task_id, "end_date");
        const q = `UPDATE tasks SET start_date = $2, end_date = $3 WHERE id = $1 RETURNING start_date, end_date`;
        const result = await db_1.default.query(q, [body.task_id, taskStartDate, taskEndDate]);
        const [d] = result.rows;
        socket.emit(events_1.SocketEvents.GANNT_DRAG_CHANGE.toString(), {
            task_id: body.task_id,
            task_width: body.task_width,
            task_offset: body.task_offset,
            start_date: d.start_date,
            end_date: d.end_date,
            group_id: body.group_id
        });
        (0, util_1.notifyProjectUpdates)(socket, body.task_id);
        (0, activity_logs_service_1.logStartDateChange)({
            task_id: body.task_id,
            socket,
            new_value: body.time_zone && d.start_date ? moment_timezone_1.default.tz(d.start_date, `${body.time_zone}`) : d.start_date,
            old_value: body.time_zone && task_start_date_data.start_date ? moment_timezone_1.default.tz(task_start_date_data.start_date, `${body.time_zone}`) : task_start_date_data.start_date
        });
        (0, activity_logs_service_1.logEndDateChange)({
            task_id: body.task_id,
            socket,
            new_value: body.time_zone && d.end_date ? moment_timezone_1.default.tz(d.end_date, `${body.time_zone}`) : d.end_date,
            old_value: body.time_zone && task_end_date_data.end_date ? moment_timezone_1.default.tz(task_end_date_data.end_date, `${body.time_zone}`) : task_end_date_data.end_date
        });
    }
    catch (e) {
        (0, util_1.log_error)(e);
    }
}
exports.on_gannt_drag_change = on_gannt_drag_change;
