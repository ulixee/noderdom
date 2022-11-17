"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLMetaElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLMetaElementIsolate"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
class HTMLMetaElementIsolate extends HTMLMetaElementIsolate_1.default {
}
exports.default = HTMLMetaElementIsolate;
//# sourceMappingURL=HTMLMetaElementIsolate.js.map