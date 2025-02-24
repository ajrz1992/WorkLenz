"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
const utils_1 = require("../../shared/utils");
function default_1(req, res, next) {
    const { email } = req.body;
    if (!email)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Email is required"));
    if (!(0, utils_1.isValidateEmail)(email))
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Invalid email address"));
    return next();
}
exports.default = default_1;
