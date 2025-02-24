"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IScheduleTaskListGroup = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../../decorators/handle-exceptions"));
const server_response_1 = require("../../models/server-response");
const constants_1 = require("../../shared/constants");
const utils_1 = require("../../shared/utils");
const moment_1 = tslib_1.__importDefault(require("moment"));
const moment_timezone_1 = tslib_1.__importDefault(require("moment-timezone"));
const schedule_controller_base_1 = tslib_1.__importStar(require("./schedule-controller-base"));
class IScheduleTaskListGroup {
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
exports.IScheduleTaskListGroup = IScheduleTaskListGroup;
class ScheduleControllerV2 extends schedule_controller_base_1.default {
    static GLOBAL_DATE_WIDTH = 35;
    static GLOBAL_START_DATE = (0, moment_1.default)().format("YYYY-MM-DD");
    static GLOBAL_END_DATE = (0, moment_1.default)().format("YYYY-MM-DD");
    static async getFirstLastDates(teamId, userId) {
        const q = `SELECT MIN(LEAST(allocated_from, allocated_to)) AS start_date,
                      MAX(GREATEST(allocated_from, allocated_to)) AS end_date,
                      (SELECT COALESCE(ROW_TO_JSON(rec), '{}'::JSON)
                      FROM (SELECT MIN(min_date) AS start_date, MAX(max_date) AS end_date
                            FROM (SELECT MIN(start_date) AS min_date, MAX(start_date) AS max_date
                                  FROM tasks
                                  WHERE project_id IN (SELECT id FROM projects WHERE team_id = $1)
                                    AND project_id NOT IN
                                        (SELECT project_id
                                          FROM archived_projects
                                          WHERE user_id = $2)
                                    AND tasks.archived IS FALSE
                                  UNION
                                  SELECT MIN(end_date) AS min_date, MAX(end_date) AS max_date
                                  FROM tasks
                                  WHERE project_id IN (SELECT id FROM projects WHERE team_id = $1)
                                    AND project_id NOT IN
                                        (SELECT project_id
                                          FROM archived_projects
                                          WHERE user_id = $2)
                                    AND tasks.archived IS FALSE) AS dates) rec) AS date_union,
                      (SELECT COALESCE(ROW_TO_JSON(rec), '{}'::JSON)
                      FROM (SELECT MIN(twl.created_at - INTERVAL '1 second' * twl.time_spent) AS start_date,
                                    MAX(twl.created_at - INTERVAL '1 second' * twl.time_spent) AS end_date
                            FROM task_work_log twl
                                      INNER JOIN tasks t ON twl.task_id = t.id AND t.archived IS FALSE
                            WHERE t.project_id IN (SELECT id FROM projects WHERE team_id = $1)
                              AND project_id NOT IN
                                  (SELECT project_id
                                    FROM archived_projects
                                    WHERE user_id = $2)) rec) AS logs_date_union
                  FROM project_member_allocations
                  WHERE project_id IN (SELECT id FROM projects WHERE team_id = $1)`;
        const res = await db_1.default.query(q, [teamId, userId]);
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
    static setAllocationIndicator(item) {
        if ((0, moment_1.default)(item.allocated_from).isValid() && (0, moment_1.default)(item.allocated_to).isValid()) {
            const daysFromStart = (0, moment_1.default)(item.allocated_from).diff(this.GLOBAL_START_DATE, "days");
            const indicatorOffset = daysFromStart * this.GLOBAL_DATE_WIDTH;
            const daysDifference = (0, moment_1.default)(item.allocated_to).diff(item.allocated_from, "days");
            const indicatorWidth = (daysDifference + 1) * this.GLOBAL_DATE_WIDTH;
            return { indicatorOffset, indicatorWidth };
        }
        return null;
    }
    static setIndicatorWithLogIndicator(item) {
        const daysFromStart = (0, moment_1.default)(item.start_date).diff(this.GLOBAL_START_DATE, "days");
        const indicatorOffset = daysFromStart * this.GLOBAL_DATE_WIDTH;
        const daysDifference = (0, moment_1.default)(item.end_date).diff(item.start_date, "days");
        const indicatorWidth = (daysDifference + 1) * this.GLOBAL_DATE_WIDTH;
        let logIndicatorOffset = 0;
        let logIndicatorWidth = 0;
        if (item.logs_date_union && item.logs_date_union.start_date && item.logs_date_union.end_date) {
            const daysFromIndicatorStart = (0, moment_1.default)(item.logs_date_union.start_date).diff(item.start_date, "days");
            logIndicatorOffset = daysFromIndicatorStart * this.GLOBAL_DATE_WIDTH;
            const daysDifferenceFromIndicator = (0, moment_1.default)(item.logs_date_union.end_date).diff(item.logs_date_union.start_date, "days");
            logIndicatorWidth = (daysDifferenceFromIndicator + 1) * this.GLOBAL_DATE_WIDTH;
        }
        const body = {
            indicatorOffset,
            indicatorWidth,
            logIndicatorOffset,
            logIndicatorWidth
        };
        return body;
    }
    static async setChartStartEnd(dateRange, logsRange, allocatedRange, timeZone) {
        const datesToCheck = [];
        const body = {
            date_union: {
                start_date: dateRange.start_date ? moment_timezone_1.default.tz(dateRange.start_date, `${timeZone}`).format("YYYY-MM-DD") : null,
                end_date: dateRange.end_date ? moment_timezone_1.default.tz(dateRange.end_date, `${timeZone}`).format("YYYY-MM-DD") : null,
            },
            logs_date_union: {
                start_date: logsRange.start_date ? moment_timezone_1.default.tz(logsRange.start_date, `${timeZone}`).format("YYYY-MM-DD") : null,
                end_date: logsRange.end_date ? moment_timezone_1.default.tz(logsRange.end_date, `${timeZone}`).format("YYYY-MM-DD") : null,
            },
            allocated_date_union: {
                start_date: allocatedRange.start_date ? moment_timezone_1.default.tz(allocatedRange.start_date, `${timeZone}`).format("YYYY-MM-DD") : null,
                end_date: allocatedRange.end_date ? moment_timezone_1.default.tz(allocatedRange.end_date, `${timeZone}`).format("YYYY-MM-DD") : null,
            }
        };
        for (const dateKey in body) {
            if (body[dateKey] && body[dateKey].start_date) {
                datesToCheck.push((0, moment_1.default)(body[dateKey].start_date));
            }
            if (body[dateKey] && body[dateKey].end_date) {
                datesToCheck.push((0, moment_1.default)(body[dateKey].end_date));
            }
        }
        const validDateToCheck = datesToCheck.filter((date) => date.isValid());
        dateRange.start_date = moment_1.default.min(validDateToCheck).format("YYYY-MM-DD");
        dateRange.end_date = moment_1.default.max(validDateToCheck).format("YYYY-MM-DD");
        return dateRange;
    }
    static async mainDateValidator(dateRange) {
        const today = new Date();
        let startDate = (0, moment_1.default)(today).clone().startOf("year");
        let endDate = (0, moment_1.default)(today).clone().endOf("year").add(1, "year");
        if (dateRange.start_date && dateRange.end_date) {
            startDate = this.validateStartDate((0, moment_1.default)(dateRange.start_date)) ? (0, moment_1.default)(dateRange.start_date).startOf("year") : (0, moment_1.default)(today).clone().startOf("year");
            endDate = this.validateEndDate((0, moment_1.default)(dateRange.end_date)) ? (0, moment_1.default)(today).clone().endOf("year") : (0, moment_1.default)(dateRange.end_date).endOf("year");
        }
        else if (dateRange.start_date && !dateRange.end_date) {
            startDate = this.validateStartDate((0, moment_1.default)(dateRange.start_date)) ? (0, moment_1.default)(dateRange.start_date).startOf("year") : (0, moment_1.default)(today).clone().startOf("year");
        }
        else if (!dateRange.start_date && dateRange.end_date) {
            endDate = this.validateEndDate((0, moment_1.default)(dateRange.end_date)) ? (0, moment_1.default)(today).clone().endOf("year") : (0, moment_1.default)(dateRange.end_date).endOf("year");
        }
        return { startDate, endDate, today };
    }
    static async createDateColumns(xMonthsBeforeStart, xMonthsAfterEnd, today) {
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
        return { dateData, days };
    }
    static async createDateRange(req, res) {
        const dates = await this.getFirstLastDates(req.params.id, req.user?.id);
        const dateRange = dates.date_union;
        const logsRange = dates.logs_date_union;
        const allocatedRange = { start_date: dates.start_date, end_date: dates.end_date };
        await this.setChartStartEnd(dateRange, logsRange, allocatedRange, req.query.timeZone);
        const { startDate, endDate, today } = await this.mainDateValidator(dateRange);
        const xMonthsBeforeStart = startDate.clone().subtract(3, "months");
        const xMonthsAfterEnd = endDate.clone().add(2, "year");
        this.GLOBAL_START_DATE = (0, moment_1.default)(xMonthsBeforeStart).format("YYYY-MM-DD");
        this.GLOBAL_END_DATE = (0, moment_1.default)(xMonthsAfterEnd).format("YYYY-MM-DD");
        const { dateData, days } = await this.createDateColumns(xMonthsBeforeStart, xMonthsAfterEnd, today);
        const scrollBy = await this.getScrollAmount(xMonthsBeforeStart);
        const result = {
            date_data: dateData,
            width: days + 1,
            scroll_by: scrollBy,
            chart_start: (0, moment_1.default)(this.GLOBAL_START_DATE).format("YYYY-MM-DD"),
            chart_end: (0, moment_1.default)(this.GLOBAL_END_DATE).format("YYYY-MM-DD")
        };
        return res.status(200).send(new server_response_1.ServerResponse(true, result));
    }
    static async getProjectsQuery(teamId, userId) {
        const q = `SELECT p.id,
                      p.name,

                      (SELECT COALESCE(ROW_TO_JSON(rec), '{}'::JSON)
                      FROM (SELECT MIN(min_date) AS start_date, MAX(max_date) AS end_date
                            FROM (SELECT MIN(allocated_from) AS min_date, MAX(allocated_from) AS max_date
                                  FROM project_member_allocations
                                  WHERE project_id = p.id
                                  UNION
                                  SELECT MIN(allocated_to) AS min_date, MAX(allocated_to) AS max_date
                                  FROM project_member_allocations
                                  WHERE project_id = p.id) AS dates) rec) AS date_union,

                      (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
                      FROM (SELECT pm.id AS project_member_id,
                                    tmiv.team_member_id,
                                    tmiv.user_id,
                                    name AS name,
                                    avatar_url,
                                    TRUE AS project_member,

                                    EXISTS(SELECT email
                                      FROM email_invitations
                                      WHERE team_member_id = tmiv.team_member_id
                                        AND email_invitations.team_id = $1) AS pending_invitation,

                                    (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]'::JSON)
                                    FROM (SELECT
                                      pma.id,
                                      pma.allocated_from,
                                      pma.allocated_to
                                          FROM project_member_allocations pma
                                          WHERE pma.team_member_id = tmiv.team_member_id
                                            AND pma.project_id = p.id) rec)
                                        AS allocations

                            FROM project_members pm
                                      INNER JOIN team_member_info_view tmiv
                                                ON pm.team_member_id = tmiv.team_member_id
                            WHERE project_id = p.id
                            ORDER BY NAME ASC) rec) AS members

                  FROM projects p
                  WHERE team_id = $1
                  AND p.id NOT IN
                    (SELECT project_id FROM archived_projects WHERE user_id = $2)
                  ORDER BY p.name`;
        const result = await db_1.default.query(q, [teamId, userId]);
        return result;
    }
    static async getProjects(req, res) {
        const userId = req.user?.id;
        const teamId = req.params.id;
        const timeZone = req.query.timeZone;
        const result = await this.getProjectsQuery(teamId, userId);
        for (const project of result.rows) {
            const { lowestDate, highestDate } = await this.setIndicatorDates(project, timeZone);
            project.allocated_from = lowestDate ? (0, moment_1.default)(lowestDate).format("YYYY-MM-DD") : null;
            project.allocated_to = highestDate ? (0, moment_1.default)(highestDate).format("YYYY-MM-DD") : null;
            const styles = this.setAllocationIndicator(project);
            project.indicator_offset = styles?.indicatorOffset && project.members.length ? styles.indicatorOffset : 0;
            project.indicator_width = styles?.indicatorWidth && project.members.length ? styles.indicatorWidth : 0;
            project.color_code = (0, utils_1.getColor)(project.name);
            for (const member of project.members) {
                const mergedAllocation = await this.mergeAllocations(member.allocations);
                member.allocations = mergedAllocation;
                for (const allocation of member.allocations) {
                    allocation.allocated_from = allocation.allocated_from ? moment_timezone_1.default.tz(allocation.allocated_from, `${timeZone}`).format("YYYY-MM-DD") : null;
                    allocation.allocated_to = allocation.allocated_to ? moment_timezone_1.default.tz(allocation.allocated_to, `${timeZone}`).format("YYYY-MM-DD") : null;
                    const styles = this.setAllocationIndicator(allocation);
                    allocation.indicator_offset = styles?.indicatorOffset ? styles?.indicatorOffset : 0;
                    allocation.indicator_width = styles?.indicatorWidth ? styles?.indicatorWidth : 0;
                }
                member.color_code = (0, utils_1.getColor)(member.name);
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getSingleProjectIndicator(req, res) {
        const projectId = req.params.id;
        const teamMemberId = req.query.team_member_id;
        const timeZone = req.query.timeZone;
        const projectIndicatorRefresh = req.query.isProjectRefresh;
        const q = `SELECT id,
                      allocated_from,
                      allocated_to,
                      (SELECT COALESCE(ROW_TO_JSON(rec), '{}'::JSON)
                      FROM (SELECT MIN(min_date) AS start_date, MAX(max_date) AS end_date
                            FROM (SELECT MIN(allocated_from) AS min_date, MAX(allocated_from) AS max_date
                                  FROM project_member_allocations
                                  WHERE project_id = $1
                                  UNION
                                  SELECT MIN(allocated_to) AS min_date, MAX(allocated_to) AS max_date
                                  FROM project_member_allocations
                                  WHERE project_id = $1) AS dates) rec) AS date_union
               FROM project_member_allocations
               WHERE team_member_id = $2
                     AND project_id = $1`;
        const result = await db_1.default.query(q, [projectId, teamMemberId]);
        const body = {
            project_allocation: { start_date: null, end_date: null, indicator_offset: null, indicator_width: null },
            member_allocations: [{}]
        };
        if (result.rows.length) {
            const mergedAllocation = await this.mergeAllocations(result.rows);
            result.rows = mergedAllocation;
            for (const allocation of result.rows) {
                allocation.allocated_from = allocation.allocated_from ? moment_timezone_1.default.tz(allocation.allocated_from, `${timeZone}`).format("YYYY-MM-DD") : null;
                allocation.allocated_to = allocation.allocated_to ? moment_timezone_1.default.tz(allocation.allocated_to, `${timeZone}`).format("YYYY-MM-DD") : null;
                const styles = this.setAllocationIndicator(allocation);
                allocation.indicator_offset = styles?.indicatorOffset ? styles?.indicatorOffset : 0;
                allocation.indicator_width = styles?.indicatorWidth ? styles?.indicatorWidth : 0;
            }
            body.member_allocations = result.rows;
        }
        const qP = `SELECT id,
                        allocated_from,
                        allocated_to,
                        (SELECT COALESCE(ROW_TO_JSON(rec), '{}'::JSON)
                        FROM (SELECT MIN(min_date) AS start_date, MAX(max_date) AS end_date
                              FROM (SELECT MIN(allocated_from) AS min_date, MAX(allocated_from) AS max_date
                                    FROM project_member_allocations
                                    WHERE project_id = $1
                                    UNION
                                    SELECT MIN(allocated_to) AS min_date, MAX(allocated_to) AS max_date
                                    FROM project_member_allocations
                                    WHERE project_id = $1) AS dates) rec) AS date_union
                  FROM project_member_allocations
                  WHERE project_id = $1`;
        const resultP = await db_1.default.query(qP, [projectId]);
        if (resultP.rows.length) {
            const project = resultP.rows[0];
            const { lowestDate, highestDate } = await this.setIndicatorDates(project, timeZone);
            if (lowestDate)
                project.start_date = lowestDate;
            if (highestDate)
                project.end_date = highestDate;
            project.start_date = project.start_date ? (0, moment_1.default)(project.start_date).format("YYYY-MM-DD") : (0, moment_1.default)().format("YYYY-MM-DD");
            project.end_date = project.end_date ? (0, moment_1.default)(project.end_date).format("YYYY-MM-DD") : (0, moment_1.default)().format("YYYY-MM-DD");
            const styles = this.setIndicatorWithLogIndicator(project);
            project.indicator_offset = styles.indicatorOffset;
            project.indicator_width = styles.indicatorWidth;
            body.project_allocation = project;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, body));
    }
    static async getSingleProjectMember(req, res) {
        const projectId = req.params.id;
        const teamMemberId = req.query.team_member_id;
        const timeZone = req.query.timeZone;
        const projectIndicatorRefresh = req.query.isProjectRefresh;
        const q = `SELECT id,
                      allocated_from,
                      allocated_to,
                      (SELECT COALESCE(ROW_TO_JSON(rec), '{}'::JSON)
                      FROM (SELECT MIN(min_date) AS start_date, MAX(max_date) AS end_date
                            FROM (SELECT MIN(allocated_from) AS min_date, MAX(allocated_from) AS max_date
                                  FROM project_member_allocations
                                  WHERE project_id = $1
                                  UNION
                                  SELECT MIN(allocated_to) AS min_date, MAX(allocated_to) AS max_date
                                  FROM project_member_allocations
                                  WHERE project_id = $1) AS dates) rec) AS date_union
               FROM project_member_allocations
               WHERE team_member_id = $2
                     AND project_id = $1`;
        const result = await db_1.default.query(q, [projectId, teamMemberId]);
        const body = {
            project_allocation: { start_date: null, end_date: null, indicator_offset: null, indicator_width: null },
            member_allocations: [{}]
        };
        if (result.rows.length) {
            const project = result.rows[0];
            const { lowestDate, highestDate } = await this.setIndicatorDates(project, timeZone);
            if (lowestDate)
                project.start_date = lowestDate;
            if (highestDate)
                project.end_date = highestDate;
            project.start_date = project.start_date ? (0, moment_1.default)(project.start_date).format("YYYY-MM-DD") : (0, moment_1.default)().format("YYYY-MM-DD");
            project.end_date = project.end_date ? (0, moment_1.default)(project.end_date).format("YYYY-MM-DD") : (0, moment_1.default)().format("YYYY-MM-DD");
            const styles = this.setIndicatorWithLogIndicator(project);
            project.indicator_offset = styles.indicatorOffset;
            project.indicator_width = styles.indicatorWidth;
            const mergedAllocation = await this.mergeAllocations(result.rows);
            result.rows = mergedAllocation;
            for (const allocation of result.rows) {
                allocation.allocated_from = allocation.allocated_from ? moment_timezone_1.default.tz(allocation.allocated_from, `${timeZone}`).format("YYYY-MM-DD") : null;
                allocation.allocated_to = allocation.allocated_to ? moment_timezone_1.default.tz(allocation.allocated_to, `${timeZone}`).format("YYYY-MM-DD") : null;
                const styles = this.setAllocationIndicator(allocation);
                allocation.indicator_offset = styles?.indicatorOffset ? styles?.indicatorOffset : 0;
                allocation.indicator_width = styles?.indicatorWidth ? styles?.indicatorWidth : 0;
            }
            body.member_allocations = result.rows;
            body.project_allocation = project;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, body));
    }
    static async mergeAllocations(allocations) {
        if (!allocations.length)
            return [];
        allocations.sort((a, b) => (0, moment_1.default)(a.allocated_from).diff((0, moment_1.default)(b.allocated_from)));
        const mergedRanges = [];
        let currentRange = { ...allocations[0], ids: [allocations[0].id] };
        for (let i = 1; i < allocations.length; i++) {
            const nextRange = allocations[i];
            if ((0, moment_1.default)(currentRange.allocated_to).isSameOrAfter(nextRange.allocated_from)) {
                currentRange.allocated_to = moment_1.default.max((0, moment_1.default)(currentRange.allocated_to), (0, moment_1.default)(nextRange.allocated_to)).toISOString();
                currentRange.ids.push(nextRange.id);
            }
            else {
                mergedRanges.push({ ...currentRange });
                currentRange = { ...nextRange, ids: [nextRange.id] };
            }
        }
        mergedRanges.push({ ...currentRange });
        return mergedRanges;
    }
    static async setIndicatorDates(item, timeZone) {
        const datesToCheck = [];
        item.date_union.start_date = item.date_union.start_date ? moment_timezone_1.default.tz(item.date_union.start_date, `${timeZone}`).format("YYYY-MM-DD") : null;
        item.date_union.end_date = item.date_union.end_date ? moment_timezone_1.default.tz(item.date_union.end_date, `${timeZone}`).format("YYYY-MM-DD") : null;
        for (const dateKey in item) {
            if (item[dateKey] && item[dateKey].start_date) {
                datesToCheck.push((0, moment_1.default)(item[dateKey].start_date));
            }
            if (item[dateKey] && item[dateKey].end_date) {
                datesToCheck.push((0, moment_1.default)(item[dateKey].end_date));
            }
        }
        const validDateToCheck = datesToCheck.filter((date) => date.isValid());
        const lowestDate = validDateToCheck.length ? moment_1.default.min(validDateToCheck).format("YYYY-MM-DD") : null;
        const highestDate = validDateToCheck.length ? moment_1.default.max(validDateToCheck).format("YYYY-MM-DD") : null;
        return {
            lowestDate,
            highestDate
        };
    }
    static async deleteMemberAllocations(req, res) {
        const ids = req.body.toString();
        const q = `DELETE FROM project_member_allocations WHERE id IN (${(ids || "").split(",").map(s => `'${s}'`).join(",")})`;
        await db_1.default.query(q);
        return res.status(200).send(new server_response_1.ServerResponse(true, []));
    }
    static isCountsOnly(query) {
        return query.count === "true";
    }
    static isTasksOnlyReq(query) {
        return ScheduleControllerV2.isCountsOnly(query) || query.parent_task;
    }
    static flatString(text) {
        return (text || "").split(" ").map(s => `'${s}'`).join(",");
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
        const { searchQuery, sortField } = ScheduleControllerV2.toPaginationOptions(options, searchField);
        const isSubTasks = !!options.parent_task;
        const sortFields = sortField.replace(/ascend/g, "ASC").replace(/descend/g, "DESC") || "sort_order";
        const membersFilter = ScheduleControllerV2.getFilterByMembersWhereClosure(options.members);
        const statusesQuery = ScheduleControllerV2.getStatusesQuery(options.filterBy);
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
            membersFilter
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
            case schedule_controller_base_1.GroupBy.STATUS:
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
            case schedule_controller_base_1.GroupBy.PRIORITY:
                q = `SELECT id, name, color_code
             FROM task_priorities
             ORDER BY value DESC;`;
                break;
            case schedule_controller_base_1.GroupBy.LABELS:
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
            case schedule_controller_base_1.GroupBy.PHASE:
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
        const groupBy = (req.query.group || schedule_controller_base_1.GroupBy.STATUS);
        const q = ScheduleControllerV2.getQuery(req.user?.id, req.query);
        const params = isSubTasks ? [req.params.id || null, req.query.parent_task] : [req.params.id || null];
        const result = await db_1.default.query(q, params);
        const tasks = [...result.rows];
        const groups = await this.getGroups(groupBy, req.params.id);
        const map = groups.reduce((g, group) => {
            if (group.id)
                g[group.id] = new IScheduleTaskListGroup(group);
            return g;
        }, {});
        this.updateMapByGroup(tasks, groupBy, map);
        const updatedGroups = Object.keys(map).map(key => {
            const group = map[key];
            if (groupBy === schedule_controller_base_1.GroupBy.PHASE)
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
            ScheduleControllerV2.updateTaskViewModel(task);
            if (groupBy === schedule_controller_base_1.GroupBy.STATUS) {
                map[task.status]?.tasks.push(task);
            }
            else if (groupBy === schedule_controller_base_1.GroupBy.PRIORITY) {
                map[task.priority]?.tasks.push(task);
            }
            else if (groupBy === schedule_controller_base_1.GroupBy.PHASE && task.phase_id) {
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
        const q = ScheduleControllerV2.getQuery(req.user?.id, req.query);
        const params = isSubTasks ? [req.params.id || null, req.query.parent_task] : [req.params.id || null];
        const result = await db_1.default.query(q, params);
        let data = [];
        if (this.isCountsOnly(req.query)) {
            [data] = result.rows;
        }
        else {
            data = [...result.rows];
            for (const task of data) {
                ScheduleControllerV2.updateTaskViewModel(task);
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ScheduleControllerV2, "createDateRange", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ScheduleControllerV2, "getProjects", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ScheduleControllerV2, "getSingleProjectIndicator", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ScheduleControllerV2, "getSingleProjectMember", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ScheduleControllerV2, "deleteMemberAllocations", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ScheduleControllerV2, "getList", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ScheduleControllerV2, "getTasksOnly", null);
exports.default = ScheduleControllerV2;
