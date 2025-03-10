"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const activity_logs_controller_1 = tslib_1.__importDefault(require("../../controllers/activity-logs-controller"));
const id_param_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/id-param-validator"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../shared/safe-controller-function"));
const activityLogsApiRouter = express_1.default.Router();
activityLogsApiRouter.get("/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(activity_logs_controller_1.default.get));
exports.default = activityLogsApiRouter;
