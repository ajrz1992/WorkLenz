"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const clients_controller_1 = tslib_1.__importDefault(require("../../controllers/clients-controller"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../shared/safe-controller-function"));
const public_router = express_1.default.Router();
public_router.post("/new-subscriber", (0, safe_controller_function_1.default)(clients_controller_1.default.addSubscriber));
exports.default = public_router;
