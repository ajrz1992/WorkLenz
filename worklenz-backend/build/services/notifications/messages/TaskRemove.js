"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskRemove {
    template = `<user> removed "<task>" from the "<project>".`;
    user_ids;
    message;
    constructor(userIds, userName, taskName, projectName) {
        this.user_ids = userIds;
        this.message = this.template
            .replace(/<user>/g, userName)
            .replace(/<task>/g, taskName)
            .replace(/<project>/g, projectName);
    }
}
