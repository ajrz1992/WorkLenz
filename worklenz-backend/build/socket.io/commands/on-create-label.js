"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_create_label = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const worklenz_controller_base_1 = tslib_1.__importDefault(require("../../controllers/worklenz-controller-base"));
const utils_1 = require("../../shared/utils");
const events_1 = require("../events");
const util_1 = require("../util");
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
async function on_create_label(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        if (body.label?.length > 30)
            return;
        body.color = (0, utils_1.getRandomColorCode)();
        const q = `SELECT assign_or_create_label($1, $2, $3, $4) AS label;`;
        const result = await db_1.default.query(q, [body.team_id, body.task_id, body.label, body.color]);
        const [d] = result.rows;
        const labelId = d.label?.id;
        if (labelId) {
            const q2 = `
        SELECT task_labels.label_id AS id,
          (SELECT name FROM team_labels WHERE id = task_labels.label_id) AS name,
          (SELECT color_code FROM team_labels WHERE id = task_labels.label_id)
        FROM task_labels
        WHERE task_id = $1
        ORDER BY name
      `;
            const result2 = await db_1.default.query(q2, [body.task_id]);
            const labels = worklenz_controller_base_1.default.createTagList(result2.rows, 2);
            const newLabel = {
                id: labelId,
                selected: true,
                color_code: body.color,
                name: body.label.trim()
            };
            socket.emit(events_1.SocketEvents.CREATE_LABEL.toString(), {
                id: body.task_id,
                parent_task: body.parent_task,
                new_label: newLabel,
                is_new: !!d.label?.is_new,
                all_labels: result2.rows,
                labels
            });
            (0, activity_logs_service_1.logLabelsUpdate)({
                task_id: body.task_id,
                socket,
                new_value: labelId,
                old_value: null
            });
        }
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_create_label = on_create_label;
