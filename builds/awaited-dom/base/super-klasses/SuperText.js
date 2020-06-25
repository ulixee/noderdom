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
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('SuperText', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function SuperTextGenerator(CharacterDataIsolate, NodeIsolate, NonDocumentTypeChildNode) {
    const Parent = ClassMixer_1.default(CharacterDataIsolate, [NodeIsolate, NonDocumentTypeChildNode]);
    return class SuperText extends Parent {
        constructor(_data) {
            super(_data);
            initializeConstantsAndProperties_1.default(this, exports.SuperTextConstantKeys, exports.SuperTextPropertyKeys);
            exports.setState(this, {
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
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
    };
}
exports.SuperTextGenerator = SuperTextGenerator;
exports.SuperTextPropertyKeys = [...CharacterDataIsolate_1.CharacterDataIsolatePropertyKeys, ...NodeIsolate_1.NodeIsolatePropertyKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodePropertyKeys, 'wholeText'];
exports.SuperTextConstantKeys = [...CharacterDataIsolate_1.CharacterDataIsolateConstantKeys, ...NodeIsolate_1.NodeIsolateConstantKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodeConstantKeys];
//# sourceMappingURL=SuperText.js.map