"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("../../models/server-response");
function default_1(req, res, next) {
    const { file, file_name, size } = req.body;
    if (!file || !file_name || !size)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Upload failed"));
    if (size > 200000)
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Max file size 200kb.").withTitle("Upload failed!"));
    req.body.type = file_name.split(".").pop();
    if (req.body.type !== "png" && req.body.type !== "jpg" && req.body.type !== "jpeg")
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Invalid file type"));
    return next();
}
exports.default = default_1;
