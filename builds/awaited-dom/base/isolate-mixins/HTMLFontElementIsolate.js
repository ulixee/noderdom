"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFontElementIsolateConstantKeys = exports.HTMLFontElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLFontElementIsolate', exports.getState, exports.setState);
class HTMLFontElementIsolate {
    get color() {
        return exports.awaitedHandler.getProperty(this, 'color', false);
    }
    get face() {
        return exports.awaitedHandler.getProperty(this, 'face', false);
    }
    get size() {
        return exports.awaitedHandler.getProperty(this, 'size', false);
    }
}
exports.default = HTMLFontElementIsolate;
exports.HTMLFontElementIsolatePropertyKeys = ['color', 'face', 'size'];
exports.HTMLFontElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLFontElementIsolate.js.map