"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
const Node_1 = require("./Node");
const NonDocumentTypeChildNode_1 = require("../official-mixins/NonDocumentTypeChildNode");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('CharacterData', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function CharacterDataGenerator(Node, NonDocumentTypeChildNode) {
    const Parent = ClassMixer_1.default(Node, [NonDocumentTypeChildNode]);
    return class CharacterData extends Parent {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.CharacterDataConstantKeys, exports.CharacterDataPropertyKeys);
            exports.setState(this, {
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
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
    };
}
exports.CharacterDataGenerator = CharacterDataGenerator;
exports.CharacterDataPropertyKeys = [...Node_1.NodePropertyKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodePropertyKeys, 'data', 'length'];
exports.CharacterDataConstantKeys = [...Node_1.NodeConstantKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodeConstantKeys];
//# sourceMappingURL=CharacterData.js.map