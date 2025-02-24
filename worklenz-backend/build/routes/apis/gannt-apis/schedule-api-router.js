"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const id_param_validator_1 = tslib_1.__importDefault(require("../../../middlewares/validators/id-param-validator"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../../shared/safe-controller-function"));
const schedule_controller_1 = tslib_1.__importDefault(require("../../../controllers/schedule/schedule-controller"));
const scheduleApiRouter = express_1.default.Router();
function getList(req, res) {
    if (schedule_controller_1.default.isTasksOnlyReq(req.query))
        return schedule_controller_1.default.getTasksOnly(req, res);
    return schedule_controller_1.default.getList(req, res);
}
scheduleApiRouter.get("/chart-dates/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(schedule_controller_1.default.createDateRange));
scheduleApiRouter.get("/projects/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(schedule_controller_1.default.getProjects));
scheduleApiRouter.get("/project-member/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(schedule_controller_1.default.getSingleProjectMember));
scheduleApiRouter.get("/refresh/project-indicator/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(schedule_controller_1.default.getSingleProjectIndicator));
scheduleApiRouter.get("/tasks-by-member/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(getList));
scheduleApiRouter.put("/bulk/delete-member-allocations", (0, safe_controller_function_1.default)(schedule_controller_1.default.deleteMemberAllocations));
exports.default = scheduleApiRouter;
