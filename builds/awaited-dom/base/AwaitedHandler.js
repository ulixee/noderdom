"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotImplementedError extends Error {
}
exports.NotImplementedError = NotImplementedError;
class AwaitedHandler {
    constructor(className, getState, setState) {
        this.className = className;
        this.getState = getState;
        this.setState = setState;
    }
    construct(instance, args) {
        var _a;
        return (_a = AwaitedHandler.delegate) === null || _a === void 0 ? void 0 : _a.construct(this, instance, args);
    }
    getProperty(instance, name, hasNullDefault = false) {
        var _a;
        return (_a = AwaitedHandler.delegate) === null || _a === void 0 ? void 0 : _a.getProperty(this, instance, name, hasNullDefault);
    }
    setProperty(instance, name, value) {
        var _a;
        return (_a = AwaitedHandler.delegate) === null || _a === void 0 ? void 0 : _a.setProperty(this, instance, name, value);
    }
    loadState(instance, properties) {
        var _a;
        return (_a = AwaitedHandler.delegate) === null || _a === void 0 ? void 0 : _a.loadState(this, instance, properties);
    }
    runMethod(instance, name, args) {
        var _a;
        return (_a = AwaitedHandler.delegate) === null || _a === void 0 ? void 0 : _a.runMethod(this, instance, name, args);
    }
    runStatic(klass, name, args) {
        var _a;
        return (_a = AwaitedHandler.delegate) === null || _a === void 0 ? void 0 : _a.runStatic(this, klass, name, args);
    }
}
exports.default = AwaitedHandler;
//# sourceMappingURL=AwaitedHandler.js.map