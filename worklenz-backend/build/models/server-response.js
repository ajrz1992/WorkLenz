"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerResponse = void 0;
class ServerResponse {
    done;
    body;
    title = null;
    message;
    constructor(done, body, message = null) {
        this.done = !!done;
        this.body = body === null || body === undefined ? null : body;
        this.message = message?.toString().trim() ?? null;
    }
    withTitle(title) {
        this.title = title;
        return this;
    }
    setMessage(message) {
        this.message = message;
        return this;
    }
}
exports.ServerResponse = ServerResponse;
