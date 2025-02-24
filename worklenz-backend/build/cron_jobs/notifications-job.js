"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startNotificationsJob = void 0;
const tslib_1 = require("tslib");
const cron_1 = require("cron");
const db_1 = tslib_1.__importDefault(require("../config/db"));
const email_notifications_1 = require("../shared/email-notifications");
const utils_1 = require("../shared/utils");
const helpers_1 = require("./helpers");
const TIME = "*/10 * * * *";
const log = (value) => console.log("notifications-cron-job:", value);
function getModel(model) {
    const mappedModel = { ...model };
    mappedModel.name = mappedModel.name?.split(" ")[0] || "";
    mappedModel.url = `${(0, helpers_1.getBaseUrl)()}/worklenz/team/member/${mappedModel.team_member_id}`;
    mappedModel.settings_url = `${(0, helpers_1.getBaseUrl)()}/worklenz/settings/notifications`;
    const teams = [];
    for (const team of model.teams || []) {
        team.projects = (0, helpers_1.mapProjects)([team]);
        if (team.projects.length)
            teams.push(team);
    }
    mappedModel.teams = teams;
    return mappedModel;
}
async function onNotificationJobTick() {
    try {
        log("(cron) Notifications job started.");
        const q = "SELECT get_task_updates() AS updates;";
        const result = await db_1.default.query(q, []);
        const [data] = result.rows;
        const updates = (data.updates || []);
        let sentCount = 0;
        for (const item of updates) {
            if (item.email) {
                const model = getModel(item);
                if (model.teams?.length) {
                    sentCount++;
                    void (0, email_notifications_1.sendAssignmentUpdate)(item.email, model);
                }
            }
        }
        log(`(cron) Notifications job ended with ${sentCount} emails.`);
    }
    catch (error) {
        (0, utils_1.log_error)(error);
        log("(cron) Notifications job ended with errors.");
    }
}
function startNotificationsJob() {
    log("(cron) Email notifications job ready.");
    const job = new cron_1.CronJob(TIME, () => void onNotificationJobTick(), () => log("(cron) Notifications job successfully executed."), true);
    job.start();
}
exports.startNotificationsJob = startNotificationsJob;
