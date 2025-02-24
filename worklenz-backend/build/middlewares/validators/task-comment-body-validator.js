"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { content, task_id } = req.body;
    if (!content)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Comment message is required"));
    if (!task_id)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Unable to create comment"));
    if (content.length > 2000)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Message length exceeded"));
    req.body.mentions = Array.isArray(req.body.mentions)
        ? req.body.mentions
        : [];
    return next();
}
exports.default = default_1;
