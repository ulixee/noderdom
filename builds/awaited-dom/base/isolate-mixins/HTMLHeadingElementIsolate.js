"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLHeadingElementIsolateConstantKeys = exports.HTMLHeadingElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLHeadingElementIsolate', exports.getState, exports.setState);
class HTMLHeadingElementIsolate {
    get align() {
        return exports.awaitedHandler.getProperty(this, 'align', false);
    }
}
exports.default = HTMLHeadingElementIsolate;
exports.HTMLHeadingElementIsolatePropertyKeys = ['align'];
exports.HTMLHeadingElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLHeadingElementIsolate.js.map