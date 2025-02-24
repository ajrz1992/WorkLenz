"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_disconnect = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const util_1 = require("../util");
async function on_disconnect(io, socket, reason) {
    (0, util_1.log)(socket.id, `disconnected (${reason})`);
    try {
        const q = "UPDATE users SET socket_id = NULL WHERE socket_id = $1";
        await db_1.default.query(q, [socket.id]);
    }
    catch (error) {
    }
}
exports.on_disconnect = on_disconnect;
