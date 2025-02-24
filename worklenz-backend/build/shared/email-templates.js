"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendInvitationEmail = exports.sendResetSuccessEmail = exports.sendResetEmail = exports.sendRegisterAndJoinTeamInvitation = exports.sendJoinTeamInvitation = exports.sendNewSubscriberNotification = exports.sendWelcomeEmail = void 0;
const tslib_1 = require("tslib");
const email_template_type_1 = require("../interfaces/email-template-type");
const email_1 = require("./email");
const utils_1 = require("./utils");
const file_constants_1 = tslib_1.__importDefault(require("./file-constants"));
const HOSTNAME = process.env.HOSTNAME || "worklenz.com";
function sendWelcomeEmail(email, name) {
    let content = file_constants_1.default.getEmailTemplate(email_template_type_1.IEmailTemplateType.Welcome);
    if (!content)
        return;
    content = content.replace("[VAR_USER_NAME]", (0, utils_1.sanitize)(name));
    content = content.replace("[VAR_HOSTNAME]", (0, utils_1.sanitize)(HOSTNAME));
    (0, email_1.sendEmail)({
        to: [email],
        subject: "Welcome to Worklenz.",
        html: content
    });
}
exports.sendWelcomeEmail = sendWelcomeEmail;
function sendNewSubscriberNotification(subscriberEmail) {
    let content = file_constants_1.default.getEmailTemplate(email_template_type_1.IEmailTemplateType.NewSubscriber);
    if (!content)
        return;
    content = content.replace("[VAR_EMAIL]", (0, utils_1.sanitize)(subscriberEmail));
    (0, email_1.sendEmail)({
        subject: "Worklenz - New Subscriber.",
        html: content
    });
}
exports.sendNewSubscriberNotification = sendNewSubscriberNotification;
function sendJoinTeamInvitation(myName, teamName, teamId, userName, toEmail, userId, projectId) {
    let content = file_constants_1.default.getEmailTemplate(email_template_type_1.IEmailTemplateType.TeamMemberInvitation);
    if (!content)
        return;
    content = content.replace("[VAR_USER_NAME]", (0, utils_1.sanitize)(userName));
    content = content.replace("[VAR_TEAM_NAME]", (0, utils_1.sanitize)(teamName));
    content = content.replace("[VAR_HOSTNAME]", (0, utils_1.sanitize)(HOSTNAME));
    content = content.replace("[VAR_TEAM_ID]", (0, utils_1.sanitize)(teamId));
    content = content.replace("[VAR_USER_ID]", (0, utils_1.sanitize)(userId));
    content = content.replace("[PROJECT_ID]", projectId ? (0, utils_1.sanitize)(projectId) : "");
    (0, email_1.sendEmail)({
        to: [toEmail],
        subject: `${myName} has invited you to work with ${teamName} in Worklenz`,
        html: content
    });
}
exports.sendJoinTeamInvitation = sendJoinTeamInvitation;
function sendRegisterAndJoinTeamInvitation(myName, userName, teamName, teamId, userId, toEmail, projectId) {
    let content = file_constants_1.default.getEmailTemplate(email_template_type_1.IEmailTemplateType.UnregisteredTeamMemberInvitation);
    if (!content)
        return;
    content = content.replace("[VAR_EMAIL]", (0, utils_1.sanitize)(toEmail));
    content = content.replace("[VAR_USER_ID]", (0, utils_1.sanitize)(userId));
    content = content.replace("[VAR_USER_NAME]", (0, utils_1.sanitize)(userName));
    content = content.replace("[VAR_TEAM_NAME]", (0, utils_1.sanitize)(teamName));
    content = content.replace("[VAR_HOSTNAME]", (0, utils_1.sanitize)(HOSTNAME));
    content = content.replace("[VAR_TEAM_ID]", (0, utils_1.sanitize)(teamId));
    content = content.replace("[PROJECT_ID]", projectId ? (0, utils_1.sanitize)(projectId) : "");
    (0, email_1.sendEmail)({
        to: [toEmail],
        subject: `${myName} has invited you to work with ${teamName} in Worklenz`,
        html: content
    });
}
exports.sendRegisterAndJoinTeamInvitation = sendRegisterAndJoinTeamInvitation;
function sendResetEmail(toEmail, user_id, hash) {
    let content = file_constants_1.default.getEmailTemplate(email_template_type_1.IEmailTemplateType.ResetPassword);
    if (!content)
        return;
    content = content.replace("[VAR_HOSTNAME]", (0, utils_1.sanitize)(HOSTNAME));
    content = content.replace("[VAR_USER_ID]", (0, utils_1.sanitize)(user_id));
    content = content.replace("[VAR_HASH]", hash);
    (0, email_1.sendEmail)({
        to: [toEmail],
        subject: "Reset your password on Worklenz.",
        html: content
    });
}
exports.sendResetEmail = sendResetEmail;
function sendResetSuccessEmail(toEmail) {
    const content = file_constants_1.default.getEmailTemplate(email_template_type_1.IEmailTemplateType.PasswordChange);
    if (!content)
        return;
    (0, email_1.sendEmail)({
        to: [toEmail],
        subject: "Your password was reset.",
        html: content
    });
}
exports.sendResetSuccessEmail = sendResetSuccessEmail;
function sendInvitationEmail(isNewMember, user, userNameOrId, email, userId, userName, projectId) {
    if (isNewMember) {
        sendJoinTeamInvitation(user?.name, user?.team_name, user.team_id, userNameOrId, email, userId, projectId);
    }
    else {
        sendRegisterAndJoinTeamInvitation(user?.name, userName, user?.team_name, user.team_id, userNameOrId, email, projectId);
    }
}
exports.sendInvitationEmail = sendInvitationEmail;
