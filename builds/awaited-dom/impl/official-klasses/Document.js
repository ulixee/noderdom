"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Document_1 = require("../../base/official-klasses/Document");
const create_1 = require("../create");
const Node_1 = __importDefault(require("./Node"));
const DocumentOrShadowRoot_1 = __importDefault(require("../official-mixins/DocumentOrShadowRoot"));
const FontFaceSource_1 = __importDefault(require("../official-mixins/FontFaceSource"));
const NonElementParentNode_1 = __importDefault(require("../official-mixins/NonElementParentNode"));
const ParentNode_1 = __importDefault(require("../official-mixins/ParentNode"));
const XPathEvaluatorBase_1 = __importDefault(require("../official-mixins/XPathEvaluatorBase"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const DocumentBaseClass = Document_1.DocumentGenerator(Node_1.default, DocumentOrShadowRoot_1.default, FontFaceSource_1.default, NonElementParentNode_1.default, ParentNode_1.default, XPathEvaluatorBase_1.default);
class Document extends DocumentBaseClass {
    constructor() {
        super();
    }
    // properties
    get anchors() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty('anchors'), awaitedOptions);
    }
    get body() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLElement(awaitedPath.addProperty('body'), awaitedOptions);
    }
    get doctype() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createDocumentType(awaitedPath.addProperty('doctype'), awaitedOptions);
    }
    get documentElement() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty('documentElement'), awaitedOptions);
    }
    get embeds() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty('embeds'), awaitedOptions);
    }
    get featurePolicy() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createFeaturePolicy(awaitedPath.addProperty('featurePolicy'), awaitedOptions);
    }
    get forms() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty('forms'), awaitedOptions);
    }
    get head() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLHeadElement(awaitedPath.addProperty('head'), awaitedOptions);
    }
    get images() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty('images'), awaitedOptions);
    }
    get implementation() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createDOMImplementation(awaitedPath.addProperty('implementation'), awaitedOptions);
    }
    get links() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty('links'), awaitedOptions);
    }
    get location() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createLocation(awaitedPath.addProperty('location'), awaitedOptions);
    }
    get plugins() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty('plugins'), awaitedOptions);
    }
    get scripts() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty('scripts'), awaitedOptions);
    }
    get scrollingElement() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty('scrollingElement'), awaitedOptions);
    }
    // methods
    getElementsByClassName(classNames) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addMethod('getElementsByClassName', classNames), awaitedOptions);
    }
    getElementsByName(elementName) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNodeList(awaitedPath.addMethod('getElementsByName', elementName), awaitedOptions);
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
exports.default = Document;
//# sourceMappingURL=Document.js.map