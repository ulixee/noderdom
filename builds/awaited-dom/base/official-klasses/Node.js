"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeConstantKeys = exports.NodePropertyKeys = exports.NodeGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('Node', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function NodeGenerator() {
    var _a;
    return _a = class Node {
            constructor() {
                this.ATTRIBUTE_NODE = 2;
                this.CDATA_SECTION_NODE = 4;
                this.COMMENT_NODE = 8;
                this.DOCUMENT_FRAGMENT_NODE = 11;
                this.DOCUMENT_NODE = 9;
                this.DOCUMENT_POSITION_CONTAINED_BY = 0x10;
                this.DOCUMENT_POSITION_CONTAINS = 0x08;
                this.DOCUMENT_POSITION_DISCONNECTED = 0x01;
                this.DOCUMENT_POSITION_FOLLOWING = 0x04;
                this.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;
                this.DOCUMENT_POSITION_PRECEDING = 0x02;
                this.DOCUMENT_TYPE_NODE = 10;
                this.ELEMENT_NODE = 1;
                this.ENTITY_NODE = 6;
                this.ENTITY_REFERENCE_NODE = 5;
                this.NOTATION_NODE = 12;
                this.PROCESSING_INSTRUCTION_NODE = 7;
                this.TEXT_NODE = 3;
                (0, exports.setState)(this, {
                    createInstanceName: 'createNode',
                });
            }
            // properties
            get baseURI() {
                return exports.awaitedHandler.getProperty(this, 'baseURI', false);
            }
            get childNodes() {
                throw new Error('Node.childNodes getter not implemented');
            }
            get firstChild() {
                throw new Error('Node.firstChild getter not implemented');
            }
            get isConnected() {
                return exports.awaitedHandler.getProperty(this, 'isConnected', false);
            }
            get lastChild() {
                throw new Error('Node.lastChild getter not implemented');
            }
            get nextSibling() {
                throw new Error('Node.nextSibling getter not implemented');
            }
            get nodeName() {
                return exports.awaitedHandler.getProperty(this, 'nodeName', false);
            }
            get nodeType() {
                return exports.awaitedHandler.getProperty(this, 'nodeType', false);
            }
            get nodeValue() {
                return exports.awaitedHandler.getProperty(this, 'nodeValue', true);
            }
            get ownerDocument() {
                throw new Error('Node.ownerDocument getter not implemented');
            }
            get parentElement() {
                throw new Error('Node.parentElement getter not implemented');
            }
            get parentNode() {
                throw new Error('Node.parentNode getter not implemented');
            }
            get previousSibling() {
                throw new Error('Node.previousSibling getter not implemented');
            }
            get textContent() {
                return exports.awaitedHandler.getProperty(this, 'textContent', true);
            }
            // methods
            compareDocumentPosition(other) {
                return exports.awaitedHandler.runMethod(this, 'compareDocumentPosition', [other]);
            }
            contains(other) {
                return exports.awaitedHandler.runMethod(this, 'contains', [other]);
            }
            getRootNode(options) {
                throw new Error('Node.getRootNode not implemented');
            }
            hasChildNodes() {
                return exports.awaitedHandler.runMethod(this, 'hasChildNodes', []);
            }
            isDefaultNamespace(namespace) {
                return exports.awaitedHandler.runMethod(this, 'isDefaultNamespace', [namespace]);
            }
            isEqualNode(otherNode) {
                return exports.awaitedHandler.runMethod(this, 'isEqualNode', [otherNode]);
            }
            isSameNode(otherNode) {
                return exports.awaitedHandler.runMethod(this, 'isSameNode', [otherNode]);
            }
            lookupNamespaceURI(prefix) {
                return exports.awaitedHandler.runMethod(this, 'lookupNamespaceURI', [prefix]);
            }
            lookupPrefix(namespace) {
                return exports.awaitedHandler.runMethod(this, 'lookupPrefix', [namespace]);
            }
            normalize() {
                return exports.awaitedHandler.runMethod(this, 'normalize', []);
            }
            then(onfulfilled, onrejected) {
                return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
            }
            [Symbol.for('nodejs.util.inspect.custom')]() {
                return (0, inspectInstanceProperties_1.default)(this, exports.NodePropertyKeys, exports.NodeConstantKeys);
            }
        },
        _a.ATTRIBUTE_NODE = 2,
        _a.CDATA_SECTION_NODE = 4,
        _a.COMMENT_NODE = 8,
        _a.DOCUMENT_FRAGMENT_NODE = 11,
        _a.DOCUMENT_NODE = 9,
        _a.DOCUMENT_POSITION_CONTAINED_BY = 0x10,
        _a.DOCUMENT_POSITION_CONTAINS = 0x08,
        _a.DOCUMENT_POSITION_DISCONNECTED = 0x01,
        _a.DOCUMENT_POSITION_FOLLOWING = 0x04,
        _a.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20,
        _a.DOCUMENT_POSITION_PRECEDING = 0x02,
        _a.DOCUMENT_TYPE_NODE = 10,
        _a.ELEMENT_NODE = 1,
        _a.ENTITY_NODE = 6,
        _a.ENTITY_REFERENCE_NODE = 5,
        _a.NOTATION_NODE = 12,
        _a.PROCESSING_INSTRUCTION_NODE = 7,
        _a.TEXT_NODE = 3,
        _a;
}
exports.NodeGenerator = NodeGenerator;
exports.NodePropertyKeys = ['baseURI', 'childNodes', 'firstChild', 'isConnected', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentElement', 'parentNode', 'previousSibling', 'textContent'];
exports.NodeConstantKeys = ['ATTRIBUTE_NODE', 'CDATA_SECTION_NODE', 'COMMENT_NODE', 'DOCUMENT_FRAGMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_POSITION_CONTAINED_BY', 'DOCUMENT_POSITION_CONTAINS', 'DOCUMENT_POSITION_DISCONNECTED', 'DOCUMENT_POSITION_FOLLOWING', 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 'DOCUMENT_POSITION_PRECEDING', 'DOCUMENT_TYPE_NODE', 'ELEMENT_NODE', 'ENTITY_NODE', 'ENTITY_REFERENCE_NODE', 'NOTATION_NODE', 'PROCESSING_INSTRUCTION_NODE', 'TEXT_NODE'];
//# sourceMappingURL=Node.js.map