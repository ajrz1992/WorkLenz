"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IO = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
class IO {
    static instance = null;
    static setInstance(io) {
        this.instance = io;
    }
    static getInstance() {
        return this.instance;
    }
    static getSocketById(socketId) {
        return this.instance?.sockets.sockets?.get(socketId) || null;
    }
    static emit(event, socketId, data) {
        this.getSocketById(socketId)?.emit(event.toString(), data);
    }
    static async emitByUserId(id, userId, event, data) {
        try {
            if (id === userId)
                return;
            const q = `SELECT socket_id FROM users WHERE id = $1;`;
            const result = await db_1.default.query(q, [id]);
            const [user] = result.rows;
            if (!user)
                return;
            this.emit(event, user.socket_id, data);
        }
        catch (error) {
        }
    }
    static async emitByTeamMemberId(id, userId, event, data) {
        try {
            const q = `SELECT socket_id FROM users WHERE id != $1 AND id IN (SELECT user_id FROM team_members WHERE id = $2);`;
            const result = await db_1.default.query(q, [userId, id]);
            const [user] = result.rows;
            if (!user)
                return;
            this.emit(event, user.socket_id, data);
        }
        catch (error) {
        }
    }
}
exports.IO = IO;
