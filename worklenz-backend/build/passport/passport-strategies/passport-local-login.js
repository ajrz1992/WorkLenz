"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const passport_local_1 = require("passport-local");
const utils_1 = require("../../shared/utils");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
async function handleLogin(req, email, password, done) {
    req.session.flash = {};
    if (!email || !password)
        return done(null, false, { message: "Invalid credentials." });
    try {
        const q = `SELECT id, email, google_id, password
               FROM users
               WHERE email = $1
                 AND google_id IS NULL;`;
        const result = await db_1.default.query(q, [email]);
        const [data] = result.rows;
        if (!data?.password)
            return done(null, false, { message: "Invalid credentials." });
        if (bcrypt_1.default.compareSync(password, data.password) && email === data.email) {
            delete data.password;
            req.logout(() => true);
            return done(false, data, { message: "User successfully logged in" });
        }
        return done(null, false, { message: "Invalid credentials." });
    }
    catch (error) {
        (0, utils_1.log_error)(error, req.body);
        return done(error);
    }
}
exports.default = new passport_local_1.Strategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, (req, email, password, done) => void handleLogin(req, email, password, done));
