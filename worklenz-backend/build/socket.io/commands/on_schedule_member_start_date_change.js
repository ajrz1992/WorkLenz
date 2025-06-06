"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_schedule_member_start_date_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
async function on_schedule_member_start_date_change(_io, socket, data) {
    try {
        const q = `UPDATE project_member_allocations
               SET allocated_from = $4
               WHERE id = $3 AND project_id = $1 AND team_member_id = $2`;
        const body = JSON.parse(data);
        const result = await db_1.default.query(q, [body.project_id, body.team_member_is, body.allocation_ids[0], body.allocated_from]);
        if (result && body.allocation_ids.length > 1) {
            for (let i = 1; i < body.allocation_ids.length; i++) {
                const dq = `DELETE FROM project_member_allocations WHERE id = $1`;
                await db_1.default.query(dq, [body.allocation_ids[i]]);
            }
        }
        socket.emit(events_1.SocketEvents.SCHEDULE_MEMBER_START_DATE_CHANGE.toString(), {
            id: body.allocation_ids[0],
            date: body.allocated_from
        });
        return;
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
    socket.emit(events_1.SocketEvents.SCHEDULE_MEMBER_START_DATE_CHANGE.toString(), null);
}
exports.on_schedule_member_start_date_change = on_schedule_member_start_date_change;
