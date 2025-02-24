"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_join_project_room = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const events_1 = require("../events");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const utils_1 = require("../../shared/utils");
const tasks_controller_v2_1 = tslib_1.__importDefault(require("../../controllers/tasks-controller-v2"));
async function on_join_project_room(_io, socket, data) {
    const payload = { ...data };
    payload.id = /undefined|null/.test(data.id) ? null : payload.id;
    if (!payload.id)
        return;
    try {
        if (payload.type === "join") {
            await socket.join(payload.id);
        }
        else {
            await socket.leave(payload.id);
        }
        const clients = await _io.in(payload.id).fetchSockets();
        const socketIds = clients.map(socket => `'${socket.id}'`).join(`,`);
        if (!socketIds)
            return;
        const q = `
      SELECT name, avatar_url
      FROM users
      WHERE socket_id IN (${socketIds})
        AND EXISTS(SELECT 1
                   FROM team_members
                   WHERE team_id = (SELECT team_id FROM projects WHERE id = $1)
                     AND user_id = users.id);
    `;
        const result = await db_1.default.query(q, [payload.id]);
        const users = result.rows.map((a) => {
            a.color_code = (0, utils_1.getColor)(a.name);
            return a;
        });
        const members = tasks_controller_v2_1.default.createTagList(users);
        socket.emit(events_1.SocketEvents.JOIN_OR_LEAVE_PROJECT_ROOM.toString(), members);
        socket.to(payload.id).emit(events_1.SocketEvents.JOIN_OR_LEAVE_PROJECT_ROOM.toString(), members);
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
}
exports.on_join_project_room = on_join_project_room;
