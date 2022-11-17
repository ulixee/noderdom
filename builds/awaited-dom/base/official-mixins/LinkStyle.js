"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkStyleConstantKeys = exports.LinkStylePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('LinkStyle', exports.getState, exports.setState);
class LinkStyle {
    get sheet() {
        throw new Error('LinkStyle.sheet getter not implemented');
    }
}
exports.default = LinkStyle;
exports.LinkStylePropertyKeys = ['sheet'];
exports.LinkStyleConstantKeys = [];
//# sourceMappingURL=LinkStyle.js.map