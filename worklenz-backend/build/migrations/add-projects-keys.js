"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const { Client } = require("pg");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const generate_project_key_1 = require("../utils/generate-project-key");
dotenv_1.default.config();
const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    max: process.env.DB_MAX_CLIENTS,
    idleTimeoutMillis: 30000,
});
function log(message) {
    console.log("Projects Keys Migration:", message);
}
async function getAllKeysByTeamId(teamId) {
    if (!teamId)
        return [];
    try {
        const result = await client.query("SELECT key FROM projects WHERE team_id = $1 ORDER BY key;", [teamId]);
        return result.rows.map((project) => project.key).filter((key) => !!key);
    }
    catch (error) {
        return [];
    }
}
async function runProjectsKeyMigration() {
    log("migration started");
    const result = await client.query("SELECT id, name, team_id FROM projects WHERE key IS NULL ORDER BY created_at;", []);
    log(`${result.rows.length} projects found`);
    for (const project of result.rows) {
        const keys = await getAllKeysByTeamId(project.team_id);
        const key = (0, generate_project_key_1.generateProjectKey)(project.name, keys);
        await client.query("UPDATE projects SET key = $1 WHERE id = $2", [key, project.id]);
        log(`${project.name} (${key})`);
    }
    log("migration ended");
}
client.connect(async (error) => {
    if (!error) {
        await runProjectsKeyMigration();
        client.end();
    }
    else {
        console.error(error);
    }
});
