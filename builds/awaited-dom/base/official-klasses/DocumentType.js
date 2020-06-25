"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
const Node_1 = require("./Node");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('DocumentType', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function DocumentTypeGenerator(Node) {
    return class DocumentType extends Node {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.DocumentTypeConstantKeys, exports.DocumentTypePropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createDocumentType',
            });
        }
        // properties
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        get publicId() {
            return exports.awaitedHandler.getProperty(this, 'publicId', false);
        }
        get systemId() {
            return exports.awaitedHandler.getProperty(this, 'systemId', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
    };
}
exports.DocumentTypeGenerator = DocumentTypeGenerator;
exports.DocumentTypePropertyKeys = [...Node_1.NodePropertyKeys, 'name', 'publicId', 'systemId'];
exports.DocumentTypeConstantKeys = [...Node_1.NodeConstantKeys];
//# sourceMappingURL=DocumentType.js.map