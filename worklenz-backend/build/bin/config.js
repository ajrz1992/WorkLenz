"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const segfault_handler_1 = tslib_1.__importDefault(require("segfault-handler"));
dotenv_1.default.config();
global.Promise = require("bluebird");
segfault_handler_1.default.registerHandler("crash.log");
