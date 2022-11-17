"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const CSSStyleSheet_1 = require("../../base/official-klasses/CSSStyleSheet");
const create_1 = require("../create");
const StyleSheet_1 = __importDefault(require("./StyleSheet"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const CSSStyleSheetBaseClass = (0, CSSStyleSheet_1.CSSStyleSheetGenerator)(StyleSheet_1.default);
class CSSStyleSheet extends CSSStyleSheetBaseClass {
    constructor() {
        super();
    }
    // properties
    get cssRules() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createCSSRuleList)(awaitedPath.addProperty(this, 'cssRules'), awaitedOptions);
    }
    get ownerRule() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createCSSRule)(awaitedPath.addProperty(this, 'ownerRule'), awaitedOptions);
    }
}
exports.default = CSSStyleSheet;
//# sourceMappingURL=CSSStyleSheet.js.map