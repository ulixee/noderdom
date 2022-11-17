"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTypeConstantKeys = exports.DocumentTypePropertyKeys = exports.DocumentTypeGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const Node_1 = require("./Node");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('DocumentType', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function DocumentTypeGenerator(Node) {
    return class DocumentType extends Node {
        constructor() {
            super();
            (0, exports.setState)(this, {
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
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.DocumentTypePropertyKeys, exports.DocumentTypeConstantKeys);
        }
    };
}
exports.DocumentTypeGenerator = DocumentTypeGenerator;
exports.DocumentTypePropertyKeys = [...Node_1.NodePropertyKeys, 'name', 'publicId', 'systemId'];
exports.DocumentTypeConstantKeys = [...Node_1.NodeConstantKeys];
//# sourceMappingURL=DocumentType.js.map