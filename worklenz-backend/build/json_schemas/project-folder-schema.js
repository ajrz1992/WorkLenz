"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 2,
            maxLength: 20,
            message: "Invalid folder name"
        },
        color_code: { type: ["string", "null"] }
    },
    required: ["name"]
};
