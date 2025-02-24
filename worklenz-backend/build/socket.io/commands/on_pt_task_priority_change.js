"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_pt_task_priority_change = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const constants_1 = require("../../shared/constants");
const events_1 = require("../events");
async function on_pt_task_priority_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const q = `UPDATE cpt_tasks SET priority_id = $2 WHERE id = $1`;
        await db_1.default.query(q, [body.task_id, body.priority_id]);
        const q2 = `SELECT value FROM task_priorities WHERE id = $1`;
        const result = await db_1.default.query(q2, [body.priority_id]);
        const [d] = result.rows;
        d.color_code = (constants_1.PriorityColorCodes[d.value] || constants_1.PriorityColorCodes["0"]) + constants_1.TASK_PRIORITY_COLOR_ALPHA;
        socket.emit(events_1.SocketEvents.PT_TASK_PRIORITY_CHANGE.toString(), {
            id: body.task_id,
            parent_task: body.parent_task,
            color_code: d.color_code,
            priority_id: body.priority_id
        });
    }
    catch (e) {
        (0, util_1.log_error)(e);
    }
}
exports.on_pt_task_priority_change = on_pt_task_priority_change;
