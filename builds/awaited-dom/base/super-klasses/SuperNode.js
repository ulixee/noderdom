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
const AttrIsolate_1 = require("../isolate-mixins/AttrIsolate");
const CharacterDataIsolate_1 = require("../isolate-mixins/CharacterDataIsolate");
const DocumentIsolate_1 = require("../isolate-mixins/DocumentIsolate");
const DocumentTypeIsolate_1 = require("../isolate-mixins/DocumentTypeIsolate");
const ElementIsolate_1 = require("../isolate-mixins/ElementIsolate");
const HTMLButtonElementIsolate_1 = require("../isolate-mixins/HTMLButtonElementIsolate");
const HTMLElementIsolate_1 = require("../isolate-mixins/HTMLElementIsolate");
const HTMLFieldSetElementIsolate_1 = require("../isolate-mixins/HTMLFieldSetElementIsolate");
const HTMLFormElementIsolate_1 = require("../isolate-mixins/HTMLFormElementIsolate");
const HTMLHeadElementIsolate_1 = require("../isolate-mixins/HTMLHeadElementIsolate");
const HTMLInputElementIsolate_1 = require("../isolate-mixins/HTMLInputElementIsolate");
const HTMLLabelElementIsolate_1 = require("../isolate-mixins/HTMLLabelElementIsolate");
const HTMLOptGroupElementIsolate_1 = require("../isolate-mixins/HTMLOptGroupElementIsolate");
const HTMLOptionElementIsolate_1 = require("../isolate-mixins/HTMLOptionElementIsolate");
const HTMLOrSVGElement_1 = require("../official-mixins/HTMLOrSVGElement");
const HTMLSelectElementIsolate_1 = require("../isolate-mixins/HTMLSelectElementIsolate");
const HTMLTextAreaElementIsolate_1 = require("../isolate-mixins/HTMLTextAreaElementIsolate");
const NodeIsolate_1 = require("../isolate-mixins/NodeIsolate");
const NonDocumentTypeChildNode_1 = require("../official-mixins/NonDocumentTypeChildNode");
const ParentNode_1 = require("../official-mixins/ParentNode");
const TextIsolate_1 = require("../isolate-mixins/TextIsolate");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('SuperNode', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function SuperNodeGenerator(AttrIsolate, CharacterDataIsolate, DocumentIsolate, DocumentTypeIsolate, ElementIsolate, HTMLButtonElementIsolate, HTMLElementIsolate, HTMLFieldSetElementIsolate, HTMLFormElementIsolate, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLLabelElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLSelectElementIsolate, HTMLTextAreaElementIsolate, NodeIsolate, NonDocumentTypeChildNode, ParentNode, TextIsolate) {
    var _a;
    const Parent = ClassMixer_1.default(AttrIsolate, [CharacterDataIsolate, DocumentIsolate, DocumentTypeIsolate, ElementIsolate, HTMLButtonElementIsolate, HTMLElementIsolate, HTMLFieldSetElementIsolate, HTMLFormElementIsolate, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLLabelElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLSelectElementIsolate, HTMLTextAreaElementIsolate, NodeIsolate, NonDocumentTypeChildNode, ParentNode, TextIsolate]);
    return _a = class SuperNode extends Parent {
            constructor() {
                super();
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
                initializeConstantsAndProperties_1.default(this, exports.SuperNodeConstantKeys, exports.SuperNodePropertyKeys);
                exports.setState(this, {
                    createInstanceName: 'createSuperNode',
                });
            }
            // properties
            get baseURI() {
                return exports.awaitedHandler.getProperty(this, 'baseURI', false);
            }
            get childNodes() {
                throw new Error('SuperNode.childNodes getter not implemented');
            }
            get firstChild() {
                throw new Error('SuperNode.firstChild getter not implemented');
            }
            get isConnected() {
                return exports.awaitedHandler.getProperty(this, 'isConnected', false);
            }
            get lastChild() {
                throw new Error('SuperNode.lastChild getter not implemented');
            }
            get nextSibling() {
                throw new Error('SuperNode.nextSibling getter not implemented');
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
                throw new Error('SuperNode.ownerDocument getter not implemented');
            }
            get parentElement() {
                throw new Error('SuperNode.parentElement getter not implemented');
            }
            get parentNode() {
                throw new Error('SuperNode.parentNode getter not implemented');
            }
            get previousSibling() {
                throw new Error('SuperNode.previousSibling getter not implemented');
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
                throw new Error('SuperNode.getRootNode not implemented');
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
                return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
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
exports.SuperNodeGenerator = SuperNodeGenerator;
exports.SuperNodePropertyKeys = [...AttrIsolate_1.AttrIsolatePropertyKeys, ...CharacterDataIsolate_1.CharacterDataIsolatePropertyKeys, ...DocumentIsolate_1.DocumentIsolatePropertyKeys, ...DocumentTypeIsolate_1.DocumentTypeIsolatePropertyKeys, ...ElementIsolate_1.ElementIsolatePropertyKeys, ...HTMLButtonElementIsolate_1.HTMLButtonElementIsolatePropertyKeys, ...HTMLElementIsolate_1.HTMLElementIsolatePropertyKeys, ...HTMLFieldSetElementIsolate_1.HTMLFieldSetElementIsolatePropertyKeys, ...HTMLFormElementIsolate_1.HTMLFormElementIsolatePropertyKeys, ...HTMLHeadElementIsolate_1.HTMLHeadElementIsolatePropertyKeys, ...HTMLInputElementIsolate_1.HTMLInputElementIsolatePropertyKeys, ...HTMLLabelElementIsolate_1.HTMLLabelElementIsolatePropertyKeys, ...HTMLOptGroupElementIsolate_1.HTMLOptGroupElementIsolatePropertyKeys, ...HTMLOptionElementIsolate_1.HTMLOptionElementIsolatePropertyKeys, ...HTMLOrSVGElement_1.HTMLOrSVGElementPropertyKeys, ...HTMLSelectElementIsolate_1.HTMLSelectElementIsolatePropertyKeys, ...HTMLTextAreaElementIsolate_1.HTMLTextAreaElementIsolatePropertyKeys, ...NodeIsolate_1.NodeIsolatePropertyKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodePropertyKeys, ...ParentNode_1.ParentNodePropertyKeys, ...TextIsolate_1.TextIsolatePropertyKeys, 'baseURI', 'childNodes', 'firstChild', 'isConnected', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentElement', 'parentNode', 'previousSibling', 'textContent'];
exports.SuperNodeConstantKeys = [...AttrIsolate_1.AttrIsolateConstantKeys, ...CharacterDataIsolate_1.CharacterDataIsolateConstantKeys, ...DocumentIsolate_1.DocumentIsolateConstantKeys, ...DocumentTypeIsolate_1.DocumentTypeIsolateConstantKeys, ...ElementIsolate_1.ElementIsolateConstantKeys, ...HTMLButtonElementIsolate_1.HTMLButtonElementIsolateConstantKeys, ...HTMLElementIsolate_1.HTMLElementIsolateConstantKeys, ...HTMLFieldSetElementIsolate_1.HTMLFieldSetElementIsolateConstantKeys, ...HTMLFormElementIsolate_1.HTMLFormElementIsolateConstantKeys, ...HTMLHeadElementIsolate_1.HTMLHeadElementIsolateConstantKeys, ...HTMLInputElementIsolate_1.HTMLInputElementIsolateConstantKeys, ...HTMLLabelElementIsolate_1.HTMLLabelElementIsolateConstantKeys, ...HTMLOptGroupElementIsolate_1.HTMLOptGroupElementIsolateConstantKeys, ...HTMLOptionElementIsolate_1.HTMLOptionElementIsolateConstantKeys, ...HTMLOrSVGElement_1.HTMLOrSVGElementConstantKeys, ...HTMLSelectElementIsolate_1.HTMLSelectElementIsolateConstantKeys, ...HTMLTextAreaElementIsolate_1.HTMLTextAreaElementIsolateConstantKeys, ...NodeIsolate_1.NodeIsolateConstantKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodeConstantKeys, ...ParentNode_1.ParentNodeConstantKeys, ...TextIsolate_1.TextIsolateConstantKeys, 'ATTRIBUTE_NODE', 'CDATA_SECTION_NODE', 'COMMENT_NODE', 'DOCUMENT_FRAGMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_POSITION_CONTAINED_BY', 'DOCUMENT_POSITION_CONTAINS', 'DOCUMENT_POSITION_DISCONNECTED', 'DOCUMENT_POSITION_FOLLOWING', 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 'DOCUMENT_POSITION_PRECEDING', 'DOCUMENT_TYPE_NODE', 'ELEMENT_NODE', 'ENTITY_NODE', 'ENTITY_REFERENCE_NODE', 'NOTATION_NODE', 'PROCESSING_INSTRUCTION_NODE', 'TEXT_NODE'];
//# sourceMappingURL=SuperNode.js.map