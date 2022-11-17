"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLTimeElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLTimeElementIsolate"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
class HTMLTimeElementIsolate extends HTMLTimeElementIsolate_1.default {
}
exports.default = HTMLTimeElementIsolate;
//# sourceMappingURL=HTMLTimeElementIsolate.js.map