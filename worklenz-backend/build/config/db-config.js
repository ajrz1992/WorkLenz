"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    max: +process.env.DB_MAX_CLIENTS,
    idleTimeoutMillis: 30000,
};
