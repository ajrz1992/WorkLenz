"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const utils_1 = require("../shared/utils");
const constants_1 = require("../shared/constants");
class ProjectCategoriesController extends worklenz_controller_base_1.default {
    static flatString(text) {
        return (text || "").split(",").map(s => `'${s}'`).join(",");
    }
    static async create(req, res) {
        const q = `
      INSERT INTO project_categories (name, team_id, created_by, color_code)
      VALUES ($1, $2, $3, $4)
      RETURNING id, name, color_code;
    `;
        const name = req.body.name.trim();
        const result = await db_1.default.query(q, [name, req.user?.team_id, req.user?.id, name ? (0, utils_1.getColor)(name) : null]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async get(req, res) {
        const q = `
      SELECT id, name, color_code, (SELECT COUNT(*) FROM projects WHERE category_id = project_categories.id) AS usage
      FROM project_categories
      WHERE team_id = $1;
    `;
        const result = await db_1.default.query(q, [req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getById(req, res) {
        const q = `  
    SELECT id, name, color_code, (SELECT COUNT(*) FROM projects WHERE category_id = project_categories.id) AS usage
    FROM project_categories
    WHERE team_id = $1;`;
        const result = await db_1.default.query(q, [req.params.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getTeamsByOrg(teamId) {
        const q = `SELECT id FROM teams WHERE in_organization(id, $1)`;
        const result = await db_1.default.query(q, [teamId]);
        return result.rows;
    }
    static async getByMultipleTeams(req, res) {
        const teams = await this.getTeamsByOrg(req.user?.team_id);
        const teamIds = teams.map(team => team.id).join(",");
        const q = `SELECT id, name, color_code FROM project_categories WHERE team_id IN (${this.flatString(teamIds)});`;
        const result = await db_1.default.query(q);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async update(req, res) {
        const q = `
      UPDATE project_categories
      SET color_code = $2
      WHERE id = $1
        AND team_id = $3;
    `;
        if (!constants_1.WorklenzColorCodes.includes(req.body.color))
            return res.status(400).send(new server_response_1.ServerResponse(false, null));
        const result = await db_1.default.query(q, [req.params.id, req.body.color, req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async deleteById(req, res) {
        const q = `
      DELETE
      FROM project_categories
      WHERE id = $1
        AND team_id = $2;
    `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectCategoriesController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectCategoriesController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectCategoriesController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectCategoriesController, "getByMultipleTeams", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectCategoriesController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectCategoriesController, "deleteById", null);
exports.default = ProjectCategoriesController;
