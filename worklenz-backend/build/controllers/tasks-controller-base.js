"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBy = void 0;
const tslib_1 = require("tslib");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const utils_1 = require("../shared/utils");
const constants_1 = require("../shared/constants");
const moment_1 = tslib_1.__importDefault(require("moment/moment"));
exports.GroupBy = {
    STATUS: "status",
    PRIORITY: "priority",
    LABELS: "labels",
    PHASE: "phase"
};
class TasksControllerBase extends worklenz_controller_base_1.default {
    static calculateTaskCompleteRatio(totalCompleted, totalTasks) {
        if (totalCompleted === 0 && totalTasks === 0)
            return 0;
        const ratio = ((totalCompleted / totalTasks) * 100);
        return ratio == Infinity ? 100 : ratio.toFixed();
    }
    static updateTaskViewModel(task) {
        task.progress = ~~(task.total_minutes_spent / task.total_minutes * 100);
        task.overdue = task.total_minutes < task.total_minutes_spent;
        task.time_spent = { hours: ~~(task.total_minutes_spent / 60), minutes: task.total_minutes_spent % 60 };
        task.comments_count = Number(task.comments_count) ? +task.comments_count : 0;
        task.attachments_count = Number(task.attachments_count) ? +task.attachments_count : 0;
        if (typeof task.sub_tasks_count === "undefined")
            task.sub_tasks_count = "0";
        task.is_sub_task = !!task.parent_task_id;
        task.time_spent_string = `${task.time_spent.hours}h ${(task.time_spent.minutes)}m`;
        task.total_time_string = `${~~(task.total_minutes / 60)}h ${(task.total_minutes % 60)}m`;
        task.name_color = (0, utils_1.getColor)(task.name);
        task.priority_color = constants_1.PriorityColorCodes[task.priority_value] || constants_1.PriorityColorCodes["0"];
        task.show_sub_tasks = false;
        if (task.phase_id) {
            task.phase_color = task.phase_color_code
                ? task.phase_color_code : (0, utils_1.getColor)(task.phase_name) + constants_1.TASK_PRIORITY_COLOR_ALPHA;
        }
        if (Array.isArray(task.assignees)) {
            for (const assignee of task.assignees) {
                assignee.color_code = (0, utils_1.getColor)(assignee.name);
            }
        }
        task.names = TasksControllerBase.createTagList(task.assignees);
        task.all_labels = task.labels;
        task.labels = TasksControllerBase.createTagList(task.labels, 2);
        task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        task.priority_color = task.priority_color + constants_1.TASK_PRIORITY_COLOR_ALPHA;
        if (task.timer_start_time)
            task.timer_start_time = (0, moment_1.default)(task.timer_start_time).valueOf();
        const totalCompleted = +task.completed_sub_tasks + +task.parent_task_completed;
        const totalTasks = +task.sub_tasks_count + 1;
        task.complete_ratio = TasksControllerBase.calculateTaskCompleteRatio(totalCompleted, totalTasks);
        task.completed_count = totalCompleted;
        task.total_tasks_count = totalTasks;
        task.width = 35;
        if (task.chart_start) {
            const fToday = (0, moment_1.default)().format("YYYY-MM-DD");
            task.offset_from = ((0, moment_1.default)(fToday).diff(task.chart_start, "days")) * 35;
        }
        return task;
    }
}
exports.default = TasksControllerBase;
