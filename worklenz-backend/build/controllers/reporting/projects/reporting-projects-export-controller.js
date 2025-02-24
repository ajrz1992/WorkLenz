"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../../../decorators/handle-exceptions"));
const reporting_projects_base_1 = tslib_1.__importDefault(require("./reporting-projects-base"));
const exceljs_1 = tslib_1.__importDefault(require("exceljs"));
const reporting_controller_base_1 = tslib_1.__importDefault(require("../reporting-controller-base"));
const constants_1 = require("../../../shared/constants");
const db_1 = tslib_1.__importDefault(require("../../../config/db"));
class ReportingProjectsExportController extends reporting_projects_base_1.default {
    static async export(req, res) {
        const teamId = this.getCurrentTeamId(req);
        const teamName = req.query.team_name?.trim() || null;
        const results = await reporting_controller_base_1.default.exportProjectsAll(teamId);
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `${teamName} projects - ${exportDate}`;
        const workbook = new exceljs_1.default.Workbook();
        const sheet = workbook.addWorksheet("Projects");
        sheet.columns = [
            { header: "Project", key: "name", width: 30 },
            { header: "Client", key: "client", width: 20 },
            { header: "Category", key: "category", width: 20 },
            { header: "Status", key: "status", width: 20 },
            { header: "Start Date", key: "start_date", width: 20 },
            { header: "End Date", key: "end_date", width: 20 },
            { header: "Days Left/Overdue", key: "days_left", width: 20 },
            { header: "Estimated Hours", key: "estimated_hours", width: 20 },
            { header: "Actual Hours", key: "actual_hours", width: 20 },
            { header: "Done Tasks(%)", key: "done_tasks", width: 20 },
            { header: "Doing Tasks(%)", key: "doing_tasks", width: 20 },
            { header: "Todo Tasks(%)", key: "todo_tasks", width: 20 },
            { header: "Last Activity", key: "last_activity", width: 20 },
            { header: "Project Health", key: "project_health", width: 20 },
            { header: "Project Update", key: "project_update", width: 20 }
        ];
        sheet.getCell("A1").value = `Projects from ${teamName}`;
        sheet.mergeCells("A1:O1");
        sheet.getCell("A1").alignment = { horizontal: "center" };
        sheet.getCell("A1").style.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "D9D9D9" } };
        sheet.getCell("A1").font = { size: 16 };
        sheet.getCell("A2").value = `Exported on : ${exportDate}`;
        sheet.mergeCells("A2:O2");
        sheet.getCell("A2").alignment = { horizontal: "center" };
        sheet.getCell("A2").style.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "F2F2F2" } };
        sheet.getCell("A2").font = { size: 12 };
        sheet.getRow(4).values = ["Project", "Client", "Category", "Status", "Start Date", "End Date", "Days Left/Overdue", "Estimated Hours", "Actual Hours", "Done Tasks(%)", "Doing Tasks(%)", "Todo Tasks(%)", "Last Activity", "Project Health", "Project Update"];
        sheet.getRow(4).font = { bold: true };
        for (const item of results.projects) {
            if (item.is_overdue && item.days_left) {
                item.days_left = `-${item.days_left}`;
            }
            if (item.is_today) {
                item.days_left = `Today`;
            }
            sheet.addRow({
                name: item.name,
                client: item.client ? item.client : "-",
                category: item.category_name ? item.category_name : "-",
                status: item.status_name ? item.status_name : "-",
                start_date: item.start_date ? (0, moment_1.default)(item.start_date).format("YYYY-MM-DD") : "-",
                end_date: item.end_date ? (0, moment_1.default)(item.end_date).format("YYYY-MM-DD") : "-",
                days_left: item.days_left ? item.days_left.toString() : "-",
                estimated_hours: item.estimated_time ? item.estimated_time.toString() : "-",
                actual_hours: item.actual_time ? item.actual_time.toString() : "-",
                done_tasks: item.tasks_stat.done ? `${item.tasks_stat.done}` : "-",
                doing_tasks: item.tasks_stat.doing ? `${item.tasks_stat.doing}` : "-",
                todo_tasks: item.tasks_stat.todo ? `${item.tasks_stat.todo}` : "-",
                last_activity: item.last_activity ? item.last_activity.last_activity_string : "-",
                project_health: item.project_health,
                project_update: item.comment ? item.comment : "-",
            });
        }
        res.setHeader("Content-Type", "application/vnd.openxmlformats");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res)
            .then(() => {
            res.end();
        });
    }
    static async exportProjectTimeLogs(req, res) {
        const result = await this.getProjectTimeLogs(req);
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `${req.query.project_name} Time Logs - ${exportDate}`;
        const workbook = new exceljs_1.default.Workbook();
        const sheet = workbook.addWorksheet("Time Logs");
        sheet.columns = [
            { header: "Date", key: "date", width: 30 },
            { header: "Log", key: "log", width: 120 },
        ];
        sheet.getCell("A1").value = `Time Logs from ${req.query.project_name}`;
        sheet.mergeCells("A1:O1");
        sheet.getCell("A1").alignment = { horizontal: "center" };
        sheet.getCell("A1").style.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "D9D9D9" } };
        sheet.getCell("A1").font = { size: 16 };
        sheet.getCell("A2").value = `Exported on : ${exportDate}`;
        sheet.mergeCells("A2:O2");
        sheet.getCell("A2").alignment = { horizontal: "center" };
        sheet.getCell("A2").style.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "F2F2F2" } };
        sheet.getCell("A2").font = { size: 12 };
        sheet.getRow(4).values = ["Date", "Log"];
        sheet.getRow(4).font = { bold: true };
        for (const row of result) {
            for (const log of row.logs) {
                sheet.addRow({
                    date: row.log_day,
                    log: `${log.user_name} logged ${log.time_spent_string} for ${log.task_name}`
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
    static async getProjectTimeLogs(req) {
        const projectId = req.query.id;
        const duration = req.query.duration;
        const date_range = req.query.date_range;
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
        return logGroups;
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
], ReportingProjectsExportController, "export", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingProjectsExportController, "exportProjectTimeLogs", null);
exports.default = ReportingProjectsExportController;
