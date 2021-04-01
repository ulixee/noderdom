"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeAttacher {
    constructor(getState, setState, awaitedHandler) {
        this.getState = getState;
        this.setState = setState;
        this.awaitedHandler = awaitedHandler;
    }
    async attach(instance, properties) {
        const { awaitedOptions, awaitedPath, createInstanceName } = this.getState(instance);
        const state = await this.awaitedHandler.loadState(instance, properties);
        if (!(state === null || state === void 0 ? void 0 : state.id)) {
            return null;
        }
        const createNewInstance = NodeAttacher.creators[createInstanceName];
        const attachedAwaitedPath = (state === null || state === void 0 ? void 0 : state.id) ? awaitedPath.withAttachedId(state === null || state === void 0 ? void 0 : state.id) : awaitedPath;
        const newInstance = createNewInstance(attachedAwaitedPath, awaitedOptions);
        this.setState(newInstance, {
            attachedState: state,
        });
        const thenable = newInstance;
        // return null first time to escape promise chain
        const originalThen = thenable.then;
        // @ts-ignore
        thenable.then = null;
        // relies on fact a calling promises will share the same microtask stack
        process.nextTick(() => {
            thenable.then = originalThen;
        });
        return newInstance;
    }
    getAttachedState(instance) {
        return this.getState(instance).attachedState;
    }
}
exports.default = NodeAttacher;
NodeAttacher.creators = require('../impl/create');
//# sourceMappingURL=NodeAttacher.js.map