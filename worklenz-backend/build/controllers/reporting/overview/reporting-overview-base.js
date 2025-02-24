"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../../config/db"));
const reporting_controller_base_1 = tslib_1.__importDefault(require("../reporting-controller-base"));
const constants_1 = require("../../../shared/constants");
const utils_1 = require("../../../shared/utils");
const moment_1 = tslib_1.__importDefault(require("moment"));
class ReportingOverviewBase extends reporting_controller_base_1.default {
    static createChartObject(name, color, y) {
        return {
            name,
            color,
            y
        };
    }
    static async getTeamsCounts(teamId, archivedQuery = "") {
        const q = `
      SELECT JSON_BUILD_OBJECT(
               'teams', (SELECT COUNT(*) FROM teams WHERE in_organization(id, $1)),
               'projects',
               (SELECT COUNT(*) FROM projects WHERE in_organization(team_id, $1) ${archivedQuery}),
               'team_members', (SELECT COUNT(DISTINCT email)
                                FROM team_member_info_view
                                WHERE in_organization(team_id, $1))
               ) AS counts;
    `;
        const res = await db_1.default.query(q, [teamId]);
        const [data] = res.rows;
        return {
            count: (0, utils_1.int)(data?.counts.teams),
            projects: (0, utils_1.int)(data?.counts.projects),
            members: (0, utils_1.int)(data?.counts.team_members),
        };
    }
    static async getProjectsCounts(teamId, archivedQuery = "") {
        const q = `
      SELECT JSON_BUILD_OBJECT(
               'active_projects', (SELECT COUNT(*)
                                   FROM projects
                                   WHERE in_organization(team_id, $1) AND (end_date > CURRENT_TIMESTAMP
                                      OR end_date IS NULL) ${archivedQuery}),
               'overdue_projects', (SELECT COUNT(*)
                                    FROM projects
                                    WHERE in_organization(team_id, $1)
                                      AND end_date < CURRENT_TIMESTAMP
                                      AND status_id NOT IN
                                          (SELECT id FROM sys_project_statuses WHERE name = 'Completed') ${archivedQuery})
               ) AS counts;
    `;
        const res = await db_1.default.query(q, [teamId]);
        const [data] = res.rows;
        return {
            count: 0,
            active: (0, utils_1.int)(data?.counts.active_projects),
            overdue: (0, utils_1.int)(data?.counts.overdue_projects),
        };
    }
    static async getMemberCounts(teamId) {
        const q = `
      SELECT JSON_BUILD_OBJECT(
               'unassigned', (SELECT COUNT(*)
                              FROM team_members
                              WHERE in_organization(team_id, $1)
                                AND id NOT IN (SELECT team_member_id FROM tasks_assignees)),
               'with_overdue', (SELECT COUNT(*)
                                FROM team_members
                                WHERE in_organization(team_id, $1)
                                  AND id IN (SELECT team_member_id
                                             FROM tasks_assignees
                                             WHERE is_overdue(task_id) IS TRUE))
               ) AS counts;
    `;
        const res = await db_1.default.query(q, [teamId]);
        const [data] = res.rows;
        return {
            count: 0,
            unassigned: (0, utils_1.int)(data?.counts.unassigned),
            overdue: (0, utils_1.int)(data?.counts.with_overdue),
        };
    }
    static async getProjectStats(projectId) {
        const q = `
      SELECT JSON_BUILD_OBJECT(
               'completed', (SELECT COUNT(*)
                             FROM tasks
                             WHERE project_id = $1
                               AND is_completed(tasks.status_id, tasks.project_id) IS TRUE),
               'incompleted', (SELECT COUNT(*)
                               FROM tasks
                               WHERE project_id = $1
                                 AND is_completed(tasks.status_id, tasks.project_id) IS FALSE),
               'overdue', (SELECT COUNT(*)
                           FROM tasks
                           WHERE project_id = $1
                             AND is_overdue(tasks.id)),
               'total_allocated', (SELECT SUM(total_minutes)
                                   FROM tasks
                                   WHERE project_id = $1),
               'total_logged', (SELECT SUM((SELECT SUM(time_spent) FROM task_work_log WHERE task_id = tasks.id))
                                FROM tasks
                                WHERE project_id = $1)
               ) AS counts;
    `;
        const res = await db_1.default.query(q, [projectId]);
        const [data] = res.rows;
        return {
            completed: (0, utils_1.int)(data?.counts.completed),
            incompleted: (0, utils_1.int)(data?.counts.incompleted),
            overdue: (0, utils_1.int)(data?.counts.overdue),
            total_allocated: moment_1.default.duration((0, utils_1.int)(data?.counts.total_allocated), "minutes").asHours().toFixed(0),
            total_logged: moment_1.default.duration((0, utils_1.int)(data?.counts.total_logged), "seconds").asHours().toFixed(0),
        };
    }
    static async getTasksByStatus(projectId) {
        const q = `
      SELECT JSON_BUILD_OBJECT(
               'all', (SELECT COUNT(*)
                       FROM tasks
                       WHERE project_id = $1),
               'todo', (SELECT COUNT(*)
                        FROM tasks
                        WHERE project_id = $1
                          AND is_todo(tasks.status_id, tasks.project_id) IS TRUE),
               'doing', (SELECT COUNT(*)
                         FROM tasks
                         WHERE project_id = $1
                           AND is_doing(tasks.status_id, tasks.project_id) IS TRUE),
               'done', (SELECT COUNT(*)
                        FROM tasks
                        WHERE project_id = $1
                          AND is_completed(tasks.status_id, tasks.project_id) IS TRUE)
               ) AS counts;
    `;
        const res = await db_1.default.query(q, [projectId]);
        const [data] = res.rows;
        const all = (0, utils_1.int)(data?.counts.all);
        const todo = (0, utils_1.int)(data?.counts.todo);
        const doing = (0, utils_1.int)(data?.counts.doing);
        const done = (0, utils_1.int)(data?.counts.done);
        const chart = [];
        return {
            all,
            todo,
            doing,
            done,
            chart
        };
    }
    static async getTasksByPriority(projectId) {
        const q = `
      SELECT JSON_BUILD_OBJECT(
               'low', (SELECT COUNT(*)
                       FROM tasks
                       WHERE project_id = $1
                         AND priority_id = (SELECT id FROM task_priorities WHERE value = 0)),
               'medium', (SELECT COUNT(*)
                          FROM tasks
                          WHERE project_id = $1
                            AND priority_id = (SELECT id FROM task_priorities WHERE value = 1)),
               'high', (SELECT COUNT(*)
                        FROM tasks
                        WHERE project_id = $1
                          AND priority_id = (SELECT id FROM task_priorities WHERE value = 2))
               ) AS counts;
    `;
        const res = await db_1.default.query(q, [projectId]);
        const [data] = res.rows;
        const low = (0, utils_1.int)(data?.counts.low);
        const medium = (0, utils_1.int)(data?.counts.medium);
        const high = (0, utils_1.int)(data?.counts.high);
        const chart = [];
        return {
            all: 0,
            low,
            medium,
            high,
            chart
        };
    }
    static async getTaskCountsByDue(projectId) {
        const q = `
      SELECT JSON_BUILD_OBJECT(
               'no_due', (SELECT COUNT(*)
                          FROM tasks
                          WHERE project_id = $1
                            AND end_date IS NULL),
               'upcoming', (SELECT COUNT(*)
                            FROM tasks
                            WHERE project_id = $1
                              AND end_date > CURRENT_TIMESTAMP)
               ) AS counts;
    `;
        const res = await db_1.default.query(q, [projectId]);
        const [data] = res.rows;
        const chart = [];
        return {
            all: 0,
            completed: 0,
            upcoming: (0, utils_1.int)(data?.counts.upcoming),
            overdue: 0,
            no_due: (0, utils_1.int)(data?.counts.no_due),
            chart
        };
    }
    static createByStatusChartData(body) {
        body.chart = [
            this.createChartObject("Todo", constants_1.TASK_STATUS_TODO_COLOR, body.todo),
            this.createChartObject("Doing", constants_1.TASK_STATUS_DOING_COLOR, body.doing),
            this.createChartObject("Done", constants_1.TASK_STATUS_DONE_COLOR, body.done),
        ];
    }
    static createByPriorityChartData(body) {
        body.chart = [
            this.createChartObject("Low", constants_1.TASK_PRIORITY_LOW_COLOR, body.low),
            this.createChartObject("Medium", constants_1.TASK_PRIORITY_MEDIUM_COLOR, body.medium),
            this.createChartObject("High", constants_1.TASK_PRIORITY_HIGH_COLOR, body.high),
        ];
    }
    static createByDueDateChartData(body) {
        body.chart = [
            this.createChartObject("Completed", constants_1.TASK_DUE_COMPLETED_COLOR, body.completed),
            this.createChartObject("Upcoming", constants_1.TASK_DUE_UPCOMING_COLOR, body.upcoming),
            this.createChartObject("Overdue", constants_1.TASK_DUE_OVERDUE_COLOR, body.overdue),
            this.createChartObject("No due date", constants_1.TASK_DUE_NO_DUE_COLOR, body.no_due),
        ];
    }
    static async getProjectCountOfTeamMember(teamMemberId, includeArchived, userId) {
        const archivedClause = includeArchived
            ? ""
            : `AND pm.project_id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = pm.project_id AND archived_projects.user_id = '${userId}')`;
        const q = `
      SELECT COUNT(*)
      FROM project_members pm
      WHERE team_member_id = $1 ${archivedClause};
    `;
        const result = await db_1.default.query(q, [teamMemberId]);
        const [data] = result.rows;
        return (0, utils_1.int)(data.count);
    }
    static async getTeamCountOfTeamMember(teamMemberId) {
        const q = `
      SELECT COUNT(*)
      FROM team_members
      WHERE id = $1;
    `;
        const result = await db_1.default.query(q, [teamMemberId]);
        const [data] = result.rows;
        return (0, utils_1.int)(data.count);
    }
    static memberTasksDurationFilter(key, dateRange) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
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
    static activityLogDurationFilter(key, dateRange) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            return `
      AND (is_doing(
          (SELECT new_value FROM task_activity_logs tl WHERE tl.task_id = t.id AND tl.attribute_type = 'status' AND tl.created_at::DATE <= '${end}'::DATE ORDER BY tl.created_at DESC LIMIT 1
          )::UUID, t.project_id)
        OR is_todo(
          (SELECT new_value FROM task_activity_logs tl WHERE tl.task_id = t.id AND tl.attribute_type = 'status' AND tl.created_at::DATE <= '${end}'::DATE ORDER BY tl.created_at DESC LIMIT 1
          )::UUID, t.project_id)
        OR is_completed_between(t.id::UUID, '${start}'::DATE, '${end}'::DATE))`;
        }
        return `AND (is_doing(
      (SELECT new_value FROM task_activity_logs tl WHERE tl.task_id = t.id AND tl.attribute_type = 'status' AND tl.created_at::DATE <= NOW()::DATE ORDER BY tl.created_at DESC LIMIT 1
      )::UUID, t.project_id)
    OR is_todo(
      (SELECT new_value FROM task_activity_logs tl WHERE tl.task_id = t.id AND tl.attribute_type = 'status' AND tl.created_at::DATE <= NOW()::DATE ORDER BY tl.created_at DESC LIMIT 1
      )::UUID, t.project_id)
    OR is_completed(t.status_id::UUID, t.project_id::UUID))`;
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
    static overdueTasksByDate(key, dateRange, archivedClause) {
        if (dateRange.length === 2) {
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            return `(SELECT COUNT(CASE WHEN is_overdue_for_date(t.id, '${end}'::DATE) IS TRUE THEN 1 END)
              FROM tasks t
                      LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
              WHERE ta.team_member_id = $1 ${archivedClause})`;
        }
        return `(SELECT COUNT(CASE WHEN is_overdue_for_date(t.id, NOW()::DATE) IS TRUE THEN 1 END)
              FROM tasks t
                      LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
              WHERE ta.team_member_id = $1 ${archivedClause})`;
    }
    static overdueTasksDurationFilter(key, dateRange) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
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
        if (key === constants_1.DATE_RANGES.ALL_TIME)
            return `AND t.end_date::DATE < NOW()::DATE`;
        return "";
    }
    static taskWorklogDurationFilter(key, dateRange) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            return `AND created_at::DATE >= '${start}'::DATE AND created_at::DATE <= '${end}'::DATE`;
        }
        if (key === constants_1.DATE_RANGES.YESTERDAY)
            return `AND created_at::DATE >= (CURRENT_DATE - INTERVAL '1 day')::DATE AND created_at::DATE < CURRENT_DATE::DATE`;
        if (key === constants_1.DATE_RANGES.LAST_WEEK)
            return `AND created_at::DATE >= (CURRENT_DATE - INTERVAL '1 week')::DATE AND created_at::DATE < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        if (key === constants_1.DATE_RANGES.LAST_MONTH)
            return `AND created_at::DATE >= (CURRENT_DATE - INTERVAL '1 month')::DATE AND created_at::DATE < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        if (key === constants_1.DATE_RANGES.LAST_QUARTER)
            return `AND created_at::DATE >= (CURRENT_DATE - INTERVAL '3 months')::DATE AND created_at::DATE < CURRENT_DATE::DATE + INTERVAL '1 day'`;
        return "";
    }
    static async getTeamMemberStats(teamMemberId, includeArchived, userId) {
        const archivedClause = includeArchived
            ? ""
            : `AND t.project_id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = t.project_id AND archived_projects.user_id = '${userId}')`;
        const q = `SELECT JSON_BUILD_OBJECT(

                    'total_tasks', (SELECT COUNT(ta.task_id)
                                    FROM tasks t
                                            LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                                    WHERE ta.team_member_id = $1 ${archivedClause}),

                    'completed', (SELECT COUNT(CASE WHEN is_completed(t.status_id, t.project_id) IS TRUE THEN 1 END)
                                  FROM tasks t
                                          LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                                  WHERE ta.team_member_id = $1 ${archivedClause}),

                    'ongoing', (SELECT COUNT(CASE WHEN is_doing(t.status_id, t.project_id) IS TRUE THEN 1 END)
                                FROM tasks t
                                        LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                                WHERE ta.team_member_id = $1 ${archivedClause}),

                    'overdue', (SELECT COUNT(CASE WHEN is_overdue(t.id) IS TRUE THEN 1 END)
                                  FROM tasks t
                                          LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                                  WHERE ta.team_member_id = $1 ${archivedClause}),

                    'total_logged', (SELECT SUM((SELECT SUM(time_spent) FROM task_work_log WHERE task_id = t.id AND user_id = (SELECT user_id FROM team_member_info_view WHERE team_member_info_view.team_member_id = $1) ${archivedClause})) AS total_logged

                    FROM tasks t
                              LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                    WHERE ta.team_member_id = $1)
                ) AS counts;`;
        const res = await db_1.default.query(q, [teamMemberId]);
        const [data] = res.rows;
        return {
            teams: 0,
            projects: 0,
            completed: (0, utils_1.int)(data?.counts.completed),
            ongoing: (0, utils_1.int)(data?.counts.ongoing),
            overdue: (0, utils_1.int)(data?.counts.overdue),
            total_tasks: (0, utils_1.int)(data?.counts.total_tasks),
            total_logged: (0, utils_1.formatDuration)(moment_1.default.duration(data?.counts.total_logged, "seconds")),
        };
    }
    static async getMemberStats(teamMemberId, key, dateRange, includeArchived, userId) {
        const archivedClause = includeArchived
            ? ""
            : `AND t.project_id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = t.project_id AND archived_projects.user_id = '${userId}')`;
        const durationFilter = this.memberTasksDurationFilter(key, dateRange);
        const workLogDurationFilter = this.taskWorklogDurationFilter(key, dateRange);
        const assignClause = this.memberAssignDurationFilter(key, dateRange);
        const completedDurationClasue = this.completedDurationFilter(key, dateRange);
        const overdueClauseByDate = this.overdueTasksByDate(key, dateRange, archivedClause);
        const q = `SELECT JSON_BUILD_OBJECT(

                    'total_tasks', (SELECT COUNT(ta.task_id)
                                    FROM tasks t
                                            LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                                    WHERE ta.team_member_id = $1 ${durationFilter} ${archivedClause}),

                    'assigned', (SELECT COUNT(ta.task_id)
                                  FROM tasks t
                                          LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                                  WHERE ta.team_member_id = $1 ${assignClause} ${archivedClause}),

                    'completed', (SELECT COUNT(CASE WHEN is_completed(t.status_id, t.project_id) IS TRUE THEN 1 END)
                                  FROM tasks t
                                          LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                                  WHERE ta.team_member_id = $1 ${completedDurationClasue} ${archivedClause}),

                    'ongoing', (SELECT COUNT(CASE WHEN is_doing(t.status_id, t.project_id) IS TRUE THEN 1 END)
                                FROM tasks t
                                        LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                                WHERE ta.team_member_id = $1 ${archivedClause}),

                    'overdue', ${overdueClauseByDate},

                    'total_logged', (SELECT SUM((SELECT SUM(time_spent) FROM task_work_log WHERE task_id = t.id AND user_id = (SELECT user_id FROM team_member_info_view WHERE team_member_info_view.team_member_id = $1) ${workLogDurationFilter} ${archivedClause})) AS total_logged

                    FROM tasks t
                              LEFT JOIN tasks_assignees ta ON t.id = ta.task_id
                    WHERE ta.team_member_id = $1)
                ) AS counts;`;
        const res = await db_1.default.query(q, [teamMemberId]);
        const [data] = res.rows;
        return {
            teams: 0,
            projects: 0,
            assigned: (0, utils_1.int)(data?.counts.assigned),
            completed: (0, utils_1.int)(data?.counts.completed),
            ongoing: (0, utils_1.int)(data?.counts.ongoing),
            overdue: (0, utils_1.int)(data?.counts.overdue),
            total_tasks: (0, utils_1.int)(data?.counts.total_tasks),
            total_logged: (0, utils_1.formatDuration)(moment_1.default.duration(data?.counts.total_logged, "seconds")),
        };
    }
    static async getTasksByProjectOfTeamMemberOverview(teamMemberId, includeArchived, userId) {
        const archivedClause = includeArchived
            ? ""
            : `AND p.id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = p.id AND archived_projects.user_id = '${userId}')`;
        const q = `
      SELECT p.id,
            p.color_code AS color,
            p.name AS label,
            COUNT(t.id) AS count
        FROM projects p
              JOIN tasks t ON p.id = t.project_id
              JOIN tasks_assignees ta ON t.id = ta.task_id AND ta.team_member_id = $1
              JOIN project_members pm ON p.id = pm.project_id AND pm.team_member_id = $1
        WHERE (is_doing(t.status_id, t.project_id)
        OR is_todo(t.status_id, t.project_id)
        OR is_completed(t.status_id, t.project_id)) ${archivedClause}
        GROUP BY p.id, p.name;
    `;
        const result = await db_1.default.query(q, [teamMemberId]);
        const chart = [];
        const total = result.rows.reduce((accumulator, current) => accumulator + (0, utils_1.int)(current.count), 0);
        for (const project of result.rows) {
            project.count = (0, utils_1.int)(project.count);
            chart.push(this.createChartObject(project.label, project.color, project.count));
        }
        return { chart, total, data: result.rows };
    }
    static async getTasksByProjectOfTeamMember(teamMemberId, key, dateRange, includeArchived, userId) {
        const archivedClause = includeArchived
            ? ""
            : `AND p.id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = p.id AND archived_projects.user_id = '${userId}')`;
        const durationFilter = this.memberTasksDurationFilter(key, dateRange);
        const activityLogDateFilter = this.getActivityLogsCreationClause(key, dateRange);
        const completedDatebetweenClause = this.getCompletedBetweenClause(key, dateRange);
        const q = `
      SELECT p.id,
            p.color_code AS color,
            p.name AS label,
            COUNT(t.id) AS count
        FROM projects p
              JOIN tasks t ON p.id = t.project_id
              JOIN tasks_assignees ta ON t.id = ta.task_id AND ta.team_member_id = $1
              JOIN project_members pm ON p.id = pm.project_id AND pm.team_member_id = $1
        WHERE (is_doing(
                    (SELECT new_value
                    FROM task_activity_logs tl
                    WHERE tl.task_id = t.id
                      AND tl.attribute_type = 'status'
                      ${activityLogDateFilter}
                    ORDER BY tl.created_at DESC
                    LIMIT 1)::UUID, t.project_id)
        OR is_todo(
                    (SELECT new_value
                    FROM task_activity_logs tl
                    WHERE tl.task_id = t.id
                      AND tl.attribute_type = 'status'
                      ${activityLogDateFilter}
                    ORDER BY tl.created_at DESC
                    LIMIT 1)::UUID, t.project_id)
        OR ${completedDatebetweenClause}) ${archivedClause}
        GROUP BY p.id, p.name;
    `;
        const result = await db_1.default.query(q, [teamMemberId]);
        const chart = [];
        const total = result.rows.reduce((accumulator, current) => accumulator + (0, utils_1.int)(current.count), 0);
        for (const project of result.rows) {
            project.count = (0, utils_1.int)(project.count);
            chart.push(this.createChartObject(project.label, project.color, project.count));
        }
        return { chart, total, data: result.rows };
    }
    static async getTasksByPriorityOfTeamMemberOverview(teamMemberId, includeArchived, userId) {
        const archivedClause = includeArchived
            ? ""
            : `AND t.project_id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = t.project_id AND archived_projects.user_id = '${userId}')`;
        const q = `
      SELECT COUNT(CASE WHEN tp.value = 0 THEN 1 END) AS low,
             COUNT(CASE WHEN tp.value = 1 THEN 1 END) AS medium,
             COUNT(CASE WHEN tp.value = 2 THEN 1 END) AS high
      FROM tasks t
             LEFT JOIN task_priorities tp ON t.priority_id = tp.id
             JOIN tasks_assignees ta ON t.id = ta.task_id
      WHERE ta.team_member_id = $1 AND (is_doing(t.status_id, t.project_id)
                                    OR is_todo(t.status_id, t.project_id)
                                    OR is_completed(t.status_id, t.project_id)) ${archivedClause};
    `;
        const result = await db_1.default.query(q, [teamMemberId]);
        const [d] = result.rows;
        const total = (0, utils_1.int)(d.low) + (0, utils_1.int)(d.medium) + (0, utils_1.int)(d.high);
        const chart = [
            this.createChartObject("Low", constants_1.TASK_PRIORITY_LOW_COLOR, d.low),
            this.createChartObject("Medium", constants_1.TASK_PRIORITY_MEDIUM_COLOR, d.medium),
            this.createChartObject("High", constants_1.TASK_PRIORITY_HIGH_COLOR, d.high),
        ];
        const data = [
            { label: "Low", color: constants_1.TASK_PRIORITY_LOW_COLOR, count: d.low },
            { label: "Medium", color: constants_1.TASK_PRIORITY_MEDIUM_COLOR, count: d.medium },
            { label: "High", color: constants_1.TASK_PRIORITY_HIGH_COLOR, count: d.high },
        ];
        return { chart, total, data };
    }
    static async getTasksByPriorityOfTeamMember(teamMemberId, key, dateRange, includeArchived, userId) {
        const archivedClause = includeArchived
            ? ""
            : `AND t.project_id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = t.project_id AND archived_projects.user_id = '${userId}')`;
        const durationFilter = this.memberTasksDurationFilter(key, dateRange);
        const activityLogDateFilter = this.getActivityLogsCreationClause(key, dateRange);
        const completedDatebetweenClause = this.getCompletedBetweenClause(key, dateRange);
        const q = `
      SELECT COUNT(CASE WHEN tp.value = 0 THEN 1 END) AS low,
             COUNT(CASE WHEN tp.value = 1 THEN 1 END) AS medium,
             COUNT(CASE WHEN tp.value = 2 THEN 1 END) AS high
      FROM tasks t
             LEFT JOIN task_priorities tp ON t.priority_id = tp.id
             JOIN tasks_assignees ta ON t.id = ta.task_id
      WHERE ta.team_member_id = $1 AND (is_doing(
                                            (SELECT new_value
                                            FROM task_activity_logs tl
                                            WHERE tl.task_id = t.id
                                              AND tl.attribute_type = 'status'
                                              ${activityLogDateFilter}
                                            ORDER BY tl.created_at DESC
                                            LIMIT 1)::UUID, t.project_id)
                                    OR is_todo(
                                            (SELECT new_value
                                            FROM task_activity_logs tl
                                            WHERE tl.task_id = t.id
                                              AND tl.attribute_type = 'status'
                                              ${activityLogDateFilter}
                                            ORDER BY tl.created_at DESC
                                            LIMIT 1)::UUID, t.project_id)
                                    OR ${completedDatebetweenClause}) ${archivedClause};
    `;
        const result = await db_1.default.query(q, [teamMemberId]);
        const [d] = result.rows;
        const total = (0, utils_1.int)(d.low) + (0, utils_1.int)(d.medium) + (0, utils_1.int)(d.high);
        const chart = [
            this.createChartObject("Low", constants_1.TASK_PRIORITY_LOW_COLOR, d.low),
            this.createChartObject("Medium", constants_1.TASK_PRIORITY_MEDIUM_COLOR, d.medium),
            this.createChartObject("High", constants_1.TASK_PRIORITY_HIGH_COLOR, d.high),
        ];
        const data = [
            { label: "Low", color: constants_1.TASK_PRIORITY_LOW_COLOR, count: d.low },
            { label: "Medium", color: constants_1.TASK_PRIORITY_MEDIUM_COLOR, count: d.medium },
            { label: "High", color: constants_1.TASK_PRIORITY_HIGH_COLOR, count: d.high },
        ];
        return { chart, total, data };
    }
    static getActivityLogsCreationClause(key, dateRange) {
        if (dateRange.length === 2) {
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            return `AND tl.created_at::DATE <= '${end}'::DATE`;
        }
        return `AND tl.created_at::DATE <= NOW()::DATE`;
    }
    static getCompletedBetweenClause(key, dateRange) {
        if (dateRange.length === 2) {
            const start = (0, moment_1.default)(dateRange[0]).format("YYYY-MM-DD");
            const end = (0, moment_1.default)(dateRange[1]).format("YYYY-MM-DD");
            return `is_completed_between(t.id::UUID, '${start}'::DATE, '${end}'::DATE)`;
        }
        return `is_completed(t.status_id::UUID, t.project_id::UUID)`;
    }
    static async getTasksByStatusOfTeamMemberOverview(teamMemberId, includeArchived, userId) {
        const archivedClause = includeArchived
            ? ""
            : `AND t.project_id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = t.project_id AND archived_projects.user_id = '${userId}')`;
        const q = `
      SELECT COUNT(ta.task_id) AS total,
             COUNT(CASE WHEN is_todo(t.status_id, t.project_id) IS TRUE THEN 1 END) AS todo,
             COUNT(CASE WHEN is_doing(t.status_id, t.project_id) IS TRUE THEN 1 END) AS doing,
             COUNT(CASE WHEN is_completed(t.status_id, t.project_id) IS TRUE THEN 1 END) AS done
      FROM tasks t
             JOIN tasks_assignees ta ON t.id = ta.task_id
      WHERE ta.team_member_id = $1 ${archivedClause};
    `;
        const res = await db_1.default.query(q, [teamMemberId]);
        const [d] = res.rows;
        const total = (0, utils_1.int)(d.total);
        const chart = [
            this.createChartObject("Todo", constants_1.TASK_STATUS_TODO_COLOR, d.todo),
            this.createChartObject("Doing", constants_1.TASK_STATUS_DOING_COLOR, d.doing),
            this.createChartObject("Done", constants_1.TASK_STATUS_DONE_COLOR, d.done),
        ];
        const data = [
            { label: "Todo", color: constants_1.TASK_STATUS_TODO_COLOR, count: d.todo },
            { label: "Doing", color: constants_1.TASK_STATUS_DOING_COLOR, count: d.doing },
            { label: "Done", color: constants_1.TASK_STATUS_DONE_COLOR, count: d.done },
        ];
        return { chart, total, data };
    }
    static async getTasksByStatusOfTeamMember(teamMemberId, key, dateRange, includeArchived, userId) {
        const archivedClause = includeArchived
            ? ""
            : `AND t.project_id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = t.project_id AND archived_projects.user_id = '${userId}')`;
        const durationFilter = this.memberTasksDurationFilter(key, dateRange);
        const completedBetweenFilter = this.getCompletedBetweenClause(key, dateRange);
        const activityLogCreationFilter = this.getActivityLogsCreationClause(key, dateRange);
        const q = `
      SELECT COUNT(ta.task_id) AS total,
             COUNT(CASE WHEN is_todo((SELECT new_value FROM task_activity_logs tl WHERE tl.task_id = t.id AND tl.attribute_type = 'status' ${activityLogCreationFilter} ORDER BY tl.created_at DESC LIMIT 1)::UUID, t.project_id) IS TRUE THEN 1 END) AS todo,
             COUNT(CASE WHEN is_doing((SELECT new_value FROM task_activity_logs tl WHERE tl.task_id = t.id AND tl.attribute_type = 'status' ${activityLogCreationFilter} ORDER BY tl.created_at DESC LIMIT 1)::UUID, t.project_id) IS TRUE THEN 1 END) AS doing,
             COUNT(CASE WHEN ${completedBetweenFilter} IS TRUE THEN 1 END) AS done
      FROM tasks t
             JOIN tasks_assignees ta ON t.id = ta.task_id
      WHERE ta.team_member_id = $1 ${archivedClause};
    `;
        const res = await db_1.default.query(q, [teamMemberId]);
        const [d] = res.rows;
        const total = (0, utils_1.int)(d.todo) + (0, utils_1.int)(d.doing) + (0, utils_1.int)(d.done);
        const chart = [
            this.createChartObject("Todo", constants_1.TASK_STATUS_TODO_COLOR, d.todo),
            this.createChartObject("Doing", constants_1.TASK_STATUS_DOING_COLOR, d.doing),
            this.createChartObject("Done", constants_1.TASK_STATUS_DONE_COLOR, d.done),
        ];
        const data = [
            { label: "Todo", color: constants_1.TASK_STATUS_TODO_COLOR, count: d.todo },
            { label: "Doing", color: constants_1.TASK_STATUS_DOING_COLOR, count: d.doing },
            { label: "Done", color: constants_1.TASK_STATUS_DONE_COLOR, count: d.done },
        ];
        return { chart, total, data };
    }
    static async getProjectsByStatus(teamId, archivedClause = "") {
        const q = `WITH ProjectCounts AS (
          SELECT
            COUNT(*) AS all_projects,
            SUM(CASE WHEN status_id = (SELECT id FROM sys_project_statuses WHERE name = 'Cancelled') THEN 1 ELSE 0 END) AS cancelled,
            SUM(CASE WHEN status_id = (SELECT id FROM sys_project_statuses WHERE name = 'Blocked') THEN 1 ELSE 0 END) AS blocked,
            SUM(CASE WHEN status_id = (SELECT id FROM sys_project_statuses WHERE name = 'On Hold') THEN 1 ELSE 0 END) AS on_hold,
            SUM(CASE WHEN status_id = (SELECT id FROM sys_project_statuses WHERE name = 'Proposed') THEN 1 ELSE 0 END) AS proposed,
            SUM(CASE WHEN status_id = (SELECT id FROM sys_project_statuses WHERE name = 'In Planning') THEN 1 ELSE 0 END) AS in_planning,
            SUM(CASE WHEN status_id = (SELECT id FROM sys_project_statuses WHERE name = 'In Progress') THEN 1 ELSE 0 END) AS in_progress,
            SUM(CASE WHEN status_id = (SELECT id FROM sys_project_statuses WHERE name = 'Completed') THEN 1 ELSE 0 END) AS completed
          FROM projects
          WHERE team_id = $1 ${archivedClause})

        SELECT JSON_BUILD_OBJECT(
          'all_projects', all_projects,
          'cancelled', cancelled,
          'blocked', blocked,
          'on_hold', on_hold,
          'proposed', proposed,
          'in_planning', in_planning,
          'in_progress', in_progress,
          'completed', completed
          ) AS counts
        FROM ProjectCounts;`;
        const res = await db_1.default.query(q, [teamId]);
        const [data] = res.rows;
        const all = (0, utils_1.int)(data?.counts.all_projects);
        const cancelled = (0, utils_1.int)(data?.counts.cancelled);
        const blocked = (0, utils_1.int)(data?.counts.blocked);
        const on_hold = (0, utils_1.int)(data?.counts.on_hold);
        const proposed = (0, utils_1.int)(data?.counts.proposed);
        const in_planning = (0, utils_1.int)(data?.counts.in_planning);
        const in_progress = (0, utils_1.int)(data?.counts.in_progress);
        const completed = (0, utils_1.int)(data?.counts.completed);
        const chart = [];
        return {
            all,
            cancelled,
            blocked,
            on_hold,
            proposed,
            in_planning,
            in_progress,
            completed,
            chart
        };
    }
    static async getProjectsByCategory(teamId, archivedClause = "") {
        const q = `
      SELECT
        pc.id,
        pc.color_code AS color,
        pc.name AS label,
        COUNT(pc.id) AS count
      FROM project_categories pc
        JOIN projects ON pc.id = projects.category_id
        WHERE projects.team_id = $1 ${archivedClause}
      GROUP BY pc.id, pc.name;
    `;
        const result = await db_1.default.query(q, [teamId]);
        const chart = [];
        const total = result.rows.reduce((accumulator, current) => accumulator + (0, utils_1.int)(current.count), 0);
        for (const category of result.rows) {
            category.count = (0, utils_1.int)(category.count);
            chart.push({
                name: category.label,
                color: category.color,
                y: category.count
            });
        }
        return { chart, total, data: result.rows };
    }
    static async getProjectsByHealth(teamId, archivedClause = "") {
        const q = `
                SELECT JSON_BUILD_OBJECT(
                  'needs_attention', (SELECT COUNT(*)
                          FROM projects
                          WHERE team_id = $1 ${archivedClause}
                            AND health_id = (SELECT id FROM sys_project_healths WHERE name = 'Needs Attention')),
                  'at_risk', (SELECT COUNT(*)
                          FROM projects
                          WHERE team_id = $1 ${archivedClause}
                            AND health_id = (SELECT id FROM sys_project_healths WHERE name = 'At Risk')),
                  'good', (SELECT COUNT(*)
                          FROM projects
                          WHERE team_id = $1 ${archivedClause}
                            AND health_id = (SELECT id FROM sys_project_healths WHERE name = 'Good')),
                  'not_set', (SELECT COUNT(*)
                          FROM projects
                          WHERE team_id = $1 ${archivedClause}
                            AND health_id = (SELECT id FROM sys_project_healths WHERE name = 'Not Set'))
                  ) AS counts;
    `;
        const res = await db_1.default.query(q, [teamId]);
        const [data] = res.rows;
        const not_set = (0, utils_1.int)(data?.counts.not_set);
        const needs_attention = (0, utils_1.int)(data?.counts.needs_attention);
        const at_risk = (0, utils_1.int)(data?.counts.at_risk);
        const good = (0, utils_1.int)(data?.counts.good);
        const chart = [];
        return {
            not_set,
            needs_attention,
            at_risk,
            good,
            chart
        };
    }
    static createByProjectStatusChartData(body) {
        body.chart = [
            this.createChartObject("Cancelled", "#f37070", body.cancelled),
            this.createChartObject("Blocked", "#cbc8a1", body.blocked),
            this.createChartObject("On Hold", "#cbc8a1", body.on_hold),
            this.createChartObject("Proposed", "#cbc8a1", body.proposed),
            this.createChartObject("In Planning", "#cbc8a1", body.in_planning),
            this.createChartObject("In Progress", "#80ca79", body.in_progress),
            this.createChartObject("Completed", "#80ca79", body.completed)
        ];
    }
    static createByProjectHealthChartData(body) {
        body.chart = [
            this.createChartObject("Not Set", "#a9a9a9", body.not_set),
            this.createChartObject("Needs Attention", "#f37070", body.needs_attention),
            this.createChartObject("At Risk", "#fbc84c", body.at_risk),
            this.createChartObject("Good", "#75c997", body.good)
        ];
    }
}
exports.default = ReportingOverviewBase;
