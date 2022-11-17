"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLCollectionBaseIsolateConstantKeys = exports.HTMLCollectionBaseIsolatePropertyKeys = exports.awaitedIterator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLCollectionBaseIsolate', exports.getState, exports.setState);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
class HTMLCollectionBaseIsolate {
    get length() {
        return exports.awaitedHandler.getProperty(this, 'length', false);
    }
    // methods
    item(index) {
        throw new Error('HTMLCollectionBaseIsolate.item not implemented');
    }
    [Symbol.iterator]() {
        return exports.awaitedIterator.iterateNodePointers(this);
    }
}
exports.default = HTMLCollectionBaseIsolate;
exports.HTMLCollectionBaseIsolatePropertyKeys = ['length'];
exports.HTMLCollectionBaseIsolateConstantKeys = [];
//# sourceMappingURL=HTMLCollectionBaseIsolate.js.map