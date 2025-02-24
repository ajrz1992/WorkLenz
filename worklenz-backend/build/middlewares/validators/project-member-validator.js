"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const server_response_1 = require("../../models/server-response");
const project_members_controller_1 = tslib_1.__importDefault(require("../../controllers/project-members-controller"));
async function default_1(req, res, next) {
    const projectId = req.body.project_id;
    const teamMemberId = req.user?.team_member_id;
    const defaultView = req.body.default_view;
    if (!req.body.project_id || !defaultView || !teamMemberId) {
        return res.status(401).send(new server_response_1.ServerResponse(false, null, "Unknown error has occured"));
    }
    const isProjectMember = await project_members_controller_1.default.checkIfMemberExists(projectId, teamMemberId);
    if (isProjectMember) {
        return next();
    }
    req.body.team_member_id = teamMemberId;
    req.body.user_id = req.user?.id;
    req.body.team_id = req.user?.team_id;
    req.body.access_level = req.body.access_level ? req.body.access_level : "MEMBER";
    const isProjectMemberAssigned = await project_members_controller_1.default.createOrInviteMembers(req.body);
    if (isProjectMemberAssigned) {
        return next();
    }
    return res.status(401).send(new server_response_1.ServerResponse(false, null, "Cannot assign as Project Member"));
}
exports.default = default_1;
