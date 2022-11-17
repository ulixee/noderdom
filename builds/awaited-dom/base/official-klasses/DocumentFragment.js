"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentFragmentConstantKeys = exports.DocumentFragmentPropertyKeys = exports.DocumentFragmentGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const Node_1 = require("./Node");
const NonElementParentNode_1 = require("../official-mixins/NonElementParentNode");
const ParentNode_1 = require("../official-mixins/ParentNode");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('DocumentFragment', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function DocumentFragmentGenerator(Node, NonElementParentNode, ParentNode) {
    const Parent = (0, ClassMixer_1.default)(Node, [NonElementParentNode, ParentNode]);
    return class DocumentFragment extends Parent {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createDocumentFragment',
            });
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.DocumentFragmentPropertyKeys, exports.DocumentFragmentConstantKeys);
        }
    };
}
exports.DocumentFragmentGenerator = DocumentFragmentGenerator;
exports.DocumentFragmentPropertyKeys = [...Node_1.NodePropertyKeys, ...NonElementParentNode_1.NonElementParentNodePropertyKeys, ...ParentNode_1.ParentNodePropertyKeys];
exports.DocumentFragmentConstantKeys = [...Node_1.NodeConstantKeys, ...NonElementParentNode_1.NonElementParentNodeConstantKeys, ...ParentNode_1.ParentNodeConstantKeys];
//# sourceMappingURL=DocumentFragment.js.map