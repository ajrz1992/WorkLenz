"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const utils_1 = require("../shared/utils");
const server_response_1 = require("../models/server-response");
const s3_1 = require("../shared/s3");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const { S3_URL } = process.env;
if (!S3_URL) {
    (0, utils_1.log_error)("Invalid S3_URL. Please check .env file.");
}
class AttachmentController extends worklenz_controller_base_1.default {
    static async createTaskAttachment(req, res) {
        const { file, file_name, task_id, project_id, size, type } = req.body;
        const q = `
      INSERT INTO task_attachments (name, task_id, team_id, project_id, uploaded_by, size, type)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, name, size, type, created_at, CONCAT($8::TEXT, '/', team_id, '/', project_id, '/', id, '.', type) AS url;
    `;
        const result = await db_1.default.query(q, [
            file_name,
            task_id,
            req.user?.team_id,
            project_id,
            req.user?.id,
            size,
            type,
            `${S3_URL}/${(0, s3_1.getRootDir)()}`
        ]);
        const [data] = result.rows;
        const s3Url = await (0, s3_1.uploadBase64)(file, (0, s3_1.getKey)(req.user?.team_id, project_id, data.id, data.type));
        if (!data?.id || !s3Url)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Attachment upload failed"));
        data.size = (0, utils_1.humanFileSize)(data.size);
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async createAvatarAttachment(req, res) {
        const { type, buffer } = req.body;
        const s3Url = await (0, s3_1.uploadBuffer)(buffer, type, (0, s3_1.getAvatarKey)(req.user?.id, type));
        if (!s3Url)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Avatar upload failed"));
        const q = "UPDATE users SET avatar_url = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING avatar_url;";
        const result = await db_1.default.query(q, [req.user?.id, `${s3Url}?v=${(0, utils_1.smallId)(4)}`]);
        const [data] = result.rows;
        if (!data)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Avatar upload failed"));
        return res.status(200).send(new server_response_1.ServerResponse(true, { url: data.avatar_url }, "Avatar updated."));
    }
    static async get(req, res) {
        const q = `
      SELECT id,
             name,
             size,
             CONCAT($2::TEXT, '/', team_id, '/', project_id, '/', id, '.', type) AS url,
             type,
             created_at
      FROM task_attachments
      WHERE task_id = $1;
    `;
        const result = await db_1.default.query(q, [req.params.id, `${S3_URL}/${(0, s3_1.getRootDir)()}`]);
        for (const item of result.rows)
            item.size = (0, utils_1.humanFileSize)(item.size);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getByProjectId(req, res) {
        const { size, offset } = this.toPaginationOptions(req.query, "name");
        const q = `
              SELECT ROW_TO_JSON(rec) AS attachments
              FROM (SELECT COUNT(*)                          AS total,
                          (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                            FROM (SELECT task_attachments.id,
                                        task_attachments.name,
                                        CONCAT((SELECT key FROM projects WHERE id = task_attachments.project_id), '-',
                                                (SELECT task_no FROM tasks WHERE id = task_attachments.task_id)) AS task_key,
                                        size,
                                        CONCAT($2::TEXT, '/', task_attachments.team_id, '/', task_attachments.project_id, '/',task_attachments.id,'.',type)                                                            AS url,
                                        task_attachments.type,
                                        task_attachments.created_at,
                                        t.name                                                                  AS task_name,
                                        (SELECT name FROM users WHERE id = task_attachments.uploaded_by)        AS uploader_name
                                  FROM task_attachments
                                          LEFT JOIN tasks t ON task_attachments.task_id = t.id
                                  WHERE task_attachments.project_id = $1
                                  ORDER BY created_at DESC
                          LIMIT $3 OFFSET $4)t) AS data
                    FROM task_attachments
                            LEFT JOIN tasks t ON task_attachments.task_id = t.id
                    WHERE task_attachments.project_id = $1) rec;
    `;
        const result = await db_1.default.query(q, [req.params.id, `${S3_URL}/${(0, s3_1.getRootDir)()}`, size, offset]);
        const [data] = result.rows;
        for (const item of data?.attachments.data || [])
            item.size = (0, utils_1.humanFileSize)(item.size);
        return res.status(200).send(new server_response_1.ServerResponse(true, data?.attachments || this.paginatedDatasetDefaultStruct));
    }
    static async deleteById(req, res) {
        const q = `DELETE
               FROM task_attachments
               WHERE id = $1
               RETURNING CONCAT($2::TEXT, '/', team_id, '/', project_id, '/', id, '.', type) AS key;`;
        const result = await db_1.default.query(q, [req.params.id, (0, s3_1.getRootDir)()]);
        const [data] = result.rows;
        if (data?.key)
            void (0, s3_1.deleteObject)(data.key);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async download(req, res) {
        const q = `SELECT CONCAT($2::TEXT, '/', team_id, '/', project_id, '/', id, '.', type) AS key
               FROM task_attachments
               WHERE id = $1;`;
        const result = await db_1.default.query(q, [req.query.id, (0, s3_1.getRootDir)()]);
        const [data] = result.rows;
        if (data?.key) {
            const url = await (0, s3_1.createPresignedUrlWithClient)(data.key, req.query.file);
            return res.status(200).send(new server_response_1.ServerResponse(true, url));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, null));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], AttachmentController, "createTaskAttachment", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], AttachmentController, "createAvatarAttachment", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], AttachmentController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], AttachmentController, "getByProjectId", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], AttachmentController, "deleteById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], AttachmentController, "download", null);
exports.default = AttachmentController;
