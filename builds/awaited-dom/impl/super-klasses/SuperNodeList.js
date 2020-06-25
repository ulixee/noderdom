"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const SuperNodeList_1 = require("../../base/super-klasses/SuperNodeList");
const create_1 = require("../create");
const NodeListIsolate_1 = __importDefault(require("../isolate-mixins/NodeListIsolate"));
const RadioNodeListIsolate_1 = __importDefault(require("../isolate-mixins/RadioNodeListIsolate"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const SuperNodeListBaseClass = SuperNodeList_1.SuperNodeListGenerator(NodeListIsolate_1.default, RadioNodeListIsolate_1.default);
class SuperNodeList extends SuperNodeListBaseClass {
    constructor() {
        super();
    }
    // methods
    item(index) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addMethod('item', index), awaitedOptions);
    }
}
exports.default = SuperNodeList;
//# sourceMappingURL=SuperNodeList.js.map