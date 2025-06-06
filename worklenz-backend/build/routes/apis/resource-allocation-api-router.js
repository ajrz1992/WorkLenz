"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const resource_allocation_controller_1 = tslib_1.__importDefault(require("../../controllers/resource-allocation-controller"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../shared/safe-controller-function"));
const resourceAllocationApiRouter = express_1.default.Router();
resourceAllocationApiRouter.get("/project", (0, safe_controller_function_1.default)(resource_allocation_controller_1.default.getProjectWiseResources));
resourceAllocationApiRouter.get("/team", (0, safe_controller_function_1.default)(resource_allocation_controller_1.default.getUserWiseResources));
exports.default = resourceAllocationApiRouter;
