"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLLIElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLLIElementIsolate"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class HTMLLIElementIsolate extends HTMLLIElementIsolate_1.default {
}
exports.default = HTMLLIElementIsolate;
//# sourceMappingURL=HTMLLIElementIsolate.js.map