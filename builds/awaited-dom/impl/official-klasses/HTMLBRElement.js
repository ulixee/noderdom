"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLBRElement_1 = require("../../base/official-klasses/HTMLBRElement");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLBRElementBaseClass = (0, HTMLBRElement_1.HTMLBRElementGenerator)(HTMLElement_1.default);
class HTMLBRElement extends HTMLBRElementBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLBRElement;
//# sourceMappingURL=HTMLBRElement.js.map