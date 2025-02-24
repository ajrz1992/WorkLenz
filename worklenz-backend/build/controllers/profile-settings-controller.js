"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const server_response_1 = require("../models/server-response");
const notifications_service_1 = require("../services/notifications/notifications.service");
const utils_1 = require("../shared/utils");
const generate_project_key_1 = require("../utils/generate-project-key");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
class ProfileSettingsController extends worklenz_controller_base_1.default {
    static async setup(req, res) {
        const q = `SELECT complete_account_setup($1, $2, $3) AS account;`;
        req.body.key = (0, generate_project_key_1.generateProjectKey)(req.body.project_name, []) || null;
        const result = await db_1.default.query(q, [req.user?.id, req.user?.team_id, JSON.stringify(req.body)]);
        const [data] = result.rows;
        if (!data)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Account setup failed! Please try again"));
        const newMembers = data.account.members || [];
        notifications_service_1.NotificationsService.sendTeamMembersInvitations(newMembers, req.user);
        return res.status(200).send(new server_response_1.ServerResponse(true, data.account));
    }
    static async get(req, res) {
        const q = `SELECT name, email
               FROM users
               WHERE id = $1;`;
        const result = await db_1.default.query(q, [req.user?.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async update(req, res) {
        const q = `UPDATE users
               SET name       = $2,
                   updated_at = CURRENT_TIMESTAMP
               WHERE id = $1
               RETURNING id, name, email;`;
        const result = await db_1.default.query(q, [req.user?.id, req.body.name]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async update_team_name(req, res) {
        const q = `SELECT update_team_name($1);`;
        const body = {
            id: req.params.id,
            name: req.body.name,
            key: (0, utils_1.slugify)(req.body.name),
            user_id: req.user?.id
        };
        await db_1.default.query(q, [JSON.stringify(body)]);
        return res.status(200).send(new server_response_1.ServerResponse(true, body));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProfileSettingsController, "setup", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProfileSettingsController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProfileSettingsController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProfileSettingsController, "update_team_name", null);
exports.default = ProfileSettingsController;
