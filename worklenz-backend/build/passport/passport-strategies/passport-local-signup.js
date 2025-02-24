"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const passport_local_1 = require("passport-local");
const constants_1 = require("../../shared/constants");
const email_templates_1 = require("../../shared/email-templates");
const utils_1 = require("../../shared/utils");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const passport_constants_1 = require("./passport-constants");
async function isGoogleAccountFound(email) {
    const q = `
    SELECT 1
    FROM users
    WHERE email = $1
      AND google_id IS NOT NULL;
  `;
    const result = await db_1.default.query(q, [email]);
    return !!result.rowCount;
}
async function registerUser(password, team_id, name, team_name, email, timezone, team_member_id) {
    const salt = bcrypt_1.default.genSaltSync(10);
    const encryptedPassword = bcrypt_1.default.hashSync(password, salt);
    const teamId = team_id || null;
    const q = "SELECT register_user($1) AS user;";
    const body = {
        name,
        team_name,
        email,
        password: encryptedPassword,
        timezone,
        invited_team_id: teamId,
        team_member_id,
    };
    const result = await db_1.default.query(q, [JSON.stringify(body)]);
    const [data] = result.rows;
    return data.user;
}
async function handleSignUp(req, email, password, done) {
    req.session.flash = {};
    const { name, team_name, team_member_id, team_id, timezone } = req.body;
    if (!team_name)
        return done(null, null, req.flash(passport_constants_1.ERROR_KEY, "Team name is required"));
    const googleAccountFound = await isGoogleAccountFound(email);
    if (googleAccountFound)
        return done(null, null, req.flash(passport_constants_1.ERROR_KEY, `${req.body.email} is already linked with a Google account.`));
    try {
        const user = await registerUser(password, team_id, name, team_name, email, timezone, team_member_id);
        (0, email_templates_1.sendWelcomeEmail)(email, name);
        setTimeout(() => {
            return done(null, user, req.flash(passport_constants_1.SUCCESS_KEY, "Registration successful. Please check your email for verification."));
        }, 500);
    }
    catch (error) {
        const message = (error?.message) || "";
        if (message === "ERROR_INVALID_JOINING_EMAIL") {
            return done(null, null, req.flash(passport_constants_1.ERROR_KEY, `No invitations found for email ${req.body.email}.`));
        }
        if (message.includes("EMAIL_EXISTS_ERROR") || error.constraint === "users_google_id_uindex") {
            const [, value] = error.message.split(":");
            return done(null, null, req.flash(passport_constants_1.ERROR_KEY, `Worklenz account already exists for email ${value}.`));
        }
        if (message.includes("TEAM_NAME_EXISTS_ERROR")) {
            const [, value] = error.message.split(":");
            return done(null, null, req.flash(passport_constants_1.ERROR_KEY, `Team name "${value}" already exists. Please choose a different team name.`));
        }
        if (error.constraint === "teams_url_uindex" || error.constraint === "teams_name_uindex") {
            return done(null, null, req.flash(passport_constants_1.ERROR_KEY, `Team name "${team_name}" is already taken. Please choose a different team name.`));
        }
        (0, utils_1.log_error)(error, req.body);
        return done(null, null, req.flash(passport_constants_1.ERROR_KEY, constants_1.DEFAULT_ERROR_MESSAGE));
    }
}
exports.default = new passport_local_1.Strategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, (req, email, password, done) => void handleSignUp(req, email, password, done));
