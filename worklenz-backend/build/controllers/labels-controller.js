"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const constants_1 = require("../shared/constants");
class LabelsController extends worklenz_controller_base_1.default {
    static async get(req, res) {
        const q = `
      WITH lbs AS (SELECT id,
                          name,
                          color_code,
                          (SELECT COUNT(*) FROM task_labels WHERE label_id = team_labels.id) AS usage,
                          EXISTS(SELECT 1
                                 FROM task_labels
                                 WHERE task_labels.label_id = team_labels.id
                                   AND EXISTS(SELECT 1
                                              FROM tasks
                                              WHERE id = task_labels.task_id
                                                AND project_id = $2)) AS used
                   FROM team_labels
                   WHERE team_id = $1
                   ORDER BY name)
      SELECT id, name, color_code, usage
      FROM lbs
      ORDER BY used DESC;
    `;
        const result = await db_1.default.query(q, [req.user?.team_id, req.query.project || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getByTask(req, res) {
        const q = `
      SELECT (SELECT name FROM team_labels WHERE id = task_labels.label_id),
             (SELECT color_code FROM team_labels WHERE id = task_labels.label_id)
      FROM task_labels
      WHERE task_id = $1;
    `;
        const result = await db_1.default.query(q, [req.params.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getByProject(req, res) {
        const q = `
      SELECT id, name, color_code
      FROM team_labels
      WHERE team_id = $2
        AND EXISTS(SELECT 1
                   FROM tasks
                   WHERE project_id = $1
                     AND EXISTS(SELECT 1 FROM task_labels WHERE task_id = tasks.id AND label_id = team_labels.id))
      ORDER BY name;
    `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id]);
        for (const label of result.rows) {
            label.color_code = label.color_code + constants_1.TASK_PRIORITY_COLOR_ALPHA;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async updateColor(req, res) {
        const q = `UPDATE team_labels
               SET color_code = $3
               WHERE id = $1
                 AND team_id = $2;`;
        if (!constants_1.WorklenzColorCodes.includes(req.body.color))
            return res.status(400).send(new server_response_1.ServerResponse(false, null));
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id, req.body.color]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async deleteById(req, res) {
        const q = `DELETE
               FROM team_labels
               WHERE id = $1
                 AND team_id = $2;`;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], LabelsController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], LabelsController, "getByTask", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], LabelsController, "getByProject", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], LabelsController, "updateColor", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], LabelsController, "deleteById", null);
exports.default = LabelsController;
