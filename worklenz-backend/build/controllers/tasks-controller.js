"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const server_response_1 = require("../models/server-response");
const constants_1 = require("../shared/constants");
const tasks_controller_utils_1 = require("../shared/tasks-controller-utils");
const utils_1 = require("../shared/utils");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const notifications_service_1 = require("../services/notifications/notifications.service");
const on_quick_task_1 = require("../socket.io/commands/on-quick-task");
const on_quick_assign_or_remove_1 = require("../socket.io/commands/on-quick-assign-or-remove");
const tasks_controller_v2_1 = tslib_1.__importDefault(require("./tasks-controller-v2"));
const io_1 = require("../shared/io");
const events_1 = require("../socket.io/events");
const tasks_controller_base_1 = tslib_1.__importDefault(require("./tasks-controller-base"));
const activity_logs_service_1 = require("../services/activity-logs/activity-logs.service");
class TasksController extends tasks_controller_base_1.default {
    static notifyProjectUpdates(socketId, projectId) {
        io_1.IO.getSocketById(socketId)
            ?.to(projectId)
            .emit(events_1.SocketEvents.PROJECT_UPDATES_AVAILABLE.toString());
    }
    static async create(req, res) {
        const q = `SELECT create_task($1) AS task;`;
        const result = await db_1.default.query(q, [JSON.stringify(req.body)]);
        const [data] = result.rows;
        const userId = req.user?.id;
        for (const member of data?.task.assignees || []) {
            notifications_service_1.NotificationsService.createTaskUpdate("ASSIGN", userId, data.task.id, member.user_id, member.team_id);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data.task));
    }
    static async getGanttTasks(req, res) {
        const q = `SELECT get_gantt_tasks($1) AS gantt_tasks;`;
        const result = await db_1.default.query(q, [req.user?.id ?? null]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data.gantt_tasks));
    }
    static sendAssignmentNotifications(task, userId) {
        const newMembers = task.new_assignees.filter((member1) => {
            return !task.old_assignees.some((member2) => {
                return member1.team_member_id === member2.team_member_id;
            });
        });
        const removedMembers = task.old_assignees.filter((member1) => {
            return !task.new_assignees.some((member2) => {
                return member1.team_member_id === member2.team_member_id;
            });
        });
        for (const member of newMembers) {
            notifications_service_1.NotificationsService.createTaskUpdate("ASSIGN", userId, task.id, member.user_id, member.team_id);
        }
        for (const member of removedMembers) {
            notifications_service_1.NotificationsService.createTaskUpdate("UNASSIGN", userId, task.id, member.user_id, member.team_id);
        }
    }
    static async notifyStatusChange(userId, taskId, statusId) {
        try {
            const q2 = "SELECT handle_on_task_status_change($1, $2, $3) AS res;";
            const results1 = await db_1.default.query(q2, [userId, taskId, statusId]);
            const [d] = results1.rows;
            const changeResponse = d.res;
            for (const member of changeResponse.members || []) {
                if (member.user_id === userId)
                    continue;
                notifications_service_1.NotificationsService.createNotification({
                    userId: member.user_id,
                    teamId: member.team_id,
                    socketId: member.socket_id,
                    message: changeResponse.message,
                    taskId,
                    projectId: changeResponse.project_id
                });
            }
        }
        catch (error) {
            (0, utils_1.log_error)(error);
        }
    }
    static async update(req, res) {
        const userId = req.user?.id;
        await this.notifyStatusChange(userId, req.body.id, req.body.status_id);
        const q = `SELECT update_task($1) AS task;`;
        const result = await db_1.default.query(q, [JSON.stringify(req.body)]);
        const [data] = result.rows;
        const task = data.task || null;
        if (task) {
            this.sendAssignmentNotifications(task, userId);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async updateDuration(req, res) {
        const { id } = req.params;
        const { start, end } = req.body;
        const q = `
      UPDATE tasks
      SET start_date = ($1)::TIMESTAMP,
          end_date   = ($2)::TIMESTAMP
      WHERE id = ($3)::UUID
      RETURNING id;
    `;
        const result = await db_1.default.query(q, [start, end, id]);
        const [data] = result.rows;
        if (data?.id)
            return res.status(200).send(new server_response_1.ServerResponse(true, {}));
        return res.status(200).send(new server_response_1.ServerResponse(false, {}, "Task update failed!"));
    }
    static async updateStatus(req, res) {
        const { status_id, task_id } = req.params;
        const { project_id, from_index, to_index } = req.body;
        const q = `SELECT update_task_status($1, $2, $3, $4, $5) AS status;`;
        const result = await db_1.default.query(q, [task_id, project_id, status_id, from_index, to_index]);
        const [data] = result.rows;
        if (data?.status)
            return res.status(200).send(new server_response_1.ServerResponse(true, {}));
        return res.status(200).send(new server_response_1.ServerResponse(false, {}, "Task update failed!"));
    }
    static async getTasksByProject(req, res) {
        const { id } = req.params;
        const q = `SELECT get_project_gantt_tasks($1) AS gantt_tasks;`;
        const result = await db_1.default.query(q, [id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data?.gantt_tasks));
    }
    static async getTasksBetweenRange(req, res) {
        const { project_id, start_date, end_date } = req.query;
        const q = `
      SELECT pm.id,
             (SELECT COALESCE(ARRAY_TO_JSON(ARRAY_AGG(ROW_TO_JSON(rec))), '[]' ::JSON)
              FROM (SELECT t.id,
                           t.name,
                           t.start_date,
                           t.project_id,
                           t.priority_id,
                           t.done,
                           t.end_date,
                           (SELECT color_code
                            FROM projects
                            WHERE projects.id = t.project_id) AS color_code,
                           (SELECT name FROM task_statuses WHERE id = t.status_id) AS status
                    FROM tasks_assignees ta,
                         tasks t
                    WHERE t.archived IS FALSE
                      AND ta.project_member_id = pm.id
                      AND t.id = ta.task_id
                      AND start_date IS NOT NULL
                      AND end_date IS NOT NULL
                    ORDER BY start_date) rec) AS tasks
      FROM project_members pm
      WHERE project_id = $1;
    `;
        const result = await db_1.default.query(q, [project_id]);
        const obj = {};
        const minMaxDates = await (0, tasks_controller_utils_1.getMinMaxOfTaskDates)(project_id);
        const dates = await (0, tasks_controller_utils_1.getDates)(minMaxDates.min_date || start_date, minMaxDates.max_date || end_date);
        const months = await (0, tasks_controller_utils_1.getWeekRange)(dates);
        for (const element of result.rows) {
            obj[element.id] = element.tasks;
            for (const task of element.tasks) {
                const min = dates.findIndex((date) => (0, moment_1.default)(task.start_date).isSame(date.date, "days"));
                const max = dates.findIndex((date) => (0, moment_1.default)(task.end_date).isSame(date.date, "days"));
                task.min = min + 1;
                task.max = max > 0 ? max + 2 : max;
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, { tasks: [obj], dates, months }));
    }
    static async getGanttTasksByProject(req, res) {
        const q = `
      SELECT id,
             name,
             start_date,
             project_id,
             priority_id,
             done,
             end_date,
             (SELECT color_code
              FROM projects
              WHERE projects.id = project_id) AS color_code,
             (SELECT name FROM task_statuses WHERE id = tasks.status_id) AS status,
             parent_task_id,
             parent_task_id IS NOT NULL AS is_sub_task,
             (SELECT name FROM tasks WHERE id = tasks.parent_task_id) AS parent_task_name,
             (SELECT COUNT('*')::INT FROM tasks WHERE parent_task_id = tasks.id) AS sub_tasks_count
      FROM tasks
      WHERE archived IS FALSE
        AND project_id = $1
        AND parent_task_id IS NULL
      ORDER BY start_date;
    `;
        const result = await db_1.default.query(q, [req.query.project_id]);
        const minMaxDates = await (0, tasks_controller_utils_1.getMinMaxOfTaskDates)(req.query.project_id);
        if (!minMaxDates.max_date && !minMaxDates.min_date) {
            minMaxDates.min_date = (0, moment_1.default)().format();
            minMaxDates.max_date = (0, moment_1.default)().add(45, "days").format();
        }
        const dates = await (0, tasks_controller_utils_1.getDates)(minMaxDates.min_date, minMaxDates.max_date);
        const weeks = await (0, tasks_controller_utils_1.getWeekRange)(dates);
        const months = await (0, tasks_controller_utils_1.getMonthRange)(dates);
        for (const task of result.rows) {
            const min = dates.findIndex((date) => (0, moment_1.default)(task.start_date).isSame(date.date, "days"));
            const max = dates.findIndex((date) => (0, moment_1.default)(task.end_date).isSame(date.date, "days"));
            task.show_sub_tasks = false;
            task.sub_tasks = [];
            task.min = min + 1;
            task.max = max > 0 ? max + 2 : max;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, { tasks: result.rows, dates, weeks, months }));
    }
    static async getProjectTasksByTeam(req, res) {
        const q = `SELECT get_resource_gantt_tasks($1) AS gantt_tasks;`;
        const result = await db_1.default.query(q, [req.user?.id ?? null]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data?.gantt_tasks));
    }
    static async getSelectedTasksByProject(req, res) {
        const q = `SELECT get_selected_tasks($1) AS tasks`;
        const result = await db_1.default.query(q, [req.params.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data?.tasks));
    }
    static async getUnselectedTasksByProject(req, res) {
        const q = `SELECT get_unselected_tasks($1) AS tasks`;
        const result = await db_1.default.query(q, [req.params.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data?.tasks));
    }
    static async getProjectTasksByStatusV2(req, res) {
        const q1 = `
      SELECT task_statuses.id, task_statuses.name, stsc.color_code
      FROM task_statuses
             INNER JOIN sys_task_status_categories stsc ON task_statuses.category_id = stsc.id
      WHERE project_id = $1
        AND team_id = $2
      ORDER BY task_statuses.sort_order;
    `;
        const result1 = await db_1.default.query(q1, [req.query.project, req.user?.team_id]);
        const statuses = result1.rows;
        const dataset = [];
        for (const status of statuses) {
            const q2 = `SELECT get_tasks_by_status($1, $2) AS tasks`;
            const result2 = await db_1.default.query(q2, [req.params.id, status]);
            const [data] = result2.rows;
            for (const task of data.tasks) {
                task.name_color = (0, utils_1.getColor)(task.name);
                task.names = this.createTagList(task.assignees);
                task.names.map((a) => a.color_code = (0, utils_1.getColor)(a.name));
            }
            dataset.push(data);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, dataset));
    }
    static async getProjectTasksByStatus(req, res) {
        const q = `SELECT get_tasks_by_status($1,$2) AS tasks`;
        const result = await db_1.default.query(q, [req.params.id, req.query.status]);
        const [data] = result.rows;
        for (const task of data.tasks) {
            task.name_color = (0, utils_1.getColor)(task.name);
            task.names = this.createTagList(task.assignees);
            task.all_labels = task.labels;
            task.labels = this.createTagList(task.labels, 3);
            task.names.map((a) => a.color_code = (0, utils_1.getColor)(a.name));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data?.tasks));
    }
    static async deleteById(req, res) {
        const q = `DELETE
               FROM tasks
               WHERE id = $1;`;
        const result = await db_1.default.query(q, [req.params.id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getById(req, res) {
        const q = `SELECT get_task_form_view_model($1, $2, $3, $4) AS view_model;`;
        const result = await db_1.default.query(q, [req.user?.id ?? null, req.user?.team_id ?? null, req.query.task_id ?? null, req.query.project_id || null]);
        const [data] = result.rows;
        const default_model = {
            task: {},
            priorities: [],
            projects: [],
            statuses: [],
            team_members: [],
        };
        const task = data.view_model.task || null;
        if (!task)
            return res.status(200).send(new server_response_1.ServerResponse(true, default_model));
        if (data.view_model && task) {
            task.assignees.map((a) => {
                a.color_code = (0, utils_1.getColor)(a.name);
                return a;
            });
            task.names = worklenz_controller_base_1.default.createTagList(task.assignees);
            const totalMinutes = task.total_minutes;
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            task.total_hours = hours;
            task.total_minutes = minutes;
            task.assignees = (task.assignees || []).map((i) => i.team_member_id);
            task.timer_start_time = (0, moment_1.default)(task.timer_start_time).valueOf();
            task.status_color = task.status_color + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        for (const member of (data.view_model?.team_members || [])) {
            member.color_code = (0, utils_1.getColor)(member.name);
        }
        const t = await (0, on_quick_task_1.getTaskCompleteInfo)(task);
        const info = await tasks_controller_v2_1.default.getTaskCompleteRatio(t.parent_task_id || t.id);
        if (info) {
            t.complete_ratio = info.ratio;
            t.completed_count = info.total_completed;
            t.total_tasks_count = info.total_tasks;
        }
        data.view_model.task = t;
        return res.status(200).send(new server_response_1.ServerResponse(true, data.view_model || default_model));
    }
    static async createQuickTask(req, res) {
        const q = `SELECT create_quick_task($1) AS task_id;`;
        req.body.reporter_id = req.user?.id ?? null;
        req.body.team_id = req.user?.team_id ?? null;
        req.body.total_minutes = (0, utils_1.toMinutes)(req.body.total_hours, req.body.total_minutes);
        const result = await db_1.default.query(q, [JSON.stringify(req.body)]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async createHomeTask(req, res) {
        const q = `SELECT create_home_task($1);`;
        let endDate = req.body.end_date;
        switch (endDate) {
            case "Today":
                endDate = (0, moment_1.default)().format();
                break;
            case "Tomorrow":
                endDate = (0, moment_1.default)().add(1, "days").format();
                break;
            case "Next Week":
                endDate = (0, moment_1.default)().add(1, "weeks").endOf("isoWeek").format();
                break;
            case "Next Month":
                endDate = (0, moment_1.default)().add(1, "months").endOf("month").format();
                break;
            case "No Due Date":
                endDate = null;
                break;
            default:
                endDate = null;
        }
        req.body.end_date = endDate;
        req.body.reporter_id = req.user?.id ?? null;
        req.body.team_id = req.user?.team_id ?? null;
        const result = await db_1.default.query(q, [JSON.stringify(req.body)]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data.create_home_task.task));
    }
    static async bulkChangeStatus(req, res) {
        const q = `SELECT bulk_change_tasks_status($1, $2) AS task;`;
        const result = await db_1.default.query(q, [JSON.stringify(req.body), req.user?.id]);
        const [data] = result.rows;
        TasksController.notifyProjectUpdates(req.user?.socket_id, req.query.project);
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async bulkChangePriority(req, res) {
        const q = `SELECT bulk_change_tasks_priority($1, $2) AS task;`;
        const result = await db_1.default.query(q, [JSON.stringify(req.body), req.user?.id]);
        const [data] = result.rows;
        TasksController.notifyProjectUpdates(req.user?.socket_id, req.query.project);
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async bulkChangePhase(req, res) {
        const q = `SELECT bulk_change_tasks_phase($1, $2) AS task;`;
        const result = await db_1.default.query(q, [JSON.stringify(req.body), req.user?.id]);
        const [data] = result.rows;
        TasksController.notifyProjectUpdates(req.user?.socket_id, req.query.project);
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async bulkDelete(req, res) {
        const deletedTasks = req.body.tasks.map((t) => t.id);
        const result = { deleted_tasks: deletedTasks };
        const q = `SELECT bulk_delete_tasks($1) AS task;`;
        await db_1.default.query(q, [JSON.stringify(req.body)]);
        TasksController.notifyProjectUpdates(req.user?.socket_id, req.query.project);
        return res.status(200).send(new server_response_1.ServerResponse(true, result));
    }
    static async bulkArchive(req, res) {
        const q = `SELECT bulk_archive_tasks($1) AS task;`;
        req.body.type = req.query.type;
        await db_1.default.query(q, [JSON.stringify(req.body)]);
        const tasks = req.body.tasks.map((t) => t.id);
        TasksController.notifyProjectUpdates(req.user?.socket_id, req.query.project);
        return res.status(200).send(new server_response_1.ServerResponse(true, tasks));
    }
    static async bulkAssignMe(req, res) {
        req.body.team_id = req.user?.team_id;
        req.body.user_id = req.user?.id;
        const [task] = req.body.tasks || [];
        const q = `SELECT bulk_assign_to_me($1) AS task;`;
        await db_1.default.query(q, [JSON.stringify(req.body)]);
        const assignees = await (0, on_quick_assign_or_remove_1.getAssignees)(task.id);
        const members = await (0, on_quick_assign_or_remove_1.getTeamMembers)(req.body.team_id);
        const names = worklenz_controller_base_1.default.createTagList(assignees);
        const data = { id: task.id, members, assignees, names };
        const activityLog = {
            task_id: task.id,
            attribute_type: "assignee",
            user_id: req.user?.id,
            log_type: "assign",
            old_value: null,
            new_value: req.user?.id,
            next_string: req.user?.name
        };
        (0, activity_logs_service_1.insertToActivityLogs)(activityLog);
        TasksController.notifyProjectUpdates(req.user?.socket_id, req.query.project);
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async bulkAssignLabel(req, res) {
        if (req.body.text) {
            const q0 = `SELECT bulk_assign_or_create_label($1) AS label;`;
            req.body.team_id = req.user?.team_id;
            req.body.color = (0, utils_1.getRandomColorCode)();
            await db_1.default.query(q0, [JSON.stringify(req.body)]);
        }
        else {
            const q = `SELECT bulk_assign_label($1, $2) AS task;`;
            await db_1.default.query(q, [JSON.stringify(req.body), req.user?.id]);
        }
        TasksController.notifyProjectUpdates(req.user?.socket_id, req.query.project);
        return res.status(200).send(new server_response_1.ServerResponse(true, null));
    }
    static async bulkAssignMembers(req, res) {
        const { tasks, members, project_id } = req.body;
        try {
            for (const task of tasks) {
                for (const member of members) {
                    await TasksController.createTaskBulkAssignees(member.id, project_id, task.id, req.user?.id);
                }
            }
            TasksController.notifyProjectUpdates(req.user?.socket_id, project_id);
            return res.status(200).send(new server_response_1.ServerResponse(true, null));
        }
        catch (error) {
            return res.status(500).send(new server_response_1.ServerResponse(false, "An error occurred"));
        }
    }
    static async createTaskAssignee(memberId, projectId, taskId, userId) {
        const q = `SELECT create_task_assignee($1,$2,$3,$4)`;
        const result = await db_1.default.query(q, [memberId, projectId, taskId, userId]);
        return result.rows;
    }
    static async createTaskBulkAssignees(memberId, projectId, taskId, userId) {
        const q = `SELECT create_bulk_task_assignees($1,$2,$3,$4)`;
        const result = await db_1.default.query(q, [memberId, projectId, taskId, userId]);
        return result.rows;
    }
    static async getProjectTaskAssignees(req, res) {
        const q = `
      SELECT project_members.team_member_id AS id,
             tmiv.name,
             tmiv.email,
             tmiv.avatar_url
      FROM project_members
             LEFT JOIN team_member_info_view tmiv ON project_members.team_member_id = tmiv.team_member_id
      WHERE project_id = $1
        AND EXISTS(SELECT 1 FROM tasks_assignees WHERE project_member_id = project_members.id);
    `;
        const result = await db_1.default.query(q, [req.params.id]);
        for (const member of result.rows) {
            member.color_code = (0, utils_1.getColor)(member.name);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "getGanttTasks", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "updateDuration", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "updateStatus", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "getTasksByProject", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "getTasksBetweenRange", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "getGanttTasksByProject", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "getProjectTasksByTeam", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "getSelectedTasksByProject", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "getUnselectedTasksByProject", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "getProjectTasksByStatusV2", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "getProjectTasksByStatus", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "deleteById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "getById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "createQuickTask", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "createHomeTask", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "bulkChangeStatus", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "bulkChangePriority", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "bulkChangePhase", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "bulkDelete", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "bulkArchive", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "bulkAssignMe", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "bulkAssignLabel", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "bulkAssignMembers", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksController, "getProjectTaskAssignees", null);
exports.default = TasksController;
