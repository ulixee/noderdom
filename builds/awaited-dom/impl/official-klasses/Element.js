"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Element_1 = require("../../base/official-klasses/Element");
const create_1 = require("../create");
const Node_1 = __importDefault(require("./Node"));
const NonDocumentTypeChildNode_1 = __importDefault(require("../official-mixins/NonDocumentTypeChildNode"));
const ParentNode_1 = __importDefault(require("../official-mixins/ParentNode"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const ElementBaseClass = Element_1.ElementGenerator(Node_1.default, NonDocumentTypeChildNode_1.default, ParentNode_1.default);
class Element extends ElementBaseClass {
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
exports.default = Element;
//# sourceMappingURL=Element.js.map