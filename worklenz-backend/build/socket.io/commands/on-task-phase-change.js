"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_task_phase_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const constants_1 = require("../../shared/constants");
const events_1 = require("../events");
const util_1 = require("../util");
const utils_1 = require("../../shared/utils");
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
async function on_task_phase_change(_io, socket, body) {
    try {
        if (!body?.task_id)
            return;
        const q2 = `SELECT handle_on_task_phase_change($1, $2) AS res;`;
        const phaseId = !body.phase_id || (body.phase_id === constants_1.UNMAPPED) ? null : body.phase_id;
        const task_data = await (0, activity_logs_service_1.getTaskPhaseDetails)(body.task_id);
        const result = await db_1.default.query(q2, [body.task_id, phaseId]);
        const [d] = result.rows;
        const changeResponse = d.res;
        changeResponse.color_code = changeResponse.color_code
            ? changeResponse.color_code : (0, utils_1.getColor)(changeResponse.name) + constants_1.TASK_STATUS_COLOR_ALPHA;
        socket.emit(events_1.SocketEvents.TASK_PHASE_CHANGE.toString(), {
            id: body.phase_id,
            task_id: body.task_id,
            parent_task: body.parent_task,
            color_code: changeResponse.color_code,
            status_id: body.status_id
        });
        (0, activity_logs_service_1.logPhaseChange)({
            task_id: body.task_id,
            socket,
            new_value: phaseId ? phaseId : null,
            old_value: task_data.phase_id ? task_data.phase_id : null
        });
        void (0, util_1.notifyProjectUpdates)(socket, body.task_id);
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_task_phase_change = on_task_phase_change;
