"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLBodyElementIsolateConstantKeys = exports.HTMLBodyElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLBodyElementIsolate', exports.getState, exports.setState);
class HTMLBodyElementIsolate {
    get aLink() {
        return exports.awaitedHandler.getProperty(this, 'aLink', false);
    }
    get background() {
        return exports.awaitedHandler.getProperty(this, 'background', false);
    }
    get bgColor() {
        return exports.awaitedHandler.getProperty(this, 'bgColor', false);
    }
    get link() {
        return exports.awaitedHandler.getProperty(this, 'link', false);
    }
    get text() {
        return exports.awaitedHandler.getProperty(this, 'text', false);
    }
    get vLink() {
        return exports.awaitedHandler.getProperty(this, 'vLink', false);
    }
}
exports.default = HTMLBodyElementIsolate;
exports.HTMLBodyElementIsolatePropertyKeys = ['aLink', 'background', 'bgColor', 'link', 'text', 'vLink'];
exports.HTMLBodyElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLBodyElementIsolate.js.map