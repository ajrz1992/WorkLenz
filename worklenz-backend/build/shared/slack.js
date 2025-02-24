"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.send_to_slack = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const utils_1 = require("./utils");
async function send_to_slack(error) {
    if (!(0, utils_1.isProduction)())
        return;
    if (!process.env.SLACK_WEBHOOK)
        return;
    try {
        const url = process.env.SLACK_WEBHOOK;
        const blocks = [];
        const title = error.message || "Error";
        blocks.push({
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": title,
                "emoji": true
            }
        });
        blocks.push({
            type: "section",
            text: {
                type: "mrkdwn",
                text: `\`\`\`\n${JSON.stringify(error)}\`\`\``
            }
        });
        const request = { blocks };
        await axios_1.default.post(url, JSON.stringify(request));
    }
    catch (e) {
        (0, utils_1.log_error)(e);
    }
}
exports.send_to_slack = send_to_slack;
