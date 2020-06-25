"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class NodeAttacher {
    constructor(getState, setState, awaitedHandler) {
        this.getState = getState;
        this.setState = setState;
        this.awaitedHandler = awaitedHandler;
    }
    attach(instance, properties) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { awaitedOptions, awaitedPath, createInstanceName } = this.getState(instance);
            const state = yield this.awaitedHandler.loadState(instance, properties);
            const createNewInstance = NodeAttacher.creators[createInstanceName];
            const attachedAwaitedPath = ((_a = state) === null || _a === void 0 ? void 0 : _a.id) ? awaitedPath.withAttachedId((_b = state) === null || _b === void 0 ? void 0 : _b.id) : awaitedPath;
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
        });
    }
    getAttachedState(instance) {
        return this.getState(instance).attachedState;
    }
}
exports.default = NodeAttacher;
NodeAttacher.creators = require('../impl/create');
//# sourceMappingURL=NodeAttacher.js.map