"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const id_param_validator_1 = tslib_1.__importDefault(require("../../../middlewares/validators/id-param-validator"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../../shared/safe-controller-function"));
const roadmap_tasks_controller_v2_1 = tslib_1.__importDefault(require("../../../controllers/project-roadmap/roadmap-tasks-controller-v2"));
const roadmapApiRouter = express_1.default.Router();
function getList(req, res) {
    if (roadmap_tasks_controller_v2_1.default.isTasksOnlyReq(req.query))
        return roadmap_tasks_controller_v2_1.default.getTasksOnly(req, res);
    return roadmap_tasks_controller_v2_1.default.getList(req, res);
}
roadmapApiRouter.get("/chart-dates/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(roadmap_tasks_controller_v2_1.default.createDateRange));
roadmapApiRouter.get("/task-groups/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(getList));
exports.default = roadmapApiRouter;
