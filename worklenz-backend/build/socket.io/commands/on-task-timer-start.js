"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_task_timer_start = void 0;
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
async function on_task_timer_start(_io, socket, data) {
    try {
        const q = `
    INSERT INTO task_timers (task_id, user_id, start_time)
    VALUES ($1, $2, CURRENT_TIMESTAMP)
    ON CONFLICT ON CONSTRAINT task_timers_pk DO UPDATE SET start_time = CURRENT_TIMESTAMP
    RETURNING start_time;
    `;
        const body = JSON.parse(data);
        const userId = (0, util_1.getLoggedInUserIdFromSocket)(socket);
        const result = await db_1.default.query(q, [body.task_id, userId]);
        const [d] = result.rows;
        socket.emit(events_1.SocketEvents.TASK_TIMER_START.toString(), {
            id: body.task_id,
            timer_start_time: (0, moment_1.default)(d.start_time).valueOf(),
            parent_task: body.parent_task,
        });
        (0, util_1.notifyProjectUpdates)(socket, body.task_id);
        return;
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
    socket.emit(events_1.SocketEvents.TASK_TIMER_START.toString(), null);
}
exports.on_task_timer_start = on_task_timer_start;
