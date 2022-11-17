"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLLinkElement_1 = require("../../base/official-klasses/HTMLLinkElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
const LinkStyle_1 = __importDefault(require("../official-mixins/LinkStyle"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLLinkElementBaseClass = (0, HTMLLinkElement_1.HTMLLinkElementGenerator)(HTMLElement_1.default, LinkStyle_1.default);
class HTMLLinkElement extends HTMLLinkElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get relList() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDOMTokenList)(awaitedPath.addProperty(this, 'relList'), awaitedOptions);
    }
    get sizes() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDOMTokenList)(awaitedPath.addProperty(this, 'sizes'), awaitedOptions);
    }
}
exports.default = HTMLLinkElement;
//# sourceMappingURL=HTMLLinkElement.js.map