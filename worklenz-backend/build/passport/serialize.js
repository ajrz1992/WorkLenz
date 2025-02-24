"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = void 0;
function serialize($user, done) {
    done(null, $user?.id ?? null);
}
exports.serialize = serialize;
