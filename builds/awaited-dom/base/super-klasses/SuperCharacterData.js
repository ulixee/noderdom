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
const CharacterDataIsolate_1 = require("../isolate-mixins/CharacterDataIsolate");
const NodeIsolate_1 = require("../isolate-mixins/NodeIsolate");
const NonDocumentTypeChildNode_1 = require("../official-mixins/NonDocumentTypeChildNode");
const TextIsolate_1 = require("../isolate-mixins/TextIsolate");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('SuperCharacterData', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function SuperCharacterDataGenerator(CharacterDataIsolate, NodeIsolate, NonDocumentTypeChildNode, TextIsolate) {
    const Parent = ClassMixer_1.default(CharacterDataIsolate, [NodeIsolate, NonDocumentTypeChildNode, TextIsolate]);
    return class SuperCharacterData extends Parent {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.SuperCharacterDataConstantKeys, exports.SuperCharacterDataPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createSuperCharacterData',
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
exports.SuperCharacterDataGenerator = SuperCharacterDataGenerator;
exports.SuperCharacterDataPropertyKeys = [...CharacterDataIsolate_1.CharacterDataIsolatePropertyKeys, ...NodeIsolate_1.NodeIsolatePropertyKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodePropertyKeys, ...TextIsolate_1.TextIsolatePropertyKeys, 'data', 'length'];
exports.SuperCharacterDataConstantKeys = [...CharacterDataIsolate_1.CharacterDataIsolateConstantKeys, ...NodeIsolate_1.NodeIsolateConstantKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodeConstantKeys, ...TextIsolate_1.TextIsolateConstantKeys];
//# sourceMappingURL=SuperCharacterData.js.map