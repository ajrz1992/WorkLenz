"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    if (!req.params.id)
        return res.status(400).send(new server_response_1.ServerResponse(false, null));
    if (!req.body.length)
        return res.status(400).send(new server_response_1.ServerResponse(false, null, "Tasks are required!"));
    return next();
}
exports.default = default_1;
