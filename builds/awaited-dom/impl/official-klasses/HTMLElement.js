"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLElement_1 = require("../../base/official-klasses/HTMLElement");
const create_1 = require("../create");
const Element_1 = __importDefault(require("./Element"));
const HTMLOrSVGElement_1 = __importDefault(require("../official-mixins/HTMLOrSVGElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLElementBaseClass = HTMLElement_1.HTMLElementGenerator(Element_1.default, HTMLOrSVGElement_1.default);
class HTMLElement extends HTMLElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get offsetParent() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty('offsetParent'), awaitedOptions);
    }
}
exports.default = HTMLElement;
//# sourceMappingURL=HTMLElement.js.map