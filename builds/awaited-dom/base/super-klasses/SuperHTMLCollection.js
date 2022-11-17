"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperHTMLCollectionConstantKeys = exports.SuperHTMLCollectionPropertyKeys = exports.SuperHTMLCollectionGenerator = exports.awaitedIterator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLCollectionBaseIsolate_1 = require("../isolate-mixins/HTMLCollectionBaseIsolate");
const HTMLCollectionIsolate_1 = require("../isolate-mixins/HTMLCollectionIsolate");
const HTMLOptionsCollectionIsolate_1 = require("../isolate-mixins/HTMLOptionsCollectionIsolate");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('SuperHTMLCollection', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function SuperHTMLCollectionGenerator(HTMLCollectionBaseIsolate, HTMLCollectionIsolate, HTMLOptionsCollectionIsolate) {
    const Parent = (0, ClassMixer_1.default)(HTMLCollectionBaseIsolate, [HTMLCollectionIsolate, HTMLOptionsCollectionIsolate]);
    return class SuperHTMLCollection extends Parent {
        constructor() {
            super();
            (0, exports.setState)(this, {
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
                    // delegate to indexer property
                    if ((typeof prop === 'string' || typeof prop === 'number') && !isNaN(prop)) {
                        const param = parseInt(prop, 10);
                        return target.item(param);
                    }
                    // delegate to string indexer
                    if (typeof prop === 'string') {
                        return target.namedItem(prop);
                    }
                },
            });
            return proxy;
        }
        // methods
        namedItem(name) {
            throw new Error('SuperHTMLCollection.namedItem not implemented');
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.iterator]() {
            return exports.awaitedIterator.iterateNodePointers(this);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.SuperHTMLCollectionPropertyKeys, exports.SuperHTMLCollectionConstantKeys);
        }
    };
}
exports.SuperHTMLCollectionGenerator = SuperHTMLCollectionGenerator;
exports.SuperHTMLCollectionPropertyKeys = [...HTMLCollectionBaseIsolate_1.HTMLCollectionBaseIsolatePropertyKeys, ...HTMLCollectionIsolate_1.HTMLCollectionIsolatePropertyKeys, ...HTMLOptionsCollectionIsolate_1.HTMLOptionsCollectionIsolatePropertyKeys];
exports.SuperHTMLCollectionConstantKeys = [...HTMLCollectionBaseIsolate_1.HTMLCollectionBaseIsolateConstantKeys, ...HTMLCollectionIsolate_1.HTMLCollectionIsolateConstantKeys, ...HTMLOptionsCollectionIsolate_1.HTMLOptionsCollectionIsolateConstantKeys];
//# sourceMappingURL=SuperHTMLCollection.js.map