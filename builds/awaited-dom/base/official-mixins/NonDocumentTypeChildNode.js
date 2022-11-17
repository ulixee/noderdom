"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonDocumentTypeChildNodeConstantKeys = exports.NonDocumentTypeChildNodePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('NonDocumentTypeChildNode', exports.getState, exports.setState);
class NonDocumentTypeChildNode {
    get nextElementSibling() {
        throw new Error('NonDocumentTypeChildNode.nextElementSibling getter not implemented');
    }
    get previousElementSibling() {
        throw new Error('NonDocumentTypeChildNode.previousElementSibling getter not implemented');
    }
}
exports.default = NonDocumentTypeChildNode;
exports.NonDocumentTypeChildNodePropertyKeys = ['nextElementSibling', 'previousElementSibling'];
exports.NonDocumentTypeChildNodeConstantKeys = [];
//# sourceMappingURL=NonDocumentTypeChildNode.js.map