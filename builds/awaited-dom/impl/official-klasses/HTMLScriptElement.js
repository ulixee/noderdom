"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLScriptElement_1 = require("../../base/official-klasses/HTMLScriptElement");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLScriptElementBaseClass = (0, HTMLScriptElement_1.HTMLScriptElementGenerator)(HTMLElement_1.default);
class HTMLScriptElement extends HTMLScriptElementBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLScriptElement;
//# sourceMappingURL=HTMLScriptElement.js.map