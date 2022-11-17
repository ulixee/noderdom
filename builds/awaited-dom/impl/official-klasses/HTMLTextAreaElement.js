"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLTextAreaElement_1 = require("../../base/official-klasses/HTMLTextAreaElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLTextAreaElementBaseClass = (0, HTMLTextAreaElement_1.HTMLTextAreaElementGenerator)(HTMLElement_1.default);
class HTMLTextAreaElement extends HTMLTextAreaElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get form() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createHTMLFormElement)(awaitedPath.addProperty(this, 'form'), awaitedOptions);
    }
    get labels() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNodeList)(awaitedPath.addProperty(this, 'labels'), awaitedOptions);
    }
}
exports.default = HTMLTextAreaElement;
//# sourceMappingURL=HTMLTextAreaElement.js.map