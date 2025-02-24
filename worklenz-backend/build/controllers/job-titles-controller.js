"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class JobTitlesController extends worklenz_controller_base_1.default {
    static async create(req, res) {
        const { name } = req.body;
        const q = `INSERT INTO job_titles (name, team_id) VALUES ($1, (SELECT active_team FROM users WHERE id = $2::UUID));`;
        const result = await db_1.default.query(q, [name, req.user?.id || null]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async get(req, res) {
        const { searchQuery, sortField, sortOrder, size, offset } = this.toPaginationOptions(req.query, "name");
        const q = `
      SELECT ROW_TO_JSON(rec) AS job_titles
      FROM (SELECT COUNT(*) AS total,
              (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
              FROM (SELECT id, name
                    FROM job_titles
                    WHERE team_id = $1 ${searchQuery}
                    ORDER BY ${sortField} ${sortOrder}
                    LIMIT $2 OFFSET $3) t) AS data
      FROM job_titles
      WHERE team_id = $1 ${searchQuery}) rec;
    `;
        const result = await db_1.default.query(q, [req.user?.team_id || null, size, offset]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data.job_titles || this.paginatedDatasetDefaultStruct));
    }
    static async getById(req, res) {
        const q = `SELECT id, name FROM job_titles WHERE id = $1 AND team_id = $2;`;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id || null]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async update(req, res) {
        const q = `UPDATE job_titles SET name = $1 WHERE id = $2 AND team_id = $3;`;
        const result = await db_1.default.query(q, [req.body.name, req.params.id, req.user?.team_id || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async deleteById(req, res) {
        const q = `DELETE FROM job_titles WHERE id = $1 AND team_id = $2;`;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], JobTitlesController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], JobTitlesController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], JobTitlesController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], JobTitlesController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], JobTitlesController, "deleteById", null);
exports.default = JobTitlesController;
