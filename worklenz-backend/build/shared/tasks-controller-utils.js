"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatesForResourceAllocation = exports.getMinMaxOfTaskDates = exports.getMonthRange = exports.getWeekRange = exports.getDates = exports.isToday = exports.isLastDayOfWeek = exports.isSunday = exports.isWeekend = void 0;
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importStar(require("moment"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function isWeekend(date) {
    return date.getDay() == 0 || date.getDay() == 6;
}
exports.isWeekend = isWeekend;
function isSunday(date) {
    return date.getDay() == 0;
}
exports.isSunday = isSunday;
function isLastDayOfWeek(date) {
    return isSunday(new Date(date));
}
exports.isLastDayOfWeek = isLastDayOfWeek;
function isToday(date) {
    return (0, moment_1.default)().isSame((0, moment_1.default)(date).format("YYYY-MM-DD"), "day");
}
exports.isToday = isToday;
async function getDates(startDate = "", endDate = "") {
    let datesToAdd = 21;
    const currentDuration = (0, moment_1.default)(endDate).diff((0, moment_1.default)(startDate), "days");
    if (currentDuration < 100)
        datesToAdd = 100 - currentDuration;
    const start = (0, moment_1.default)(startDate).subtract("1", "day").format("YYYY-MM-DD");
    const end = (0, moment_1.default)(endDate).add(datesToAdd, "days").format("YYYY-MM-DD");
    let dates = [];
    const theDate = new Date(start);
    while (theDate < new Date(end)) {
        const data = {
            isSunday: isSunday(theDate),
            isToday: isToday(theDate),
            isWeekend: isWeekend(theDate),
            isLastDayOfWeek: isLastDayOfWeek(theDate),
            date: new Date(theDate)
        };
        dates = [...dates, data];
        theDate.setDate(theDate.getDate() + 1);
    }
    dates.splice(-1);
    return dates;
}
exports.getDates = getDates;
async function getWeekRange(dates) {
    const weekData = [];
    const weeks = [];
    for (const [index, element] of dates.entries()) {
        const weekIndex = (0, moment_1.default)(element.date).week();
        if (!weeks.includes(weekIndex)) {
            const d = {};
            const monthData = [];
            d.week_index = weekIndex;
            d.days_of_week = dates.filter(e => {
                return (0, moment_1.default)(e.date).week() === (0, moment_1.default)(element.date).week();
            });
            for (const item of d.days_of_week) {
                const monthIndex = (0, moment_1.default)(item.date).month();
                if (!monthData.includes(monthNames[monthIndex]))
                    monthData.push(monthNames[monthIndex]);
            }
            d.month_name = monthData.join(" - ");
            d.min = dates.findIndex(e => e.date?.valueOf() === (0, moment_1.min)(d.days_of_week.map((days) => (0, moment_1.default)(days.date))).valueOf());
            d.min = index !== 0 ? d.min + 2 : d.min + 1;
            d.max = dates.findIndex(e => e.date?.valueOf() === (0, moment_1.max)(d.days_of_week.map((days) => (0, moment_1.default)(days.date))).valueOf()) + 3;
            weeks.push(weekIndex);
            weekData.push(d);
        }
    }
    return weekData;
}
exports.getWeekRange = getWeekRange;
async function getMonthRange(dates) {
    const monthData = [];
    const months = [];
    for (const [, date] of dates.entries()) {
        const monthIndex = (0, moment_1.default)(date.date).month();
        if (!months.includes(monthIndex)) {
            const d = {};
            d.month_name = monthNames[monthIndex];
            d.month_index = monthIndex;
            d.days_of_month = dates.filter(e => {
                return (0, moment_1.default)(e.date).month() === (0, moment_1.default)(date.date).month();
            });
            d.min = dates.findIndex(e => e.date.valueOf() === (0, moment_1.min)(d.days_of_month.map((days) => (0, moment_1.default)(days.date))).valueOf()) + 1;
            d.max = dates.findIndex(e => e.date.valueOf() === (0, moment_1.max)(d.days_of_month.map((days) => (0, moment_1.default)(days.date))).valueOf()) + 2;
            months.push(monthIndex);
            monthData.push(d);
        }
    }
    return monthData;
}
exports.getMonthRange = getMonthRange;
async function getMinMaxOfTaskDates(projectId) {
    const q = `SELECT MIN(start_date) as min_date, MAX(end_date) as max_date
        FROM tasks
        WHERE project_id = $1;`;
    const result = await db_1.default.query(q, [projectId]);
    const [data] = result.rows;
    if (!data.min_date) {
        const minDateQ = `SELECT MIN(created_at) as min_date
        FROM tasks
        WHERE project_id = $1;`;
        const q1Result = await db_1.default.query(minDateQ, [projectId]);
        const [dataMinDate] = q1Result.rows;
        data.min_date = dataMinDate?.min_date;
    }
    if (!data.max_date) {
        const maxDateQ = `SELECT MAX(created_at) as max_date
        FROM tasks
        WHERE project_id = $1;`;
        const q1Result = await db_1.default.query(maxDateQ, [projectId]);
        const [dataMaxDate] = q1Result.rows;
        data.max_date = dataMaxDate?.max_date;
    }
    return data;
}
exports.getMinMaxOfTaskDates = getMinMaxOfTaskDates;
async function getDatesForResourceAllocation(startDate = "", endDate = "") {
    const end = (0, moment_1.default)(endDate).add(4, "weeks").format("YYYY-MM-DD");
    let dates = [];
    const theDate = new Date(startDate);
    while (theDate < new Date(end)) {
        const data = {
            isSunday: isSunday(theDate),
            isToday: isToday(theDate),
            isWeekend: isWeekend(theDate),
            isLastDayOfWeek: isLastDayOfWeek(theDate),
            date: new Date(theDate)
        };
        dates = [...dates, data];
        theDate.setDate(theDate.getDate() + 1);
    }
    return dates;
}
exports.getDatesForResourceAllocation = getDatesForResourceAllocation;
