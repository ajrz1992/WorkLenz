"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapProjects = exports.mapTeams = exports.getBaseUrl = exports.mapMembersWithAnd = void 0;
const utils_1 = require("../shared/utils");
function mapMembersWithAnd(members) {
    const $members = members.split(",").map(m => m.trim());
    if ($members.length > 1) {
        const last = $members.pop();
        const end = last ? ` and ${last}` : "";
        return `${$members.join(", ")}${end}`;
    }
    return "";
}
exports.mapMembersWithAnd = mapMembersWithAnd;
function getBaseUrl() {
    if ((0, utils_1.isLocalServer)())
        return `http://${process.env.HOSTNAME}`;
    return `https://${process.env.HOSTNAME}`;
}
exports.getBaseUrl = getBaseUrl;
function mapMembers(project) {
    for (const task of project.tasks || []) {
        if (task.members)
            task.members = mapMembersWithAnd(task.members);
    }
}
function updateUrls(project) {
    project.url = `${getBaseUrl()}/worklenz/projects/${project.id}`;
    if (project.tasks) {
        project.tasks = project.tasks.map(task => {
            if (task.id)
                task.url = `${project.url}?task=${task.id}`;
            return task;
        });
    }
}
function mapTeams(data) {
    if (!data)
        return [];
    const result = [];
    for (const item of data || []) {
        const projects = item.projects?.filter(project => project.tasks?.length);
        for (const project of projects || []) {
            if (project.id) {
                mapMembers(project);
                updateUrls(project);
            }
        }
        if (projects?.length) {
            item.projects = projects;
            result.push(item);
        }
    }
    return result;
}
exports.mapTeams = mapTeams;
function mapProjects(data) {
    if (!data)
        return [];
    const result = [];
    for (const item of data || []) {
        const projects = item.projects?.filter(project => project.tasks?.length);
        for (const project of projects || []) {
            if (project.id) {
                mapMembers(project);
                updateUrls(project);
                result.push(project);
            }
        }
    }
    return result;
}
exports.mapProjects = mapProjects;
