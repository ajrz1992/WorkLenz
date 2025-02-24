"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_get_task_progress = void 0;
const tslib_1 = require("tslib");
const events_1 = require("../events");
const util_1 = require("../util");
const tasks_controller_v2_1 = tslib_1.__importDefault(require("../../controllers/tasks-controller-v2"));
async function on_get_task_progress(_io, socket, taskId) {
    try {
        const task = {};
        task.id = taskId;
        const info = await tasks_controller_v2_1.default.getTaskCompleteRatio(task.parent_task_id || task.id);
        if (info) {
            task.complete_ratio = info.ratio;
            task.completed_count = info.total_completed;
            task.total_tasks_count = info.total_tasks;
        }
        return socket.emit(events_1.SocketEvents.GET_TASK_PROGRESS.toString(), task);
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
    socket.emit(events_1.SocketEvents.GET_TASK_PROGRESS.toString(), null);
}
exports.on_get_task_progress = on_get_task_progress;
