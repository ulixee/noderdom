"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementIsolateConstantKeys = exports.ElementIsolatePropertyKeys = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('ElementIsolate', exports.getState, exports.setState);
class ElementIsolate {
    get attributes() {
        throw new Error('ElementIsolate.attributes getter not implemented');
    }
    get classList() {
        throw new Error('ElementIsolate.classList getter not implemented');
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
        throw new Error('ElementIsolate.part getter not implemented');
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
        throw new Error('ElementIsolate.shadowRoot getter not implemented');
    }
    get slot() {
        return exports.awaitedHandler.getProperty(this, 'slot', false);
    }
    get tagName() {
        return exports.awaitedHandler.getProperty(this, 'tagName', false);
    }
    // methods
    closest(selectors) {
        throw new Error('ElementIsolate.closest not implemented');
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
        throw new Error('ElementIsolate.getElementsByClassName not implemented');
    }
    getElementsByTagName(qualifiedName) {
        throw new Error('ElementIsolate.getElementsByTagName not implemented');
    }
    getElementsByTagNameNS(namespace, localName) {
        throw new Error('ElementIsolate.getElementsByTagNameNS not implemented');
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
}
exports.default = ElementIsolate;
exports.ElementIsolatePropertyKeys = ['attributes', 'classList', 'className', 'clientHeight', 'clientLeft', 'clientTop', 'clientWidth', 'id', 'innerHTML', 'localName', 'namespaceURI', 'outerHTML', 'part', 'prefix', 'scrollHeight', 'scrollLeft', 'scrollTop', 'scrollWidth', 'shadowRoot', 'slot', 'tagName'];
exports.ElementIsolateConstantKeys = [];
//# sourceMappingURL=ElementIsolate.js.map