"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const utils_1 = require("../shared/utils");
class ProjectFoldersController extends worklenz_controller_base_1.default {
    static async create(req, res) {
        const q = `
      INSERT INTO project_folders (name, key, created_by, team_id, color_code)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, name, key, color_code;
    `;
        const name = req.body.name?.trim() || null;
        const key = (0, utils_1.slugify)(name);
        const createdBy = req.user?.id ?? null;
        const teamId = req.user?.team_id ?? null;
        const colorCode = req.body.color_code?.trim() || "#70a6f3";
        const result = await db_1.default.query(q, [name, key, createdBy, teamId, colorCode]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async get(req, res) {
        const parentFolderId = req.query.parent?.trim() || null;
        const q = [
            `SELECT id,
              name,
              key,
              color_code,
              created_at,
              (SELECT name
               FROM team_member_info_view
               WHERE user_id = project_folders.created_by
                 AND team_member_info_view.team_id = project_folders.team_id) AS created_by
       FROM project_folders
       WHERE team_id = $1
      `,
            parentFolderId ? `AND parent_folder_id = $2` : "",
            `ORDER BY name;`
        ].join(" ");
        const params = parentFolderId ? [req.user?.team_id, parentFolderId] : [req.user?.team_id];
        const result = await db_1.default.query(q, params);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getById(req, res) {
        const q = `
      SELECT id, key, name, color_code
      FROM project_folders
      WHERE key = $1
        AND team_id = $2;
    `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.team_id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async update(req, res) {
        const q = `
      UPDATE project_folders
      SET name       = $2,
          key        = $3,
          color_code = COALESCE($5, color_code),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
        AND team_id = $4
      RETURNING id, name, key;
    `;
        const name = req.body.name?.trim() || null;
        const key = (0, utils_1.slugify)(name);
        const colorCode = req.body.color_code?.trim() || null;
        const result = await db_1.default.query(q, [req.params.id, name, key, req.user?.team_id, colorCode]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async deleteById(req, res) {
        const q = `
      DELETE
      FROM project_folders
      WHERE id = $1
        AND team_id = $2;
    `;
        await db_1.default.query(q, [req.params.id, req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, null));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectFoldersController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectFoldersController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectFoldersController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectFoldersController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectFoldersController, "deleteById", null);
exports.default = ProjectFoldersController;
