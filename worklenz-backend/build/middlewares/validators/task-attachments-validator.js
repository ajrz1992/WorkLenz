"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { file, file_name, project_id, size } = req.body;
    if (!file || !file_name || !project_id || !size)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Upload failed"));
    if (size > 5.243e+7)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Max file size for attachments is 50 MB.").withTitle("Upload failed!"));
    req.body.type = file_name.split(".").pop();
    req.body.task_id = req.body.task_id || null;
    return next();
}
exports.default = default_1;
