"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const notification_controller_1 = tslib_1.__importDefault(require("../../controllers/notification-controller"));
const safe_controller_function_1 = tslib_1.__importDefault(require("../../shared/safe-controller-function"));
const notificationsApiRouter = express_1.default.Router();
notificationsApiRouter.get("/", (0, safe_controller_function_1.default)(notification_controller_1.default.get));
notificationsApiRouter.get("/unread-count", (0, safe_controller_function_1.default)(notification_controller_1.default.getUnreadCount));
notificationsApiRouter.delete("/:id", (0, safe_controller_function_1.default)(notification_controller_1.default.delete));
notificationsApiRouter.put("/read-all", (0, safe_controller_function_1.default)(notification_controller_1.default.readAll));
notificationsApiRouter.put("/:id", (0, safe_controller_function_1.default)(notification_controller_1.default.update));
exports.default = notificationsApiRouter;
