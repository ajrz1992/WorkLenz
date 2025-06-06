"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: "object",
    properties: {
        name: {
            type: "string",
            message: "Invalid name",
            minLength: 2,
            maxLength: 30
        }
    },
    required: ["name"]
};
