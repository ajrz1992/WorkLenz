"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.EmailRequest = void 0;
const tslib_1 = require("tslib");
const client_ses_1 = require("@aws-sdk/client-ses");
const jsonschema_1 = require("jsonschema");
const utils_1 = require("./utils");
const email_request_schema_1 = tslib_1.__importDefault(require("../json_schemas/email-request-schema"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const sesClient = new client_ses_1.SESClient({ region: process.env.AWS_REGION });
class EmailRequest {
    html;
    subject;
    to;
    constructor(toEmails, subject, content) {
        this.to = toEmails;
        this.subject = subject;
        this.html = content;
    }
}
exports.EmailRequest = EmailRequest;
function isValidMailBody(body) {
    const validator = new jsonschema_1.Validator();
    return validator.validate(body, email_request_schema_1.default).valid;
}
async function removeMails(query, emails) {
    const result = await db_1.default.query(query, []);
    const bouncedEmails = result.rows.map(e => e.email);
    for (let i = 0; i < emails.length; i++) {
        const email = emails[i];
        if (bouncedEmails.includes(email)) {
            emails.splice(i, 1);
        }
    }
}
async function filterSpamEmails(emails) {
    await removeMails("SELECT email FROM spam_emails ORDER BY email;", emails);
}
async function filterBouncedEmails(emails) {
    await removeMails("SELECT email FROM bounced_emails ORDER BY email;", emails);
}
async function sendEmail(email) {
    try {
        const options = { ...email };
        options.to = Array.isArray(options.to) ? Array.from(new Set(options.to)) : [];
        if (options.to.length) {
            await filterBouncedEmails(options.to);
            await filterSpamEmails(options.to);
        }
        if (!isValidMailBody(options))
            return null;
        const charset = "UTF-8";
        const command = new client_ses_1.SendEmailCommand({
            Destination: {
                ToAddresses: options.to
            },
            Message: {
                Subject: {
                    Charset: charset,
                    Data: options.subject
                },
                Body: {
                    Html: {
                        Charset: charset,
                        Data: options.html
                    }
                }
            },
            Source: process.env.SOURCE_EMAIL
        });
        const res = await sesClient.send(command);
        return res.MessageId || null;
    }
    catch (e) {
        (0, utils_1.log_error)(e);
    }
    return null;
}
exports.sendEmail = sendEmail;
