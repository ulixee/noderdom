"use strict";
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
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLCollectionBaseIsolate', exports.getState, exports.setState);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
class HTMLCollectionBaseIsolate {
    get length() {
        return exports.awaitedHandler.getProperty(this, 'length', false);
    }
    // methods
    item(index) {
        return exports.awaitedHandler.runMethod(this, 'item', [index]);
    }
    [Symbol.iterator]() {
        return exports.awaitedIterator.iterateAttached(this)[Symbol.iterator]();
    }
}
exports.default = HTMLCollectionBaseIsolate;
exports.HTMLCollectionBaseIsolatePropertyKeys = ['length'];
exports.HTMLCollectionBaseIsolateConstantKeys = [];
//# sourceMappingURL=HTMLCollectionBaseIsolate.js.map