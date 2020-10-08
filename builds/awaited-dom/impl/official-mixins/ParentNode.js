"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const ParentNode_1 = __importDefault(require("../../base/official-mixins/ParentNode"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class ParentNode extends ParentNode_1.default {
    get children() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty('children'), awaitedOptions);
    }
    get firstElementChild() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty('firstElementChild'), awaitedOptions);
    }
    get lastElementChild() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty('lastElementChild'), awaitedOptions);
    }
    // methods
    querySelector(selectors) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addMethod('querySelector', selectors), awaitedOptions);
    }
    querySelectorAll(selectors) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNodeList(awaitedPath.addMethod('querySelectorAll', selectors), awaitedOptions);
    }
}
exports.default = ParentNode;
//# sourceMappingURL=ParentNode.js.map