"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const NodeListIsolate_1 = __importDefault(require("../../base/isolate-mixins/NodeListIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
class NodeListIsolate extends NodeListIsolate_1.default {
    item(index) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addMethod('item', index), awaitedOptions);
    }
}
exports.default = NodeListIsolate;
//# sourceMappingURL=NodeListIsolate.js.map