"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const io_1 = require("../../shared/io");
const utils_1 = require("../../shared/utils");
const events_1 = require("../../socket.io/events");
const notification_1 = tslib_1.__importDefault(require("./notification"));
const email_templates_1 = require("../../shared/email-templates");
class NotificationsService {
    static TYPE_POP = 1;
    static TYPE_EMAIL = 2;
    static isAllowPopup(type) {
        return type & this.TYPE_POP;
    }
    static isAllowEmail(type) {
        return type & this.TYPE_EMAIL;
    }
    static isAllowBoth(type) {
        return this.isAllowPopup(type) && this.isAllowEmail(type);
    }
    static async createTaskUpdate(type, reporterId, taskId, userId, teamId) {
        if (!userId || !taskId)
            return;
        try {
            const q = "SELECT notify_task_assignment_update($1, $2, $3, $4, $5) AS receiver;";
            const result = await db_1.default.query(q, [type, reporterId, taskId, userId, teamId]);
            const [data] = result.rows;
            const receiver = data.receiver || {};
            if (receiver?.receiver_socket_id && (reporterId !== userId)) {
                NotificationsService.sendNotification(receiver);
            }
        }
        catch (error) {
            (0, utils_1.log_error)(error);
        }
    }
    static sendNotification(receiver) {
        const url = receiver.project_id ? `/worklenz/projects/${receiver.project_id}` : null;
        const notification = new notification_1.default(receiver.team, receiver.team_id, receiver.message, url);
        if (receiver.project) {
            notification.setProject(receiver.project);
        }
        if (receiver.project_color) {
            notification.setColor(receiver.project_color);
        }
        if (receiver.task_id) {
            notification.setParams({ task: receiver.task_id });
            notification.setTaskId(receiver.task_id);
        }
        if (receiver.project_id) {
            notification.setProjectId(receiver.project_id);
        }
        io_1.IO.emit(events_1.SocketEvents.NOTIFICATIONS_UPDATE, receiver.receiver_socket_id, notification);
    }
    static sendInvitation(userId, userName, teamName, teamId, teamMemberId) {
        const message = `<b>${userName}</b> has invited you to work with <b>${teamName}</b>.`;
        const payload = { message, team: teamName, team_id: teamId };
        io_1.IO.emitByTeamMemberId(teamMemberId, userId || null, events_1.SocketEvents.INVITATIONS_UPDATE, payload);
    }
    static async createNotification(request) {
        try {
            const q = "SELECT create_notification($1, $2, $3, $4, $5) AS res;";
            const result = await db_1.default.query(q, [request.userId, request.teamId, request.taskId, request.projectId, request.message]);
            const [data] = result.rows;
            const response = data.res;
            this.sendNotification({
                receiver_socket_id: request.socketId,
                project: response.project,
                message: request.message,
                project_color: response.project_color,
                project_id: request.projectId,
                team: response.team,
                team_id: request.teamId
            });
        }
        catch (error) {
            (0, utils_1.log_error)(error);
        }
    }
    static sendTeamMembersInvitations(members, user, projectId) {
        for (const member of members) {
            (0, email_templates_1.sendInvitationEmail)(!member.is_new, user, !member.is_new ? member.name : member.team_member_id, member.email, member.team_member_user_id, member.name || member.email?.split("@")[0], projectId);
            if (member.team_member_id) {
                NotificationsService.sendInvitation(user.id, user.name, user.team_name, user.team_id, member.team_member_id);
            }
            member.id = member.team_member_id;
        }
    }
}
exports.NotificationsService = NotificationsService;
