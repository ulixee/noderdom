"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Node_1 = require("../../base/official-klasses/Node");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const NodeBaseClass = Node_1.NodeGenerator();
class Node extends NodeBaseClass {
    get childNodes() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNodeList(awaitedPath.addProperty('childNodes'), awaitedOptions);
    }
    get firstChild() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty('firstChild'), awaitedOptions);
    }
    get lastChild() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty('lastChild'), awaitedOptions);
    }
    get nextSibling() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty('nextSibling'), awaitedOptions);
    }
    get ownerDocument() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperDocument(awaitedPath.addProperty('ownerDocument'), awaitedOptions);
    }
    get parentElement() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty('parentElement'), awaitedOptions);
    }
    get parentNode() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty('parentNode'), awaitedOptions);
    }
    get previousSibling() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty('previousSibling'), awaitedOptions);
    }
    // methods
    getRootNode(options) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addMethod('getRootNode', options), awaitedOptions);
    }
}
exports.default = Node;
//# sourceMappingURL=Node.js.map