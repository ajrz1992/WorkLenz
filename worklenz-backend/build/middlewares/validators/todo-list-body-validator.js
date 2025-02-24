"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { name, color_code } = req.body;
    if (!name)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Name is required"));
    if (!color_code)
        req.body.color_code = "#767676";
    req.body.done = !!req.body.done;
    return next();
}
exports.default = default_1;
