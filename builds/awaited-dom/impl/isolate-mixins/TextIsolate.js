"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const TextIsolate_1 = __importDefault(require("../../base/isolate-mixins/TextIsolate"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class TextIsolate extends TextIsolate_1.default {
}
exports.default = TextIsolate;
//# sourceMappingURL=TextIsolate.js.map