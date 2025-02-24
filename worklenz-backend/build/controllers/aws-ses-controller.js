"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
class AwsSesController extends worklenz_controller_base_1.default {
    static async handleBounceResponse(req, res) {
        const message = JSON.parse(req.body.Message);
        if (message.notificationType === "Bounce" && message.bounce.bounceType === "Permanent") {
            const bouncedEmails = Array.from(new Set(message.bounce.bouncedRecipients.map(r => r.emailAddress)));
            for (const email of bouncedEmails) {
                const q = `
          INSERT INTO bounced_emails (email)
          VALUES ($1)
          ON CONFLICT (email) DO UPDATE SET updated_at = CURRENT_TIMESTAMP;
        `;
                await db_1.default.query(q, [email]);
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, null));
    }
    static async handleComplaintResponse(req, res) {
        const message = JSON.parse(req.body.Message);
        if (message.notificationType === "Complaint") {
            const spamEmails = Array.from(new Set(message.complaint.complainedRecipients.map(r => r.emailAddress)));
            for (const email of spamEmails) {
                const q = `
          INSERT INTO spam_emails (email)
          VALUES ($1)
          ON CONFLICT (email) DO UPDATE SET updated_at = CURRENT_TIMESTAMP;
        `;
                await db_1.default.query(q, [email]);
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, null));
    }
    static async handleReplies(req, res) {
        console.log("\n");
        console.log(JSON.stringify(req.body));
        console.log("\n");
        return res.status(200).send(new server_response_1.ServerResponse(true, null));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], AwsSesController, "handleBounceResponse", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], AwsSesController, "handleComplaintResponse", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], AwsSesController, "handleReplies", null);
exports.default = AwsSesController;
