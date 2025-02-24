"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { hash, password, user } = req.body;
    if (!password)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Password is required"));
    if (!hash || !user)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "An unknown error has occurred. Please try again."));
    return next();
}
exports.default = default_1;
