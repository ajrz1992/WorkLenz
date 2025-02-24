"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_pt_task_phase_change = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const constants_1 = require("../../shared/constants");
const events_1 = require("../events");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
async function on_pt_task_phase_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        if (!body?.task_id)
            return;
        const q2 = `SELECT handle_on_pt_task_phase_change($1, $2) AS res;`;
        const phaseId = !body.phase_id || (body.phase_id === constants_1.UNMAPPED) ? null : body.phase_id;
        const result = await db_1.default.query(q2, [body.task_id, phaseId]);
        const [d] = result.rows;
        const changeResponse = d.res;
        socket.emit(events_1.SocketEvents.PT_TASK_PHASE_CHANGE.toString(), {
            id: body.phase_id,
            task_id: body.task_id,
            parent_task: body.parent_task,
            color_code: changeResponse.color_code + constants_1.TASK_STATUS_COLOR_ALPHA,
            status_id: body.status_id
        });
    }
    catch (e) {
        (0, util_1.log_error)(e);
    }
}
exports.on_pt_task_phase_change = on_pt_task_phase_change;
