"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../../decorators/handle-exceptions"));
const server_response_1 = require("../../models/server-response");
const constants_1 = require("../../shared/constants");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("../worklenz-controller-base"));
class PtTaskPhasesController extends worklenz_controller_base_1.default {
    static DEFAULT_PHASE_COLOR = "#fbc84c";
    static async create(req, res) {
        if (!req.query.id)
            return res.status(400).send(new server_response_1.ServerResponse(false, null, "Invalid request"));
        const q = `
            INSERT INTO cpt_phases (name, color_code, template_id)
            VALUES (CONCAT('Untitled Phase (', (SELECT COUNT(*) FROM cpt_phases WHERE template_id = $2) + 1, ')'), $1,
                    $2)
            RETURNING id, name, color_code;
        `;
        req.body.color_code = this.DEFAULT_PHASE_COLOR;
        const result = await db_1.default.query(q, [req.body.color_code, req.query.id]);
        const [data] = result.rows;
        data.color_code = data.color_code + constants_1.TASK_STATUS_COLOR_ALPHA;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async get(req, res) {
        const q = `
            SELECT id, name, color_code, (SELECT COUNT(*) FROM cpt_task_phases WHERE phase_id = cpt_phases.id) AS usage
            FROM cpt_phases
            WHERE template_id = $1
            ORDER BY created_at DESC;
        `;
        const result = await db_1.default.query(q, [req.query.id]);
        for (const phase of result.rows)
            phase.color_code = phase.color_code + constants_1.TASK_STATUS_COLOR_ALPHA;
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async update(req, res) {
        const q = `SELECT update_phase_name($1, $2, $3);`;
        const result = await db_1.default.query(q, [req.params.id, req.body.name.trim(), req.query.id]);
        const [data] = result.rows;
        data.update_phase_name.color_code = data.update_phase_name.color_code + constants_1.TASK_STATUS_COLOR_ALPHA;
        return res.status(200).send(new server_response_1.ServerResponse(true, data.update_phase_name));
    }
    static async updateLabel(req, res) {
        const q = `
            UPDATE custom_project_templates
            SET phase_label = $2
            WHERE id = $1;
        `;
        const result = await db_1.default.query(q, [req.params.id, req.body.name.trim()]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async updateColor(req, res) {
        const q = `UPDATE cpt_phases SET color_code = $3 WHERE id = $1 AND template_id = $2 RETURNING id, name, color_code;`;
        const result = await db_1.default.query(q, [req.params.id, req.query.id, req.body.color_code.substring(0, req.body.color_code.length - 2)]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async deleteById(req, res) {
        const q = `
            DELETE
            FROM cpt_phases
            WHERE id = $1
                AND template_id = $2
        `;
        const result = await db_1.default.query(q, [req.params.id, req.query.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTaskPhasesController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTaskPhasesController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({
        raisedExceptions: {
            "PHASE_EXISTS_ERROR": `Phase name "{0}" already exists. Please choose a different name.`
        }
    })
], PtTaskPhasesController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTaskPhasesController, "updateLabel", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTaskPhasesController, "updateColor", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTaskPhasesController, "deleteById", null);
exports.default = PtTaskPhasesController;
