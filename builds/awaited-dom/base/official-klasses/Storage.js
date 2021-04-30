"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageConstantKeys = exports.StoragePropertyKeys = exports.StorageGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('Storage', exports.getState, exports.setState);
function StorageGenerator() {
    return class Storage {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.StorageConstantKeys, exports.StoragePropertyKeys);
            // proxy supports indexed property access
            const proxy = new Proxy(this, {
                get(target, prop) {
                    if (prop in target) {
                        // @ts-ignore
                        const value = target[prop];
                        if (typeof value === 'function')
                            return value.bind(target);
                        return value;
                    }
                    // delegate to string indexer
                    return target.getItem(prop);
                },
            });
            exports.recordProxy(proxy, this);
            return proxy;
        }
        // properties
        get length() {
            return exports.awaitedHandler.getProperty(this, 'length', false);
        }
        // methods
        clear() {
            return exports.awaitedHandler.runMethod(this, 'clear', []);
        }
        getItem(key) {
            return exports.awaitedHandler.runMethod(this, 'getItem', [key]);
        }
        key(index) {
            return exports.awaitedHandler.runMethod(this, 'key', [index]);
        }
        removeItem(key) {
            return exports.awaitedHandler.runMethod(this, 'removeItem', [key]);
        }
        setItem(key, value) {
            return exports.awaitedHandler.runMethod(this, 'setItem', [key, value]);
        }
    };
}
exports.StorageGenerator = StorageGenerator;
exports.StoragePropertyKeys = ['length'];
exports.StorageConstantKeys = [];
//# sourceMappingURL=Storage.js.map