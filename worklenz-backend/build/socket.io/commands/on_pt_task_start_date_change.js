"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_pt_task_start_date_change = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
async function on_pt_task_start_date_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const q = `UPDATE tasks SET start_date = $2 WHERE id = $1 RETURNING start_date, end_date`;
        const result = await db_1.default.query(q, [body.task_id, body.start_date]);
        const [d] = result.rows;
    }
    catch (e) {
        (0, util_1.log_error)(e);
    }
}
exports.on_pt_task_start_date_change = on_pt_task_start_date_change;
