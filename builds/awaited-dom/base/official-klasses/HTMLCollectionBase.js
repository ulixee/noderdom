"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLCollectionBaseConstantKeys = exports.HTMLCollectionBasePropertyKeys = exports.HTMLCollectionBaseGenerator = exports.awaitedIterator = exports.nodeAttacher = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLCollectionBase', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLCollectionBaseGenerator() {
    return class HTMLCollectionBase {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.HTMLCollectionBaseConstantKeys, exports.HTMLCollectionBasePropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLCollectionBase',
                createIterableName: 'createSuperElement',
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
            throw new Error('HTMLCollectionBase.item not implemented');
        }
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
        [Symbol.iterator]() {
            return exports.awaitedIterator.iterateAttached(this)[Symbol.iterator]();
        }
    };
}
exports.HTMLCollectionBaseGenerator = HTMLCollectionBaseGenerator;
exports.HTMLCollectionBasePropertyKeys = ['length'];
exports.HTMLCollectionBaseConstantKeys = [];
//# sourceMappingURL=HTMLCollectionBase.js.map