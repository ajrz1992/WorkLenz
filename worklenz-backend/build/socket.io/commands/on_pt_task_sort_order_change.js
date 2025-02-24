"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_pt_task_sort_order_change = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const constants_1 = require("../../shared/constants");
const pt_tasks_controller_base_1 = require("../../controllers/project-templates/pt-tasks-controller-base");
async function emitSortOrderChange(data, socket) {
    const q = `
      SELECT id, sort_order
      FROM cpt_tasks
      WHERE template_id = $1
      ORDER BY sort_order;
    `;
    const tasks = await db_1.default.query(q, [data.template_id]);
    socket.emit(events_1.SocketEvents.PT_TASK_SORT_ORDER_CHANGE.toString(), tasks.rows);
}
function updateUnmappedStatus(config) {
    if (config.to_group === constants_1.UNMAPPED)
        config.to_group = null;
    if (config.from_group === constants_1.UNMAPPED)
        config.from_group = null;
}
async function on_pt_task_sort_order_change(_io, socket, data) {
    try {
        const q = `SELECT handle_pt_task_list_sort_order_change($1);`;
        const config = {
            from_index: data.from_index,
            to_index: data.to_index,
            task_id: data.task.id,
            from_group: data.from_group,
            to_group: data.to_group,
            template_id: data.template_id,
            group_by: data.group_by,
            to_last_index: Boolean(data.to_last_index)
        };
        if (config.group_by === pt_tasks_controller_base_1.GroupBy.PHASE) {
            updateUnmappedStatus(config);
        }
        await db_1.default.query(q, [JSON.stringify(config)]);
        await emitSortOrderChange(data, socket);
        return;
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
    socket.emit(events_1.SocketEvents.PT_TASK_SORT_ORDER_CHANGE.toString(), []);
}
exports.on_pt_task_sort_order_change = on_pt_task_sort_order_change;
