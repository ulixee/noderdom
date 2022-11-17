"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const ParentNode_1 = __importDefault(require("../../base/official-mixins/ParentNode"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
class ParentNode extends ParentNode_1.default {
    get children() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addProperty(this, 'children'), awaitedOptions);
    }
    get firstElementChild() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addProperty(this, 'firstElementChild'), awaitedOptions);
    }
    get lastElementChild() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addProperty(this, 'lastElementChild'), awaitedOptions);
    }
    // methods
    querySelector(selectors) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addMethod(this, 'querySelector', selectors), awaitedOptions);
    }
    querySelectorAll(selectors) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNodeList)(awaitedPath.addMethod(this, 'querySelectorAll', selectors), awaitedOptions);
    }
}
exports.default = ParentNode;
//# sourceMappingURL=ParentNode.js.map