"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const DOMRectReadOnly_1 = require("../../base/official-klasses/DOMRectReadOnly");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const DOMRectReadOnlyBaseClass = (0, DOMRectReadOnly_1.DOMRectReadOnlyGenerator)();
class DOMRectReadOnly extends DOMRectReadOnlyBaseClass {
}
exports.default = DOMRectReadOnly;
//# sourceMappingURL=DOMRectReadOnly.js.map