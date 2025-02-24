"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_session_1 = tslib_1.__importDefault(require("express-session"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const pgSession = require("connect-pg-simple")(express_session_1.default);
exports.default = (0, express_session_1.default)({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET || [],
    proxy: false,
    resave: false,
    saveUninitialized: true,
    rolling: true,
    store: new pgSession({
        pool: db_1.default.pool,
        tableName: "pg_sessions"
    }),
    cookie: {
        path: "/",
        maxAge: 30 * 24 * 60 * 60 * 1000
    }
});
