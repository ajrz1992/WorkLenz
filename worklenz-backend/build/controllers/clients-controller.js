"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const utils_1 = require("../shared/utils");
const server_response_1 = require("../models/server-response");
const email_templates_1 = require("../shared/email-templates");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class ClientsController extends worklenz_controller_base_1.default {
    static async create(req, res) {
        const q = `INSERT INTO clients (name, team_id) VALUES ($1, $2);`;
        const result = await db_1.default.query(q, [req.body.name, req.user?.team_id || null]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async get(req, res) {
        const { searchQuery, sortField, sortOrder, size, offset } = this.toPaginationOptions(req.query, "name");
        const q = `
      SELECT ROW_TO_JSON(rec) AS clients
      FROM (SELECT COUNT(*) AS total,
              (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
              FROM (SELECT id,
                            name,
                            (SELECT COUNT(*) FROM projects WHERE client_id = clients.id) AS projects_count
                    FROM clients
                    WHERE team_id = $1 ${searchQuery}
                    ORDER BY ${sortField} ${sortOrder}
                    LIMIT $2 OFFSET $3) t) AS data
      FROM clients
      WHERE team_id = $1 ${searchQuery}) rec;
    `;
        const result = await db_1.default.query(q, [req.user?.team_id || null, size, offset]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data.clients || this.paginatedDatasetDefaultStruct));
    }
    static async getById(req, res) {
        const q = `SELECT id, name FROM clients WHERE id = $1 AND team_id = $2`;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id || null]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async update(req, res) {
        const q = `UPDATE clients SET name = $3 WHERE id = $1 AND team_id = $2; `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id || null, req.body.name]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async deleteById(req, res) {
        const q = `DELETE FROM clients WHERE id = $1 AND team_id = $2;`;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async addSubscriber(req, res) {
        const { email } = req.body;
        if (!this.isValidHost(req.hostname))
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Invalid hostname"));
        if (!(0, utils_1.isValidateEmail)(email))
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Invalid email address"));
        (0, email_templates_1.sendNewSubscriberNotification)(email);
        return res.status(200).send(new server_response_1.ServerResponse(true, null, "Thank you for subscribing. We'll update you once WorkLenz is live!"));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ClientsController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ClientsController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ClientsController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ClientsController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ClientsController, "deleteById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ClientsController, "addSubscriber", null);
exports.default = ClientsController;
