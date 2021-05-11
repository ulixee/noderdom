"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const ElementCSSInlineStyle_1 = __importDefault(require("../../base/official-mixins/ElementCSSInlineStyle"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class ElementCSSInlineStyle extends ElementCSSInlineStyle_1.default {
    get style() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createCSSStyleDeclaration(awaitedPath.addProperty(this, 'style'), awaitedOptions);
    }
}
exports.default = ElementCSSInlineStyle;
//# sourceMappingURL=ElementCSSInlineStyle.js.map