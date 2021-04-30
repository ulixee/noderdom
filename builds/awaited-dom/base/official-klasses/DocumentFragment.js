"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentFragmentConstantKeys = exports.DocumentFragmentPropertyKeys = exports.DocumentFragmentGenerator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const Node_1 = require("./Node");
const NonElementParentNode_1 = require("../official-mixins/NonElementParentNode");
const ParentNode_1 = require("../official-mixins/ParentNode");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('DocumentFragment', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function DocumentFragmentGenerator(Node, NonElementParentNode, ParentNode) {
    const Parent = ClassMixer_1.default(Node, [NonElementParentNode, ParentNode]);
    return class DocumentFragment extends Parent {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.DocumentFragmentConstantKeys, exports.DocumentFragmentPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createDocumentFragment',
            });
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
    };
}
exports.DocumentFragmentGenerator = DocumentFragmentGenerator;
exports.DocumentFragmentPropertyKeys = [...Node_1.NodePropertyKeys, ...NonElementParentNode_1.NonElementParentNodePropertyKeys, ...ParentNode_1.ParentNodePropertyKeys];
exports.DocumentFragmentConstantKeys = [...Node_1.NodeConstantKeys, ...NonElementParentNode_1.NonElementParentNodeConstantKeys, ...ParentNode_1.ParentNodeConstantKeys];
//# sourceMappingURL=DocumentFragment.js.map