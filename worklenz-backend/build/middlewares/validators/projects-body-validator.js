"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { name, color_code, status_id } = req.body;
    if (!status_id || status_id.trim() === "")
        return res.status(400).send(new server_response_1.ServerResponse(false, null));
    if (!name || name.trim() === "")
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Project name is required"));
    if (!color_code || color_code.trim() === "")
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Color code is required"));
    req.body.name = req.body.name.trim();
    if (req.body.name.length > 100)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Project name length exceeded!"));
    if (req.body.notes && req.body.notes.length > 200)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Project note length exceeded!"));
    if (req.body.working_days && !(Number.isInteger(req.body.working_days)))
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Please use integer values"));
    if (req.body.man_days && !(Number.isInteger(req.body.man_days)))
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Please use integer values"));
    if (req.body.hours_per_day && !(Number.isInteger(req.body.hours_per_day)))
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Please use integer values"));
    return next();
}
exports.default = default_1;
