// tslint:disable: prettier
/// <reference no-default-lib="true"/>
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// TYPES //////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ICanPlayTypeResult = '' | 'maybe' | 'probably';

export type IDocumentReadyState = 'complete' | 'interactive' | 'loading';

export type IEndingType = 'native' | 'transparent';

export type ISelectionMode = 'end' | 'preserve' | 'select' | 'start';

export type IShadowRootMode = 'closed' | 'open';

export type ISupportedType = 'application/xhtml+xml' | 'application/xml' | 'image/svg+xml' | 'text/html' | 'text/xml';

export type ITextTrackKind = 'captions' | 'chapters' | 'descriptions' | 'metadata' | 'subtitles';

export type ITextTrackMode = 'disabled' | 'hidden' | 'showing';

export type IVisibilityState = 'hidden' | 'prerender' | 'visible';

export type IEventListenerOrEventListenerObject = IEventListener | IEventListenerObject;

export type IUnsupportedFeature = void;

export type ICanvasRenderingContext2D = IUnsupportedFeature;

export type IWebGLRenderingContext = IUnsupportedFeature;

export type IWindowProxy = IUnsupportedFeature;

export type IBufferSource = ArrayBufferView | ArrayBuffer;

export type IBlobPart = IBufferSource | IBlob | string;

export type IRenderingContext = ICanvasRenderingContext2D | IWebGLRenderingContext;

export interface IAddEventListenerOptions extends IEventListenerOptions {
  once?: boolean;
  passive?: boolean;
}

export interface IAssignedNodesOptions {
  flatten?: boolean;
}

export interface IBlobPropertyBag {
  endings?: IEndingType;
  type?: string;
}

export interface IDOMRectInit {
  height?: number;
  width?: number;
  x?: number;
  y?: number;
}

export interface IEventInit {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
}

export interface IEventListenerOptions {
  capture?: boolean;
}

export interface IFilePropertyBag extends IBlobPropertyBag {
  lastModified?: number;
}

export interface IGetRootNodeOptions {
  composed?: boolean;
}

export interface IShadowRootInit {
  mode: IShadowRootMode;
}

export interface IStaticRangeInit {
  endContainer: INode;
  endOffset: number;
  startContainer: INode;
  startOffset: number;
}

export type IBlobCallback = (blob: IBlob | null) => void;

export type IEventListener = (evt: IEvent) => void;

export type INodeFilter = ((node: INode) => number) | { acceptNode(node: INode): number; };

// BASIC INTERFACES ///////////////////////////////////////////////////////////////////////////////////////////////

export interface IAbstractRange {
  readonly collapsed: boolean;
  readonly endContainer: INode;
  readonly endOffset: number;
  readonly startContainer: INode;
  readonly startOffset: number;
}

export interface IAttr extends INode {
  readonly localName: string;
  readonly name: string;
  readonly namespaceURI: string | null;
  readonly ownerElement: IElement | null;
  readonly prefix: string | null;
  readonly specified: boolean;
  value: string;
}

export interface IAudioTrack {
  enabled: boolean;
  readonly id: string;
  readonly kind: string;
  readonly label: string;
  readonly language: string;
}

export interface IAudioTrackListEventMap {
  addtrack: IEvent;
  change: IEvent;
  removetrack: IEvent;
}

