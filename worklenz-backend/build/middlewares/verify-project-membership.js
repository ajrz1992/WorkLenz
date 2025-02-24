"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http_errors_1 = tslib_1.__importDefault(require("http-errors"));
const db_1 = tslib_1.__importDefault(require("../config/db"));
function default_1(projectId) {
    return async (req, _res, next) => {
        const userId = req.user?.id;
        const teamId = req.user?.team_id;
        try {
            const q = `
        SELECT 1
        FROM project_members
        WHERE project_id = $1
          AND team_member_id = (SELECT id FROM team_members WHERE team_id = $2 AND user_id = $3);
      `;
            const result = await db_1.default.query(q, [projectId, teamId, userId]);
            if (result.rowCount)
                return next();
        }
        catch (error) {
        }
        return next((0, http_errors_1.default)(401));
    };
}
exports.default = default_1;
