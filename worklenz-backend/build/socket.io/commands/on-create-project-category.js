"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_create_project_category = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
const utils_1 = require("../../shared/utils");
async function on_create_project_category(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const q = `
                    INSERT INTO project_categories (name, team_id, created_by, color_code)
                    VALUES ($1, $2, $3, $4)
                    RETURNING id, name, color_code;
                    `;
        const result = await db_1.default.query(q, [body.name, body.team_id, body.user_id, body.name ? (0, utils_1.getColor)(body.name) : null]);
        const [d] = result.rows;
        socket.emit(events_1.SocketEvents.CREATE_PROJECT_CATEGORY.toString(), {
            id: body.project_id,
            category_id: d.id,
            category_name: d.name,
            category_color: d.color_code
        });
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_create_project_category = on_create_project_category;
