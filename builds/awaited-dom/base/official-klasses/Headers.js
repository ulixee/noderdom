"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadersConstantKeys = exports.HeadersPropertyKeys = exports.HeadersGenerator = exports.awaitedIterator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('Headers', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HeadersGenerator() {
    return class Headers {
        constructor(_init) {
            (0, exports.setState)(this, {
                createInstanceName: 'createHeaders',
            });
        }
        // methods
        append(name, value) {
            return exports.awaitedHandler.runMethod(this, 'append', [name, value]);
        }
        delete(name) {
            return exports.awaitedHandler.runMethod(this, 'delete', [name]);
        }
        get(name) {
            return exports.awaitedHandler.runMethod(this, 'get', [name]);
        }
        has(name) {
            return exports.awaitedHandler.runMethod(this, 'has', [name]);
        }
        set(name, value) {
            return exports.awaitedHandler.runMethod(this, 'set', [name, value]);
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
            return exports.awaitedIterator.load(this).then(x => new Map(x).entries());
        }
        keys() {
            return exports.awaitedIterator.load(this).then(x => new Map(x).keys());
        }
        values() {
            return exports.awaitedIterator.load(this).then(x => new Map(x).values());
        }
        [Symbol.iterator]() {
            return exports.awaitedIterator.iterateNodePointers(this);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HeadersPropertyKeys, exports.HeadersConstantKeys);
        }
    };
}
exports.HeadersGenerator = HeadersGenerator;
exports.HeadersPropertyKeys = [];
exports.HeadersConstantKeys = [];
//# sourceMappingURL=Headers.js.map