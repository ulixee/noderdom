"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const SuperDocument_1 = require("../../base/super-klasses/SuperDocument");
const create_1 = require("../create");
const NodeIsolate_1 = __importDefault(require("../isolate-mixins/NodeIsolate"));
const ParentNode_1 = __importDefault(require("../official-mixins/ParentNode"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const SuperDocumentBaseClass = SuperDocument_1.SuperDocumentGenerator(NodeIsolate_1.default, ParentNode_1.default);
class SuperDocument extends SuperDocumentBaseClass {
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
exports.default = SuperDocument;
//# sourceMappingURL=SuperDocument.js.map