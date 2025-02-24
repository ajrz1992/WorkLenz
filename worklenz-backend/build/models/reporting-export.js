"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportingExportModel = void 0;
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const reporting_overview_base_1 = tslib_1.__importDefault(require("../controllers/reporting/overview/reporting-overview-base"));
const utils_1 = require("../shared/utils");
class ReportingExportModel extends reporting_overview_base_1.default {
    static async getMembersByTeam(teamId) {
        const q = `
      SELECT team_member_id AS id,
             name,
             email,
             (SELECT COUNT(*)
              FROM project_members
              WHERE project_members.team_member_id = team_member_info_view.team_member_id) AS projects,
             (SELECT COUNT(*)
              FROM tasks_assignees
              WHERE tasks_assignees.team_member_id = team_member_info_view.team_member_id) AS tasks,
             (SELECT COUNT(*)
              FROM tasks_assignees
              WHERE tasks_assignees.team_member_id = team_member_info_view.team_member_id
                AND is_overdue(task_id) IS TRUE) AS overdue,
             (SELECT COUNT(*)
              FROM tasks_assignees
              WHERE tasks_assignees.team_member_id = team_member_info_view.team_member_id
                AND task_id IN (SELECT id
                                FROM tasks
                                WHERE is_completed(tasks.status_id, tasks.project_id))) AS completed,
             (SELECT COUNT(*)
              FROM tasks_assignees
              WHERE tasks_assignees.team_member_id = team_member_info_view.team_member_id
                AND task_id IN (SELECT id
                                FROM tasks
                                WHERE is_doing(tasks.status_id, tasks.project_id))) AS ongoing
      FROM team_member_info_view
      WHERE team_id = $1
      ORDER BY name;
    `;
        const result = await db_1.default.query(q, [teamId]);
        return result.rows;
    }
    static async getProjectMembers(projectId) {
        const q = `
              SELECT pm.id,
                  pm.team_member_id,
                  (SELECT name FROM team_member_info_view WHERE team_member_id = pm.team_member_id) AS name,
                  COUNT(ta.task_id) AS tasks_count,
                  COUNT(CASE WHEN is_completed(t.status_id, t.project_id) IS TRUE THEN 1 END) AS completed,
                  COUNT(CASE WHEN is_completed(t.status_id, t.project_id) IS FALSE THEN 1 END) AS incompleted,
                  COUNT(CASE WHEN is_overdue(t.id) THEN 1 END) AS overdue,
                  (SELECT SUM(time_spent)
                    FROM task_work_log twl
                    WHERE user_id =
                          (SELECT user_id FROM team_member_info_view WHERE team_member_id = pm.team_member_id)
                      AND twl.task_id IN (SELECT id FROM tasks WHERE project_id = pm.project_id)) AS time_logged
              FROM project_members pm
                  LEFT JOIN tasks_assignees ta
                            ON pm.id = ta.project_member_id AND ta.team_member_id = pm.team_member_id
                  LEFT JOIN tasks t ON ta.task_id = t.id
              WHERE pm.project_id = $1
              GROUP BY pm.id
              ORDER BY name
    `;
        const result = await db_1.default.query(q, [projectId]);
        const total = await this.getTotalTasksCount(projectId);
        for (const member of result.rows) {
            member.tasks_count = (0, utils_1.int)(member.tasks_count);
            member.completed = (0, utils_1.int)(member.completed);
            member.incompleted = (0, utils_1.int)(member.incompleted);
            member.overdue = (0, utils_1.int)(member.overdue);
            member.contribution = this.getPercentage(member.tasks_count, total);
            member.progress = this.getPercentage(member.completed, member.tasks_count);
            member.time_logged = (0, utils_1.formatDuration)(moment_1.default.duration((0, utils_1.int)(member.time_logged) || "0", "seconds"));
        }
        return result.rows;
    }
    static async getMemberTasks(teamMemberId, projectId, onlySingleMember, key, dateRange, includeArchived, userId) {
        const projectFilter = projectId ? ` AND t.project_id = $2` : "";
        let activityLogDurationFilterClause = ``;
        let archivedClause = ``;
        if (onlySingleMember === "true") {
            activityLogDurationFilterClause = this.activityLogDurationFilter(key, dateRange);
            archivedClause = includeArchived ? "" : `AND t.project_id NOT IN (SELECT project_id FROM archived_projects WHERE project_id = t.project_id AND archived_projects.user_id = '${userId}')`;
        }
        const q = `
      WITH work_log AS (SELECT task_id, SUM(time_spent) AS total_time_spent
                  FROM task_work_log
                  GROUP BY task_id)
      SELECT t.id,
          t.name,
          t.project_id,
          t.parent_task_id,
          t.parent_task_id IS NOT NULL AS is_sub_task,
          (SELECT name FROM projects WHERE id = t.project_id) AS project_name,
          (SELECT name
            FROM teams
            WHERE id = (SELECT team_id FROM projects WHERE projects.id = t.project_id)) AS team_name,
          (CASE
                WHEN (CURRENT_DATE::DATE > end_date::DATE AND
                      status_id IN (SELECT id
                                    FROM task_statuses
                                    WHERE project_id = t.project_id
                                      AND category_id IN
                                          (SELECT id FROM sys_task_status_categories WHERE is_done IS FALSE)))
                    THEN CURRENT_DATE::DATE - end_date::DATE
                ELSE 0 END) AS days_overdue,
          tp.name AS priority_name,
          tp.color_code AS priority_color,
          ts.name AS status_name,
          sc.color_code AS status_color,
          t.end_date,
          t.completed_at,

          (total_minutes * 60) AS total_minutes,
          (work_log.total_time_spent - (total_minutes * 60)) AS overlogged_time,

          (SELECT SUM(time_spent)
            FROM task_work_log twl
            WHERE team_member_id = ta.team_member_id
              AND twl.task_id = t.id
              AND twl.task_id IN
                  (SELECT id FROM tasks WHERE tasks.project_id = t.project_id)) AS time_logged
            FROM tasks t
                  JOIN tasks_assignees ta ON t.id = ta.task_id
                  LEFT JOIN work_log ON work_log.task_id = t.id
                  LEFT JOIN task_priorities tp ON t.priority_id = tp.id
                  LEFT JOIN task_statuses ts ON t.status_id = ts.id
                  LEFT JOIN sys_task_status_categories sc ON ts.category_id = sc.id
          WHERE ta.team_member_id = $1 ${projectFilter} ${archivedClause}
          ORDER BY t.end_date DESC;`;
        const params = projectId ? [teamMemberId, projectId] : [teamMemberId];
        const result = await db_1.default.query(q, params);
        for (const project of result.rows) {
            project.project_color = (0, utils_1.getColor)(project.project_name);
            project.estimated_string = (0, utils_1.formatDuration)(moment_1.default.duration(~~(project.total_minutes), "seconds"));
            project.time_spent_string = (0, utils_1.formatDuration)(moment_1.default.duration(~~(project.time_logged), "seconds"));
            project.overlogged_time = (0, utils_1.formatDuration)(moment_1.default.duration(~~(project.overlogged_time), "seconds"));
            project.completed_date = project.completed_at ? project.completed_at : null;
        }
        return result.rows;
    }
}
exports.ReportingExportModel = ReportingExportModel;
