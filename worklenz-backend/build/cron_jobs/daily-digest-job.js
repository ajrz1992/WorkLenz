"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startDailyDigestJob = void 0;
const tslib_1 = require("tslib");
const cron_1 = require("cron");
const moment_1 = tslib_1.__importDefault(require("moment"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const email_notifications_1 = require("../shared/email-notifications");
const utils_1 = require("../shared/utils");
const helpers_1 = require("./helpers");
const TIME = "0 11 */1 * 1-5";
const log = (value) => console.log("daily-digest-cron-job:", value);
async function onDailyDigestJobTick() {
    try {
        log("(cron) Daily digest job started.");
        const q = "SELECT get_daily_digest() AS digest;";
        const result = await db_1.default.query(q, []);
        const [fn] = result.rows;
        const dataset = fn.digest || [];
        let sentCount = 0;
        for (const digest of dataset) {
            digest.greeting = `Hi ${digest.name},`;
            digest.note = `Here's your ${(0, moment_1.default)().format("dddd")} update!`;
            digest.base_url = `${(0, helpers_1.getBaseUrl)()}/worklenz`;
            digest.settings_url = `${(0, helpers_1.getBaseUrl)()}/worklenz/settings/notifications`;
            digest.recently_assigned = (0, helpers_1.mapTeams)(digest.recently_assigned);
            digest.overdue = (0, helpers_1.mapTeams)(digest.overdue);
            digest.recently_completed = (0, helpers_1.mapTeams)(digest.recently_completed);
            if (digest.recently_assigned?.length || digest.overdue?.length || digest.recently_completed?.length) {
                sentCount++;
                void (0, email_notifications_1.sendDailyDigest)(digest.email, digest);
            }
        }
        log(`(cron) Daily digest job ended with ${sentCount} emails.`);
    }
    catch (error) {
        (0, utils_1.log_error)(error);
        log("(cron) Daily digest job ended with errors.");
    }
}
function startDailyDigestJob() {
    log("(cron) Daily digest job ready.");
    const job = new cron_1.CronJob(TIME, () => void onDailyDigestJobTick(), () => log("(cron) Daily Digest job successfully executed."), true);
    job.start();
}
exports.startDailyDigestJob = startDailyDigestJob;
