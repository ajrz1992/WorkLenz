"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../shared/safe-controller-function"));
const project_healths_controller_1 = tslib_1.__importDefault(require("../../controllers/project-healths-controller"));
const projectHealthsApiRouter = express_1.default.Router();
projectHealthsApiRouter.get("/", (0, safe_controller_function_1.default)(project_healths_controller_1.default.get));
exports.default = projectHealthsApiRouter;
