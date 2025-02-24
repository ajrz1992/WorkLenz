"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendProjectComment = exports.sendTaskComment = exports.sendProjectDailyDigest = exports.sendTaskDone = exports.sendDailyDigest = exports.sendAssignmentUpdate = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const email_template_type_1 = require("../interfaces/email-template-type");
const email_1 = require("./email");
const file_constants_1 = tslib_1.__importDefault(require("./file-constants"));
const utils_1 = require("./utils");
async function updateTaskUpdatesStatus(isSent) {
    try {
        const q = isSent
            ? "DELETE FROM task_updates WHERE is_sent IS TRUE;"
            : "UPDATE task_updates SET is_sent = FALSE;";
        await db_1.default.query(q, []);
    }
    catch (error) {
        (0, utils_1.log_error)(error);
    }
}
async function addToEmailLogs(email, subject, html) {
    try {
        const q = `INSERT INTO email_logs (email, subject, html) VALUES ($1, $2, $3);`;
        await db_1.default.query(q, [email, subject, html]);
    }
    catch (error) {
        (0, utils_1.log_error)(error);
    }
}
async function sendAssignmentUpdate(toEmail, assignment) {
    try {
        const template = file_constants_1.default.getEmailTemplate(email_template_type_1.IEmailTemplateType.TaskAssigneeChange);
        const isSent = assignment.teams?.length
            ? await (0, email_1.sendEmail)({
                subject: "You have new assignments on Worklenz",
                to: [toEmail],
                html: template(assignment)
            })
            : true;
        await updateTaskUpdatesStatus(!!isSent);
        addToEmailLogs(toEmail, "You have new assignments on Worklenz", template(assignment));
    }
    catch (e) {
        (0, utils_1.log_error)(e);
        await updateTaskUpdatesStatus(false);
    }
}
exports.sendAssignmentUpdate = sendAssignmentUpdate;
async function sendDailyDigest(toEmail, digest) {
    try {
        const template = file_constants_1.default.getEmailTemplate(email_template_type_1.IEmailTemplateType.DailyDigest);
        await (0, email_1.sendEmail)({
            subject: digest.note,
            to: [toEmail],
            html: template(digest)
        });
    }
    catch (e) {
        (0, utils_1.log_error)(e);
    }
}
exports.sendDailyDigest = sendDailyDigest;
async function sendTaskDone(toEmails, data) {
    try {
        const template = file_constants_1.default.getEmailTemplate(email_template_type_1.IEmailTemplateType.TaskDone);
        await (0, email_1.sendEmail)({
            subject: data.summary,
            to: toEmails,
            html: template(data)
        });
    }
    catch (e) {
        (0, utils_1.log_error)(e);
    }
}
exports.sendTaskDone = sendTaskDone;
async function sendProjectDailyDigest(toEmail, digest) {
    try {
        const template = file_constants_1.default.getEmailTemplate(email_template_type_1.IEmailTemplateType.ProjectDailyDigest);
        await (0, email_1.sendEmail)({
            subject: digest.summary,
            to: [toEmail],
            html: template(digest)
        });
    }
    catch (e) {
        (0, utils_1.log_error)(e);
    }
}
exports.sendProjectDailyDigest = sendProjectDailyDigest;
async function sendTaskComment(toEmail, data) {
    try {
        const template = file_constants_1.default.getEmailTemplate(email_template_type_1.IEmailTemplateType.TaskComment);
        return await (0, email_1.sendEmail)({
            subject: data.summary,
            to: [toEmail],
            html: template(data)
        });
    }
    catch (e) {
        (0, utils_1.log_error)(e);
    }
    return null;
}
exports.sendTaskComment = sendTaskComment;
async function sendProjectComment(toEmail, data) {
    try {
        const template = file_constants_1.default.getEmailTemplate(email_template_type_1.IEmailTemplateType.ProjectComment);
        return await (0, email_1.sendEmail)({
            subject: data.summary,
            to: [toEmail],
            html: template(data)
        });
    }
    catch (e) {
        (0, utils_1.log_error)(e);
    }
    return null;
}
exports.sendProjectComment = sendProjectComment;
