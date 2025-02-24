"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_task_sort_order_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
const tasks_controller_1 = tslib_1.__importDefault(require("../../controllers/tasks-controller"));
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
const tasks_controller_base_1 = require("../../controllers/tasks-controller-base");
const constants_1 = require("../../shared/constants");
const tasks_controller_v2_1 = tslib_1.__importDefault(require("../../controllers/tasks-controller-v2"));
const on_quick_assign_or_remove_1 = require("./on-quick-assign-or-remove");
function notifyStatusChange(socket, config) {
    const userId = (0, util_1.getLoggedInUserIdFromSocket)(socket);
    if (userId && config.to_group) {
        void tasks_controller_1.default.notifyStatusChange(userId, config.task_id, config.to_group);
    }
}
async function emitSortOrderChange(data, socket) {
    const q = `
    SELECT id, sort_order
    FROM tasks
    WHERE project_id = $1
    ORDER BY sort_order;
  `;
    const tasks = await db_1.default.query(q, [data.project_id]);
    socket.emit(events_1.SocketEvents.TASK_SORT_ORDER_CHANGE.toString(), tasks.rows);
}
function updateUnmappedStatus(config) {
    if (config.to_group === constants_1.UNMAPPED)
        config.to_group = null;
    if (config.from_group === constants_1.UNMAPPED)
        config.from_group = null;
}
async function on_task_sort_order_change(_io, socket, data) {
    try {
        const q = `SELECT handle_task_list_sort_order_change($1);`;
        const config = {
            from_index: data.from_index,
            to_index: data.to_index,
            task_id: data.task.id,
            from_group: data.from_group,
            to_group: data.to_group,
            project_id: data.project_id,
            group_by: data.group_by,
            to_last_index: Boolean(data.to_last_index)
        };
        if (config.group_by === tasks_controller_base_1.GroupBy.STATUS) {
            notifyStatusChange(socket, config);
        }
        if (config.group_by === tasks_controller_base_1.GroupBy.PHASE) {
            updateUnmappedStatus(config);
        }
        await db_1.default.query(q, [JSON.stringify(config)]);
        await emitSortOrderChange(data, socket);
        if (config.group_by === tasks_controller_base_1.GroupBy.STATUS) {
            const userId = (0, util_1.getLoggedInUserIdFromSocket)(socket);
            const isAlreadyAssigned = await tasks_controller_v2_1.default.checkUserAssignedToTask(data.task.id, userId, data.team_id);
            if (!isAlreadyAssigned) {
                await (0, on_quick_assign_or_remove_1.assignMemberIfNot)(data.task.id, userId, data.team_id, _io, socket);
            }
        }
        if (config.group_by === tasks_controller_base_1.GroupBy.PHASE) {
            void (0, activity_logs_service_1.logPhaseChange)({
                task_id: data.task.id,
                socket,
                new_value: data.to_group,
                old_value: data.from_group
            });
        }
        if (config.group_by === tasks_controller_base_1.GroupBy.STATUS) {
            void (0, activity_logs_service_1.logStatusChange)({
                task_id: data.task.id,
                socket,
                new_value: data.to_group,
                old_value: data.from_group
            });
        }
        if (config.group_by === tasks_controller_base_1.GroupBy.PRIORITY) {
            void (0, activity_logs_service_1.logPriorityChange)({
                task_id: data.task.id,
                socket,
                new_value: data.to_group,
                old_value: data.from_group
            });
        }
        void (0, util_1.notifyProjectUpdates)(socket, config.task_id);
        return;
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
    socket.emit(events_1.SocketEvents.TASK_SORT_ORDER_CHANGE.toString(), []);
}
exports.on_task_sort_order_change = on_task_sort_order_change;
