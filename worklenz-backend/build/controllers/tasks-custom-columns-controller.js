"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const server_response_1 = require("../models/server-response");
const worklenz_controller_base_1 = tslib_1.__importDefault(require("./worklenz-controller-base"));
const handle_exceptions_1 = tslib_1.__importDefault(require("../decorators/handle-exceptions"));
class TasksCustomColumnsController extends worklenz_controller_base_1.default {
    static async create(req, res) {
        return res.status(200).send(new server_response_1.ServerResponse(true, []));
    }
    static async get(req, res) {
        return res.status(200).send(new server_response_1.ServerResponse(true, []));
    }
    static async update(req, res) {
        return res.status(200).send(new server_response_1.ServerResponse(true, []));
    }
    static async delete(req, res) {
        return res.status(200).send(new server_response_1.ServerResponse(true, []));
    }
    static async createOption(req, res) {
        return res.status(200).send(new server_response_1.ServerResponse(true, []));
    }
    static async getOption(req, res) {
        return res.status(200).send(new server_response_1.ServerResponse(true, []));
    }
    static async updateOption(req, res) {
        return res.status(200).send(new server_response_1.ServerResponse(true, []));
    }
    static async deleteOption(req, res) {
        return res.status(200).send(new server_response_1.ServerResponse(true, []));
    }
}
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksCustomColumnsController, "create", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksCustomColumnsController, "get", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksCustomColumnsController, "update", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksCustomColumnsController, "delete", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksCustomColumnsController, "createOption", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksCustomColumnsController, "getOption", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksCustomColumnsController, "updateOption", null);
tslib_1.__decorate([
    (0, handle_exceptions_1.default)()
], TasksCustomColumnsController, "deleteOption", null);
exports.default = TasksCustomColumnsController;
