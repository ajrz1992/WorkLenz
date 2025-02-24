"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startCronJobs = void 0;
const daily_digest_job_1 = require("./daily-digest-job");
const notifications_job_1 = require("./notifications-job");
const project_digest_job_1 = require("./project-digest-job");
function startCronJobs() {
    (0, notifications_job_1.startNotificationsJob)();
    (0, daily_digest_job_1.startDailyDigestJob)();
    (0, project_digest_job_1.startProjectDigestJob)();
}
exports.startCronJobs = startCronJobs;
