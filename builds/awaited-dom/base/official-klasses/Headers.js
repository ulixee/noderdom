"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('Headers', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HeadersGenerator() {
    return class Headers {
        constructor(_init) {
            initializeConstantsAndProperties_1.default(this, exports.HeadersConstantKeys, exports.HeadersPropertyKeys);
            exports.setState(this, {
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
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
        forEach(callbackfn, thisArg) {
            return __awaiter(this, void 0, void 0, function* () {
                for (const [key, value] of yield this.entries()) {
                    callbackfn.call(thisArg, value, key, this);
                }
            });
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
            return exports.awaitedIterator.iterateAttached(this)[Symbol.iterator]();
        }
    };
}
exports.HeadersGenerator = HeadersGenerator;
exports.HeadersPropertyKeys = [];
exports.HeadersConstantKeys = [];
//# sourceMappingURL=Headers.js.map