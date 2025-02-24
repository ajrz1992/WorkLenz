"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_quick_task = exports.getTaskCompleteInfo = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const utils_1 = require("../../shared/utils");
const events_1 = require("../events");
const util_1 = require("../util");
const tasks_controller_v2_1 = tslib_1.__importDefault(require("../../controllers/tasks-controller-v2"));
const constants_1 = require("../../shared/constants");
const moment_1 = tslib_1.__importDefault(require("moment"));
const moment_timezone_1 = tslib_1.__importDefault(require("moment-timezone"));
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
async function getTaskCompleteInfo(task) {
    if (!task)
        return null;
    const q2 = "SELECT get_task_complete_info($1, $2) AS res;";
    const result2 = await db_1.default.query(q2, [task.id, null]);
    const [d2] = result2.rows;
    task.completed_count = d2.res.total_completed || 0;
    if (task.sub_tasks_count > 0)
        task.sub_tasks_count = d2.res.total_tasks;
    return task;
}
exports.getTaskCompleteInfo = getTaskCompleteInfo;
async function updateCompleteInfo(data, model) {
    const info = await tasks_controller_v2_1.default.getTaskCompleteRatio(data.task.parent_task_id || data.task.id);
    if (info) {
        model.complete_ratio = info.ratio;
        model.completed_count = info.total_completed;
        model.total_tasks_count = info.total_tasks;
    }
}
function updatePhaseInfo(model, body) {
    model.phase_id = body.phase_id;
}
function createGaantTask(body) {
    const fromStart = Math.floor(body.offset) / 35;
    const duration = Math.floor(body.width) / 35;
    const chartStartDate = (0, moment_1.default)(body.chart_start);
    body.start_date = chartStartDate.add(fromStart, "days").format("YYYY-MM-DD").trim();
    body.end_date = (0, moment_1.default)(body.start_date).add(duration - 1, "days").format("YYYY-MM-DD").trim();
    return body;
}
async function on_quick_task(_io, socket, data) {
    try {
        const q = `SELECT create_quick_task($1) AS task;`;
        const body = JSON.parse(data);
        body.name = (body.name || "").trim();
        body.priority_id = body.priority_id?.trim() || null;
        body.status_id = body.status_id?.trim() || null;
        body.phase_id = body.phase_id?.trim() || null;
        body.end_date = body.end_date?.trim() || null;
        if (body.priority_id === constants_1.UNMAPPED)
            body.priority_id = null;
        if (body.phase_id === constants_1.UNMAPPED)
            body.phase_id = null;
        if (body.status_id === constants_1.UNMAPPED)
            body.status_id = null;
        if (body.is_dragged)
            createGaantTask(body);
        if (body.name.length > 0) {
            body.total_minutes = (0, utils_1.toMinutes)(body.total_hours, body.total_minutes);
            const result = await db_1.default.query(q, [JSON.stringify(body)]);
            const [d] = result.rows;
            if (d.task) {
                if (body.chart_start) {
                    d.task.chart_start = (0, moment_1.default)(body.chart_start).format("YYYY-MM-DD");
                }
                const model = tasks_controller_v2_1.default.updateTaskViewModel(d.task);
                await updateCompleteInfo(d, model);
                updatePhaseInfo(model, body);
                socket.emit(events_1.SocketEvents.QUICK_TASK.toString(), model);
                if (body.is_dragged) {
                    (0, activity_logs_service_1.logStartDateChange)({
                        task_id: d.task.id,
                        socket,
                        new_value: body.time_zone && d.task.start_date ? moment_timezone_1.default.tz(d.task.start_date, `${body.time_zone}`) : d.task.start_date,
                        old_value: null
                    });
                    (0, activity_logs_service_1.logEndDateChange)({
                        task_id: d.task.id,
                        socket,
                        new_value: body.time_zone && d.task.end_date ? moment_timezone_1.default.tz(d.task.end_date, `${body.time_zone}`) : d.task.end_date,
                        old_value: null
                    });
                }
                (0, activity_logs_service_1.logStatusChange)({
                    task_id: d.task.id,
                    socket,
                    new_value: d.task.status,
                    old_value: null
                });
                (0, util_1.notifyProjectUpdates)(socket, d.task.id);
            }
        }
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
    socket.emit(events_1.SocketEvents.QUICK_TASK.toString(), null);
}
exports.on_quick_task = on_quick_task;
