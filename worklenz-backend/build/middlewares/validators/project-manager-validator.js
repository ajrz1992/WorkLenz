"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const server_response_1 = require("../../models/server-response");
const projects_controller_1 = tslib_1.__importDefault(require("../../controllers/projects-controller"));
async function default_1(req, res, next) {
    let is_project_manager = false;
    if (req.query.current_project_id) {
        const result = await projects_controller_1.default.getProjectManager(req.query.current_project_id);
        if (result.length)
            if (req.user && (result[0].team_member_id === req.user?.team_member_id))
                is_project_manager = true;
    }
    if (req.user && (req.user.owner || req.user.is_admin || is_project_manager))
        return next();
    return res.status(401).send(new server_response_1.ServerResponse(false, null, "You are not authorized to perform this action"));
}
exports.default = default_1;
