"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSStyleDeclarationConstantKeys = exports.CSSStyleDeclarationPropertyKeys = exports.CSSStyleDeclarationGenerator = exports.awaitedIterator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('CSSStyleDeclaration', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function CSSStyleDeclarationGenerator() {
    return class CSSStyleDeclaration {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.CSSStyleDeclarationConstantKeys, exports.CSSStyleDeclarationPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createCSSStyleDeclaration',
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
        get cssFloat() {
            return exports.awaitedHandler.getProperty(this, 'cssFloat', false);
        }
        get cssText() {
            return exports.awaitedHandler.getProperty(this, 'cssText', false);
        }
        get length() {
            return exports.awaitedHandler.getProperty(this, 'length', false);
        }
        get parentRule() {
            throw new Error('CSSStyleDeclaration.parentRule getter not implemented');
        }
        // methods
        getPropertyPriority(property) {
            return exports.awaitedHandler.runMethod(this, 'getPropertyPriority', [property]);
        }
        getPropertyValue(property) {
            return exports.awaitedHandler.runMethod(this, 'getPropertyValue', [property]);
        }
        item(index) {
            return exports.awaitedHandler.runMethod(this, 'item', [index]);
        }
        removeProperty(property) {
            return exports.awaitedHandler.runMethod(this, 'removeProperty', [property]);
        }
        setProperty(property, value, priority) {
            return exports.awaitedHandler.runMethod(this, 'setProperty', [property, value, priority]);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.iterator]() {
            return exports.awaitedIterator.iterateNodePointers(this)[Symbol.iterator]();
        }
    };
}
exports.CSSStyleDeclarationGenerator = CSSStyleDeclarationGenerator;
exports.CSSStyleDeclarationPropertyKeys = ['cssFloat', 'cssText', 'length', 'parentRule'];
exports.CSSStyleDeclarationConstantKeys = [];
//# sourceMappingURL=CSSStyleDeclaration.js.map