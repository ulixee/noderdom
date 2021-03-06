"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotImplementedError = void 0;
const StateMachine_1 = require("./StateMachine");
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
    async getProperty(instance, name, hasNullDefault = false) {
        var _a;
        return await ((_a = AwaitedHandler.delegate) === null || _a === void 0 ? void 0 : _a.getProperty(this, instance, name, hasNullDefault));
    }
    setProperty(instance, name, value) {
        var _a;
        return (_a = AwaitedHandler.delegate) === null || _a === void 0 ? void 0 : _a.setProperty(this, instance, name, value);
    }
    async createNodePointer(instance) {
        var _a;
        return await ((_a = AwaitedHandler.delegate) === null || _a === void 0 ? void 0 : _a.createNodePointer(this, instance));
    }
    async runMethod(instance, name, args) {
        var _a;
        return await ((_a = AwaitedHandler.delegate) === null || _a === void 0 ? void 0 : _a.runMethod(this, instance, name, args));
    }
    async runStatic(klass, name, args) {
        var _a;
        return await ((_a = AwaitedHandler.delegate) === null || _a === void 0 ? void 0 : _a.runStatic(this, klass, name, args));
    }
    static setStorageSymbol(storageSymbol) {
        return StateMachine_1.setStorageSymbol(storageSymbol);
    }
}
exports.default = AwaitedHandler;
//# sourceMappingURL=AwaitedHandler.js.map