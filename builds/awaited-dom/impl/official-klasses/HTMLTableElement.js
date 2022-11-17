"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLTableElement_1 = require("../../base/official-klasses/HTMLTableElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLTableElementBaseClass = (0, HTMLTableElement_1.HTMLTableElementGenerator)(HTMLElement_1.default);
class HTMLTableElement extends HTMLTableElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get caption() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createHTMLTableCaptionElement)(awaitedPath.addProperty(this, 'caption'), awaitedOptions);
    }
    get rows() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addProperty(this, 'rows'), awaitedOptions);
    }
    get tBodies() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addProperty(this, 'tBodies'), awaitedOptions);
    }
    get tFoot() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createHTMLTableSectionElement)(awaitedPath.addProperty(this, 'tFoot'), awaitedOptions);
    }
    get tHead() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createHTMLTableSectionElement)(awaitedPath.addProperty(this, 'tHead'), awaitedOptions);
    }
}
exports.default = HTMLTableElement;
//# sourceMappingURL=HTMLTableElement.js.map