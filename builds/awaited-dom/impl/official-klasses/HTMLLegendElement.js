"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLLegendElement_1 = require("../../base/official-klasses/HTMLLegendElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLLegendElementBaseClass = HTMLLegendElement_1.HTMLLegendElementGenerator(HTMLElement_1.default);
class HTMLLegendElement extends HTMLLegendElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get form() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLFormElement(awaitedPath.addProperty(this, 'form'), awaitedOptions);
    }
}
exports.default = HTMLLegendElement;
//# sourceMappingURL=HTMLLegendElement.js.map