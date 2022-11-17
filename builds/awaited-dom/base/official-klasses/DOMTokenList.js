"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMTokenListConstantKeys = exports.DOMTokenListPropertyKeys = exports.DOMTokenListGenerator = exports.awaitedIterator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('DOMTokenList', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function DOMTokenListGenerator() {
    return class DOMTokenList {
        constructor() {
            (0, exports.setState)(this, {
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
                    if ((typeof prop === 'string' || typeof prop === 'number') && !isNaN(prop)) {
                        const param = parseInt(prop, 10);
                        return target.item(param);
                    }
                },
            });
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
                await callbackfn.call(thisArg, value, key, this);
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
            return exports.awaitedIterator.iterateNodePointers(this);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.DOMTokenListPropertyKeys, exports.DOMTokenListConstantKeys);
        }
    };
}
exports.DOMTokenListGenerator = DOMTokenListGenerator;
exports.DOMTokenListPropertyKeys = ['length', 'value'];
exports.DOMTokenListConstantKeys = [];
//# sourceMappingURL=DOMTokenList.js.map