"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonElementParentNodeConstantKeys = exports.NonElementParentNodePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('NonElementParentNode', exports.getState, exports.setState);
class NonElementParentNode {
    getElementById(elementId) {
        throw new Error('NonElementParentNode.getElementById not implemented');
    }
}
exports.default = NonElementParentNode;
exports.NonElementParentNodePropertyKeys = [];
exports.NonElementParentNodeConstantKeys = [];
//# sourceMappingURL=NonElementParentNode.js.map