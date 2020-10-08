"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const CharacterDataIsolate_1 = __importDefault(require("../../base/isolate-mixins/CharacterDataIsolate"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class CharacterDataIsolate extends CharacterDataIsolate_1.default {
}
exports.default = CharacterDataIsolate;
//# sourceMappingURL=CharacterDataIsolate.js.map