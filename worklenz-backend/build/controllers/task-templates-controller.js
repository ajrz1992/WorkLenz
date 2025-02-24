"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class TasktemplatesController extends worklenz_controller_base_1.default {
    static async create(req, res) {
        const { name, tasks } = req.body;
        const q = `SELECT create_task_template($1, $2, $3);`;
        const result = await db_1.default.query(q, [name.trim(), req.user?.team_id, JSON.stringify(tasks)]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data, "Task template created successfully"));
    }
    static async get(req, res) {
        const q = `SELECT id, name, created_at FROM task_templates WHERE team_id = $1 ORDER BY name;`;
        const result = await db_1.default.query(q, [req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getById(req, res) {
        const { id } = req.params;
        const q = `SELECT id, name,
       ((SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
         FROM (SELECT task_templates_tasks.name AS name,
                      task_templates_tasks.total_minutes AS total_minutes
               FROM task_templates_tasks
               WHERE template_id = task_templates.id) rec)) AS tasks
        FROM task_templates
        WHERE id = $1
        ORDER BY name`;
        const result = await db_1.default.query(q, [id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async update(req, res) {
        const { name, tasks } = req.body;
        const { id } = req.params;
        const q = `SELECT update_task_template($1, $2, $3, $4);`;
        const result = await db_1.default.query(q, [id, name, JSON.stringify(tasks), req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows, "Template updated."));
    }
    static async deleteById(req, res) {
        const { id } = req.params;
        const q = `DELETE FROM task_templates WHERE id = $1;`;
        const result = await db_1.default.query(q, [id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows, "Template deleted."));
    }
    static async import(req, res) {
        const { id } = req.params;
        const q = `SELECT import_tasks_from_template($1, $2, $3);`;
        const result = await db_1.default.query(q, [id, req.user?.id, JSON.stringify(req.body)]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data, "Tasks imported successfully!"));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({
        raisedExceptions: {
            "TASK_TEMPLATE_EXISTS_ERROR": `A template with the name "{0}" already exists. Please choose a different name.`
        }
    })
], TasktemplatesController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasktemplatesController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasktemplatesController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({
        raisedExceptions: {
            "TASK_TEMPLATE_EXISTS_ERROR": `A template with the name "{0}" already exists. Please choose a different name.`
        }
    })
], TasktemplatesController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasktemplatesController, "deleteById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasktemplatesController, "import", null);
exports.default = TasktemplatesController;
