"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on_schedule_member_allocation_create = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const events_1 = require("../events");
const util_1 = require("../util");
const moment_timezone_1 = tslib_1.__importDefault(require("moment-timezone"));
const moment_timezone_2 = tslib_1.__importDefault(require("moment-timezone"));
async function createAllocation(body) {
    const fromStart = Math.floor(body.offset) / 35;
    const duration = Math.floor(body.width) / 35;
    const chartStartDate = (0, moment_timezone_2.default)(body.chart_start);
    body.allocated_from = chartStartDate.add(fromStart, "days").format("YYYY-MM-DD").trim();
    body.allocated_to = (0, moment_timezone_2.default)(body.allocated_from).add(duration - 1, "days").format("YYYY-MM-DD").trim();
    return body;
}
async function checkExists(body) {
    const getq = `SELECT id, allocated_from, allocated_to FROM project_member_allocations WHERE project_id = $1 AND team_member_id = $2`;
    const getResult = await db_1.default.query(getq, [body.project_id, body.team_member_id]);
    if (getResult.rows.length > 0) {
        for (const row of getResult.rows) {
            const fAllocatedFrom = moment_timezone_1.default.tz(row.allocated_from, `${body.time_zone}`).format("YYYY-MM-DD");
            const fAllocatedTo = moment_timezone_1.default.tz(row.allocated_to, `${body.time_zone}`).format("YYYY-MM-DD");
            if ((0, moment_timezone_2.default)(fAllocatedFrom).isSameOrAfter((0, moment_timezone_2.default)(body.allocated_from)) && (0, moment_timezone_2.default)(fAllocatedTo).isSameOrBefore((0, moment_timezone_2.default)(body.allocated_to))) {
                const deleteq = `DELETE FROM project_member_allocations WHERE id IN ($1)`;
                await db_1.default.query(deleteq, [row.id]);
            }
        }
    }
}
async function on_schedule_member_allocation_create(_io, socket, data) {
    try {
        const body = JSON.parse(data);
        await createAllocation(body);
        await checkExists(body);
        const q = `INSERT INTO project_member_allocations(project_id, team_member_id, allocated_from, allocated_to)
                VALUES ($1, $2, $3, $4)`;
        await db_1.default.query(q, [body.project_id, body.team_member_id, body.allocated_from, body.allocated_to]);
        socket.emit(events_1.SocketEvents.SCHEDULE_MEMBER_ALLOCATION_CREATE.toString(), {
            project_id: body.project_id,
            team_member_id: body.team_member_id
        });
        return;
    }
    catch (error) {
        (0, util_1.log_error)(error);
    }
    const body = JSON.parse(data);
    socket.emit(events_1.SocketEvents.SCHEDULE_MEMBER_ALLOCATION_CREATE.toString(), {
        project_id: body.project_id,
        team_member_id: body.team_member_id
    });
}
exports.on_schedule_member_allocation_create = on_schedule_member_allocation_create;
