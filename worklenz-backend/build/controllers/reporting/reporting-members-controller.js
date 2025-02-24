"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../../decorators/handle-exceptions"));
const server_response_1 = require("../../models/server-response");
const constants_1 = require("../../shared/constants");
const utils_1 = require("../../shared/utils");
const reporting_controller_base_1 = tslib_1.__importDefault(require("./reporting-controller-base"));
const exceljs_1 = tslib_1.__importDefault(require("exceljs"));
class ReportingMembersController extends reporting_controller_base_1.default {
    static async getMembers(teamId, searchQuery = "", size = null, offset = null, teamsClause = "", key = constants_1.DATE_RANGES.LAST_WEEK, dateRange = [], includeArchived, userId) {
        const pagingClause = (size !== null && offset !== null) ? `LIMIT ${size} OFFSET ${offset}` : "";
        const archivedClause = includeArchived
            ? ""
            : `AND t.project_id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = t.project_id AND archived_projects.user_id = '${userId}')`;
        const assignClause = this.memberAssignDurationFilter(key, dateRange);
        const completedDurationClasue = this.completedDurationFilter(key, dateRange);
        const overdueActivityLogsClause = this.getActivityLogsOverdue(key, dateRange);
        const activityLogCreationFilter = this.getActivityLogsCreationClause(key, dateRange);
        const q = `SELECT COUNT(DISTINCT email) AS total,
              (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(t))), '[]'::JSON)
                  FROM (SELECT team_member_id AS id,
                              name,
                              avatar_url,
                              email,
                              (SELECT COUNT(project_id)
                              FROM project_members pm
                              WHERE pm.team_member_id = tmiv.team_member_id) AS projects,

                              (SELECT GREATEST(
                                (SELECT MAX(created_at) FROM task_activity_logs WHERE user_id = (SELECT user_id FROM team_members WHERE id = tmiv.team_member_id) AND team_id = $1),
                                (SELECT MAX(created_at) FROM task_work_log WHERE user_id = (SELECT user_id FROM team_members WHERE id = tmiv.team_member_id)
                                AND task_id IN (SELECT id FROM tasks t WHERE project_id IN (SELECT id FROM projects WHERE team_id = $1 )
                                )))) AS last_user_activity,

                              (SELECT COUNT(*)
                              FROM tasks t
                                      LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                              WHERE team_member_id = tmiv.team_member_id ${archivedClause}) AS total_tasks,

                              (SELECT COUNT(*)
                              FROM tasks t
                                      LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                              WHERE team_member_id = tmiv.team_member_id ${assignClause} ${archivedClause}) AS tasks,

                              (SELECT COUNT(*)
                              FROM tasks t
                                      LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                              WHERE team_member_id = tmiv.team_member_id
                                  AND is_completed(status_id, t.project_id) ${archivedClause}) AS total_completed,

                              (SELECT COUNT(*) FROM tasks t
                                      LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                              WHERE team_member_id = tmiv.team_member_id  AND is_completed(status_id, t.project_id) ${completedDurationClasue} ${archivedClause}) AS completed,

                              (SELECT COUNT(*)
                              FROM tasks t
                                      LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                              WHERE team_member_id = tmiv.team_member_id
                                  AND is_doing(status_id, t.project_id) ${archivedClause}) AS total_ongoing,

                              (SELECT COUNT(*)
                              FROM tasks t
                                      LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                              WHERE team_member_id = tmiv.team_member_id
                                  AND is_doing(status_id, t.project_id) ${archivedClause}) AS ongoing,

                              (SELECT COUNT(*) FROM tasks t
                                      LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                              WHERE team_member_id = tmiv.team_member_id ${overdueActivityLogsClause} ${archivedClause}) AS overdue,

                              (SELECT COUNT(*)
                              FROM tasks t
                                      LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                              WHERE team_member_id = tmiv.team_member_id
                                  AND is_todo(status_id, t.project_id) ${archivedClause}) AS todo,

                              (SELECT COUNT(*)
                                  FROM tasks t
                                          LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                                  WHERE team_member_id = tmiv.team_member_id
                                      AND is_todo((SELECT new_value FROM task_activity_logs tl WHERE tl.task_id = t.id AND tl.attribute_type = 'status' ${activityLogCreationFilter} ORDER BY tl.created_at DESC LIMIT 1)::UUID, t.project_id) ${archivedClause}) AS todo_by_activity_logs,

                              (SELECT COUNT(*)
                                  FROM tasks t
                                          LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                                  WHERE team_member_id = tmiv.team_member_id
                                      AND is_doing((SELECT new_value FROM task_activity_logs tl WHERE tl.task_id = t.id AND tl.attribute_type = 'status' ${activityLogCreationFilter} ORDER BY tl.created_at DESC LIMIT 1)::UUID, t.project_id) ${archivedClause}) AS ongoing_by_activity_logs
                      FROM team_member_info_view tmiv
                      WHERE tmiv.team_id = $1 ${teamsClause}
                          AND tmiv.team_member_id IN (SELECT team_member_id
                                                      FROM project_members
                                                      WHERE project_id IN (SELECT id FROM projects WHERE projects.team_id = tmiv.team_id))
                          ${searchQuery}
                      GROUP BY email, name, avatar_url, team_member_id, tmiv.team_id
                      ORDER BY last_user_activity DESC NULLS LAST

                      ${pagingClause}) t) AS members
                  FROM team_member_info_view tmiv
                  WHERE tmiv.team_id = $1 ${teamsClause}
                  AND tmiv.team_member_id IN (SELECT team_member_id
                                              FROM project_members
                                              WHERE project_id IN (SELECT id FROM projects WHERE projects.team_id = tmiv.team_id))
                  ${searchQuery}`;
        const result = await db_1.default.query(q, [teamId]);
        const [data] = result.rows;
        for (const member of data.members) {
            member.color_code = (0, utils_1.getColor)(member.name) + constants_1.TASK_PRIORITY_COLOR_ALPHA;
            member.tasks_stat = {
                todo: this.getPercentage((0, utils_1.int)(member.todo_by_activity_logs), +(member.completed + member.todo_by_activity_logs + member.ongoing_by_activity_logs)),
                doing: this.getPercentage((0, utils_1.int)(member.ongoing_by_activity_logs), +(member.completed + member.todo_by_activity_logs + member.ongoing_by_activity_logs)),
                done: this.getPercentage((0, utils_1.int)(member.completed), +(member.completed + member.todo_by_activity_logs + member.ongoing_by_activity_logs))
            };
            member.member_teams = this.createTagList(member.member_teams, 2);
        }
        return data;
    }
    static flatString(text) {
        return (text || "").split(" ").map(s => `'${s}'`).join(",");
    }
    static memberTasksDurationFilter(key, dateRange) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            if (start === end) {
                return `AND t.end_date::DATE = '${start}'::DATE`;
            }
            return `AND t.end_date::DATE >= '${start}'::DATE AND t.end_date::DATE <= '${end}'::DATE`;
        }
        if (key === constants_1.DATE_RANGES.YESTERDAY)
            return `AND t.end_date::DATE >= (CURRENT_DATE - INTERVAL '1 day')::DATE AND t.end_date::DATE < CURRENT_DATE::DATE`;
        if (key === constants_1.DATE_RANGES.LAST_WEEK)
            return `AND t.end_date::DATE >= (CURRENT_DATE - INTERVAL '1 week')::DATE AND t.end_date::DATE < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        if (key === constants_1.DATE_RANGES.LAST_MONTH)
            return `AND t.end_date::DATE >= (CURRENT_DATE - INTERVAL '1 month')::DATE AND t.end_date::DATE < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        if (key === constants_1.DATE_RANGES.LAST_QUARTER)
            return `AND t.end_date::DATE >= (CURRENT_DATE - INTERVAL '3 months')::DATE AND t.end_date::DATE < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        return "";
    }
    static memberAssignDurationFilter(key, dateRange) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            if (start === end) {
                return `AND ta.updated_at::DATE = '${start}'::DATE`;
            }
            return `AND ta.updated_at::DATE >= '${start}'::DATE AND ta.updated_at::DATE <= '${end}'::DATE`;
        }
        if (key === constants_1.DATE_RANGES.YESTERDAY)
            return `AND ta.updated_at::DATE >= (CURRENT_DATE - INTERVAL '1 day')::DATE AND ta.updated_at::DATE < CURRENT_DATE::DATE`;
        if (key === constants_1.DATE_RANGES.LAST_WEEK)
            return `AND ta.updated_at::DATE >= (CURRENT_DATE - INTERVAL '1 week')::DATE AND ta.updated_at::DATE < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        if (key === constants_1.DATE_RANGES.LAST_MONTH)
            return `AND ta.updated_at::DATE >= (CURRENT_DATE - INTERVAL '1 month')::DATE AND ta.updated_at::DATE < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        if (key === constants_1.DATE_RANGES.LAST_QUARTER)
            return `AND ta.updated_at::DATE >= (CURRENT_DATE - INTERVAL '3 months')::DATE AND ta.updated_at::DATE < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        return "";
    }
    static completedDurationFilter(key, dateRange) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            if (start === end) {
                return `AND t.completed_at::DATE = '${start}'::DATE`;
            }
            return `AND t.completed_at::DATE >= '${start}'::DATE AND t.completed_at::DATE <= '${end}'::DATE`;
        }
        if (key === constants_1.DATE_RANGES.YESTERDAY)
            return `AND t.completed_at::DATE >= (CURRENT_DATE - INTERVAL '1 day')::DATE AND t.completed_at::DATE < CURRENT_DATE::DATE`;
        if (key === constants_1.DATE_RANGES.LAST_WEEK)
            return `AND t.completed_at::DATE >= (CURRENT_DATE - INTERVAL '1 week')::DATE AND t.completed_at::DATE < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        if (key === constants_1.DATE_RANGES.LAST_MONTH)
            return `AND t.completed_at::DATE >= (CURRENT_DATE - INTERVAL '1 month')::DATE AND t.completed_at::DATE < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        if (key === constants_1.DATE_RANGES.LAST_QUARTER)
            return `AND t.completed_at::DATE >= (CURRENT_DATE - INTERVAL '3 months')::DATE AND t.completed_at::DATE < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        return "";
    }
    static getOverdueClause(key, dateRange) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            if (start === end) {
                return `AND t.end_date::DATE = '${start}'::DATE`;
            }
            return `AND t.end_date::DATE >= '${start}'::DATE AND t.end_date::DATE <= '${end}'::DATE`;
        }
        if (key === constants_1.DATE_RANGES.YESTERDAY)
            return `AND t.end_date::DATE >= (CURRENT_DATE - INTERVAL '1 day')::DATE AND t.end_date::DATE < NOW()::DATE`;
        if (key === constants_1.DATE_RANGES.LAST_WEEK)
            return `AND t.end_date::DATE >= (CURRENT_DATE - INTERVAL '1 week')::DATE AND t.end_date::DATE < NOW()::DATE`;
        if (key === constants_1.DATE_RANGES.LAST_MONTH)
            return `AND t.end_date::DATE >= (CURRENT_DATE - INTERVAL '1 month')::DATE AND t.end_date::DATE < NOW()::DATE`;
        if (key === constants_1.DATE_RANGES.LAST_QUARTER)
            return `AND t.end_date::DATE >= (CURRENT_DATE - INTERVAL '3 months')::DATE AND t.end_date::DATE < NOW()::DATE`;
        return ` AND t.end_date::DATE < NOW()::DATE `;
    }
    static getTaskSelectorClause() {
        return `SELECT t.id,
                    t.name,
                    t.project_id,
                    (SELECT name FROM projects WHERE id = t.project_id) AS project_name,
                    t.parent_task_id,
                    t.parent_task_id IS NOT NULL AS is_sub_task,

                    t.end_date,
                    t.completed_at,

                    (CASE
                    WHEN (CURRENT_DATE::DATE > end_date::DATE AND
                          status_id IN (SELECT id
                                        FROM task_statuses
                                        WHERE project_id = t.project_id
                                          AND category_id IN
                                              (SELECT id FROM sys_task_status_categories WHERE is_done IS FALSE)))
                        THEN CURRENT_DATE::DATE - end_date::DATE
                    ELSE 0 END) AS days_overdue,

                    (SELECT name FROM task_statuses WHERE id = t.status_id) AS status_name,
                    (SELECT color_code FROM sys_task_status_categories WHERE id = (SELECT category_id FROM task_statuses WHERE id = t.status_id AND t.project_id = t.project_id)) AS status_color,

                    (SELECT name FROM task_priorities WHERE id = t.priority_id) AS priority_name,
                    (SELECT color_code FROM task_priorities WHERE id = t.priority_id) AS priority_color,

                    (SELECT name FROM project_phases WHERE id = (SELECT phase_id FROM task_phase WHERE task_id = t.id)) AS phase_name,
                    (SELECT color_code FROM project_phases WHERE id = (SELECT phase_id FROM task_phase WHERE task_id = t.id)) AS phase_color,

                    (total_minutes * 60) AS total_minutes,
                    (SELECT SUM(time_spent) FROM task_work_log WHERE task_id = t.id AND ta.team_member_id = $1) AS time_logged,
                    ((SELECT SUM(time_spent) FROM task_work_log WHERE task_id = t.id AND ta.team_member_id = $1) - (total_minutes * 60)) AS overlogged_time`;
    }
    static getActivityLogsOverdue(key, dateRange) {
        if (dateRange.length === 2) {
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            return `AND is_overdue_for_date(t.id, '${end}'::DATE)`;
        }
        return `AND is_overdue_for_date(t.id, NOW()::DATE)`;
    }
    static getActivityLogsCreationClause(key, dateRange) {
        if (dateRange.length === 2) {
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            return `AND tl.created_at::DATE <= '${end}'::DATE`;
        }
        return `AND tl.created_at::DATE <= NOW()::DATE`;
    }
    static getDateRangeClauseMembers(key, dateRange, tableAlias) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            if (start === end) {
                return `AND ${tableAlias}.created_at::DATE = '${start}'::DATE`;
            }
            return `AND ${tableAlias}.created_at::DATE >= '${start}'::DATE AND ${tableAlias}.created_at < '${end}'::DATE + INTERVAL '1 day'`;
        }
        if (key === constants_1.DATE_RANGES.YESTERDAY)
            return `AND ${tableAlias}.created_at >= (CURRENT_DATE - INTERVAL '1 day')::DATE AND ${tableAlias}.created_at < CURRENT_DATE::DATE`;
        if (key === constants_1.DATE_RANGES.LAST_WEEK)
            return `AND ${tableAlias}.created_at >= (CURRENT_DATE - INTERVAL '1 week')::DATE AND ${tableAlias}.created_at < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        if (key === constants_1.DATE_RANGES.LAST_MONTH)
            return `AND ${tableAlias}.created_at >= (CURRENT_DATE - INTERVAL '1 month')::DATE AND ${tableAlias}.created_at < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        if (key === constants_1.DATE_RANGES.LAST_QUARTER)
            return `AND ${tableAlias}.created_at >= (CURRENT_DATE - INTERVAL '3 months')::DATE AND ${tableAlias}.created_at < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        return "";
    }
    static formatDuration(duration) {
        const empty = "0h 0m";
        let format = "";
        if (duration.asMilliseconds() === 0)
            return empty;
        const h = ~~(duration.asHours());
        const m = duration.minutes();
        const s = duration.seconds();
        if (h === 0 && s > 0) {
            format = `${m}m ${s}s`;
        }
        else if (h > 0 && s === 0) {
            format = `${h}h ${m}m`;
        }
        else if (h > 0 && s > 0) {
            format = `${h}h ${m}m ${s}s`;
        }
        else {
            format = `${h}h ${m}m`;
        }
        return format;
    }
    static async getReportingMembers(req, res) {
        const { searchQuery, size, offset } = this.toPaginationOptions(req.query, ["name"]);
        const { duration, date_range } = req.query;
        const archived = req.query.archived === "true";
        let dateRange = [];
        if (typeof date_range === "string") {
            dateRange = date_range.split(",");
        }
        const teamsClause = req.query.teams
            ? `AND tmiv.team_id IN (${this.flatString(req.query.teams)})`
            : "";
        const teamId = this.getCurrentTeamId(req);
        const result = await this.getMembers(teamId, searchQuery, size, offset, teamsClause, duration, dateRange, archived, req.user?.id);
        const body = {
            total: result.total,
            members: result.members,
            team: {
                id: req.user?.team_id,
                name: req.user?.team_name
            }
        };
        return res.status(200).send(new server_response_1.ServerResponse(true, body));
    }
    static formatDurationDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };
    static async export(req, res) {
        const { search } = req.body;
        const { duration, date_range } = req.query;
        const archived = req.query.archived === "true";
        let dateRange = [];
        if (typeof date_range === "string") {
            dateRange = date_range.split(",");
        }
        const teamId = this.getCurrentTeamId(req);
        const teamName = req.query.team_name?.trim() || null;
        const result = await this.getMembers(teamId, "", null, null, "", duration, dateRange, archived, req.user?.id);
        let start = "-";
        let end = "-";
        if (dateRange.length === 2) {
            start = dateRange[0] ? this.formatDurationDate(new Date(dateRange[0])).toString() : "-";
            end = dateRange[1] ? this.formatDurationDate(new Date(dateRange[1])).toString() : "-";
        }
        else {
            switch (duration) {
                case constants_1.DATE_RANGES.YESTERDAY:
                    start = (0, moment_1.default)().subtract(1, "day").format("YYYY-MM-DD").toString();
                    break;
                case constants_1.DATE_RANGES.LAST_WEEK:
                    start = (0, moment_1.default)().subtract(1, "week").format("YYYY-MM-DD").toString();
                    break;
                case constants_1.DATE_RANGES.LAST_MONTH:
                    start = (0, moment_1.default)().subtract(1, "month").format("YYYY-MM-DD").toString();
                    break;
                case constants_1.DATE_RANGES.LAST_QUARTER:
                    start = (0, moment_1.default)().subtract(3, "months").format("YYYY-MM-DD").toString();
                    break;
            }
            end = (0, moment_1.default)().format("YYYY-MM-DD").toString();
        }
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `${teamName} members - ${exportDate}`;
        const workbook = new exceljs_1.default.Workbook();
        const sheet = workbook.addWorksheet("Members");
        sheet.columns = [
            { header: "Member", key: "name", width: 30 },
            { header: "Email", key: "email", width: 20 },
            { header: "Tasks Assigned", key: "tasks", width: 20 },
            { header: "Overdue Tasks", key: "overdue_tasks", width: 20 },
            { header: "Completed Tasks", key: "completed_tasks", width: 20 },
            { header: "Ongoing Tasks", key: "ongoing_tasks", width: 20 },
            { header: "Done Tasks(%)", key: "done_tasks", width: 20 },
            { header: "Doing Tasks(%)", key: "doing_tasks", width: 20 },
            { header: "Todo Tasks(%)", key: "todo_tasks", width: 20 }
        ];
        sheet.getCell("A1").value = `Members from ${teamName}`;
        sheet.mergeCells("A1:K1");
        sheet.getCell("A1").alignment = { horizontal: "center" };
        sheet.getCell("A1").style.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "D9D9D9" } };
        sheet.getCell("A1").font = { size: 16 };
        sheet.getCell("A2").value = `Exported on : ${exportDate}`;
        sheet.mergeCells("A2:K2");
        sheet.getCell("A2").alignment = { horizontal: "center" };
        sheet.getCell("A2").style.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "F2F2F2" } };
        sheet.getCell("A2").font = { size: 12 };
        sheet.getCell("A3").value = `From : ${start} To : ${end}`;
        sheet.mergeCells("A3:D3");
        sheet.getRow(5).values = ["Member", "Email", "Tasks Assigned", "Overdue Tasks", "Completed Tasks", "Ongoing Tasks", "Done Tasks(%)", "Doing Tasks(%)", "Todo Tasks(%)"];
        sheet.getRow(5).font = { bold: true };
        for (const member of result.members) {
            sheet.addRow({
                name: member.name,
                email: member.email,
                tasks: member.tasks,
                overdue_tasks: member.overdue,
                completed_tasks: member.completed,
                ongoing_tasks: member.ongoing,
                done_tasks: member.completed,
                doing_tasks: member.ongoing_by_activity_logs,
                todo_tasks: member.todo_by_activity_logs
            });
        }
        res.setHeader("Content-Type", "application/vnd.openxmlformats");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res)
            .then(() => {
            res.end();
        });
    }
    static async exportTimeLogs(req, res) {
        const { duration, date_range, team_id, team_member_id } = req.query;
        const includeArchived = req.query.archived === "true";
        let dateRange = [];
        if (typeof date_range === "string") {
            dateRange = date_range.split(",");
        }
        const durationClause = ReportingMembersController.getDateRangeClauseMembers(duration || constants_1.DATE_RANGES.LAST_WEEK, dateRange, "twl");
        const minMaxDateClause = this.getMinMaxDates(duration || constants_1.DATE_RANGES.LAST_WEEK, dateRange, "task_work_log");
        const memberName = req.query.member_name?.trim() || null;
        const logGroups = await this.memberTimeLogsData(durationClause, minMaxDateClause, team_id, team_member_id, includeArchived, req.user?.id);
        let start = "-";
        let end = "-";
        if (dateRange.length === 2) {
            start = dateRange[0] ? this.formatDurationDate(new Date(dateRange[0])).toString() : "-";
            end = dateRange[1] ? this.formatDurationDate(new Date(dateRange[1])).toString() : "-";
        }
        else {
            switch (duration) {
                case constants_1.DATE_RANGES.YESTERDAY:
                    start = (0, moment_1.default)().subtract(1, "day").format("YYYY-MM-DD").toString();
                    break;
                case constants_1.DATE_RANGES.LAST_WEEK:
                    start = (0, moment_1.default)().subtract(1, "week").format("YYYY-MM-DD").toString();
                    break;
                case constants_1.DATE_RANGES.LAST_MONTH:
                    start = (0, moment_1.default)().subtract(1, "month").format("YYYY-MM-DD").toString();
                    break;
                case constants_1.DATE_RANGES.LAST_QUARTER:
                    start = (0, moment_1.default)().subtract(3, "months").format("YYYY-MM-DD").toString();
                    break;
            }
            end = (0, moment_1.default)().format("YYYY-MM-DD").toString();
        }
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `${memberName} timelogs - ${exportDate}`;
        const workbook = new exceljs_1.default.Workbook();
        const sheet = workbook.addWorksheet("Members");
        sheet.columns = [
            { header: "Date", key: "date", width: 30 },
            { header: "Log", key: "log", width: 120 },
        ];
        sheet.getCell("A1").value = `Timelogs of ${memberName}`;
        sheet.mergeCells("A1:K1");
        sheet.getCell("A1").alignment = { horizontal: "center" };
        sheet.getCell("A1").style.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "D9D9D9" } };
        sheet.getCell("A1").font = { size: 16 };
        sheet.getCell("A2").value = `Exported on : ${exportDate}`;
        sheet.mergeCells("A2:K2");
        sheet.getCell("A2").alignment = { horizontal: "center" };
        sheet.getCell("A2").style.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "F2F2F2" } };
        sheet.getCell("A2").font = { size: 12 };
        sheet.getCell("A3").value = `From : ${start} To : ${end}`;
        sheet.mergeCells("A3:D3");
        sheet.getRow(5).values = ["Time Logs"];
        sheet.getRow(5).font = { bold: true };
        for (const row of logGroups) {
            for (const log of row.logs) {
                sheet.addRow({
                    date: row.log_day,
                    log: `Logged ${log.time_spent_string} for ${log.task_name} in ${log.project_name}`
                });
            }
        }
        res.setHeader("Content-Type", "application/vnd.openxmlformats");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res)
            .then(() => {
            res.end();
        });
    }
    static async exportActivityLogs(req, res) {
        const { duration, date_range, team_id, team_member_id } = req.query;
        const includeArchived = req.query.archived === "true";
        let dateRange = [];
        if (typeof date_range === "string") {
            dateRange = date_range.split(",");
        }
        const durationClause = ReportingMembersController.getDateRangeClauseMembers(duration || constants_1.DATE_RANGES.LAST_WEEK, dateRange, "tal");
        const minMaxDateClause = this.getMinMaxDates(duration || constants_1.DATE_RANGES.LAST_WEEK, dateRange, "task_activity_logs");
        const memberName = req.query.member_name?.trim() || null;
        const logGroups = await this.memberActivityLogsData(durationClause, minMaxDateClause, team_id, team_member_id, includeArchived, req.user?.id);
        let start = "-";
        let end = "-";
        if (dateRange.length === 2) {
            start = dateRange[0] ? this.formatDurationDate(new Date(dateRange[0])).toString() : "-";
            end = dateRange[1] ? this.formatDurationDate(new Date(dateRange[1])).toString() : "-";
        }
        else {
            switch (duration) {
                case constants_1.DATE_RANGES.YESTERDAY:
                    start = (0, moment_1.default)().subtract(1, "day").format("YYYY-MM-DD").toString();
                    break;
                case constants_1.DATE_RANGES.LAST_WEEK:
                    start = (0, moment_1.default)().subtract(1, "week").format("YYYY-MM-DD").toString();
                    break;
                case constants_1.DATE_RANGES.LAST_MONTH:
                    start = (0, moment_1.default)().subtract(1, "month").format("YYYY-MM-DD").toString();
                    break;
                case constants_1.DATE_RANGES.LAST_QUARTER:
                    start = (0, moment_1.default)().subtract(3, "months").format("YYYY-MM-DD").toString();
                    break;
            }
            end = (0, moment_1.default)().format("YYYY-MM-DD").toString();
        }
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `${memberName} activitylogs - ${exportDate}`;
        const workbook = new exceljs_1.default.Workbook();
        const sheet = workbook.addWorksheet("Members");
        sheet.columns = [
            { header: "Date", key: "date", width: 30 },
            { header: "Log", key: "log", width: 120 },
        ];
        sheet.getCell("A1").value = `Activities of ${memberName}`;
        sheet.mergeCells("A1:K1");
        sheet.getCell("A1").alignment = { horizontal: "center" };
        sheet.getCell("A1").style.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "D9D9D9" } };
        sheet.getCell("A1").font = { size: 16 };
        sheet.getCell("A2").value = `Exported on : ${exportDate}`;
        sheet.mergeCells("A2:K2");
        sheet.getCell("A2").alignment = { horizontal: "center" };
        sheet.getCell("A2").style.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "F2F2F2" } };
        sheet.getCell("A2").font = { size: 12 };
        sheet.getCell("A3").value = `From : ${start} To : ${end}`;
        sheet.mergeCells("A3:D3");
        sheet.getRow(5).values = ["Activity Logs"];
        sheet.getRow(5).font = { bold: true };
        for (const row of logGroups) {
            for (const log of row.logs) {
                !log.previous ? log.previous = "NULL" : log.previous;
                !log.current ? log.current = "NULL" : log.current;
                switch (log.attribute_type) {
                    case "start_date":
                        log.attribute_type = "Start Date";
                        break;
                    case "end_date":
                        log.attribute_type = "End Date";
                        break;
                    case "status":
                        log.attribute_type = "Status";
                        break;
                    case "priority":
                        log.attribute_type = "Priority";
                        break;
                    case "phase":
                        log.attribute_type = "Phase";
                        break;
                    default:
                        break;
                }
                sheet.addRow({
                    date: row.log_day,
                    log: `Updated ${log.attribute_type} from ${log.previous} to ${log.current} in ${log.task_name} within ${log.project_name}.`
                });
            }
        }
        res.setHeader("Content-Type", "application/vnd.openxmlformats");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res)
            .then(() => {
            res.end();
        });
    }
    static async getMemberProjectsData(teamId, teamMemberId, searchQuery, archived, userId) {
        const teamClause = teamId
            ? `team_member_id = '${teamMemberId}'`
            : `team_member_id IN (SELECT team_member_id
            FROM team_member_info_view tmiv
            WHERE email = (SELECT email
                        FROM team_member_info_view tmiv2
                        WHERE tmiv2.team_member_id = '${teamMemberId}' AND in_organization(p.team_id, tmiv2.team_id)))`;
        const archivedClause = archived ? `` : ` AND pm.project_id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = pm.project_id AND user_id = '${userId}')`;
        const q = `SELECT p.id, p.name, pm.team_member_id,
                  (SELECT name FROM teams WHERE id = p.team_id) AS team,
                  (SELECT COUNT(task_id)
                      FROM tasks_assignees ta
                      WHERE pm.team_member_id = ta.team_member_id
                      AND task_id IN (SELECT id FROM tasks t WHERE t.project_id = pm.project_id))::INT AS task_count,
                  (SELECT COUNT(*)
                      FROM tasks
                      WHERE archived IS FALSE
                      AND project_id = pm.project_id
                      AND CASE
                              WHEN (TRUE IS TRUE) THEN project_id IS NOT NULL
                              ELSE archived IS FALSE END)::INT AS project_task_count,
                  (SELECT COUNT(*)
                      FROM tasks t
                              LEFT JOIN tasks_assignees ta ON ta.task_id = t.id
                      WHERE project_id = pm.project_id
                      AND ta.team_member_id = pm.team_member_id
                      AND is_completed(t.status_id, t.project_id) IS TRUE)::INT AS completed,
                  (SELECT COUNT(*)
                      FROM tasks t
                              LEFT JOIN tasks_assignees ta ON ta.task_id = t.id
                      WHERE project_id = pm.project_id
                      AND ta.team_member_id = pm.team_member_id
                      AND is_overdue(t.status_id) IS TRUE)::INT AS overdue,
                  (SELECT COUNT(*)
                      FROM tasks t
                              LEFT JOIN tasks_assignees ta ON ta.task_id = t.id
                      WHERE project_id = pm.project_id
                      AND ta.team_member_id = pm.team_member_id
                      AND is_completed(t.status_id, t.project_id) IS FALSE)::INT AS incompleted,
                  (SELECT SUM(time_spent)
                      FROM task_work_log twl
                      WHERE task_id IN (SELECT id FROM tasks WHERE tasks.project_id = pm.project_id)
                      AND user_id = (SELECT user_id FROM team_member_info_view tmiv WHERE pm.team_member_id = tmiv.team_member_id)) AS time_logged
              FROM project_members pm
                      LEFT JOIN projects p ON p.id = pm.project_id
              WHERE ${teamClause} ${searchQuery} ${archivedClause}
              ORDER BY name;`;
        const result = await db_1.default.query(q, []);
        for (const project of result.rows) {
            project.time_logged = (0, utils_1.formatDuration)(moment_1.default.duration(project.time_logged, "seconds"));
            project.contribution = project.project_task_count > 0 ? ((project.task_count / project.project_task_count) * 100).toFixed(0) : 0;
        }
        return result.rows;
    }
    static async getMemberProjects(req, res) {
        const { searchQuery } = this.toPaginationOptions(req.query, ["p.name"]);
        const { teamMemberId, teamId } = req.query;
        const archived = req.query.archived === "true";
        const result = await this.getMemberProjectsData(teamId, teamMemberId, searchQuery, archived, req.user?.id);
        return res.status(200).send(new server_response_1.ServerResponse(true, result));
    }
    static getMinMaxDates(key, dateRange, tableName) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            return `,(SELECT '${start}'::DATE )AS start_date, (SELECT '${end}'::DATE )AS end_date`;
        }
        if (key === constants_1.DATE_RANGES.YESTERDAY)
            return `,(SELECT (CURRENT_DATE - INTERVAL '1 day')::DATE) AS start_date, (SELECT (CURRENT_DATE)::DATE) AS end_date`;
        if (key === constants_1.DATE_RANGES.LAST_WEEK)
            return `,(SELECT (CURRENT_DATE - INTERVAL '1 week')::DATE) AS start_date, (SELECT (CURRENT_DATE)::DATE) AS end_date`;
        if (key === constants_1.DATE_RANGES.LAST_MONTH)
            return `,(SELECT (CURRENT_DATE - INTERVAL '1 month')::DATE) AS start_date, (SELECT (CURRENT_DATE)::DATE) AS end_date`;
        if (key === constants_1.DATE_RANGES.LAST_QUARTER)
            return `,(SELECT (CURRENT_DATE - INTERVAL '3 months')::DATE) AS start_date, (SELECT (CURRENT_DATE)::DATE) AS end_date`;
        if (key === constants_1.DATE_RANGES.ALL_TIME)
            return `,(SELECT (MIN(created_at)::DATE) FROM ${tableName} WHERE task_id IN (SELECT id FROM tasks WHERE project_id IN (SELECT id FROM projects WHERE team_id = $1))) AS start_date, (SELECT (MAX(created_at)::DATE) FROM ${tableName} WHERE task_id IN (SELECT id FROM tasks WHERE project_id IN (SELECT id FROM projects WHERE team_id = $1))) AS end_date`;
        return "";
    }
    static async getMemberActivities(req, res) {
        const { team_member_id, team_id, duration, date_range, archived } = req.body;
        const durationClause = ReportingMembersController.getDateRangeClauseMembers(duration || constants_1.DATE_RANGES.LAST_WEEK, date_range, "tal");
        const minMaxDateClause = this.getMinMaxDates(duration || constants_1.DATE_RANGES.LAST_WEEK, date_range, "task_activity_logs");
        const logGroups = await this.memberActivityLogsData(durationClause, minMaxDateClause, team_id, team_member_id, archived, req.user?.id);
        return res.status(200).send(new server_response_1.ServerResponse(true, logGroups));
    }
    static async formatLog(result) {
        result.time_logs.forEach((row) => {
            const duration = moment_1.default.duration(row.time_spent, "seconds");
            row.time_spent_string = this.formatDuration(duration);
        });
        return result;
    }
    static async getTimeLogDays(result) {
        if (result) {
            const startDate = (0, moment_1.default)(result.start_date).isValid() ? (0, moment_1.default)(result.start_date, "YYYY-MM-DD").clone() : null;
            const endDate = (0, moment_1.default)(result.end_date).isValid() ? (0, moment_1.default)(result.end_date, "YYYY-MM-DD").clone() : null;
            const days = [];
            const logDayGroups = [];
            while (startDate && (0, moment_1.default)(startDate).isSameOrBefore(endDate)) {
                days.push(startDate.clone().format("YYYY-MM-DD"));
                startDate ? startDate.add(1, "day") : null;
            }
            for (const day of days) {
                const logsForDay = result.time_logs.filter((log) => (0, moment_1.default)((0, moment_1.default)(log.created_at).format("YYYY-MM-DD")).isSame((0, moment_1.default)(day).format("YYYY-MM-DD")));
                if (logsForDay.length) {
                    logDayGroups.push({
                        log_day: day,
                        logs: logsForDay
                    });
                }
            }
            return logDayGroups;
        }
        return [];
    }
    static async getActivityLogDays(result) {
        if (result) {
            const startDate = (0, moment_1.default)(result.start_date).isValid() ? (0, moment_1.default)(result.start_date, "YYYY-MM-DD").clone() : null;
            const endDate = (0, moment_1.default)(result.end_date).isValid() ? (0, moment_1.default)(result.end_date, "YYYY-MM-DD").clone() : null;
            const days = [];
            const logDayGroups = [];
            while (startDate && (0, moment_1.default)(startDate).isSameOrBefore(endDate)) {
                days.push(startDate.clone().format("YYYY-MM-DD"));
                startDate ? startDate.add(1, "day") : null;
            }
            for (const day of days) {
                const logsForDay = result.activity_logs.filter((log) => (0, moment_1.default)((0, moment_1.default)(log.created_at).format("YYYY-MM-DD")).isSame((0, moment_1.default)(day).format("YYYY-MM-DD")));
                if (logsForDay.length) {
                    logDayGroups.push({
                        log_day: day,
                        logs: logsForDay
                    });
                }
            }
            return logDayGroups;
        }
        return [];
    }
    static async memberTimeLogsData(durationClause, minMaxDateClause, team_id, team_member_id, includeArchived, userId) {
        const archivedClause = includeArchived
            ? ""
            : `AND project_id NOT IN (SELECT project_id FROM archived_projects WHERE archived_projects.user_id = '${userId}')`;
        const q = `
                SELECT user_id,
                      (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(tl))), '[]'::JSON)
                      FROM (SELECT time_spent,
                                  created_at,
                                  twl.task_id AS task_id,
                                  (SELECT project_id FROM tasks WHERE tasks.id = twl.task_id) AS project_id,
                                  (SELECT name FROM projects WHERE id = (SELECT project_id FROM tasks WHERE tasks.id = twl.task_id)) AS project_name,
                                  (SELECT name FROM tasks WHERE tasks.id = twl.task_id) AS task_name,
                                  CONCAT((SELECT key
                                          FROM projects
                                          WHERE id = (SELECT project_id FROM tasks WHERE tasks.id = twl.task_id)), '-',
                                          (SELECT task_no FROM tasks WHERE tasks.id = twl.task_id)) AS task_key
                            FROM task_work_log twl
                            WHERE twl.user_id = tmiv.user_id
                              ${durationClause}
                              AND task_id IN (SELECT id FROM tasks WHERE project_id IN (SELECT id FROM projects WHERE team_id = $1) ${archivedClause} )
                            ORDER BY twl.updated_at DESC) tl) AS time_logs
                      ${minMaxDateClause}
                FROM team_member_info_view tmiv
                WHERE tmiv.team_id = $1
                AND tmiv.team_member_id = $2
      `;
        const result = await db_1.default.query(q, [team_id, team_member_id]);
        let logGroups = [];
        if (result.rows.length) {
            const [data] = result.rows;
            const formattedLogs = await this.formatLog(data);
            logGroups = await this.getTimeLogDays(formattedLogs);
        }
        return logGroups;
    }
    static async memberActivityLogsData(durationClause, minMaxDateClause, team_id, team_member_id, includeArchived, userId) {
        const archivedClause = includeArchived ? `` : `AND (SELECT project_id FROM tasks WHERE id = tal.task_id) NOT IN (SELECT project_id FROM archived_projects WHERE archived_projects.user_id = '${userId}')`;
        const q = `
                SELECT user_id,
                      (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(al))), '[]'::JSON)
                      FROM (SELECT task_id,
                                   user_id,
                                   (SELECT project_id FROM tasks WHERE id = tal.task_id) AS project_id,
                                   tal.task_id AS task_id,
                                   (SELECT name FROM projects WHERE id = (SELECT project_id FROM tasks WHERE id = tal.task_id)) AS project_name,
                                    (SELECT name FROM tasks WHERE tasks.id = tal.task_id) AS task_name,
                                    CONCAT((SELECT key
                                            FROM projects
                                            WHERE id = (SELECT project_id FROM tasks WHERE tasks.id = tal.task_id)), '-',
                                          (SELECT task_no FROM tasks WHERE tasks.id = tal.task_id)) AS task_key,
                                    created_at,
                                    attribute_type,
                                    log_type,
                                    (CASE
                                        WHEN (attribute_type = 'status' AND old_value <> 'Unmapped')
                                            THEN (SELECT name FROM task_statuses WHERE id = old_value::UUID)
                                        WHEN (attribute_type = 'priority' AND old_value <> 'Unmapped')
                                            THEN (SELECT name FROM task_priorities WHERE id = old_value::UUID)
                                        WHEN (attribute_type = 'phase' AND old_value <> 'Unmapped')
                                            THEN (SELECT name FROM project_phases WHERE id = old_value::UUID)
                                        ELSE (old_value) END) AS previous,

                                    (CASE
                                        WHEN (attribute_type = 'status' AND new_value <> 'Unmapped')
                                            THEN (SELECT name FROM task_statuses WHERE id = new_value::UUID)
                                        WHEN (attribute_type = 'priority' AND new_value <> 'Unmapped')
                                            THEN (SELECT name FROM task_priorities WHERE id = new_value::UUID)
                                        WHEN (attribute_type = 'phase' AND new_value <> 'Unmapped')
                                            THEN (SELECT name FROM project_phases WHERE id = new_value::UUID)
                                        ELSE (new_value) END) AS current,

                                    (CASE
                                        WHEN (attribute_type = 'status' AND old_value <> 'Unmapped')
                                            THEN (SELECT ROW_TO_JSON(rec)
                                                  FROM (SELECT (SELECT name FROM task_statuses WHERE id = old_value::UUID),
                                                                (SELECT color_code
                                                                FROM sys_task_status_categories
                                                                WHERE id = (SELECT category_id FROM task_statuses WHERE id = old_value::UUID))) rec)
                                        ELSE (NULL) END) AS previous_status,

                                    (CASE
                                        WHEN (attribute_type = 'status' AND new_value <> 'Unmapped')
                                            THEN (SELECT ROW_TO_JSON(rec)
                                                  FROM (SELECT (SELECT name FROM task_statuses WHERE id = new_value::UUID),
                                                                (SELECT color_code
                                                                FROM sys_task_status_categories
                                                                WHERE id = (SELECT category_id FROM task_statuses WHERE id = new_value::UUID))) rec)
                                        ELSE (NULL) END) AS next_status,

                                    (CASE
                                        WHEN (attribute_type = 'priority' AND old_value <> 'Unmapped')
                                            THEN (SELECT ROW_TO_JSON(rec)
                                                  FROM (SELECT (SELECT name FROM task_priorities WHERE id = old_value::UUID),
                                                                (SELECT color_code FROM task_priorities WHERE id = old_value::UUID)) rec)
                                        ELSE (NULL) END) AS previous_priority,

                                    (CASE
                                        WHEN (attribute_type = 'priority' AND new_value <> 'Unmapped')
                                            THEN (SELECT ROW_TO_JSON(rec)
                                                  FROM (SELECT (SELECT name FROM task_priorities WHERE id = new_value::UUID),
                                                                (SELECT color_code FROM task_priorities WHERE id = new_value::UUID)) rec)
                                        ELSE (NULL) END) AS next_priority,

                                    (CASE
                                          WHEN (attribute_type = 'phase' AND old_value <> 'Unmapped')
                                              THEN (SELECT ROW_TO_JSON(rec)
                                                    FROM (SELECT (SELECT name FROM project_phases WHERE id = old_value::UUID),
                                                                  (SELECT color_code FROM project_phases WHERE id = old_value::UUID)) rec)
                                          ELSE (NULL) END) AS previous_phase,

                                      (CASE
                                          WHEN (attribute_type = 'phase' AND new_value <> 'Unmapped')
                                              THEN (SELECT ROW_TO_JSON(rec)
                                                    FROM (SELECT (SELECT name FROM project_phases WHERE id = new_value::UUID),
                                                                  (SELECT color_code FROM project_phases WHERE id = new_value::UUID)) rec)
                                          ELSE (NULL) END) AS next_phase

                            FROM task_activity_logs tal
                            WHERE tal.user_id = tmiv.user_id
                                  ${durationClause}
                                  AND tal.team_id = $1 AND tal.attribute_type IN ('status', 'priority', 'phase', 'end_date', 'start_date')
                                  ${archivedClause}
                            ORDER BY created_at DESC) al) AS activity_logs
                      ${minMaxDateClause}
                FROM team_member_info_view tmiv
                WHERE tmiv.team_id = $1
                AND tmiv.team_member_id = $2
      `;
        const result = await db_1.default.query(q, [team_id, team_member_id]);
        let logGroups = [];
        if (result.rows.length) {
            const [data] = result.rows;
            logGroups = await this.getActivityLogDays(data);
        }
        return logGroups;
    }
    static async getMemberTimelogs(req, res) {
        const { team_member_id, team_id, duration, date_range, archived } = req.body;
        const durationClause = ReportingMembersController.getDateRangeClauseMembers(duration || constants_1.DATE_RANGES.LAST_WEEK, date_range, "twl");
        const minMaxDateClause = this.getMinMaxDates(duration || constants_1.DATE_RANGES.LAST_WEEK, date_range, "task_work_log");
        const logGroups = await this.memberTimeLogsData(durationClause, minMaxDateClause, team_id, team_member_id, archived, req.user?.id);
        return res.status(200).send(new server_response_1.ServerResponse(true, logGroups));
    }
    static async getMemberTaskStats(req, res) {
        const { duration, date_range, team_member_id } = req.query;
        const includeArchived = req.query.archived === "true";
        let dateRange = [];
        if (typeof date_range === "string") {
            dateRange = date_range.split(",");
        }
        const archivedClause = includeArchived
            ? ""
            : `AND t.project_id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = t.project_id AND archived_projects.user_id = '${req.user?.id}')`;
        const assignClause = this.memberAssignDurationFilter(duration, dateRange);
        const completedDurationClasue = this.completedDurationFilter(duration, dateRange);
        const overdueClauseByDate = this.getActivityLogsOverdue(duration, dateRange);
        const taskSelectorClause = this.getTaskSelectorClause();
        const q = `
              SELECT name AS team_member_name,

                  (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(assigned))), '[]')
                  FROM (${taskSelectorClause}
                        FROM tasks t
                                  LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                        WHERE ta.team_member_id = $1 ${assignClause} ${archivedClause}) assigned) AS assigned,

                  (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(completed))), '[]')
                  FROM (${taskSelectorClause}
                        FROM tasks t
                                  LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                        WHERE ta.team_member_id = $1
                          AND is_completed(status_id, t.project_id)
                          ${completedDurationClasue} ${archivedClause}) completed) AS completed,

                  (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(ongoing))), '[]')
                  FROM (${taskSelectorClause}
                        FROM tasks t
                                  LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                        WHERE ta.team_member_id = $1
                          AND is_doing(status_id, t.project_id) ${archivedClause}) ongoing) AS ongoing,

                  (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(overdue))), '[]')
                  FROM (${taskSelectorClause}
                        FROM tasks t
                                  LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                        WHERE ta.team_member_id = $1 ${overdueClauseByDate} ${archivedClause}) overdue) AS overdue

              FROM team_member_info_view WHERE team_member_id =  $1;
    `;
        const result = await db_1.default.query(q, [team_member_id]);
        const [data] = result.rows;
        if (data) {
            for (const taskArray of [data.assigned, data.completed, data.ongoing, data.overdue]) {
                this.updateTaskProperties(taskArray);
            }
        }
        const body = {
            team_member_name: data.team_member_name,
            groups: [
                {
                    name: "Tasks Assigned",
                    color_code: "#7590c9",
                    tasks: data.assigned ? data.assigned : 0
                },
                {
                    name: "Tasks Completed",
                    color_code: "#75c997",
                    tasks: data.completed ? data.completed : 0
                },
                {
                    name: "Tasks Overdue",
                    color_code: "#eb6363",
                    tasks: data.overdue ? data.overdue : 0
                },
                {
                    name: "Tasks Ongoing",
                    color_code: "#7cb5ec",
                    tasks: data.ongoing ? data.ongoing : 0
                }
            ]
        };
        return res.status(200).send(new server_response_1.ServerResponse(true, body));
    }
    static updateTaskProperties(tasks) {
        for (const task of tasks) {
            task.project_color = (0, utils_1.getColor)(task.project_name);
            task.estimated_string = (0, utils_1.formatDuration)(moment_1.default.duration(~~(task.total_minutes), "seconds"));
            task.time_spent_string = (0, utils_1.formatDuration)(moment_1.default.duration(~~(task.time_logged), "seconds"));
            task.overlogged_time_string = (0, utils_1.formatDuration)(moment_1.default.duration(~~(task.overlogged_time), "seconds"));
            task.overdue_days = task.days_overdue ? task.days_overdue : null;
        }
    }
    static async getSingleMemberProjects(req, res) {
        const { team_member_id } = req.query;
        const includeArchived = req.query.archived === "true";
        const archivedClause = includeArchived
            ? ""
            : `AND projects.id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = projects.id AND archived_projects.user_id = '${req.user?.id}')`;
        const q = `SELECT id,
                    name,
                    color_code,
                    start_date,
                    end_date,

                    (SELECT icon FROM sys_project_statuses WHERE id = projects.status_id) AS status_icon,
                    (SELECT name FROM sys_project_statuses WHERE id = projects.status_id) AS status_name,
                    (SELECT color_code FROM sys_project_statuses WHERE id = projects.status_id) AS status_color,

                    (SELECT name FROM sys_project_healths WHERE id = projects.health_id) AS health_name,
                    (SELECT color_code FROM sys_project_healths WHERE id = projects.health_id) AS health_color,

                    (SELECT name FROM project_categories WHERE id = projects.category_id) AS category_name,
                    (SELECT color_code
                      FROM project_categories
                      WHERE id = projects.category_id) AS category_color,

                    (SELECT COALESCE(ROW_TO_JSON(pm), '{}'::JSON)
                      FROM (SELECT team_member_id AS pm_id,
                                  (SELECT COALESCE(ROW_TO_JSON(pmi), '{}'::JSON)
                                    FROM (SELECT name, email, avatar_url
                                          FROM team_member_info_view tmiv
                                          WHERE tmiv.team_member_id = pm.team_member_id) pmi) AS project_manager_info,
                                  EXISTS(SELECT email
                                          FROM email_invitations
                                          WHERE team_member_id = pm.team_member_id
                                            AND email_invitations.team_id = (SELECT team_id
                                                                            FROM team_member_info_view
                                                                            WHERE team_member_id = pm.team_member_id)) AS pending_invitation,
                                  (SELECT active FROM team_members WHERE id = pm.team_member_id)
                            FROM project_members pm
                            WHERE project_id = projects.id
                              AND project_access_level_id =
                                  (SELECT id FROM project_access_levels WHERE key = 'PROJECT_MANAGER')) pm) AS project_manager,

                    (SELECT COALESCE(SUM(total_minutes), 0)
                      FROM tasks
                      WHERE project_id = projects.id) AS estimated_time,

                    (SELECT SUM((SELECT COALESCE(SUM(time_spent), 0)
                                  FROM task_work_log
                                  WHERE task_id = tasks.id))
                      FROM tasks
                      WHERE project_id = projects.id) AS actual_time,

                    (SELECT name FROM team_member_info_view WHERE team_member_id = $1) As team_member_name

              FROM projects
              WHERE projects.id IN (SELECT project_id FROM project_members WHERE team_member_id = $1) ${archivedClause};`;
        const result = await db_1.default.query(q, [team_member_id]);
        const data = result.rows;
        for (const row of data) {
            row.estimated_time = (0, utils_1.int)(row.estimated_time);
            row.actual_time = (0, utils_1.int)(row.actual_time);
            row.estimated_time_string = this.convertMinutesToHoursAndMinutes((0, utils_1.int)(row.estimated_time));
            row.actual_time_string = this.convertSecondsToHoursAndMinutes((0, utils_1.int)(row.actual_time));
            row.days_left = reporting_controller_base_1.default.getDaysLeft(row.end_date);
            row.is_overdue = reporting_controller_base_1.default.isOverdue(row.end_date);
            if (row.days_left && row.is_overdue) {
                row.days_left = row.days_left.toString().replace(/-/g, "");
            }
            row.is_today = this.isToday(row.end_date);
            if (row.project_manager) {
                row.project_manager.name = row.project_manager.project_manager_info.name;
                row.project_manager.avatar_url = row.project_manager.project_manager_info.avatar_url;
                row.project_manager.color_code = (0, utils_1.getColor)(row.project_manager.name);
            }
            row.project_health = row.health_name ? row.health_name : null;
        }
        const body = {
            team_member_name: data[0].team_member_name,
            projects: data
        };
        return res.status(200).send(new server_response_1.ServerResponse(true, body));
    }
    static async exportMemberProjects(req, res) {
        const teamMemberId = req.query.team_member_id?.trim() || null;
        const teamId = req.query.team_id?.trim() || null;
        const memberName = req.query.team_member_name?.trim() || null;
        const teamName = req.query.team_name?.trim() || "";
        const archived = req.query.archived === "true";
        const result = await this.getMemberProjectsData(teamId, teamMemberId, "", archived, req.user?.id);
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `${memberName} projects - ${exportDate}`;
        const workbook = new exceljs_1.default.Workbook();
        const sheet = workbook.addWorksheet("Projects");
        sheet.columns = [
            { header: "Project", key: "project", width: 30 },
            { header: "Team", key: "team", width: 20 },
            { header: "Tasks", key: "tasks", width: 20 },
            { header: "Contribution(%)", key: "contribution", width: 20 },
            { header: "Incompleted Tasks", key: "incompleted_tasks", width: 20 },
            { header: "Completed Tasks", key: "completed_tasks", width: 20 },
            { header: "Overdue Tasks", key: "overdue_tasks", width: 20 },
            { header: "Logged Time", key: "logged_time", width: 20 }
        ];
        sheet.getCell("A1").value = `Projects of ${memberName} - ${teamName}`;
        sheet.mergeCells("A1:H1");
        sheet.getCell("A1").alignment = { horizontal: "center" };
        sheet.getCell("A1").style.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "D9D9D9" } };
        sheet.getCell("A1").font = { size: 16 };
        sheet.getCell("A2").value = `Exported on : ${exportDate}`;
        sheet.mergeCells("A2:H2");
        sheet.getCell("A2").alignment = { horizontal: "center" };
        sheet.getCell("A2").style.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "F2F2F2" } };
        sheet.getCell("A2").font = { size: 12 };
        sheet.getRow(4).values = ["Project", "Team", "Tasks", "Contribution(%)", "Incompleted Tasks", "Completed Tasks", "Overdue Tasks", "Logged Time"];
        sheet.getRow(4).font = { bold: true };
        for (const project of result) {
            sheet.addRow({
                project: project.name,
                team: project.team,
                tasks: project.task_count ? project.task_count.toString() : "-",
                contribution: project.contribution ? project.contribution.toString() : "-",
                incompleted_tasks: project.incompleted ? project.incompleted.toString() : "-",
                completed_tasks: project.completed ? project.completed.toString() : "-",
                overdue_tasks: project.overdue ? project.overdue.toString() : "-",
                logged_time: project.time_logged ? project.time_logged.toString() : "-"
            });
        }
        res.setHeader("Content-Type", "application/vnd.openxmlformats");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res)
            .then(() => {
            res.end();
        });
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingMembersController, "getReportingMembers", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingMembersController, "export", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingMembersController, "exportTimeLogs", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingMembersController, "exportActivityLogs", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingMembersController, "getMemberProjects", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingMembersController, "getMemberActivities", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingMembersController, "getMemberTimelogs", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingMembersController, "getMemberTaskStats", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingMembersController, "getSingleMemberProjects", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingMembersController, "exportMemberProjects", null);
exports.default = ReportingMembersController;
