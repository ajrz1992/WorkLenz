"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPhaseChange = exports.logDescriptionChange = exports.logPriorityChange = exports.logStatusChange = exports.logLabelsUpdate = exports.logMemberAssignment = exports.logTotalMinutes = exports.logNameChange = exports.logEndDateChange = exports.logStartDateChange = exports.getTaskPhaseDetails = exports.getTaskDetails = exports.insertToActivityLogs = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const interfaces_1 = require("./interfaces");
const utils_1 = require("../../shared/utils");
const moment_1 = tslib_1.__importDefault(require("moment"));
const util_1 = require("../../socket.io/util");
async function insertToActivityLogs(activityLog) {
    try {
        const { task_id, attribute_type, user_id, log_type, old_value, new_value, next_string } = activityLog;
        const q = `
      INSERT INTO task_activity_logs (task_id, team_id, attribute_type, user_id, log_type, old_value, new_value, next_string, project_id)
      VALUES (
        $1,
        (SELECT team_id FROM projects WHERE id = (SELECT project_id FROM tasks WHERE tasks.id = $1)),
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        (SELECT project_id FROM tasks WHERE tasks.id = $1));
    `;
        await db_1.default.query(q, [task_id, attribute_type, user_id, log_type, old_value, new_value, next_string]);
    }
    catch (e) {
        (0, utils_1.log_error)(e);
    }
}
exports.insertToActivityLogs = insertToActivityLogs;
async function getTaskDetails(task_id, column) {
    try {
        const q = `SELECT ${column}
               FROM tasks
               WHERE id = $1;`;
        const result = await db_1.default.query(q, [task_id]);
        const [data] = result.rows;
        return data;
    }
    catch (e) {
        (0, utils_1.log_error)(e);
    }
}
exports.getTaskDetails = getTaskDetails;
async function getTaskPhaseDetails(task_id) {
    try {
        const q = `SELECT phase_id FROM task_phase WHERE task_id = $1`;
        const result = await db_1.default.query(q, [task_id]);
        const [data] = result.rows;
        return data ? data : { phase_id: null };
    }
    catch (e) {
        (0, utils_1.log_error)(e);
    }
}
exports.getTaskPhaseDetails = getTaskPhaseDetails;
async function logStartDateChange(activityLog) {
    const { task_id, new_value, old_value } = activityLog;
    if (!task_id || !activityLog.socket)
        return;
    if (!((0, moment_1.default)(old_value).isSame((0, moment_1.default)(new_value), "date"))) {
        activityLog.user_id = (0, util_1.getLoggedInUserIdFromSocket)(activityLog.socket);
        activityLog.log_type = interfaces_1.IActivityLogChangeType.UPDATE;
        activityLog.attribute_type = interfaces_1.IActivityLogAttributeTypes.START_DATE;
        activityLog.new_value = activityLog.new_value ? (0, moment_1.default)(activityLog.new_value).format("YYYY-MM-DD") : null;
        activityLog.old_value = activityLog.old_value ? (0, moment_1.default)(activityLog.old_value).format("YYYY-MM-DD") : null;
        insertToActivityLogs(activityLog);
    }
}
exports.logStartDateChange = logStartDateChange;
async function logEndDateChange(activityLog) {
    const { task_id, new_value, old_value } = activityLog;
    if (!task_id || !activityLog.socket)
        return;
    if (!((0, moment_1.default)(old_value).isSame((0, moment_1.default)(new_value), "date"))) {
        activityLog.user_id = (0, util_1.getLoggedInUserIdFromSocket)(activityLog.socket);
        activityLog.log_type = interfaces_1.IActivityLogChangeType.UPDATE;
        activityLog.attribute_type = interfaces_1.IActivityLogAttributeTypes.END_DATE;
        activityLog.new_value = activityLog.new_value ? (0, moment_1.default)(activityLog.new_value).format("YYYY-MM-DD") : null;
        activityLog.old_value = activityLog.old_value ? (0, moment_1.default)(activityLog.old_value).format("YYYY-MM-DD") : null;
        insertToActivityLogs(activityLog);
    }
}
exports.logEndDateChange = logEndDateChange;
async function logNameChange(activityLog) {
    const { task_id, new_value, old_value } = activityLog;
    if (!task_id || !activityLog.socket)
        return;
    if (old_value !== new_value) {
        activityLog.user_id = (0, util_1.getLoggedInUserIdFromSocket)(activityLog.socket);
        activityLog.log_type = interfaces_1.IActivityLogChangeType.UPDATE;
        activityLog.attribute_type = interfaces_1.IActivityLogAttributeTypes.NAME;
        insertToActivityLogs(activityLog);
    }
}
exports.logNameChange = logNameChange;
async function logTotalMinutes(activityLog) {
    const { task_id, new_value, old_value } = activityLog;
    if (!task_id || !activityLog.socket)
        return;
    if (old_value !== new_value) {
        activityLog.user_id = (0, util_1.getLoggedInUserIdFromSocket)(activityLog.socket);
        activityLog.log_type = interfaces_1.IActivityLogChangeType.UPDATE;
        activityLog.attribute_type = interfaces_1.IActivityLogAttributeTypes.ESTIMATION;
        insertToActivityLogs(activityLog);
    }
}
exports.logTotalMinutes = logTotalMinutes;
async function logMemberAssignment(activityLog) {
    const { task_id, new_value, old_value } = activityLog;
    const q = `SELECT user_id, name
             FROM team_member_info_view
             WHERE team_member_id = $1;`;
    const result = await db_1.default.query(q, [new_value]);
    const [data] = result.rows;
    if (!task_id || !activityLog.socket)
        return;
    if (old_value !== new_value) {
        activityLog.new_value = data.user_id || null;
        activityLog.user_id = (0, util_1.getLoggedInUserIdFromSocket)(activityLog.socket);
        activityLog.log_type = activityLog.assign_type === "ASSIGN" ? interfaces_1.IActivityLogChangeType.ASSIGN : interfaces_1.IActivityLogChangeType.UNASSIGN;
        activityLog.attribute_type = interfaces_1.IActivityLogAttributeTypes.ASSIGNEES;
        activityLog.next_string = data.name || null;
        insertToActivityLogs(activityLog);
    }
}
exports.logMemberAssignment = logMemberAssignment;
async function logLabelsUpdate(activityLog) {
    const { task_id, new_value, old_value } = activityLog;
    const q = `SELECT EXISTS(SELECT task_id FROM task_labels WHERE task_id = $1 AND label_id = $2)`;
    const result = await db_1.default.query(q, [task_id, new_value]);
    const [data] = result.rows;
    activityLog.log_type = data.exists ? interfaces_1.IActivityLogChangeType.CREATE : interfaces_1.IActivityLogChangeType.DELETE;
    if (!task_id || !activityLog.socket)
        return;
    if (old_value !== new_value) {
        activityLog.user_id = (0, util_1.getLoggedInUserIdFromSocket)(activityLog.socket);
        activityLog.attribute_type = interfaces_1.IActivityLogAttributeTypes.LABEL;
        insertToActivityLogs(activityLog);
    }
}
exports.logLabelsUpdate = logLabelsUpdate;
async function logStatusChange(activityLog) {
    const { task_id, new_value, old_value } = activityLog;
    if (!task_id || !activityLog.socket)
        return;
    if (old_value !== new_value) {
        activityLog.user_id = (0, util_1.getLoggedInUserIdFromSocket)(activityLog.socket);
        activityLog.attribute_type = interfaces_1.IActivityLogAttributeTypes.STATUS;
        activityLog.log_type = interfaces_1.IActivityLogChangeType.UPDATE;
        insertToActivityLogs(activityLog);
    }
}
exports.logStatusChange = logStatusChange;
async function logPriorityChange(activityLog) {
    const { task_id, new_value, old_value } = activityLog;
    if (!task_id || !activityLog.socket)
        return;
    if (old_value !== new_value) {
        activityLog.user_id = (0, util_1.getLoggedInUserIdFromSocket)(activityLog.socket);
        activityLog.attribute_type = interfaces_1.IActivityLogAttributeTypes.PRIORITY;
        activityLog.log_type = interfaces_1.IActivityLogChangeType.UPDATE;
        insertToActivityLogs(activityLog);
    }
}
exports.logPriorityChange = logPriorityChange;
async function logDescriptionChange(activityLog) {
    const { task_id, new_value, old_value } = activityLog;
    if (!task_id || !activityLog.socket)
        return;
    if (old_value !== new_value) {
        activityLog.user_id = (0, util_1.getLoggedInUserIdFromSocket)(activityLog.socket);
        activityLog.attribute_type = interfaces_1.IActivityLogAttributeTypes.DESCRIPTION;
        activityLog.log_type = interfaces_1.IActivityLogChangeType.UPDATE;
        insertToActivityLogs(activityLog);
    }
}
exports.logDescriptionChange = logDescriptionChange;
async function logPhaseChange(activityLog) {
    const { task_id, new_value, old_value } = activityLog;
    if (!task_id || !activityLog.socket)
        return;
    if (old_value !== new_value) {
        activityLog.user_id = (0, util_1.getLoggedInUserIdFromSocket)(activityLog.socket);
        activityLog.attribute_type = interfaces_1.IActivityLogAttributeTypes.PHASE;
        activityLog.log_type = interfaces_1.IActivityLogChangeType.UPDATE;
        insertToActivityLogs(activityLog);
    }
}
exports.logPhaseChange = logPhaseChange;
