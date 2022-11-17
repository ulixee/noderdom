"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLInputElement_1 = require("../../base/official-klasses/HTMLInputElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLInputElementBaseClass = (0, HTMLInputElement_1.HTMLInputElementGenerator)(HTMLElement_1.default);
class HTMLInputElement extends HTMLInputElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get files() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createFileList)(awaitedPath.addProperty(this, 'files'), awaitedOptions);
    }
    get form() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createHTMLFormElement)(awaitedPath.addProperty(this, 'form'), awaitedOptions);
    }
    get labels() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNodeList)(awaitedPath.addProperty(this, 'labels'), awaitedOptions);
    }
    get list() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLElement)(awaitedPath.addProperty(this, 'list'), awaitedOptions);
    }
}
exports.default = HTMLInputElement;
//# sourceMappingURL=HTMLInputElement.js.map