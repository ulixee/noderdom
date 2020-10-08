"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const SuperStyleSheet_1 = require("../../base/super-klasses/SuperStyleSheet");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const SuperStyleSheetBaseClass = SuperStyleSheet_1.SuperStyleSheetGenerator();
class SuperStyleSheet extends SuperStyleSheetBaseClass {
}
exports.default = SuperStyleSheet;
//# sourceMappingURL=SuperStyleSheet.js.map