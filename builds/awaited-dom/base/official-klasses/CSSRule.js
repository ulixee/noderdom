"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSRuleConstantKeys = exports.CSSRulePropertyKeys = exports.CSSRuleGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('CSSRule', exports.getState, exports.setState);
function CSSRuleGenerator() {
    var _a;
    return _a = class CSSRule {
            constructor() {
                this.CHARSET_RULE = 2;
                this.FONT_FACE_RULE = 5;
                this.IMPORT_RULE = 3;
                this.MARGIN_RULE = 9;
                this.MEDIA_RULE = 4;
                this.NAMESPACE_RULE = 10;
                this.PAGE_RULE = 6;
                this.STYLE_RULE = 1;
            }
            // properties
            get cssText() {
                return exports.awaitedHandler.getProperty(this, 'cssText', false);
            }
            get parentRule() {
                throw new Error('CSSRule.parentRule getter not implemented');
            }
            get parentStyleSheet() {
                throw new Error('CSSRule.parentStyleSheet getter not implemented');
            }
            get type() {
                return exports.awaitedHandler.getProperty(this, 'type', false);
            }
            [Symbol.for('nodejs.util.inspect.custom')]() {
                return (0, inspectInstanceProperties_1.default)(this, exports.CSSRulePropertyKeys, exports.CSSRuleConstantKeys);
            }
        },
        _a.CHARSET_RULE = 2,
        _a.FONT_FACE_RULE = 5,
        _a.IMPORT_RULE = 3,
        _a.MARGIN_RULE = 9,
        _a.MEDIA_RULE = 4,
        _a.NAMESPACE_RULE = 10,
        _a.PAGE_RULE = 6,
        _a.STYLE_RULE = 1,
        _a;
}
exports.CSSRuleGenerator = CSSRuleGenerator;
exports.CSSRulePropertyKeys = ['cssText', 'parentRule', 'parentStyleSheet', 'type'];
exports.CSSRuleConstantKeys = ['CHARSET_RULE', 'FONT_FACE_RULE', 'IMPORT_RULE', 'MARGIN_RULE', 'MEDIA_RULE', 'NAMESPACE_RULE', 'PAGE_RULE', 'STYLE_RULE'];
//# sourceMappingURL=CSSRule.js.map