"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const workload_gannt_controller_1 = tslib_1.__importDefault(require("../../../controllers/project-workload/workload-gannt-controller"));
const id_param_validator_1 = tslib_1.__importDefault(require("../../../middlewares/validators/id-param-validator"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../../shared/safe-controller-function"));
const workloadApiRouter = express_1.default.Router();
function getList(req, res) {
    if (workload_gannt_controller_1.default.isTasksOnlyReq(req.query))
        return workload_gannt_controller_1.default.getTasksOnly(req, res);
    return workload_gannt_controller_1.default.getList(req, res);
}
workloadApiRouter.get("/chart-dates/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(workload_gannt_controller_1.default.createDateRange));
workloadApiRouter.get("/workload-members/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(workload_gannt_controller_1.default.getMembers));
workloadApiRouter.get("/workload-tasks-by-member/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(getList));
workloadApiRouter.get("/workload-overview-by-member/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(workload_gannt_controller_1.default.getMemberOverview));
exports.default = workloadApiRouter;
