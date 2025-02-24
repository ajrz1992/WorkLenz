"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_google_oauth20_1 = tslib_1.__importDefault(require("passport-google-oauth20"));
const email_templates_1 = require("../../shared/email-templates");
const utils_1 = require("../../shared/utils");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const passport_constants_1 = require("./passport-constants");
async function handleGoogleLogin(req, _accessToken, _refreshToken, profile, done) {
    try {
        const body = profile;
        if (Array.isArray(profile.emails) && profile.emails.length)
            body.email = profile.emails[0].value;
        if (Array.isArray(profile.photos) && profile.photos.length)
            body.picture = profile.photos[0].value;
        const localAccountResult = await db_1.default.query("SELECT 1 FROM users WHERE email = $1 AND password IS NOT NULL;", [body.email]);
        if (localAccountResult.rowCount) {
            const message = `No Google account exists for email ${body.email}.`;
            req.session.error = message;
            return done(null, undefined, req.flash(passport_constants_1.ERROR_KEY, message));
        }
        const state = JSON.parse(req.query.state || "{}");
        if (state) {
            body.team = state.team;
            body.member_id = state.teamMember;
        }
        const q1 = `SELECT id, google_id, name, email, active_team
                FROM users
                WHERE google_id = $1
                   OR email = $2;`;
        const result1 = await db_1.default.query(q1, [body.id, body.email]);
        if (result1.rowCount) {
            const [user] = result1.rows;
            try {
                await db_1.default.query("SELECT set_active_team($1, $2);", [user.id || null, state.team || null]);
            }
            catch (error) {
                (0, utils_1.log_error)(error, user);
            }
            if (user)
                return done(null, user);
        }
        else {
            const q2 = `SELECT register_google_user($1) AS user;`;
            const result2 = await db_1.default.query(q2, [JSON.stringify(body)]);
            const [data] = result2.rows;
            (0, email_templates_1.sendWelcomeEmail)(data.user.email, body.displayName);
            return done(null, data.user, { message: "User successfully logged in" });
        }
        return done(null);
    }
    catch (error) {
        return done(error);
    }
}
exports.default = new passport_google_oauth20_1.default.Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback: true
}, (req, _accessToken, _refreshToken, profile, done) => void handleGoogleLogin(req, _accessToken, _refreshToken, profile, done));
