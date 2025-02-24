"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const winston_1 = tslib_1.__importDefault(require("winston"));
const filename = node_path_1.default.join(__dirname, "../../logs", "application.log");
const options = {
    file: {
        level: "info",
        filename,
        handleExceptions: true,
        format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json()),
    },
    console: {
        level: "debug",
        handleExceptions: true,
        format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.simple()),
    },
};
const logger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.File(options.file),
        new winston_1.default.transports.Console(options.console),
    ],
    exitOnError: false,
});
exports.default = { logger };
