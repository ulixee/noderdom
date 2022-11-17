"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLCanvasElementIsolateConstantKeys = exports.HTMLCanvasElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLCanvasElementIsolate', exports.getState, exports.setState);
class HTMLCanvasElementIsolate {
    get height() {
        return exports.awaitedHandler.getProperty(this, 'height', false);
    }
    get width() {
        return exports.awaitedHandler.getProperty(this, 'width', false);
    }
    // methods
    captureStream(frameRequestRate) {
        throw new Error('HTMLCanvasElementIsolate.captureStream not implemented');
    }
    toDataURL(type, quality) {
        return exports.awaitedHandler.runMethod(this, 'toDataURL', [type, quality]);
    }
    transferControlToOffscreen() {
        throw new Error('HTMLCanvasElementIsolate.transferControlToOffscreen not implemented');
    }
}
exports.default = HTMLCanvasElementIsolate;
exports.HTMLCanvasElementIsolatePropertyKeys = ['height', 'width'];
exports.HTMLCanvasElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLCanvasElementIsolate.js.map