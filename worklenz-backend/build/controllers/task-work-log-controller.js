"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const exceljs_1 = tslib_1.__importDefault(require("exceljs"));
const moment_1 = tslib_1.__importDefault(require("moment"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const utils_1 = require("../shared/utils");
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
const moment_timezone_1 = tslib_1.__importDefault(require("moment-timezone"));
class TaskWorklogController extends worklenz_controller_base_1.default {
    static async create(req, res) {
        const { id, seconds_spent, description, created_at, formatted_start } = req.body;
        const q = `INSERT INTO task_work_log (time_spent, description, task_id, user_id, created_at)
               VALUES ($1, $2, $3, $4, $5);`;
        const params = [seconds_spent, description, id, req.user?.id, formatted_start];
        const result = await db_1.default.query(q, params);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getTimeLogs(id, timeZone) {
        if (!id)
            return [];
        const q = `
      WITH time_logs AS (
        --
        SELECT id,
               description,
               time_spent,
               created_at,
               user_id,
               logged_by_timer,
               (SELECT name FROM users WHERE users.id = task_work_log.user_id) AS user_name,
               (SELECT email FROM users WHERE users.id = task_work_log.user_id) AS user_email,
               (SELECT avatar_url FROM users WHERE users.id = task_work_log.user_id) AS avatar_url
        FROM task_work_log
        WHERE task_id = $1
        --
      )
      SELECT id,
             time_spent,
             description,
             created_at,
             user_id,
             logged_by_timer,
             created_at AS start_time,
             (created_at + INTERVAL '1 second' * time_spent) AS end_time,
             user_name,
             user_email,
             avatar_url
      FROM time_logs
      ORDER BY created_at DESC;
    `;
        const result = await db_1.default.query(q, [id]);
        if (timeZone) {
            for (const res of result.rows) {
                res.start_time = moment_timezone_1.default.tz(res.start_time, `${timeZone}`).format();
                res.end_time = moment_timezone_1.default.tz(res.end_time, `${timeZone}`).format();
            }
        }
        return result.rows;
    }
    static async getByTask(req, res) {
        const results = await this.getTimeLogs(req.params.id, req.query.time_zone_name);
        for (const item of results)
            item.avatar_color = (0, utils_1.getColor)(item.user_name);
        return res.status(200).send(new server_response_1.ServerResponse(true, results));
    }
    static async update(req, res) {
        const { seconds_spent, description, created_at, formatted_start } = req.body;
        const q = `
      UPDATE task_work_log
      SET time_spent  = $3,
          description = $4,
          created_at  = $5
      WHERE id = $1
        AND user_id = $2;
    `;
        const params = [req.params.id, req.user?.id, seconds_spent, description || null, formatted_start];
        const result = await db_1.default.query(q, params);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async deleteById(req, res) {
        const q = `DELETE
               FROM task_work_log
               WHERE id = $1
                 AND task_id = $2
                 AND user_id = $3;`;
        const result = await db_1.default.query(q, [req.params.id, req.query.task, req.user?.id]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
    static async getExportMetadata(id) {
        const q = `SELECT name, (SELECT name FROM projects WHERE id = tasks.project_id) AS project_name
               FROM tasks
               WHERE id = $1;`;
        const result = await db_1.default.query(q, [id]);
        return result.rows[0] || null;
    }
    static async getUserTimeZone(id) {
        if (id) {
            const q = `SELECT utc_offset
                 FROM timezones
                 WHERE id = (SELECT timezone_id FROM users WHERE id = $1);`;
            const result = await db_1.default.query(q, [id]);
            const [data] = result.rows;
            return data.utc_offset || null;
        }
    }
    static async exportLog(req, res) {
        const results = await this.getTimeLogs(req.params.id, req.query.timeZone);
        const metadata = await this.getExportMetadata(req.params.id);
        const timezone = await this.getUserTimeZone(req.user?.id || "");
        const exportDate = (0, moment_1.default)().format("MMM-DD-YYYY");
        const fileName = `${exportDate} - Task Timelog`;
        const title = metadata.name.replace(/[\*\?\:\/\\\[\]]/g, "-");
        const workbook = new exceljs_1.default.Workbook();
        const sheet = workbook.addWorksheet(title);
        sheet.headerFooter = {
            firstHeader: title
        };
        sheet.columns = [
            { header: "Reporter Name", key: "user_name", width: 25 },
            { header: "Reporter Email", key: "user_email", width: 25 },
            { header: "Start Time", key: "start_time", width: 25 },
            { header: "End Time", key: "end_time", width: 25 },
            { header: "Date", key: "created_at", width: 25 },
            { header: "Work Description", key: "description", width: 25 },
            { header: "Duration", key: "time_spent", width: 25 },
        ];
        sheet.getCell("A1").value = metadata.project_name;
        sheet.mergeCells("A1:G1");
        sheet.getCell("A1").alignment = { horizontal: "center" };
        sheet.getCell("A2").value = `${metadata.name} (${exportDate})`;
        sheet.mergeCells("A2:G2");
        sheet.getCell("A2").alignment = { horizontal: "center" };
        sheet.getRow(4).values = [
            "Reporter Name",
            "Reporter Email",
            "Start Time",
            "End Time",
            "Date",
            "Work Description",
            "Duration",
        ];
        const timeFormat = "MMM DD, YYYY h:mm:ss a";
        let totalLogged = 0;
        for (const item of results) {
            totalLogged += parseFloat((item.time_spent || 0).toString());
            const data = {
                user_name: item.user_name,
                user_email: item.user_email,
                start_time: (0, moment_1.default)(item.start_time).add(timezone.hours || 0, "hours").add(timezone.minutes || 0, "minutes").format(timeFormat),
                end_time: (0, moment_1.default)(item.end_time).add(timezone.hours || 0, "hours").add(timezone.minutes || 0, "minutes").format(timeFormat),
                created_at: (0, moment_1.default)(item.created_at).add(timezone.hours || 0, "hours").add(timezone.minutes || 0, "minutes").format(timeFormat),
                description: item.description || "-",
                time_spent: (0, utils_1.formatDuration)(moment_1.default.duration(item.time_spent, "seconds")),
            };
            sheet.addRow(data);
        }
        sheet.getCell("A1").style.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "D9D9D9" }
        };
        sheet.getCell("A1").font = {
            size: 16
        };
        sheet.getCell("A2").style.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "F2F2F2" }
        };
        sheet.getCell("A2").font = {
            size: 12
        };
        sheet.getRow(4).font = {
            bold: true
        };
        sheet.addRow({
            user_name: "",
            user_email: "",
            start_time: "Total",
            end_time: "",
            description: "",
            created_at: "",
            time_spent: (0, utils_1.formatDuration)(moment_1.default.duration(totalLogged, "seconds")),
        });
        sheet.mergeCells(`A${sheet.rowCount}:F${sheet.rowCount}`);
        sheet.getCell(`A${sheet.rowCount}`).value = "Total";
        sheet.getCell(`A${sheet.rowCount}`).alignment = {
            horizontal: "right"
        };
        res.setHeader("Content-Type", "application/vnd.openxmlformats");
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res)
            .then(() => {
            res.end();
        });
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskWorklogController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskWorklogController, "getByTask", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskWorklogController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskWorklogController, "deleteById", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TaskWorklogController, "exportLog", null);
exports.default = TaskWorklogController;
