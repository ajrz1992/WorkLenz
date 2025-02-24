"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResponse = void 0;
class AuthResponse {
    authenticated = false;
    user = null;
    title = null;
    auth_error = null;
    message = null;
    constructor(title, authenticated, user, auth_error, message) {
        this.title = title;
        this.authenticated = !!authenticated;
        this.user = user;
        this.auth_error = auth_error;
        this.message = message;
    }
}
exports.AuthResponse = AuthResponse;
