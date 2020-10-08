"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLInputElement_1 = require("../../base/official-klasses/HTMLInputElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const HTMLInputElementBaseClass = HTMLInputElement_1.HTMLInputElementGenerator(HTMLElement_1.default);
class HTMLInputElement extends HTMLInputElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get form() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
    }
    get labels() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNodeList(awaitedPath.addProperty('labels'), awaitedOptions);
    }
    get list() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLElement(awaitedPath.addProperty('list'), awaitedOptions);
    }
}
exports.default = HTMLInputElement;
//# sourceMappingURL=HTMLInputElement.js.map