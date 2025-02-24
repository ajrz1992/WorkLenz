"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { priority_id, tasks } = req.body;
    if (!priority_id || !Array.isArray(tasks))
        return res.status(400).send(new server_response_1.ServerResponse(false, null));
    return next();
}
exports.default = default_1;
