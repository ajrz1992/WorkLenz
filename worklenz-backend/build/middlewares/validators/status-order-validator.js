"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    if (!req.body.status_order)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Invalid request. Please try again. "));
    return next();
}
exports.default = default_1;
