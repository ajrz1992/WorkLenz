"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const utils_1 = require("../shared/utils");
class NotificationController extends worklenz_controller_base_1.default {
    static async get(req, res) {
        const q = `
      SELECT un.id,
             un.message,
             un.created_at,
             un.read,
             (SELECT name FROM teams WHERE id = un.team_id) AS team,
             (SELECT name FROM projects WHERE id = t.project_id) AS project,
             (SELECT color_code FROM projects WHERE id = t.project_id) AS color,
             t.project_id,
             t.id AS task_id,
             un.team_id
      FROM user_notifications un
             LEFT JOIN tasks t ON un.task_id = t.id
      WHERE user_id = $1
        AND read = $2
      ORDER BY created_at DESC
      LIMIT 100;
    `;
        const result = await db_1.default.query(q, [req.user?.id, req.query.filter === "Read"]);
        for (const item of result.rows) {
            item.team_color = (0, utils_1.getColor)(item.team_name);
            item.url = item.project_id ? `/worklenz/projects/${item.project_id}` : null;
            item.params = { task: item.task_id, tab: "tasks-list" };
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getSettings(req, res) {
        const q = `
      SELECT email_notifications_enabled, popup_notifications_enabled, show_unread_items_count, daily_digest_enabled
      FROM notification_settings
      WHERE user_id = $1
        AND team_id = $2;
    `;
        const result = await db_1.default.query(q, [req.user?.id, req.user?.team_id]);
        const [data] = result.rows;
        const settings = {
            email_notifications_enabled: !!data?.email_notifications_enabled,
            popup_notifications_enabled: !!data?.popup_notifications_enabled,
            show_unread_items_count: !!data?.show_unread_items_count,
            daily_digest_enabled: !!data?.daily_digest_enabled
        };
        return res.status(200).send(new server_response_1.ServerResponse(true, settings));
    }
    static async getUnreadCount(req, res) {
        const q = `
      SELECT COALESCE(COUNT(*)::INTEGER, 0) AS notifications_count,
            (SELECT COALESCE(COUNT(*)::INTEGER, 0) FROM email_invitations WHERE email = (SELECT email FROM users WHERE id = $1)) AS invitations_count
      FROM user_notifications
      WHERE user_id = $1
      AND read = false
    `;
        const result = await db_1.default.query(q, [req.user?.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data.notifications_count + data.invitations_count));
    }
    static async updateSettings(req, res) {
        const q = `
      UPDATE notification_settings
      SET email_notifications_enabled = $3,
          popup_notifications_enabled = $4,
          show_unread_items_count     = $5,
          daily_digest_enabled        = $6
      WHERE user_id = $1
        AND team_id = $2
      RETURNING email_notifications_enabled,
        popup_notifications_enabled,
        show_unread_items_count,
        daily_digest_enabled;
    `;
        const result = await db_1.default.query(q, [
            req.user?.id,
            req.user?.team_id,
            !!req.body.email_notifications_enabled,
            !!req.body.popup_notifications_enabled,
            !!req.body.show_unread_items_count,
            !!req.body.daily_digest_enabled
        ]);
        const [data] = result.rows;
        const settings = {
            email_notifications_enabled: !!data?.email_notifications_enabled,
            popup_notifications_enabled: !!data?.popup_notifications_enabled,
            show_unread_items_count: !!data?.show_unread_items_count,
            daily_digest_enabled: !!data?.daily_digest_enabled
        };
        return res.status(200).send(new server_response_1.ServerResponse(true, settings));
    }
    static async update(req, res) {
        const q = `
      UPDATE user_notifications
      SET read = TRUE
      WHERE id = $1
        AND user_id = $2;
    `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async delete(req, res) {
        const q = `
        DELETE
        FROM user_notifications
        WHERE id = $1
          AND user_id = $2
    `;
        const result = await db_1.default.query(q, [req.params.id, req.user?.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async readAll(req, res) {
        const q = `
        UPDATE user_notifications
        SET read = TRUE
        WHERE user_id = $1
          AND read IS FALSE;
    `;
        const result = await db_1.default.query(q, [req.user?.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], NotificationController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], NotificationController, "getSettings", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], NotificationController, "getUnreadCount", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], NotificationController, "updateSettings", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], NotificationController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], NotificationController, "delete", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], NotificationController, "readAll", null);
exports.default = NotificationController;
