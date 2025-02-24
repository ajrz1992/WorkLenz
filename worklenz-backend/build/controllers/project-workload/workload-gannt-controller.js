"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IWLTaskListGroup = void 0;
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const moment_timezone_1 = tslib_1.__importDefault(require("moment-timezone"));
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../../decorators/handle-exceptions"));
const server_response_1 = require("../../models/server-response");
const constants_1 = require("../../shared/constants");
const utils_1 = require("../../shared/utils");
const workload_gannt_base_1 = tslib_1.__importStar(require("./workload-gannt-base"));
class IWLTaskListGroup {
    name;
    category_id;
    color_code;
    tasks;
    isExpand;
    constructor(group) {
        this.name = group.name;
        this.category_id = group.category_id || null;
        this.color_code = group.color_code + constants_1.TASK_STATUS_COLOR_ALPHA;
        this.tasks = [];
        this.isExpand = group.isExpand;
    }
}
exports.IWLTaskListGroup = IWLTaskListGroup;
class WorkloadGanntController extends workload_gannt_base_1.default {
    static GLOBAL_DATE_WIDTH = 30;
    static GLOBAL_START_DATE = (0, moment_1.default)().format("YYYY-MM-DD");
    static GLOBAL_END_DATE = (0, moment_1.default)().format("YYYY-MM-DD");
    static TASKS_START_DATE_NULL_FILTER = "start_date_null";
    static TASKS_END_DATE_NULL_FILTER = "end_date_null";
    static TASKS_START_END_DATES_NULL_FILTER = "start_end_dates_null";
    static async getFirstLastDates(projectId) {
        const q = `SELECT MIN(min_date) AS start_date, MAX(max_date) AS end_date
               FROM (SELECT MIN(start_date) AS min_date, MAX(start_date) AS max_date
                     FROM tasks
                     WHERE project_id = $1 AND tasks.archived IS FALSE
                     UNION
                     SELECT MIN(end_date) AS min_date, MAX(end_date) AS max_date
                     FROM tasks
                     WHERE project_id = $1 AND tasks.archived IS FALSE) AS date_union;`;
        const res = await db_1.default.query(q, [projectId]);
        return res.rows[0];
    }
    static async getLogsFirstLastDates(projectId) {
        const q = `SELECT  MIN(twl.created_at - INTERVAL '1 second' * twl.time_spent) AS min_date,
                      MAX(twl.created_at - INTERVAL '1 second' * twl.time_spent) AS max_date
                    FROM task_work_log twl
                            INNER JOIN tasks t ON twl.task_id = t.id AND t.archived IS FALSE
                    WHERE t.project_id = $1`;
        const res = await db_1.default.query(q, [projectId]);
        return res.rows[0];
    }
    static validateEndDate(endDate) {
        return endDate.isBefore((0, moment_1.default)(), "day");
    }
    static validateStartDate(startDate) {
        return startDate.isBefore((0, moment_1.default)(), "day");
    }
    static getScrollAmount(startDate) {
        const today = (0, moment_1.default)();
        const daysDifference = today.diff(startDate, "days");
        return (this.GLOBAL_DATE_WIDTH * daysDifference);
    }
    static setTaskCss(task) {
        let startDate = task.start_date ? (0, moment_1.default)(task.start_date) : (0, moment_1.default)();
        let endDate = task.end_date ? (0, moment_1.default)(task.end_date) : (0, moment_1.default)();
        if (!task.start_date) {
            startDate = (0, moment_1.default)(task.end_date);
        }
        if (!task.end_date) {
            endDate = (0, moment_1.default)(task.start_date);
        }
        if (!task.start_date && !task.end_date) {
            startDate = (0, moment_1.default)();
            endDate = (0, moment_1.default)();
        }
        const daysDifferenceFromStart = startDate.diff(this.GLOBAL_START_DATE, "days");
        task.left = daysDifferenceFromStart * this.GLOBAL_DATE_WIDTH;
        if ((0, moment_1.default)(startDate).isSame((0, moment_1.default)(endDate), "day")) {
            task.width = this.GLOBAL_DATE_WIDTH;
        }
        else {
            const taskWidth = endDate.diff(startDate, "days");
            task.width = (taskWidth + 1) * this.GLOBAL_DATE_WIDTH;
        }
        return task;
    }
    static setIndicator(startDate, endDate) {
        const daysFromStart = (0, moment_1.default)(startDate).diff(this.GLOBAL_START_DATE, "days");
        const indicatorOffset = daysFromStart * this.GLOBAL_DATE_WIDTH;
        const daysDifference = (0, moment_1.default)(endDate).diff(startDate, "days");
        const indicatorWidth = (daysDifference + 1) * this.GLOBAL_DATE_WIDTH;
        const body = {
            indicatorOffset,
            indicatorWidth
        };
        return body;
    }
    static async createDateRange(req, res) {
        const dateRange = await this.getFirstLastDates(req.params.id);
        const logRange = await this.getLogsFirstLastDates(req.params.id);
        const today = new Date();
        let startDate = (0, moment_1.default)(today).clone().startOf("month");
        let endDate = (0, moment_1.default)(today).clone().endOf("month");
        this.setChartStartEnd(dateRange, logRange, req.query.timeZone);
        if (dateRange.start_date && dateRange.end_date) {
            startDate = this.validateStartDate((0, moment_1.default)(dateRange.start_date)) ? (0, moment_1.default)(dateRange.start_date).startOf("month") : (0, moment_1.default)(today).clone().startOf("month");
            endDate = this.validateEndDate((0, moment_1.default)(dateRange.end_date)) ? (0, moment_1.default)(today).clone().endOf("month") : (0, moment_1.default)(dateRange.end_date).endOf("month");
        }
        else if (dateRange.start_date && !dateRange.end_date) {
            startDate = this.validateStartDate((0, moment_1.default)(dateRange.start_date)) ? (0, moment_1.default)(dateRange.start_date).startOf("month") : (0, moment_1.default)(today).clone().startOf("month");
        }
        else if (!dateRange.start_date && dateRange.end_date) {
            endDate = this.validateEndDate((0, moment_1.default)(dateRange.end_date)) ? (0, moment_1.default)(today).clone().endOf("month") : (0, moment_1.default)(dateRange.end_date).endOf("month");
        }
        const xMonthsBeforeStart = startDate.clone().subtract(1, "months");
        const xMonthsAfterEnd = endDate.clone().add(1, "months");
        this.GLOBAL_START_DATE = (0, moment_1.default)(xMonthsBeforeStart).format("YYYY-MM-DD");
        this.GLOBAL_END_DATE = (0, moment_1.default)(xMonthsAfterEnd).format("YYYY-MM-DD");
        const dateData = [];
        let days = -1;
        const currentDate = xMonthsBeforeStart.clone();
        while (currentDate.isBefore(xMonthsAfterEnd)) {
            const monthData = {
                month: currentDate.format("MMM YYYY"),
                weeks: [],
                days: [],
            };
            const daysInMonth = currentDate.daysInMonth();
            for (let day = 1; day <= daysInMonth; day++) {
                const dayOfMonth = currentDate.date();
                const dayName = currentDate.format("ddd");
                const isWeekend = [0, 6].includes(currentDate.day());
                const isToday = (0, moment_1.default)((0, moment_1.default)(today).format("YYYY-MM-DD")).isSame((0, moment_1.default)(currentDate).format("YYYY-MM-DD"));
                monthData.days.push({ day: dayOfMonth, name: dayName, isWeekend, isToday });
                currentDate.add(1, "day");
                days++;
            }
            dateData.push(monthData);
        }
        const scrollBy = this.getScrollAmount(xMonthsBeforeStart);
        const result = {
            date_data: dateData,
            width: days + 1,
            scroll_by: scrollBy,
            chart_start: (0, moment_1.default)(this.GLOBAL_START_DATE).format("YYYY-MM-DD"),
            chart_end: (0, moment_1.default)(this.GLOBAL_END_DATE).format("YYYY-MM-DD")
        };
        return res.status(200).send(new server_response_1.ServerResponse(true, result));
    }
    static async setChartStartEnd(dateRange, logsRange, timeZone) {
        if (dateRange.start_date)
            dateRange.start_date = moment_timezone_1.default.tz(dateRange.start_date, `${timeZone}`).format("YYYY-MM-DD");
        if (dateRange.end_date)
            dateRange.end_date = moment_timezone_1.default.tz(dateRange.end_date, `${timeZone}`).format("YYYY-MM-DD");
        if (logsRange.min_date)
            logsRange.min_date = moment_timezone_1.default.tz(logsRange.min_date, `${timeZone}`).format("YYYY-MM-DD");
        if (logsRange.max_date)
            logsRange.max_date = moment_timezone_1.default.tz(logsRange.max_date, `${timeZone}`).format("YYYY-MM-DD");
        if ((0, moment_1.default)(logsRange.min_date).isBefore(dateRange.start_date))
            dateRange.start_date = logsRange.min_date;
        if ((0, moment_1.default)(logsRange.max_date).isAfter(dateRange.endDate))
            dateRange.end_date = logsRange.max_date;
        return dateRange;
    }
    static async getMembers(req, res) {
        const expandedMembers = req.body.expanded_members;
        const q = `SELECT pm.id AS project_member_id,
                      tmiv.team_member_id,
                      tmiv.user_id,
                      name AS name,
                      avatar_url,
                      TRUE AS project_member,

                      (SELECT COALESCE(ROW_TO_JSON(rec), '{}'::JSON)
                      FROM (SELECT MIN(LEAST(start_date, end_date)) AS min_date,
                                    MAX(GREATEST(start_date, end_date)) AS max_date
                            FROM tasks
                                      INNER JOIN tasks_assignees ta ON tasks.id = ta.task_id
                            WHERE archived IS FALSE
                              AND project_id = $1
                              AND ta.team_member_id = tmiv.team_member_id) rec) AS duration,

                      (SELECT COALESCE(ROW_TO_JSON(rec), '{}'::JSON)
                      FROM (SELECT  MIN(twl.created_at - INTERVAL '1 second' * twl.time_spent) AS min_date,
                                    MAX(twl.created_at - INTERVAL '1 second' * twl.time_spent) AS max_date
                                  FROM task_work_log twl
                                          INNER JOIN tasks t ON twl.task_id = t.id AND t.archived IS FALSE
                                  WHERE t.project_id = $1
                                    AND twl.user_id = tmiv.user_id) rec) AS logs_date_union,

                      (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
                      FROM (SELECT start_date,
                                    end_date
                            FROM tasks
                                      INNER JOIN tasks_assignees ta ON tasks.id = ta.task_id
                            WHERE archived IS FALSE
                              AND project_id = pm.project_id
                              AND ta.team_member_id = tmiv.team_member_id
                            ORDER BY start_date ASC) rec) AS tasks
              FROM project_members pm
                      INNER JOIN team_member_info_view tmiv ON pm.team_member_id = tmiv.team_member_id
              WHERE project_id = $1
              ORDER BY (SELECT MIN(LEAST(start_date, end_date))
                        FROM tasks t
                                  INNER JOIN tasks_assignees ta ON t.id = ta.task_id
                        WHERE t.archived IS FALSE
                          AND t.project_id = $1
                          AND ta.team_member_id = tmiv.team_member_id) ASC NULLS LAST`;
        const result = await db_1.default.query(q, [req.params.id]);
        for (const member of result.rows) {
            member.color_code = (0, utils_1.getColor)(member.TaskName);
            this.setMaxMinDate(member, req.query.timeZone);
            const fStartDate = member.duration.min_date ? (0, moment_1.default)(member.duration.min_date).format("YYYY-MM-DD") : (0, moment_1.default)().format("YYYY-MM-DD");
            const fEndDate = member.duration.max_date ? (0, moment_1.default)(member.duration.max_date).format("YYYY-MM-DD") : (0, moment_1.default)().format("YYYY-MM-DD");
            if (member.tasks.length > 0) {
                const styles = this.setIndicator(fStartDate, fEndDate);
                member.indicator_offset = styles.indicatorOffset;
                member.indicator_width = styles.indicatorWidth;
                member.not_allocated = false;
            }
            else {
                member.indicator_offset = 0;
                member.indicator_width = 0;
                member.not_allocated = true;
            }
            member.tasks_start_date = member.duration.min_date;
            member.tasks_end_date = member.duration.max_date;
            member.tasks_stats = await WorkloadGanntController.getMemberTasksStats(member.tasks);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async setMaxMinDate(member, timeZone) {
        if (member.duration.min_date)
            member.duration.min_date = moment_timezone_1.default.tz(member.duration.min_date, `${timeZone}`).format("YYYY-MM-DD");
        if (member.duration.max_date)
            member.duration.max_date = moment_timezone_1.default.tz(member.duration.max_date, `${timeZone}`).format("YYYY-MM-DD");
        if (member.duration.min_date && member.duration.max_date && member.logs_date_union.min_date && member.logs_date_union.max_date) {
            const durationMin = moment_timezone_1.default.tz(member.duration.min_date, `${timeZone}`).format("YYYY-MM-DD");
            const durationMax = moment_timezone_1.default.tz(member.duration.max_date, `${timeZone}`).format("YYYY-MM-DD");
            const logMin = moment_timezone_1.default.tz(member.logs_date_union.min_date, `${timeZone}`).format("YYYY-MM-DD");
            const logMax = moment_timezone_1.default.tz(member.logs_date_union.max_date, `${timeZone}`).format("YYYY-MM-DD");
            if ((0, moment_1.default)(logMin).isBefore(durationMin)) {
                member.duration.min_date = logMin;
            }
            if ((0, moment_1.default)(logMax).isAfter(durationMax)) {
                member.duration.max_date = logMax;
            }
            return member;
        }
        if (!member.duration.min_date && !member.duration.max_date && member.logs_date_union.min_date && member.logs_date_union.max_date) {
            const logMin = moment_timezone_1.default.tz(member.logs_date_union.min_date, `${timeZone}`).format("YYYY-MM-DD");
            const logMax = moment_timezone_1.default.tz(member.logs_date_union.max_date, `${timeZone}`).format("YYYY-MM-DD");
            member.duration.min_date = logMin;
            member.duration.max_date = logMax;
            return member;
        }
        return member;
    }
    static async getMemberTasksStats(tasks) {
        const tasksCount = tasks.length;
        let nullStartCount = 0;
        let nullEndCount = 0;
        let nullBothCount = 0;
        for (const task of tasks) {
            if ((!task.start_date || task.start_date.trim() === "") && (!task.end_date || task.end_date.trim() === "")) {
                nullBothCount++;
            }
            else if ((!task.start_date || task.start_date.trim() === "") && (task.end_date)) {
                nullStartCount++;
            }
            else if ((!task.end_date || task.end_date.trim() === "") && (task.start_date)) {
                nullEndCount++;
            }
        }
        const body = {
            total: tasksCount,
            null_start_dates: nullStartCount,
            null_end_dates: nullEndCount,
            null_start_end_dates: nullBothCount,
            null_start_dates_percentage: (nullStartCount / tasksCount) * 100,
            null_end_dates_percentage: (nullEndCount / tasksCount) * 100,
            null_start_end_dates_percentage: (nullBothCount / tasksCount) * 100,
            available_start_end_dates_percentage: ((tasksCount - (nullStartCount + nullEndCount + nullBothCount)) / tasksCount) * 100
        };
        return body;
    }
    static isCountsOnly(query) {
        return query.count === "true";
    }
    static isTasksOnlyReq(query) {
        return WorkloadGanntController.isCountsOnly(query) || query.parent_task;
    }
    static flatString(text) {
        return (text || "").split(" ").map(s => `'${s}'`).join(",");
    }
    static getFilterByDatesWhereClosure(text) {
        let closure = "";
        switch (text.trim()) {
            case "":
                closure = ``;
                break;
            case WorkloadGanntController.TASKS_START_DATE_NULL_FILTER:
                closure = `start_date IS NULL AND end_date IS NOT NULL`;
                break;
            case WorkloadGanntController.TASKS_END_DATE_NULL_FILTER:
                closure = `start_date IS NOT NULL AND end_date IS NULL`;
                break;
            case WorkloadGanntController.TASKS_START_END_DATES_NULL_FILTER:
                closure = `start_date IS NULL AND end_date IS NULL`;
                break;
        }
        return closure;
    }
    static getFilterByMembersWhereClosure(text) {
        return text
            ? `id IN (SELECT task_id FROM tasks_assignees WHERE team_member_id IN (${this.flatString(text)}))`
            : "";
    }
    static getStatusesQuery(filterBy) {
        return filterBy === "member"
            ? `, (SELECT COALESCE(JSON_AGG(rec), '[]'::JSON)
      FROM (SELECT task_statuses.id, task_statuses.name, stsc.color_code
          FROM task_statuses
              INNER JOIN sys_task_status_categories stsc ON task_statuses.category_id = stsc.id
          WHERE project_id = t.project_id
          ORDER BY task_statuses.name) rec) AS statuses`
            : "";
    }
    static async getTaskCompleteRatio(taskId) {
        try {
            const result = await db_1.default.query("SELECT get_task_complete_ratio($1) AS info;", [taskId]);
            const [data] = result.rows;
            data.info.ratio = +data.info.ratio.toFixed();
            return data.info;
        }
        catch (error) {
            return null;
        }
    }
    static getQuery(userId, options) {
        const searchField = options.search ? "t.name" : "sort_order";
        const { searchQuery, sortField } = WorkloadGanntController.toPaginationOptions(options, searchField);
        const isSubTasks = !!options.parent_task;
        const sortFields = sortField.replace(/ascend/g, "ASC").replace(/descend/g, "DESC") || "sort_order";
        const membersFilter = WorkloadGanntController.getFilterByMembersWhereClosure(options.members);
        const statusesQuery = WorkloadGanntController.getStatusesQuery(options.filterBy);
        const archivedFilter = options.archived === "true" ? "archived IS TRUE" : "archived IS FALSE";
        const datesFilter = WorkloadGanntController.getFilterByDatesWhereClosure(options.dateChecker);
        let subTasksFilter;
        if (options.isSubtasksInclude === "true") {
            subTasksFilter = "";
        }
        else {
            subTasksFilter = isSubTasks ? "parent_task_id = $2" : "parent_task_id IS NULL";
        }
        const filters = [
            subTasksFilter,
            (isSubTasks ? "1 = 1" : archivedFilter),
            membersFilter,
            datesFilter
        ].filter(i => !!i).join(" AND ");
        return `
      SELECT id,
             name,
             t.project_id AS project_id,
             t.parent_task_id,
             t.parent_task_id IS NOT NULL AS is_sub_task,
             (SELECT name FROM tasks WHERE id = t.parent_task_id) AS parent_task_name,
             (SELECT COUNT(*)
              FROM tasks
              WHERE parent_task_id = t.id)::INT AS sub_tasks_count,

             t.status_id AS status,
             t.archived,
             t.sort_order,

             (SELECT phase_id FROM task_phase WHERE task_id = t.id) AS phase_id,
             (SELECT name
              FROM project_phases
              WHERE id = (SELECT phase_id FROM task_phase WHERE task_id = t.id)) AS phase_name,


             (SELECT color_code
              FROM sys_task_status_categories
              WHERE id = (SELECT category_id FROM task_statuses WHERE id = t.status_id)) AS status_color,

             (SELECT COALESCE(ROW_TO_JSON(r), '{}'::JSON)
              FROM (SELECT is_done, is_doing, is_todo
                    FROM sys_task_status_categories
                    WHERE id = (SELECT category_id FROM task_statuses WHERE id = t.status_id)) r) AS status_category,

             (CASE
                WHEN EXISTS(SELECT 1
                            FROM tasks_with_status_view
                            WHERE tasks_with_status_view.task_id = t.id
                              AND is_done IS TRUE) THEN 1
                ELSE 0 END) AS parent_task_completed,
             (SELECT get_task_assignees(t.id)) AS assignees,
             (SELECT COUNT(*)
              FROM tasks_with_status_view tt
              WHERE tt.parent_task_id = t.id
                AND tt.is_done IS TRUE)::INT
               AS completed_sub_tasks,

             (SELECT id FROM task_priorities WHERE id = t.priority_id) AS priority,
             (SELECT value FROM task_priorities WHERE id = t.priority_id) AS priority_value,
             total_minutes,
             start_date,
             end_date ${statusesQuery}
      FROM tasks t
      WHERE ${filters} ${searchQuery} AND project_id = $1
      ORDER BY end_date DESC NULLS LAST
    `;
    }
    static async getGroups(groupBy, projectId) {
        let q = "";
        let params = [];
        switch (groupBy) {
            case workload_gannt_base_1.GroupBy.STATUS:
                q = `
          SELECT id,
                 name,
                 (SELECT color_code FROM sys_task_status_categories WHERE id = task_statuses.category_id),
                 category_id
          FROM task_statuses
          WHERE project_id = $1
          ORDER BY sort_order;
        `;
                params = [projectId];
                break;
            case workload_gannt_base_1.GroupBy.PRIORITY:
                q = `SELECT id, name, color_code
             FROM task_priorities
             ORDER BY value DESC;`;
                break;
            case workload_gannt_base_1.GroupBy.LABELS:
                q = `
          SELECT id, name, color_code
          FROM team_labels
          WHERE team_id = $2
            AND EXISTS(SELECT 1
                       FROM tasks
                       WHERE project_id = $1
                         AND EXISTS(SELECT 1 FROM task_labels WHERE task_id = tasks.id AND label_id = team_labels.id))
          ORDER BY name;
        `;
                break;
            case workload_gannt_base_1.GroupBy.PHASE:
                q = `
          SELECT id, name, color_code, start_date, end_date
          FROM project_phases
          WHERE project_id = $1
          ORDER BY name;
        `;
                params = [projectId];
                break;
            default:
                break;
        }
        const result = await db_1.default.query(q, params);
        for (const row of result.rows) {
            row.isExpand = true;
        }
        return result.rows;
    }
    static async getList(req, res) {
        const isSubTasks = !!req.query.parent_task;
        const groupBy = (req.query.group || workload_gannt_base_1.GroupBy.STATUS);
        const q = WorkloadGanntController.getQuery(req.user?.id, req.query);
        const params = isSubTasks ? [req.params.id || null, req.query.parent_task] : [req.params.id || null];
        const result = await db_1.default.query(q, params);
        const tasks = [...result.rows];
        const groups = await this.getGroups(groupBy, req.params.id);
        const map = groups.reduce((g, group) => {
            if (group.id)
                g[group.id] = new IWLTaskListGroup(group);
            return g;
        }, {});
        this.updateMapByGroup(tasks, groupBy, map);
        const updatedGroups = Object.keys(map).map(key => {
            const group = map[key];
            if (groupBy === workload_gannt_base_1.GroupBy.PHASE)
                group.color_code = (0, utils_1.getColor)(group.name) + constants_1.TASK_PRIORITY_COLOR_ALPHA;
            return {
                id: key,
                ...group
            };
        });
        return res.status(200).send(new server_response_1.ServerResponse(true, updatedGroups));
    }
    static updateMapByGroup(tasks, groupBy, map) {
        let index = 0;
        const unmapped = [];
        for (const task of tasks) {
            task.index = index++;
            WorkloadGanntController.updateTaskViewModel(task);
            if (groupBy === workload_gannt_base_1.GroupBy.STATUS) {
                map[task.status]?.tasks.push(task);
            }
            else if (groupBy === workload_gannt_base_1.GroupBy.PRIORITY) {
                map[task.priority]?.tasks.push(task);
            }
            else if (groupBy === workload_gannt_base_1.GroupBy.PHASE && task.phase_id) {
                map[task.phase_id]?.tasks.push(task);
            }
            else {
                unmapped.push(task);
            }
        }
        if (unmapped.length) {
            map[constants_1.UNMAPPED] = {
                name: constants_1.UNMAPPED,
                category_id: null,
                color_code: "#f0f0f0",
                tasks: unmapped,
                isExpand: true
            };
        }
    }
    static async getTasksOnly(req, res) {
        const isSubTasks = !!req.query.parent_task;
        const q = WorkloadGanntController.getQuery(req.user?.id, req.query);
        const params = isSubTasks ? [req.params.id || null, req.query.parent_task] : [req.params.id || null];
        const result = await db_1.default.query(q, params);
        let data = [];
        if (this.isCountsOnly(req.query)) {
            [data] = result.rows;
        }
        else {
            data = [...result.rows];
            for (const task of data) {
                WorkloadGanntController.updateTaskViewModel(task);
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getMemberOverview(req, res) {
        const projectId = req.params.id;
        const teamMemberId = req.query.team_member_id;
        const getCountByStatus = await WorkloadGanntController.getTasksCountsByStatus(projectId, teamMemberId);
        const getCountByPriority = await WorkloadGanntController.getTasksCountsByPriority(projectId, teamMemberId);
        const getCountByPhase = await WorkloadGanntController.getTasksCountsByPhase(projectId, teamMemberId);
        const getCountByDates = await WorkloadGanntController.getTasksCountsByDates(projectId, teamMemberId);
        const data = {
            by_status: getCountByStatus,
            by_priority: getCountByPriority,
            by_phase: getCountByPhase,
            by_dates: getCountByDates
        };
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getTasksCountsByStatus(projectId, teamMemberId) {
        const q = `SELECT ts.id,
                      ts.name AS label,
                      (SELECT color_code FROM sys_task_status_categories WHERE id = ts.category_id) AS color_code,
                      (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
                      FROM (SELECT COUNT(*)
                            FROM tasks t
                            WHERE t.project_id = $1
                              AND t.archived IS FALSE
                              AND t.id IN (SELECT task_id
                                            FROM tasks_assignees
                                            WHERE team_member_id = $2)
                              AND t.status_id = ts.id) rec) AS counts
                  FROM task_statuses ts
                  WHERE project_id = $1`;
        const res = await db_1.default.query(q, [projectId, teamMemberId]);
        for (const row of res.rows) {
            row.tasks_count = row.counts[0].count;
        }
        return res.rows;
    }
    static async getTasksCountsByPriority(projectId, teamMemberId) {
        const q = `SELECT tp.id,
                      tp.name AS label,
                      tp.color_code,
                      (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
                      FROM (SELECT COUNT(*)
                            FROM tasks t
                            WHERE t.project_id = $1
                              AND t.archived IS FALSE
                              AND t.id IN (SELECT task_id
                                            FROM tasks_assignees
                                            WHERE team_member_id = $2)
                              AND t.priority_id = tp.id) rec) AS counts
                  FROM task_priorities tp`;
        const res = await db_1.default.query(q, [projectId, teamMemberId]);
        for (const row of res.rows) {
            row.tasks_count = row.counts[0].count;
        }
        return res.rows;
    }
    static async getTasksCountsByPhase(projectId, teamMemberId) {
        const q = `SELECT pp.id,
                      pp.name AS label,
                      pp.color_code AS color_code,
                      COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON) AS counts
                FROM project_phases pp
                  LEFT JOIN (SELECT pp.id AS phase_id,
                                    COUNT(ta.task_id) AS task_count
                             FROM project_phases pp
                                    LEFT JOIN task_phase tp ON pp.id = tp.phase_id
                                    LEFT JOIN tasks t ON tp.task_id = t.id
                                    LEFT JOIN tasks_assignees ta ON t.id = ta.task_id AND ta.team_member_id = $2
                             WHERE pp.project_id = $1
                             GROUP BY pp.id ) rec ON pp.id = rec.phase_id
                WHERE pp.project_id = $1
                GROUP BY pp.id`;
        const res = await db_1.default.query(q, [projectId, teamMemberId]);
        for (const row of res.rows) {
            row.tasks_count = row.counts[0].task_count;
            row.color_code = (0, utils_1.getColor)(row.label) + constants_1.TASK_PRIORITY_COLOR_ALPHA;
        }
        return res.rows;
    }
    static async getTasksCountsByDates(projectId, teamMemberId) {
        const q = `SELECT JSON_BUILD_OBJECT(
                'having_start_end_date', (SELECT COUNT(*)
                                            FROM tasks
                                            WHERE project_id = $1
                                              AND archived IS FALSE
                                              AND id IN (SELECT task_id
                                                        FROM tasks_assignees
                                                        WHERE team_member_id = $2)
                                              AND end_date IS NOT NULL AND start_date IS NOT NULL),
                  'no_end_date', (SELECT COUNT(*)
                                  FROM tasks
                                  WHERE project_id = $1
                                    AND archived IS FALSE
                                    AND id IN (SELECT task_id
                                              FROM tasks_assignees
                                              WHERE team_member_id = $2)
                                    AND end_date IS NULL AND start_date IS NOT NULL),
                  'no_start_date', (SELECT COUNT(*)
                                    FROM tasks
                                    WHERE project_id = $1
                                      AND archived IS FALSE
                                      AND id IN (SELECT task_id
                                                  FROM tasks_assignees
                                                  WHERE team_member_id = $2)
                                      AND end_date IS NOT NULL AND start_date IS NULL),
                  'no_start_end_dates', (SELECT COUNT(*)
                                        FROM tasks
                                        WHERE project_id = $1
                                          AND archived IS FALSE
                                          AND id IN (SELECT task_id
                                                      FROM tasks_assignees
                                                      WHERE team_member_id = $2)
                                          AND end_date IS NULL AND start_date IS NULL)) AS counts`;
        const res = await db_1.default.query(q, [projectId, teamMemberId]);
        const data = [
            {
                id: "",
                label: "Having start & end date",
                color_code: "#f0f0f0",
                tasks_count: res.rows[0].counts.having_start_end_date
            },
            {
                id: "",
                label: "Without end date",
                color_code: "#F9A0A0BF",
                tasks_count: res.rows[0].counts.no_end_date
            },
            {
                id: "",
                label: "Without start date",
                color_code: "#F8A9A98C",
                tasks_count: res.rows[0].counts.no_start_date
            },
            {
                id: "",
                label: "Without start & end date",
                color_code: "#F7A7A7E5",
                tasks_count: res.rows[0].counts.no_start_end_dates
            },
        ];
        return data;
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], WorkloadGanntController, "createDateRange", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], WorkloadGanntController, "getMembers", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], WorkloadGanntController, "getList", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], WorkloadGanntController, "getTasksOnly", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], WorkloadGanntController, "getMemberOverview", null);
exports.default = WorkloadGanntController;
