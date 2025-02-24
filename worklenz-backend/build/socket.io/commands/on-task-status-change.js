"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_task_status_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const notifications_service_1 = require("../../services/notifications/notifications.service");
const constants_1 = require("../../shared/constants");
const events_1 = require("../events");
const util_1 = require("../util");
const tasks_controller_v2_1 = tslib_1.__importDefault(require("../../controllers/tasks-controller-v2"));
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
const on_quick_assign_or_remove_1 = require("./on-quick-assign-or-remove");
async function on_task_status_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const userId = (0, util_1.getLoggedInUserIdFromSocket)(socket);
        const task_data = await (0, activity_logs_service_1.getTaskDetails)(body.task_id, "status_id");
        const q2 = "SELECT handle_on_task_status_change($1, $2, $3) AS res;";
        const results1 = await db_1.default.query(q2, [userId, body.task_id, body.status_id]);
        const [d] = results1.rows;
        const changeResponse = d.res;
        changeResponse.color_code = changeResponse.color_code + constants_1.TASK_STATUS_COLOR_ALPHA;
        for (const member of changeResponse.members || []) {
            if (member.user_id === userId)
                continue;
            notifications_service_1.NotificationsService.createNotification({
                userId: member.user_id,
                teamId: member.team_id,
                socketId: member.socket_id,
                message: changeResponse.message,
                taskId: body.task_id,
                projectId: changeResponse.project_id
            });
        }
        const info = await tasks_controller_v2_1.default.getTaskCompleteRatio(body.parent_task || body.task_id);
        socket.emit(events_1.SocketEvents.TASK_STATUS_CHANGE.toString(), {
            id: body.task_id,
            parent_task: body.parent_task,
            color_code: changeResponse.color_code,
            complete_ratio: info?.ratio,
            completed_count: info?.total_completed,
            total_tasks_count: info?.total_tasks,
            status_id: body.status_id,
            completed_at: changeResponse.completed_at,
            statusCategory: changeResponse.status_category
        });
        socket.emit(events_1.SocketEvents.GET_TASK_PROGRESS.toString(), {
            id: body.task_id,
            parent_task: body.parent_task,
            complete_ratio: info?.ratio,
            completed_count: info?.total_completed,
            total_tasks_count: info?.total_tasks
        });
        const isAlreadyAssigned = await tasks_controller_v2_1.default.checkUserAssignedToTask(body.task_id, userId, body.team_id);
        if (!isAlreadyAssigned) {
            await (0, on_quick_assign_or_remove_1.assignMemberIfNot)(body.task_id, userId, body.team_id, _io, socket);
        }
        (0, activity_logs_service_1.logStatusChange)({
            task_id: body.task_id,
            socket,
            new_value: body.status_id,
            old_value: task_data.status_id
        });
        (0, util_1.notifyProjectUpdates)(socket, body.task_id);
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_task_status_change = on_task_status_change;
