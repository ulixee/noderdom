"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLTableSectionElement_1 = require("../../base/official-klasses/HTMLTableSectionElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const HTMLTableSectionElementBaseClass = HTMLTableSectionElement_1.HTMLTableSectionElementGenerator(HTMLElement_1.default);
class HTMLTableSectionElement extends HTMLTableSectionElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get rows() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty(this, 'rows'), awaitedOptions);
    }
}
exports.default = HTMLTableSectionElement;
//# sourceMappingURL=HTMLTableSectionElement.js.map