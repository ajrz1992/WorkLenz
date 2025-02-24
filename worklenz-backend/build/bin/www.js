#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("./config");
const socket_io_1 = require("socket.io");
const http_1 = tslib_1.__importDefault(require("http"));
const app_1 = tslib_1.__importDefault(require("../app"));
const socket_io_2 = require("../socket.io");
const io_1 = require("../shared/io");
const session_middleware_1 = tslib_1.__importDefault(require("../middlewares/session-middleware"));
const util_1 = require("../socket.io/util");
const cron_jobs_1 = require("../cron_jobs");
const file_constants_1 = tslib_1.__importDefault(require("../shared/file-constants"));
const db_task_status_changed_1 = tslib_1.__importDefault(require("../pg_notify_listeners/db-task-status-changed"));
function normalizePort(val) {
    const p = parseInt(val || "0", 10);
    if (isNaN(p))
        return val;
    if (p >= 0)
        return p;
    return false;
}
const port = normalizePort(process.env.PORT);
app_1.default.set("port", port);
const server = http_1.default.createServer(app_1.default);
const io = new socket_io_1.Server(server, {
    transports: ["websocket"],
    path: "/socket",
    cors: {
        origin: (process.env.SOCKET_IO_CORS || "*").split(",")
    },
    cookie: true
});
const wrap = (middleware) => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(session_middleware_1.default));
io.use((socket, next) => {
    const userId = (0, util_1.getLoggedInUserIdFromSocket)(socket);
    if (userId)
        return next();
    return next(new Error("401 unauthorized"));
});
io.engine.on("initial_headers", (headers) => {
    headers["Strict-Transport-Security"] = "max-age=63072000; includeSubDomains";
    headers["X-Content-Type-Options"] = "nosniff";
    headers["X-Frame-Options"] = "Deny";
    headers["X-XSS-Protection"] = "1; mode=block";
});
io.on("connection", (socket) => {
    (0, socket_io_2.register)(io, socket);
});
io_1.IO.setInstance(io);
function onError(error) {
    db_task_status_changed_1.default.disconnect();
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string"
        ? `Pipe ${port}`
        : `Port ${port}`;
    switch (error.code) {
        case "EACCES":
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    const addr = server.address();
    if (!addr)
        return;
    const bind = typeof addr === "string"
        ? `pipe ${addr}`
        : `port ${addr.port}`;
    (0, cron_jobs_1.startCronJobs)();
    file_constants_1.default.init();
    void db_task_status_changed_1.default.connect();
    console.info(`Listening on ${bind}`);
}
function onClose() {
    db_task_status_changed_1.default.disconnect();
}
server.on("error", onError);
server.on("close", onClose);
server.on("listening", onListening);
process.on("SIGINT", () => {
    server.close();
});
server.listen(port);
