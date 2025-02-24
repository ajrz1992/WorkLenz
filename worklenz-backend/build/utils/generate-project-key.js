"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateProjectKey = void 0;
const nanoid_1 = require("nanoid");
const utils_1 = require("../shared/utils");
function getInitialKey(value) {
    if (typeof value !== "string")
        return null;
    const str = value.trim();
    const words = str.replace(/[^\w\s-_]/g, "").split(/[\s-_]/g);
    if (words.length < 2) {
        if (str.length <= 3)
            return str.toUpperCase();
        return str.substring(0, 3).toUpperCase();
    }
    const key = words.map(word => word.charAt(0).toUpperCase()).join("");
    return key;
}
function customKey(initialKey, existingKeys, len = 3) {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const key = initialKey || (0, nanoid_1.customAlphabet)(allChars, len)();
    if (!existingKeys.includes(key))
        return key;
    let baseKey = key;
    let randomKey = key;
    let index = 0;
    while (existingKeys.includes(randomKey)) {
        const char = allChars[~~(Math.random() * allChars.length)];
        randomKey = baseKey + char;
        if (!existingKeys.includes(randomKey))
            return randomKey;
        index++;
        if (index >= allChars.length) {
            baseKey += char;
        }
    }
    return customKey(null, existingKeys, len + 1);
}
function generateProjectKey(projectName, existingKeys = []) {
    if ((0, utils_1.isUnicode)(projectName))
        return customKey(null, existingKeys);
    const key = getInitialKey(projectName);
    if (existingKeys.includes(key)) {
        const name = projectName.toUpperCase().trim();
        const chars = [...name.slice(1).replace(/\s/g, "")];
        for (const char of chars) {
            const k = key + char;
            if (!existingKeys.includes(k))
                return k;
        }
        return customKey(key, existingKeys);
    }
    return key;
}
exports.generateProjectKey = generateProjectKey;
