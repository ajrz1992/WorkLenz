"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBy = void 0;
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const worklenz_controller_base_1 = tslib_1.__importDefault(require("../worklenz-controller-base"));
const moment_timezone_1 = tslib_1.__importDefault(require("moment-timezone"));
exports.GroupBy = {
    STATUS: "status",
    PRIORITY: "priority",
    LABELS: "labels",
    PHASE: "phase"
};
class RoadmapTasksControllerV2Base extends worklenz_controller_base_1.default {
    static updateTaskViewModel(task, globalStartDate, globalDateWidth, timeZone) {
        if (typeof task.sub_tasks_count === "undefined")
            task.sub_tasks_count = "0";
        task.is_sub_task = !!task.parent_task_id;
        task.show_sub_tasks = false;
        if (task.start_date)
            task.start_date = moment_timezone_1.default.tz(task.start_date, `${timeZone}`).format("YYYY-MM-DD");
        if (task.end_date)
            task.end_date = moment_timezone_1.default.tz(task.end_date, `${timeZone}`).format("YYYY-MM-DD");
        this.setTaskCss(task, globalStartDate, globalDateWidth);
        task.isVisible = true;
        return task;
    }
    static setTaskCss(task, globalStartDate, globalDateWidth) {
        let startDate = task.start_date ? (0, moment_1.default)(task.start_date).format("YYYY-MM-DD") : (0, moment_1.default)();
        let endDate = task.end_date ? (0, moment_1.default)(task.end_date).format("YYYY-MM-DD") : (0, moment_1.default)();
        if (!task.start_date) {
            startDate = (0, moment_1.default)(task.end_date).format("YYYY-MM-DD");
        }
        if (!task.end_date) {
            endDate = (0, moment_1.default)(task.start_date).format("YYYY-MM-DD");
        }
        if (!task.start_date && !task.end_date) {
            startDate = (0, moment_1.default)().format("YYYY-MM-DD");
            endDate = (0, moment_1.default)().format("YYYY-MM-DD");
        }
        const fStartDate = (0, moment_1.default)(startDate);
        const fEndDate = (0, moment_1.default)(endDate);
        const fGlobalStartDate = (0, moment_1.default)(globalStartDate).format("YYYY-MM-DD");
        const daysDifferenceFromStart = fStartDate.diff(fGlobalStartDate, "days");
        task.offset_from = daysDifferenceFromStart * globalDateWidth;
        if ((0, moment_1.default)(fStartDate).isSame((0, moment_1.default)(fEndDate), "day")) {
            task.width = globalDateWidth;
        }
        else {
            const taskWidth = fEndDate.diff(fStartDate, "days");
            task.width = (taskWidth + 1) * globalDateWidth;
        }
        return task;
    }
}
exports.default = RoadmapTasksControllerV2Base;
