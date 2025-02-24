"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const id_param_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/id-param-validator"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../shared/safe-controller-function"));
const pt_tasks_controller_1 = tslib_1.__importDefault(require("../../controllers/project-templates/pt-tasks-controller"));
const map_tasks_to_bulk_update_1 = tslib_1.__importDefault(require("../../middlewares/map-tasks-to-bulk-update"));
const bulk_tasks_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/bulk-tasks-validator"));
const ptTasksApiRouter = express_1.default.Router();
function getList(req, res) {
    if (pt_tasks_controller_1.default.isTasksOnlyReq(req.query))
        return pt_tasks_controller_1.default.getTasksOnly(req, res);
    return pt_tasks_controller_1.default.getList(req, res);
}
ptTasksApiRouter.get("/list/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(getList));
ptTasksApiRouter.put("/bulk/delete", map_tasks_to_bulk_update_1.default, bulk_tasks_validator_1.default, (0, safe_controller_function_1.default)(pt_tasks_controller_1.default.bulkDelete));
exports.default = ptTasksApiRouter;
