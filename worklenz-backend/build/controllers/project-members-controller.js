"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const utils_1 = require("../shared/utils");
const team_members_controller_1 = tslib_1.__importDefault(require("./team-members-controller"));
const notifications_service_1 = require("../services/notifications/notifications.service");
class ProjectMembersController extends worklenz_controller_base_1.default {
    static async checkIfUserAlreadyExists(owner_id, email) {
        if (!owner_id)
            throw new Error("Owner not found.");
        const q = `SELECT EXISTS(SELECT tmi.team_member_id
              FROM team_member_info_view AS tmi
                       JOIN teams AS t ON tmi.team_id = t.id
              WHERE tmi.email = $1::TEXT
                AND t.user_id = $2::UUID);`;
        const result = await db_1.default.query(q, [email, owner_id]);
        const [data] = result.rows;
        return data.exists;
    }
    static async createOrInviteMembers(body) {
        if (!body)
            return;
        const q = `SELECT create_project_member($1) AS res;`;
        const result = await db_1.default.query(q, [JSON.stringify(body)]);
        const [data] = result.rows;
        const response = data.res;
        if (response?.notification && response?.member_user_id) {
            notifications_service_1.NotificationsService.sendNotification({
                receiver_socket_id: response.socket_id,
                project: response.project,
                message: response.notification,
                project_color: response.project_color,
                project_id: response.project_id,
                team: response.team,
                team_id: body.team_id
            });
        }
        return data;
    }
    static async create(req, res) {
        req.body.user_id = req.user?.id;
        req.body.team_id = req.user?.team_id;
        req.body.access_level = req.body.access_level ? req.body.access_level : "MEMBER";
        const data = await this.createOrInviteMembers(req.body);
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async createByEmail(req, res) {
        req.body.user_id = req.user?.id;
        req.body.team_id = req.user?.team_id;
        if (!req.user?.team_id)
            return res.status(200).send(new server_response_1.ServerResponse(false, "Required fields are missing."));
        const teamMemberReq = {
            team_id: req.user?.team_id,
            emails: [req.body.email]
        };
        if (req.body.project_id)
            teamMemberReq.project_id = req.body.project_id;
        const [member] = await team_members_controller_1.default.createOrInviteMembers(teamMemberReq, req.user);
        if (!member)
            return res.status(200).send(new server_response_1.ServerResponse(true, null, "Failed to add the member to the project. Please try again."));
        const projectMemberReq = {
            team_member_id: member.team_member_id,
            team_id: req.user?.team_id,
            project_id: req.body.project_id,
            user_id: req.user?.id,
            access_level: req.body.access_level ? req.body.access_level : "MEMBER"
        };
        const data = await this.createOrInviteMembers(projectMemberReq);
        return res.status(200).send(new server_response_1.ServerResponse(true, data.member));
    }
    static async get(req, res) {
        const q = `
      SELECT project_members.id,
             tm.id AS team_member_id,
             (SELECT email FROM team_member_info_view WHERE team_member_info_view.team_member_id = tm.id),
             (SELECT name FROM team_member_info_view WHERE team_member_id = project_members.team_member_id) AS name,
             u.avatar_url,
             jt.name AS job_title
      FROM project_members
             INNER JOIN team_members tm ON project_members.team_member_id = tm.id
             LEFT JOIN job_titles jt ON tm.job_title_id = jt.id
             LEFT JOIN users u ON tm.user_id = u.id
      WHERE project_id = $1
      ORDER BY project_members.created_at DESC;
    `;
        const result = await db_1.default.query(q, [req.params.id]);
        result.rows.forEach((a) => a.color_code = (0, utils_1.getColor)(a.name));
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async checkIfMemberExists(projectId, teamMemberId) {
        const q = `SELECT EXISTS(SELECT id FROM project_members WHERE project_id = $1::UUID AND team_member_id = $2::UUID)`;
        const result = await db_1.default.query(q, [projectId, teamMemberId]);
        const [data] = result.rows;
        return data.exists;
    }
    static async deleteById(req, res) {
        const q = `SELECT remove_project_member($1, $2, $3) AS res;`;
        const result = await db_1.default.query(q, [req.params.id, req.user?.id, req.user?.team_id]);
        const [data] = result.rows;
        const response = data.res;
        if (response?.notification && response?.member_user_id) {
            notifications_service_1.NotificationsService.sendNotification({
                receiver_socket_id: response.socket_id,
                project: response.project,
                message: response.notification,
                project_color: response.project_color,
                project_id: response.project_id,
                team: response.team,
                team_id: req.user?.team_id
            });
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectMembersController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({
        raisedExceptions: {
            "ERROR_EMAIL_INVITATION_EXISTS": "Member already have a pending invitation that has not been accepted."
        }
    })
], ProjectMembersController, "createByEmail", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectMembersController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectMembersController, "deleteById", null);
exports.default = ProjectMembersController;
