"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFrameElementIsolateConstantKeys = exports.HTMLFrameElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLFrameElementIsolate', exports.getState, exports.setState);
class HTMLFrameElementIsolate {
    get contentDocument() {
        throw new Error('HTMLFrameElementIsolate.contentDocument getter not implemented');
    }
    get frameBorder() {
        return exports.awaitedHandler.getProperty(this, 'frameBorder', false);
    }
    get longDesc() {
        return exports.awaitedHandler.getProperty(this, 'longDesc', false);
    }
    get marginHeight() {
        return exports.awaitedHandler.getProperty(this, 'marginHeight', false);
    }
    get marginWidth() {
        return exports.awaitedHandler.getProperty(this, 'marginWidth', false);
    }
    get name() {
        return exports.awaitedHandler.getProperty(this, 'name', false);
    }
    get noResize() {
        return exports.awaitedHandler.getProperty(this, 'noResize', false);
    }
    get scrolling() {
        return exports.awaitedHandler.getProperty(this, 'scrolling', false);
    }
    get src() {
        return exports.awaitedHandler.getProperty(this, 'src', false);
    }
}
exports.default = HTMLFrameElementIsolate;
exports.HTMLFrameElementIsolatePropertyKeys = ['contentDocument', 'frameBorder', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'noResize', 'scrolling', 'src'];
exports.HTMLFrameElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLFrameElementIsolate.js.map