export interface IAudioTrackList extends IEventTarget {
  readonly length: number;
  onaddtrack: ((this: IAudioTrackList, ev: IEvent) => any) | null;
  onchange: ((this: IAudioTrackList, ev: IEvent) => any) | null;
  onremovetrack: ((this: IAudioTrackList, ev: IEvent) => any) | null;
  getTrackById(id: string): IAudioTrack | null;
  addEventListener<K extends keyof IAudioTrackListEventMap>(type: K, listener: (this: IAudioTrackList, ev: IAudioTrackListEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IAudioTrackListEventMap>(type: K, listener: (this: IAudioTrackList, ev: IAudioTrackListEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
  [index: number]: IAudioTrack;
}

export interface IBlob {
  readonly size: number;
  readonly type: string;
  slice(start?: number, end?: number, contentType?: string): IBlob;
}

export interface ICDATASection extends IText {
}

export interface ICSSRule {
  readonly CHARSET_RULE: number;
  readonly FONT_FACE_RULE: number;
  readonly IMPORT_RULE: number;
  readonly MARGIN_RULE: number;
  readonly MEDIA_RULE: number;
  readonly NAMESPACE_RULE: number;
  readonly PAGE_RULE: number;
  readonly STYLE_RULE: number;
  cssText: string;
  readonly parentRule: ICSSRule | null;
  readonly parentStyleSheet: ICSSStyleSheet | null;
  readonly type: number;
}

export interface ICSSRuleList {
  readonly length: number;
  item(index: number): ICSSRule | null;
  [index: number]: ICSSRule;
}

export interface ICSSStyleDeclaration {
  cssFloat: string;
  cssText: string;
  readonly length: number;
  readonly parentRule: ICSSRule | null;
  getPropertyPriority(property: string): string;
  getPropertyValue(property: string): string;
  item(index: number): string;
  removeProperty(property: string): string;
  setProperty(property: string, value: string, priority?: string): void;
  [index: number]: string;
}

export interface ICSSStyleSheet extends IStyleSheet {
  readonly cssRules: ICSSRuleList;
  readonly ownerRule: ICSSRule | null;
  deleteRule(index: number): void;
  insertRule(rule: string, index?: number): number;
}

export interface ICharacterData extends INode, IChildNode, INonDocumentTypeChildNode {
  data: string;
  readonly length: number;
  appendData(data: string): void;
  deleteData(offset: number, count: number): void;
  insertData(offset: number, data: string): void;
  replaceData(offset: number, count: number, data: string): void;
  substringData(offset: number, count: number): string;
}

export interface IChildNode {
  after(...nodes: (INode | string)[]): void;
  before(...nodes: (INode | string)[]): void;
  remove(): void;
  replaceWith(...nodes: (INode | string)[]): void;
}

export interface IComment extends ICharacterData {
}

export interface IDOMException {
  readonly ABORT_ERR: number;
  readonly DATA_CLONE_ERR: number;
  readonly DOMSTRING_SIZE_ERR: number;
  readonly HIERARCHY_REQUEST_ERR: number;
  readonly INDEX_SIZE_ERR: number;
  readonly INUSE_ATTRIBUTE_ERR: number;
  readonly INVALID_ACCESS_ERR: number;
  readonly INVALID_CHARACTER_ERR: number;
  readonly INVALID_MODIFICATION_ERR: number;
  readonly INVALID_NODE_TYPE_ERR: number;
  readonly INVALID_STATE_ERR: number;
  readonly NAMESPACE_ERR: number;
  readonly NETWORK_ERR: number;
  readonly NOT_FOUND_ERR: number;
  readonly NOT_SUPPORTED_ERR: number;
  readonly NO_DATA_ALLOWED_ERR: number;
  readonly NO_MODIFICATION_ALLOWED_ERR: number;
  readonly QUOTA_EXCEEDED_ERR: number;
  readonly SECURITY_ERR: number;
  readonly SYNTAX_ERR: number;
  readonly TIMEOUT_ERR: number;
  readonly TYPE_MISMATCH_ERR: number;
  readonly URL_MISMATCH_ERR: number;
  readonly VALIDATION_ERR: number;
  readonly WRONG_DOCUMENT_ERR: number;
  readonly code: number;
  readonly message: string;
  readonly name: string;
}

export interface IDOMImplementation {
  createDocument(namespace: string | null, qualifiedName: string, doctype?: IDocumentType | null): IXMLDocument;
  createDocumentType(qualifiedName: string, publicId: string, systemId: string): IDocumentType;
  createHTMLDocument(title?: string): IDocument;
  hasFeature(): boolean;
}

export interface IDOMParser {
  parseFromString(str: string, type: ISupportedType): IDocument;
}

export interface IDOMRect extends IDOMRectReadOnly {
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface IDOMRectList {
  readonly length: number;
  item(index: number): IDOMRect | null;
  [index: number]: IDOMRect;
}

export interface IDOMRectReadOnly {
  readonly bottom: number;
  readonly height: number;
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly width: number;
  readonly x: number;
  readonly y: number;
  toJSON(): any;
}

export interface IDOMStringMap {
  [name: string]: string;
}

export interface IDOMTokenList {
  readonly length: number;
  value: string;
  add(...tokens: string[]): void;
  contains(token: string): boolean;
  item(index: number): string | null;
  remove(...tokens: string[]): void;
  replace(token: string, newToken: string): boolean;
  supports(token: string): boolean;
  toggle(token: string, force?: boolean): boolean;
  toString(): string;
  forEach(callbackfn: (value: string, key: number, parent: IDOMTokenList) => void, thisArg?: any): void;
  [index: number]: string;
}

export interface IDocumentEventMap extends IGlobalEventHandlersEventMap {
  readystatechange: IEvent;
  visibilitychange: IEvent;
}

export interface IDocument extends INode, IDocumentOrShadowRoot, IGlobalEventHandlers, INonElementParentNode, IParentNode {
  readonly URL: string;
  readonly anchors: IHTMLCollection;
  readonly applets: IHTMLCollection;
  body: IHTMLElement | null;
  readonly characterSet: string;
  readonly charset: string;
  readonly compatMode: string;
  readonly contentType: string;
  cookie: string;
  readonly currentScript: IHTMLScriptElement | null;
  readonly defaultView: IWindowProxy | null;
  dir: string;
  readonly doctype: IDocumentType | null;
  readonly documentElement: IElement | null;
  readonly documentURI: string;
  readonly embeds: IHTMLCollection;
  readonly forms: IHTMLCollection;
  readonly head: IHTMLHeadElement | null;
  readonly hidden: boolean;
  readonly images: IHTMLCollection;
  readonly implementation: IDOMImplementation;
  readonly inputEncoding: string;
  readonly lastModified: string;
  readonly links: IHTMLCollection;
  readonly location: ILocation | null;
  onreadystatechange: ((this: IDocument, ev: IEvent) => any) | null;
  onvisibilitychange: ((this: IDocument, ev: IEvent) => any) | null;
  readonly plugins: IHTMLCollection;
  readonly readyState: IDocumentReadyState;
  readonly referrer: string;
  readonly scripts: IHTMLCollection;
  title: string;
  readonly visibilityState: IVisibilityState;
  adoptNode(node: INode): INode;
  captureEvents(): void;
  clear(): void;
  close(): void;
  createAttribute(localName: string): IAttr;
  createAttributeNS(namespace: string | null, qualifiedName: string): IAttr;
  createCDATASection(data: string): ICDATASection;
  createComment(data: string): IComment;
  createDocumentFragment(): IDocumentFragment;
  createElementNS(namespace: string | null, qualifiedName: string): IElement;
  createEvent(eventInterface: string): IEvent;
  createNodeIterator(root: INode, whatToShow?: number, filter?: INodeFilter | null): INodeIterator;
  createProcessingInstruction(target: string, data: string): IProcessingInstruction;
  createRange(): IRange;
  createTextNode(data: string): IText;
  createTreeWalker(root: INode, whatToShow?: number, filter?: INodeFilter | null): ITreeWalker;
  getElementsByClassName(classNames: string): IHTMLCollection;
  getElementsByName(elementName: string): INodeList;
  getElementsByTagName<K extends keyof IHTMLElementTagNameMap>(qualifiedName: K): IHTMLCollection<IHTMLElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof ISVGElementTagNameMap>(qualifiedName: K): IHTMLCollection<ISVGElementTagNameMap[K]>;
  getElementsByTagName(qualifiedName: string): IHTMLCollection<IElement>;
  getElementsByTagNameNS(namespace: string | null, localName: string): IHTMLCollection;
  getSelection(): ISelection | null;
  hasFocus(): boolean;
  importNode(node: INode, deep?: boolean): INode;
  open(type?: string, replace?: string): IDocument;
  releaseEvents(): void;
  write(...text: string[]): void;
  writeln(...text: string[]): void;
  addEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IDocumentFragment extends INode, INonElementParentNode, IParentNode {
}

export interface IDocumentOrShadowRoot {
  readonly activeElement: IElement | null;
}

export interface IDocumentType extends INode, IChildNode {
  readonly name: string;
  readonly publicId: string;
  readonly systemId: string;
}

export interface IElement extends INode, IChildNode, INonDocumentTypeChildNode, IParentNode, ISlotable {
  readonly attributes: INamedNodeMap;
  readonly classList: IDOMTokenList;
  className: string;
  readonly clientHeight: number;
  readonly clientLeft: number;
  readonly clientTop: number;
  readonly clientWidth: number;
  id: string;
  innerHTML: string;
  readonly localName: string;
  readonly namespaceURI: string | null;
  outerHTML: string;
  readonly prefix: string | null;
  readonly scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  readonly scrollWidth: number;
  readonly shadowRoot: IShadowRoot | null;
  slot: string;
  readonly tagName: string;
  attachShadow(init: IShadowRootInit): IShadowRoot;
  closest(selectors: string): IElement | null;
  getAttribute(qualifiedName: string): string | null;
  getAttributeNS(namespace: string | null, localName: string): string | null;
  getAttributeNames(): Iterable<string>;
  getAttributeNode(qualifiedName: string): IAttr | null;
  getAttributeNodeNS(namespace: string | null, localName: string): IAttr | null;
  getBoundingClientRect(): IDOMRect;
  getClientRects(): IDOMRectList;
  getElementsByClassName(classNames: string): IHTMLCollection;
  getElementsByTagName<K extends keyof IHTMLElementTagNameMap>(qualifiedName: K): IHTMLCollection<IHTMLElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof ISVGElementTagNameMap>(qualifiedName: K): IHTMLCollection<ISVGElementTagNameMap[K]>;
  getElementsByTagName(qualifiedName: string): IHTMLCollection<IElement>;
  getElementsByTagNameNS(namespace: string | null, localName: string): IHTMLCollection;
  hasAttribute(qualifiedName: string): boolean;
  hasAttributeNS(namespace: string | null, localName: string): boolean;
  hasAttributes(): boolean;
  insertAdjacentElement(where: string, element: IElement): IElement | null;
  insertAdjacentHTML(position: string, text: string): void;
  insertAdjacentText(where: string, data: string): void;
  matches(selectors: string): boolean;
  removeAttribute(qualifiedName: string): void;
  removeAttributeNS(namespace: string | null, localName: string): void;
  removeAttributeNode(attr: IAttr): IAttr;
  setAttribute(qualifiedName: string, value: string): void;
  setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
  setAttributeNode(attr: IAttr): IAttr | null;
  setAttributeNodeNS(attr: IAttr): IAttr | null;
  toggleAttribute(qualifiedName: string, force?: boolean): boolean;
  webkitMatchesSelector(selectors: string): boolean;
}

export interface IElementCSSInlineStyle {
  readonly style: ICSSStyleDeclaration;
}

export interface IElementContentEditable {
}

export interface IEvent {
  readonly AT_TARGET: number;
  readonly BUBBLING_PHASE: number;
  readonly CAPTURING_PHASE: number;
  readonly NONE: number;
  readonly bubbles: boolean;
  cancelBubble: boolean;
  readonly cancelable: boolean;
  readonly composed: boolean;
  readonly currentTarget: IEventTarget | null;
  readonly defaultPrevented: boolean;
  readonly eventPhase: number;
  readonly isTrusted: boolean;
  returnValue: boolean;
  readonly srcElement: IEventTarget | null;
  readonly target: IEventTarget | null;
  readonly timeStamp: number;
  readonly type: string;
  composedPath(): Iterable<IEventTarget>;
  initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
}

export interface IEventListenerObject {
  handleEvent(evt: IEvent): void;
}

export interface IEventTarget {
  dispatchEvent(event: IEvent): boolean;
}

export interface IFile extends IBlob {
  readonly lastModified: number;
  readonly name: string;
}

export interface IFileList {
  readonly length: number;
  item(index: number): IFile | null;
  [index: number]: IFile;
}

export interface IGlobalEventHandlersEventMap {
  abort: IEvent;
  auxclick: IEvent;
  blur: IEvent;
  cancel: IEvent;
  canplay: IEvent;
  canplaythrough: IEvent;
  change: IEvent;
  click: IEvent;
  close: IEvent;
  contextmenu: IEvent;
  cuechange: IEvent;
  dblclick: IEvent;
  drag: IEvent;
  dragend: IEvent;
  dragenter: IEvent;
  dragexit: IEvent;
  dragleave: IEvent;
  dragover: IEvent;
  dragstart: IEvent;
  drop: IEvent;
  durationchange: IEvent;
  emptied: IEvent;
  ended: IEvent;
  error: IEvent;
  focus: IEvent;
  input: IEvent;
  invalid: IEvent;
  keydown: IEvent;
  keypress: IEvent;
  keyup: IEvent;
  load: IEvent;
  loadeddata: IEvent;
  loadedmetadata: IEvent;
  loadend: IEvent;
  loadstart: IEvent;
  mousedown: IEvent;
  mouseenter: IEvent;
  mouseleave: IEvent;
  mousemove: IEvent;
  mouseout: IEvent;
  mouseover: IEvent;
  mouseup: IEvent;
  pause: IEvent;
  play: IEvent;
  playing: IEvent;
  progress: IEvent;
  ratechange: IEvent;
  reset: IEvent;
  resize: IEvent;
  scroll: IEvent;
  securitypolicyviolation: IEvent;
  seeked: IEvent;
  seeking: IEvent;
  select: IEvent;
  stalled: IEvent;
  submit: IEvent;
  suspend: IEvent;
  timeupdate: IEvent;
  toggle: IEvent;
  volumechange: IEvent;
  waiting: IEvent;
  wheel: IEvent;
}

export interface IGlobalEventHandlers {
  onabort: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onauxclick: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onblur: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oncancel: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oncanplay: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oncanplaythrough: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onchange: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onclick: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onclose: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oncontextmenu: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oncuechange: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondblclick: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondrag: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondragend: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondragenter: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondragexit: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondragleave: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondragover: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondragstart: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondrop: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondurationchange: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onemptied: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onended: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onerror: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onfocus: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oninput: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oninvalid: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onkeydown: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onkeypress: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onkeyup: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onload: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onloadeddata: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onloadedmetadata: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onloadend: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onloadstart: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmousedown: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmouseenter: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmouseleave: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmousemove: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmouseout: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmouseover: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmouseup: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onpause: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onplay: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onplaying: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onprogress: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onratechange: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onreset: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onresize: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onscroll: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onsecuritypolicyviolation: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onseeked: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onseeking: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onselect: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onstalled: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onsubmit: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onsuspend: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ontimeupdate: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ontoggle: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onvolumechange: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onwaiting: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onwheel: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IGlobalEventHandlers, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IGlobalEventHandlers, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLCollectionBase {
  readonly length: number;
  item(index: number): IElement | null;
  [index: number]: IElement;
}

export interface IHTMLCollection<T extends IElement = IElement> extends IHTMLCollectionBase {
  namedItem(name: string): T | null;
}

export interface IHTMLFormControlsCollection extends IHTMLCollectionBase {
  namedItem(name: string): IRadioNodeList | IElement | null;
}

export interface IHTMLHyperlinkElementUtils {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  readonly origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  username: string;
  toString(): string;
}

export interface IHTMLMediaElement extends IHTMLElement {
  readonly HAVE_CURRENT_DATA: number;
  readonly HAVE_ENOUGH_DATA: number;
  readonly HAVE_FUTURE_DATA: number;
  readonly HAVE_METADATA: number;
  readonly HAVE_NOTHING: number;
  readonly NETWORK_EMPTY: number;
  readonly NETWORK_IDLE: number;
  readonly NETWORK_LOADING: number;
  readonly NETWORK_NO_SOURCE: number;
  readonly audioTracks: IAudioTrackList;
  autoplay: boolean;
  readonly buffered: ITimeRanges;
  controls: boolean;
  crossOrigin: string | null;
  readonly currentSrc: string;
  currentTime: number;
  defaultMuted: boolean;
  defaultPlaybackRate: number;
  readonly duration: number;
  readonly ended: boolean;
  loop: boolean;
  muted: boolean;
  readonly networkState: number;
  readonly paused: boolean;
  playbackRate: number;
  readonly played: ITimeRanges;
  preload: string;
  readonly readyState: number;
  readonly seekable: ITimeRanges;
  readonly seeking: boolean;
  src: string;
  readonly textTracks: ITextTrackList;
  readonly videoTracks: IVideoTrackList;
  volume: number;
  addTextTrack(kind: ITextTrackKind, label?: string, language?: string): ITextTrack;
  canPlayType(type: string): ICanPlayTypeResult;
  load(): void;
  pause(): void;
  play(): Promise<void>;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMediaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMediaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLOptionsCollection extends IHTMLCollection {
  length: number;
  selectedIndex: number;
  add(element: IHTMLOptionElement | IHTMLOptGroupElement, before?: IHTMLElement | number | null): void;
  remove(index: number): void;
}

export interface IHTMLOrSVGElement {
  readonly dataset: IDOMStringMap;
  nonce: string;
  tabIndex: number;
  blur(): void;
  focus(): void;
}

export interface ILinkStyle {
  readonly sheet: IStyleSheet | null;
}

export interface ILocation {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  readonly origin: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  assign(url: string): void;
  reload(): void;
  replace(url: string): void;
  toString(): string;
}

export interface IMediaList {
  readonly length: number;
  mediaText: string;
  appendMedium(medium: string): void;
  deleteMedium(medium: string): void;
  item(index: number): string | null;
  toString(): string;
  [index: number]: string;
}

export interface INamedNodeMap {
  readonly length: number;
  getNamedItem(qualifiedName: string): IAttr | null;
  getNamedItemNS(namespace: string | null, localName: string): IAttr | null;
  item(index: number): IAttr | null;
  removeNamedItem(qualifiedName: string): IAttr;
  removeNamedItemNS(namespace: string | null, localName: string): IAttr;
  setNamedItem(attr: IAttr): IAttr | null;
  setNamedItemNS(attr: IAttr): IAttr | null;
  [index: number]: IAttr;
}

export interface INode extends IEventTarget {
  readonly ATTRIBUTE_NODE: number;
  readonly CDATA_SECTION_NODE: number;
  readonly COMMENT_NODE: number;
  readonly DOCUMENT_FRAGMENT_NODE: number;
  readonly DOCUMENT_NODE: number;
  readonly DOCUMENT_POSITION_CONTAINED_BY: number;
  readonly DOCUMENT_POSITION_CONTAINS: number;
  readonly DOCUMENT_POSITION_DISCONNECTED: number;
  readonly DOCUMENT_POSITION_FOLLOWING: number;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
  readonly DOCUMENT_POSITION_PRECEDING: number;
  readonly DOCUMENT_TYPE_NODE: number;
  readonly ELEMENT_NODE: number;
  readonly ENTITY_NODE: number;
  readonly ENTITY_REFERENCE_NODE: number;
  readonly NOTATION_NODE: number;
  readonly PROCESSING_INSTRUCTION_NODE: number;
  readonly TEXT_NODE: number;
  readonly baseURI: string;
  readonly childNodes: INodeList;
  readonly firstChild: INode | null;
  readonly isConnected: boolean;
  readonly lastChild: INode | null;
  readonly nextSibling: INode | null;
  readonly nodeName: string;
  readonly nodeType: number;
  nodeValue: string | null;
  readonly ownerDocument: IDocument | null;
  readonly parentElement: IElement | null;
  readonly parentNode: INode | null;
  readonly previousSibling: INode | null;
  textContent: string | null;
  appendChild(node: INode): INode;
  cloneNode(deep?: boolean): INode;
  compareDocumentPosition(other: INode): number;
  contains(other: INode | null): boolean;
  getRootNode(options?: IGetRootNodeOptions): INode;
  hasChildNodes(): boolean;
  insertBefore(node: INode, child: INode | null): INode;
  isDefaultNamespace(namespace: string | null): boolean;
  isEqualNode(otherNode: INode | null): boolean;
  isSameNode(otherNode: INode | null): boolean;
  lookupNamespaceURI(prefix: string | null): string | null;
  lookupPrefix(namespace: string | null): string | null;
  normalize(): void;
  removeChild(child: INode): INode;
  replaceChild(node: INode, child: INode): INode;
}

export interface INodeIterator {
  readonly filter: INodeFilter | null;
  readonly pointerBeforeReferenceNode: boolean;
  readonly referenceNode: INode;
  readonly root: INode;
  readonly whatToShow: number;
  detach(): void;
  nextNode(): INode | null;
  previousNode(): INode | null;
}

export interface INodeList<T extends INode = INode> {
  readonly length: number;
  item(index: number): T | null;
  forEach(callbackfn: (value: INode, key: number, parent: INodeList<T>) => void, thisArg?: any): void;
  [index: number]: T;
}

export interface INonDocumentTypeChildNode {
  readonly nextElementSibling: IElement | null;
  readonly previousElementSibling: IElement | null;
}

export interface INonElementParentNode {
  getElementById(elementId: string): IElement | null;
}

export interface IParentNode {
  readonly childElementCount: number;
  readonly children: IHTMLCollection;
  readonly firstElementChild: IElement | null;
  readonly lastElementChild: IElement | null;
  append(...nodes: (INode | string)[]): void;
  prepend(...nodes: (INode | string)[]): void;
  querySelector<K extends keyof IHTMLElementTagNameMap>(selectors: K): IHTMLElementTagNameMap[K] | null;
  querySelector<K extends keyof ISVGElementTagNameMap>(selectors: K): ISVGElementTagNameMap[K] | null;
  querySelector<E extends IElement = IElement>(selectors: string): E | null;
  querySelectorAll<K extends keyof IHTMLElementTagNameMap>(selectors: K): INodeList<IHTMLElementTagNameMap[K]>;
  querySelectorAll<K extends keyof ISVGElementTagNameMap>(selectors: K): INodeList<ISVGElementTagNameMap[K]>;
  querySelectorAll<E extends IElement = IElement>(selectors: string): INodeList<E>;
}

export interface IProcessingInstruction extends ICharacterData {
  readonly target: string;
}

export interface IRadioNodeList extends INodeList {
  value: string;
}

export interface IRange extends IAbstractRange {
  readonly END_TO_END: number;
  readonly END_TO_START: number;
  readonly START_TO_END: number;
  readonly START_TO_START: number;
  readonly commonAncestorContainer: INode;
  cloneContents(): IDocumentFragment;
  cloneRange(): IRange;
  collapse(toStart?: boolean): void;
  compareBoundaryPoints(how: number, sourceRange: IRange): number;
  comparePoint(node: INode, offset: number): number;
  createContextualFragment(fragment: string): IDocumentFragment;
  deleteContents(): void;
  detach(): void;
  extractContents(): IDocumentFragment;
  insertNode(node: INode): void;
  intersectsNode(node: INode): boolean;
  isPointInRange(node: INode, offset: number): boolean;
  selectNode(node: INode): void;
  selectNodeContents(node: INode): void;
  setEnd(node: INode, offset: number): void;
  setEndAfter(node: INode): void;
  setEndBefore(node: INode): void;
  setStart(node: INode, offset: number): void;
  setStartAfter(node: INode): void;
  setStartBefore(node: INode): void;
  surroundContents(newParent: INode): void;
  toString(): string;
}

export interface ISVGAnimatedString {
  readonly animVal: string;
  baseVal: string;
}

export interface ISVGElement extends IElement, IElementCSSInlineStyle, IGlobalEventHandlers, IHTMLOrSVGElement {
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface ISVGGraphicsElement extends ISVGElement, ISVGTests {
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGGraphicsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGGraphicsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface ISVGNumber {
  value: number;
}

export interface ISVGStringList {
  readonly length: number;
  readonly numberOfItems: number;
  appendItem(newItem: string): string;
  clear(): void;
  getItem(index: number): string;
  initialize(newItem: string): string;
  insertItemBefore(newItem: string, index: number): string;
  removeItem(index: number): string;
  replaceItem(newItem: string, index: number): string;
  [index: number]: string;
}

export interface ISVGTests {
  readonly requiredExtensions: ISVGStringList;
  readonly systemLanguage: ISVGStringList;
}

export interface ISelection {
  readonly anchorNode: INode | null;
  readonly anchorOffset: number;
  readonly focusNode: INode | null;
  readonly focusOffset: number;
  readonly isCollapsed: boolean;
  readonly rangeCount: number;
  readonly type: string;
  addRange(range: IRange): void;
  collapse(node: INode | null, offset?: number): void;
  collapseToEnd(): void;
  collapseToStart(): void;
  containsNode(node: INode, allowPartialContainment?: boolean): boolean;
  deleteFromDocument(): void;
  empty(): void;
  extend(node: INode, offset?: number): void;
  getRangeAt(index: number): IRange;
  removeAllRanges(): void;
  removeRange(range: IRange): void;
  selectAllChildren(node: INode): void;
  setBaseAndExtent(anchorNode: INode, anchorOffset: number, focusNode: INode, focusOffset: number): void;
  setPosition(node: INode | null, offset?: number): void;
  toString(): string;
}

export interface IShadowRoot extends IDocumentFragment, IDocumentOrShadowRoot {
  readonly host: IElement;
  innerHTML: string;
  readonly mode: IShadowRootMode;
}

export interface ISlotable {
  readonly assignedSlot: IHTMLSlotElement | null;
}

export interface IStaticRange extends IAbstractRange {
}

export interface IStyleSheet {
  disabled: boolean;
  readonly href: string | null;
  readonly media: IMediaList;
  readonly ownerNode: IElement | IProcessingInstruction | null;
  readonly parentStyleSheet: ICSSStyleSheet | null;
  readonly title: string | null;
  readonly type: string;
}

export interface IText extends ICharacterData, ISlotable {
  readonly wholeText: string;
  splitText(offset: number): IText;
}

export interface ITextTrackEventMap {
  cuechange: IEvent;
}

export interface ITextTrack extends IEventTarget {
  readonly activeCues: ITextTrackCueList | null;
  readonly cues: ITextTrackCueList | null;
  readonly id: string;
  readonly inBandMetadataTrackDispatchType: string;
  readonly kind: ITextTrackKind;
  readonly label: string;
  readonly language: string;
  mode: ITextTrackMode;
  oncuechange: ((this: ITextTrack, ev: IEvent) => any) | null;
  addCue(cue: ITextTrackCue): void;
  removeCue(cue: ITextTrackCue): void;
  addEventListener<K extends keyof ITextTrackEventMap>(type: K, listener: (this: ITextTrack, ev: ITextTrackEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof ITextTrackEventMap>(type: K, listener: (this: ITextTrack, ev: ITextTrackEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface ITextTrackCueEventMap {
  enter: IEvent;
  exit: IEvent;
}

export interface ITextTrackCue extends IEventTarget {
  endTime: number;
  id: string;
  onenter: ((this: ITextTrackCue, ev: IEvent) => any) | null;
  onexit: ((this: ITextTrackCue, ev: IEvent) => any) | null;
  pauseOnExit: boolean;
  startTime: number;
  readonly track: ITextTrack | null;
  addEventListener<K extends keyof ITextTrackCueEventMap>(type: K, listener: (this: ITextTrackCue, ev: ITextTrackCueEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof ITextTrackCueEventMap>(type: K, listener: (this: ITextTrackCue, ev: ITextTrackCueEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface ITextTrackCueList {
  readonly length: number;
  getCueById(id: string): ITextTrackCue | null;
  [index: number]: ITextTrackCue;
}

export interface ITextTrackListEventMap {
  addtrack: IEvent;
  change: IEvent;
  removetrack: IEvent;
}

export interface ITextTrackList extends IEventTarget {
  readonly length: number;
  onaddtrack: ((this: ITextTrackList, ev: IEvent) => any) | null;
  onchange: ((this: ITextTrackList, ev: IEvent) => any) | null;
  onremovetrack: ((this: ITextTrackList, ev: IEvent) => any) | null;
  getTrackById(id: string): ITextTrack | null;
  addEventListener<K extends keyof ITextTrackListEventMap>(type: K, listener: (this: ITextTrackList, ev: ITextTrackListEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof ITextTrackListEventMap>(type: K, listener: (this: ITextTrackList, ev: ITextTrackListEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
  [index: number]: ITextTrack;
}

export interface ITimeRanges {
  readonly length: number;
  end(index: number): number;
  start(index: number): number;
}

export interface ITreeWalker {
  currentNode: INode;
  readonly filter: INodeFilter | null;
  readonly root: INode;
  readonly whatToShow: number;
  firstChild(): INode | null;
  lastChild(): INode | null;
  nextNode(): INode | null;
  nextSibling(): INode | null;
  parentNode(): INode | null;
  previousNode(): INode | null;
  previousSibling(): INode | null;
}

export interface IValidityState {
  readonly badInput: boolean;
  readonly customError: boolean;
  readonly patternMismatch: boolean;
  readonly rangeOverflow: boolean;
  readonly rangeUnderflow: boolean;
  readonly stepMismatch: boolean;
  readonly tooLong: boolean;
  readonly tooShort: boolean;
  readonly typeMismatch: boolean;
  readonly valid: boolean;
  readonly valueMissing: boolean;
}

export interface IVideoTrack {
  readonly id: string;
  readonly kind: string;
  readonly label: string;
  readonly language: string;
  selected: boolean;
}

export interface IVideoTrackListEventMap {
  addtrack: IEvent;
  change: IEvent;
  removetrack: IEvent;
}

export interface IVideoTrackList extends IEventTarget {
  readonly length: number;
  onaddtrack: ((this: IVideoTrackList, ev: IEvent) => any) | null;
  onchange: ((this: IVideoTrackList, ev: IEvent) => any) | null;
  onremovetrack: ((this: IVideoTrackList, ev: IEvent) => any) | null;
  readonly selectedIndex: number;
  getTrackById(id: string): IVideoTrack | null;
  addEventListener<K extends keyof IVideoTrackListEventMap>(type: K, listener: (this: IVideoTrackList, ev: IVideoTrackListEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IVideoTrackListEventMap>(type: K, listener: (this: IVideoTrackList, ev: IVideoTrackListEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
  [index: number]: IVideoTrack;
}

export interface IWindowEventHandlersEventMap {
  afterprint: IEvent;
  beforeprint: IEvent;
  beforeunload: IEvent;
  hashchange: IEvent;
  languagechange: IEvent;
  message: IEvent;
  messageerror: IEvent;
  offline: IEvent;
  online: IEvent;
  pagehide: IEvent;
  pageshow: IEvent;
  popstate: IEvent;
  rejectionhandled: IEvent;
  storage: IEvent;
  unhandledrejection: IEvent;
  unload: IEvent;
}

export interface IWindowEventHandlers {
  onafterprint: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onbeforeprint: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onbeforeunload: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onhashchange: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onlanguagechange: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onmessage: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onmessageerror: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onoffline: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  ononline: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onpagehide: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onpageshow: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onpopstate: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onrejectionhandled: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onstorage: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onunhandledrejection: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onunload: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  addEventListener<K extends keyof IWindowEventHandlersEventMap>(type: K, listener: (this: IWindowEventHandlers, ev: IWindowEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IWindowEventHandlersEventMap>(type: K, listener: (this: IWindowEventHandlers, ev: IWindowEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IXMLDocument extends IDocument {
  addEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IXMLDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IXMLDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IXMLSerializer {
  serializeToString(root: INode): string;
}

// HTML ELEMENTS //////////////////////////////////////////////////////////////////////////////////////////////////

export interface IHTMLElementTagNameMap {
  a: IHTMLAnchorElement;
  abbr: IHTMLElement;
  acronym: IHTMLElement;
  address: IHTMLElement;
  area: IHTMLAreaElement;
  article: IHTMLElement;
  aside: IHTMLElement;
  audio: IHTMLAudioElement;
  b: IHTMLElement;
  base: IHTMLBaseElement;
  bdi: IHTMLElement;
  bdo: IHTMLElement;
  big: IHTMLElement;
  blockquote: IHTMLQuoteElement;
  body: IHTMLBodyElement;
  br: IHTMLBRElement;
  button: IHTMLButtonElement;
  canvas: IHTMLCanvasElement;
  caption: IHTMLTableCaptionElement;
  center: IHTMLElement;
  cite: IHTMLElement;
  code: IHTMLElement;
  col: IHTMLTableColElement;
  colgroup: IHTMLTableColElement;
  data: IHTMLDataElement;
  datalist: IHTMLDataListElement;
  dd: IHTMLElement;
  del: IHTMLModElement;
  details: IHTMLDetailsElement;
  dfn: IHTMLElement;
  dialog: IHTMLDialogElement;
  dir: IHTMLDirectoryElement;
  div: IHTMLDivElement;
  dl: IHTMLDListElement;
  dt: IHTMLElement;
  em: IHTMLElement;
  embed: IHTMLEmbedElement;
  fieldset: IHTMLFieldSetElement;
  figcaption: IHTMLElement;
  figure: IHTMLElement;
  font: IHTMLFontElement;
  footer: IHTMLElement;
  form: IHTMLFormElement;
  frame: IHTMLFrameElement;
  frameset: IHTMLFrameSetElement;
  h1: IHTMLHeadingElement;
  h2: IHTMLHeadingElement;
  h3: IHTMLHeadingElement;
  h4: IHTMLHeadingElement;
  h5: IHTMLHeadingElement;
  h6: IHTMLHeadingElement;
  head: IHTMLHeadElement;
  header: IHTMLElement;
  hgroup: IHTMLElement;
  hr: IHTMLHRElement;
  html: IHTMLHtmlElement;
  i: IHTMLElement;
  iframe: IHTMLIFrameElement;
  img: IHTMLImageElement;
  input: IHTMLInputElement;
  ins: IHTMLModElement;
  isindex: IHTMLUnknownElement;
  kbd: IHTMLElement;
  keygen: IHTMLElement;
  label: IHTMLLabelElement;
  legend: IHTMLLegendElement;
  li: IHTMLLIElement;
  link: IHTMLLinkElement;
  main: IHTMLElement;
  map: IHTMLMapElement;
  mark: IHTMLElement;
  marquee: IHTMLMarqueeElement;
  menu: IHTMLMenuElement;
  meta: IHTMLMetaElement;
  meter: IHTMLMeterElement;
  nav: IHTMLElement;
  nextid: IHTMLUnknownElement;
  nobr: IHTMLElement;
  noframes: IHTMLElement;
  noscript: IHTMLElement;
  object: IHTMLObjectElement;
  ol: IHTMLOListElement;
  optgroup: IHTMLOptGroupElement;
  option: IHTMLOptionElement;
  output: IHTMLOutputElement;
  p: IHTMLParagraphElement;
  param: IHTMLParamElement;
  picture: IHTMLPictureElement;
  plaintext: IHTMLElement;
  pre: IHTMLPreElement;
  progress: IHTMLProgressElement;
  q: IHTMLQuoteElement;
  rp: IHTMLElement;
  rt: IHTMLElement;
  ruby: IHTMLElement;
  s: IHTMLElement;
  samp: IHTMLElement;
  script: IHTMLScriptElement;
  section: IHTMLElement;
  select: IHTMLSelectElement;
  slot: IHTMLSlotElement;
  small: IHTMLElement;
  source: IHTMLSourceElement;
  span: IHTMLSpanElement;
  strike: IHTMLElement;
  strong: IHTMLElement;
  style: IHTMLStyleElement;
  sub: IHTMLElement;
  summary: IHTMLElement;
  sup: IHTMLElement;
  table: IHTMLTableElement;
  tbody: IHTMLTableSectionElement;
  td: IHTMLTableCellElement;
  template: IHTMLTemplateElement;
  textarea: IHTMLTextAreaElement;
  tfoot: IHTMLTableSectionElement;
  th: IHTMLTableCellElement;
  thead: IHTMLTableSectionElement;
  time: IHTMLTimeElement;
  title: IHTMLTitleElement;
  tr: IHTMLTableRowElement;
  track: IHTMLTrackElement;
  tt: IHTMLElement;
  u: IHTMLElement;
  ul: IHTMLUListElement;
  var: IHTMLElement;
  video: IHTMLVideoElement;
  wbr: IHTMLElement;
}

export interface IHTMLElementDeprecatedTagNameMap {
  listing: IHTMLPreElement;
  xmp: IHTMLPreElement;
}
export interface IHTMLAnchorElement extends IHTMLElement, IHTMLHyperlinkElementUtils {
  charset: string;
  coords: string;
  download: string;
  hreflang: string;
  name: string;
  rel: string;
  readonly relList: IDOMTokenList;
  rev: string;
  shape: string;
  target: string;
  text: string;
  type: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAnchorElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAnchorElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLAreaElement extends IHTMLElement, IHTMLHyperlinkElementUtils {
  alt: string;
  coords: string;
  noHref: boolean;
  rel: string;
  readonly relList: IDOMTokenList;
  shape: string;
  target: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLAudioElement extends IHTMLMediaElement {
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAudioElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAudioElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLBRElement extends IHTMLElement {
  clear: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLBRElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLBRElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLBaseElement extends IHTMLElement {
  href: string;
  target: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLBaseElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLBaseElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLBodyElementEventMap extends IGlobalEventHandlersEventMap, IWindowEventHandlersEventMap {
}

export interface IHTMLBodyElement extends IHTMLElement, IWindowEventHandlers {
  aLink: string;
  background: string;
  bgColor: string;
  link: string;
  text: string;
  vLink: string;
  addEventListener<K extends keyof IHTMLBodyElementEventMap>(type: K, listener: (this: IHTMLBodyElement, ev: IHTMLBodyElementEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IHTMLBodyElementEventMap>(type: K, listener: (this: IHTMLBodyElement, ev: IHTMLBodyElementEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLButtonElement extends IHTMLElement {
  autofocus: boolean;
  disabled: boolean;
  readonly form: IHTMLFormElement | null;
  formNoValidate: boolean;
  formTarget: string;
  readonly labels: INodeList;
  name: string;
  type: string;
  readonly validationMessage: string;
  readonly validity: IValidityState;
  value: string;
  readonly willValidate: boolean;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLButtonElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLButtonElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLCanvasElement extends IHTMLElement {
  height: number;
  width: number;
  getContext(contextId: string, ...args: any[]): IRenderingContext | null;
  toBlob(callback: IBlobCallback, type?: string, quality?: any): void;
  toDataURL(type?: string, quality?: any): string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLCanvasElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLCanvasElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLDListElement extends IHTMLElement {
  compact: boolean;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLDataElement extends IHTMLElement {
  value: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDataElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDataElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLDataListElement extends IHTMLElement {
  readonly options: IHTMLCollection;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDataListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDataListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLDetailsElement extends IHTMLElement {
  open: boolean;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDetailsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDetailsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLDialogElement extends IHTMLElement {
  open: boolean;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDialogElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDialogElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLDirectoryElement extends IHTMLElement {
  compact: boolean;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDirectoryElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDirectoryElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLDivElement extends IHTMLElement {
  align: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDivElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDivElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLElement extends IElement, IElementCSSInlineStyle, IElementContentEditable, IGlobalEventHandlers, IHTMLOrSVGElement {
  accessKey: string;
  dir: string;
  draggable: boolean;
  hidden: boolean;
  lang: string;
  readonly offsetHeight: number;
  readonly offsetLeft: number;
  readonly offsetParent: IElement | null;
  readonly offsetTop: number;
  readonly offsetWidth: number;
  title: string;
  translate: boolean;
  click(): void;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLEmbedElement extends IHTMLElement {
  align: string;
  height: string;
  name: string;
  src: string;
  type: string;
  width: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLEmbedElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLEmbedElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLFieldSetElement extends IHTMLElement {
  disabled: boolean;
  readonly elements: IHTMLCollection;
  readonly form: IHTMLFormElement | null;
  name: string;
  readonly type: string;
  readonly validationMessage: string;
  readonly validity: IValidityState;
  readonly willValidate: boolean;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFieldSetElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFieldSetElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLFontElement extends IHTMLElement {
  color: string;
  face: string;
  size: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFontElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFontElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLFormElement extends IHTMLElement {
  acceptCharset: string;
  action: string;
  readonly elements: IHTMLFormControlsCollection;
  enctype: string;
  readonly length: number;
  method: string;
  name: string;
  noValidate: boolean;
  target: string;
  checkValidity(): boolean;
  reportValidity(): boolean;
  requestSubmit(submitter?: IHTMLElement): void;
  reset(): void;
  submit(): void;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFormElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFormElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLFrameElement extends IHTMLElement {
  readonly contentDocument: IDocument | null;
  readonly contentWindow: IWindowProxy | null;
  frameBorder: string;
  longDesc: string;
  marginHeight: string;
  marginWidth: string;
  name: string;
  noResize: boolean;
  scrolling: string;
  src: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLFrameSetElementEventMap extends IGlobalEventHandlersEventMap, IWindowEventHandlersEventMap {
}

export interface IHTMLFrameSetElement extends IHTMLElement, IWindowEventHandlers {
  cols: string;
  rows: string;
  addEventListener<K extends keyof IHTMLFrameSetElementEventMap>(type: K, listener: (this: IHTMLFrameSetElement, ev: IHTMLFrameSetElementEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IHTMLFrameSetElementEventMap>(type: K, listener: (this: IHTMLFrameSetElement, ev: IHTMLFrameSetElementEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLHRElement extends IHTMLElement {
  align: string;
  color: string;
  noShade: boolean;
  size: string;
  width: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHRElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHRElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLHeadElement extends IHTMLElement {
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHeadElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHeadElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLHeadingElement extends IHTMLElement {
  align: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHeadingElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHeadingElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLHtmlElement extends IHTMLElement {
  version: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHtmlElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHtmlElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLIFrameElement extends IHTMLElement {
  align: string;
  allowFullscreen: boolean;
  readonly contentDocument: IDocument | null;
  readonly contentWindow: IWindowProxy | null;
  frameBorder: string;
  height: string;
  longDesc: string;
  marginHeight: string;
  marginWidth: string;
  name: string;
  scrolling: string;
  src: string;
  srcdoc: string;
  width: string;
  getSVGDocument(): IDocument | null;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLIFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLIFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLImageElement extends IHTMLElement {
  align: string;
  alt: string;
  border: string;
  readonly complete: boolean;
  crossOrigin: string | null;
  readonly currentSrc: string;
  height: number;
  hspace: number;
  isMap: boolean;
  longDesc: string;
  lowsrc: string;
  name: string;
  readonly naturalHeight: number;
  readonly naturalWidth: number;
  sizes: string;
  src: string;
  srcset: string;
  useMap: string;
  vspace: number;
  width: number;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLImageElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLImageElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLInputElement extends IHTMLElement {
  accept: string;
  align: string;
  alt: string;
  autocomplete: string;
  autofocus: boolean;
  checked: boolean;
  defaultChecked: boolean;
  defaultValue: string;
  dirName: string;
  disabled: boolean;
  files: IFileList | null;
  readonly form: IHTMLFormElement | null;
  formNoValidate: boolean;
  formTarget: string;
  indeterminate: boolean;
  inputMode: string;
  readonly labels: INodeList | null;
  readonly list: IHTMLElement | null;
  max: string;
  maxLength: number;
  min: string;
  minLength: number;
  multiple: boolean;
  name: string;
  pattern: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  selectionDirection: string | null;
  selectionEnd: number | null;
  selectionStart: number | null;
  size: number;
  src: string;
  step: string;
  type: string;
  useMap: string;
  readonly validationMessage: string;
  readonly validity: IValidityState;
  value: string;
  valueAsDate: any;
  valueAsNumber: number;
  readonly willValidate: boolean;
  checkValidity(): boolean;
  reportValidity(): boolean;
  select(): void;
  setCustomValidity(error: string): void;
  setRangeText(replacement: string): void;
  setRangeText(replacement: string, start: number, end: number, selectionMode?: ISelectionMode): void;
  setSelectionRange(start: number, end: number, direction?: string): void;
  stepDown(n?: number): void;
  stepUp(n?: number): void;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLInputElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLInputElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLLIElement extends IHTMLElement {
  type: string;
  value: number;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLIElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLIElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLLabelElement extends IHTMLElement {
  readonly control: IHTMLElement | null;
  readonly form: IHTMLFormElement | null;
  htmlFor: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLabelElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLabelElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLLegendElement extends IHTMLElement {
  align: string;
  readonly form: IHTMLFormElement | null;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLegendElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLegendElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLLinkElement extends IHTMLElement, ILinkStyle {
  charset: string;
  crossOrigin: string | null;
  href: string;
  hreflang: string;
  media: string;
  rel: string;
  readonly relList: IDOMTokenList;
  rev: string;
  target: string;
  type: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLinkElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLinkElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLMapElement extends IHTMLElement {
  readonly areas: IHTMLCollection;
  name: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMapElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMapElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLMarqueeElement extends IHTMLElement {
  behavior: string;
  bgColor: string;
  direction: string;
  height: string;
  hspace: number;
  scrollAmount: number;
  scrollDelay: number;
  trueSpeed: boolean;
  vspace: number;
  width: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMarqueeElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMarqueeElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLMenuElement extends IHTMLElement {
  compact: boolean;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMenuElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMenuElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLMetaElement extends IHTMLElement {
  content: string;
  httpEquiv: string;
  name: string;
  scheme: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMetaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMetaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLMeterElement extends IHTMLElement {
  high: number;
  readonly labels: INodeList;
  low: number;
  max: number;
  min: number;
  optimum: number;
  value: number;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMeterElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMeterElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLModElement extends IHTMLElement {
  cite: string;
  dateTime: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLModElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLModElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLOListElement extends IHTMLElement {
  compact: boolean;
  reversed: boolean;
  start: number;
  type: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLObjectElement extends IHTMLElement {
  align: string;
  archive: string;
  border: string;
  code: string;
  codeBase: string;
  codeType: string;
  readonly contentDocument: IDocument | null;
  data: string;
  declare: boolean;
  readonly form: IHTMLFormElement | null;
  height: string;
  hspace: number;
  name: string;
  standby: string;
  type: string;
  useMap: string;
  readonly validationMessage: string;
  readonly validity: IValidityState;
  vspace: number;
  width: string;
  readonly willValidate: boolean;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLObjectElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLObjectElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLOptGroupElement extends IHTMLElement {
  disabled: boolean;
  label: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptGroupElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptGroupElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLOptionElement extends IHTMLElement {
  defaultSelected: boolean;
  disabled: boolean;
  readonly form: IHTMLFormElement | null;
  readonly index: number;
  label: string;
  selected: boolean;
  text: string;
  value: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLOutputElement extends IHTMLElement {
  defaultValue: string;
  readonly form: IHTMLFormElement | null;
  readonly htmlFor: IDOMTokenList;
  readonly labels: INodeList;
  name: string;
  readonly type: string;
  readonly validationMessage: string;
  readonly validity: IValidityState;
  value: string;
  readonly willValidate: boolean;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOutputElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOutputElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLParagraphElement extends IHTMLElement {
  align: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLParagraphElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLParagraphElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLParamElement extends IHTMLElement {
  name: string;
  type: string;
  value: string;
  valueType: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLParamElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLParamElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLPictureElement extends IHTMLElement {
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLPictureElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLPictureElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLPreElement extends IHTMLElement {
  width: number;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLPreElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLPreElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLProgressElement extends IHTMLElement {
  readonly labels: INodeList;
  max: number;
  readonly position: number;
  value: number;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLProgressElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLProgressElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLQuoteElement extends IHTMLElement {
  cite: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLQuoteElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLQuoteElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLScriptElement extends IHTMLElement {
  charset: string;
  crossOrigin: string | null;
  defer: boolean;
  event: string;
  htmlFor: string;
  src: string;
  text: string;
  type: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLScriptElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLScriptElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLSelectElement extends IHTMLElement {
  autocomplete: string;
  disabled: boolean;
  readonly form: IHTMLFormElement | null;
  readonly labels: INodeList;
  length: number;
  multiple: boolean;
  name: string;
  readonly options: IHTMLOptionsCollection;
  required: boolean;
  selectedIndex: number;
  readonly selectedOptions: IHTMLCollection;
  size: number;
  readonly type: string;
  readonly validationMessage: string;
  readonly validity: IValidityState;
  value: string;
  readonly willValidate: boolean;
  add(element: IHTMLOptionElement | IHTMLOptGroupElement, before?: IHTMLElement | number | null): void;
  checkValidity(): boolean;
  item(index: number): IElement | null;
  namedItem(name: string): IHTMLOptionElement | null;
  remove(index?: number): void;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSelectElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSelectElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
  [index: number]: IElement;
}

export interface IHTMLSlotElement extends IHTMLElement {
  name: string;
  assignedElements(options?: IAssignedNodesOptions): Iterable<IElement>;
  assignedNodes(options?: IAssignedNodesOptions): Iterable<INode>;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSlotElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSlotElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLSourceElement extends IHTMLElement {
  media: string;
  sizes: string;
  src: string;
  srcset: string;
  type: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSourceElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSourceElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLSpanElement extends IHTMLElement {
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSpanElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSpanElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLStyleElement extends IHTMLElement, ILinkStyle {
  media: string;
  type: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLStyleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLStyleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLTableCaptionElement extends IHTMLElement {
  align: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCaptionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCaptionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLTableCellElement extends IHTMLElement {
  abbr: string;
  align: string;
  axis: string;
  bgColor: string;
  readonly cellIndex: number;
  ch: string;
  chOff: string;
  colSpan: number;
  headers: string;
  height: string;
  noWrap: boolean;
  rowSpan: number;
  scope: string;
  vAlign: string;
  width: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCellElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCellElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLTableColElement extends IHTMLElement {
  align: string;
  ch: string;
  chOff: string;
  span: number;
  vAlign: string;
  width: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableColElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableColElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLTableElement extends IHTMLElement {
  align: string;
  bgColor: string;
  border: string;
  caption: IHTMLTableCaptionElement | null;
  cellPadding: string;
  cellSpacing: string;
  frame: string;
  readonly rows: IHTMLCollection;
  rules: string;
  summary: string;
  readonly tBodies: IHTMLCollection;
  tFoot: IHTMLTableSectionElement | null;
  tHead: IHTMLTableSectionElement | null;
  width: string;
  createCaption(): IHTMLTableCaptionElement;
  createTBody(): IHTMLTableSectionElement;
  createTFoot(): IHTMLTableSectionElement;
  createTHead(): IHTMLTableSectionElement;
  deleteCaption(): void;
  deleteRow(index: number): void;
  deleteTFoot(): void;
  deleteTHead(): void;
  insertRow(index?: number): IHTMLTableRowElement;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLTableRowElement extends IHTMLElement {
  align: string;
  bgColor: string;
  readonly cells: IHTMLCollection;
  ch: string;
  chOff: string;
  readonly rowIndex: number;
  readonly sectionRowIndex: number;
  vAlign: string;
  deleteCell(index: number): void;
  insertCell(index?: number): IHTMLTableCellElement;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableRowElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableRowElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLTableSectionElement extends IHTMLElement {
  align: string;
  ch: string;
  chOff: string;
  readonly rows: IHTMLCollection;
  vAlign: string;
  deleteRow(index: number): void;
  insertRow(index?: number): IHTMLElement;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableSectionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableSectionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLTemplateElement extends IHTMLElement {
  readonly content: IDocumentFragment;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTemplateElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTemplateElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLTextAreaElement extends IHTMLElement {
  autocomplete: string;
  autofocus: boolean;
  cols: number;
  defaultValue: string;
  dirName: string;
  disabled: boolean;
  readonly form: IHTMLFormElement | null;
  inputMode: string;
  readonly labels: INodeList;
  maxLength: number;
  minLength: number;
  name: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  rows: number;
  selectionDirection: string;
  selectionEnd: number;
  selectionStart: number;
  readonly textLength: number;
  readonly type: string;
  readonly validationMessage: string;
  readonly validity: IValidityState;
  value: string;
  readonly willValidate: boolean;
  wrap: string;
  checkValidity(): boolean;
  reportValidity(): boolean;
  select(): void;
  setCustomValidity(error: string): void;
  setRangeText(replacement: string): void;
  setRangeText(replacement: string, start: number, end: number, selectionMode?: ISelectionMode): void;
  setSelectionRange(start: number, end: number, direction?: string): void;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTextAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTextAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLTimeElement extends IHTMLElement {
  dateTime: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTimeElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTimeElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLTitleElement extends IHTMLElement {
  text: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTitleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTitleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLTrackElement extends IHTMLElement {
  readonly ERROR: number;
  readonly LOADED: number;
  readonly LOADING: number;
  readonly NONE: number;
  default: boolean;
  kind: string;
  label: string;
  readonly readyState: number;
  src: string;
  srclang: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTrackElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTrackElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLUListElement extends IHTMLElement {
  compact: boolean;
  type: string;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLUListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLUListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLUnknownElement extends IHTMLElement {
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLUnknownElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLUnknownElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface IHTMLVideoElement extends IHTMLMediaElement {
  height: number;
  playsInline: boolean;
  poster: string;
  readonly videoHeight: number;
  readonly videoWidth: number;
  width: number;
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLVideoElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLVideoElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

// SVG ELEMENTS ///////////////////////////////////////////////////////////////////////////////////////////////////

export interface ISVGElementTagNameMap {
  svg: ISVGSVGElement;
  title: ISVGTitleElement;
}

export interface ISVGElementDeprecatedTagNameMap {
}
export interface ISVGSVGElementEventMap extends IGlobalEventHandlersEventMap, IWindowEventHandlersEventMap {
}

export interface ISVGSVGElement extends ISVGGraphicsElement, IWindowEventHandlers {
  createSVGNumber(): ISVGNumber;
  forceRedraw(): void;
  getElementById(elementId: string): IElement;
  suspendRedraw(maxWaitMilliseconds: number): number;
  unsuspendRedraw(suspendHandleID: number): void;
  unsuspendRedrawAll(): void;
  addEventListener<K extends keyof ISVGSVGElementEventMap>(type: K, listener: (this: ISVGSVGElement, ev: ISVGSVGElementEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof ISVGSVGElementEventMap>(type: K, listener: (this: ISVGSVGElement, ev: ISVGSVGElementEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}

export interface ISVGTitleElement extends ISVGElement {
  addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGTitleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void;
  removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGTitleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void;
}
