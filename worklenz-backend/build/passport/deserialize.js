"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserialize = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("../config/db"));
async function setLastActive(id) {
    try {
        await db_1.default.query("UPDATE users SET last_active = CURRENT_TIMESTAMP WHERE id = $1;", [id]);
    }
    catch (error) {
    }
}
async function clearEmailInvitations(email, teamId) {
    try {
        await db_1.default.query("DELETE FROM email_invitations WHERE email = $1 AND team_id = $2;", [email, teamId]);
    }
    catch (error) {
    }
}
async function deserialize(id, done) {
    try {
        const q = `SELECT deserialize_user($1) AS user;`;
        const result = await db_1.default.query(q, [id]);
        if (result.rows.length) {
            const [data] = result.rows;
            if (data?.user) {
                data.user.is_member = !!data.user.team_member_id;
                void setLastActive(data.user.id);
                void clearEmailInvitations(data.user.email, data.user.team_id);
                return done(null, data.user);
            }
        }
        return done(null, null);
    }
    catch (error) {
        return done(error, null);
    }
}
exports.deserialize = deserialize;
