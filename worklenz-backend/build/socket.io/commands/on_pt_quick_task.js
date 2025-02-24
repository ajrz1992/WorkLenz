"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_pt_quick_task = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const utils_1 = require("../../shared/utils");
const constants_1 = require("../../shared/constants");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const pt_tasks_controller_1 = tslib_1.__importDefault(require("../../controllers/project-templates/pt-tasks-controller"));
function updatePhaseInfo(model, body) {
    model.phase_id = body.phase_id;
    if (model.phase_name) {
        model.phase_color = (0, utils_1.getColor)(model.phase_name) + constants_1.TASK_STATUS_COLOR_ALPHA;
    }
}
async function on_pt_quick_task(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const q = `SELECT create_quick_pt_task($1) AS task`;
        body.name = (body.name || "").trim();
        body.priority_id = body.priority_id?.trim() || null;
        body.status_id = body.status_id?.trim() || null;
        body.phase_id = body.phase_id?.trim() || null;
        if (body.priority_id === constants_1.UNMAPPED)
            body.priority_id = null;
        if (body.phase_id === constants_1.UNMAPPED)
            body.phase_id = null;
        if (body.status_id === constants_1.UNMAPPED)
            body.status_id = null;
        if (body.name.length > 0) {
            body.total_minutes = (0, utils_1.toMinutes)(body.total_hours, body.total_minutes);
            const result = await db_1.default.query(q, [JSON.stringify(body)]);
            const [d] = result.rows;
            if (d.task) {
                const model = pt_tasks_controller_1.default.updateTaskViewModel(d.task);
                updatePhaseInfo(model, body);
                socket.emit(events_1.SocketEvents.PT_QUICK_TASK.toString(), model);
            }
        }
    }
    catch (e) {
        (0, util_1.log_error)(e);
    }
    socket.emit(events_1.SocketEvents.PT_QUICK_TASK.toString(), null);
}
exports.on_pt_quick_task = on_pt_quick_task;
