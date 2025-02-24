"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_task_name_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const notifications_service_1 = require("../../services/notifications/notifications.service");
const events_1 = require("../events");
const util_1 = require("../util");
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
async function on_task_name_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const userId = (0, util_1.getLoggedInUserIdFromSocket)(socket);
        const name = (body.name || "").trim();
        const task_data = await (0, activity_logs_service_1.getTaskDetails)(body.task_id, "name");
        const q = `SELECT handle_task_name_change($1, $2, $3) AS response;`;
        const result = await db_1.default.query(q, [body.task_id, name, userId]);
        const [d] = result.rows;
        const response = d.response || {};
        for (const member of response.members || []) {
            if (member.user_id === userId)
                continue;
            notifications_service_1.NotificationsService.createNotification({
                userId: member.user_id,
                teamId: member.team_id,
                socketId: member.socket_id,
                message: response.message,
                taskId: body.task_id,
                projectId: response.project_id
            });
        }
        socket.emit(events_1.SocketEvents.TASK_NAME_CHANGE.toString(), {
            id: body.task_id,
            parent_task: body.parent_task,
            name: response.name
        });
        (0, util_1.notifyProjectUpdates)(socket, body.task_id);
        (0, activity_logs_service_1.logNameChange)({
            task_id: body.task_id,
            socket,
            new_value: response.name,
            old_value: task_data.name
        });
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_task_name_change = on_task_name_change;
