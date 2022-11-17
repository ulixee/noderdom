"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const NonDocumentTypeChildNode_1 = __importDefault(require("../../base/official-mixins/NonDocumentTypeChildNode"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
class NonDocumentTypeChildNode extends NonDocumentTypeChildNode_1.default {
    get nextElementSibling() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addProperty(this, 'nextElementSibling'), awaitedOptions);
    }
    get previousElementSibling() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addProperty(this, 'previousElementSibling'), awaitedOptions);
    }
}
exports.default = NonDocumentTypeChildNode;
//# sourceMappingURL=NonDocumentTypeChildNode.js.map