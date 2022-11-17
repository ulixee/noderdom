"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.XPathEvaluatorConstantKeys = exports.XPathEvaluatorPropertyKeys = exports.XPathEvaluatorGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const XPathEvaluatorBase_1 = require("../official-mixins/XPathEvaluatorBase");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('XPathEvaluator', exports.getState, exports.setState);
function XPathEvaluatorGenerator(XPathEvaluatorBase) {
    return class XPathEvaluator extends XPathEvaluatorBase {
        constructor() {
            super();
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.XPathEvaluatorPropertyKeys, exports.XPathEvaluatorConstantKeys);
        }
    };
}
exports.XPathEvaluatorGenerator = XPathEvaluatorGenerator;
exports.XPathEvaluatorPropertyKeys = [...XPathEvaluatorBase_1.XPathEvaluatorBasePropertyKeys];
exports.XPathEvaluatorConstantKeys = [...XPathEvaluatorBase_1.XPathEvaluatorBaseConstantKeys];
//# sourceMappingURL=XPathEvaluator.js.map