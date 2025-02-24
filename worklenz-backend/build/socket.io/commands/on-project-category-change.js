"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_project_category_change = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
async function on_project_category_change(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const q = `UPDATE projects SET category_id = $2 WHERE id = $1;`;
        await db_1.default.query(q, [body.project_id, body.category_id]);
        if (body.is_update) {
            const q2 = "SELECT id, name, color_code FROM project_categories WHERE id = $1;";
            const result = await db_1.default.query(q2, [body.category_id]);
            const [d] = result.rows;
            socket.emit(events_1.SocketEvents.PROJECT_CATEGORY_CHANGE.toString(), {
                id: body.project_id,
                category_id: d.id,
                category_name: d.name,
                category_color: d.color_code
            });
        }
        else {
            socket.emit(events_1.SocketEvents.PROJECT_CATEGORY_CHANGE.toString(), {
                id: body.project_id,
                category_id: null,
                category_name: null,
                category_color: null
            });
        }
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_project_category_change = on_project_category_change;
