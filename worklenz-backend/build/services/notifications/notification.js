"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorklenzNotification {
    team;
    team_id;
    message;
    url;
    project;
    color;
    params;
    task_id;
    project_id;
    constructor(teamName, teamId, message, url) {
        this.team = teamName;
        this.team_id = teamId;
        this.message = message;
        this.url = url;
    }
    setProject(name) {
        this.project = name;
    }
    setColor(code) {
        this.color = code;
    }
    setParams(params) {
        this.params = params;
    }
    setTaskId(id) {
        this.task_id = id;
    }
    setProjectId(id) {
        this.project_id = id;
    }
}
exports.default = WorklenzNotification;
