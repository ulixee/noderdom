"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AwaitedPath {
    constructor(...jsPath) {
        this.jsPath = jsPath;
        this.hasAttachedId = jsPath && jsPath.length > 0 && typeof jsPath[0] === 'number';
    }
    addProperty(name) {
        return new AwaitedPath(...this.jsPath, name);
    }
    addMethod(name, ...args) {
        return new AwaitedPath(...this.jsPath, [name, ...args]);
    }
    withAttachedId(id) {
        return new AwaitedPath(id);
    }
    toJSON() {
        return this.jsPath;
    }
    static createFromString(path) {
        // ToDo: this must handle any javascript string: array indexes, methods, args, etc
        return new AwaitedPath(...path.split('.'));
    }
}
exports.default = AwaitedPath;
//# sourceMappingURL=AwaitedPath.js.map