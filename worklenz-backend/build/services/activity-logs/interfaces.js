"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IActivityLogChangeType = exports.IActivityLogAttributeTypes = void 0;
var IActivityLogAttributeTypes;
(function (IActivityLogAttributeTypes) {
    IActivityLogAttributeTypes["NAME"] = "name";
    IActivityLogAttributeTypes["STATUS"] = "status";
    IActivityLogAttributeTypes["ASSIGNEES"] = "assignee";
    IActivityLogAttributeTypes["END_DATE"] = "end_date";
    IActivityLogAttributeTypes["START_DATE"] = "start_date";
    IActivityLogAttributeTypes["PRIORITY"] = "priority";
    IActivityLogAttributeTypes["ESTIMATION"] = "estimation";
    IActivityLogAttributeTypes["LABEL"] = "label";
    IActivityLogAttributeTypes["DESCRIPTION"] = "description";
    IActivityLogAttributeTypes["ATTACHMENT"] = "attachment";
    IActivityLogAttributeTypes["COMMENT"] = "comment";
    IActivityLogAttributeTypes["ARCHIVE"] = "archive";
    IActivityLogAttributeTypes["PHASE"] = "phase";
})(IActivityLogAttributeTypes = exports.IActivityLogAttributeTypes || (exports.IActivityLogAttributeTypes = {}));
var IActivityLogChangeType;
(function (IActivityLogChangeType) {
    IActivityLogChangeType["CREATE"] = "create";
    IActivityLogChangeType["UPDATE"] = "update";
    IActivityLogChangeType["DELETE"] = "delete";
    IActivityLogChangeType["ASSIGN"] = "assign";
    IActivityLogChangeType["UNASSIGN"] = "unassign";
})(IActivityLogChangeType = exports.IActivityLogChangeType || (exports.IActivityLogChangeType = {}));
