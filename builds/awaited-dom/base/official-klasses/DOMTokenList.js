"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMTokenListConstantKeys = exports.DOMTokenListPropertyKeys = exports.DOMTokenListGenerator = exports.awaitedIterator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('DOMTokenList', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function DOMTokenListGenerator() {
    return class DOMTokenList {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.DOMTokenListConstantKeys, exports.DOMTokenListPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createDOMTokenList',
                createIterableName: 'string',
            });
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
                    // delegate to indexer property
                    if (!isNaN(prop)) {
                        const param = parseInt(prop, 10);
                        return target.item(param);
                    }
                },
            });
            exports.recordProxy(proxy, this);
            return proxy;
        }
        // properties
        get length() {
            return exports.awaitedHandler.getProperty(this, 'length', false);
        }
        get value() {
            return exports.awaitedHandler.getProperty(this, 'value', false);
        }
        // methods
        add(...tokens) {
            return exports.awaitedHandler.runMethod(this, 'add', [tokens]);
        }
        contains(token) {
            return exports.awaitedHandler.runMethod(this, 'contains', [token]);
        }
        item(index) {
            return exports.awaitedHandler.runMethod(this, 'item', [index]);
        }
        remove(...tokens) {
            return exports.awaitedHandler.runMethod(this, 'remove', [tokens]);
        }
        replace(token, newToken) {
            return exports.awaitedHandler.runMethod(this, 'replace', [token, newToken]);
        }
        supports(token) {
            return exports.awaitedHandler.runMethod(this, 'supports', [token]);
        }
        toString() {
            return exports.awaitedHandler.runMethod(this, 'toString', []);
        }
        toggle(token, force) {
            return exports.awaitedHandler.runMethod(this, 'toggle', [token, force]);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        async forEach(callbackfn, thisArg) {
            for (const [key, value] of await this.entries()) {
                callbackfn.call(thisArg, value, key, this);
            }
        }
        entries() {
            return exports.awaitedIterator.load(this).then(x => x.entries());
        }
        keys() {
            return exports.awaitedIterator.load(this).then(x => x.keys());
        }
        values() {
            return exports.awaitedIterator.load(this).then(x => x.values());
        }
        [Symbol.iterator]() {
            return exports.awaitedIterator.iterateNodePointers(this)[Symbol.iterator]();
        }
    };
}
exports.DOMTokenListGenerator = DOMTokenListGenerator;
exports.DOMTokenListPropertyKeys = ['length', 'value'];
exports.DOMTokenListConstantKeys = [];
//# sourceMappingURL=DOMTokenList.js.map