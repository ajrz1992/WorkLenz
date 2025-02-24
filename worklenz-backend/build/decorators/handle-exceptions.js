"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("../controllers/worklenz-controller-base"));
const server_response_1 = require("../models/server-response");
const constants_1 = require("../shared/constants");
const constraints_1 = require("../shared/constraints");
const utils_1 = require("../shared/utils");
const defaults = {
    message: constants_1.DEFAULT_ERROR_MESSAGE,
    raisedExceptions: {},
    logWithError: "user"
};
const isValid = (options, key) => Object.keys(options[key] || {}).length > 0;
const mergeWithDefaults = (options) => ({ ...defaults, ...(options || {}) });
function getConstraint(error) {
    return constraints_1.DB_CONSTRAINS[error?.constraint] ?? null;
}
function getConstraintResponse(constraint) {
    if (constraint === "[IGNORE]")
        return new server_response_1.ServerResponse(true, null);
    return new server_response_1.ServerResponse(false, null, constraint || constants_1.DEFAULT_ERROR_MESSAGE);
}
function hasRaisedException(opt, keys) {
    return opt.raisedExceptions?.[keys[0]];
}
function getExceptionMessage(opt, keys) {
    return (opt.raisedExceptions[keys[0]] || constants_1.DEFAULT_ERROR_MESSAGE).replace(/(\{0\})/g, (keys[1] || ""));
}
function getKeys(error) {
    return ((error?.message) || "").split(":");
}
function handleError(error, res, opt, req) {
    const constraint = getConstraint(error);
    if (typeof constraint === "string") {
        const response = getConstraintResponse(constraint);
        return res.status(200).send(response);
    }
    if (isValid(opt, "raisedExceptions")) {
        const keys = getKeys(error);
        if (hasRaisedException(opt, keys)) {
            const msg = getExceptionMessage(opt, keys);
            return res.status(200).send(new server_response_1.ServerResponse(false, null, msg));
        }
    }
    (0, utils_1.log_error)(error, (opt.logWithError && req[opt.logWithError]) || null);
    return res.status(200).send(new server_response_1.ServerResponse(false, null, opt.message));
}
function HandleExceptions(options) {
    const opt = mergeWithDefaults(options);
    return (target, key, descriptor) => {
        if (!(target.prototype instanceof worklenz_controller_base_1.default))
            throw new Error("@HandleExceptions can only be used with an instance of WorklenzControllerBase.");
        const originalMethod = descriptor.value;
        descriptor.value = async (...args) => {
            try {
                return await originalMethod.apply(target, args);
            }
            catch (error) {
                const [req, res] = args;
                return handleError(error, res, opt, req);
            }
        };
    };
}
exports.default = HandleExceptions;
