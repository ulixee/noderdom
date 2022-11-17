"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const CSSRuleList_1 = require("../../base/official-klasses/CSSRuleList");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const CSSRuleListBaseClass = (0, CSSRuleList_1.CSSRuleListGenerator)();
class CSSRuleList extends CSSRuleListBaseClass {
    item(index) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createCSSRule)(awaitedPath.addMethod(this, 'item', index), awaitedOptions);
    }
}
exports.default = CSSRuleList;
//# sourceMappingURL=CSSRuleList.js.map