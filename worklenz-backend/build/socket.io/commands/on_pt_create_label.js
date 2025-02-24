"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_pt_create_label = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const utils_1 = require("../../shared/utils");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const worklenz_controller_base_1 = tslib_1.__importDefault(require("../../controllers/worklenz-controller-base"));
const events_1 = require("../events");
async function on_pt_create_label(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        if (body.label?.length > 30)
            return;
        body.color = (0, utils_1.getRandomColorCode)();
        const q = `SELECT assign_or_create_pt_label($1, $2, $3, $4) AS label`;
        const result = await db_1.default.query(q, [body.team_id, body.task_id, body.label, body.color]);
        const [d] = result.rows;
        const labelId = d.label?.id;
        if (labelId) {
            const q2 = `
            SELECT cpt_task_labels.label_id AS id,
                (SELECT name FROM team_labels WHERE id = cpt_task_labels.label_id) AS name,
                (SELECT color_code FROM team_labels WHERE id = cpt_task_labels.label_id)
            FROM cpt_task_labels
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
            socket.emit(events_1.SocketEvents.PT_CREATE_LABEL.toString(), {
                id: body.task_id,
                parent_task: body.parent_task,
                new_label: newLabel,
                is_new: !!d.label?.is_new,
                all_labels: result2.rows,
                labels
            });
        }
    }
    catch (e) {
        (0, util_1.log_error)(e);
    }
}
exports.on_pt_create_label = on_pt_create_label;
