"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const utils_1 = require("../shared/utils");
const constants_1 = require("../shared/constants");
const email_notifications_1 = require("../shared/email-notifications");
const notifications_service_1 = require("../services/notifications/notifications.service");
const io_1 = require("../shared/io");
const events_1 = require("../socket.io/events");
class ProjectCommentsController extends worklenz_controller_base_1.default {
    static replaceContent(messageContent, mentions) {
        const mentionNames = mentions.map(mention => mention.name);
        const replacedContent = mentionNames.reduce((content, mentionName, index) => {
            const regex = new RegExp(`@${mentionName}`, "g");
            return content.replace(regex, `{${index}}`);
        }, messageContent);
        return replacedContent;
    }
    static async sendMail(config) {
        const subject = config.message.replace(constants_1.HTML_TAG_REGEXP, "");
        const data = {
            greeting: `Hi ${config.receiverName}`,
            summary: subject,
            team: config.teamName,
            project_name: config.projectName,
            comment: config.content
        };
        await (0, email_notifications_1.sendProjectComment)(config.receiverEmail, data);
    }
    static async create(req, res) {
        const userId = req.user?.id;
        const mentions = req.body.mentions;
        const projectId = req.body.project_id;
        const teamId = req.user?.team_id;
        let commentContent = req.body.content;
        if (mentions.length > 0) {
            commentContent = await this.replaceContent(commentContent, mentions);
        }
        const body = {
            project_id: projectId,
            created_by: userId,
            content: commentContent,
            mentions,
            team_id: teamId
        };
        const q = `SELECT create_project_comment($1) AS comment`;
        const result = await db_1.default.query(q, [JSON.stringify(body)]);
        const [data] = result.rows;
        const projectMembers = await this.getMembersList(projectId);
        const commentMessage = `<b>${req.user?.name}</b> added a comment on <b>${data.comment.project_name}</b> (${data.comment.team_name})`;
        for (const member of projectMembers || []) {
            if (member.id && member.id === req.user?.id)
                continue;
            notifications_service_1.NotificationsService.createNotification({
                userId: member.id,
                teamId: req.user?.team_id,
                socketId: member.socket_id,
                message: commentMessage,
                taskId: null,
                projectId
            });
            if (member.id !== req.user?.id && member.socket_id) {
                io_1.IO.emit(events_1.SocketEvents.NEW_PROJECT_COMMENT_RECEIVED, member.socket_id, true);
            }
        }
        const mentionMessage = `<b>${req.user?.name}</b> has mentioned you in a comment on <b>${data.comment.project_name}</b> (${data.comment.team_name})`;
        const rdMentions = [...new Set(req.body.mentions || [])];
        for (const mention of rdMentions) {
            if (mention) {
                const member = await this.getUserDataByUserId(mention.id, projectId, teamId);
                notifications_service_1.NotificationsService.sendNotification({
                    team: data.comment.team_name,
                    receiver_socket_id: member.socket_id,
                    message: mentionMessage,
                    task_id: "",
                    project_id: projectId,
                    project: data.comment.project_name,
                    project_color: member.project_color,
                    team_id: req.user?.team_id
                });
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getUserDataByUserId(informedBy, projectId, team_id) {
        const q = `
              SELECT id,
                  name,
                  email,
                  socket_id,
                  (SELECT email_notifications_enabled
                  FROM notification_settings
                  WHERE notification_settings.team_id = $3
                    AND notification_settings.user_id = $1),
                  (SELECT color_code FROM projects WHERE id = $2) AS project_color
              FROM users
              WHERE id = $1;
    `;
        const result = await db_1.default.query(q, [informedBy, projectId, team_id]);
        const [data] = result.rows;
        return data;
    }
    static async getMembersList(projectId) {
        const q = `
            SELECT
                tm.user_id AS id,
                (SELECT name
                FROM team_member_info_view
                WHERE team_member_info_view.team_member_id = tm.id),
                (SELECT email
                FROM team_member_info_view
                WHERE team_member_info_view.team_member_id = tm.id) AS email,
                (SELECT socket_id FROM users WHERE users.id = tm.user_id) AS socket_id,
                (SELECT email_notifications_enabled
                  FROM notification_settings
                  WHERE team_id = tm.team_id
                    AND notification_settings.user_id = tm.user_id) AS email_notifications_enabled
            FROM project_members
                INNER JOIN team_members tm ON project_members.team_member_id = tm.id
                LEFT JOIN users u ON tm.user_id = u.id
            WHERE project_id = $1 AND tm.user_id IS NOT NULL
            ORDER BY name
    `;
        const result = await db_1.default.query(q, [projectId]);
        const members = result.rows;
        return members;
    }
    static async getMembers(req, res) {
        const members = await this.getMembersList(req.params.id);
        return res.status(200).send(new server_response_1.ServerResponse(true, members || this.paginatedDatasetDefaultStruct));
    }
    static async getByProjectId(req, res) {
        const limit = req.query.isLimit;
        const q = `
      SELECT
        pc.id,
        pc.content AS content,
        (SELECT COALESCE(JSON_AGG(rec), '[]'::JSON)
        FROM (SELECT u.name  AS user_name,
                     u.email AS user_email
              FROM project_comment_mentions pcm
                    LEFT JOIN users u ON pcm.informed_by = u.id
              WHERE pcm.comment_id = pc.id) rec) AS mentions,
        (SELECT id FROM users WHERE id = pc.created_by) AS user_id,
        (SELECT name FROM users WHERE id = pc.created_by) AS created_by,
        (SELECT avatar_url FROM users WHERE id = pc.created_by),
        pc.created_at,
        pc.updated_at
      FROM project_comments pc
      WHERE pc.project_id = $1 ORDER BY pc.updated_at DESC
    `;
        const result = await db_1.default.query(q, [req.params.id]);
        const data = result.rows;
        for (const comment of data) {
            const { mentions } = comment;
            if (mentions.length > 0) {
                const placeHolders = comment.content.match(/{\d+}/g);
                if (placeHolders) {
                    comment.content = await comment.content.replace(/\n/g, "</br>");
                    placeHolders.forEach((placeHolder) => {
                        const index = parseInt(placeHolder.match(/\d+/)[0]);
                        if (index >= 0 && index < comment.mentions.length) {
                            comment.content = comment.content.replace(placeHolder, `<span class='mentions'>@${comment.mentions[index].user_name}</span>`);
                        }
                    });
                }
            }
            const color_code = (0, utils_1.getColor)(comment.created_by);
            comment.color_code = color_code;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getCountByProjectId(req, res) {
        const q = `SELECT COUNT(*) AS total FROM project_comments WHERE project_id = $1`;
        const result = await db_1.default.query(q, [req.params.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, parseInt(data.total)));
    }
    static async deleteById(req, res) {
        const q = `DELETE FROM project_comments WHERE id = $1 RETURNING id`;
        const result = await db_1.default.query(q, [req.params.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectCommentsController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectCommentsController, "getMembers", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectCommentsController, "getByProjectId", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectCommentsController, "getCountByProjectId", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectCommentsController, "deleteById", null);
exports.default = ProjectCommentsController;
