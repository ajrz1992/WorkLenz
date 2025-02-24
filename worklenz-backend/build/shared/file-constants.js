"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_fs_1 = tslib_1.__importDefault(require("node:fs"));
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const pug_1 = tslib_1.__importDefault(require("pug"));
const email_template_type_1 = require("../interfaces/email-template-type");
class FileConstants {
    static release = null;
    static EMAIL_TEMPLATES_MAP = {};
    static PUG_EMAIL_TEMPLATES_MAP = {};
    static EMAIL_TEMPLATES_BASE = "../../worklenz-email-templates";
    static init() {
        FileConstants.getRelease();
        FileConstants.initEmailTemplates();
    }
    static readHtmlEmailTemplate(fileName) {
        const key = fileName.toString();
        if (!FileConstants.EMAIL_TEMPLATES_MAP[key]) {
            const url = node_path_1.default.join(__dirname, FileConstants.EMAIL_TEMPLATES_BASE, `${fileName}.html`);
            FileConstants.EMAIL_TEMPLATES_MAP[key] = node_fs_1.default.readFileSync(url, "utf8");
        }
        return FileConstants.EMAIL_TEMPLATES_MAP[key];
    }
    static readPugEmailTemplate(fileName) {
        const key = fileName.toString();
        if (!FileConstants.PUG_EMAIL_TEMPLATES_MAP[key]) {
            const filePath = node_path_1.default.join(__dirname, FileConstants.EMAIL_TEMPLATES_BASE, "email-notifications", `${fileName}.pug`);
            const template = pug_1.default.compileFile(filePath);
            FileConstants.PUG_EMAIL_TEMPLATES_MAP[key] = template;
        }
        return FileConstants.PUG_EMAIL_TEMPLATES_MAP[key];
    }
    static initEmailTemplates() {
        FileConstants.getEmailTemplate(email_template_type_1.IEmailTemplateType.NewSubscriber);
        FileConstants.getEmailTemplate(email_template_type_1.IEmailTemplateType.TeamMemberInvitation);
        FileConstants.getEmailTemplate(email_template_type_1.IEmailTemplateType.UnregisteredTeamMemberInvitation);
        FileConstants.getEmailTemplate(email_template_type_1.IEmailTemplateType.PasswordChange);
        FileConstants.getEmailTemplate(email_template_type_1.IEmailTemplateType.Welcome);
        FileConstants.getEmailTemplate(email_template_type_1.IEmailTemplateType.OTPVerification);
        FileConstants.getEmailTemplate(email_template_type_1.IEmailTemplateType.ResetPassword);
        FileConstants.getEmailTemplate(email_template_type_1.IEmailTemplateType.TaskAssigneeChange);
        FileConstants.getEmailTemplate(email_template_type_1.IEmailTemplateType.DailyDigest);
        FileConstants.getEmailTemplate(email_template_type_1.IEmailTemplateType.TaskDone);
        FileConstants.getEmailTemplate(email_template_type_1.IEmailTemplateType.ProjectDailyDigest);
        FileConstants.getEmailTemplate(email_template_type_1.IEmailTemplateType.TaskComment);
    }
    static getEmailTemplate(type) {
        switch (type) {
            case email_template_type_1.IEmailTemplateType.NewSubscriber:
                return FileConstants.readHtmlEmailTemplate("admin-new-subscriber-notification");
            case email_template_type_1.IEmailTemplateType.TeamMemberInvitation:
                return FileConstants.readHtmlEmailTemplate("team-invitation");
            case email_template_type_1.IEmailTemplateType.UnregisteredTeamMemberInvitation:
                return FileConstants.readHtmlEmailTemplate("unregistered-team-invitation-notification");
            case email_template_type_1.IEmailTemplateType.PasswordChange:
                return FileConstants.readHtmlEmailTemplate("password-changed-notification");
            case email_template_type_1.IEmailTemplateType.Welcome:
                return FileConstants.readHtmlEmailTemplate("welcome");
            case email_template_type_1.IEmailTemplateType.OTPVerification:
                return FileConstants.readHtmlEmailTemplate("otp-verfication-code");
            case email_template_type_1.IEmailTemplateType.ResetPassword:
                return FileConstants.readHtmlEmailTemplate("reset-password");
            case email_template_type_1.IEmailTemplateType.TaskAssigneeChange:
                return FileConstants.readPugEmailTemplate("task-assignee-change");
            case email_template_type_1.IEmailTemplateType.DailyDigest:
                return FileConstants.readPugEmailTemplate("daily-digest");
            case email_template_type_1.IEmailTemplateType.TaskDone:
                return FileConstants.readPugEmailTemplate("task-moved-to-done");
            case email_template_type_1.IEmailTemplateType.ProjectDailyDigest:
                return FileConstants.readPugEmailTemplate("project-daily-digest");
            case email_template_type_1.IEmailTemplateType.TaskComment:
                return FileConstants.readPugEmailTemplate("task-comment");
            default:
                return null;
        }
    }
    static getRelease() {
        if (FileConstants.release === null) {
            FileConstants.release = node_fs_1.default.readFileSync(node_path_1.default.join(__dirname, "../../release"), "utf8").trim();
        }
        return FileConstants.release;
    }
}
exports.default = FileConstants;
