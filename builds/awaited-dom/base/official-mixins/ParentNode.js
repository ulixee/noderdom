"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentNodeConstantKeys = exports.ParentNodePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('ParentNode', exports.getState, exports.setState);
class ParentNode {
    get childElementCount() {
        return exports.awaitedHandler.getProperty(this, 'childElementCount', false);
    }
    get children() {
        throw new Error('ParentNode.children getter not implemented');
    }
    get firstElementChild() {
        throw new Error('ParentNode.firstElementChild getter not implemented');
    }
    get lastElementChild() {
        throw new Error('ParentNode.lastElementChild getter not implemented');
    }
    // methods
    querySelector(selectors) {
        throw new Error('ParentNode.querySelector not implemented');
    }
    querySelectorAll(selectors) {
        throw new Error('ParentNode.querySelectorAll not implemented');
    }
}
exports.default = ParentNode;
exports.ParentNodePropertyKeys = ['childElementCount', 'children', 'firstElementChild', 'lastElementChild'];
exports.ParentNodeConstantKeys = [];
//# sourceMappingURL=ParentNode.js.map