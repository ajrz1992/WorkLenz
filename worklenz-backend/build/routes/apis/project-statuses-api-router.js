"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const project_statuses_controller_1 = tslib_1.__importDefault(require("../../controllers/project-statuses-controller"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../shared/safe-controller-function"));
const projectStatusesApiRouter = express_1.default.Router();
projectStatusesApiRouter.get("/", (0, safe_controller_function_1.default)(project_statuses_controller_1.default.get));
exports.default = projectStatusesApiRouter;
