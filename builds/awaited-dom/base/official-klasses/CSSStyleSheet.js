"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSStyleSheetConstantKeys = exports.CSSStyleSheetPropertyKeys = exports.CSSStyleSheetGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const StyleSheet_1 = require("./StyleSheet");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('CSSStyleSheet', exports.getState, exports.setState);
function CSSStyleSheetGenerator(StyleSheet) {
    return class CSSStyleSheet extends StyleSheet {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.CSSStyleSheetConstantKeys, exports.CSSStyleSheetPropertyKeys);
        }
        // properties
        get cssRules() {
            throw new Error('CSSStyleSheet.cssRules getter not implemented');
        }
        get ownerRule() {
            throw new Error('CSSStyleSheet.ownerRule getter not implemented');
        }
        // methods
        deleteRule(index) {
            return exports.awaitedHandler.runMethod(this, 'deleteRule', [index]);
        }
        insertRule(rule, index) {
            return exports.awaitedHandler.runMethod(this, 'insertRule', [rule, index]);
        }
    };
}
exports.CSSStyleSheetGenerator = CSSStyleSheetGenerator;
exports.CSSStyleSheetPropertyKeys = [...StyleSheet_1.StyleSheetPropertyKeys, 'cssRules', 'ownerRule'];
exports.CSSStyleSheetConstantKeys = [...StyleSheet_1.StyleSheetConstantKeys];
//# sourceMappingURL=CSSStyleSheet.js.map