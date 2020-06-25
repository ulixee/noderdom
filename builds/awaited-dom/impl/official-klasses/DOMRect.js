"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const DOMRect_1 = require("../../base/official-klasses/DOMRect");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const DOMRectBaseClass = DOMRect_1.DOMRectGenerator();
class DOMRect extends DOMRectBaseClass {
}
exports.default = DOMRect;
//# sourceMappingURL=DOMRect.js.map