"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const NonDocumentTypeChildNode_1 = __importDefault(require("../../base/official-mixins/NonDocumentTypeChildNode"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class NonDocumentTypeChildNode extends NonDocumentTypeChildNode_1.default {
    get nextElementSibling() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty('nextElementSibling'), awaitedOptions);
    }
    get previousElementSibling() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty('previousElementSibling'), awaitedOptions);
    }
}
exports.default = NonDocumentTypeChildNode;
//# sourceMappingURL=NonDocumentTypeChildNode.js.map