"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLPreElement_1 = require("../../base/official-klasses/HTMLPreElement");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLPreElementBaseClass = (0, HTMLPreElement_1.HTMLPreElementGenerator)(HTMLElement_1.default);
class HTMLPreElement extends HTMLPreElementBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLPreElement;
//# sourceMappingURL=HTMLPreElement.js.map