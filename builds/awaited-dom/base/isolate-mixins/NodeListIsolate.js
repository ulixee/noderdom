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
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('NodeListIsolate', exports.getState, exports.setState);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
class NodeListIsolate {
    get length() {
        return exports.awaitedHandler.getProperty(this, 'length', false);
    }
    // methods
    item(index) {
        throw new Error('NodeListIsolate.item not implemented');
    }
    forEach(callbackfn, thisArg) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const [key, value] of yield this.entries()) {
                callbackfn.call(thisArg, value, key, this);
            }
        });
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
}
exports.default = NodeListIsolate;
exports.NodeListIsolatePropertyKeys = ['length'];
exports.NodeListIsolateConstantKeys = [];
//# sourceMappingURL=NodeListIsolate.js.map