"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../base/StateMachine"));
exports.setState = StateMachine_1.default().setState;
function createAttr(awaitedPath, awaitedOptions) {
    const Attr = require('./official-klasses/Attr').default; // tslint:disable-line:variable-name
    const instance = new Attr();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createAttr = createAttr;
function createBlob(awaitedPath, awaitedOptions) {
    const Blob = require('./official-klasses/Blob').default; // tslint:disable-line:variable-name
    const instance = new Blob();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createBlob = createBlob;
function createCharacterData(awaitedPath, awaitedOptions) {
    const CharacterData = require('./official-klasses/CharacterData').default; // tslint:disable-line:variable-name
    const instance = new CharacterData();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createCharacterData = createCharacterData;
function createDOMImplementation(awaitedPath, awaitedOptions) {
    const DOMImplementation = require('./official-klasses/DOMImplementation').default; // tslint:disable-line:variable-name
    const instance = new DOMImplementation();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createDOMImplementation = createDOMImplementation;
function createDOMRect(awaitedPath, awaitedOptions) {
    const DOMRect = require('./official-klasses/DOMRect').default; // tslint:disable-line:variable-name
    const instance = new DOMRect();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createDOMRect = createDOMRect;
function createDOMRectList(awaitedPath, awaitedOptions) {
    const DOMRectList = require('./official-klasses/DOMRectList').default; // tslint:disable-line:variable-name
    const instance = new DOMRectList();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createDOMRectList = createDOMRectList;
function createDOMTokenList(awaitedPath, awaitedOptions) {
    const DOMTokenList = require('./official-klasses/DOMTokenList').default; // tslint:disable-line:variable-name
    const instance = new DOMTokenList();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createDOMTokenList = createDOMTokenList;
function createDocument(awaitedPath, awaitedOptions) {
    const Document = require('./official-klasses/Document').default; // tslint:disable-line:variable-name
    const instance = new Document();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createDocument = createDocument;
function createDocumentType(awaitedPath, awaitedOptions) {
    const DocumentType = require('./official-klasses/DocumentType').default; // tslint:disable-line:variable-name
    const instance = new DocumentType();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createDocumentType = createDocumentType;
function createElement(awaitedPath, awaitedOptions) {
    const Element = require('./official-klasses/Element').default; // tslint:disable-line:variable-name
    const instance = new Element();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createElement = createElement;
function createFeaturePolicy(awaitedPath, awaitedOptions) {
    const FeaturePolicy = require('./official-klasses/FeaturePolicy').default; // tslint:disable-line:variable-name
    const instance = new FeaturePolicy();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createFeaturePolicy = createFeaturePolicy;
function createHTMLButtonElement(awaitedPath, awaitedOptions) {
    const HTMLButtonElement = require('./official-klasses/HTMLButtonElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLButtonElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLButtonElement = createHTMLButtonElement;
function createHTMLCollection(awaitedPath, awaitedOptions) {
    const HTMLCollection = require('./official-klasses/HTMLCollection').default; // tslint:disable-line:variable-name
    const instance = new HTMLCollection();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLCollection = createHTMLCollection;
function createHTMLCollectionBase(awaitedPath, awaitedOptions) {
    const HTMLCollectionBase = require('./official-klasses/HTMLCollectionBase').default; // tslint:disable-line:variable-name
    const instance = new HTMLCollectionBase();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLCollectionBase = createHTMLCollectionBase;
function createHTMLElement(awaitedPath, awaitedOptions) {
    const HTMLElement = require('./official-klasses/HTMLElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLElement = createHTMLElement;
function createHTMLFieldSetElement(awaitedPath, awaitedOptions) {
    const HTMLFieldSetElement = require('./official-klasses/HTMLFieldSetElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLFieldSetElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLFieldSetElement = createHTMLFieldSetElement;
function createHTMLFormElement(awaitedPath, awaitedOptions) {
    const HTMLFormElement = require('./official-klasses/HTMLFormElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLFormElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLFormElement = createHTMLFormElement;
function createHTMLHeadElement(awaitedPath, awaitedOptions) {
    const HTMLHeadElement = require('./official-klasses/HTMLHeadElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLHeadElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLHeadElement = createHTMLHeadElement;
function createHTMLInputElement(awaitedPath, awaitedOptions) {
    const HTMLInputElement = require('./official-klasses/HTMLInputElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLInputElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLInputElement = createHTMLInputElement;
function createHTMLLabelElement(awaitedPath, awaitedOptions) {
    const HTMLLabelElement = require('./official-klasses/HTMLLabelElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLLabelElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLLabelElement = createHTMLLabelElement;
function createHTMLOptGroupElement(awaitedPath, awaitedOptions) {
    const HTMLOptGroupElement = require('./official-klasses/HTMLOptGroupElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLOptGroupElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLOptGroupElement = createHTMLOptGroupElement;
function createHTMLOptionElement(awaitedPath, awaitedOptions) {
    const HTMLOptionElement = require('./official-klasses/HTMLOptionElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLOptionElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLOptionElement = createHTMLOptionElement;
function createHTMLOptionsCollection(awaitedPath, awaitedOptions) {
    const HTMLOptionsCollection = require('./official-klasses/HTMLOptionsCollection').default; // tslint:disable-line:variable-name
    const instance = new HTMLOptionsCollection();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLOptionsCollection = createHTMLOptionsCollection;
function createHTMLSelectElement(awaitedPath, awaitedOptions) {
    const HTMLSelectElement = require('./official-klasses/HTMLSelectElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLSelectElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLSelectElement = createHTMLSelectElement;
function createHTMLTextAreaElement(awaitedPath, awaitedOptions) {
    const HTMLTextAreaElement = require('./official-klasses/HTMLTextAreaElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLTextAreaElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLTextAreaElement = createHTMLTextAreaElement;
function createHeaders(awaitedPath, awaitedOptions) {
    const Headers = require('./official-klasses/Headers').default; // tslint:disable-line:variable-name
    const instance = new Headers();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHeaders = createHeaders;
function createLocation(awaitedPath, awaitedOptions) {
    const Location = require('./official-klasses/Location').default; // tslint:disable-line:variable-name
    const instance = new Location();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createLocation = createLocation;
function createNamedNodeMap(awaitedPath, awaitedOptions) {
    const NamedNodeMap = require('./official-klasses/NamedNodeMap').default; // tslint:disable-line:variable-name
    const instance = new NamedNodeMap();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createNamedNodeMap = createNamedNodeMap;
function createNode(awaitedPath, awaitedOptions) {
    const Node = require('./official-klasses/Node').default; // tslint:disable-line:variable-name
    const instance = new Node();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createNode = createNode;
function createNodeList(awaitedPath, awaitedOptions) {
    const NodeList = require('./official-klasses/NodeList').default; // tslint:disable-line:variable-name
    const instance = new NodeList();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createNodeList = createNodeList;
function createRadioNodeList(awaitedPath, awaitedOptions) {
    const RadioNodeList = require('./official-klasses/RadioNodeList').default; // tslint:disable-line:variable-name
    const instance = new RadioNodeList();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createRadioNodeList = createRadioNodeList;
function createRequest(awaitedPath, awaitedOptions) {
    const Request = require('./official-klasses/Request').default; // tslint:disable-line:variable-name
    const instance = new Request();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createRequest = createRequest;
function createResponse(awaitedPath, awaitedOptions) {
    const Response = require('./official-klasses/Response').default; // tslint:disable-line:variable-name
    const instance = new Response();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createResponse = createResponse;
function createShadowRoot(awaitedPath, awaitedOptions) {
    const ShadowRoot = require('./official-klasses/ShadowRoot').default; // tslint:disable-line:variable-name
    const instance = new ShadowRoot();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createShadowRoot = createShadowRoot;
function createStyleSheet(awaitedPath, awaitedOptions) {
    const StyleSheet = require('./official-klasses/StyleSheet').default; // tslint:disable-line:variable-name
    const instance = new StyleSheet();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createStyleSheet = createStyleSheet;
function createText(awaitedPath, awaitedOptions) {
    const Text = require('./official-klasses/Text').default; // tslint:disable-line:variable-name
    const instance = new Text();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createText = createText;
function createValidityState(awaitedPath, awaitedOptions) {
    const ValidityState = require('./official-klasses/ValidityState').default; // tslint:disable-line:variable-name
    const instance = new ValidityState();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createValidityState = createValidityState;
function createSuperDocument(awaitedPath, awaitedOptions) {
    const SuperDocument = require('./super-klasses/SuperDocument').default; // tslint:disable-line:variable-name
    const instance = new SuperDocument();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createSuperDocument = createSuperDocument;
function createSuperElement(awaitedPath, awaitedOptions) {
    const SuperElement = require('./super-klasses/SuperElement').default; // tslint:disable-line:variable-name
    const instance = new SuperElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createSuperElement = createSuperElement;
function createSuperNode(awaitedPath, awaitedOptions) {
    const SuperNode = require('./super-klasses/SuperNode').default; // tslint:disable-line:variable-name
    const instance = new SuperNode();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createSuperNode = createSuperNode;
function createSuperNodeList(awaitedPath, awaitedOptions) {
    const SuperNodeList = require('./super-klasses/SuperNodeList').default; // tslint:disable-line:variable-name
    const instance = new SuperNodeList();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createSuperNodeList = createSuperNodeList;
function createSuperHTMLCollection(awaitedPath, awaitedOptions) {
    const SuperHTMLCollection = require('./super-klasses/SuperHTMLCollection').default; // tslint:disable-line:variable-name
    const instance = new SuperHTMLCollection();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createSuperHTMLCollection = createSuperHTMLCollection;
function createSuperText(awaitedPath, awaitedOptions) {
    const SuperText = require('./super-klasses/SuperText').default; // tslint:disable-line:variable-name
    const instance = new SuperText();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createSuperText = createSuperText;
function createSuperCharacterData(awaitedPath, awaitedOptions) {
    const SuperCharacterData = require('./super-klasses/SuperCharacterData').default; // tslint:disable-line:variable-name
    const instance = new SuperCharacterData();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createSuperCharacterData = createSuperCharacterData;
function createSuperHTMLElement(awaitedPath, awaitedOptions) {
    const SuperHTMLElement = require('./super-klasses/SuperHTMLElement').default; // tslint:disable-line:variable-name
    const instance = new SuperHTMLElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createSuperHTMLElement = createSuperHTMLElement;
function createSuperStyleSheet(awaitedPath, awaitedOptions) {
    const SuperStyleSheet = require('./super-klasses/SuperStyleSheet').default; // tslint:disable-line:variable-name
    const instance = new SuperStyleSheet();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createSuperStyleSheet = createSuperStyleSheet;
//# sourceMappingURL=create.js.map