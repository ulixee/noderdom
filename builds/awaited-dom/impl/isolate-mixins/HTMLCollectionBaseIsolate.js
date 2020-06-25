"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLCollectionBaseIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLCollectionBaseIsolate"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
class HTMLCollectionBaseIsolate extends HTMLCollectionBaseIsolate_1.default {
}
exports.default = HTMLCollectionBaseIsolate;
//# sourceMappingURL=HTMLCollectionBaseIsolate.js.map