"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperTextConstantKeys = exports.SuperTextPropertyKeys = exports.SuperTextGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const CharacterDataIsolate_1 = require("../isolate-mixins/CharacterDataIsolate");
const NodeIsolate_1 = require("../isolate-mixins/NodeIsolate");
const NonDocumentTypeChildNode_1 = require("../official-mixins/NonDocumentTypeChildNode");
const Slotable_1 = require("../official-mixins/Slotable");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('SuperText', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function SuperTextGenerator(CharacterDataIsolate, NodeIsolate, NonDocumentTypeChildNode, Slotable) {
    const Parent = (0, ClassMixer_1.default)(CharacterDataIsolate, [NodeIsolate, NonDocumentTypeChildNode, Slotable]);
    return class SuperText extends Parent {
        constructor(_data) {
            super(_data);
            (0, exports.setState)(this, {
                createInstanceName: 'createSuperText',
            });
        }
        // properties
        get wholeText() {
            return exports.awaitedHandler.getProperty(this, 'wholeText', false);
        }
        // methods
        splitText(offset) {
            return exports.awaitedHandler.runMethod(this, 'splitText', [offset]);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.SuperTextPropertyKeys, exports.SuperTextConstantKeys);
        }
    };
}
exports.SuperTextGenerator = SuperTextGenerator;
exports.SuperTextPropertyKeys = [...CharacterDataIsolate_1.CharacterDataIsolatePropertyKeys, ...NodeIsolate_1.NodeIsolatePropertyKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodePropertyKeys, ...Slotable_1.SlotablePropertyKeys, 'wholeText'];
exports.SuperTextConstantKeys = [...CharacterDataIsolate_1.CharacterDataIsolateConstantKeys, ...NodeIsolate_1.NodeIsolateConstantKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodeConstantKeys, ...Slotable_1.SlotableConstantKeys];
//# sourceMappingURL=SuperText.js.map