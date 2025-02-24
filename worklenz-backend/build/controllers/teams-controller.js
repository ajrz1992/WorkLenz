"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class TeamsController extends worklenz_controller_base_1.default {
    static async create(req, res) {
        const { name } = req.body;
        const checkAvailabilityq = `SELECT * from teams WHERE user_id = $2 AND name = $1`;
        const check = await db_1.default.query(checkAvailabilityq, [name, req.user?.id]);
        if (check.rows.length)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Team name already exist. Try anothor!"));
        const q = `SELECT create_new_team($1, $2);`;
        const result = await db_1.default.query(q, [name, req.user?.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async get(req, res) {
        const q = `
      SELECT id,
             name,
             created_at,
             (id = $2) AS active,
             (user_id = $1) AS owner,
             EXISTS(SELECT 1
                    FROM email_invitations
                    WHERE team_id = teams.id
                      AND team_member_id = (SELECT id
                                            FROM team_members
                                            WHERE team_members.user_id = $1
                                              AND team_members.team_id = teams.id)) AS pending_invitation,
             (CASE
                WHEN user_id = $1 THEN 'You'
                ELSE (SELECT name FROM users WHERE id = teams.user_id) END
               ) AS owns_by
      FROM teams
      WHERE user_id = $1
         OR id IN (SELECT team_id FROM team_members WHERE team_members.user_id = $1
               AND team_members.active IS TRUE)
      ORDER BY name;
    `;
        const result = await db_1.default.query(q, [req.user?.id, req.user?.team_id ?? null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getTeamInvites(req, res) {
        const q = `
      SELECT id,
             team_id,
             team_member_id,
             (SELECT name FROM teams WHERE id = team_id) AS team_name,
             (SELECT name FROM users WHERE id = (SELECT user_id FROM teams WHERE id = team_id)) AS team_owner
      FROM email_invitations
      WHERE email = (SELECT email FROM users WHERE id = $1);
    `;
        const result = await db_1.default.query(q, [req.user?.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async update(req, res) {
        const q = `SELECT accept_invitation($1, $2, $3) AS invitation;`;
        const result = await db_1.default.query(q, [
            req.user?.email,
            req.body.team_member_id,
            req.user?.id,
        ]);
        const [data] = result.rows;
        if (req.body.show_alert) {
            return res.status(200).send(new server_response_1.ServerResponse(true, data.invitation, "Team invitation accepted"));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data.invitation));
    }
    static async activate(req, res) {
        const q = `SELECT activate_team($1, $2)`;
        await db_1.default.query(q, [req.body.id, req.user?.id ?? null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, { subdomain: null }));
    }
    static async updateNameOnce(req, res) {
        const q = `SELECT update_team_name_once($1, $2, $3);`;
        const result = await db_1.default.query(q, [req.user?.id, req.user?.team_id, req.body.name || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamsController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamsController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamsController, "getTeamInvites", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamsController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TeamsController, "activate", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({
        raisedExceptions: {
            "TEAM_NAME_EXISTS_ERROR": "Team name already taken. Please enter a different name."
        }
    })
], TeamsController, "updateNameOnce", null);
exports.default = TeamsController;
