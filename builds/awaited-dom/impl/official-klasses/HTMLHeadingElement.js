"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLHeadingElement_1 = require("../../base/official-klasses/HTMLHeadingElement");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLHeadingElementBaseClass = (0, HTMLHeadingElement_1.HTMLHeadingElementGenerator)(HTMLElement_1.default);
class HTMLHeadingElement extends HTMLHeadingElementBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLHeadingElement;
//# sourceMappingURL=HTMLHeadingElement.js.map