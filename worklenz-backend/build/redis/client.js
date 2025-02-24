"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = exports.initRedis = void 0;
const tslib_1 = require("tslib");
const redis = tslib_1.__importStar(require("redis"));
const client = redis.createClient();
exports.redisClient = client;
const initRedis = async () => {
    client.on("connect", () => console.log("Redis Client Connected"));
    client.on("error", err => console.log("Redis Client Error", err));
    await client.connect();
};
exports.initRedis = initRedis;
