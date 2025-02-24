"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBy = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("../../shared/constants");
const utils_1 = require("../../shared/utils");
const worklenz_controller_base_1 = tslib_1.__importDefault(require(".././worklenz-controller-base"));
exports.GroupBy = {
    STATUS: "status",
    PRIORITY: "priority",
    LABELS: "labels",
    PHASE: "phase"
};
class ScheduleTasksControllerBase extends worklenz_controller_base_1.default {
    static calculateTaskCompleteRatio(totalCompleted, totalTasks) {
        if (totalCompleted === 0 && totalTasks === 0)
            return 0;
        const ratio = ((totalCompleted / totalTasks) * 100);
        return ratio == Infinity ? 100 : ratio.toFixed();
    }
    static updateTaskViewModel(task) {
        task.progress = ~~(task.total_minutes_spent / task.total_minutes * 100);
        task.overdue = task.total_minutes < task.total_minutes_spent;
        if (typeof task.sub_tasks_count === "undefined")
            task.sub_tasks_count = "0";
        task.is_sub_task = !!task.parent_task_id;
        task.name_color = (0, utils_1.getColor)(task.name);
        task.priority_color = constants_1.PriorityColorCodes[task.priority_value] || constants_1.PriorityColorCodes["0"];
        task.show_sub_tasks = false;
        if (task.phase_id) {
            task.phase_color = task.phase_name
                ? (0, utils_1.getColor)(task.phase_name) + constants_1.TASK_PRIORITY_COLOR_ALPHA
                : null;
        }
        if (Array.isArray(task.assignees)) {
            for (const assignee of task.assignees) {
                assignee.color_code = (0, utils_1.getColor)(assignee.name);
            }
        }
        task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        task.priority_color = task.priority_color + constants_1.TASK_PRIORITY_COLOR_ALPHA;
        const totalCompleted = +task.completed_sub_tasks + +task.parent_task_completed;
        const totalTasks = +task.sub_tasks_count + 1;
        task.complete_ratio = ScheduleTasksControllerBase.calculateTaskCompleteRatio(totalCompleted, totalTasks);
        task.completed_count = totalCompleted;
        task.total_tasks_count = totalTasks;
        return task;
    }
}
exports.default = ScheduleTasksControllerBase;
