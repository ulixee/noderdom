"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLLabelElement_1 = require("../../base/official-klasses/HTMLLabelElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLLabelElementBaseClass = (0, HTMLLabelElement_1.HTMLLabelElementGenerator)(HTMLElement_1.default);
class HTMLLabelElement extends HTMLLabelElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get control() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLElement)(awaitedPath.addProperty(this, 'control'), awaitedOptions);
    }
    get form() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createHTMLFormElement)(awaitedPath.addProperty(this, 'form'), awaitedOptions);
    }
}
exports.default = HTMLLabelElement;
//# sourceMappingURL=HTMLLabelElement.js.map