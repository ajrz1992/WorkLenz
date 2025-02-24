"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    if (req.user?.owner)
        return next();
    return res.status(401).send(new server_response_1.ServerResponse(false, null, "You are not authorized to perform this action"));
}
exports.default = default_1;
