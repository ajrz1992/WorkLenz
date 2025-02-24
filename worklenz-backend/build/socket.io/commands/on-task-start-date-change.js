"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_task_start_date_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
const moment_timezone_1 = tslib_1.__importDefault(require("moment-timezone"));
async function on_task_start_date_change(_io, socket, data) {
    try {
        const q = `UPDATE tasks
               SET start_date = $2
               WHERE id = $1
               RETURNING start_date, end_date;`;
        const body = JSON.parse(data);
        const task_data = await (0, activity_logs_service_1.getTaskDetails)(body.task_id, "start_date");
        const result = await db_1.default.query(q, [body.task_id, body.start_date]);
        const [d] = result.rows;
        socket.emit(events_1.SocketEvents.TASK_START_DATE_CHANGE.toString(), {
            id: body.task_id,
            start_date: d.start_date,
            parent_task: body.parent_task,
            end_date: d.end_date,
            group_id: body.group_id
        });
        (0, util_1.notifyProjectUpdates)(socket, body.task_id);
        (0, activity_logs_service_1.logStartDateChange)({
            task_id: body.task_id,
            socket,
            new_value: body.time_zone && d.start_date ? moment_timezone_1.default.tz(d.start_date, `${body.time_zone}`) : d.start_date,
            old_value: body.time_zone && task_data.start_date ? moment_timezone_1.default.tz(task_data.start_date, `${body.time_zone}`) : task_data.start_date
        });
        return;
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
    socket.emit(events_1.SocketEvents.TASK_START_DATE_CHANGE.toString(), null);
}
exports.on_task_start_date_change = on_task_start_date_change;
