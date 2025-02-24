"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const existsErrorMessage = "At least one status should exists under each category.";
class TaskStatusesController extends worklenz_controller_base_1.default {
    static async create(req, res) {
        const q = `
      INSERT INTO task_statuses (name, project_id, team_id, category_id, sort_order)
      VALUES ($1, $2, $3, $4, (SELECT MAX(sort_order) FROM task_statuses WHERE project_id = $2) + 1);
    `;
        const result = await db_1.default.query(q, [req.body.name, req.body.project_id, req.user?.team_id, req.body.category_id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getCreated(req, res) {
        const team_id = req.user?.team_id;
        const q = `SELECT create_task_status($1, $2)`;
        const result = await db_1.default.query(q, [JSON.stringify(req.body), team_id]);
        const data = result.rows[0].create_task_status[0];
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async get(req, res) {
        if (!req.query.project)
            return res.status(400).send(new server_response_1.ServerResponse(false, null));
        const q = `
      SELECT task_statuses.id,
             task_statuses.name,
             stsc.color_code,
             stsc.name AS category_name,
             task_statuses.category_id,
             stsc.description
      FROM task_statuses
             INNER JOIN sys_task_status_categories stsc ON task_statuses.category_id = stsc.id
      WHERE project_id = $1
        AND team_id = $2
      ORDER BY task_statuses.sort_order;
    `;
        const result = await db_1.default.query(q, [req.query.project, req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getCategories(req, res) {
        const q = `SELECT id, name, color_code, description
               FROM sys_task_status_categories
               ORDER BY index;`;
        const result = await db_1.default.query(q, []);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getStatusByGroups(projectId) {
        if (!projectId)
            return;
        const q = ``;
        const result = await db_1.default.query(q, [projectId]);
        return result.rows;
    }
    static async getById(req, res) {
        const q = `
      SELECT task_statuses.id, task_statuses.name, stsc.color_code
      FROM task_statuses
             INNER JOIN sys_task_status_categories stsc ON task_statuses.category_id = stsc.id
      WHERE task_statuses.id = $1
        AND project_id = $2;
    `;
        const result = await db_1.default.query(q, [req.params.id, req.query.project_id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async hasMoreCategories(statusId, projectId) {
        if (!statusId || !projectId)
            return false;
        const q = `
      SELECT COUNT(*) AS count
      FROM task_statuses
      WHERE category_id = (SELECT category_id FROM task_statuses WHERE id = $1)
        AND project_id = $2;
    `;
        const result = await db_1.default.query(q, [statusId, projectId]);
        const [data] = result.rows;
        return +data.count >= 2;
    }
    static async update(req, res) {
        const hasMoreCategories = await TaskStatusesController.hasMoreCategories(req.params.id, req.body.project_id);
        if (!hasMoreCategories)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, existsErrorMessage).withTitle("Status update failed!"));
        const q = `
      UPDATE task_statuses
      SET name        = $2,
          category_id = COALESCE($4, (SELECT id FROM sys_task_status_categories WHERE is_todo IS TRUE))
      WHERE id = $1
        AND project_id = $3
      RETURNING (SELECT color_code FROM sys_task_status_categories WHERE id = task_statuses.category_id);
    `;
        const result = await db_1.default.query(q, [req.params.id, req.body.name, req.body.project_id, req.body.category_id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async updateName(req, res) {
        const q = `
        UPDATE task_statuses
        SET name = $2
        WHERE id = $1
          AND project_id = $3
        RETURNING (SELECT color_code FROM sys_task_status_categories WHERE id = task_statuses.category_id);
    `;
        const result = await db_1.default.query(q, [req.params.id, req.body.name, req.body.project_id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async updateStatusOrder(req, res) {
        const q = `SELECT update_status_order($1);`;
        const result = await db_1.default.query(q, [JSON.stringify(req.body.status_order)]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async deleteById(req, res) {
        const q = `SELECT move_tasks_and_delete_status($1)`;
        const body = {
            id: req.params.id,
            project_id: req.query.project,
            replacing_status: req.query.replace
        };
        const result = await db_1.default.query(q, [JSON.stringify(body)]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskStatusesController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskStatusesController, "getCreated", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskStatusesController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskStatusesController, "getCategories", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskStatusesController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskStatusesController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskStatusesController, "updateName", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskStatusesController, "updateStatusOrder", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({
        raisedExceptions: {
            "ERROR_ONE_SHOULD_EXISTS": existsErrorMessage
        }
    })
], TaskStatusesController, "deleteById", null);
exports.default = TaskStatusesController;
