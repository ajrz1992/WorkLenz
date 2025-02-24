"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_pt_task_name_change = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
async function on_pt_task_name_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const name = (body.name || "").trim();
        const q = `UPDATE cpt_tasks SET name = $2 WHERE id = $1 RETURNING name`;
        const result = await db_1.default.query(q, [body.task_id, name]);
        const [d] = result.rows;
        socket.emit(events_1.SocketEvents.PT_TASK_NAME_CHANGE.toString(), {
            id: body.task_id,
            parent_task: body.parent_task,
            name: d.name
        });
    }
    catch (e) {
        (0, util_1.log_error)(e);
    }
}
exports.on_pt_task_name_change = on_pt_task_name_change;
