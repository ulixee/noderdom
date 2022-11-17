"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLAreaElement_1 = require("../../base/official-klasses/HTMLAreaElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
const HTMLHyperlinkElementUtils_1 = __importDefault(require("../official-mixins/HTMLHyperlinkElementUtils"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLAreaElementBaseClass = (0, HTMLAreaElement_1.HTMLAreaElementGenerator)(HTMLElement_1.default, HTMLHyperlinkElementUtils_1.default);
class HTMLAreaElement extends HTMLAreaElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get relList() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDOMTokenList)(awaitedPath.addProperty(this, 'relList'), awaitedOptions);
    }
}
exports.default = HTMLAreaElement;
//# sourceMappingURL=HTMLAreaElement.js.map