"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_time_estimation_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const tasks_controller_1 = tslib_1.__importDefault(require("../../controllers/tasks-controller"));
const events_1 = require("../events");
const util_1 = require("../util");
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
async function on_time_estimation_change(_io, socket, data) {
    try {
        const q = `UPDATE tasks SET total_minutes = $2 WHERE id = $1 RETURNING total_minutes;`;
        const body = JSON.parse(data);
        const hours = body.total_hours || 0;
        const minutes = body.total_minutes || 0;
        const totalMinutes = (hours * 60) + minutes;
        const task_data = await (0, activity_logs_service_1.getTaskDetails)(body.task_id, "total_minutes");
        const result0 = await db_1.default.query(q, [body.task_id, totalMinutes]);
        const [data0] = result0.rows;
        const result = await db_1.default.query("SELECT SUM(time_spent) AS total_minutes_spent FROM task_work_log WHERE task_id = $1;", [body.task_id]);
        const [dd] = result.rows;
        const d = {
            id: body.task_id,
            total_minutes: totalMinutes,
            total_hours: hours,
            parent_task: body.parent_task,
            total_minutes_spent: dd.total_minutes_spent || 0
        };
        socket.emit(events_1.SocketEvents.TASK_TIME_ESTIMATION_CHANGE.toString(), tasks_controller_1.default.updateTaskViewModel(d));
        (0, util_1.notifyProjectUpdates)(socket, d.id);
        (0, activity_logs_service_1.logTotalMinutes)({
            task_id: body.task_id,
            socket,
            new_value: totalMinutes,
            old_value: task_data.total_minutes
        });
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_time_estimation_change = on_time_estimation_change;
