"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: "object",
    properties: {
        to: {
            type: "array",
            items: { type: "string" },
            minItems: 1
        },
        subject: { type: "string" },
        html: { type: "string" }
    },
    required: ["to", "subject", "html"]
};
