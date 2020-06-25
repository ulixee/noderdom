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
        AwaitedHandler.initializer(this);
    }
    // @ts-ignore
    construct(instance, args) {
        throw new NotImplementedError(`${this.className} constructor not implemented`);
    }
    // @ts-ignore
    getProperty(instance, name, hasNullDefault = false) {
        throw new NotImplementedError(`AwaitedHandler.getProperty not implemented`);
    }
    // @ts-ignore
    setProperty(instance, name, value) {
        throw new NotImplementedError(`AwaitedHandler.setProperty not implemented`);
    }
    // @ts-ignore
    loadState(instance, properties) {
        throw new NotImplementedError(`AwaitedHandler.loadState not implemented`);
    }
    // @ts-ignore
    runMethod(instance, name, args) {
        throw new NotImplementedError(`AwaitedHandler.runMethod not implemented`);
    }
    // @ts-ignore
    runStatic(klass, name, args) {
        throw new NotImplementedError(`AwaitedHandler.runStatic not implemented`);
    }
}
exports.default = AwaitedHandler;
//# sourceMappingURL=AwaitedHandler.js.map