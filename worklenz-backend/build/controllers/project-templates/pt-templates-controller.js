"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const server_response_1 = require("../../models/server-response");
const handle_exceptions_1 = tslib_1.__importDefault(require("../../decorators/handle-exceptions"));
const project_templates_1 = require("./project-templates");
const project_templates_base_1 = tslib_1.__importDefault(require("./project-templates-base"));
const constants_1 = require("../../shared/constants");
const io_1 = require("../../shared/io");
class ProjectTemplatesController extends project_templates_base_1.default {
    static async getTemplates(req, res) {
        const q = `SELECT id, name FROM pt_project_templates ORDER BY name;`;
        const result = await db_1.default.query(q, []);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async getCustomTemplates(req, res) {
        const { searchQuery } = this.toPaginationOptions(req.query, "name");
        const q = `SELECT id, name, created_at, FALSE AS selected FROM custom_project_templates WHERE team_id = $1 ${searchQuery} ORDER BY name;`;
        const result = await db_1.default.query(q, [req.user?.team_id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, result.rows));
    }
    static async deleteCustomTemplate(req, res) {
        const { id } = req.params;
        const q = `DELETE FROM custom_project_templates WHERE id = $1;`;
        await db_1.default.query(q, [id]);
        return res.status(200).send(new server_response_1.ServerResponse(true, [], "Template deleted successfully."));
    }
    static async getDefaultProjectStatus() {
        const q = `SELECT id FROM sys_project_statuses WHERE is_default IS TRUE;`;
        const result = await db_1.default.query(q, []);
        const [data] = result.rows;
        return data.id;
    }
    static async getDefaultProjectHealth() {
        const q = `SELECT id FROM sys_project_healths WHERE is_default IS TRUE`;
        const result = await db_1.default.query(q, []);
        const [data] = result.rows;
        return data.id;
    }
    static async getTemplateById(req, res) {
        const { id } = req.params;
        const data = await this.getTemplateData(id);
        for (const phase of data.phases) {
            phase.color_code = phase.color_code + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        for (const status of data.status) {
            status.color_code = status.color_code + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        for (const priority of data.priorities) {
            priority.color_code = priority.color_code + constants_1.TASK_PRIORITY_COLOR_ALPHA;
        }
        for (const label of data.labels) {
            label.color_code = label.color_code + constants_1.TASK_STATUS_COLOR_ALPHA;
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async createTemplates(req, res) {
        for (const template of project_templates_1.templateData) {
            let template_id = null;
            template_id = await this.insertProjectTemplate(template);
            if (template_id) {
                await this.insertTemplateProjectPhases(template.phases, template_id);
                await this.insertTemplateProjectStatuses(template.status, template_id);
                await this.insertTemplateProjectTasks(template.tasks, template_id);
            }
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, []));
    }
    static async importTemplates(req, res) {
        const { template_id } = req.body;
        let project_id = null;
        const data = await this.getTemplateData(template_id);
        if (data) {
            data.team_id = req.user?.team_id || null;
            data.user_id = req.user?.id || null;
            data.folder_id = null;
            data.category_id = null;
            data.status_id = await this.getDefaultProjectStatus();
            data.project_created_log = constants_1.LOG_DESCRIPTIONS.PROJECT_CREATED;
            data.project_member_added_log = constants_1.LOG_DESCRIPTIONS.PROJECT_MEMBER_ADDED;
            data.health_id = await this.getDefaultProjectHealth();
            data.working_days = 0;
            data.man_days = 0;
            data.hours_per_day = 8;
            project_id = await this.importTemplate(data);
            await this.insertTeamLabels(data.labels, req.user?.team_id);
            await this.insertProjectPhases(data.phases, project_id);
            await this.insertProjectTasks(data.tasks, data.team_id, project_id, data.user_id, io_1.IO.getSocketById(req.user?.socket_id));
            return res.status(200).send(new server_response_1.ServerResponse(true, { project_id }));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, { project_id }));
    }
    static async createCustomTemplate(req, res) {
        const { project_id, templateName, projectIncludes, taskIncludes } = req.body;
        const team_id = req.user?.team_id || null;
        if (!team_id || !project_id)
            return res.status(400).send(new server_response_1.ServerResponse(false, {}));
        let status, labels, phases = [];
        const data = await this.getProjectData(project_id);
        if (projectIncludes.statuses) {
            status = await this.getProjectStatus(project_id);
        }
        if (projectIncludes.phases) {
            phases = await this.getProjectPhases(project_id);
        }
        if (projectIncludes.labels) {
            labels = await this.getProjectLabels(team_id, project_id);
        }
        const tasks = await this.getTasksByProject(project_id, taskIncludes);
        data.name = templateName;
        data.team_id = team_id;
        const q = `SELECT create_project_template($1);`;
        const result = await db_1.default.query(q, [JSON.stringify(data)]);
        const [obj] = result.rows;
        const template_id = obj.create_project_template.id;
        if (template_id) {
            if (phases)
                await this.insertCustomTemplatePhases(phases, template_id);
            if (status)
                await this.insertCustomTemplateStatus(status, template_id, team_id);
            if (tasks)
                await this.insertCustomTemplateTasks(tasks, template_id, team_id);
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, {}, "Project template created successfully."));
    }
    static async setupAccount(req, res) {
        const { template_id, team_name } = req.body;
        let project_id = null;
        await this.updateTeamName(team_name, req.user?.team_id, req.user?.id);
        const data = await this.getTemplateData(template_id);
        if (data) {
            data.team_id = req.user?.team_id || null;
            data.user_id = req.user?.id || null;
            data.folder_id = null;
            data.category_id = null;
            data.status_id = await this.getDefaultProjectStatus();
            data.project_created_log = constants_1.LOG_DESCRIPTIONS.PROJECT_CREATED;
            data.project_member_added_log = constants_1.LOG_DESCRIPTIONS.PROJECT_MEMBER_ADDED;
            data.health_id = await this.getDefaultProjectHealth();
            data.working_days = 0;
            data.man_days = 0;
            data.hours_per_day = 8;
            project_id = await this.importTemplate(data);
            await this.insertTeamLabels(data.labels, req.user?.team_id);
            await this.insertProjectPhases(data.phases, project_id);
            await this.insertProjectTasks(data.tasks, data.team_id, project_id, data.user_id, io_1.IO.getSocketById(req.user?.socket_id));
            await this.handleAccountSetup(project_id, data.user_id, team_name);
            return res.status(200).send(new server_response_1.ServerResponse(true, { id: project_id }));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, { id: project_id }));
    }
    static async importCustomTemplate(req, res) {
        const { template_id } = req.body;
        let project_id = null;
        const data = await this.getCustomTemplateData(template_id);
        if (data) {
            data.team_id = req.user?.team_id || null;
            data.user_id = req.user?.id || null;
            data.folder_id = null;
            data.category_id = null;
            data.status_id = await this.getDefaultProjectStatus();
            data.project_created_log = constants_1.LOG_DESCRIPTIONS.PROJECT_CREATED;
            data.project_member_added_log = constants_1.LOG_DESCRIPTIONS.PROJECT_MEMBER_ADDED;
            data.working_days = 0;
            data.man_days = 0;
            data.hours_per_day = 8;
            project_id = await this.importTemplate(data);
            await this.deleteDefaultStatusForProject(project_id);
            await this.insertTeamLabels(data.labels, req.user?.team_id);
            await this.insertProjectPhases(data.phases, project_id);
            await this.insertProjectStatuses(data.status, project_id, data.team_id);
            await this.insertProjectTasksFromCustom(data.tasks, data.team_id, project_id, data.user_id, io_1.IO.getSocketById(req.user?.socket_id));
            return res.status(200).send(new server_response_1.ServerResponse(true, { project_id }));
        }
        return res.status(200).send(new server_response_1.ServerResponse(true, { project_id }));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectTemplatesController, "getTemplates", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectTemplatesController, "getCustomTemplates", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectTemplatesController, "deleteCustomTemplate", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectTemplatesController, "getDefaultProjectStatus", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectTemplatesController, "getDefaultProjectHealth", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectTemplatesController, "getTemplateById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectTemplatesController, "createTemplates", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectTemplatesController, "importTemplates", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)({
        raisedExceptions: {
            "TEMPLATE_EXISTS_ERROR": `A template with the name "{0}" already exists. Please choose a different name.`
        }
    })
], ProjectTemplatesController, "createCustomTemplate", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectTemplatesController, "setupAccount", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ProjectTemplatesController, "importCustomTemplate", null);
exports.default = ProjectTemplatesController;
