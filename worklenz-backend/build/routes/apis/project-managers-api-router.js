"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../shared/safe-controller-function"));
const project_managers_controller_1 = tslib_1.__importDefault(require("../../controllers/project-managers-controller"));
const projectManagerApiRouter = express_1.default.Router();
projectManagerApiRouter.get("/", (0, safe_controller_function_1.default)(project_managers_controller_1.default.getByOrg));
exports.default = projectManagerApiRouter;
