"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const handle_exceptions_1 = tslib_1.__importDefault(require("../../../decorators/handle-exceptions"));
const server_response_1 = require("../../../models/server-response");
const reporting_projects_base_1 = tslib_1.__importDefault(require("./reporting-projects-base"));
const reporting_controller_base_1 = tslib_1.__importDefault(require("../reporting-controller-base"));
const moment_1 = tslib_1.__importDefault(require("moment"));
const constants_1 = require("../../../shared/constants");
const utils_1 = require("../../../shared/utils");
const db_1 = tslib_1.__importDefault(require("../../../config/db"));
class ReportingProjectsController extends reporting_projects_base_1.default {
    static flatString(text) {
        return (text || "").split(",").map(s => `'${s}'`).join(",");
    }
    static async get(req, res) {
        const { searchQuery, sortField, sortOrder, size, offset } = this.toPaginationOptions(req.query, ["p.name"]);
        const archived = req.query.archived === "true";
        const teamId = this.getCurrentTeamId(req);
        const statusesClause = req.query.statuses
            ? `AND p.status_id IN (${this.flatString(req.query.statuses)})`
            : "";
        const healthsClause = req.query.healths
            ? `AND p.health_id IN (${this.flatString(req.query.healths)})`
            : "";
        const categoriesClause = req.query.categories
            ? `AND p.category_id IN (${this.flatString(req.query.categories)})`
            : "";
        const projectManagersClause = req.query.project_managers
            ? `AND p.id IN(SELECT project_id FROM project_members WHERE team_member_id IN(SELECT id FROM team_members WHERE user_id IN (${this.flatString(req.query.project_managers)})) AND project_access_level_id = (SELECT id FROM project_access_levels WHERE key = 'PROJECT_MANAGER'))`
            : "";
        const archivedClause = archived
            ? ""
            : `AND p.id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = p.id AND user_id = '${req.user?.id}') `;
        const teamFilterClause = `in_organization(p.team_id, $1)`;
        const result = await reporting_controller_base_1.default.getProjectsByTeam(teamId, size, offset, searchQuery, sortField, sortOrder, statusesClause, healthsClause, categoriesClause, archivedClause, teamFilterClause, projectManagersClause);
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
                const [update] = project.update;
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
    static getMinMaxDates(key, dateRange) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            return `,(SELECT '${start}'::DATE )AS start_date, (SELECT '${end}'::DATE )AS end_date`;
        }
        if (key === constants_1.DATE_RANGES.YESTERDAY)
            return ",(SELECT (CURRENT_DATE - INTERVAL '1 day')::DATE) AS start_date, (SELECT (CURRENT_DATE)::DATE) AS end_date";
        if (key === constants_1.DATE_RANGES.LAST_WEEK)
            return ",(SELECT (CURRENT_DATE - INTERVAL '1 week')::DATE) AS start_date, (SELECT (CURRENT_DATE)::DATE) AS end_date";
        if (key === constants_1.DATE_RANGES.LAST_MONTH)
            return ",(SELECT (CURRENT_DATE - INTERVAL '1 month')::DATE) AS start_date, (SELECT (CURRENT_DATE)::DATE) AS end_date";
        if (key === constants_1.DATE_RANGES.LAST_QUARTER)
            return ",(SELECT (CURRENT_DATE - INTERVAL '3 months')::DATE) AS start_date, (SELECT (CURRENT_DATE)::DATE) AS end_date";
        if (key === constants_1.DATE_RANGES.ALL_TIME)
            return ",(SELECT (MIN(task_work_log.created_at)::DATE) FROM task_work_log WHERE task_id IN (SELECT id FROM tasks WHERE project_id = $1)) AS start_date, (SELECT (MAX(task_work_log.created_at)::DATE) FROM task_work_log WHERE task_id IN (SELECT id FROM tasks WHERE project_id = $1)) AS end_date";
        return "";
    }
    static async getProjectTimeLogs(req, res) {
        const projectId = req.body.id;
        const { duration, date_range } = req.body;
        const durationClause = this.getDateRangeClause(duration || constants_1.DATE_RANGES.LAST_WEEK, date_range);
        const minMaxDateClause = this.getMinMaxDates(duration || constants_1.DATE_RANGES.LAST_WEEK, date_range);
        const q = `SELECT
                    (SELECT name FROM projects WHERE projects.id = $1) AS project_name,
                    (SELECT key FROM projects WHERE projects.id = $1) AS project_key,
                    (SELECT task_no FROM tasks WHERE tasks.id = task_work_log.task_id) AS task_key_num,
                    (SELECT name FROM tasks WHERE tasks.id = task_work_log.task_id) AS task_name,
                    task_work_log.time_spent,
                    (SELECT name FROM users WHERE users.id = task_work_log.user_id) AS user_name,
                    (SELECT email FROM users WHERE users.id = task_work_log.user_id) AS user_email,
                    (SELECT avatar_url FROM users WHERE users.id = task_work_log.user_id) AS avatar_url,
                    task_work_log.created_at
                    ${minMaxDateClause}
                FROM task_work_log
                WHERE
                    task_id IN (select id from tasks WHERE project_id = $1)
                    ${durationClause}
                ORDER BY task_work_log.created_at DESC`;
        const result = await db_1.default.query(q, [projectId]);
        const formattedResult = await this.formatLog(result.rows);
        const logGroups = await this.getTimeLogDays(formattedResult);
        return res.status(200).send(new server_response_1.ServerResponse(true, logGroups));
    }
    static async formatLog(result) {
        result.forEach((row) => {
            const duration = moment_1.default.duration(row.time_spent, "seconds");
            row.time_spent_string = this.formatDuration(duration);
            row.task_key = `${row.project_key}-${row.task_key_num}`;
        });
        return result;
    }
    static async getTimeLogDays(result) {
        if (result.length) {
            const startDate = (0, moment_1.default)(result[0].start_date).isValid() ? (0, moment_1.default)(result[0].start_date, "YYYY-MM-DD").clone() : null;
            const endDate = (0, moment_1.default)(result[0].end_date).isValid() ? (0, moment_1.default)(result[0].end_date, "YYYY-MM-DD").clone() : null;
            const days = [];
            const logDayGroups = [];
            while (startDate && (0, moment_1.default)(startDate).isSameOrBefore(endDate)) {
                days.push(startDate.clone().format("YYYY-MM-DD"));
                startDate ? startDate.add(1, "day") : null;
            }
            for (const day of days) {
                const logsForDay = result.filter((log) => (0, moment_1.default)((0, moment_1.default)(log.created_at).format("YYYY-MM-DD")).isSame((0, moment_1.default)(day).format("YYYY-MM-DD")));
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
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingProjectsController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingProjectsController, "getProjectTimeLogs", null);
exports.default = ReportingProjectsController;
