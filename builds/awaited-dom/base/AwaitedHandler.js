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
        return AwaitedHandler.delegate?.construct(this, instance, args);
    }
    async getProperty(instance, name, hasNullDefault = false) {
        return await AwaitedHandler.delegate?.getProperty(this, instance, name, hasNullDefault);
    }
    setProperty(instance, name, value) {
        return AwaitedHandler.delegate?.setProperty(this, instance, name, value);
    }
    async createNodePointer(instance) {
        return await AwaitedHandler.delegate?.createNodePointer(this, instance);
    }
    async runMethod(instance, name, args) {
        return await AwaitedHandler.delegate?.runMethod(this, instance, name, args);
    }
    async runStatic(klass, name, args) {
        return await AwaitedHandler.delegate?.runStatic(this, klass, name, args);
    }
    static setStorageSymbol(storageSymbol) {
        return (0, StateMachine_1.setStorageSymbol)(storageSymbol);
    }
}
exports.default = AwaitedHandler;
//# sourceMappingURL=AwaitedHandler.js.map