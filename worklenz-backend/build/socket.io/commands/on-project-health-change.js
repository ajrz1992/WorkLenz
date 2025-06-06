"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_project_health_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
async function on_project_health_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const q = `UPDATE projects SET health_id = $2 WHERE id = $1;`;
        await db_1.default.query(q, [body.project_id, body.health_id]);
        const q2 = "SELECT color_code FROM sys_project_healths WHERE id=$1";
        const result = await db_1.default.query(q2, [body.health_id]);
        const [d] = result.rows;
        socket.emit(events_1.SocketEvents.PROJECT_HEALTH_CHANGE.toString(), {
            id: body.project_id,
            color_code: d.color_code,
            health_id: body.health_id
        });
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_project_health_change = on_project_health_change;
