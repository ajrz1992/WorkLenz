"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_phase_end_date_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
async function on_phase_end_date_change(_io, socket, data) {
    try {
        const q = `UPDATE project_phases
                   SET end_date = $2
                   WHERE id = $1
                   RETURNING start_date, end_date;`;
        const body = JSON.parse(data);
        const result = await db_1.default.query(q, [body.phase_id, body.end_date]);
        const [d] = result.rows;
        socket.emit(events_1.SocketEvents.PHASE_END_DATE_CHANGE.toString(), {
            phase_id: body.phase_id,
            end_date: d.end_date
        });
        return;
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
    socket.emit(events_1.SocketEvents.PHASE_END_DATE_CHANGE.toString(), null);
}
exports.on_phase_end_date_change = on_phase_end_date_change;
