"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const timezones_controller_1 = tslib_1.__importDefault(require("../../controllers/timezones-controller"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../shared/safe-controller-function"));
const timezonesApiRouter = express_1.default.Router();
timezonesApiRouter.get("/", (0, safe_controller_function_1.default)(timezones_controller_1.default.get));
timezonesApiRouter.put("/", (0, safe_controller_function_1.default)(timezones_controller_1.default.update));
exports.default = timezonesApiRouter;
