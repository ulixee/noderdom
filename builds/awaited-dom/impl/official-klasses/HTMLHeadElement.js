"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLHeadElement_1 = require("../../base/official-klasses/HTMLHeadElement");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLHeadElementBaseClass = HTMLHeadElement_1.HTMLHeadElementGenerator(HTMLElement_1.default);
class HTMLHeadElement extends HTMLHeadElementBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLHeadElement;
//# sourceMappingURL=HTMLHeadElement.js.map