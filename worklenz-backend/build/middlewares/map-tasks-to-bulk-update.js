"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res, next) {
    req.body.tasks = req.body.tasks.map((id) => ({ id }));
    return next();
}
exports.default = default_1;
