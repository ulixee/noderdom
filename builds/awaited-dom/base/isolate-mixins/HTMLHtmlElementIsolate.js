"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLHtmlElementIsolateConstantKeys = exports.HTMLHtmlElementIsolatePropertyKeys = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLHtmlElementIsolate', exports.getState, exports.setState);
class HTMLHtmlElementIsolate {
    get version() {
        return exports.awaitedHandler.getProperty(this, 'version', false);
    }
}
exports.default = HTMLHtmlElementIsolate;
exports.HTMLHtmlElementIsolatePropertyKeys = ['version'];
exports.HTMLHtmlElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLHtmlElementIsolate.js.map