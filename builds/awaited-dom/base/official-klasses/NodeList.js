"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeListConstantKeys = exports.NodeListPropertyKeys = exports.NodeListGenerator = exports.awaitedIterator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('NodeList', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function NodeListGenerator() {
    return class NodeList {
        constructor() {
            (0, exports.setState)(this, {
                createInstanceName: 'createNodeList',
                createIterableName: 'createSuperNode',
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
        // methods
        item(index) {
            throw new Error('NodeList.item not implemented');
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
            return (0, inspectInstanceProperties_1.default)(this, exports.NodeListPropertyKeys, exports.NodeListConstantKeys);
        }
    };
}
exports.NodeListGenerator = NodeListGenerator;
exports.NodeListPropertyKeys = ['length'];
exports.NodeListConstantKeys = [];
//# sourceMappingURL=NodeList.js.map