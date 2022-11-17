"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLProgressElementIsolateConstantKeys = exports.HTMLProgressElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLProgressElementIsolate', exports.getState, exports.setState);
class HTMLProgressElementIsolate {
    get labels() {
        throw new Error('HTMLProgressElementIsolate.labels getter not implemented');
    }
    get max() {
        return exports.awaitedHandler.getProperty(this, 'max', false);
    }
    get position() {
        return exports.awaitedHandler.getProperty(this, 'position', false);
    }
    get value() {
        return exports.awaitedHandler.getProperty(this, 'value', false);
    }
}
exports.default = HTMLProgressElementIsolate;
exports.HTMLProgressElementIsolatePropertyKeys = ['labels', 'max', 'position', 'value'];
exports.HTMLProgressElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLProgressElementIsolate.js.map