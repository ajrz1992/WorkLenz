"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonschema_1 = require("jsonschema");
const server_response_1 = require("../models/server-response");
function default_1(schema) {
    return (req, res, next) => {
        const validator = new jsonschema_1.Validator();
        const result = validator.validate(req.body, schema);
        if (!result.valid)
            return res.status(400).send(new server_response_1.ServerResponse(false, null, (result.errors[0]?.schema).message || null));
        return next();
    };
}
exports.default = default_1;
