"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLOptGroupElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLOptGroupElementIsolate"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
class HTMLOptGroupElementIsolate extends HTMLOptGroupElementIsolate_1.default {
}
exports.default = HTMLOptGroupElementIsolate;
//# sourceMappingURL=HTMLOptGroupElementIsolate.js.map