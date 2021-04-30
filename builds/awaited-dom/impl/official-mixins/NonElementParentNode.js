"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const NonElementParentNode_1 = __importDefault(require("../../base/official-mixins/NonElementParentNode"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class NonElementParentNode extends NonElementParentNode_1.default {
    getElementById(elementId) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addMethod(this, 'getElementById', elementId), awaitedOptions);
    }
}
exports.default = NonElementParentNode;
//# sourceMappingURL=NonElementParentNode.js.map