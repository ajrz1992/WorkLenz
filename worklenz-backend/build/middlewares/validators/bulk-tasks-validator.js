"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { tasks } = req.body;
    if (!Array.isArray(tasks))
        return res.status(400).send(new server_response_1.ServerResponse(false, null));
    req.body.labels = Array.isArray(req.body.labels) ? req.body.labels : [];
    return next();
}
exports.default = default_1;
