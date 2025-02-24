"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const name = (req.body.name || "").trim();
    if (!name)
        return res.status(400).send(new server_response_1.ServerResponse(false, null, "Invalid name"));
    return next();
}
exports.default = default_1;
