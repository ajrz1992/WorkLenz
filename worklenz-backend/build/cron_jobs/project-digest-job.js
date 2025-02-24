"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startProjectDigestJob = void 0;
const tslib_1 = require("tslib");
const cron_1 = require("cron");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const utils_1 = require("../shared/utils");
const helpers_1 = require("./helpers");
const email_notifications_1 = require("../shared/email-notifications");
const TIME = "0 11 */1 * 1-5";
const log = (value) => console.log("project-digest-cron-job:", value);
function updateTaskUrls(projectId, tasks) {
    const baseUrl = (0, helpers_1.getBaseUrl)();
    for (const task of tasks) {
        task.url = `${baseUrl}/worklenz/projects/${projectId}?tab=tasks-list&task=${task.id}`;
    }
}
function updateMetadata(project, subscriberName) {
    project.greeting = `Hi ${subscriberName},`;
    project.summary = `Here's the "${project.name}" summary | ${project.team_name}`;
    project.settings_url = `${(0, helpers_1.getBaseUrl)()}/worklenz/settings/notifications`;
    project.project_url = `${(0, helpers_1.getBaseUrl)()}/worklenz/projects/${project.id}?tab=tasks-list`;
}
async function onProjectDigestJobTick() {
    try {
        log("(cron) Daily digest job started.");
        const q = "SELECT get_project_daily_digest() AS digest;";
        const result = await db_1.default.query(q, []);
        const [fn] = result.rows;
        const dataset = fn.digest || [];
        let sentCount = 0;
        for (const project of dataset) {
            for (const subscriber of project.subscribers) {
                updateMetadata(project, subscriber.name);
                updateTaskUrls(project.id, project.today_completed);
                updateTaskUrls(project.id, project.today_new);
                updateTaskUrls(project.id, project.due_tomorrow);
                if (subscriber.email) {
                    sentCount++;
                    void (0, email_notifications_1.sendProjectDailyDigest)(subscriber.email, project);
                }
            }
        }
        log(`(cron) Project digest job ended with ${sentCount} emails.`);
    }
    catch (error) {
        (0, utils_1.log_error)(error);
        log("(cron) Project digest job ended with errors.");
    }
}
function startProjectDigestJob() {
    log("(cron) Project digest job ready.");
    const job = new cron_1.CronJob(TIME, () => void onProjectDigestJobTick(), () => log("(cron) Project Digest job successfully executed."), true);
    job.start();
}
exports.startProjectDigestJob = startProjectDigestJob;
