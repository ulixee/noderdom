"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const XPathEvaluator_1 = require("../../base/official-klasses/XPathEvaluator");
const XPathEvaluatorBase_1 = __importDefault(require("../official-mixins/XPathEvaluatorBase"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const XPathEvaluatorBaseClass = (0, XPathEvaluator_1.XPathEvaluatorGenerator)(XPathEvaluatorBase_1.default);
class XPathEvaluator extends XPathEvaluatorBaseClass {
    constructor() {
        super();
    }
}
exports.default = XPathEvaluator;
//# sourceMappingURL=XPathEvaluator.js.map