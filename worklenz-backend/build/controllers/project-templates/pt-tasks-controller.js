"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PtTaskListGroup = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../../decorators/handle-exceptions"));
const server_response_1 = require("../../models/server-response");
const constants_1 = require("../../shared/constants");
const pt_tasks_controller_base_1 = tslib_1.__importStar(require("./pt-tasks-controller-base"));
class PtTaskListGroup {
    name;
    category_id;
    color_code;
    tasks;
    constructor(group) {
        this.name = group.name;
        this.category_id = group.category_id || null;
        this.color_code = group.color_code + constants_1.TASK_STATUS_COLOR_ALPHA;
        this.tasks = [];
    }
}
exports.PtTaskListGroup = PtTaskListGroup;
class PtTasksController extends pt_tasks_controller_base_1.default {
    static isCountsOnly(query) {
        return query.count === "true";
    }
    static isTasksOnlyReq(query) {
        return PtTasksController.isCountsOnly(query) || query.parent_task;
    }
    static flatString(text) {
        return (text || "").split(" ").map(s => `'${s}'`).join(",");
    }
    static getFilterByTemplatsWhereClosure(text) {
        return text ? `template_id IN (${this.flatString(text)})` : "";
    }
    static getQuery(userId, options) {
        const searchField = options.search ? "cptt.name" : "sort_order";
        const { searchQuery, sortField } = PtTasksController.toPaginationOptions(options, searchField);
        const sortFields = sortField.replace(/ascend/g, "ASC").replace(/descend/g, "DESC") || "sort_order";
        const isSubTasks = !!options.parent_task;
        const subTasksFilter = isSubTasks ? "parent_task_id = $2" : "parent_task_id IS NULL";
        return `
          SELECT id,
                 name,
                 cptt.template_id AS template_id,
                 cptt.parent_task_id,
                 cptt.parent_task_id IS NOT NULL AS is_sub_task,
                 (SELECT COUNT(*)
                  FROM cpt_tasks
                  WHERE parent_task_id = cptt.id)::INT AS sub_tasks_count,
                 cptt.status_id AS status,
                 cptt.description,
                 cptt.sort_order,
                 (SELECT phase_id FROM cpt_task_phases WHERE task_id = cptt.id) AS phase_id,
                 (SELECT name
                  FROM cpt_phases
                  WHERE id = (SELECT phase_id FROM cpt_task_phases WHERE task_id = cptt.id)) AS phase_name,
                  (SELECT color_code
                    FROM cpt_phases
                    WHERE id = (SELECT phase_id FROM cpt_task_phases WHERE task_id = cptt.id)) AS phase_color,

                 (SELECT color_code
                  FROM sys_task_status_categories
                  WHERE id = (SELECT category_id FROM cpt_task_statuses WHERE id = cptt.status_id)) AS status_color,

                 (SELECT COALESCE(ROW_TO_JSON(r), '{}'::JSON)
                  FROM (SELECT is_done, is_doing, is_todo
                        FROM sys_task_status_categories
                        WHERE id = (SELECT category_id FROM cpt_task_statuses WHERE id = cptt.status_id)) r) AS status_category,

                 (SELECT COALESCE(JSON_AGG(r), '[]'::JSON)
                  FROM (SELECT cpt_task_labels.label_id AS id,
                               (SELECT name FROM team_labels WHERE id = cpt_task_labels.label_id),
                               (SELECT color_code FROM team_labels WHERE id = cpt_task_labels.label_id)
                        FROM cpt_task_labels
                        WHERE task_id = cptt.id) r) AS labels,
                 (SELECT id FROM task_priorities WHERE id = cptt.priority_id) AS priority,
                 (SELECT value FROM task_priorities WHERE id = cptt.priority_id) AS priority_value,
                 total_minutes
          FROM cpt_tasks cptt
          WHERE cptt.template_id=$1 AND ${subTasksFilter} ${searchQuery}
          ORDER BY ${sortFields}
        `;
    }
    static async getGroups(groupBy, templateId) {
        let q = "";
        let params = [];
        switch (groupBy) {
            case pt_tasks_controller_base_1.GroupBy.STATUS:
                q = `
              SELECT id,
                     name,
                     (SELECT color_code FROM sys_task_status_categories WHERE id = cpt_task_statuses.category_id),
                     category_id
              FROM cpt_task_statuses
              WHERE template_id = $1
              ORDER BY sort_order;
            `;
                params = [templateId];
                break;
            case pt_tasks_controller_base_1.GroupBy.PRIORITY:
                q = `SELECT id, name, color_code
                 FROM task_priorities
                 ORDER BY value DESC;`;
                break;
            case pt_tasks_controller_base_1.GroupBy.LABELS:
                q = `
              SELECT id, name, color_code
              FROM team_labels
              WHERE team_id = $2
                AND EXISTS(SELECT 1
                           FROM cpt_tasks
                           WHERE template_id = $1
                             AND EXISTS(SELECT 1 FROM cpt_task_labels WHERE task_id = cpt_tasks.id AND label_id = team_labels.id))
              ORDER BY name;
            `;
                break;
            case pt_tasks_controller_base_1.GroupBy.PHASE:
                q = `
              SELECT id, name, color_code
              FROM cpt_phases
              WHERE template_id = $1
              ORDER BY created_at DESC;
            `;
                params = [templateId];
                break;
            default:
                break;
        }
        const result = await db_1.default.query(q, params);
        return result.rows;
    }
    static async getList(req, res) {
        const isSubTasks = !!req.query.parent_task;
        const groupBy = (req.query.group || pt_tasks_controller_base_1.GroupBy.STATUS);
        const q = PtTasksController.getQuery(req.user?.id, req.query);
        const params = isSubTasks ? [req.params.id || null, req.query.parent_task] : [req.params.id || null];
        const result = await db_1.default.query(q, params);
        const tasks = [...result.rows];
        const groups = await this.getGroups(groupBy, req.params.id);
        const map = groups.reduce((g, group) => {
            if (group.id)
                g[group.id] = new PtTaskListGroup(group);
            return g;
        }, {});
        this.updateMapByGroup(tasks, groupBy, map);
        const updatedGroups = Object.keys(map).map(key => {
            const group = map[key];
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
            PtTasksController.updateTaskViewModel(task);
            if (groupBy === pt_tasks_controller_base_1.GroupBy.STATUS) {
                map[task.status]?.tasks.push(task);
            }
            else if (groupBy === pt_tasks_controller_base_1.GroupBy.PRIORITY) {
                map[task.priority]?.tasks.push(task);
            }
            else if (groupBy === pt_tasks_controller_base_1.GroupBy.PHASE && task.phase_id) {
                map[task.phase_id]?.tasks.push(task);
            }
            else {
                unmapped.push(task);
            }
            const totalMinutes = task.total_minutes;
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            task.total_hours = hours;
            task.total_minutes = minutes;
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
    static async getTasksOnly(req, res) {
        const isSubTasks = !!req.query.parent_task;
        const q = PtTasksController.getQuery(req.user?.id, req.query);
        const params = isSubTasks ? [req.params.id || null, req.query.parent_task] : [req.params.id || null];
        const result = await db_1.default.query(q, params);
        let data = [];
        if (this.isCountsOnly(req.query)) {
            [data] = result.rows;
        }
        else {
            data = [...result.rows];
            for (const task of data) {
                PtTasksController.updateTaskViewModel(task);
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async bulkDelete(req, res) {
        const deletedTasks = req.body.tasks.map((t) => t.id);
        const result = { deleted_tasks: deletedTasks };
        const q = `SELECT bulk_delete_pt_tasks($1) AS task;`;
        await db_1.default.query(q, [JSON.stringify(req.body)]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTasksController, "getList", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTasksController, "getTasksOnly", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], PtTasksController, "bulkDelete", null);
exports.default = PtTasksController;
