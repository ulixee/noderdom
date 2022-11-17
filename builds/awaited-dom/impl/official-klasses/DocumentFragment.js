"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const DocumentFragment_1 = require("../../base/official-klasses/DocumentFragment");
const Node_1 = __importDefault(require("./Node"));
const NonElementParentNode_1 = __importDefault(require("../official-mixins/NonElementParentNode"));
const ParentNode_1 = __importDefault(require("../official-mixins/ParentNode"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const DocumentFragmentBaseClass = (0, DocumentFragment_1.DocumentFragmentGenerator)(Node_1.default, NonElementParentNode_1.default, ParentNode_1.default);
class DocumentFragment extends DocumentFragmentBaseClass {
    constructor() {
        super();
    }
}
exports.default = DocumentFragment;
//# sourceMappingURL=DocumentFragment.js.map