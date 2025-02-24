"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { project, replace } = req.query;
    if (!project)
        return res.status(400).send(new server_response_1.ServerResponse(false, null));
    req.query.replace = /null/.test(replace) ? null : replace;
    return next();
}
exports.default = default_1;
