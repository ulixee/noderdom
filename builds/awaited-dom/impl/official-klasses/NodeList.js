"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const NodeList_1 = require("../../base/official-klasses/NodeList");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const NodeListBaseClass = NodeList_1.NodeListGenerator();
class NodeList extends NodeListBaseClass {
    item(index) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addMethod('item', index), awaitedOptions);
    }
}
exports.default = NodeList;
//# sourceMappingURL=NodeList.js.map