"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLSlotElement_1 = require("../../base/official-klasses/HTMLSlotElement");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const HTMLSlotElementBaseClass = HTMLSlotElement_1.HTMLSlotElementGenerator(HTMLElement_1.default);
class HTMLSlotElement extends HTMLSlotElementBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLSlotElement;
//# sourceMappingURL=HTMLSlotElement.js.map