"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const email_templates_1 = require("../shared/email-templates");
const server_response_1 = require("../models/server-response");
const auth_response_1 = require("../models/auth-response");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const password_strength_check_1 = require("../shared/password-strength-check");
const file_constants_1 = tslib_1.__importDefault(require("../shared/file-constants"));
class AuthController extends worklenz_controller_base_1.default {
    static async status_check(_req, res) {
        return res.status(200).send(new server_response_1.ServerResponse(true, null));
    }
    static async checkPasswordStrength(req, res) {
        const result = password_strength_check_1.PasswordStrengthChecker.validate(req.query.password);
        return res.status(200).send(new server_response_1.ServerResponse(true, result));
    }
    static verify(req, res) {
        const errors = req.flash()["error"] || [];
        const messages = req.flash()["success"] || [];
        const auth_error = errors.length > 0 ? errors[0] : null;
        const message = messages.length > 0 ? messages[0] : null;
        const midTitle = req.query.strategy === "login" ? "Login Failed!" : "Signup Failed!";
        const title = req.query.strategy ? midTitle : null;
        if (req.user)
            req.user.build_v = file_constants_1.default.getRelease();
        return res.status(200).send(new auth_response_1.AuthResponse(title, req.isAuthenticated(), req.user || null, auth_error, message));
    }
    static logout(req, res) {
        req.logout(() => true);
        req.session.destroy(() => {
            res.redirect("/");
        });
    }
    static async destroyOtherSessions(userId, sessionId) {
        try {
            const q = `DELETE FROM pg_sessions WHERE (sess ->> 'passport')::JSON ->> 'user'::TEXT = $1 AND sid != $2;`;
            await db_1.default.query(q, [userId, sessionId]);
        }
        catch (error) {
        }
    }
    static async changePassword(req, res) {
        const currentPassword = req.body.password;
        const newPassword = req.body.new_password;
        const q = `SELECT id, email, google_id, password FROM users WHERE id = $1;`;
        const result = await db_1.default.query(q, [req.user?.id || null]);
        const [data] = result.rows;
        if (data) {
            if (bcrypt_1.default.compareSync(currentPassword, data.password)) {
                const salt = bcrypt_1.default.genSaltSync(10);
                const encryptedPassword = bcrypt_1.default.hashSync(newPassword, salt);
                const updatePasswordQ = `UPDATE users SET password = $1 WHERE id = $2;`;
                await db_1.default.query(updatePasswordQ, [encryptedPassword, req.user?.id || null]);
                if (req.user?.id)
                    AuthController.destroyOtherSessions(req.user.id, req.sessionID);
                return res.status(200).send(new server_response_1.ServerResponse(true, null, "Password updated successfully!"));
            }
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Old password does not match!"));
        }
    }
    static async reset_password(req, res) {
        const { email } = req.body;
        const q = `SELECT id, email, google_id, password FROM users WHERE email = $1;`;
        const result = await db_1.default.query(q, [email || null]);
        if (!result.rowCount)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Account does not exists!"));
        const [data] = result.rows;
        if (data?.google_id) {
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Password reset failed!"));
        }
        if (data?.password) {
            const userIdBase64 = Buffer.from(data.id, "utf8").toString("base64");
            const salt = bcrypt_1.default.genSaltSync(10);
            const hashedUserData = bcrypt_1.default.hashSync(data.id + data.email + data.password, salt);
            const hashedString = hashedUserData.toString().replace(/\//g, "-");
            (0, email_templates_1.sendResetEmail)(email, userIdBase64, hashedString);
            return res.status(200).send(new server_response_1.ServerResponse(true, null, "Password reset email has been sent to your email. Please check your email."));
        }
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Email not found!"));
    }
    static async verify_reset_email(req, res) {
        const { user, hash, password } = req.body;
        const hashedString = hash.replace(/\-/g, "/");
        const userId = Buffer.from(user, "base64").toString("ascii");
        const q = `SELECT id, email, google_id, password FROM users WHERE id = $1;`;
        const result = await db_1.default.query(q, [userId || null]);
        const [data] = result.rows;
        const salt = bcrypt_1.default.genSaltSync(10);
        if (bcrypt_1.default.compareSync(data.id + data.email + data.password, hashedString)) {
            const encryptedPassword = bcrypt_1.default.hashSync(password, salt);
            const updatePasswordQ = `UPDATE users SET password = $1 WHERE id = $2;`;
            await db_1.default.query(updatePasswordQ, [encryptedPassword, userId || null]);
            (0, email_templates_1.sendResetSuccessEmail)(data.email);
            return res.status(200).send(new server_response_1.ServerResponse(true, null, "Password updated successfully"));
        }
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Invalid Request. Please try again."));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], AuthController, "changePassword", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({ logWithError: "body" })
], AuthController, "reset_password", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({ logWithError: "body" })
], AuthController, "verify_reset_email", null);
exports.default = AuthController;
