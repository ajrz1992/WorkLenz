"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskListGroup = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../../decorators/handle-exceptions"));
const server_response_1 = require("../../models/server-response");
const constants_1 = require("../../shared/constants");
const utils_1 = require("../../shared/utils");
const roadmap_tasks_contoller_v2_base_1 = tslib_1.__importStar(require("./roadmap-tasks-contoller-v2-base"));
const moment_1 = tslib_1.__importDefault(require("moment"));
const moment_timezone_1 = tslib_1.__importDefault(require("moment-timezone"));
class TaskListGroup {
    name;
    category_id;
    color_code;
    tasks;
    is_expanded;
    constructor(group) {
        this.name = group.name;
        this.category_id = group.category_id || null;
        this.color_code = group.color_code + constants_1.TASK_STATUS_COLOR_ALPHA;
        this.tasks = [];
        this.is_expanded = group.is_expanded;
    }
}
exports.TaskListGroup = TaskListGroup;
class RoadmapTasksControllerV2 extends roadmap_tasks_contoller_v2_base_1.default {
    static GLOBAL_DATE_WIDTH = 35;
    static GLOBAL_START_DATE = (0, moment_1.default)().format("YYYY-MM-DD");
    static GLOBAL_END_DATE = (0, moment_1.default)().format("YYYY-MM-DD");
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
    static validateEndDate(endDate) {
        return (0, moment_1.default)(endDate.format("YYYY-MM-DD")).isBefore((0, moment_1.default)(), "day");
    }
    static validateStartDate(startDate) {
        return (0, moment_1.default)(startDate.format("YYYY-MM-DD")).isBefore((0, moment_1.default)(), "day");
    }
    static getScrollAmount(startDate) {
        const today = (0, moment_1.default)().format("YYYY-MM-DD");
        const daysDifference = (0, moment_1.default)(today).diff(startDate, "days");
        return (this.GLOBAL_DATE_WIDTH * daysDifference);
    }
    static async createDateRange(req, res) {
        const dateRange = await this.getFirstLastDates(req.params.id);
        const today = new Date();
        let startDate = (0, moment_1.default)(today).clone().startOf("month");
        let endDate = (0, moment_1.default)(today).clone().endOf("month");
        if (dateRange.start_date)
            dateRange.start_date = moment_timezone_1.default.tz(dateRange.start_date, `${req.query.timeZone}`).format("YYYY-MM-DD");
        if (dateRange.end_date)
            dateRange.end_date = moment_timezone_1.default.tz(dateRange.end_date, `${req.query.timeZone}`).format("YYYY-MM-DD");
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
        const xMonthsBeforeStart = startDate.clone().subtract(2, "months");
        const xMonthsAfterEnd = endDate.clone().add(3, "months");
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
    static isCountsOnly(query) {
        return query.count === "true";
    }
    static isTasksOnlyReq(query) {
        return RoadmapTasksControllerV2.isCountsOnly(query) || query.parent_task;
    }
    static getQuery(userId, options) {
        const searchField = options.search ? "t.name" : "sort_order";
        const { searchQuery } = RoadmapTasksControllerV2.toPaginationOptions(options, searchField);
        const isSubTasks = !!options.parent_task;
        const archivedFilter = options.archived === "true" ? "archived IS TRUE" : "archived IS FALSE";
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
        ].filter(i => !!i).join(" AND ");
        return `
      SELECT id,
             name,
             t.project_id AS project_id,
             t.parent_task_id,
             t.parent_task_id IS NOT NULL AS is_sub_task,
             (SELECT COUNT(*)
              FROM tasks
              WHERE parent_task_id = t.id)::INT AS sub_tasks_count,

             t.status_id AS status,
             t.archived,

             (SELECT phase_id FROM task_phase WHERE task_id = t.id) AS phase_id,

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

             (SELECT COUNT(*)
              FROM tasks_with_status_view tt
              WHERE tt.parent_task_id = t.id
                AND tt.is_done IS TRUE)::INT
               AS completed_sub_tasks,

             (SELECT id FROM task_priorities WHERE id = t.priority_id) AS priority,
             (SELECT value FROM task_priorities WHERE id = t.priority_id) AS priority_value,
             start_date,
             end_date
      FROM tasks t
      WHERE ${filters} ${searchQuery} AND project_id = $1
      ORDER BY t.start_date ASC NULLS LAST`;
    }
    static async getGroups(groupBy, projectId) {
        let q = "";
        let params = [];
        switch (groupBy) {
            case roadmap_tasks_contoller_v2_base_1.GroupBy.STATUS:
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
            case roadmap_tasks_contoller_v2_base_1.GroupBy.PRIORITY:
                q = `SELECT id, name, color_code
             FROM task_priorities
             ORDER BY value DESC;`;
                break;
            case roadmap_tasks_contoller_v2_base_1.GroupBy.LABELS:
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
            case roadmap_tasks_contoller_v2_base_1.GroupBy.PHASE:
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
        return result.rows;
    }
    static async getList(req, res) {
        const isSubTasks = !!req.query.parent_task;
        const groupBy = (req.query.group || roadmap_tasks_contoller_v2_base_1.GroupBy.STATUS);
        const q = RoadmapTasksControllerV2.getQuery(req.user?.id, req.query);
        const params = isSubTasks ? [req.params.id || null, req.query.parent_task] : [req.params.id || null];
        const result = await db_1.default.query(q, params);
        const tasks = [...result.rows];
        const groups = await this.getGroups(groupBy, req.params.id);
        const map = groups.reduce((g, group) => {
            if (group.id)
                g[group.id] = new TaskListGroup(group);
            return g;
        }, {});
        this.updateMapByGroup(tasks, groupBy, map, req.query.expandedGroups, req.query.timezone);
        const updatedGroups = Object.keys(map).map(key => {
            const group = map[key];
            if (groupBy === roadmap_tasks_contoller_v2_base_1.GroupBy.PHASE)
                group.color_code = (0, utils_1.getColor)(group.name) + constants_1.TASK_PRIORITY_COLOR_ALPHA;
            return {
                id: key,
                ...group
            };
        });
        if (req.query.expandedGroups) {
            const expandedGroup = updatedGroups.find(g => g.id === req.query.expandedGroups);
            if (expandedGroup)
                expandedGroup.is_expanded = true;
        }
        else {
            updatedGroups[0].is_expanded = true;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, updatedGroups));
    }
    static updateMapByGroup(tasks, groupBy, map, expandedGroup, timeZone) {
        let index = 0;
        const unmapped = [];
        for (const task of tasks) {
            task.index = index++;
            RoadmapTasksControllerV2.updateTaskViewModel(task, (0, moment_1.default)(this.GLOBAL_START_DATE), this.GLOBAL_DATE_WIDTH, timeZone);
            if (groupBy === roadmap_tasks_contoller_v2_base_1.GroupBy.STATUS) {
                map[task.status]?.tasks.push(task);
            }
            else if (groupBy === roadmap_tasks_contoller_v2_base_1.GroupBy.PRIORITY) {
                map[task.priority]?.tasks.push(task);
            }
            else if (groupBy === roadmap_tasks_contoller_v2_base_1.GroupBy.PHASE && task.phase_id) {
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
                is_expanded: false
            };
        }
    }
    static async getTasksOnly(req, res) {
        const isSubTasks = !!req.query.parent_task;
        const q = RoadmapTasksControllerV2.getQuery(req.user?.id, req.query);
        const params = isSubTasks ? [req.params.id || null, req.query.parent_task] : [req.params.id || null];
        const result = await db_1.default.query(q, params);
        let data = [];
        if (this.isCountsOnly(req.query)) {
            [data] = result.rows;
        }
        else {
            data = [...result.rows];
            for (const task of data) {
                RoadmapTasksControllerV2.updateTaskViewModel(task, (0, moment_1.default)(this.GLOBAL_START_DATE), this.GLOBAL_DATE_WIDTH, req.query.timeZone);
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], RoadmapTasksControllerV2, "createDateRange", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], RoadmapTasksControllerV2, "getList", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], RoadmapTasksControllerV2, "getTasksOnly", null);
exports.default = RoadmapTasksControllerV2;
