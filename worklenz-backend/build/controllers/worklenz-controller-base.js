"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../shared/constants");
class WorklenzControllerBase {
    static get paginatedDatasetDefaultStruct() {
        return { total: 0, data: [] };
    }
    static isValidHost(hostname) {
        return hostname === "worklenz.com"
            || hostname === "www.worklenz.com"
            || hostname === "dev.worklenz.com"
            || hostname === "uat.worklenz.com";
    }
    static createTagList(list, max = 4) {
        let data = [...(list || [])];
        if (data.length > max) {
            const remaining = list.slice(max);
            const names = remaining.map(i => i.name);
            data = data.slice(0, max);
            data.push({ name: `+${remaining.length}`, end: true, names: names });
        }
        return data;
    }
    static toPaginationOptions(queryParams, searchField, isMemberFilter = false) {
        const size = +(queryParams.size || constants_1.DEFAULT_PAGE_SIZE);
        const index = +(queryParams.index || 1);
        const offset = queryParams.search ? 0 : (index - 1) * size;
        const paging = queryParams.paging || "true";
        const search = (queryParams.search || "").trim();
        let s = "";
        if (typeof searchField === "string") {
            s = ` ${searchField} ILIKE '%${search}%'`;
        }
        else if (Array.isArray(searchField)) {
            s = searchField.map(index => ` ${index} ILIKE '%${search}%'`).join(" OR ");
        }
        let searchQuery = "";
        if (search) {
            searchQuery = isMemberFilter ? ` (${s})  AND ` : ` AND (${s}) `;
        }
        const sortField = /null|undefined/.test(queryParams.field) ? searchField : queryParams.field;
        const sortOrder = queryParams.order === "descend" ? "desc" : "asc";
        return { searchQuery, sortField, sortOrder, size, offset, paging };
    }
}
exports.default = WorklenzControllerBase;
