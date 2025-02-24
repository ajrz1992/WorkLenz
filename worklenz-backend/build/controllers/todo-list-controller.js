"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class TodoListController extends worklenz_controller_base_1.default {
    static async create(req, res) {
        const q = `
      INSERT INTO personal_todo_list (name, description, color_code, user_id, index)
      VALUES ($1, $2, $3, $4, ((SELECT index FROM personal_todo_list ORDER BY index DESC LIMIT 1) + 1));
      `;
        const result = await db_1.default.query(q, [req.body.name, req.body.description, req.body.color_code, req.user?.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async get(req, res) {
        const { searchQuery } = this.toPaginationOptions(req.query, ["name", "COALESCE(description, '')"]);
        const filterByDone = req.query.showCompleted ? "" : "AND done IS FALSE";
        const q = `
      SELECT id, name, description, color_code, done, created_at, updated_at
      FROM personal_todo_list
      WHERE user_id = $1 ${filterByDone} ${searchQuery}
      ORDER BY created_at DESC;
      `;
        const result = await db_1.default.query(q, [req.user?.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async updateStatus(req, res) {
        const q = `UPDATE personal_todo_list SET done = $3 WHERE id = $1 AND user_id = $2;`;
        const result = await db_1.default.query(q, [req.params.id, req.user?.id, !!req.body.done]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async update(req, res) {
        const q = `
    UPDATE personal_todo_list
    SET done        = $3,
        name        = $4,
        description = $5,
        color_code  = $6
    WHERE id = $1
      AND user_id = $2;
  `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.id, !!req.body.done, req.body.name, req.body.description, req.body.color_code]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async updateIndex(req, res) {
        const from = +(req.body.from || 0);
        const to = +(req.body.to || 0);
        if (from === to)
            return res.status(200).send(new server_response_1.ServerResponse(true, []));
        const q = `
        UPDATE personal_todo_list
        SET index=_index
        FROM (SELECT ROW_NUMBER() OVER (
            ORDER BY index < $2 DESC, index != $3 DESC, index >= $1 DESC, index
            ) AS _index,
                    user_id AS _user_id
              FROM personal_todo_list
              WHERE user_id = $1
              ORDER BY _user_id) AS _
        WHERE user_id = _user_id
          AND index != _index;
      `;
        const result = await db_1.default.query(q, [req.user?.id, from, to]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async deleteById(req, res) {
        const q = `DELETE FROM personal_todo_list WHERE id = $1 AND user_id = $2;`;
        const result = await db_1.default.query(q, [req.params.id, req.user?.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TodoListController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TodoListController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TodoListController, "updateStatus", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TodoListController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TodoListController, "updateIndex", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TodoListController, "deleteById", null);
exports.default = TodoListController;
