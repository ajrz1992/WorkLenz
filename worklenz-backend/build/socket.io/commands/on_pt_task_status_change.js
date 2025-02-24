"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_pt_task_status_change = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const constants_1 = require("../../shared/constants");
const events_1 = require("../events");
async function on_pt_task_status_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const q2 = "SELECT handle_on_pt_task_status_change($1, $2) AS res;";
        const results1 = await db_1.default.query(q2, [body.task_id, body.status_id]);
        const [d] = results1.rows;
        const changeResponse = d.res;
        changeResponse.color_code = changeResponse.color_code + constants_1.TASK_STATUS_COLOR_ALPHA;
        socket.emit(events_1.SocketEvents.PT_TASK_STATUS_CHANGE.toString(), {
            id: body.task_id,
            parent_task: body.parent_task,
            color_code: changeResponse.color_code,
            status_id: body.status_id,
            statusCategory: changeResponse.status_category
        });
    }
    catch (e) {
        (0, util_1.log_error)(e);
    }
}
exports.on_pt_task_status_change = on_pt_task_status_change;
