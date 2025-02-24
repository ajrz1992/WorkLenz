"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_project_subscriber_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
const tasks_controller_v2_1 = tslib_1.__importDefault(require("../../controllers/tasks-controller-v2"));
async function on_project_subscriber_change(_io, socket, data) {
    if (!data)
        return;
    try {
        const isSubscribe = data.mode == 0;
        const q = isSubscribe
            ? `INSERT INTO project_subscribers (user_id, project_id, team_member_id)
         VALUES ($1, $2, $3);`
            : `DELETE
         FROM project_subscribers
         WHERE user_id = $1
           AND project_id = $2
           AND team_member_id = $3;`;
        await db_1.default.query(q, [data.user_id, data.project_id, data.team_member_id]);
        const subscribers = await tasks_controller_v2_1.default.getTaskSubscribers(data.project_id);
        socket.emit(events_1.SocketEvents.PROJECT_SUBSCRIBERS_CHANGE.toString(), subscribers);
        return;
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_project_subscriber_change = on_project_subscriber_change;
