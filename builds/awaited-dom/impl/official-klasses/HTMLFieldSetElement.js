"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLFieldSetElement_1 = require("../../base/official-klasses/HTMLFieldSetElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const HTMLFieldSetElementBaseClass = HTMLFieldSetElement_1.HTMLFieldSetElementGenerator(HTMLElement_1.default);
class HTMLFieldSetElement extends HTMLFieldSetElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get elements() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty('elements'), awaitedOptions);
    }
    get form() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
    }
}
exports.default = HTMLFieldSetElement;
//# sourceMappingURL=HTMLFieldSetElement.js.map