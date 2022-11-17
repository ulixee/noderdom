"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const XPathExpression_1 = require("../../base/official-klasses/XPathExpression");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const XPathExpressionBaseClass = (0, XPathExpression_1.XPathExpressionGenerator)();
class XPathExpression extends XPathExpressionBaseClass {
    evaluate(contextNode, type, result) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createXPathResult)(awaitedPath.addMethod(this, 'evaluate', contextNode, type, result), awaitedOptions);
    }
}
exports.default = XPathExpression;
//# sourceMappingURL=XPathExpression.js.map