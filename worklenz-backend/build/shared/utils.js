"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLogText = exports.int = exports.calculateMonthDays = exports.formatDuration = exports.isUnicode = exports.unescape = exports.escape = exports.sanitize = exports.getRandomColorCode = exports.humanFileSize = exports.toRound = exports.toMilliseconds = exports.toSeconds = exports.toMinutes = exports.getColor = exports.toTsQuery = exports.isValidateEmail = exports.smallId = exports.slugify = exports.isInternalServer = exports.isLocalServer = exports.isTestServer = exports.isProduction = exports.log_error = void 0;
const tslib_1 = require("tslib");
const slugify_1 = tslib_1.__importDefault(require("slugify"));
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const sanitize_html_1 = tslib_1.__importDefault(require("sanitize-html"));
const nanoid_1 = require("nanoid");
const constants_1 = require("./constants");
const slack_1 = require("./slack");
const interfaces_1 = require("../services/activity-logs/interfaces");
const error_codes = require("./postgresql-error-codes");
function log_error(error, user = null, sendToSlack = true) {
    const msg = error_codes[error.code];
    if (msg) {
        console.log("\n==== BEGIN ERROR ====\n");
        console.trace(`ERROR [${error.code}]: ${msg}\n`);
    }
    console.log("\n");
    console.error(error);
    console.log("\n==== END ERROR ====\n");
    const err = user ? {
        user: user || null,
        error
    } : error;
    if (sendToSlack)
        (0, slack_1.send_to_slack)(err);
}
exports.log_error = log_error;
function isProduction() {
    return process.env.NODE_ENV === "production";
}
exports.isProduction = isProduction;
function isTestServer() {
    const hostname = process.env.HOSTNAME;
    return hostname === "dev.worklenz.com" || hostname === "uat.app.worklenz.com";
}
exports.isTestServer = isTestServer;
function isLocalServer() {
    const hostname = process.env.HOSTNAME;
    return hostname === "localhost:4200" || hostname === "localhost:3000" || hostname === "127.0.0.1:3000";
}
exports.isLocalServer = isLocalServer;
function isInternalServer() {
    return isLocalServer() || isTestServer();
}
exports.isInternalServer = isInternalServer;
function slugify(str) {
    return (0, slugify_1.default)(str || "", {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: true,
    });
}
exports.slugify = slugify;
function smallId(len) {
    return (0, nanoid_1.customAlphabet)("0123456789", len)();
}
exports.smallId = smallId;
function isValidateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
exports.isValidateEmail = isValidateEmail;
function toTsQuery(value) {
    return `${value.replace(/\s/g, "+").replace(/\(|\)/g, "")}:*`;
}
exports.toTsQuery = toTsQuery;
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
function numberToAlpha(num) {
    if (num < 1 || num > 26) {
        throw new Error("Number must be between 1 and 26.");
    }
    const asciiCode = num + 64;
    return String.fromCharCode(asciiCode);
}
function getColor(name, next = false) {
    const char = name?.replace(/[^a-zA-Z0-9]/g, "").charAt(0).toUpperCase() || "A";
    const map = /\d/.test(char)
        ? constants_1.NumbersColorMap
        : constants_1.AvatarNamesMap;
    return map[next ? nextChar(char) || char : char];
}
exports.getColor = getColor;
function toMinutes(hours, minutes) {
    return ~~((hours || 0) * 60) + (minutes || 0);
}
exports.toMinutes = toMinutes;
function toSeconds(hours, minutes, seconds) {
    return (hours * 3600) + (minutes * 60) + seconds;
}
exports.toSeconds = toSeconds;
function toMilliseconds(hours, minutes, seconds) {
    return ((hours * 3600) + (minutes * 60) + seconds) * 1000;
}
exports.toMilliseconds = toMilliseconds;
function toRound(value) {
    return /\d+/.test(value)
        ? Math.ceil(+value)
        : 0;
}
exports.toRound = toRound;
function humanFileSize(size) {
    const i = size == 0 ? 0 : ~~(Math.log(size) / Math.log(1024));
    return `${(+(size / Math.pow(1024, i)).toFixed(2))} ${["B", "KB", "MB", "GB", "TB"][i]}`;
}
exports.humanFileSize = humanFileSize;
function getRandomColorCode() {
    return constants_1.WorklenzColorCodes[~~(Math.random() * constants_1.WorklenzColorCodes.length)];
}
exports.getRandomColorCode = getRandomColorCode;
function sanitize(value) {
    if (!value)
        return "";
    const escapedString = value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
    return (0, sanitize_html_1.default)(escapedString);
}
exports.sanitize = sanitize;
function escape(value) {
    return lodash_1.default.escape((0, sanitize_html_1.default)(value));
}
exports.escape = escape;
function unescape(value) {
    return lodash_1.default.unescape(value);
}
exports.unescape = unescape;
function isUnicode(value) {
    for (let i = 0, n = value.length; i < n; i++) {
        if (value.charCodeAt(i) > 255)
            return true;
    }
    return false;
}
exports.isUnicode = isUnicode;
function formatDuration(duration) {
    const empty = "0h 0m";
    let format = "";
    if (duration.asMilliseconds() === 0)
        return empty;
    const h = ~~(duration.asHours());
    const m = duration.minutes();
    const s = duration.seconds();
    if (h === 0 && s > 0) {
        format = `${m}m ${s}s`;
    }
    else if (h > 0 && s === 0) {
        format = `${h}h ${m}m`;
    }
    else if (h > 0 && s > 0) {
        format = `${h}h ${m}m ${s}s`;
    }
    else {
        format = `${h}h ${m}m`;
    }
    return format;
}
exports.formatDuration = formatDuration;
function calculateMonthDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInMilliseconds = Math.abs(end.getTime() - start.getTime());
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const remainingDays = days % 30;
    return `${months} ${months > 1 ? "months" : "month"} ${remainingDays} ${remainingDays !== 1 ? "days" : "day"}`;
}
exports.calculateMonthDays = calculateMonthDays;
function int(value) {
    return isNaN(+value) ? 0 : +value;
}
exports.int = int;
function formatLogText(log) {
    if (log.log_type === interfaces_1.IActivityLogChangeType.ASSIGN)
        return "added an ";
    if (log.log_type === interfaces_1.IActivityLogChangeType.UNASSIGN)
        return "removed an ";
    if (log.log_type === interfaces_1.IActivityLogChangeType.UPDATE)
        return "updated the ";
    if (log.log_type === interfaces_1.IActivityLogChangeType.CREATE)
        return "added a ";
    if (log.log_type === interfaces_1.IActivityLogChangeType.DELETE)
        return "removed a ";
    return log.log_type;
}
exports.formatLogText = formatLogText;
