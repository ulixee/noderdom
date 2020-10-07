"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperNodeListConstantKeys = exports.SuperNodeListPropertyKeys = exports.SuperNodeListGenerator = exports.awaitedIterator = exports.nodeAttacher = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
const NodeListIsolate_1 = require("../isolate-mixins/NodeListIsolate");
const RadioNodeListIsolate_1 = require("../isolate-mixins/RadioNodeListIsolate");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('SuperNodeList', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function SuperNodeListGenerator(NodeListIsolate, RadioNodeListIsolate) {
    const Parent = ClassMixer_1.default(NodeListIsolate, [RadioNodeListIsolate]);
    return class SuperNodeList extends Parent {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.SuperNodeListConstantKeys, exports.SuperNodeListPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createSuperNodeList',
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
        // methods
        item(index) {
            throw new Error('SuperNodeList.item not implemented');
        }
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
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
            return exports.awaitedIterator.iterateAttached(this)[Symbol.iterator]();
        }
    };
}
exports.SuperNodeListGenerator = SuperNodeListGenerator;
exports.SuperNodeListPropertyKeys = [...NodeListIsolate_1.NodeListIsolatePropertyKeys, ...RadioNodeListIsolate_1.RadioNodeListIsolatePropertyKeys, 'length'];
exports.SuperNodeListConstantKeys = [...NodeListIsolate_1.NodeListIsolateConstantKeys, ...RadioNodeListIsolate_1.RadioNodeListIsolateConstantKeys];
//# sourceMappingURL=SuperNodeList.js.map