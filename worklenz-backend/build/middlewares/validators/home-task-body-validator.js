"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { name, end_date, project_id } = req.body;
    if (!name?.trim().length)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Name is required"));
    if (!end_date?.trim().length)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Due date is required"));
    if (!project_id)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Project is required"));
    req.body.reporter_id = req.user?.id ?? null;
    req.body.team_id = req.user?.team_id ?? null;
    req.body.inline = req.query.inline || false;
    if (req.body.name.length > 100)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Task name length exceeded!"));
    return next();
}
exports.default = default_1;
