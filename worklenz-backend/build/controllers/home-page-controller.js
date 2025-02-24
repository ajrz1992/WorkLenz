"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moment_timezone_1 = tslib_1.__importDefault(require("moment-timezone"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const moment_timezone_2 = tslib_1.__importDefault(require("moment-timezone"));
class HomePageController extends worklenz_controller_base_1.default {
    static GROUP_BY_ASSIGNED_TO_ME = "0";
    static GROUP_BY_ASSIGN_BY_ME = "1";
    static ALL_TAB = "All";
    static TODAY_TAB = "Today";
    static UPCOMING_TAB = "Upcoming";
    static OVERDUE_TAB = "Overdue";
    static NO_DUE_DATE_TAB = "NoDueDate";
    static isValidGroup(groupBy) {
        return groupBy === this.GROUP_BY_ASSIGNED_TO_ME
            || groupBy === this.GROUP_BY_ASSIGN_BY_ME;
    }
    static isValidView(currentView) {
        return currentView === this.ALL_TAB
            || currentView === this.TODAY_TAB
            || currentView === this.UPCOMING_TAB
            || currentView === this.OVERDUE_TAB
            || currentView === this.NO_DUE_DATE_TAB;
    }
    static async createPersonalTask(req, res) {
        const q = `INSERT INTO personal_todo_list (name, color_code, user_id, index)
               VALUES ($1, $2, $3, ((SELECT index FROM personal_todo_list ORDER BY index DESC LIMIT 1) + 1))
               RETURNING id, name`;
        const result = await db_1.default.query(q, [req.body.name, req.body.color_code, req.user?.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static getTasksByGroupClosure(groupBy) {
        switch (groupBy) {
            case this.GROUP_BY_ASSIGN_BY_ME:
                return `AND t.id IN (
                    SELECT task_id
                    FROM tasks_assignees
                    WHERE assigned_by = $2 AND team_id = $1)`;
            case this.GROUP_BY_ASSIGNED_TO_ME:
            default:
                return `AND t.id IN (
                    SELECT task_id
                    FROM tasks_assignees
                    WHERE team_member_id = (SELECT id FROM team_members WHERE user_id = $2 AND team_id = $1))`;
        }
    }
    static getTasksByTabClosure(text) {
        switch (text) {
            case this.TODAY_TAB:
                return `AND t.end_date::DATE = CURRENT_DATE::DATE`;
            case this.UPCOMING_TAB:
                return `AND t.end_date::DATE > CURRENT_DATE::DATE`;
            case this.OVERDUE_TAB:
                return `AND t.end_date::DATE < CURRENT_DATE::DATE`;
            case this.NO_DUE_DATE_TAB:
                return `AND t.end_date IS NULL`;
            case this.ALL_TAB:
            default:
                return "";
        }
    }
    static async getTasksResult(groupByClosure, currentTabClosure, teamId, userId) {
        const q = `
      SELECT t.id,
             t.name,
             t.project_id,
             t.parent_task_id,
             t.parent_task_id IS NOT NULL AS is_sub_task,
             (SELECT name FROM tasks WHERE id = t.parent_task_id) AS parent_task_name,
             t.status_id,
             t.start_date,
             t.end_date,
             t.created_at,
             p.team_id,
             p.name AS project_name,
             p.color_code AS project_color,
             (SELECT id FROM task_statuses WHERE id = t.status_id) AS status,
             (SELECT color_code
              FROM sys_task_status_categories
              WHERE id = (SELECT category_id FROM task_statuses WHERE id = t.status_id)) AS status_color,
             TRUE AS is_task,
             FALSE AS done,
             t.updated_at,
             (SELECT ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(r)))
              FROM (SELECT task_statuses.id AS id,
                           task_statuses.name AS name,
                           (SELECT color_code
                            FROM sys_task_status_categories
                            WHERE id = task_statuses.category_id)
                    FROM task_statuses
                    WHERE task_statuses.project_id = t.project_id) r) AS project_statuses
      FROM tasks t
             JOIN projects p ON t.project_id = p.id
      WHERE t.archived IS FALSE
        AND t.status_id NOT IN (SELECT id
                                FROM task_statuses
                                WHERE category_id NOT IN (SELECT id
                                                          FROM sys_task_status_categories
                                                          WHERE is_done IS FALSE))
        ${groupByClosure}
      ORDER BY t.end_date ASC`;
        const result = await db_1.default.query(q, [teamId, userId]);
        return result.rows;
    }
    static async getCountsResult(groupByClosure, teamId, userId) {
        const q = `SELECT COUNT(*) AS total,
                      COUNT(CASE WHEN t.end_date::DATE = CURRENT_DATE::DATE THEN 1 END) AS today,
                      COUNT(CASE WHEN t.end_date::DATE > CURRENT_DATE::DATE THEN 1 END) AS upcoming,
                      COUNT(CASE WHEN t.end_date::DATE < CURRENT_DATE::DATE THEN 1 END) AS overdue,
                      COUNT(CASE WHEN t.end_date::DATE IS NULL THEN 1 END) AS no_due_date
               FROM tasks t
                      JOIN projects p ON t.project_id = p.id
               WHERE t.archived IS FALSE
                 AND t.status_id NOT IN (SELECT id
                                         FROM task_statuses
                                         WHERE category_id NOT IN (SELECT id
                                                                   FROM sys_task_status_categories
                                                                   WHERE is_done IS FALSE))
                 ${groupByClosure}`;
        const result = await db_1.default.query(q, [teamId, userId]);
        const [row] = result.rows;
        return row;
    }
    static async getTasks(req, res) {
        const teamId = req.user?.team_id;
        const userId = req.user?.id;
        const timeZone = req.query.time_zone;
        const today = new Date();
        const currentGroup = this.isValidGroup(req.query.group_by) ? req.query.group_by : this.GROUP_BY_ASSIGNED_TO_ME;
        const currentTab = this.isValidView(req.query.current_tab) ? req.query.current_tab : this.ALL_TAB;
        const groupByClosure = this.getTasksByGroupClosure(currentGroup);
        let currentTabClosure = this.getTasksByTabClosure(currentTab);
        const isCalendarView = req.query.is_calendar_view;
        let result = await this.getTasksResult(groupByClosure, currentTabClosure, teamId, userId);
        const counts = await this.getCountsByGroup(result, timeZone, today);
        if (isCalendarView == "true") {
            currentTabClosure = `AND t.end_date::DATE = '${req.query.selected_date}'`;
            result = await this.groupBySingleDate(result, timeZone, req.query.selected_date);
        }
        else {
            result = await this.groupByDate(currentTab, result, timeZone, today);
        }
        const data = {
            tasks: result,
            total: counts.total,
            today: counts.today,
            upcoming: counts.upcoming,
            overdue: counts.overdue,
            no_due_date: counts.no_due_date,
        };
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async groupByDate(currentTab, tasks, timeZone, today) {
        const formatToday = (0, moment_timezone_1.default)(today).format("YYYY-MM-DD");
        const tasksReturn = [];
        if (currentTab === this.ALL_TAB) {
            for (const task of tasks) {
                tasksReturn.push(task);
            }
        }
        if (currentTab === this.NO_DUE_DATE_TAB) {
            for (const task of tasks) {
                if (!task.end_date) {
                    tasksReturn.push(task);
                }
            }
        }
        if (currentTab === this.TODAY_TAB) {
            for (const task of tasks) {
                if (task.end_date) {
                    const taskEndDate = moment_timezone_2.default.tz(task.end_date, `${timeZone}`).format("YYYY-MM-DD");
                    if ((0, moment_timezone_1.default)(taskEndDate).isSame(formatToday)) {
                        tasksReturn.push(task);
                    }
                }
            }
        }
        if (currentTab === this.UPCOMING_TAB) {
            for (const task of tasks) {
                if (task.end_date) {
                    const taskEndDate = moment_timezone_2.default.tz(task.end_date, `${timeZone}`).format("YYYY-MM-DD");
                    if ((0, moment_timezone_1.default)(taskEndDate).isAfter(formatToday)) {
                        tasksReturn.push(task);
                    }
                }
            }
        }
        if (currentTab === this.OVERDUE_TAB) {
            for (const task of tasks) {
                if (task.end_date) {
                    const taskEndDate = moment_timezone_2.default.tz(task.end_date, `${timeZone}`).format("YYYY-MM-DD");
                    if ((0, moment_timezone_1.default)(taskEndDate).isBefore(formatToday)) {
                        tasksReturn.push(task);
                    }
                }
            }
        }
        return tasksReturn;
    }
    static async groupBySingleDate(tasks, timeZone, selectedDate) {
        const formatSelectedDate = (0, moment_timezone_1.default)(selectedDate).format("YYYY-MM-DD");
        const tasksReturn = [];
        for (const task of tasks) {
            if (task.end_date) {
                const taskEndDate = moment_timezone_2.default.tz(task.end_date, `${timeZone}`).format("YYYY-MM-DD");
                if ((0, moment_timezone_1.default)(taskEndDate).isSame(formatSelectedDate)) {
                    tasksReturn.push(task);
                }
            }
        }
        return tasksReturn;
    }
    static async getCountsByGroup(tasks, timeZone, today_) {
        let no_due_date = 0;
        let today = 0;
        let upcoming = 0;
        let overdue = 0;
        const total = tasks.length;
        const formatToday = (0, moment_timezone_1.default)(today_).format("YYYY-MM-DD");
        for (const task of tasks) {
            if (!task.end_date) {
                no_due_date = no_due_date + 1;
            }
            if (task.end_date) {
                const taskEndDate = moment_timezone_2.default.tz(task.end_date, `${timeZone}`).format("YYYY-MM-DD");
                if ((0, moment_timezone_1.default)(taskEndDate).isSame(formatToday)) {
                    today = today + 1;
                }
                if ((0, moment_timezone_1.default)(taskEndDate).isAfter(formatToday)) {
                    upcoming = upcoming + 1;
                }
                if ((0, moment_timezone_1.default)(taskEndDate).isBefore(formatToday)) {
                    overdue = overdue + 1;
                }
            }
        }
        return {
            total,
            today,
            upcoming,
            overdue,
            no_due_date
        };
    }
    static async getPersonalTasks(req, res) {
        const user_id = req.user?.id;
        const q = `SELECT ptl.id,
                      ptl.name,
                      ptl.created_at,
                      FALSE AS is_task,
                      ptl.done,
                      ptl.updated_at
               FROM personal_todo_list ptl
               WHERE ptl.user_id = $1
                 AND done IS FALSE
               ORDER BY ptl.updated_at DESC`;
        const results = await db_1.default.query(q, [user_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, results.rows));
    }
    static async getProjects(req, res) {
        const team_id = req.user?.team_id;
        const user_id = req.user?.id;
        const current_view = req.query.view;
        const isFavorites = current_view === "1" ? ` AND EXISTS(SELECT user_id FROM favorite_projects WHERE user_id = $2 AND project_id = projects.id)` : "";
        const isArchived = req.query.filter === "2"
            ? ` AND EXISTS(SELECT user_id FROM archived_projects WHERE user_id = $2 AND project_id = projects.id)`
            : ` AND NOT EXISTS(SELECT user_id FROM archived_projects WHERE user_id = $2 AND project_id = projects.id)`;
        const q = `SELECT id,
                      name,
                      EXISTS(SELECT user_id
                             FROM favorite_projects
                             WHERE user_id = $2
                               AND project_id = projects.id) AS favorite,
                      EXISTS(SELECT user_id
                             FROM archived_projects
                             WHERE user_id = $2
                               AND project_id = projects.id) AS archived,
                      color_code,
                      (SELECT COUNT(*)
                       FROM tasks
                       WHERE archived IS FALSE
                         AND project_id = projects.id) AS all_tasks_count,
                      (SELECT COUNT(*)
                       FROM tasks
                       WHERE archived IS FALSE
                         AND project_id = projects.id
                         AND status_id IN (SELECT id
                                           FROM task_statuses
                                           WHERE project_id = projects.id
                                             AND category_id IN
                                                 (SELECT id FROM sys_task_status_categories WHERE is_done IS TRUE))) AS completed_tasks_count,
                      (SELECT COUNT(*)
                       FROM project_members
                       WHERE project_id = projects.id) AS members_count,
                      (SELECT get_project_members(projects.id)) AS names,
                      (SELECT CASE
                                WHEN ((SELECT MAX(updated_at)
                                       FROM tasks
                                       WHERE archived IS FALSE
                                         AND project_id = projects.id) >
                                      updated_at)
                                  THEN (SELECT MAX(updated_at)
                                        FROM tasks
                                        WHERE archived IS FALSE
                                          AND project_id = projects.id)
                                ELSE updated_at END) AS updated_at
               FROM projects
               WHERE team_id = $1 ${isArchived} ${isFavorites} AND is_member_of_project(projects.id , $2
                   , $1)
               ORDER BY updated_at DESC`;
        const result = await db_1.default.query(q, [team_id, user_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getProjectsByTeam(req, res) {
        const team_id = req.user?.team_id;
        const user_id = req.user?.id;
        const q = `
      SELECT id, name, color_code
      FROM projects
      WHERE team_id = $1
        AND is_member_of_project(projects.id, $2, $1)
    `;
        const result = await db_1.default.query(q, [team_id, user_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async updatePersonalTask(req, res) {
        const q = `
      UPDATE personal_todo_list
      SET done = TRUE
      WHERE id = $1
      RETURNING id
    `;
        await db_1.default.query(q, [req.body.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, req.body.id));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], HomePageController, "createPersonalTask", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], HomePageController, "getTasks", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], HomePageController, "getPersonalTasks", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], HomePageController, "getProjects", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], HomePageController, "getProjectsByTeam", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], HomePageController, "updatePersonalTask", null);
exports.default = HomePageController;
