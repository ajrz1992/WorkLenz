"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const crypto_1 = require("crypto");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class SharedprojectsController extends worklenz_controller_base_1.default {
    static getShareLink(hash) {
        return `https://${process.env.HOSTNAME}/share/${hash}`;
    }
    static createShareInfo(name, createdAt, hash) {
        if (!name || !createdAt || !hash)
            return null;
        return {
            url: this.getShareLink(hash),
            created_by: name?.split(" ")[0],
            created_at: createdAt
        };
    }
    static async create(req, res) {
        const q = `
      INSERT INTO shared_projects (project_id, team_id, enabled_by, hash_value)
      VALUES ($1, $2, $3, $4)
      RETURNING id, created_at;
    `;
        const hash = (0, crypto_1.createHmac)("sha256", req.body.project_id).digest("hex");
        const result = await db_1.default.query(q, [req.body.project_id, req.user?.team_id, req.user?.id, hash]);
        const [data] = result.rows;
        if (!data?.id)
            return res.status(400).send(new server_response_1.ServerResponse(true, null));
        return res.status(200).send(new server_response_1.ServerResponse(true, this.createShareInfo(req.user?.name?.split(" ")[0], data.createdAt, hash)));
    }
    static async getById(req, res) {
        const q = `
      SELECT hash_value, created_at, (SELECT name FROM users WHERE id = enabled_by)
      FROM shared_projects
      WHERE project_id = $1
        AND team_id = $2;
    `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, this.createShareInfo(data?.name, data?.created_at, data?.hash_value)));
    }
    static async deleteById(req, res) {
        const q = `DELETE FROM shared_projects WHERE project_id = $1 AND team_id = $2;`;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], SharedprojectsController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], SharedprojectsController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], SharedprojectsController, "deleteById", null);
exports.default = SharedprojectsController;
