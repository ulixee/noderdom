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
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('SuperElement', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function SuperElementGenerator(ElementIsolate, HTMLButtonElementIsolate, HTMLElementIsolate, HTMLFieldSetElementIsolate, HTMLFormElementIsolate, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLLabelElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLSelectElementIsolate, HTMLTextAreaElementIsolate, NodeIsolate, NonDocumentTypeChildNode, ParentNode) {
    const Parent = ClassMixer_1.default(ElementIsolate, [HTMLButtonElementIsolate, HTMLElementIsolate, HTMLFieldSetElementIsolate, HTMLFormElementIsolate, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLLabelElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLSelectElementIsolate, HTMLTextAreaElementIsolate, NodeIsolate, NonDocumentTypeChildNode, ParentNode]);
    return class SuperElement extends Parent {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.SuperElementConstantKeys, exports.SuperElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createSuperElement',
            });
        }
        // properties
        get attributes() {
            throw new Error('SuperElement.attributes getter not implemented');
        }
        get classList() {
            throw new Error('SuperElement.classList getter not implemented');
        }
        get className() {
            return exports.awaitedHandler.getProperty(this, 'className', false);
        }
        get clientHeight() {
            return exports.awaitedHandler.getProperty(this, 'clientHeight', false);
        }
        get clientLeft() {
            return exports.awaitedHandler.getProperty(this, 'clientLeft', false);
        }
        get clientTop() {
            return exports.awaitedHandler.getProperty(this, 'clientTop', false);
        }
        get clientWidth() {
            return exports.awaitedHandler.getProperty(this, 'clientWidth', false);
        }
        get id() {
            return exports.awaitedHandler.getProperty(this, 'id', false);
        }
        get innerHTML() {
            return exports.awaitedHandler.getProperty(this, 'innerHTML', false);
        }
        get localName() {
            return exports.awaitedHandler.getProperty(this, 'localName', false);
        }
        get namespaceURI() {
            return exports.awaitedHandler.getProperty(this, 'namespaceURI', true);
        }
        get outerHTML() {
            return exports.awaitedHandler.getProperty(this, 'outerHTML', false);
        }
        get part() {
            throw new Error('SuperElement.part getter not implemented');
        }
        get prefix() {
            return exports.awaitedHandler.getProperty(this, 'prefix', true);
        }
        get scrollHeight() {
            return exports.awaitedHandler.getProperty(this, 'scrollHeight', false);
        }
        get scrollLeft() {
            return exports.awaitedHandler.getProperty(this, 'scrollLeft', false);
        }
        get scrollTop() {
            return exports.awaitedHandler.getProperty(this, 'scrollTop', false);
        }
        get scrollWidth() {
            return exports.awaitedHandler.getProperty(this, 'scrollWidth', false);
        }
        get shadowRoot() {
            throw new Error('SuperElement.shadowRoot getter not implemented');
        }
        get slot() {
            return exports.awaitedHandler.getProperty(this, 'slot', false);
        }
        get tagName() {
            return exports.awaitedHandler.getProperty(this, 'tagName', false);
        }
        // methods
        closest(selectors) {
            throw new Error('SuperElement.closest not implemented');
        }
        getAttribute(qualifiedName) {
            return exports.awaitedHandler.runMethod(this, 'getAttribute', [qualifiedName]);
        }
        getAttributeNS(namespace, localName) {
            return exports.awaitedHandler.runMethod(this, 'getAttributeNS', [namespace, localName]);
        }
        getAttributeNames() {
            return exports.awaitedHandler.runMethod(this, 'getAttributeNames', []);
        }
        getAttributeNode(qualifiedName) {
            return exports.awaitedHandler.runMethod(this, 'getAttributeNode', [qualifiedName]);
        }
        getAttributeNodeNS(namespace, localName) {
            return exports.awaitedHandler.runMethod(this, 'getAttributeNodeNS', [namespace, localName]);
        }
        getBoundingClientRect() {
            return exports.awaitedHandler.runMethod(this, 'getBoundingClientRect', []);
        }
        getClientRects() {
            return exports.awaitedHandler.runMethod(this, 'getClientRects', []);
        }
        getElementsByClassName(classNames) {
            throw new Error('SuperElement.getElementsByClassName not implemented');
        }
        getElementsByTagName(qualifiedName) {
            throw new Error('SuperElement.getElementsByTagName not implemented');
        }
        getElementsByTagNameNS(namespace, localName) {
            throw new Error('SuperElement.getElementsByTagNameNS not implemented');
        }
        hasAttribute(qualifiedName) {
            return exports.awaitedHandler.runMethod(this, 'hasAttribute', [qualifiedName]);
        }
        hasAttributeNS(namespace, localName) {
            return exports.awaitedHandler.runMethod(this, 'hasAttributeNS', [namespace, localName]);
        }
        hasAttributes() {
            return exports.awaitedHandler.runMethod(this, 'hasAttributes', []);
        }
        hasPointerCapture(pointerId) {
            return exports.awaitedHandler.runMethod(this, 'hasPointerCapture', [pointerId]);
        }
        matches(selectors) {
            return exports.awaitedHandler.runMethod(this, 'matches', [selectors]);
        }
        requestFullscreen(options) {
            return exports.awaitedHandler.runMethod(this, 'requestFullscreen', [options]);
        }
        requestPointerLock() {
            return exports.awaitedHandler.runMethod(this, 'requestPointerLock', []);
        }
        scrollIntoView(arg) {
            return exports.awaitedHandler.runMethod(this, 'scrollIntoView', [arg]);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
    };
}
exports.SuperElementGenerator = SuperElementGenerator;
exports.SuperElementPropertyKeys = [...ElementIsolate_1.ElementIsolatePropertyKeys, ...HTMLButtonElementIsolate_1.HTMLButtonElementIsolatePropertyKeys, ...HTMLElementIsolate_1.HTMLElementIsolatePropertyKeys, ...HTMLFieldSetElementIsolate_1.HTMLFieldSetElementIsolatePropertyKeys, ...HTMLFormElementIsolate_1.HTMLFormElementIsolatePropertyKeys, ...HTMLHeadElementIsolate_1.HTMLHeadElementIsolatePropertyKeys, ...HTMLInputElementIsolate_1.HTMLInputElementIsolatePropertyKeys, ...HTMLLabelElementIsolate_1.HTMLLabelElementIsolatePropertyKeys, ...HTMLOptGroupElementIsolate_1.HTMLOptGroupElementIsolatePropertyKeys, ...HTMLOptionElementIsolate_1.HTMLOptionElementIsolatePropertyKeys, ...HTMLOrSVGElement_1.HTMLOrSVGElementPropertyKeys, ...HTMLSelectElementIsolate_1.HTMLSelectElementIsolatePropertyKeys, ...HTMLTextAreaElementIsolate_1.HTMLTextAreaElementIsolatePropertyKeys, ...NodeIsolate_1.NodeIsolatePropertyKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodePropertyKeys, ...ParentNode_1.ParentNodePropertyKeys, 'attributes', 'classList', 'className', 'clientHeight', 'clientLeft', 'clientTop', 'clientWidth', 'id', 'innerHTML', 'localName', 'namespaceURI', 'outerHTML', 'part', 'prefix', 'scrollHeight', 'scrollLeft', 'scrollTop', 'scrollWidth', 'shadowRoot', 'slot', 'tagName'];
exports.SuperElementConstantKeys = [...ElementIsolate_1.ElementIsolateConstantKeys, ...HTMLButtonElementIsolate_1.HTMLButtonElementIsolateConstantKeys, ...HTMLElementIsolate_1.HTMLElementIsolateConstantKeys, ...HTMLFieldSetElementIsolate_1.HTMLFieldSetElementIsolateConstantKeys, ...HTMLFormElementIsolate_1.HTMLFormElementIsolateConstantKeys, ...HTMLHeadElementIsolate_1.HTMLHeadElementIsolateConstantKeys, ...HTMLInputElementIsolate_1.HTMLInputElementIsolateConstantKeys, ...HTMLLabelElementIsolate_1.HTMLLabelElementIsolateConstantKeys, ...HTMLOptGroupElementIsolate_1.HTMLOptGroupElementIsolateConstantKeys, ...HTMLOptionElementIsolate_1.HTMLOptionElementIsolateConstantKeys, ...HTMLOrSVGElement_1.HTMLOrSVGElementConstantKeys, ...HTMLSelectElementIsolate_1.HTMLSelectElementIsolateConstantKeys, ...HTMLTextAreaElementIsolate_1.HTMLTextAreaElementIsolateConstantKeys, ...NodeIsolate_1.NodeIsolateConstantKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodeConstantKeys, ...ParentNode_1.ParentNodeConstantKeys];
//# sourceMappingURL=SuperElement.js.map