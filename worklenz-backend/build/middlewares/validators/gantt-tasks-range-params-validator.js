"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { project_id, start_date, end_date } = req.query;
    if (!project_id)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Project ID is required"));
    if (!start_date)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Start date is required"));
    if (!end_date)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "End date is required"));
    return next();
}
exports.default = default_1;
