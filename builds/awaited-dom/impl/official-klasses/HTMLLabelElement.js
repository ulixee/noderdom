"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLLabelElement_1 = require("../../base/official-klasses/HTMLLabelElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLLabelElementBaseClass = HTMLLabelElement_1.HTMLLabelElementGenerator(HTMLElement_1.default);
class HTMLLabelElement extends HTMLLabelElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get control() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLElement(awaitedPath.addProperty('control'), awaitedOptions);
    }
    get form() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
    }
}
exports.default = HTMLLabelElement;
//# sourceMappingURL=HTMLLabelElement.js.map