"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const CSSRule_1 = require("../../base/official-klasses/CSSRule");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const CSSRuleBaseClass = (0, CSSRule_1.CSSRuleGenerator)();
class CSSRule extends CSSRuleBaseClass {
    get parentRule() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createCSSRule)(awaitedPath.addProperty(this, 'parentRule'), awaitedOptions);
    }
    get parentStyleSheet() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createCSSStyleSheet)(awaitedPath.addProperty(this, 'parentStyleSheet'), awaitedOptions);
    }
}
exports.default = CSSRule;
//# sourceMappingURL=CSSRule.js.map