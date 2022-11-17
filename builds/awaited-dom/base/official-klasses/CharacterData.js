"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterDataConstantKeys = exports.CharacterDataPropertyKeys = exports.CharacterDataGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const Node_1 = require("./Node");
const NonDocumentTypeChildNode_1 = require("../official-mixins/NonDocumentTypeChildNode");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('CharacterData', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function CharacterDataGenerator(Node, NonDocumentTypeChildNode) {
    const Parent = (0, ClassMixer_1.default)(Node, [NonDocumentTypeChildNode]);
    return class CharacterData extends Parent {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createCharacterData',
            });
        }
        // properties
        get data() {
            return exports.awaitedHandler.getProperty(this, 'data', false);
        }
        get length() {
            return exports.awaitedHandler.getProperty(this, 'length', false);
        }
        // methods
        substringData(offset, count) {
            return exports.awaitedHandler.runMethod(this, 'substringData', [offset, count]);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.CharacterDataPropertyKeys, exports.CharacterDataConstantKeys);
        }
    };
}
exports.CharacterDataGenerator = CharacterDataGenerator;
exports.CharacterDataPropertyKeys = [...Node_1.NodePropertyKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodePropertyKeys, 'data', 'length'];
exports.CharacterDataConstantKeys = [...Node_1.NodeConstantKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodeConstantKeys];
//# sourceMappingURL=CharacterData.js.map