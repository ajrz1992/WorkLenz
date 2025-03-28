"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const team_owner_or_admin_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/team-owner-or-admin-validator"));
const pt_task_status_body_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/pt-task-status-body-validator"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../shared/safe-controller-function"));
const id_param_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/id-param-validator"));
const pt_task_statuses_controller_1 = tslib_1.__importDefault(require("../../controllers/project-templates/pt-task-statuses-controller"));
const ptStatusesApiRouter = express_1.default.Router();
ptStatusesApiRouter.post("/", team_owner_or_admin_validator_1.default, pt_task_status_body_validator_1.default, (0, safe_controller_function_1.default)(pt_task_statuses_controller_1.default.getCreated));
ptStatusesApiRouter.get("/", (0, safe_controller_function_1.default)(pt_task_statuses_controller_1.default.get));
ptStatusesApiRouter.get("/categories", (0, safe_controller_function_1.default)(pt_task_statuses_controller_1.default.getCategories));
ptStatusesApiRouter.get("/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(pt_task_statuses_controller_1.default.getById));
ptStatusesApiRouter.put("/name/:id", team_owner_or_admin_validator_1.default, id_param_validator_1.default, pt_task_status_body_validator_1.default, (0, safe_controller_function_1.default)(pt_task_statuses_controller_1.default.updateName));
ptStatusesApiRouter.put("/:id", team_owner_or_admin_validator_1.default, id_param_validator_1.default, pt_task_status_body_validator_1.default, (0, safe_controller_function_1.default)(pt_task_statuses_controller_1.default.update));
exports.default = ptStatusesApiRouter;
