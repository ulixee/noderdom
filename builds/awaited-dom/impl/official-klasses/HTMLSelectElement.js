"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLSelectElement_1 = require("../../base/official-klasses/HTMLSelectElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const HTMLSelectElementBaseClass = HTMLSelectElement_1.HTMLSelectElementGenerator(HTMLElement_1.default);
class HTMLSelectElement extends HTMLSelectElementBaseClass {
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
    get options() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLOptionsCollection(awaitedPath.addProperty('options'), awaitedOptions);
    }
    get selectedOptions() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty('selectedOptions'), awaitedOptions);
    }
    // methods
    item(index) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addMethod('item', index), awaitedOptions);
    }
    namedItem(name) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLOptionElement(awaitedPath.addMethod('namedItem', name), awaitedOptions);
    }
}
exports.default = HTMLSelectElement;
//# sourceMappingURL=HTMLSelectElement.js.map