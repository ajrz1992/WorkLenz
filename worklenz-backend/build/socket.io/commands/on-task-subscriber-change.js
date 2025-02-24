"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_task_subscriber_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
const tasks_controller_v2_1 = tslib_1.__importDefault(require("../../controllers/tasks-controller-v2"));
async function on_task_subscriber_change(_io, socket, data) {
    if (!data)
        return;
    try {
        const isSubscribe = data.mode == 0;
        const q = isSubscribe
            ? `INSERT INTO task_subscribers (user_id, task_id, team_member_id, action)
         VALUES ($1, $2, $3, 'WHEN_DONE');`
            : `DELETE
         FROM task_subscribers
         WHERE user_id = $1
           AND task_id = $2
           AND team_member_id = $3;`;
        await db_1.default.query(q, [data.user_id, data.task_id, data.team_member_id]);
        const subscribers = await tasks_controller_v2_1.default.getTaskSubscribers(data.task_id);
        socket.emit(events_1.SocketEvents.TASK_SUBSCRIBERS_CHANGE.toString(), subscribers);
        return;
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_task_subscriber_change = on_task_subscriber_change;
