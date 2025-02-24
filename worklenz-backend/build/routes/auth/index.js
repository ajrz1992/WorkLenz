"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const passport_1 = tslib_1.__importDefault(require("passport"));
const auth_controller_1 = tslib_1.__importDefault(require("../../controllers/auth-controller"));
const sign_up_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/sign-up-validator"));
const reset_email_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/reset-email-validator"));
const update_password_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/update-password-validator"));
const password_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/password-validator"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../shared/safe-controller-function"));
const authRouter = express_1.default.Router();
const options = (key) => ({
    failureRedirect: `/secure/verify?strategy=${key}`,
    successRedirect: `/secure/verify?strategy=${key}`
});
authRouter.post("/login", passport_1.default.authenticate("local-login", options("login")));
authRouter.post("/signup", sign_up_validator_1.default, password_validator_1.default, passport_1.default.authenticate("local-signup", options("signup")));
authRouter.post("/signup/check", sign_up_validator_1.default, password_validator_1.default, (0, safe_controller_function_1.default)(auth_controller_1.default.status_check));
authRouter.get("/verify", auth_controller_1.default.verify);
authRouter.get("/check-password", (0, safe_controller_function_1.default)(auth_controller_1.default.checkPasswordStrength));
authRouter.post("/reset-password", reset_email_validator_1.default, (0, safe_controller_function_1.default)(auth_controller_1.default.reset_password));
authRouter.post("/update-password", update_password_validator_1.default, password_validator_1.default, (0, safe_controller_function_1.default)(auth_controller_1.default.verify_reset_email));
authRouter.get("/google", (req, res) => {
    return passport_1.default.authenticate("google", {
        scope: ["email", "profile"],
        state: JSON.stringify({
            teamMember: req.query.teamMember || null,
            team: req.query.team || null,
            teamName: req.query.teamName || null,
            project: req.query.project || null
        })
    })(req, res);
});
authRouter.get("/google/verify", (req, res) => {
    let error = "";
    if (req.session.error) {
        error = `?error=${encodeURIComponent(req.session.error)}`;
        delete req.session.error;
    }
    const failureRedirect = process.env.LOGIN_FAILURE_REDIRECT + error;
    return passport_1.default.authenticate("google", {
        failureRedirect,
        successRedirect: process.env.LOGIN_SUCCESS_REDIRECT
    })(req, res);
});
authRouter.get("/logout", auth_controller_1.default.logout);
exports.default = authRouter;
