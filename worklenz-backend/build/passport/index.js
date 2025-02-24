"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const deserialize_1 = require("./deserialize");
const serialize_1 = require("./serialize");
const passport_google_1 = tslib_1.__importDefault(require("./passport-strategies/passport-google"));
const passport_local_login_1 = tslib_1.__importDefault(require("./passport-strategies/passport-local-login"));
const passport_local_signup_1 = tslib_1.__importDefault(require("./passport-strategies/passport-local-signup"));
exports.default = (passport) => {
    passport.use("local-login", passport_local_login_1.default);
    passport.use("local-signup", passport_local_signup_1.default);
    passport.use(passport_google_1.default);
    passport.serializeUser(serialize_1.serialize);
    passport.deserializeUser(deserialize_1.deserialize);
};
