"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sharp_1 = tslib_1.__importDefault(require("sharp"));
const server_response_1 = require("../models/server-response");
async function default_1(req, res, next) {
    if (!req.body.file)
        return next();
    try {
        const buffer = Buffer.from(req.body.file.replace(/^data:(.*?);base64,/, ""), "base64");
        const out = await (0, sharp_1.default)(buffer)
            .webp({ quality: 50 })
            .toBuffer();
        req.body.type = "webp";
        req.body.buffer = out;
        return next();
    }
    catch (error) {
        return res.status(200).send(new server_response_1.ServerResponse(false, null, "Upload failed"));
    }
}
exports.default = default_1;
