"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const pg_1 = require("pg");
const db_config_1 = tslib_1.__importDefault(require("../config/db-config"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const email_notifications_1 = require("../shared/email-notifications");
const helpers_1 = require("../cron_jobs/helpers");
class DbTaskStatusChangeListener {
    static connected = false;
    static async connect() {
        try {
            const client = new pg_1.Client(db_config_1.default);
            await client.connect();
            await client.query("UNLISTEN db_task_status_changed");
            await client.query("LISTEN db_task_status_changed");
            client.on("notification", (notification) => {
                if (notification.channel === "db_task_status_changed") {
                    const taskId = notification.payload;
                    if (taskId) {
                        void this.sendEmails(taskId);
                    }
                }
            });
            client.on("error", (err) => {
                this.error(err);
            });
            console.info("DbTaskStatusChangeListener connected.");
        }
        catch (err) {
            this.error(err);
        }
    }
    static disconnect() {
        if (!this.connected)
            return;
        console.info("DbTaskStatusChangeListener disconnected.");
    }
    static error(err) {
        this.connected = false;
        console.error("DbTaskStatusChangeListener disconnected with errors.", err);
    }
    static async sendEmails(taskId) {
        const q = `
      WITH subscribers AS (
        --
        SELECT t.name AS task_name,
               u.name AS user_name,
               ts.task_id,
               u.email,
               (SELECT project_id FROM tasks WHERE id = ts.task_id) AS project_id,
               (SELECT name
                FROM teams
                WHERE id = (SELECT team_id FROM team_members WHERE id = ts.team_member_id)) AS team_name,
               (SELECT STRING_AGG(DISTINCT
                                  (SELECT name
                                   FROM team_member_info_view
                                   WHERE team_member_id = tasks_assignees.team_member_id),
                                  ', ')
                FROM tasks_assignees
                WHERE task_id = ts.task_id) AS members
        FROM task_subscribers ts
               LEFT JOIN users u ON u.id = ts.user_id
               LEFT JOIN tasks t ON t.id = ts.task_id
        WHERE ts.task_id = $1
        ORDER BY ts.created_at
        --
      )
      SELECT task_name,
             user_name,
             task_id,
             email,
             project_id,
             team_name,
             members,
             (SELECT name FROM projects WHERE id = project_id) AS project_name
      FROM subscribers;
    `;
        const result = await db_1.default.query(q, [taskId]);
        for (const data of result.rows) {
            const taskUrl = `${(0, helpers_1.getBaseUrl)()}/worklenz/projects/${data.project_id}?tab=tasks-list&task=${data.task_id}`;
            const settingsUrl = `${(0, helpers_1.getBaseUrl)()}/worklenz/settings/notifications`;
            const task = {
                name: data.task_name,
                members: data.members,
                url: taskUrl,
                team_name: data.team_name,
                project_name: data.project_name
            };
            const payload = {
                greeting: `Hi ${data.user_name}`,
                summary: "Great news! a task just got completed!",
                settings_url: settingsUrl,
                task
            };
            void (0, email_notifications_1.sendTaskDone)([data.email], payload);
        }
    }
}
exports.default = DbTaskStatusChangeListener;
