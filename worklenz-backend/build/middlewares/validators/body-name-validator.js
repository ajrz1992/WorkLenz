"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { name } = req.body;
    if (!name?.trim())
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Name is required"));
    return next();
}
exports.default = default_1;
