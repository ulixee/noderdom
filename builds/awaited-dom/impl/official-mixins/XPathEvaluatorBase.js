"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const XPathEvaluatorBase_1 = __importDefault(require("../../base/official-mixins/XPathEvaluatorBase"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
class XPathEvaluatorBase extends XPathEvaluatorBase_1.default {
    createExpression(expression, resolver) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createXPathExpression)(awaitedPath.addMethod(this, 'createExpression', expression, resolver), awaitedOptions);
    }
    evaluate(expression, contextNode, resolver, type, result) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createXPathResult)(awaitedPath.addMethod(this, 'evaluate', expression, contextNode, resolver, type, result), awaitedOptions);
    }
}
exports.default = XPathEvaluatorBase;
//# sourceMappingURL=XPathEvaluatorBase.js.map