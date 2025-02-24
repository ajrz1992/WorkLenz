"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { name, template_id, category_id } = req.body;
    if (!name || name.trim() === "")
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Name is required"));
    if (!template_id || template_id.trim() === "")
        return res.status(400).send(new server_response_1.ServerResponse(false, null));
    if (!category_id || category_id.trim() === "")
        return res.status(400).send(new server_response_1.ServerResponse(false, null));
    req.body.color_code = req.body.color_code || "#a9a9a9";
    req.body.default_status = !!req.body.default_status;
    req.body.name = req.body.name.trim();
    return next();
}
exports.default = default_1;
