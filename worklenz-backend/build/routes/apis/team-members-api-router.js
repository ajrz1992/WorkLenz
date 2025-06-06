"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const team_members_controller_1 = tslib_1.__importDefault(require("../../controllers/team-members-controller"));
const id_param_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/id-param-validator"));
const team_members_body_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/team-members-body-validator"));
const team_owner_or_admin_validator_1 = tslib_1.__importDefault(require("../../middlewares/validators/team-owner-or-admin-validator"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../shared/safe-controller-function"));
const teamMembersApiRouter = express_1.default.Router();
teamMembersApiRouter.get("/export-all", (0, safe_controller_function_1.default)(team_members_controller_1.default.exportAllMembers));
teamMembersApiRouter.get("/export/:id", id_param_validator_1.default, (0, safe_controller_function_1.default)(team_members_controller_1.default.exportByMember));
teamMembersApiRouter.post("/", team_owner_or_admin_validator_1.default, team_members_body_validator_1.default, (0, safe_controller_function_1.default)(team_members_controller_1.default.create));
teamMembersApiRouter.get("/", (0, safe_controller_function_1.default)(team_members_controller_1.default.get));
teamMembersApiRouter.get("/list", (0, safe_controller_function_1.default)(team_members_controller_1.default.getTeamMemberList));
teamMembersApiRouter.get("/tree-map", (0, safe_controller_function_1.default)(team_members_controller_1.default.getTeamMembersTreeMap));
teamMembersApiRouter.get("/tree-map-by-member", (0, safe_controller_function_1.default)(team_members_controller_1.default.getTreeDataByMember));
teamMembersApiRouter.get("/tasks-by-members", (0, safe_controller_function_1.default)(team_members_controller_1.default.getTasksByMembers));
teamMembersApiRouter.get("/all", (0, safe_controller_function_1.default)(team_members_controller_1.default.getAllMembers));
teamMembersApiRouter.get("/project/:id", (0, safe_controller_function_1.default)(team_members_controller_1.default.getTeamMembersByProject));
teamMembersApiRouter.get("/projects/:id", (0, safe_controller_function_1.default)(team_members_controller_1.default.getProjectsByTeamMember));
teamMembersApiRouter.get("/overview/:id", team_owner_or_admin_validator_1.default, id_param_validator_1.default, (0, safe_controller_function_1.default)(team_members_controller_1.default.getOverview));
teamMembersApiRouter.get("/overview-chart/:id", team_owner_or_admin_validator_1.default, id_param_validator_1.default, (0, safe_controller_function_1.default)(team_members_controller_1.default.getOverviewChart));
teamMembersApiRouter.get("/:id", team_owner_or_admin_validator_1.default, id_param_validator_1.default, (0, safe_controller_function_1.default)(team_members_controller_1.default.getById));
teamMembersApiRouter.put("/resend-invitation", team_owner_or_admin_validator_1.default, (0, safe_controller_function_1.default)(team_members_controller_1.default.resend_invitation));
teamMembersApiRouter.put("/:id", team_owner_or_admin_validator_1.default, id_param_validator_1.default, (0, safe_controller_function_1.default)(team_members_controller_1.default.update));
teamMembersApiRouter.delete("/:id", team_owner_or_admin_validator_1.default, id_param_validator_1.default, (0, safe_controller_function_1.default)(team_members_controller_1.default.deleteById));
teamMembersApiRouter.get("/deactivate/:id", team_owner_or_admin_validator_1.default, id_param_validator_1.default, (0, safe_controller_function_1.default)(team_members_controller_1.default.toggleMemberActiveStatus));
teamMembersApiRouter.put("/add-member/:id", team_owner_or_admin_validator_1.default, team_members_body_validator_1.default, (0, safe_controller_function_1.default)(team_members_controller_1.default.addTeamMember));
exports.default = teamMembersApiRouter;
