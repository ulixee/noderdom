"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
const HTMLCollectionBaseIsolate_1 = require("../isolate-mixins/HTMLCollectionBaseIsolate");
const HTMLCollectionIsolate_1 = require("../isolate-mixins/HTMLCollectionIsolate");
const HTMLOptionsCollectionIsolate_1 = require("../isolate-mixins/HTMLOptionsCollectionIsolate");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('SuperHTMLCollection', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function SuperHTMLCollectionGenerator(HTMLCollectionBaseIsolate, HTMLCollectionIsolate, HTMLOptionsCollectionIsolate) {
    const Parent = ClassMixer_1.default(HTMLCollectionBaseIsolate, [HTMLCollectionIsolate, HTMLOptionsCollectionIsolate]);
    return class SuperHTMLCollection extends Parent {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.SuperHTMLCollectionConstantKeys, exports.SuperHTMLCollectionPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createSuperHTMLCollection',
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
                    // delegate to string indexer
                    return target.namedItem(prop);
                },
            });
            exports.recordProxy(proxy, this);
            return proxy;
        }
        // methods
        namedItem(name) {
            throw new Error('SuperHTMLCollection.namedItem not implemented');
        }
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
        [Symbol.iterator]() {
            return exports.awaitedIterator.iterateAttached(this)[Symbol.iterator]();
        }
    };
}
exports.SuperHTMLCollectionGenerator = SuperHTMLCollectionGenerator;
exports.SuperHTMLCollectionPropertyKeys = [...HTMLCollectionBaseIsolate_1.HTMLCollectionBaseIsolatePropertyKeys, ...HTMLCollectionIsolate_1.HTMLCollectionIsolatePropertyKeys, ...HTMLOptionsCollectionIsolate_1.HTMLOptionsCollectionIsolatePropertyKeys];
exports.SuperHTMLCollectionConstantKeys = [...HTMLCollectionBaseIsolate_1.HTMLCollectionBaseIsolateConstantKeys, ...HTMLCollectionIsolate_1.HTMLCollectionIsolateConstantKeys, ...HTMLOptionsCollectionIsolate_1.HTMLOptionsCollectionIsolateConstantKeys];
//# sourceMappingURL=SuperHTMLCollection.js.map