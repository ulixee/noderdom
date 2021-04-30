"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLDivElement_1 = require("../../base/official-klasses/HTMLDivElement");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const HTMLDivElementBaseClass = HTMLDivElement_1.HTMLDivElementGenerator(HTMLElement_1.default);
class HTMLDivElement extends HTMLDivElementBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLDivElement;
//# sourceMappingURL=HTMLDivElement.js.map