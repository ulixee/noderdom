"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const ElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/ElementIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class ElementIsolate extends ElementIsolate_1.default {
    get attributes() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createNamedNodeMap(awaitedPath.addProperty('attributes'), awaitedOptions);
    }
    get classList() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createDOMTokenList(awaitedPath.addProperty('classList'), awaitedOptions);
    }
    get part() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createDOMTokenList(awaitedPath.addProperty('part'), awaitedOptions);
    }
    get shadowRoot() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createShadowRoot(awaitedPath.addProperty('shadowRoot'), awaitedOptions);
    }
    // methods
    closest(selectors) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addMethod('closest', selectors), awaitedOptions);
    }
    getElementsByClassName(classNames) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addMethod('getElementsByClassName', classNames), awaitedOptions);
    }
    getElementsByTagName(qualifiedName) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addMethod('getElementsByTagName', qualifiedName), awaitedOptions);
    }
    getElementsByTagNameNS(namespace, localName) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addMethod('getElementsByTagNameNS', namespace, localName), awaitedOptions);
    }
}
exports.default = ElementIsolate;
//# sourceMappingURL=ElementIsolate.js.map