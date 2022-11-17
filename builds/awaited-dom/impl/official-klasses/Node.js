"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Node_1 = require("../../base/official-klasses/Node");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const NodeBaseClass = (0, Node_1.NodeGenerator)();
class Node extends NodeBaseClass {
    get childNodes() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNodeList)(awaitedPath.addProperty(this, 'childNodes'), awaitedOptions);
    }
    get firstChild() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addProperty(this, 'firstChild'), awaitedOptions);
    }
    get lastChild() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addProperty(this, 'lastChild'), awaitedOptions);
    }
    get nextSibling() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addProperty(this, 'nextSibling'), awaitedOptions);
    }
    get ownerDocument() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperDocument)(awaitedPath.addProperty(this, 'ownerDocument'), awaitedOptions);
    }
    get parentElement() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addProperty(this, 'parentElement'), awaitedOptions);
    }
    get parentNode() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addProperty(this, 'parentNode'), awaitedOptions);
    }
    get previousSibling() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addProperty(this, 'previousSibling'), awaitedOptions);
    }
    // methods
    getRootNode(options) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addMethod(this, 'getRootNode', options), awaitedOptions);
    }
}
exports.default = Node;
//# sourceMappingURL=Node.js.map