"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const notifications_service_1 = require("../services/notifications/notifications.service");
const utils_1 = require("../shared/utils");
const constants_1 = require("../shared/constants");
const helpers_1 = require("../cron_jobs/helpers");
const email_notifications_1 = require("../shared/email-notifications");
async function getAssignees(taskId) {
    const result1 = await db_1.default.query("SELECT get_task_assignees($1) AS assignees;", [taskId]);
    const [d] = result1.rows;
    return d.assignees || [];
}
class TaskCommentsController extends worklenz_controller_base_1.default {
    static replaceContent(messageContent, mentions) {
        const mentionNames = mentions.map(mention => mention.name);
        const replacedContent = mentionNames.reduce((content, mentionName, index) => {
            const regex = new RegExp(`@${mentionName}`, "g");
            return content.replace(regex, `{${index}}`);
        }, messageContent);
        return replacedContent;
    }
    static async getUserDataByTeamMemberId(senderUserId, teamMemberId, projectId) {
        const q = `
      SELECT id,
             socket_id,
             users.name AS user_name,
             (SELECT email_notifications_enabled
              FROM notification_settings
              WHERE notification_settings.team_id = (SELECT team_id FROM team_members WHERE id = $2)
                AND notification_settings.user_id = users.id),
             (SELECT name FROM teams WHERE id = (SELECT team_id FROM team_members WHERE id = $2)) AS team,
             (SELECT name FROM projects WHERE id = $3) AS project,
             (SELECT color_code FROM projects WHERE id = $3) AS project_color
      FROM users
      WHERE id != $1
        AND id IN (SELECT user_id FROM team_members WHERE id = $2);
    `;
        const result = await db_1.default.query(q, [senderUserId, teamMemberId, projectId]);
        const [data] = result.rows;
        return data;
    }
    static async updateComment(commentId, messageId) {
        if (!commentId || messageId)
            return;
        try {
            await db_1.default.query("UPDATE task_comments SET ses_message_id = $2 WHERE id = $1;", [commentId, messageId]);
        }
        catch (e) {
            (0, utils_1.log_error)(e);
        }
    }
    static async create(req, res) {
        req.body.user_id = req.user?.id;
        req.body.team_id = req.user?.team_id;
        const { mentions } = req.body;
        let commentContent = req.body.content;
        if (mentions.length > 0) {
            commentContent = await this.replaceContent(commentContent, mentions);
        }
        req.body.content = commentContent;
        const q = `SELECT create_task_comment($1) AS comment;`;
        const result = await db_1.default.query(q, [JSON.stringify(req.body)]);
        const [data] = result.rows;
        const response = data.comment;
        const mentionMessage = `<b>${req.user?.name}</b> has mentioned you in a comment on <b>${response.task_name}</b> (${response.team_name})`;
        const assignees = await getAssignees(req.body.task_id);
        const commentMessage = `<b>${req.user?.name}</b> added a comment on <b>${response.task_name}</b> (${response.team_name})`;
        for (const member of assignees || []) {
            if (member.user_id && member.user_id === req.user?.id)
                continue;
            void notifications_service_1.NotificationsService.createNotification({
                userId: member.user_id,
                teamId: req.user?.team_id,
                socketId: member.socket_id,
                message: commentMessage,
                taskId: req.body.task_id,
                projectId: response.project_id
            });
            if (member.email_notifications_enabled)
                await this.sendMail({
                    message: commentMessage,
                    receiverEmail: member.email,
                    receiverName: member.name,
                    content: req.body.content,
                    commentId: response.id,
                    projectId: response.project_id,
                    taskId: req.body.task_id,
                    teamName: response.team_name,
                    projectName: response.project_name,
                    taskName: response.task_name
                });
        }
        const senderUserId = req.user?.id;
        for (const mention of mentions) {
            if (mention) {
                const member = await this.getUserDataByTeamMemberId(senderUserId, mention.team_member_id, response.project_id);
                if (member) {
                    notifications_service_1.NotificationsService.sendNotification({
                        team: member.team,
                        receiver_socket_id: member.socket_id,
                        message: mentionMessage,
                        task_id: req.body.task_id,
                        project_id: response.project_id,
                        project: member.project,
                        project_color: member.project_color,
                        team_id: req.user?.team_id
                    });
                    if (member.email_notifications_enabled)
                        await this.sendMail({
                            message: mentionMessage,
                            receiverEmail: member.email,
                            receiverName: member.user_name,
                            content: req.body.content,
                            commentId: response.id,
                            projectId: response.project_id,
                            taskId: req.body.task_id,
                            teamName: response.team_name,
                            projectName: response.project_name,
                            taskName: response.task_name
                        });
                }
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data.comment));
    }
    static async sendMail(config) {
        const subject = config.message.replace(constants_1.HTML_TAG_REGEXP, "");
        const taskUrl = `${(0, helpers_1.getBaseUrl)()}/worklenz/projects/${config.projectId}?tab=tasks-list&task=${config.taskId}&focus=comments`;
        const settingsUrl = `${(0, helpers_1.getBaseUrl)()}/worklenz/settings/notifications`;
        const data = {
            greeting: `Hi ${config.receiverName}`,
            summary: subject,
            team: config.teamName,
            project_name: config.projectName,
            comment: config.content,
            task: config.taskName,
            settings_url: settingsUrl,
            task_url: taskUrl,
        };
        const messageId = await (0, email_notifications_1.sendTaskComment)(config.receiverEmail, data);
        if (messageId) {
            void TaskCommentsController.updateComment(config.commentId, messageId);
        }
    }
    static async getByTaskId(req, res) {
        const q = `
        SELECT task_comments.id,
          tc.text_content AS content,
          task_comments.user_id,
          task_comments.team_member_id,
          (SELECT name FROM team_member_info_view WHERE team_member_info_view.team_member_id = tm.id) AS member_name,
          u.avatar_url,
          task_comments.created_at,
          (SELECT COALESCE(JSON_AGG(rec), '[]'::JSON)
          FROM (SELECT tmiv.name  AS user_name,
                        tmiv.email AS user_email
                FROM task_comment_mentions tcm
                      LEFT JOIN team_member_info_view tmiv ON tcm.informed_by = tmiv.team_member_id
                WHERE tcm.comment_id = task_comments.id) rec) AS mentions
        FROM task_comments
          INNER JOIN task_comment_contents tc ON task_comments.id = tc.comment_id
          INNER JOIN team_members tm ON task_comments.team_member_id = tm.id
          LEFT JOIN users u ON tm.user_id = u.id
      WHERE task_comments.task_id = $1
      ORDER BY task_comments.created_at DESC;
    `;
        const result = await db_1.default.query(q, [req.params.id]);
        for (const comment of result.rows) {
            comment.content = await comment.content.replace(/\n/g, "</br>");
            const { mentions } = comment;
            if (mentions.length > 0) {
                const placeHolders = comment.content.match(/{\d+}/g);
                if (placeHolders) {
                    placeHolders.forEach((placeHolder) => {
                        const index = parseInt(placeHolder.match(/\d+/)[0]);
                        if (index >= 0 && index < comment.mentions.length) {
                            comment.content = comment.content.replace(placeHolder, `<span class="mentions"> @${comment.mentions[index].user_name} </span>`);
                        }
                    });
                }
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async deleteById(req, res) {
        const q = `DELETE
               FROM task_comments
               WHERE id = $1
                 AND task_id = $2
                 AND user_id = $3;`;
        const result = await db_1.default.query(q, [req.params.id, req.params.taskId, req.user?.id || null]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskCommentsController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskCommentsController, "getByTaskId", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskCommentsController, "deleteById", null);
exports.default = TaskCommentsController;
