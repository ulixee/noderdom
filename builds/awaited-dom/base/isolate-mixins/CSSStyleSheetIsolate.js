"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSStyleSheetIsolateConstantKeys = exports.CSSStyleSheetIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('CSSStyleSheetIsolate', exports.getState, exports.setState);
class CSSStyleSheetIsolate {
    get cssRules() {
        throw new Error('CSSStyleSheetIsolate.cssRules getter not implemented');
    }
    get ownerRule() {
        throw new Error('CSSStyleSheetIsolate.ownerRule getter not implemented');
    }
    // methods
    deleteRule(index) {
        return exports.awaitedHandler.runMethod(this, 'deleteRule', [index]);
    }
    insertRule(rule, index) {
        return exports.awaitedHandler.runMethod(this, 'insertRule', [rule, index]);
    }
}
exports.default = CSSStyleSheetIsolate;
exports.CSSStyleSheetIsolatePropertyKeys = ['cssRules', 'ownerRule'];
exports.CSSStyleSheetIsolateConstantKeys = [];
//# sourceMappingURL=CSSStyleSheetIsolate.js.map