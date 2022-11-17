"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturePolicyConstantKeys = exports.FeaturePolicyPropertyKeys = exports.FeaturePolicyGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('FeaturePolicy', exports.getState, exports.setState);
function FeaturePolicyGenerator() {
    return class FeaturePolicy {
        constructor() {
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.FeaturePolicyPropertyKeys, exports.FeaturePolicyConstantKeys);
        }
    };
}
exports.FeaturePolicyGenerator = FeaturePolicyGenerator;
exports.FeaturePolicyPropertyKeys = [];
exports.FeaturePolicyConstantKeys = [];
//# sourceMappingURL=FeaturePolicy.js.map