"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Element_1 = require("../../base/official-klasses/Element");
const create_1 = require("../create");
const Node_1 = __importDefault(require("./Node"));
const NonDocumentTypeChildNode_1 = __importDefault(require("../official-mixins/NonDocumentTypeChildNode"));
const ParentNode_1 = __importDefault(require("../official-mixins/ParentNode"));
const Slotable_1 = __importDefault(require("../official-mixins/Slotable"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const ElementBaseClass = (0, Element_1.ElementGenerator)(Node_1.default, NonDocumentTypeChildNode_1.default, ParentNode_1.default, Slotable_1.default);
class Element extends ElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get attributes() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createNamedNodeMap)(awaitedPath.addProperty(this, 'attributes'), awaitedOptions);
    }
    get classList() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDOMTokenList)(awaitedPath.addProperty(this, 'classList'), awaitedOptions);
    }
    get part() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDOMTokenList)(awaitedPath.addProperty(this, 'part'), awaitedOptions);
    }
    get shadowRoot() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createShadowRoot)(awaitedPath.addProperty(this, 'shadowRoot'), awaitedOptions);
    }
    // methods
    closest(selectors) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addMethod(this, 'closest', selectors), awaitedOptions);
    }
    getElementsByClassName(classNames) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addMethod(this, 'getElementsByClassName', classNames), awaitedOptions);
    }
    getElementsByTagName(qualifiedName) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addMethod(this, 'getElementsByTagName', qualifiedName), awaitedOptions);
    }
    getElementsByTagNameNS(namespace, localName) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addMethod(this, 'getElementsByTagNameNS', namespace, localName), awaitedOptions);
    }
}
exports.default = Element;
//# sourceMappingURL=Element.js.map