"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res, next) {
    const { id, seconds_spent, created_at, formatted_start } = req.body;
    if (!id || !seconds_spent || !formatted_start)
        return res.sendStatus(400);
    return next();
}
exports.default = default_1;
