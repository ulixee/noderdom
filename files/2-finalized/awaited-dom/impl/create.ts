import AwaitedPath from '../base/AwaitedPath';
import StateMachine from '../base/StateMachine';
import { IAbstractRange, IAttr, IAudioTrack, IAudioTrackList, IBlob, ICSSRule, ICSSRuleList, ICSSStyleDeclaration, ICSSStyleSheet, ICaretPosition, ICharacterData, IDOMImplementation, IDOMParser, IDOMRect, IDOMRectList, IDOMRectReadOnly, IDOMStringMap, IDOMTokenList, IDocument, IDocumentFragment, IDocumentType, IElement, IFeaturePolicy, IFile, IFileList, IHTMLAnchorElement, IHTMLAreaElement, IHTMLAudioElement, IHTMLBRElement, IHTMLBaseElement, IHTMLBodyElement, IHTMLButtonElement, IHTMLCanvasElement, IHTMLCollection, IHTMLCollectionBase, IHTMLDListElement, IHTMLDataElement, IHTMLDataListElement, IHTMLDetailsElement, IHTMLDialogElement, IHTMLDirectoryElement, IHTMLDivElement, IHTMLDocument, IHTMLElement, IHTMLEmbedElement, IHTMLFieldSetElement, IHTMLFontElement, IHTMLFormControlsCollection, IHTMLFormElement, IHTMLFrameElement, IHTMLFrameSetElement, IHTMLHRElement, IHTMLHeadElement, IHTMLHeadingElement, IHTMLHtmlElement, IHTMLIFrameElement, IHTMLImageElement, IHTMLInputElement, IHTMLLIElement, IHTMLLabelElement, IHTMLLegendElement, IHTMLLinkElement, IHTMLMapElement, IHTMLMediaElement, IHTMLMetaElement, IHTMLMeterElement, IHTMLModElement, IHTMLOListElement, IHTMLObjectElement, IHTMLOptGroupElement, IHTMLOptionElement, IHTMLOptionsCollection, IHTMLParagraphElement, IHTMLParamElement, IHTMLPreElement, IHTMLProgressElement, IHTMLQuoteElement, IHTMLScriptElement, IHTMLSelectElement, IHTMLSlotElement, IHTMLSourceElement, IHTMLSpanElement, IHTMLStyleElement, IHTMLTableCaptionElement, IHTMLTableCellElement, IHTMLTableColElement, IHTMLTableElement, IHTMLTableRowElement, IHTMLTableSectionElement, IHTMLTemplateElement, IHTMLTextAreaElement, IHTMLTimeElement, IHTMLTitleElement, IHTMLTrackElement, IHTMLUListElement, IHTMLVideoElement, IHeaders, IImageBitmap, ILocation, IMediaError, IMediaKeys, IMediaList, IMediaStream, INamedNodeMap, INode, INodeList, IOffscreenCanvas, IRadioNodeList, IRange, IRequest, IResponse, ISelection, IShadowRoot, IStorage, IStyleSheet, IText, ITextTrack, ITextTrackCue, ITextTrackCueList, ITextTrackList, ITimeRanges, IValidityState, IVideoPlaybackQuality, IVideoTrack, IVideoTrackList, IXMLSerializer, IXPathEvaluator, IXPathExpression, IXPathResult } from '../base/interfaces/official';
import { ISuperDocument, ISuperElement, ISuperNode, ISuperNodeList, ISuperHTMLCollection, ISuperText, ISuperHTMLElement, ISuperStyleSheet } from '../base/interfaces/super';

export const { setState } = StateMachine<any, any>();

