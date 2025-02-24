"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
const utils_1 = require("../../shared/utils");
function default_1(req, res, next) {
    const { project_id, email } = req.body;
    if (!project_id || !(0, utils_1.isValidateEmail)(email))
        return res.status(400).send(new server_response_1.ServerResponse(false, null));
    return next();
}
exports.default = default_1;
