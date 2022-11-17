"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLQuoteElementIsolateConstantKeys = exports.HTMLQuoteElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLQuoteElementIsolate', exports.getState, exports.setState);
class HTMLQuoteElementIsolate {
    get cite() {
        return exports.awaitedHandler.getProperty(this, 'cite', false);
    }
}
exports.default = HTMLQuoteElementIsolate;
exports.HTMLQuoteElementIsolatePropertyKeys = ['cite'];
exports.HTMLQuoteElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLQuoteElementIsolate.js.map