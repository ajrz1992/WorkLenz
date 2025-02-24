"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskListGroup = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const server_response_1 = require("../models/server-response");
const constants_1 = require("../shared/constants");
const utils_1 = require("../shared/utils");
const tasks_controller_base_1 = tslib_1.__importStar(require("./tasks-controller-base"));
class TaskListGroup {
    name;
    category_id;
    color_code;
    start_date;
    end_date;
    todo_progress;
    doing_progress;
    done_progress;
    tasks;
    constructor(group) {
        this.name = group.name;
        this.category_id = group.category_id || null;
        this.start_date = group.start_date || null;
        this.end_date = group.end_date || null;
        this.color_code = group.color_code + constants_1.TASK_STATUS_COLOR_ALPHA;
        this.todo_progress = 0;
        this.doing_progress = 0;
        this.done_progress = 0;
        this.tasks = [];
    }
}
exports.TaskListGroup = TaskListGroup;
class TasksControllerV2 extends tasks_controller_base_1.default {
    static isCountsOnly(query) {
        return query.count === "true";
    }
    static isTasksOnlyReq(query) {
        return TasksControllerV2.isCountsOnly(query) || query.parent_task;
    }
    static flatString(text) {
        return (text || "").split(" ").map(s => `'${s}'`).join(",");
    }
    static getFilterByStatusWhereClosure(text) {
        return text ? `status_id IN (${this.flatString(text)})` : "";
    }
    static getFilterByPriorityWhereClosure(text) {
        return text ? `priority_id IN (${this.flatString(text)})` : "";
    }
    static getFilterByLabelsWhereClosure(text) {
        return text
            ? `id IN (SELECT task_id FROM task_labels WHERE label_id IN (${this.flatString(text)}))`
            : "";
    }
    static getFilterByMembersWhereClosure(text) {
        return text
            ? `id IN (SELECT task_id FROM tasks_assignees WHERE team_member_id IN (${this.flatString(text)}))`
            : "";
    }
    static getFilterByProjectsWhereClosure(text) {
        return text ? `project_id IN (${this.flatString(text)})` : "";
    }
    static getFilterByAssignee(filterBy) {
        return filterBy === "member"
            ? `id IN (SELECT task_id FROM tasks_assignees WHERE team_member_id = $1)`
            : "project_id = $1";
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
        const { searchQuery, sortField } = TasksControllerV2.toPaginationOptions(options, searchField);
        const isSubTasks = !!options.parent_task;
        const sortFields = sortField.replace(/ascend/g, "ASC").replace(/descend/g, "DESC") || "sort_order";
        const statusesFilter = TasksControllerV2.getFilterByStatusWhereClosure(options.statuses);
        const labelsFilter = TasksControllerV2.getFilterByLabelsWhereClosure(options.labels);
        const membersFilter = TasksControllerV2.getFilterByMembersWhereClosure(options.members);
        const projectsFilter = TasksControllerV2.getFilterByProjectsWhereClosure(options.projects);
        const priorityFilter = TasksControllerV2.getFilterByPriorityWhereClosure(options.priorities);
        const filterByAssignee = TasksControllerV2.getFilterByAssignee(options.filterBy);
        const statusesQuery = TasksControllerV2.getStatusesQuery(options.filterBy);
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
            (isSubTasks ? "$1 = $1" : filterByAssignee),
            statusesFilter,
            priorityFilter,
            labelsFilter,
            membersFilter,
            projectsFilter
        ].filter(i => !!i).join(" AND ");
        return `
      SELECT id,
             name,
             CONCAT((SELECT key FROM projects WHERE id = t.project_id), '-', task_no) AS task_key,
             (SELECT name FROM projects WHERE id = t.project_id) AS project_name,
             t.project_id AS project_id,
             t.parent_task_id,
             t.parent_task_id IS NOT NULL AS is_sub_task,
             (SELECT name FROM tasks WHERE id = t.parent_task_id) AS parent_task_name,
             (SELECT COUNT(*)
              FROM tasks
              WHERE parent_task_id = t.id)::INT AS sub_tasks_count,

             t.status_id AS status,
             t.archived,
             t.description,
             t.sort_order,

             (SELECT phase_id FROM task_phase WHERE task_id = t.id) AS phase_id,
             (SELECT name
              FROM project_phases
              WHERE id = (SELECT phase_id FROM task_phase WHERE task_id = t.id)) AS phase_name,
              (SELECT color_code
                FROM project_phases
                WHERE id = (SELECT phase_id FROM task_phase WHERE task_id = t.id)) AS phase_color_code,

             (EXISTS(SELECT 1 FROM task_subscribers WHERE task_id = t.id)) AS has_subscribers,

             (SELECT start_time
              FROM task_timers
              WHERE task_id = t.id
                AND user_id = '${userId}') AS timer_start_time,

             (SELECT color_code
              FROM sys_task_status_categories
              WHERE id = (SELECT category_id FROM task_statuses WHERE id = t.status_id)) AS status_color,

             (SELECT COALESCE(ROW_TO_JSON(r), '{}'::JSON)
              FROM (SELECT is_done, is_doing, is_todo
                    FROM sys_task_status_categories
                    WHERE id = (SELECT category_id FROM task_statuses WHERE id = t.status_id)) r) AS status_category,

             (SELECT COUNT(*) FROM task_comments WHERE task_id = t.id) AS comments_count,
             (SELECT COUNT(*) FROM task_attachments WHERE task_id = t.id) AS attachments_count,
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

             (SELECT COALESCE(JSON_AGG(r), '[]'::JSON)
              FROM (SELECT task_labels.label_id AS id,
                           (SELECT name FROM team_labels WHERE id = task_labels.label_id),
                           (SELECT color_code FROM team_labels WHERE id = task_labels.label_id)
                    FROM task_labels
                    WHERE task_id = t.id) r) AS labels,

             (SELECT name FROM users WHERE id = t.reporter_id) AS reporter,
             (SELECT id FROM task_priorities WHERE id = t.priority_id) AS priority,
             (SELECT value FROM task_priorities WHERE id = t.priority_id) AS priority_value,
             total_minutes,
             (SELECT SUM(time_spent) FROM task_work_log WHERE task_id = t.id) AS total_minutes_spent,
             created_at,
             updated_at,
             completed_at,
             start_date,
             END_DATE ${statusesQuery}
      FROM tasks t
      WHERE ${filters} ${searchQuery}
      ORDER BY ${sortFields}
    `;
    }
    static async getGroups(groupBy, projectId) {
        let q = "";
        let params = [];
        switch (groupBy) {
            case tasks_controller_base_1.GroupBy.STATUS:
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
            case tasks_controller_base_1.GroupBy.PRIORITY:
                q = `SELECT id, name, color_code
             FROM task_priorities
             ORDER BY value DESC;`;
                break;
            case tasks_controller_base_1.GroupBy.LABELS:
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
            case tasks_controller_base_1.GroupBy.PHASE:
                q = `
          SELECT id, name, color_code, start_date, end_date, sort_index
          FROM project_phases
          WHERE project_id = $1
          ORDER BY sort_index DESC;
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
        const groupBy = (req.query.group || tasks_controller_base_1.GroupBy.STATUS);
        const q = TasksControllerV2.getQuery(req.user?.id, req.query);
        const params = isSubTasks ? [req.params.id || null, req.query.parent_task] : [req.params.id || null];
        const result = await db_1.default.query(q, params);
        const tasks = [...result.rows];
        const groups = await this.getGroups(groupBy, req.params.id);
        const map = groups.reduce((g, group) => {
            if (group.id)
                g[group.id] = new TaskListGroup(group);
            return g;
        }, {});
        this.updateMapByGroup(tasks, groupBy, map);
        const updatedGroups = Object.keys(map).map(key => {
            const group = map[key];
            TasksControllerV2.updateTaskProgresses(group);
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
            TasksControllerV2.updateTaskViewModel(task);
            if (groupBy === tasks_controller_base_1.GroupBy.STATUS) {
                map[task.status]?.tasks.push(task);
            }
            else if (groupBy === tasks_controller_base_1.GroupBy.PRIORITY) {
                map[task.priority]?.tasks.push(task);
            }
            else if (groupBy === tasks_controller_base_1.GroupBy.PHASE && task.phase_id) {
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
                color_code: "#fbc84c69",
                tasks: unmapped
            };
        }
    }
    static updateTaskProgresses(group) {
        const todoCount = group.tasks.filter(t => t.status_category?.is_todo).length;
        const doingCount = group.tasks.filter(t => t.status_category?.is_doing).length;
        const doneCount = group.tasks.filter(t => t.status_category?.is_done).length;
        const total = group.tasks.length;
        group.todo_progress = +this.calculateTaskCompleteRatio(todoCount, total);
        group.doing_progress = +this.calculateTaskCompleteRatio(doingCount, total);
        group.done_progress = +this.calculateTaskCompleteRatio(doneCount, total);
    }
    static async getTasksOnly(req, res) {
        const isSubTasks = !!req.query.parent_task;
        const q = TasksControllerV2.getQuery(req.user?.id, req.query);
        const params = isSubTasks ? [req.params.id || null, req.query.parent_task] : [req.params.id || null];
        const result = await db_1.default.query(q, params);
        let data = [];
        if (this.isCountsOnly(req.query)) {
            [data] = result.rows;
        }
        else {
            data = [...result.rows];
            for (const task of data) {
                TasksControllerV2.updateTaskViewModel(task);
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async convertToTask(req, res) {
        const q = `
      UPDATE tasks
      SET parent_task_id = NULL,
          sort_order     = COALESCE((SELECT MAX(sort_order) + 1 FROM tasks WHERE project_id = $2), 0)
      WHERE id = $1;
    `;
        await db_1.default.query(q, [req.body.id, req.body.project_id]);
        const result = await db_1.default.query("SELECT get_single_task($1) AS task;", [req.body.id]);
        const [data] = result.rows;
        const model = TasksControllerV2.updateTaskViewModel(data.task);
        return res.status(200).send(new server_response_1.ServerResponse(true, model));
    }
    static async getNewKanbanTask(req, res) {
        const { id } = req.params;
        const result = await db_1.default.query("SELECT get_single_task($1) AS task;", [id]);
        const [data] = result.rows;
        const task = TasksControllerV2.updateTaskViewModel(data.task);
        return res.status(200).send(new server_response_1.ServerResponse(true, task));
    }
    static async convertToSubtask(req, res) {
        const groupType = req.body.group_by;
        let q = ``;
        if (groupType == "status") {
            q = `
        UPDATE tasks
        SET parent_task_id = $3,
            sort_order     = COALESCE((SELECT MAX(sort_order) + 1 FROM tasks WHERE project_id = $2), 0),
            status_id      = $4
        WHERE id = $1;
      `;
        }
        else if (groupType == "priority") {
            q = `
        UPDATE tasks
        SET parent_task_id = $3,
            sort_order     = COALESCE((SELECT MAX(sort_order) + 1 FROM tasks WHERE project_id = $2), 0),
            priority_id    = $4
        WHERE id = $1;
      `;
        }
        else if (groupType === "phase") {
            await db_1.default.query(`
        UPDATE tasks
        SET parent_task_id = $3,
            sort_order     = COALESCE((SELECT MAX(sort_order) + 1 FROM tasks WHERE project_id = $2), 0)
        WHERE id = $1;
      `, [req.body.id, req.body.project_id, req.body.parent_task_id]);
            q = `SELECT handle_on_task_phase_change($1, $2);`;
        }
        if (req.body.to_group_id === constants_1.UNMAPPED)
            req.body.to_group_id = null;
        const params = groupType === "phase"
            ? [req.body.id, req.body.to_group_id]
            : [req.body.id, req.body.project_id, req.body.parent_task_id, req.body.to_group_id];
        await db_1.default.query(q, params);
        const result = await db_1.default.query("SELECT get_single_task($1) AS task;", [req.body.id]);
        const [data] = result.rows;
        const model = TasksControllerV2.updateTaskViewModel(data.task);
        return res.status(200).send(new server_response_1.ServerResponse(true, model));
    }
    static async getTaskSubscribers(taskId) {
        const q = `
      SELECT u.name, u.avatar_url, ts.user_id, ts.team_member_id, ts.task_id
      FROM task_subscribers ts
             LEFT JOIN users u ON ts.user_id = u.id
      WHERE ts.task_id = $1;
    `;
        const result = await db_1.default.query(q, [taskId]);
        for (const member of result.rows)
            member.color_code = (0, utils_1.getColor)(member.name);
        return this.createTagList(result.rows);
    }
    static async checkUserAssignedToTask(taskId, userId, teamId) {
        const q = `
    SELECT EXISTS(
        SELECT * FROM tasks_assignees WHERE task_id = $1 AND team_member_id = (SELECT team_member_id FROM team_member_info_view WHERE user_id = $2 AND team_id = $3)
    );
    `;
        const result = await db_1.default.query(q, [taskId, userId, teamId]);
        const [data] = result.rows;
        return data.exists;
    }
    static async getSubscribers(req, res) {
        const subscribers = await this.getTaskSubscribers(req.params.id);
        return res.status(200).send(new server_response_1.ServerResponse(true, subscribers));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksControllerV2, "getList", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksControllerV2, "getTasksOnly", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksControllerV2, "convertToTask", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksControllerV2, "getNewKanbanTask", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksControllerV2, "convertToSubtask", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksControllerV2, "getSubscribers", null);
exports.default = TasksControllerV2;
