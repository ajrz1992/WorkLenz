"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_task_description_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
const sanitize_html_1 = tslib_1.__importDefault(require("sanitize-html"));
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
async function on_task_description_change(_io, socket, data) {
    try {
        const q = `UPDATE tasks
               SET description = $2
               WHERE id = $1
               RETURNING description;`;
        const body = JSON.parse(data);
        const task_data = await (0, activity_logs_service_1.getTaskDetails)(body.task_id, "description");
        const description = (body.description || "").replace(/(^([ ]*<p><br><\/p>)*)|((<p><br><\/p>)*[ ]*$)/gi, "").trim() || null;
        await db_1.default.query(q, [body.task_id, (0, sanitize_html_1.default)(description)]);
        socket.emit(events_1.SocketEvents.TASK_DESCRIPTION_CHANGE.toString(), {
            id: body.task_id,
            description,
            parent_task: body.parent_task,
        });
        (0, activity_logs_service_1.logDescriptionChange)({
            task_id: body.task_id,
            socket,
            new_value: description,
            old_value: task_data.description
        });
        (0, util_1.notifyProjectUpdates)(socket, body.task_id);
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_task_description_change = on_task_description_change;
