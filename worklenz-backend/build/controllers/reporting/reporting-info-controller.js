"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const reporting_controller_base_1 = tslib_1.__importDefault(require("./reporting-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../../decorators/handle-exceptions"));
const db_1 = tslib_1.__importDefault(require("../../config/db"));
const server_response_1 = require("../../models/server-response");
class ReportingInfoController extends reporting_controller_base_1.default {
    static async getInfo(req, res) {
        const q = `
      SELECT organization_name
      FROM organizations
      WHERE user_id = (SELECT user_id FROM teams WHERE id = $1);
    `;
        const result = await db_1.default.query(q, [this.getCurrentTeamId(req)]);
        const [data] = result.rows;
        return res.status(200).send(new server_response_1.ServerResponse(true, data));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], ReportingInfoController, "getInfo", null);
exports.default = ReportingInfoController;
