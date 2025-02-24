"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const handle_exceptions_1 = tslib_1.__importDefault(require("../../../decorators/handle-exceptions"));
const server_response_1 = require("../../../models/server-response");
const db_1 = tslib_1.__importDefault(require("../../../config/db"));
const utils_1 = require("../../../shared/utils");
const reporting_overview_base_1 = tslib_1.__importDefault(require("./reporting-overview-base"));
const tasks_controller_base_1 = require("../../tasks-controller-base");
const tasks_controller_v2_1 = tslib_1.__importStar(require("../../tasks-controller-v2"));
const constants_1 = require("../../../shared/constants");
const reporting_export_1 = require("../../../models/reporting-export");
const moment_1 = tslib_1.__importDefault(require("moment"));
const reporting_controller_base_1 = tslib_1.__importDefault(require("../reporting-controller-base"));
class ReportingOverviewController extends reporting_overview_base_1.default {
    static async getStatistics(req, res) {
        const teamId = this.getCurrentTeamId(req);
        const includeArchived = req.query.archived === "true";
        const archivedClause = includeArchived
            ? ""
            : `AND projects.id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = projects.id AND user_id = '${req.user?.id}') `;
        const teams = await this.getTeamsCounts(teamId, archivedClause);
        const projects = await this.getProjectsCounts(teamId, archivedClause);
        const members = await this.getMemberCounts(teamId);
        projects.count = teams.projects;
        members.count = teams.members;
        const body = {
            teams,
            projects,
            members
        };
        return res.status(200).send(new server_response_1.ServerResponse(true, body));
    }
    static async getTeams(req, res) {
        const teamId = this.getCurrentTeamId(req);
        const includeArchived = req.query.archived === "true";
        const archivedClause = includeArchived
            ? ""
            : `AND id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = projects.id AND archived_projects.user_id = '${req.user?.id}')`;
        const q = `
      SELECT id,
             name,
             COALESCE((SELECT COUNT(*) FROM projects WHERE team_id = teams.id ${archivedClause}), 0) AS projects_count,
             (SELECT COALESCE(JSON_AGG(rec), '[]'::JSON)
              FROM (
                     --
                     SELECT (SELECT name
                             FROM team_member_info_view
                             WHERE team_member_info_view.team_member_id = tm.id),
                            u.avatar_url
                     FROM team_members tm
                            LEFT JOIN users u ON tm.user_id = u.id
                     WHERE team_id = teams.id
                     --
                   ) rec) AS members
      FROM teams
      WHERE in_organization(id, $1)
      ORDER BY name;
    `;
        const result = await db_1.default.query(q, [teamId]);
        for (const team of result.rows) {
            team.members = this.createTagList(team?.members);
            team.members.map((a) => a.color_code = (0, utils_1.getColor)(a.name));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getProjects(req, res) {
        const { searchQuery, sortField, sortOrder, size, offset } = this.toPaginationOptions(req.query, ["p.name"]);
        const archived = req.query.archived === "true";
        const teamId = req.query.team;
        const archivedClause = archived
            ? ""
            : `AND p.id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = p.id AND user_id = '${req.user?.id}') `;
        const teamFilterClause = `p.team_id = $1`;
        const result = await reporting_controller_base_1.default.getProjectsByTeam(teamId, size, offset, searchQuery, sortField, sortOrder, "", "", "", archivedClause, teamFilterClause, "");
        for (const project of result.projects) {
            project.team_color = (0, utils_1.getColor)(project.team_name) + constants_1.TASK_PRIORITY_COLOR_ALPHA;
            project.days_left = reporting_controller_base_1.default.getDaysLeft(project.end_date);
            project.is_overdue = reporting_controller_base_1.default.isOverdue(project.end_date);
            if (project.days_left && project.is_overdue) {
                project.days_left = project.days_left.toString().replace(/-/g, "");
            }
            project.is_today = this.isToday(project.end_date);
            project.estimated_time = (0, utils_1.int)(project.estimated_time);
            project.actual_time = (0, utils_1.int)(project.actual_time);
            project.estimated_time_string = this.convertMinutesToHoursAndMinutes((0, utils_1.int)(project.estimated_time));
            project.actual_time_string = this.convertSecondsToHoursAndMinutes((0, utils_1.int)(project.actual_time));
            project.tasks_stat = {
                todo: this.getPercentage((0, utils_1.int)(project.tasks_stat.todo), +project.tasks_stat.total),
                doing: this.getPercentage((0, utils_1.int)(project.tasks_stat.doing), +project.tasks_stat.total),
                done: this.getPercentage((0, utils_1.int)(project.tasks_stat.done), +project.tasks_stat.total)
            };
            if (project.update.length > 0) {
                const update = project.update[0];
                const placeHolders = update.content.match(/{\d+}/g);
                if (placeHolders) {
                    placeHolders.forEach((placeHolder) => {
                        const index = parseInt(placeHolder.match(/\d+/)[0]);
                        if (index >= 0 && index < update.mentions.length) {
                            update.content = update.content.replace(placeHolder, `
                  <span class='mentions'> @${update.mentions[index].user_name} </span>`);
                        }
                    });
                }
                project.comment = update.content;
            }
            if (project.last_activity) {
                if (project.last_activity.attribute_type === "estimation") {
                    project.last_activity.previous = (0, utils_1.formatDuration)(moment_1.default.duration(project.last_activity.previous, "minutes"));
                    project.last_activity.current = (0, utils_1.formatDuration)(moment_1.default.duration(project.last_activity.current, "minutes"));
                }
                if (project.last_activity.assigned_user)
                    project.last_activity.assigned_user.color_code = (0, utils_1.getColor)(project.last_activity.assigned_user.name);
                project.last_activity.done_by.color_code = (0, utils_1.getColor)(project.last_activity.done_by.name);
                project.last_activity.log_text = await (0, utils_1.formatLogText)(project.last_activity);
                project.last_activity.attribute_type = project.last_activity.attribute_type?.replace(/_/g, " ");
                project.last_activity.last_activity_string = `${project.last_activity.done_by.name} ${project.last_activity.log_text} ${project.last_activity.attribute_type}`;
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result));
    }
    static async getProjectsByTeamOrMember(req, res) {
        const teamId = req.params.team_id?.trim() || null;
        const teamMemberId = req.query.member?.trim() || null;
        const teamMemberFilter = teamId === "undefined" ? `AND pm.team_member_id = $1` : teamMemberId ? `AND pm.team_member_id = $2` : "";
        const teamIdFilter = teamId === "undefined" ? "p.team_id IS NOT NULL" : `p.team_id = $1`;
        const q = `
        SELECT  p.id,
              p.name,
              p.color_code,
              p.team_id,
              p.status_id
        FROM projects p
            LEFT JOIN project_members pm ON pm.project_id = p.id
        WHERE ${teamIdFilter} ${teamMemberFilter}
        GROUP BY p.id, p.name;`;
        const params = teamId === "undefined" ? [teamMemberId] : teamMemberId ? [teamId, teamMemberId] : [teamId];
        const result = await db_1.default.query(q, params);
        const data = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getMembersByTeam(req, res) {
        const teamId = req.params.team_id?.trim() || null;
        const archived = req.query.archived === "true";
        const pmArchivedClause = archived ? `` : `AND project_members.project_id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = project_members.project_id AND user_id = '${req.user?.id}')`;
        const taArchivedClause = archived ? `` : `AND (SELECT tasks.project_id FROM tasks WHERE tasks.id = tasks_assignees.task_id) NOT IN (SELECT project_id FROM archived_projects WHERE project_id = (SELECT tasks.project_id FROM tasks WHERE tasks.id = tasks_assignees.task_id) AND user_id = '${req.user?.id}')`;
        const q = `
      SELECT team_member_id AS id,
             name,
             email,

             (SELECT COUNT(*)
              FROM project_members
              WHERE project_members.team_member_id = team_member_info_view.team_member_id ${pmArchivedClause}) AS projects,

             (SELECT COUNT(*)
              FROM tasks_assignees
              WHERE tasks_assignees.team_member_id = team_member_info_view.team_member_id ${taArchivedClause}) AS tasks,

             (SELECT COUNT(*)
              FROM tasks_assignees
              WHERE tasks_assignees.team_member_id = team_member_info_view.team_member_id
                AND is_overdue(task_id) IS TRUE ${taArchivedClause}) AS overdue,

             (SELECT COUNT(*)
              FROM tasks_assignees
              WHERE tasks_assignees.team_member_id = team_member_info_view.team_member_id
                AND task_id IN (SELECT id
                                FROM tasks
                                WHERE is_completed(tasks.status_id, tasks.project_id)) ${taArchivedClause}) AS completed,

             (SELECT COUNT(*)
              FROM tasks_assignees
              WHERE tasks_assignees.team_member_id = team_member_info_view.team_member_id
                AND task_id IN (SELECT id
                                FROM tasks
                                WHERE is_doing(tasks.status_id, tasks.project_id)) ${taArchivedClause}) AS ongoing

      FROM team_member_info_view
      WHERE team_id = $1
      ORDER BY name;
    `;
        const result = await db_1.default.query(q, [teamId]);
        for (const member of result.rows) {
            member.projects = (0, utils_1.int)(member.projects);
            member.tasks = (0, utils_1.int)(member.tasks);
            member.overdue = (0, utils_1.int)(member.overdue);
            member.completed = (0, utils_1.int)(member.completed);
            member.ongoing = (0, utils_1.int)(member.ongoing);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getProjectOverview(req, res) {
        const projectId = req.params.project_id || null;
        const stats = await this.getProjectStats(projectId);
        const byStatus = await this.getTasksByStatus(projectId);
        const byPriority = await this.getTasksByPriority(projectId);
        const byDue = await this.getTaskCountsByDue(projectId);
        byPriority.all = byStatus.all;
        byDue.all = byStatus.all;
        byDue.completed = stats.completed;
        byDue.overdue = stats.overdue;
        const body = {
            stats,
            by_status: byStatus,
            by_priority: byPriority,
            by_due: byDue
        };
        this.createByStatusChartData(body.by_status);
        this.createByPriorityChartData(body.by_priority);
        this.createByDueDateChartData(body.by_due);
        return res.status(200).send(new server_response_1.ServerResponse(true, body));
    }
    static async getProjectMembers(req, res) {
        const projectId = req.params.project_id?.trim() || null;
        const members = await reporting_export_1.ReportingExportModel.getProjectMembers(projectId);
        return res.status(200).send(new server_response_1.ServerResponse(true, members));
    }
    static async getProjectTasks(req, res) {
        const groupBy = (req.query.group || tasks_controller_base_1.GroupBy.STATUS);
        const projectId = req.params.project_id?.trim() || null;
        const groups = await tasks_controller_v2_1.default.getGroups(groupBy, projectId);
        const tasks = await this.getAllTasks(projectId);
        const map = groups.reduce((g, group) => {
            if (group.id)
                g[group.id] = new tasks_controller_v2_1.TaskListGroup(group);
            return g;
        }, {});
        tasks_controller_v2_1.default.updateMapByGroup(tasks, groupBy, map);
        const updatedGroups = Object.keys(map).map(key => {
            const group = map[key];
            if (groupBy === tasks_controller_base_1.GroupBy.PHASE)
                group.color_code = (0, utils_1.getColor)(group.name) + constants_1.TASK_PRIORITY_COLOR_ALPHA;
            return {
                id: key,
                ...group
            };
        });
        return res.status(200).send(new server_response_1.ServerResponse(true, updatedGroups));
    }
    static async getTeamMemberOverview(req, res) {
        const teamMemberId = req.query.teamMemberId;
        const archived = req.query.archived === "true";
        const stats = await this.getTeamMemberStats(teamMemberId, archived, req.user?.id);
        const byStatus = await this.getTasksByStatusOfTeamMemberOverview(teamMemberId, archived, req.user?.id);
        const byProject = await this.getTasksByProjectOfTeamMemberOverview(teamMemberId, archived, req.user?.id);
        const byPriority = await this.getTasksByPriorityOfTeamMemberOverview(teamMemberId, archived, req.user?.id);
        stats.projects = await this.getProjectCountOfTeamMember(teamMemberId, archived, req.user?.id);
        const body = {
            stats,
            by_status: byStatus,
            by_project: byProject,
            by_priority: byPriority
        };
        return res.status(200).send(new server_response_1.ServerResponse(true, body));
    }
    static async getMemberOverview(req, res) {
        const teamMemberId = req.query.teamMemberId;
        const { duration, date_range } = req.query;
        const archived = req.query.archived === "true";
        let dateRange = [];
        if (typeof date_range === "string") {
            dateRange = date_range.split(",");
        }
        const stats = await this.getMemberStats(teamMemberId, duration, dateRange, archived, req.user?.id);
        const byStatus = await this.getTasksByStatusOfTeamMember(teamMemberId, duration, dateRange, archived, req.user?.id);
        const byProject = await this.getTasksByProjectOfTeamMember(teamMemberId, duration, dateRange, archived, req.user?.id);
        const byPriority = await this.getTasksByPriorityOfTeamMember(teamMemberId, duration, dateRange, archived, req.user?.id);
        stats.teams = await this.getTeamCountOfTeamMember(teamMemberId);
        stats.projects = await this.getProjectCountOfTeamMember(teamMemberId, archived, req.user?.id);
        const body = {
            stats,
            by_status: byStatus,
            by_project: byProject,
            by_priority: byPriority
        };
        return res.status(200).send(new server_response_1.ServerResponse(true, body));
    }
    static async getMemberTasks(req, res) {
        const teamMemberId = req.params.team_member_id?.trim() || null;
        const projectId = req.query.project?.trim() || null;
        const onlySingleMember = req.query.only_single_member;
        const { duration, date_range } = req.query;
        const includeArchived = req.query.archived === "true";
        let dateRange = [];
        if (typeof date_range === "string") {
            dateRange = date_range.split(",");
        }
        const results = await reporting_export_1.ReportingExportModel.getMemberTasks(teamMemberId, projectId, onlySingleMember, duration, dateRange, includeArchived, req.user?.id);
        return res.status(200).send(new server_response_1.ServerResponse(true, results));
    }
    static async getTeamOverview(req, res) {
        const teamId = req.params.team_id || null;
        const archived = req.query.archived === "true";
        const archivedClause = await this.getArchivedProjectsClause(archived, req.user?.id, "projects.id");
        const byStatus = await this.getProjectsByStatus(teamId, archivedClause);
        const byCategory = await this.getProjectsByCategory(teamId, archivedClause);
        const byHealth = await this.getProjectsByHealth(teamId, archivedClause);
        byCategory.all = byStatus.all;
        byHealth.all = byStatus.all;
        const body = {
            by_status: byStatus,
            by_category: byCategory,
            by_health: byHealth
        };
        this.createByProjectStatusChartData(body.by_status);
        this.createByProjectHealthChartData(body.by_health);
        return res.status(200).send(new server_response_1.ServerResponse(true, body));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingOverviewController, "getStatistics", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingOverviewController, "getTeams", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingOverviewController, "getProjects", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingOverviewController, "getProjectsByTeamOrMember", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingOverviewController, "getMembersByTeam", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingOverviewController, "getProjectOverview", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingOverviewController, "getProjectMembers", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingOverviewController, "getProjectTasks", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingOverviewController, "getTeamMemberOverview", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingOverviewController, "getMemberOverview", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingOverviewController, "getMemberTasks", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingOverviewController, "getTeamOverview", null);
exports.default = ReportingOverviewController;
