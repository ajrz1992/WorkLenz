"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
const utils_1 = require("../../shared/utils");
const password_strength_check_1 = require("../../shared/password-strength-check");
const constants_1 = require("../../shared/constants");
function isStrongPassword(password) {
    if (!(0, utils_1.isProduction)())
        return true;
    const strength = password_strength_check_1.PasswordStrengthChecker.validate(password);
    return strength.value >= 2 && strength.length < 32;
}
function default_1(req, res, next) {
    const { confirm_password, new_password, password } = req.body;
    const psw = (password || "").trim();
    const newPws = (new_password || "").trim();
    if (!psw)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Password is required"));
    if (newPws) {
        if (!isStrongPassword(newPws))
            return res.status(200).send(new server_response_1.ServerResponse(false, null, constants_1.PASSWORD_POLICY).withTitle("Please use a strong new password."));
        if (newPws !== confirm_password)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Passwords do not match"));
    }
    else if (!isStrongPassword(psw)) {
        return res.status(200).send(new server_response_1.ServerResponse(false, null, constants_1.PASSWORD_POLICY).withTitle("Please use a strong password."));
    }
    return next();
}
exports.default = default_1;
