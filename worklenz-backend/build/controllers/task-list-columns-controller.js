"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
class TaskListColumnsController extends worklenz_controller_base_1.default {
    static async getProjectTaskListColumns(req, res) {
        const q = `
      SELECT name,
             key,
             index,
             pinned,
             (SELECT phase_label FROM projects WHERE id = $1) AS phase_label
      FROM project_task_list_cols
      WHERE project_id = $1
      ORDER BY index;
    `;
        const result = await db_1.default.query(q, [req.params.id]);
        const phase = result.rows.find(phase => phase.key === "PHASE");
        if (phase)
            phase.name = phase.phase_label;
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async toggleColumn(req, res) {
        const q = `UPDATE project_task_list_cols
               SET pinned = $3
               WHERE project_id = $1
                 AND key = $2;`;
        const result = await db_1.default.query(q, [req.params.id, req.body.key, !!req.body.pinned]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskListColumnsController, "getProjectTaskListColumns", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskListColumnsController, "toggleColumn", null);
exports.default = TaskListColumnsController;
