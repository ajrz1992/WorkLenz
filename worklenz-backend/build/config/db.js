"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const pg_1 = tslib_1.__importDefault(require("pg"));
const db_config_1 = tslib_1.__importDefault(require("./db-config"));
const pg = (process.env.USE_PG_NATIVE === "true" && pg_1.default.native) ? pg_1.default.native : pg_1.default;
const pool = new pg.Pool(db_config_1.default);
pool.on("error", (err) => {
    console.error("pg idle client error", err, err.message, err.stack);
});
exports.default = {
    pool,
    query: (text, params) => pool.query(text, params),
};
