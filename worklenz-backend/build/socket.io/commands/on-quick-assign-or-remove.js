"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignMemberIfNot = exports.on_quick_assign_or_remove = exports.getTeamMembers = exports.getAssignees = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const worklenz_controller_base_1 = tslib_1.__importDefault(require("../../controllers/worklenz-controller-base"));
const notifications_service_1 = require("../../services/notifications/notifications.service");
const utils_1 = require("../../shared/utils");
const events_1 = require("../events");
const util_1 = require("../util");
const activity_logs_service_1 = require("../../services/activity-logs/activity-logs.service");
async function getAssignees(taskId) {
    const result1 = await db_1.default.query("SELECT get_task_assignees($1) AS assignees;", [taskId]);
    const [d] = result1.rows;
    const assignees = d.assignees || [];
    assignees.forEach((a) => a.color_code = (0, utils_1.getColor)(a.name));
    return assignees;
}
exports.getAssignees = getAssignees;
async function getTeamMembers(teamId) {
    const result = await db_1.default.query("SELECT get_team_members($1, NULL) AS members;", [teamId]);
    const [data] = result.rows;
    return data?.members || [];
}
exports.getTeamMembers = getTeamMembers;
async function runAssignOrRemove(data, isAssignment = false) {
    const q = isAssignment
        ? "SELECT create_task_assignee($1, $2, $3, $4) AS data;"
        : `SELECT remove_task_assignee($1, $2, $3) AS data;`;
    const params = isAssignment
        ? [data.team_member_id, data.project_id, data.task_id, data.reporter_id]
        : [data.task_id, data.team_member_id, data.project_id];
    const result = await db_1.default.query(q, params);
    const [assignment] = result.rows;
    return assignment.data || null;
}
async function on_quick_assign_or_remove(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        const isAssign = body.mode == 0;
        const userId = (0, util_1.getLoggedInUserIdFromSocket)(socket);
        const assignment = await runAssignOrRemove(body, isAssign);
        const assignees = await getAssignees(body.task_id);
        const members = await getTeamMembers(body.team_id);
        const names = worklenz_controller_base_1.default.createTagList(assignees);
        const type = isAssign ? "ASSIGN" : "UNASSIGN";
        (0, activity_logs_service_1.logMemberAssignment)({
            task_id: body.task_id,
            socket,
            new_value: body.team_member_id,
            old_value: null,
            assign_type: type
        });
        if (userId !== assignment.user_id) {
            notifications_service_1.NotificationsService.createTaskUpdate(type, userId, body.task_id, assignment.user_id, assignment.team_id);
        }
        (0, util_1.notifyProjectUpdates)(socket, body.task_id);
        const res = { id: body.task_id, parent_task: body.parent_task, members, assignees, names, mode: body.mode, team_member_id: body.team_member_id };
        socket.emit(events_1.SocketEvents.QUICK_ASSIGNEES_UPDATE.toString(), res);
        return;
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
    socket.emit(events_1.SocketEvents.QUICK_ASSIGNEES_UPDATE.toString(), null);
}
exports.on_quick_assign_or_remove = on_quick_assign_or_remove;
async function assignMemberIfNot(taskId, userId, teamId, io, socket) {
    try {
        const q = `
      SELECT
        team_member_id,
        (SELECT project_id FROM tasks WHERE id = $1) as project_id,
        (SELECT parent_task_id FROM tasks WHERE id = $1) as parent_task_id
      FROM team_member_info_view WHERE user_id = $2 AND team_id = $3
    `;
        const result = await db_1.default.query(q, [taskId, userId, teamId]);
        const [data] = result.rows;
        const body = {
            team_member_id: data.team_member_id,
            project_id: data.project_id,
            task_id: taskId,
            reporter_id: userId,
            mode: 0,
            parent_task: data.parent_task_id
        };
        await on_quick_assign_or_remove(io, socket, JSON.stringify(body));
    }
    catch (e) {
        (0, util_1.log_error)(e);
    }
}
exports.assignMemberIfNot = assignMemberIfNot;
