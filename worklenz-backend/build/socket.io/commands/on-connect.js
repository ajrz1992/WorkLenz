"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_login = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const util_1 = require("../util");
const events_1 = require("../events");
async function on_login(_io, socket, id) {
    (0, util_1.log)(socket.id, `user connected`);
    try {
        const q = "UPDATE users SET socket_id = $1 WHERE id = $2";
        await db_1.default.query(q, [socket.id, id]);
        socket.emit(events_1.SocketEvents.LOGIN.toString());
    }
    catch (error) {
    }
}
exports.on_login = on_login;
