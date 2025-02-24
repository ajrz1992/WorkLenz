"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_task_priority_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const constants_1 = require("../../shared/constants");
const events_1 = require("../events");
const util_1 = require("../util");
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
async function on_task_priority_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const task_data = await (0, activity_logs_service_1.getTaskDetails)(body.task_id, "priority_id");
        const q = `UPDATE tasks SET priority_id = $2 WHERE id = $1;`;
        await db_1.default.query(q, [body.task_id, body.priority_id]);
        const q2 = "SELECT value FROM task_priorities WHERE id = $1;";
        const result = await db_1.default.query(q2, [body.priority_id]);
        const [d] = result.rows;
        d.color_code = (constants_1.PriorityColorCodes[d.value] || constants_1.PriorityColorCodes["0"]) + constants_1.TASK_PRIORITY_COLOR_ALPHA;
        socket.emit(events_1.SocketEvents.TASK_PRIORITY_CHANGE.toString(), {
            id: body.task_id,
            parent_task: body.parent_task,
            color_code: d.color_code,
            priority_id: body.priority_id
        });
        (0, activity_logs_service_1.logPriorityChange)({
            task_id: body.task_id,
            socket,
            new_value: body.priority_id,
            old_value: task_data.priority_id
        });
        (0, util_1.notifyProjectUpdates)(socket, body.task_id);
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_task_priority_change = on_task_priority_change;
