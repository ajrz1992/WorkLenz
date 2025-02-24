"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { status_id, task_id } = req.params;
    if (!status_id || !task_id)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Updating status failed!"));
    return next();
}
exports.default = default_1;
