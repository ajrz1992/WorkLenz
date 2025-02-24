"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
const utils_1 = require("../../shared/utils");
function default_1(req, res, next) {
    const { team_name, project_name, template_id } = req.body;
    if (template_id && team_name) {
        return next();
    }
    if (!template_id) {
        if (!team_name)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Account name is required"));
        if (!project_name)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "Project name is required"));
        req.body.tasks = Array.isArray(req.body.tasks) ? req.body.tasks : [];
        req.body.team_members = Array.isArray(req.body.team_members) ? req.body.team_members.filter((i) => !!i) : [];
        if (!req.body.tasks.length)
            return res.status(200).send(new server_response_1.ServerResponse(false, null, "At least one task is required"));
        for (const email of req.body.team_members) {
            if (email && !(0, utils_1.isValidateEmail)(email))
                return res.status(200).send(new server_response_1.ServerResponse(false, null, "One or more of your team members has invalid email addresses. Please double check and try again.").withTitle("Account setup failed!"));
        }
    }
    return next();
}
exports.default = default_1;
