"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const SuperElement_1 = require("../../base/super-klasses/SuperElement");
const create_1 = require("../create");
const ElementIsolate_1 = __importDefault(require("../isolate-mixins/ElementIsolate"));
const HTMLButtonElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLButtonElementIsolate"));
const HTMLElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLElementIsolate"));
const HTMLFieldSetElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLFieldSetElementIsolate"));
const HTMLFormElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLFormElementIsolate"));
const HTMLHeadElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLHeadElementIsolate"));
const HTMLInputElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLInputElementIsolate"));
const HTMLLabelElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLLabelElementIsolate"));
const HTMLOptGroupElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLOptGroupElementIsolate"));
const HTMLOptionElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLOptionElementIsolate"));
const HTMLOrSVGElement_1 = __importDefault(require("../official-mixins/HTMLOrSVGElement"));
const HTMLSelectElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLSelectElementIsolate"));
const HTMLTextAreaElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTextAreaElementIsolate"));
const NodeIsolate_1 = __importDefault(require("../isolate-mixins/NodeIsolate"));
const NonDocumentTypeChildNode_1 = __importDefault(require("../official-mixins/NonDocumentTypeChildNode"));
const ParentNode_1 = __importDefault(require("../official-mixins/ParentNode"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const SuperElementBaseClass = SuperElement_1.SuperElementGenerator(ElementIsolate_1.default, HTMLButtonElementIsolate_1.default, HTMLElementIsolate_1.default, HTMLFieldSetElementIsolate_1.default, HTMLFormElementIsolate_1.default, HTMLHeadElementIsolate_1.default, HTMLInputElementIsolate_1.default, HTMLLabelElementIsolate_1.default, HTMLOptGroupElementIsolate_1.default, HTMLOptionElementIsolate_1.default, HTMLOrSVGElement_1.default, HTMLSelectElementIsolate_1.default, HTMLTextAreaElementIsolate_1.default, NodeIsolate_1.default, NonDocumentTypeChildNode_1.default, ParentNode_1.default);
class SuperElement extends SuperElementBaseClass {
    constructor() {
        super();
    }
    // properties
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
exports.default = SuperElement;
//# sourceMappingURL=SuperElement.js.map