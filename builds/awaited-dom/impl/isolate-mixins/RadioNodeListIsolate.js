"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const RadioNodeListIsolate_1 = __importDefault(require("../../base/isolate-mixins/RadioNodeListIsolate"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class RadioNodeListIsolate extends RadioNodeListIsolate_1.default {
}
exports.default = RadioNodeListIsolate;
//# sourceMappingURL=RadioNodeListIsolate.js.map