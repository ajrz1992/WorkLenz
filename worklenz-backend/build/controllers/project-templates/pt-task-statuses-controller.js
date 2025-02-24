"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../../decorators/handle-exceptions"));
const server_response_1 = require("../../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("../worklenz-controller-base"));
const existsErrorMessage = "At least one status should exists under each category.";
class PtTaskStatusesController extends worklenz_controller_base_1.default {
    static async create(req, res) {
        const q = `
        INSERT INTO cpt_task_statuses (name, template_id, team_id, category_id, sort_order)
        VALUES ($1, $2, $3, $4, (SELECT MAX(sort_order) FROM cpt_task_statuses WHERE template_id = $2) + 1);
      `;
        const result = await db_1.default.query(q, [req.body.name, req.body.template_id, req.user?.team_id, req.body.category_id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getCreated(req, res) {
        const team_id = req.user?.team_id;
        const q = `SELECT create_pt_task_status($1, $2)`;
        const result = await db_1.default.query(q, [JSON.stringify(req.body), team_id]);
        const data = result.rows[0].create_pt_task_status[0];
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async get(req, res) {
        if (!req.query.template_id)
            return res.status(400).send(new server_response_1.ServerResponse(false, null));
        const q = `
          SELECT cpt_task_statuses.id,
                cpt_task_statuses.name,
                stsc.color_code,
                stsc.name AS category_name,
                cpt_task_statuses.category_id,
                stsc.description
          FROM cpt_task_statuses
                INNER JOIN sys_task_status_categories stsc ON cpt_task_statuses.category_id = stsc.id
          WHERE template_id = $1
            AND team_id = $2
          ORDER BY cpt_task_statuses.sort_order;
        `;
        const result = await db_1.default.query(q, [req.query.template_id, req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getCategories(req, res) {
        const q = `SELECT id, name, color_code, description
               FROM sys_task_status_categories
               ORDER BY index;`;
        const result = await db_1.default.query(q, []);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getById(req, res) {
        const q = `
      SELECT cpt_task_statuses.id, cpt_task_statuses.name, stsc.color_code
      FROM cpt_task_statuses
             INNER JOIN sys_task_status_categories stsc ON cpt_task_statuses.category_id = stsc.id
      WHERE cpt_task_statuses.id = $1
        AND template_id = $2;
    `;
        const result = await db_1.default.query(q, [req.params.id, req.query.template_id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async hasMoreCategories(statusId, templateId) {
        if (!statusId || !templateId)
            return false;
        const q = `
      SELECT COUNT(*) AS count
      FROM cpt_task_statuses
      WHERE category_id = (SELECT category_id FROM cpt_task_statuses WHERE id = $1)
        AND template_id = $2;
    `;
        const result = await db_1.default.query(q, [statusId, templateId]);
        const [data] = result.rows;
        return +data.count >= 2;
    }
    static async update(req, res) {
        const hasMoreCategories = await PtTaskStatusesController.hasMoreCategories(req.params.id, req.body.template_id);
        if (!hasMoreCategories)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, existsErrorMessage).withTitle("Status update failed!"));
        const q = `
      UPDATE cpt_task_statuses
      SET name = $2,
          category_id = COALESCE($4, (SELECT id FROM sys_task_status_categories WHERE is_todo IS TRUE))
      WHERE id = $1
        AND template_id = $3
      RETURNING (SELECT color_code FROM sys_task_status_categories WHERE id = cpt_task_statuses.category_id);
    `;
        const result = await db_1.default.query(q, [req.params.id, req.body.name, req.body.template_id, req.body.category_id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async updateName(req, res) {
        const q = `DO
              $$
              BEGIN
                  -- check whether the status name is already in
                  IF EXISTS(SELECT name
                            FROM cpt_task_statuses
                            WHERE name = '${req.body.name}'::TEXT
                              AND template_id = '${req.body.template_id}'::UUID)
                  THEN
                      RAISE 'STATUS_EXISTS_ERROR:%', ('${req.body.name}')::TEXT;
                  END IF;

                  UPDATE cpt_task_statuses
                  SET name = '${req.body.name}'::TEXT
                  WHERE id = '${req.params.id}'::UUID
                    AND template_id = '${req.body.template_id}'::UUID;
              END
              $$;`;
        const result = await db_1.default.query(q, []);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTaskStatusesController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTaskStatusesController, "getCreated", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTaskStatusesController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTaskStatusesController, "getCategories", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTaskStatusesController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTaskStatusesController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({
        raisedExceptions: {
            "STATUS_EXISTS_ERROR": `Status name "{0}" already exists. Please choose a different name.`
        }
    })
], PtTaskStatusesController, "updateName", null);
exports.default = PtTaskStatusesController;
