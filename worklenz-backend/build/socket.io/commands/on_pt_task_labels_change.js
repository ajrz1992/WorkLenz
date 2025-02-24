"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_pt_task_labels_change = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("../../controllers/worklenz-controller-base"));
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
async function on_pt_task_labels_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const q = `SELECT add_or_remove_pt_task_label($1, $2) AS labels`;
        const result = await db_1.default.query(q, [body.task_id, body.label_id]);
        const [d] = result.rows;
        const labels = worklenz_controller_base_1.default.createTagList(d.labels || [], 2);
        socket.emit(events_1.SocketEvents.PT_TASK_LABELS_CHANGE.toString(), {
            id: body.task_id,
            parent_task: body.parent_task,
            all_labels: d.labels || [], labels
        });
    }
    catch (e) {
        (0, util_1.log_error)(e);
    }
}
exports.on_pt_task_labels_change = on_pt_task_labels_change;
