"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBy = void 0;
const tslib_1 = require("tslib");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("../worklenz-controller-base"));
const utils_1 = require("../../shared/utils");
const constants_1 = require("../../shared/constants");
exports.GroupBy = {
    STATUS: "status",
    PRIORITY: "priority",
    LABELS: "labels",
    PHASE: "phase"
};
class PtTasksControllerBase extends worklenz_controller_base_1.default {
    static updateTaskViewModel(task) {
        task.time_spent = { hours: ~~(task.total_minutes_spent / 60), minutes: task.total_minutes_spent % 60 };
        if (typeof task.sub_tasks_count === "undefined")
            task.sub_tasks_count = "0";
        task.is_sub_task = !!task.parent_task_id;
        task.total_time_string = `${~~(task.total_minutes / 60)}h ${(task.total_minutes % 60)}m`;
        task.priority_color = constants_1.PriorityColorCodes[task.priority_value] || constants_1.PriorityColorCodes["0"];
        task.show_sub_tasks = false;
        if (task.phase_id) {
            task.phase_color = task.phase_color
                ? task.phase_color + constants_1.TASK_PRIORITY_COLOR_ALPHA : (0, utils_1.getColor)(task.phase_name) + constants_1.TASK_PRIORITY_COLOR_ALPHA;
        }
        task.all_labels = task.labels;
        task.labels = PtTasksControllerBase.createTagList(task.labels, 2);
        task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        task.priority_color = task.priority_color + constants_1.TASK_PRIORITY_COLOR_ALPHA;
        return task;
    }
}
exports.default = PtTasksControllerBase;
