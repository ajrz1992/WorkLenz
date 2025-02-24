"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_project_end_date_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
async function on_project_end_date_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const q = `UPDATE projects SET end_date = $2 WHERE id = $1 RETURNING end_date;`;
        await db_1.default.query(q, [body.project_id, body.end_date]);
        socket.emit(events_1.SocketEvents.PROJECT_END_DATE_CHANGE.toString(), {
            id: body.project_id,
            end_date: body.end_date
        });
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_project_end_date_change = on_project_end_date_change;
