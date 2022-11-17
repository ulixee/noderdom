"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLTableRowElement_1 = require("../../base/official-klasses/HTMLTableRowElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLTableRowElementBaseClass = (0, HTMLTableRowElement_1.HTMLTableRowElementGenerator)(HTMLElement_1.default);
class HTMLTableRowElement extends HTMLTableRowElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get cells() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addProperty(this, 'cells'), awaitedOptions);
    }
    // methods
    insertCell(index) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createHTMLTableCellElement)(awaitedPath.addMethod(this, 'insertCell', index), awaitedOptions);
    }
}
exports.default = HTMLTableRowElement;
//# sourceMappingURL=HTMLTableRowElement.js.map