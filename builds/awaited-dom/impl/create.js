"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSuperStyleSheet = exports.createSuperHTMLElement = exports.createSuperText = exports.createSuperHTMLCollection = exports.createSuperNodeList = exports.createSuperNode = exports.createSuperElement = exports.createSuperDocument = exports.createXPathResult = exports.createXPathExpression = exports.createVideoTrackList = exports.createVideoPlaybackQuality = exports.createValidityState = exports.createTimeRanges = exports.createTextTrackList = exports.createTextTrack = exports.createText = exports.createStyleSheet = exports.createStylePropertyMapReadOnly = exports.createStorage = exports.createShadowRoot = exports.createSelection = exports.createResponse = exports.createRequest = exports.createRange = exports.createRadioNodeList = exports.createOffscreenCanvas = exports.createNodeList = exports.createNode = exports.createNamedNodeMap = exports.createMediaStream = exports.createMediaKeys = exports.createMediaError = exports.createLocation = exports.createHeaders = exports.createHTMLVideoElement = exports.createHTMLUListElement = exports.createHTMLTrackElement = exports.createHTMLTitleElement = exports.createHTMLTimeElement = exports.createHTMLTextAreaElement = exports.createHTMLTableSectionElement = exports.createHTMLTableRowElement = exports.createHTMLTableElement = exports.createHTMLTableColElement = exports.createHTMLTableCellElement = exports.createHTMLTableCaptionElement = exports.createHTMLStyleElement = exports.createHTMLSourceElement = exports.createHTMLSlotElement = exports.createHTMLSelectElement = exports.createHTMLScriptElement = exports.createHTMLQuoteElement = exports.createHTMLProgressElement = exports.createHTMLPreElement = exports.createHTMLParamElement = exports.createHTMLParagraphElement = exports.createHTMLOptionsCollection = exports.createHTMLOptionElement = exports.createHTMLOptGroupElement = exports.createHTMLObjectElement = exports.createHTMLOListElement = exports.createHTMLModElement = exports.createHTMLMetaElement = exports.createHTMLMediaElement = exports.createHTMLMapElement = exports.createHTMLLinkElement = exports.createHTMLLabelElement = exports.createHTMLLIElement = exports.createHTMLInputElement = exports.createHTMLImageElement = exports.createHTMLIFrameElement = exports.createHTMLHtmlElement = exports.createHTMLHeadingElement = exports.createHTMLHeadElement = exports.createHTMLHRElement = exports.createHTMLFrameSetElement = exports.createHTMLFrameElement = exports.createHTMLFormElement = exports.createHTMLFormControlsCollection = exports.createHTMLFontElement = exports.createHTMLFieldSetElement = exports.createHTMLEmbedElement = exports.createHTMLElement = exports.createHTMLDivElement = exports.createHTMLDirectoryElement = exports.createHTMLDialogElement = exports.createHTMLDetailsElement = exports.createHTMLDataListElement = exports.createHTMLDataElement = exports.createHTMLDListElement = exports.createHTMLCollectionBase = exports.createHTMLCollection = exports.createHTMLCanvasElement = exports.createHTMLButtonElement = exports.createHTMLBodyElement = exports.createHTMLBaseElement = exports.createHTMLAreaElement = exports.createHTMLAnchorElement = exports.createFontFaceSet = exports.createFontFace = exports.createFeaturePolicy = exports.createElement = exports.createDocumentType = exports.createDocumentFragment = exports.createDocument = exports.createDOMTokenList = exports.createDOMStringMap = exports.createDOMRectList = exports.createDOMRect = exports.createDOMImplementation = exports.createCharacterData = exports.createCaretPosition = exports.createCSSStyleSheet = exports.createCSSStyleDeclaration = exports.createCSSRuleList = exports.createCSSRule = exports.createBlob = exports.createAudioTrackList = exports.createAttr = exports.setState = void 0;
const StateMachine_1 = __importDefault(require("../base/StateMachine"));
exports.setState = StateMachine_1.default().setState;
function createAttr(awaitedPath, awaitedOptions) {
    const Attr = require('./official-klasses/Attr').default; // tslint:disable-line:variable-name
    const instance = new Attr();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createAttr = createAttr;
function createAudioTrackList(awaitedPath, awaitedOptions) {
    const AudioTrackList = require('./official-klasses/AudioTrackList').default; // tslint:disable-line:variable-name
    const instance = new AudioTrackList();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createAudioTrackList = createAudioTrackList;
function createBlob(awaitedPath, awaitedOptions) {
    const Blob = require('./official-klasses/Blob').default; // tslint:disable-line:variable-name
    const instance = new Blob();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createBlob = createBlob;
function createCSSRule(awaitedPath, awaitedOptions) {
    const CSSRule = require('./official-klasses/CSSRule').default; // tslint:disable-line:variable-name
    const instance = new CSSRule();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createCSSRule = createCSSRule;
function createCSSRuleList(awaitedPath, awaitedOptions) {
    const CSSRuleList = require('./official-klasses/CSSRuleList').default; // tslint:disable-line:variable-name
    const instance = new CSSRuleList();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createCSSRuleList = createCSSRuleList;
function createCSSStyleDeclaration(awaitedPath, awaitedOptions) {
    const CSSStyleDeclaration = require('./official-klasses/CSSStyleDeclaration').default; // tslint:disable-line:variable-name
    const instance = new CSSStyleDeclaration();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createCSSStyleDeclaration = createCSSStyleDeclaration;
function createCSSStyleSheet(awaitedPath, awaitedOptions) {
    const CSSStyleSheet = require('./official-klasses/CSSStyleSheet').default; // tslint:disable-line:variable-name
    const instance = new CSSStyleSheet();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createCSSStyleSheet = createCSSStyleSheet;
function createCaretPosition(awaitedPath, awaitedOptions) {
    const CaretPosition = require('./official-klasses/CaretPosition').default; // tslint:disable-line:variable-name
    const instance = new CaretPosition();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createCaretPosition = createCaretPosition;
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
function createDOMStringMap(awaitedPath, awaitedOptions) {
    const DOMStringMap = require('./official-klasses/DOMStringMap').default; // tslint:disable-line:variable-name
    const instance = new DOMStringMap();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createDOMStringMap = createDOMStringMap;
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
function createDocumentFragment(awaitedPath, awaitedOptions) {
    const DocumentFragment = require('./official-klasses/DocumentFragment').default; // tslint:disable-line:variable-name
    const instance = new DocumentFragment();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createDocumentFragment = createDocumentFragment;
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
function createFontFace(awaitedPath, awaitedOptions) {
    const FontFace = require('./official-klasses/FontFace').default; // tslint:disable-line:variable-name
    const instance = new FontFace();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createFontFace = createFontFace;
function createFontFaceSet(awaitedPath, awaitedOptions) {
    const FontFaceSet = require('./official-klasses/FontFaceSet').default; // tslint:disable-line:variable-name
    const instance = new FontFaceSet();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createFontFaceSet = createFontFaceSet;
function createHTMLAnchorElement(awaitedPath, awaitedOptions) {
    const HTMLAnchorElement = require('./official-klasses/HTMLAnchorElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLAnchorElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLAnchorElement = createHTMLAnchorElement;
function createHTMLAreaElement(awaitedPath, awaitedOptions) {
    const HTMLAreaElement = require('./official-klasses/HTMLAreaElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLAreaElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLAreaElement = createHTMLAreaElement;
function createHTMLBaseElement(awaitedPath, awaitedOptions) {
    const HTMLBaseElement = require('./official-klasses/HTMLBaseElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLBaseElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLBaseElement = createHTMLBaseElement;
function createHTMLBodyElement(awaitedPath, awaitedOptions) {
    const HTMLBodyElement = require('./official-klasses/HTMLBodyElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLBodyElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLBodyElement = createHTMLBodyElement;
function createHTMLButtonElement(awaitedPath, awaitedOptions) {
    const HTMLButtonElement = require('./official-klasses/HTMLButtonElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLButtonElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLButtonElement = createHTMLButtonElement;
function createHTMLCanvasElement(awaitedPath, awaitedOptions) {
    const HTMLCanvasElement = require('./official-klasses/HTMLCanvasElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLCanvasElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLCanvasElement = createHTMLCanvasElement;
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
function createHTMLDListElement(awaitedPath, awaitedOptions) {
    const HTMLDListElement = require('./official-klasses/HTMLDListElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLDListElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLDListElement = createHTMLDListElement;
function createHTMLDataElement(awaitedPath, awaitedOptions) {
    const HTMLDataElement = require('./official-klasses/HTMLDataElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLDataElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLDataElement = createHTMLDataElement;
function createHTMLDataListElement(awaitedPath, awaitedOptions) {
    const HTMLDataListElement = require('./official-klasses/HTMLDataListElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLDataListElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLDataListElement = createHTMLDataListElement;
function createHTMLDetailsElement(awaitedPath, awaitedOptions) {
    const HTMLDetailsElement = require('./official-klasses/HTMLDetailsElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLDetailsElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLDetailsElement = createHTMLDetailsElement;
function createHTMLDialogElement(awaitedPath, awaitedOptions) {
    const HTMLDialogElement = require('./official-klasses/HTMLDialogElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLDialogElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLDialogElement = createHTMLDialogElement;
function createHTMLDirectoryElement(awaitedPath, awaitedOptions) {
    const HTMLDirectoryElement = require('./official-klasses/HTMLDirectoryElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLDirectoryElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLDirectoryElement = createHTMLDirectoryElement;
function createHTMLDivElement(awaitedPath, awaitedOptions) {
    const HTMLDivElement = require('./official-klasses/HTMLDivElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLDivElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLDivElement = createHTMLDivElement;
function createHTMLElement(awaitedPath, awaitedOptions) {
    const HTMLElement = require('./official-klasses/HTMLElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLElement = createHTMLElement;
function createHTMLEmbedElement(awaitedPath, awaitedOptions) {
    const HTMLEmbedElement = require('./official-klasses/HTMLEmbedElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLEmbedElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLEmbedElement = createHTMLEmbedElement;
function createHTMLFieldSetElement(awaitedPath, awaitedOptions) {
    const HTMLFieldSetElement = require('./official-klasses/HTMLFieldSetElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLFieldSetElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLFieldSetElement = createHTMLFieldSetElement;
function createHTMLFontElement(awaitedPath, awaitedOptions) {
    const HTMLFontElement = require('./official-klasses/HTMLFontElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLFontElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLFontElement = createHTMLFontElement;
function createHTMLFormControlsCollection(awaitedPath, awaitedOptions) {
    const HTMLFormControlsCollection = require('./official-klasses/HTMLFormControlsCollection').default; // tslint:disable-line:variable-name
    const instance = new HTMLFormControlsCollection();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLFormControlsCollection = createHTMLFormControlsCollection;
function createHTMLFormElement(awaitedPath, awaitedOptions) {
    const HTMLFormElement = require('./official-klasses/HTMLFormElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLFormElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLFormElement = createHTMLFormElement;
function createHTMLFrameElement(awaitedPath, awaitedOptions) {
    const HTMLFrameElement = require('./official-klasses/HTMLFrameElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLFrameElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLFrameElement = createHTMLFrameElement;
function createHTMLFrameSetElement(awaitedPath, awaitedOptions) {
    const HTMLFrameSetElement = require('./official-klasses/HTMLFrameSetElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLFrameSetElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLFrameSetElement = createHTMLFrameSetElement;
function createHTMLHRElement(awaitedPath, awaitedOptions) {
    const HTMLHRElement = require('./official-klasses/HTMLHRElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLHRElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLHRElement = createHTMLHRElement;
function createHTMLHeadElement(awaitedPath, awaitedOptions) {
    const HTMLHeadElement = require('./official-klasses/HTMLHeadElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLHeadElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLHeadElement = createHTMLHeadElement;
function createHTMLHeadingElement(awaitedPath, awaitedOptions) {
    const HTMLHeadingElement = require('./official-klasses/HTMLHeadingElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLHeadingElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLHeadingElement = createHTMLHeadingElement;
function createHTMLHtmlElement(awaitedPath, awaitedOptions) {
    const HTMLHtmlElement = require('./official-klasses/HTMLHtmlElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLHtmlElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLHtmlElement = createHTMLHtmlElement;
function createHTMLIFrameElement(awaitedPath, awaitedOptions) {
    const HTMLIFrameElement = require('./official-klasses/HTMLIFrameElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLIFrameElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLIFrameElement = createHTMLIFrameElement;
function createHTMLImageElement(awaitedPath, awaitedOptions) {
    const HTMLImageElement = require('./official-klasses/HTMLImageElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLImageElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLImageElement = createHTMLImageElement;
function createHTMLInputElement(awaitedPath, awaitedOptions) {
    const HTMLInputElement = require('./official-klasses/HTMLInputElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLInputElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLInputElement = createHTMLInputElement;
function createHTMLLIElement(awaitedPath, awaitedOptions) {
    const HTMLLIElement = require('./official-klasses/HTMLLIElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLLIElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLLIElement = createHTMLLIElement;
function createHTMLLabelElement(awaitedPath, awaitedOptions) {
    const HTMLLabelElement = require('./official-klasses/HTMLLabelElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLLabelElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLLabelElement = createHTMLLabelElement;
function createHTMLLinkElement(awaitedPath, awaitedOptions) {
    const HTMLLinkElement = require('./official-klasses/HTMLLinkElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLLinkElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLLinkElement = createHTMLLinkElement;
function createHTMLMapElement(awaitedPath, awaitedOptions) {
    const HTMLMapElement = require('./official-klasses/HTMLMapElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLMapElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLMapElement = createHTMLMapElement;
function createHTMLMediaElement(awaitedPath, awaitedOptions) {
    const HTMLMediaElement = require('./official-klasses/HTMLMediaElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLMediaElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLMediaElement = createHTMLMediaElement;
function createHTMLMetaElement(awaitedPath, awaitedOptions) {
    const HTMLMetaElement = require('./official-klasses/HTMLMetaElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLMetaElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLMetaElement = createHTMLMetaElement;
function createHTMLModElement(awaitedPath, awaitedOptions) {
    const HTMLModElement = require('./official-klasses/HTMLModElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLModElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLModElement = createHTMLModElement;
function createHTMLOListElement(awaitedPath, awaitedOptions) {
    const HTMLOListElement = require('./official-klasses/HTMLOListElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLOListElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLOListElement = createHTMLOListElement;
function createHTMLObjectElement(awaitedPath, awaitedOptions) {
    const HTMLObjectElement = require('./official-klasses/HTMLObjectElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLObjectElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLObjectElement = createHTMLObjectElement;
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
function createHTMLParagraphElement(awaitedPath, awaitedOptions) {
    const HTMLParagraphElement = require('./official-klasses/HTMLParagraphElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLParagraphElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLParagraphElement = createHTMLParagraphElement;
function createHTMLParamElement(awaitedPath, awaitedOptions) {
    const HTMLParamElement = require('./official-klasses/HTMLParamElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLParamElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLParamElement = createHTMLParamElement;
function createHTMLPreElement(awaitedPath, awaitedOptions) {
    const HTMLPreElement = require('./official-klasses/HTMLPreElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLPreElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLPreElement = createHTMLPreElement;
function createHTMLProgressElement(awaitedPath, awaitedOptions) {
    const HTMLProgressElement = require('./official-klasses/HTMLProgressElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLProgressElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLProgressElement = createHTMLProgressElement;
function createHTMLQuoteElement(awaitedPath, awaitedOptions) {
    const HTMLQuoteElement = require('./official-klasses/HTMLQuoteElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLQuoteElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLQuoteElement = createHTMLQuoteElement;
function createHTMLScriptElement(awaitedPath, awaitedOptions) {
    const HTMLScriptElement = require('./official-klasses/HTMLScriptElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLScriptElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLScriptElement = createHTMLScriptElement;
function createHTMLSelectElement(awaitedPath, awaitedOptions) {
    const HTMLSelectElement = require('./official-klasses/HTMLSelectElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLSelectElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLSelectElement = createHTMLSelectElement;
function createHTMLSlotElement(awaitedPath, awaitedOptions) {
    const HTMLSlotElement = require('./official-klasses/HTMLSlotElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLSlotElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLSlotElement = createHTMLSlotElement;
function createHTMLSourceElement(awaitedPath, awaitedOptions) {
    const HTMLSourceElement = require('./official-klasses/HTMLSourceElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLSourceElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLSourceElement = createHTMLSourceElement;
function createHTMLStyleElement(awaitedPath, awaitedOptions) {
    const HTMLStyleElement = require('./official-klasses/HTMLStyleElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLStyleElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLStyleElement = createHTMLStyleElement;
function createHTMLTableCaptionElement(awaitedPath, awaitedOptions) {
    const HTMLTableCaptionElement = require('./official-klasses/HTMLTableCaptionElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLTableCaptionElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLTableCaptionElement = createHTMLTableCaptionElement;
function createHTMLTableCellElement(awaitedPath, awaitedOptions) {
    const HTMLTableCellElement = require('./official-klasses/HTMLTableCellElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLTableCellElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLTableCellElement = createHTMLTableCellElement;
function createHTMLTableColElement(awaitedPath, awaitedOptions) {
    const HTMLTableColElement = require('./official-klasses/HTMLTableColElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLTableColElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLTableColElement = createHTMLTableColElement;
function createHTMLTableElement(awaitedPath, awaitedOptions) {
    const HTMLTableElement = require('./official-klasses/HTMLTableElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLTableElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLTableElement = createHTMLTableElement;
function createHTMLTableRowElement(awaitedPath, awaitedOptions) {
    const HTMLTableRowElement = require('./official-klasses/HTMLTableRowElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLTableRowElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLTableRowElement = createHTMLTableRowElement;
function createHTMLTableSectionElement(awaitedPath, awaitedOptions) {
    const HTMLTableSectionElement = require('./official-klasses/HTMLTableSectionElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLTableSectionElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLTableSectionElement = createHTMLTableSectionElement;
function createHTMLTextAreaElement(awaitedPath, awaitedOptions) {
    const HTMLTextAreaElement = require('./official-klasses/HTMLTextAreaElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLTextAreaElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLTextAreaElement = createHTMLTextAreaElement;
function createHTMLTimeElement(awaitedPath, awaitedOptions) {
    const HTMLTimeElement = require('./official-klasses/HTMLTimeElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLTimeElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLTimeElement = createHTMLTimeElement;
function createHTMLTitleElement(awaitedPath, awaitedOptions) {
    const HTMLTitleElement = require('./official-klasses/HTMLTitleElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLTitleElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLTitleElement = createHTMLTitleElement;
function createHTMLTrackElement(awaitedPath, awaitedOptions) {
    const HTMLTrackElement = require('./official-klasses/HTMLTrackElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLTrackElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLTrackElement = createHTMLTrackElement;
function createHTMLUListElement(awaitedPath, awaitedOptions) {
    const HTMLUListElement = require('./official-klasses/HTMLUListElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLUListElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLUListElement = createHTMLUListElement;
function createHTMLVideoElement(awaitedPath, awaitedOptions) {
    const HTMLVideoElement = require('./official-klasses/HTMLVideoElement').default; // tslint:disable-line:variable-name
    const instance = new HTMLVideoElement();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createHTMLVideoElement = createHTMLVideoElement;
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
function createMediaError(awaitedPath, awaitedOptions) {
    const MediaError = require('./official-klasses/MediaError').default; // tslint:disable-line:variable-name
    const instance = new MediaError();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createMediaError = createMediaError;
function createMediaKeys(awaitedPath, awaitedOptions) {
    const MediaKeys = require('./official-klasses/MediaKeys').default; // tslint:disable-line:variable-name
    const instance = new MediaKeys();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createMediaKeys = createMediaKeys;
function createMediaStream(awaitedPath, awaitedOptions) {
    const MediaStream = require('./official-klasses/MediaStream').default; // tslint:disable-line:variable-name
    const instance = new MediaStream();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createMediaStream = createMediaStream;
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
function createOffscreenCanvas(awaitedPath, awaitedOptions) {
    const OffscreenCanvas = require('./official-klasses/OffscreenCanvas').default; // tslint:disable-line:variable-name
    const instance = new OffscreenCanvas();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createOffscreenCanvas = createOffscreenCanvas;
function createRadioNodeList(awaitedPath, awaitedOptions) {
    const RadioNodeList = require('./official-klasses/RadioNodeList').default; // tslint:disable-line:variable-name
    const instance = new RadioNodeList();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createRadioNodeList = createRadioNodeList;
function createRange(awaitedPath, awaitedOptions) {
    const Range = require('./official-klasses/Range').default; // tslint:disable-line:variable-name
    const instance = new Range();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createRange = createRange;
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
function createSelection(awaitedPath, awaitedOptions) {
    const Selection = require('./official-klasses/Selection').default; // tslint:disable-line:variable-name
    const instance = new Selection();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createSelection = createSelection;
function createShadowRoot(awaitedPath, awaitedOptions) {
    const ShadowRoot = require('./official-klasses/ShadowRoot').default; // tslint:disable-line:variable-name
    const instance = new ShadowRoot();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createShadowRoot = createShadowRoot;
function createStorage(awaitedPath, awaitedOptions) {
    const Storage = require('./official-klasses/Storage').default; // tslint:disable-line:variable-name
    const instance = new Storage();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createStorage = createStorage;
function createStylePropertyMapReadOnly(awaitedPath, awaitedOptions) {
    const StylePropertyMapReadOnly = require('./official-klasses/StylePropertyMapReadOnly').default; // tslint:disable-line:variable-name
    const instance = new StylePropertyMapReadOnly();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createStylePropertyMapReadOnly = createStylePropertyMapReadOnly;
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
function createTextTrack(awaitedPath, awaitedOptions) {
    const TextTrack = require('./official-klasses/TextTrack').default; // tslint:disable-line:variable-name
    const instance = new TextTrack();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createTextTrack = createTextTrack;
function createTextTrackList(awaitedPath, awaitedOptions) {
    const TextTrackList = require('./official-klasses/TextTrackList').default; // tslint:disable-line:variable-name
    const instance = new TextTrackList();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createTextTrackList = createTextTrackList;
function createTimeRanges(awaitedPath, awaitedOptions) {
    const TimeRanges = require('./official-klasses/TimeRanges').default; // tslint:disable-line:variable-name
    const instance = new TimeRanges();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createTimeRanges = createTimeRanges;
function createValidityState(awaitedPath, awaitedOptions) {
    const ValidityState = require('./official-klasses/ValidityState').default; // tslint:disable-line:variable-name
    const instance = new ValidityState();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createValidityState = createValidityState;
function createVideoPlaybackQuality(awaitedPath, awaitedOptions) {
    const VideoPlaybackQuality = require('./official-klasses/VideoPlaybackQuality').default; // tslint:disable-line:variable-name
    const instance = new VideoPlaybackQuality();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createVideoPlaybackQuality = createVideoPlaybackQuality;
function createVideoTrackList(awaitedPath, awaitedOptions) {
    const VideoTrackList = require('./official-klasses/VideoTrackList').default; // tslint:disable-line:variable-name
    const instance = new VideoTrackList();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createVideoTrackList = createVideoTrackList;
function createXPathExpression(awaitedPath, awaitedOptions) {
    const XPathExpression = require('./official-klasses/XPathExpression').default; // tslint:disable-line:variable-name
    const instance = new XPathExpression();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createXPathExpression = createXPathExpression;
function createXPathResult(awaitedPath, awaitedOptions) {
    const XPathResult = require('./official-klasses/XPathResult').default; // tslint:disable-line:variable-name
    const instance = new XPathResult();
    exports.setState(instance, { awaitedPath, awaitedOptions });
    return instance;
}
exports.createXPathResult = createXPathResult;
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