"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const DOMRect_1 = require("../../base/official-klasses/DOMRect");
const DOMRectReadOnly_1 = __importDefault(require("./DOMRectReadOnly"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const DOMRectBaseClass = (0, DOMRect_1.DOMRectGenerator)(DOMRectReadOnly_1.default);
class DOMRect extends DOMRectBaseClass {
    constructor(_x, _y, _width, _height) {
        super(_x, _y, _width, _height);
    }
}
exports.default = DOMRect;
//# sourceMappingURL=DOMRect.js.map