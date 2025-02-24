"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_pt_task_time_estimation_change = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
async function on_pt_task_time_estimation_change(_io, socket, data) {
    try {
        const q = `UPDATE cpt_tasks SET total_minutes = $2 WHERE id = $1 RETURNING total_minutes;`;
        const body = JSON.parse(data);
        const hours = body.total_hours || 0;
        const minutes = body.total_minutes || 0;
        const totalMinutes = (hours * 60) + minutes;
        const result = await db_1.default.query(q, [body.task_id, totalMinutes]);
        const d = {
            id: body.task_id,
            total_time_string: `${hours}h ${minutes}m`
        };
        socket.emit(events_1.SocketEvents.PT_TASK_TIME_ESTIMATION_CHANGE.toString(), d);
    }
    catch (e) {
        (0, util_1.log_error)(e);
    }
}
exports.on_pt_task_time_estimation_change = on_pt_task_time_estimation_change;