export function createAbstractRange<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IAbstractRange {
  const AbstractRange = require('./official-klasses/AbstractRange').default; // tslint:disable-line:variable-name
  const instance = new AbstractRange();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createAttr<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IAttr {
  const Attr = require('./official-klasses/Attr').default; // tslint:disable-line:variable-name
  const instance = new Attr();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createAudioTrack<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IAudioTrack {
  const AudioTrack = require('./official-klasses/AudioTrack').default; // tslint:disable-line:variable-name
  const instance = new AudioTrack();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createAudioTrackList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IAudioTrackList {
  const AudioTrackList = require('./official-klasses/AudioTrackList').default; // tslint:disable-line:variable-name
  const instance = new AudioTrackList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createBlob<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IBlob {
  const Blob = require('./official-klasses/Blob').default; // tslint:disable-line:variable-name
  const instance = new Blob();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createCSSRule<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ICSSRule {
  const CSSRule = require('./official-klasses/CSSRule').default; // tslint:disable-line:variable-name
  const instance = new CSSRule();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createCSSRuleList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ICSSRuleList {
  const CSSRuleList = require('./official-klasses/CSSRuleList').default; // tslint:disable-line:variable-name
  const instance = new CSSRuleList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createCSSStyleDeclaration<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ICSSStyleDeclaration {
  const CSSStyleDeclaration = require('./official-klasses/CSSStyleDeclaration').default; // tslint:disable-line:variable-name
  const instance = new CSSStyleDeclaration();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createCSSStyleSheet<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ICSSStyleSheet {
  const CSSStyleSheet = require('./official-klasses/CSSStyleSheet').default; // tslint:disable-line:variable-name
  const instance = new CSSStyleSheet();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createCaretPosition<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ICaretPosition {
  const CaretPosition = require('./official-klasses/CaretPosition').default; // tslint:disable-line:variable-name
  const instance = new CaretPosition();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createCharacterData<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ICharacterData {
  const CharacterData = require('./official-klasses/CharacterData').default; // tslint:disable-line:variable-name
  const instance = new CharacterData();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDOMImplementation<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDOMImplementation {
  const DOMImplementation = require('./official-klasses/DOMImplementation').default; // tslint:disable-line:variable-name
  const instance = new DOMImplementation();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDOMParser<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDOMParser {
  const DOMParser = require('./official-klasses/DOMParser').default; // tslint:disable-line:variable-name
  const instance = new DOMParser();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDOMRect<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDOMRect {
  const DOMRect = require('./official-klasses/DOMRect').default; // tslint:disable-line:variable-name
  const instance = new DOMRect();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDOMRectList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDOMRectList {
  const DOMRectList = require('./official-klasses/DOMRectList').default; // tslint:disable-line:variable-name
  const instance = new DOMRectList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDOMRectReadOnly<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDOMRectReadOnly {
  const DOMRectReadOnly = require('./official-klasses/DOMRectReadOnly').default; // tslint:disable-line:variable-name
  const instance = new DOMRectReadOnly();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDOMStringMap<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDOMStringMap {
  const DOMStringMap = require('./official-klasses/DOMStringMap').default; // tslint:disable-line:variable-name
  const instance = new DOMStringMap();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDOMTokenList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDOMTokenList {
  const DOMTokenList = require('./official-klasses/DOMTokenList').default; // tslint:disable-line:variable-name
  const instance = new DOMTokenList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDocument<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDocument {
  const Document = require('./official-klasses/Document').default; // tslint:disable-line:variable-name
  const instance = new Document();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDocumentFragment<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDocumentFragment {
  const DocumentFragment = require('./official-klasses/DocumentFragment').default; // tslint:disable-line:variable-name
  const instance = new DocumentFragment();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createDocumentType<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IDocumentType {
  const DocumentType = require('./official-klasses/DocumentType').default; // tslint:disable-line:variable-name
  const instance = new DocumentType();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IElement {
  const Element = require('./official-klasses/Element').default; // tslint:disable-line:variable-name
  const instance = new Element();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createFeaturePolicy<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IFeaturePolicy {
  const FeaturePolicy = require('./official-klasses/FeaturePolicy').default; // tslint:disable-line:variable-name
  const instance = new FeaturePolicy();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createFile<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IFile {
  const File = require('./official-klasses/File').default; // tslint:disable-line:variable-name
  const instance = new File();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createFileList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IFileList {
  const FileList = require('./official-klasses/FileList').default; // tslint:disable-line:variable-name
  const instance = new FileList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLAnchorElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLAnchorElement {
  const HTMLAnchorElement = require('./official-klasses/HTMLAnchorElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLAnchorElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLAreaElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLAreaElement {
  const HTMLAreaElement = require('./official-klasses/HTMLAreaElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLAreaElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLAudioElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLAudioElement {
  const HTMLAudioElement = require('./official-klasses/HTMLAudioElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLAudioElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLBRElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLBRElement {
  const HTMLBRElement = require('./official-klasses/HTMLBRElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLBRElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLBaseElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLBaseElement {
  const HTMLBaseElement = require('./official-klasses/HTMLBaseElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLBaseElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLBodyElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLBodyElement {
  const HTMLBodyElement = require('./official-klasses/HTMLBodyElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLBodyElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLButtonElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLButtonElement {
  const HTMLButtonElement = require('./official-klasses/HTMLButtonElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLButtonElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLCanvasElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLCanvasElement {
  const HTMLCanvasElement = require('./official-klasses/HTMLCanvasElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLCanvasElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLCollection<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLCollection {
  const HTMLCollection = require('./official-klasses/HTMLCollection').default; // tslint:disable-line:variable-name
  const instance = new HTMLCollection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLCollectionBase<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLCollectionBase {
  const HTMLCollectionBase = require('./official-klasses/HTMLCollectionBase').default; // tslint:disable-line:variable-name
  const instance = new HTMLCollectionBase();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLDListElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLDListElement {
  const HTMLDListElement = require('./official-klasses/HTMLDListElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLDListElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLDataElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLDataElement {
  const HTMLDataElement = require('./official-klasses/HTMLDataElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLDataElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLDataListElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLDataListElement {
  const HTMLDataListElement = require('./official-klasses/HTMLDataListElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLDataListElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLDetailsElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLDetailsElement {
  const HTMLDetailsElement = require('./official-klasses/HTMLDetailsElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLDetailsElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLDialogElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLDialogElement {
  const HTMLDialogElement = require('./official-klasses/HTMLDialogElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLDialogElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLDirectoryElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLDirectoryElement {
  const HTMLDirectoryElement = require('./official-klasses/HTMLDirectoryElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLDirectoryElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLDivElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLDivElement {
  const HTMLDivElement = require('./official-klasses/HTMLDivElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLDivElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLDocument<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLDocument {
  const HTMLDocument = require('./official-klasses/HTMLDocument').default; // tslint:disable-line:variable-name
  const instance = new HTMLDocument();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLElement {
  const HTMLElement = require('./official-klasses/HTMLElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLEmbedElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLEmbedElement {
  const HTMLEmbedElement = require('./official-klasses/HTMLEmbedElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLEmbedElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLFieldSetElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLFieldSetElement {
  const HTMLFieldSetElement = require('./official-klasses/HTMLFieldSetElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLFieldSetElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLFontElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLFontElement {
  const HTMLFontElement = require('./official-klasses/HTMLFontElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLFontElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLFormControlsCollection<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLFormControlsCollection {
  const HTMLFormControlsCollection = require('./official-klasses/HTMLFormControlsCollection').default; // tslint:disable-line:variable-name
  const instance = new HTMLFormControlsCollection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLFormElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLFormElement {
  const HTMLFormElement = require('./official-klasses/HTMLFormElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLFormElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLFrameElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLFrameElement {
  const HTMLFrameElement = require('./official-klasses/HTMLFrameElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLFrameElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLFrameSetElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLFrameSetElement {
  const HTMLFrameSetElement = require('./official-klasses/HTMLFrameSetElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLFrameSetElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLHRElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLHRElement {
  const HTMLHRElement = require('./official-klasses/HTMLHRElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLHRElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLHeadElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLHeadElement {
  const HTMLHeadElement = require('./official-klasses/HTMLHeadElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLHeadElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLHeadingElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLHeadingElement {
  const HTMLHeadingElement = require('./official-klasses/HTMLHeadingElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLHeadingElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLHtmlElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLHtmlElement {
  const HTMLHtmlElement = require('./official-klasses/HTMLHtmlElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLHtmlElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLIFrameElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLIFrameElement {
  const HTMLIFrameElement = require('./official-klasses/HTMLIFrameElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLIFrameElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLImageElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLImageElement {
  const HTMLImageElement = require('./official-klasses/HTMLImageElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLImageElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLInputElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLInputElement {
  const HTMLInputElement = require('./official-klasses/HTMLInputElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLInputElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLLIElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLLIElement {
  const HTMLLIElement = require('./official-klasses/HTMLLIElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLLIElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLLabelElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLLabelElement {
  const HTMLLabelElement = require('./official-klasses/HTMLLabelElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLLabelElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLLegendElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLLegendElement {
  const HTMLLegendElement = require('./official-klasses/HTMLLegendElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLLegendElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLLinkElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLLinkElement {
  const HTMLLinkElement = require('./official-klasses/HTMLLinkElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLLinkElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLMapElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLMapElement {
  const HTMLMapElement = require('./official-klasses/HTMLMapElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLMapElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLMediaElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLMediaElement {
  const HTMLMediaElement = require('./official-klasses/HTMLMediaElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLMediaElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLMetaElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLMetaElement {
  const HTMLMetaElement = require('./official-klasses/HTMLMetaElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLMetaElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLMeterElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLMeterElement {
  const HTMLMeterElement = require('./official-klasses/HTMLMeterElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLMeterElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLModElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLModElement {
  const HTMLModElement = require('./official-klasses/HTMLModElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLModElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLOListElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLOListElement {
  const HTMLOListElement = require('./official-klasses/HTMLOListElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLOListElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLObjectElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLObjectElement {
  const HTMLObjectElement = require('./official-klasses/HTMLObjectElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLObjectElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLOptGroupElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLOptGroupElement {
  const HTMLOptGroupElement = require('./official-klasses/HTMLOptGroupElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLOptGroupElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLOptionElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLOptionElement {
  const HTMLOptionElement = require('./official-klasses/HTMLOptionElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLOptionElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLOptionsCollection<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLOptionsCollection {
  const HTMLOptionsCollection = require('./official-klasses/HTMLOptionsCollection').default; // tslint:disable-line:variable-name
  const instance = new HTMLOptionsCollection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLParagraphElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLParagraphElement {
  const HTMLParagraphElement = require('./official-klasses/HTMLParagraphElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLParagraphElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLParamElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLParamElement {
  const HTMLParamElement = require('./official-klasses/HTMLParamElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLParamElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLPreElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLPreElement {
  const HTMLPreElement = require('./official-klasses/HTMLPreElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLPreElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLProgressElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLProgressElement {
  const HTMLProgressElement = require('./official-klasses/HTMLProgressElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLProgressElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLQuoteElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLQuoteElement {
  const HTMLQuoteElement = require('./official-klasses/HTMLQuoteElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLQuoteElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLScriptElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLScriptElement {
  const HTMLScriptElement = require('./official-klasses/HTMLScriptElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLScriptElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLSelectElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLSelectElement {
  const HTMLSelectElement = require('./official-klasses/HTMLSelectElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLSelectElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLSlotElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLSlotElement {
  const HTMLSlotElement = require('./official-klasses/HTMLSlotElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLSlotElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLSourceElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLSourceElement {
  const HTMLSourceElement = require('./official-klasses/HTMLSourceElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLSourceElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLSpanElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLSpanElement {
  const HTMLSpanElement = require('./official-klasses/HTMLSpanElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLSpanElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLStyleElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLStyleElement {
  const HTMLStyleElement = require('./official-klasses/HTMLStyleElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLStyleElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLTableCaptionElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLTableCaptionElement {
  const HTMLTableCaptionElement = require('./official-klasses/HTMLTableCaptionElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLTableCaptionElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLTableCellElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLTableCellElement {
  const HTMLTableCellElement = require('./official-klasses/HTMLTableCellElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLTableCellElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLTableColElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLTableColElement {
  const HTMLTableColElement = require('./official-klasses/HTMLTableColElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLTableColElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLTableElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLTableElement {
  const HTMLTableElement = require('./official-klasses/HTMLTableElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLTableElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLTableRowElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLTableRowElement {
  const HTMLTableRowElement = require('./official-klasses/HTMLTableRowElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLTableRowElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLTableSectionElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLTableSectionElement {
  const HTMLTableSectionElement = require('./official-klasses/HTMLTableSectionElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLTableSectionElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLTemplateElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLTemplateElement {
  const HTMLTemplateElement = require('./official-klasses/HTMLTemplateElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLTemplateElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLTextAreaElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLTextAreaElement {
  const HTMLTextAreaElement = require('./official-klasses/HTMLTextAreaElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLTextAreaElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLTimeElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLTimeElement {
  const HTMLTimeElement = require('./official-klasses/HTMLTimeElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLTimeElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLTitleElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLTitleElement {
  const HTMLTitleElement = require('./official-klasses/HTMLTitleElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLTitleElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLTrackElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLTrackElement {
  const HTMLTrackElement = require('./official-klasses/HTMLTrackElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLTrackElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLUListElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLUListElement {
  const HTMLUListElement = require('./official-klasses/HTMLUListElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLUListElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHTMLVideoElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLVideoElement {
  const HTMLVideoElement = require('./official-klasses/HTMLVideoElement').default; // tslint:disable-line:variable-name
  const instance = new HTMLVideoElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createHeaders<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHeaders {
  const Headers = require('./official-klasses/Headers').default; // tslint:disable-line:variable-name
  const instance = new Headers();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createImageBitmap<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IImageBitmap {
  const ImageBitmap = require('./official-klasses/ImageBitmap').default; // tslint:disable-line:variable-name
  const instance = new ImageBitmap();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createLocation<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ILocation {
  const Location = require('./official-klasses/Location').default; // tslint:disable-line:variable-name
  const instance = new Location();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createMediaError<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IMediaError {
  const MediaError = require('./official-klasses/MediaError').default; // tslint:disable-line:variable-name
  const instance = new MediaError();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createMediaKeys<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IMediaKeys {
  const MediaKeys = require('./official-klasses/MediaKeys').default; // tslint:disable-line:variable-name
  const instance = new MediaKeys();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createMediaList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IMediaList {
  const MediaList = require('./official-klasses/MediaList').default; // tslint:disable-line:variable-name
  const instance = new MediaList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createMediaStream<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IMediaStream {
  const MediaStream = require('./official-klasses/MediaStream').default; // tslint:disable-line:variable-name
  const instance = new MediaStream();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createNamedNodeMap<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): INamedNodeMap {
  const NamedNodeMap = require('./official-klasses/NamedNodeMap').default; // tslint:disable-line:variable-name
  const instance = new NamedNodeMap();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createNode<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): INode {
  const Node = require('./official-klasses/Node').default; // tslint:disable-line:variable-name
  const instance = new Node();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createNodeList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): INodeList {
  const NodeList = require('./official-klasses/NodeList').default; // tslint:disable-line:variable-name
  const instance = new NodeList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createOffscreenCanvas<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IOffscreenCanvas {
  const OffscreenCanvas = require('./official-klasses/OffscreenCanvas').default; // tslint:disable-line:variable-name
  const instance = new OffscreenCanvas();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createRadioNodeList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IRadioNodeList {
  const RadioNodeList = require('./official-klasses/RadioNodeList').default; // tslint:disable-line:variable-name
  const instance = new RadioNodeList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createRange<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IRange {
  const Range = require('./official-klasses/Range').default; // tslint:disable-line:variable-name
  const instance = new Range();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createRequest<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IRequest {
  const Request = require('./official-klasses/Request').default; // tslint:disable-line:variable-name
  const instance = new Request();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createResponse<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IResponse {
  const Response = require('./official-klasses/Response').default; // tslint:disable-line:variable-name
  const instance = new Response();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSelection<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISelection {
  const Selection = require('./official-klasses/Selection').default; // tslint:disable-line:variable-name
  const instance = new Selection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createShadowRoot<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IShadowRoot {
  const ShadowRoot = require('./official-klasses/ShadowRoot').default; // tslint:disable-line:variable-name
  const instance = new ShadowRoot();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createStorage<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IStorage {
  const Storage = require('./official-klasses/Storage').default; // tslint:disable-line:variable-name
  const instance = new Storage();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createStyleSheet<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IStyleSheet {
  const StyleSheet = require('./official-klasses/StyleSheet').default; // tslint:disable-line:variable-name
  const instance = new StyleSheet();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createText<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IText {
  const Text = require('./official-klasses/Text').default; // tslint:disable-line:variable-name
  const instance = new Text();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createTextTrack<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ITextTrack {
  const TextTrack = require('./official-klasses/TextTrack').default; // tslint:disable-line:variable-name
  const instance = new TextTrack();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createTextTrackCue<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ITextTrackCue {
  const TextTrackCue = require('./official-klasses/TextTrackCue').default; // tslint:disable-line:variable-name
  const instance = new TextTrackCue();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createTextTrackCueList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ITextTrackCueList {
  const TextTrackCueList = require('./official-klasses/TextTrackCueList').default; // tslint:disable-line:variable-name
  const instance = new TextTrackCueList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createTextTrackList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ITextTrackList {
  const TextTrackList = require('./official-klasses/TextTrackList').default; // tslint:disable-line:variable-name
  const instance = new TextTrackList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createTimeRanges<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ITimeRanges {
  const TimeRanges = require('./official-klasses/TimeRanges').default; // tslint:disable-line:variable-name
  const instance = new TimeRanges();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createValidityState<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IValidityState {
  const ValidityState = require('./official-klasses/ValidityState').default; // tslint:disable-line:variable-name
  const instance = new ValidityState();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createVideoPlaybackQuality<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IVideoPlaybackQuality {
  const VideoPlaybackQuality = require('./official-klasses/VideoPlaybackQuality').default; // tslint:disable-line:variable-name
  const instance = new VideoPlaybackQuality();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createVideoTrack<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IVideoTrack {
  const VideoTrack = require('./official-klasses/VideoTrack').default; // tslint:disable-line:variable-name
  const instance = new VideoTrack();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createVideoTrackList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IVideoTrackList {
  const VideoTrackList = require('./official-klasses/VideoTrackList').default; // tslint:disable-line:variable-name
  const instance = new VideoTrackList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createXMLSerializer<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IXMLSerializer {
  const XMLSerializer = require('./official-klasses/XMLSerializer').default; // tslint:disable-line:variable-name
  const instance = new XMLSerializer();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createXPathEvaluator<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IXPathEvaluator {
  const XPathEvaluator = require('./official-klasses/XPathEvaluator').default; // tslint:disable-line:variable-name
  const instance = new XPathEvaluator();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createXPathExpression<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IXPathExpression {
  const XPathExpression = require('./official-klasses/XPathExpression').default; // tslint:disable-line:variable-name
  const instance = new XPathExpression();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createXPathResult<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IXPathResult {
  const XPathResult = require('./official-klasses/XPathResult').default; // tslint:disable-line:variable-name
  const instance = new XPathResult();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperDocument<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperDocument {
  const SuperDocument = require('./super-klasses/SuperDocument').default; // tslint:disable-line:variable-name
  const instance = new SuperDocument();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperElement {
  const SuperElement = require('./super-klasses/SuperElement').default; // tslint:disable-line:variable-name
  const instance = new SuperElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperNode<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperNode {
  const SuperNode = require('./super-klasses/SuperNode').default; // tslint:disable-line:variable-name
  const instance = new SuperNode();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperNodeList<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperNodeList {
  const SuperNodeList = require('./super-klasses/SuperNodeList').default; // tslint:disable-line:variable-name
  const instance = new SuperNodeList();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperHTMLCollection<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperHTMLCollection {
  const SuperHTMLCollection = require('./super-klasses/SuperHTMLCollection').default; // tslint:disable-line:variable-name
  const instance = new SuperHTMLCollection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperText<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperText {
  const SuperText = require('./super-klasses/SuperText').default; // tslint:disable-line:variable-name
  const instance = new SuperText();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperHTMLElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperHTMLElement {
  const SuperHTMLElement = require('./super-klasses/SuperHTMLElement').default; // tslint:disable-line:variable-name
  const instance = new SuperHTMLElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}

export function createSuperStyleSheet<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperStyleSheet {
  const SuperStyleSheet = require('./super-klasses/SuperStyleSheet').default; // tslint:disable-line:variable-name
  const instance = new SuperStyleSheet();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
