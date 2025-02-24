"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_task_timer_stop = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
async function on_task_timer_stop(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const userId = (0, util_1.getLoggedInUserIdFromSocket)(socket);
        const q = `
    DO
    $$
        DECLARE
            _start_time TIMESTAMPTZ;
            _time_spent NUMERIC;
        BEGIN

            SELECT start_time FROM task_timers WHERE user_id = '${userId}' AND task_id = '${body.task_id}' INTO _start_time;

            _time_spent = COALESCE(EXTRACT(EPOCH FROM
                                           (DATE_TRUNC('second', (CURRENT_TIMESTAMP - _start_time::TIMESTAMPTZ)))::INTERVAL),
                                   0);

            IF (_time_spent > 0)
            THEN
                INSERT INTO task_work_log (time_spent, task_id, user_id, logged_by_timer, created_at)
                VALUES (_time_spent, '${body.task_id}', '${userId}', TRUE, _start_time);
            END IF;

            DELETE FROM task_timers WHERE user_id = '${userId}' AND task_id = '${body.task_id}';
        END
    $$;
    `;
        await db_1.default.query(q, []);
        socket.emit(events_1.SocketEvents.TASK_TIMER_STOP.toString(), {
            id: body.task_id,
            parent_task: body.parent_task,
        });
        (0, util_1.notifyProjectUpdates)(socket, body.task_id);
        return;
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
    socket.emit(events_1.SocketEvents.TASK_TIMER_STOP.toString(), null);
}
exports.on_task_timer_stop = on_task_timer_stop;
