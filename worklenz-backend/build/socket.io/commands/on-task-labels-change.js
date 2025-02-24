"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_task_label_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const worklenz_controller_base_1 = tslib_1.__importDefault(require("../../controllers/worklenz-controller-base"));
const events_1 = require("../events");
const util_1 = require("../util");
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
async function on_task_label_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const q = `SELECT add_or_remove_task_label($1, $2) AS labels;`;
        const result = await db_1.default.query(q, [body.task_id, body.label_id]);
        const [d] = result.rows;
        const labels = worklenz_controller_base_1.default.createTagList(d.labels || [], 2);
        socket.emit(events_1.SocketEvents.TASK_LABELS_CHANGE.toString(), {
            id: body.task_id, parent_task: body.parent_task, all_labels: d.labels || [], labels
        });
        (0, activity_logs_service_1.logLabelsUpdate)({
            task_id: body.task_id,
            socket,
            new_value: body.label_id,
            old_value: null
        });
        (0, util_1.notifyProjectUpdates)(socket, body.task_id);
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_task_label_change = on_task_label_change;
