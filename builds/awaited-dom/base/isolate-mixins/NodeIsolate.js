"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeIsolateConstantKeys = exports.NodeIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('NodeIsolate', exports.getState, exports.setState);
class NodeIsolate {
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
    }
    // properties
    get baseURI() {
        return exports.awaitedHandler.getProperty(this, 'baseURI', false);
    }
    get childNodes() {
        throw new Error('NodeIsolate.childNodes getter not implemented');
    }
    get firstChild() {
        throw new Error('NodeIsolate.firstChild getter not implemented');
    }
    get isConnected() {
        return exports.awaitedHandler.getProperty(this, 'isConnected', false);
    }
    get lastChild() {
        throw new Error('NodeIsolate.lastChild getter not implemented');
    }
    get nextSibling() {
        throw new Error('NodeIsolate.nextSibling getter not implemented');
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
        throw new Error('NodeIsolate.ownerDocument getter not implemented');
    }
    get parentElement() {
        throw new Error('NodeIsolate.parentElement getter not implemented');
    }
    get parentNode() {
        throw new Error('NodeIsolate.parentNode getter not implemented');
    }
    get previousSibling() {
        throw new Error('NodeIsolate.previousSibling getter not implemented');
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
        throw new Error('NodeIsolate.getRootNode not implemented');
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
}
exports.default = NodeIsolate;
NodeIsolate.ATTRIBUTE_NODE = 2;
NodeIsolate.CDATA_SECTION_NODE = 4;
NodeIsolate.COMMENT_NODE = 8;
NodeIsolate.DOCUMENT_FRAGMENT_NODE = 11;
NodeIsolate.DOCUMENT_NODE = 9;
NodeIsolate.DOCUMENT_POSITION_CONTAINED_BY = 0x10;
NodeIsolate.DOCUMENT_POSITION_CONTAINS = 0x08;
NodeIsolate.DOCUMENT_POSITION_DISCONNECTED = 0x01;
NodeIsolate.DOCUMENT_POSITION_FOLLOWING = 0x04;
NodeIsolate.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;
NodeIsolate.DOCUMENT_POSITION_PRECEDING = 0x02;
NodeIsolate.DOCUMENT_TYPE_NODE = 10;
NodeIsolate.ELEMENT_NODE = 1;
NodeIsolate.ENTITY_NODE = 6;
NodeIsolate.ENTITY_REFERENCE_NODE = 5;
NodeIsolate.NOTATION_NODE = 12;
NodeIsolate.PROCESSING_INSTRUCTION_NODE = 7;
NodeIsolate.TEXT_NODE = 3;
exports.NodeIsolatePropertyKeys = ['baseURI', 'childNodes', 'firstChild', 'isConnected', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentElement', 'parentNode', 'previousSibling', 'textContent'];
exports.NodeIsolateConstantKeys = ['ATTRIBUTE_NODE', 'CDATA_SECTION_NODE', 'COMMENT_NODE', 'DOCUMENT_FRAGMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_POSITION_CONTAINED_BY', 'DOCUMENT_POSITION_CONTAINS', 'DOCUMENT_POSITION_DISCONNECTED', 'DOCUMENT_POSITION_FOLLOWING', 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 'DOCUMENT_POSITION_PRECEDING', 'DOCUMENT_TYPE_NODE', 'ELEMENT_NODE', 'ENTITY_NODE', 'ENTITY_REFERENCE_NODE', 'NOTATION_NODE', 'PROCESSING_INSTRUCTION_NODE', 'TEXT_NODE'];
//# sourceMappingURL=NodeIsolate.js.map