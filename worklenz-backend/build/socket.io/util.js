"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifyProjectUpdates = exports.getLoggedInUserIdFromSocket = exports.log_error = exports.log = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const events_1 = require("./events");
function log(id, value) {
    console.log(`[${id}] ${value}`);
}
exports.log = log;
function log_error(error) {
    console.trace(`[SOCKET.IO]`, error);
}
exports.log_error = log_error;
function getLoggedInUserIdFromSocket(socket) {
    const { session } = socket.request;
    return session?.passport?.user || null;
}
exports.getLoggedInUserIdFromSocket = getLoggedInUserIdFromSocket;
async function notifyProjectUpdates(socket, taskId) {
    try {
        const result = await db_1.default.query("SELECT project_id FROM tasks WHERE id = $1;", [taskId]);
        const [data] = result.rows;
        if (data.project_id) {
            socket.to(data.project_id).emit(events_1.SocketEvents.PROJECT_UPDATES_AVAILABLE.toString());
        }
    }
    catch (error) {
    }
}
exports.notifyProjectUpdates = notifyProjectUpdates;
