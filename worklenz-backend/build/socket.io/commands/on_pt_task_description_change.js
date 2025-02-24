"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_pt_task_description_change = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const sanitize_html_1 = tslib_1.__importDefault(require("sanitize-html"));
const events_1 = require("../events");
async function on_pt_task_description_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const q = `UPDATE cpt_tasks SET description = $2 WHERE id = $1 RETURNING description`;
        const description = (body.description || "").replace(/(^([ ]*<p><br><\/p>)*)|((<p><br><\/p>)*[ ]*$)/gi, "").trim() || null;
        await db_1.default.query(q, [body.task_id, (0, sanitize_html_1.default)(description)]);
        socket.emit(events_1.SocketEvents.PT_TASK_DESCRIPTION_CHANGE.toString(), {
            id: body.task_id,
            description
        });
    }
    catch (e) {
        (0, util_1.log_error)(e);
    }
}
exports.on_pt_task_description_change = on_pt_task_description_change;
