"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedNodeMapConstantKeys = exports.NamedNodeMapPropertyKeys = exports.NamedNodeMapGenerator = exports.awaitedIterator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('NamedNodeMap', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function NamedNodeMapGenerator() {
    return class NamedNodeMap {
        constructor() {
            (0, exports.setState)(this, {
                createInstanceName: 'createNamedNodeMap',
                createIterableName: 'createAttr',
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
                    // delegate to string indexer
                    if (typeof prop === 'string') {
                        return target.getNamedItem(prop);
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
        getNamedItem(qualifiedName) {
            return exports.awaitedHandler.runMethod(this, 'getNamedItem', [qualifiedName]);
        }
        getNamedItemNS(namespace, localName) {
            return exports.awaitedHandler.runMethod(this, 'getNamedItemNS', [namespace, localName]);
        }
        item(index) {
            return exports.awaitedHandler.runMethod(this, 'item', [index]);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.iterator]() {
            return exports.awaitedIterator.iterateNodePointers(this);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.NamedNodeMapPropertyKeys, exports.NamedNodeMapConstantKeys);
        }
    };
}
exports.NamedNodeMapGenerator = NamedNodeMapGenerator;
exports.NamedNodeMapPropertyKeys = ['length'];
exports.NamedNodeMapConstantKeys = [];
//# sourceMappingURL=NamedNodeMap.js.map