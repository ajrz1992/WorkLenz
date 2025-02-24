"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPresignedUrlWithClient = exports.calculateStorage = exports.deleteObject = exports.uploadBase64 = exports.uploadBuffer = exports.getAvatarKey = exports.getKey = exports.getRootDir = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const client_s3_1 = require("@aws-sdk/client-s3");
const utils_1 = require("./utils");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const mime_1 = tslib_1.__importDefault(require("mime"));
const { BUCKET, REGION, S3_URL, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY } = process.env;
if (!S3_ACCESS_KEY_ID || !S3_SECRET_ACCESS_KEY) {
    (0, utils_1.log_error)("Invalid S3_ACCESS_KEY_ID or S3_SECRET_ACCESS_KEY. Please check .env file.");
}
const s3Client = new client_s3_1.S3Client({
    region: REGION,
    credentials: {
        accessKeyId: S3_ACCESS_KEY_ID,
        secretAccessKey: S3_SECRET_ACCESS_KEY,
    }
});
function getRootDir() {
    if ((0, utils_1.isTestServer)())
        return "test-server";
    if ((0, utils_1.isProduction)())
        return "secure";
    return "local-server";
}
exports.getRootDir = getRootDir;
function getKey(teamId, projectId, attachmentId, type) {
    return path_1.default.join(getRootDir(), teamId, projectId, `${attachmentId}.${type}`).replace(/\\/g, "/");
}
exports.getKey = getKey;
function getAvatarKey(userId, type) {
    return path_1.default.join("avatars", getRootDir(), `${userId}.${type}`).replace(/\\/g, "/");
}
exports.getAvatarKey = getAvatarKey;
async function uploadBuffer(buffer, type, location) {
    try {
        const bucketParams = {
            Bucket: BUCKET,
            Key: location,
            Body: buffer,
            ContentEncoding: "base64",
            ContentType: type
        };
        await s3Client.send(new client_s3_1.PutObjectCommand(bucketParams));
        return `${S3_URL}/${location}`;
    }
    catch (error) {
        (0, utils_1.log_error)(error);
    }
    return null;
}
exports.uploadBuffer = uploadBuffer;
async function uploadBase64(base64Data, location) {
    try {
        const buffer = Buffer.from(base64Data.replace(/^data:(.*?);base64,/, ""), "base64");
        const type = base64Data.split(";")[0].split(":")[1] || null;
        if (!type)
            return null;
        await uploadBuffer(buffer, type, location);
        return `${S3_URL}/${location}`;
    }
    catch (error) {
        (0, utils_1.log_error)(error);
    }
    return null;
}
exports.uploadBase64 = uploadBase64;
async function deleteObject(key) {
    try {
        const input = {
            Bucket: BUCKET,
            Key: key,
        };
        return await s3Client.send(new client_s3_1.DeleteObjectCommand(input));
    }
    catch (error) {
        return null;
    }
}
exports.deleteObject = deleteObject;
async function calculateStorage(prefix) {
    try {
        let totalSize = 0;
        let continuationToken;
        let response = null;
        do {
            const command = new client_s3_1.ListObjectsV2Command({
                Bucket: BUCKET,
                Prefix: `${getRootDir()}/${prefix}`,
                ContinuationToken: continuationToken,
            });
            response = await s3Client.send(command);
            if (response?.Contents) {
                for (const obj of response.Contents) {
                    totalSize += obj.Size;
                }
            }
            continuationToken = response.NextContinuationToken;
        } while (continuationToken);
        return totalSize;
    }
    catch (error) {
        (0, utils_1.log_error)(error);
    }
}
exports.calculateStorage = calculateStorage;
async function createPresignedUrlWithClient(key, file) {
    const fileExtension = path_1.default.extname(key).toLowerCase();
    const contentType = mime_1.default.lookup(fileExtension);
    const command = new client_s3_1.GetObjectCommand({
        Bucket: BUCKET,
        Key: key,
        ResponseContentType: `${contentType}`,
        ResponseContentDisposition: `attachment; filename=${file}`,
    });
    return (0, s3_request_presigner_1.getSignedUrl)(s3Client, command, { expiresIn: 3600 });
}
exports.createPresignedUrlWithClient = createPresignedUrlWithClient;
