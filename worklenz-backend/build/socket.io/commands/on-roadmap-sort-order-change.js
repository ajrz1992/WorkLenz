"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_roadmap_sort_order_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
async function on_roadmap_sort_order_change(_io, socket, data) {
    try {
        const q = `SELECT handle_task_roadmap_sort_order($1, $2, $3);`;
        const body = JSON.parse(data);
        await db_1.default.query(q, [body.from_index, body.to_index, body.task_id]);
        socket.emit(events_1.SocketEvents.ROADMAP_SORT_ORDER_CHANGE.toString(), {});
        return;
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
    socket.emit(events_1.SocketEvents.ROADMAP_SORT_ORDER_CHANGE.toString(), null);
}
exports.on_roadmap_sort_order_change = on_roadmap_sort_order_change;
