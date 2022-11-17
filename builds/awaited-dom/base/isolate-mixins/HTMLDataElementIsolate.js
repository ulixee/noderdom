"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLDataElementIsolateConstantKeys = exports.HTMLDataElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLDataElementIsolate', exports.getState, exports.setState);
class HTMLDataElementIsolate {
    get value() {
        return exports.awaitedHandler.getProperty(this, 'value', false);
    }
}
exports.default = HTMLDataElementIsolate;
exports.HTMLDataElementIsolatePropertyKeys = ['value'];
exports.HTMLDataElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLDataElementIsolate.js.map