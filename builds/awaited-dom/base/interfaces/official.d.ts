import { ISuperNode, ISuperElement, ISuperDocument, ISuperHTMLCollection, ISuperHTMLElement, ISuperNodeList, ISuperStyleSheet, ISuperText } from './super';
import { INodeIsolate } from './isolate';
export declare type ICanPlayTypeResult = '' | 'maybe' | 'probably';
export declare type IDocumentReadyState = 'complete' | 'interactive' | 'loading';
export declare type IEndingType = 'native' | 'transparent';
export declare type IFullscreenNavigationUI = 'auto' | 'hide' | 'show';
export declare type IReferrerPolicy = '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
export declare type IRequestCache = 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
export declare type IRequestCredentials = 'include' | 'omit' | 'same-origin';
export declare type IRequestDestination = '' | 'audio' | 'audioworklet' | 'document' | 'embed' | 'font' | 'frame' | 'iframe' | 'image' | 'manifest' | 'object' | 'paintworklet' | 'report' | 'script' | 'sharedworker' | 'style' | 'track' | 'video' | 'worker' | 'xslt';
export declare type IRequestMode = 'cors' | 'navigate' | 'no-cors' | 'same-origin';
export declare type IRequestRedirect = 'error' | 'follow' | 'manual';
export declare type IResponseType = 'basic' | 'cors' | 'default' | 'error' | 'opaque' | 'opaqueredirect';
export declare type IScrollBehavior = 'auto' | 'smooth';
export declare type IScrollLogicalPosition = 'center' | 'end' | 'nearest' | 'start';
export declare type ISelectionMode = 'end' | 'preserve' | 'select' | 'start';
export declare type IShadowRootMode = 'closed' | 'open';
export declare type ISupportedType = 'application/xhtml+xml' | 'application/xml' | 'image/svg+xml' | 'text/html' | 'text/xml';
export declare type IVisibilityState = 'hidden' | 'prerender' | 'visible';
export declare type IBufferSource = ArrayBufferView | ArrayBuffer;
export declare type IBlobPart = IBufferSource | IBlob | string;
export declare type IHeadersInit = Iterable<Iterable<string>> | Record<string, string>;
export declare type IBodyInit = IBufferSource | string;
export declare type IRequestInfo = IRequest | string;
export interface IAssignedNodesOptions {
    flatten?: boolean;
}
export interface IBlobPropertyBag {
    endings?: IEndingType;
    type?: string;
}
export interface IFilePropertyBag extends IBlobPropertyBag {
    lastModified?: number;
}
export interface IFullscreenOptions {
    navigationUI?: IFullscreenNavigationUI;
}
export interface IGetRootNodeOptions {
    composed?: boolean;
}
export interface IImageEncodeOptions {
    quality?: number;
    type?: string;
}
export interface IRequestInit {
    body?: IBodyInit | null;
    cache?: IRequestCache;
    credentials?: IRequestCredentials;
    headers?: IHeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: IRequestMode;
    redirect?: IRequestRedirect;
    referrer?: string;
    referrerPolicy?: IReferrerPolicy;
    window?: any;
}
export interface IResponseInit {
    headers?: IHeadersInit;
    status?: number;
    statusText?: string;
}
export interface IScrollIntoViewOptions extends IScrollOptions {
    block?: IScrollLogicalPosition;
    inline?: IScrollLogicalPosition;
}
export interface IScrollOptions {
    behavior?: IScrollBehavior;
}
export declare type IXPathNSResolver = ((prefix: string | null) => string | null) | {
    lookupNamespaceURI(prefix: string | null): string | null;
};
export interface IAbstractRange {
    readonly collapsed: Promise<boolean>;
    readonly endContainer: ISuperNode;
    readonly endOffset: Promise<number>;
    readonly startContainer: ISuperNode;
    readonly startOffset: Promise<number>;
}
export interface IAttr extends INode {
    readonly localName: Promise<string>;
    readonly name: Promise<string>;
    readonly namespaceURI: Promise<string | null>;
    readonly ownerElement: ISuperElement;
    readonly prefix: Promise<string | null>;
    readonly specified: Promise<boolean>;
    readonly value: Promise<string>;
}
export interface IAudioTrack {
    readonly enabled: Promise<boolean>;
    readonly id: Promise<string>;
    readonly kind: Promise<string>;
    readonly label: Promise<string>;
    readonly language: Promise<string>;
}
export interface IAudioTrackList {
    readonly length: Promise<number>;
    getTrackById(id: string): IAudioTrack;
    [Symbol.iterator](): Iterator<IAudioTrack>;
}
export interface IBlob {
    readonly size: Promise<number>;
    readonly type: Promise<string>;
    arrayBuffer(): Promise<ArrayBuffer>;
    slice(start?: number, end?: number, contentType?: string): Promise<IBlob>;
    text(): Promise<string>;
}
export interface IBody {
    readonly bodyUsed: Promise<boolean>;
    arrayBuffer(): Promise<ArrayBuffer>;
    json(): Promise<any>;
    text(): Promise<string>;
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
    readonly cssText: Promise<string>;
    readonly parentRule: ICSSRule;
    readonly parentStyleSheet: ICSSStyleSheet;
    readonly type: Promise<number>;
}
export interface ICSSRuleList {
    readonly length: Promise<number>;
    item(index: number): ICSSRule;
    [Symbol.iterator](): Iterator<ICSSRule>;
    [index: number]: ICSSRule;
}
export interface ICSSStyleDeclaration {
    readonly cssFloat: Promise<string>;
    readonly cssText: Promise<string>;
    readonly length: Promise<number>;
    readonly parentRule: ICSSRule;
    getPropertyPriority(property: string): Promise<string>;
    getPropertyValue(property: string): Promise<string>;
    item(index: number): Promise<string>;
    removeProperty(property: string): Promise<string>;
    setProperty(property: string, value: string, priority?: string): Promise<void>;
    [Symbol.iterator](): Iterator<string>;
    [index: number]: string;
}
export interface ICSSStyleSheet extends IStyleSheet {
    readonly cssRules: ICSSRuleList;
    readonly ownerRule: ICSSRule;
    deleteRule(index: number): Promise<void>;
    insertRule(rule: string, index?: number): Promise<number>;
}
export interface ICaretPosition {
    readonly offset: Promise<number>;
    readonly offsetNode: ISuperNode;
    getClientRect(): IDOMRect;
}
export interface ICharacterData extends INode, INode, INonDocumentTypeChildNode {
    readonly data: Promise<string>;
    readonly length: Promise<number>;
    substringData(offset: number, count: number): Promise<string>;
}
export interface IDOMImplementation {
    hasFeature(): Promise<boolean>;
}
export interface IDOMParser {
    parseFromString(str: string, type: ISupportedType): ISuperDocument;
}
export interface IDOMRect extends IDOMRectReadOnly {
    readonly height: Promise<number>;
    readonly width: Promise<number>;
    readonly x: Promise<number>;
    readonly y: Promise<number>;
}
export interface IDOMRectList {
    readonly length: Promise<number>;
    item(index: number): IDOMRect;
    [Symbol.iterator](): Iterator<IDOMRect>;
    [index: number]: IDOMRect;
}
export interface IDOMRectReadOnly {
    readonly bottom: Promise<number>;
    readonly height: Promise<number>;
    readonly left: Promise<number>;
    readonly right: Promise<number>;
    readonly top: Promise<number>;
    readonly width: Promise<number>;
    readonly x: Promise<number>;
    readonly y: Promise<number>;
    toJSON(): Promise<any>;
}
export interface IDOMTokenList {
    readonly length: Promise<number>;
    readonly value: Promise<string>;
    add(...tokens: string[]): Promise<void>;
    contains(token: string): Promise<boolean>;
    item(index: number): Promise<string | null>;
    remove(...tokens: string[]): Promise<void>;
    replace(token: string, newToken: string): Promise<boolean>;
    supports(token: string): Promise<boolean>;
    toString(): Promise<string>;
    toggle(token: string, force?: boolean): Promise<boolean>;
    forEach(callbackfn: (value: string, key: number, parent: IDOMTokenList) => void, thisArg?: any): Promise<void>;
    entries(): Promise<IterableIterator<[number, string]>>;
    keys(): Promise<IterableIterator<number>>;
    values(): Promise<IterableIterator<string>>;
    [Symbol.iterator](): Iterator<string>;
    [index: number]: string;
}
export interface IDocument extends INode, IDocumentOrShadowRoot, INode, INonElementParentNode, IParentNode, IXPathEvaluatorBase {
    readonly URL: Promise<string>;
    readonly anchors: ISuperHTMLCollection;
    readonly body: ISuperHTMLElement;
    readonly characterSet: Promise<string>;
    readonly compatMode: Promise<string>;
    readonly contentType: Promise<string>;
    readonly cookie: Promise<string>;
    readonly designMode: Promise<string>;
    readonly dir: Promise<string>;
    readonly doctype: IDocumentType;
    readonly documentElement: ISuperElement;
    readonly documentURI: Promise<string>;
    readonly domain: Promise<string>;
    readonly embeds: ISuperHTMLCollection;
    readonly featurePolicy: IFeaturePolicy;
    readonly forms: ISuperHTMLCollection;
    readonly fullscreenEnabled: Promise<boolean>;
    readonly head: IHTMLHeadElement;
    readonly hidden: Promise<boolean>;
    readonly images: ISuperHTMLCollection;
    readonly implementation: IDOMImplementation;
    readonly lastModified: Promise<string>;
    readonly links: ISuperHTMLCollection;
    readonly location: ILocation;
    readonly plugins: ISuperHTMLCollection;
    readonly readyState: Promise<IDocumentReadyState>;
    readonly referrer: Promise<string>;
    readonly scripts: ISuperHTMLCollection;
    readonly scrollingElement: ISuperElement;
    readonly title: Promise<string>;
    readonly visibilityState: Promise<IVisibilityState>;
    exitFullscreen(): Promise<void>;
    exitPointerLock(): Promise<void>;
    getElementsByClassName(classNames: string): ISuperHTMLCollection;
    getElementsByName(elementName: string): ISuperNodeList;
    getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
    getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
    hasFocus(): Promise<boolean>;
}
export interface IDocumentFragment extends INode, INode, INonElementParentNode, IParentNode {
}
export interface IDocumentOrShadowRoot {
    readonly activeElement: ISuperElement;
    readonly fullscreenElement: ISuperElement;
    readonly pointerLockElement: ISuperElement;
    caretPositionFromPoint(x: number, y: number): ICaretPosition;
    elementFromPoint(x: number, y: number): ISuperElement;
    getSelection(): ISelection;
}
export interface IDocumentType extends INode, INode {
    readonly name: Promise<string>;
    readonly publicId: Promise<string>;
    readonly systemId: Promise<string>;
}
export interface IElement extends INode, INode, INonDocumentTypeChildNode, IParentNode, ISlotable {
    readonly attributes: INamedNodeMap;
    readonly classList: IDOMTokenList;
    readonly className: Promise<string>;
    readonly clientHeight: Promise<number>;
    readonly clientLeft: Promise<number>;
    readonly clientTop: Promise<number>;
    readonly clientWidth: Promise<number>;
    readonly id: Promise<string>;
    readonly innerHTML: Promise<string>;
    readonly localName: Promise<string>;
    readonly namespaceURI: Promise<string | null>;
    readonly outerHTML: Promise<string>;
    readonly part: IDOMTokenList;
    readonly prefix: Promise<string | null>;
    readonly scrollHeight: Promise<number>;
    readonly scrollLeft: Promise<number>;
    readonly scrollTop: Promise<number>;
    readonly scrollWidth: Promise<number>;
    readonly shadowRoot: IShadowRoot;
    readonly slot: Promise<string>;
    readonly tagName: Promise<string>;
    closest(selectors: string): ISuperElement;
    getAttribute(qualifiedName: string): Promise<string | null>;
    getAttributeNS(namespace: string | null, localName: string): Promise<string | null>;
    getAttributeNames(): Promise<Iterable<string>>;
    getAttributeNode(qualifiedName: string): Promise<IAttr | null>;
    getAttributeNodeNS(namespace: string | null, localName: string): Promise<IAttr | null>;
    getBoundingClientRect(): Promise<IDOMRect>;
    getClientRects(): Promise<IDOMRectList>;
    getElementsByClassName(classNames: string): ISuperHTMLCollection;
    getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
    getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
    hasAttribute(qualifiedName: string): Promise<boolean>;
    hasAttributeNS(namespace: string | null, localName: string): Promise<boolean>;
    hasAttributes(): Promise<boolean>;
    hasPointerCapture(pointerId: number): Promise<boolean>;
    matches(selectors: string): Promise<boolean>;
    requestFullscreen(options?: IFullscreenOptions): Promise<void>;
    requestPointerLock(): Promise<void>;
    scrollIntoView(arg?: boolean | IScrollIntoViewOptions): Promise<void>;
}
export interface IElementCSSInlineStyle {
    readonly style: ICSSStyleDeclaration;
}
export interface IElementContentEditable {
    readonly contentEditable: Promise<string>;
    readonly isContentEditable: Promise<boolean>;
}
export interface IFeaturePolicy {
}
export interface IFile extends IBlob {
    readonly lastModified: Promise<number>;
    readonly name: Promise<string>;
}
export interface IFileList {
    readonly length: Promise<number>;
    item(index: number): IFile;
    [Symbol.iterator](): Iterator<IFile>;
    [index: number]: IFile;
}
export interface IHTMLCollection extends IHTMLCollectionBase {
    namedItem(name: string): ISuperElement;
    [index: number]: ISuperElement;
}
export interface IHTMLCollectionBase {
    readonly length: Promise<number>;
    item(index: number): ISuperElement;
    [Symbol.iterator](): Iterator<ISuperElement>;
    [index: number]: ISuperElement;
}
export interface IHTMLDocument extends IDocument {
}
export interface IHTMLFormControlsCollection extends IHTMLCollectionBase {
    namedItem(name: string): Promise<IRadioNodeList | ISuperElement | null>;
    [index: number]: ISuperElement;
}
export interface IHTMLHyperlinkElementUtils {
    readonly hash: Promise<string>;
    readonly host: Promise<string> | ISuperElement;
    readonly hostname: Promise<string>;
    readonly href: Promise<string>;
    readonly origin: Promise<string>;
    readonly password: Promise<string>;
    readonly pathname: Promise<string>;
    readonly port: Promise<string>;
    readonly protocol: Promise<string>;
    readonly search: Promise<string>;
    readonly username: Promise<string>;
    toString(): Promise<string>;
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
    readonly autoplay: Promise<boolean>;
    readonly buffered: ITimeRanges;
    readonly controls: Promise<boolean>;
    readonly controlsList: IDOMTokenList;
    readonly crossOrigin: Promise<string | null>;
    readonly currentSrc: Promise<string>;
    readonly currentTime: Promise<number>;
    readonly defaultMuted: Promise<boolean>;
    readonly defaultPlaybackRate: Promise<number>;
    readonly disableRemotePlayback: Promise<boolean>;
    readonly duration: Promise<number>;
    readonly ended: Promise<boolean>;
    readonly error: IMediaError;
    readonly loop: Promise<boolean>;
    readonly mediaKeys: IMediaKeys;
    readonly muted: Promise<boolean>;
    readonly networkState: Promise<number>;
    readonly playbackRate: Promise<number>;
    readonly played: ITimeRanges;
    readonly preload: Promise<string>;
    readonly readyState: Promise<number>;
    readonly seekable: ITimeRanges;
    readonly seeking: Promise<boolean>;
    readonly sinkId: Promise<string>;
    readonly src: Promise<string>;
    readonly textTracks: ITextTrackList;
    readonly videoTracks: IVideoTrackList;
    readonly volume: Promise<number>;
    canPlayType(type: string): Promise<ICanPlayTypeResult>;
    load(): Promise<void>;
    pause(): Promise<void>;
    play(): Promise<void>;
    setSinkId(sinkId: string): Promise<void>;
}
export interface IHTMLOptionsCollection extends IHTMLCollection {
}
export interface IHTMLOrSVGElement {
    readonly dataset: Promise<Record<string, string>>;
    readonly nonce: Promise<string>;
    readonly tabIndex: Promise<number>;
    blur(): Promise<void>;
    focus(): Promise<void>;
}
export interface IHeaders {
    append(name: string, value: string): Promise<void>;
    delete(name: string): Promise<void>;
    get(name: string): Promise<string | null>;
    has(name: string): Promise<boolean>;
    set(name: string, value: string): Promise<void>;
    forEach(callbackfn: (value: string, key: string, parent: IHeaders) => void, thisArg?: any): Promise<void>;
    entries(): Promise<IterableIterator<[string, string]>>;
    keys(): Promise<IterableIterator<string>>;
    values(): Promise<IterableIterator<string>>;
    [Symbol.iterator](): Iterator<[string, string]>;
}
export interface IImageBitmap {
    readonly height: Promise<number>;
    readonly width: Promise<number>;
    close(): Promise<void>;
}
export interface ILinkStyle {
    readonly sheet: ISuperStyleSheet;
}
export interface ILocation {
    hash: Promise<string> | any;
    host: Promise<string> | any;
    hostname: Promise<string> | any;
    href: Promise<string> | any;
    readonly origin: Promise<string>;
    pathname: Promise<string> | any;
    port: Promise<string> | any;
    protocol: Promise<string> | any;
    search: Promise<string> | any;
    assign(url: string): Promise<void>;
    reload(): Promise<void>;
    replace(url: string): Promise<void>;
    toString(): Promise<string>;
}
export interface IMediaError {
    readonly MEDIA_ERR_ABORTED: number;
    readonly MEDIA_ERR_DECODE: number;
    readonly MEDIA_ERR_NETWORK: number;
    readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number;
}
export interface IMediaKeys {
}
export interface IMediaList {
    readonly length: Promise<number>;
    appendMedium(medium: string): Promise<void>;
    deleteMedium(medium: string): Promise<void>;
    item(index: number): Promise<string | null>;
    [Symbol.iterator](): Iterator<string>;
    [index: number]: string;
}
export interface IMediaStream {
    readonly active: Promise<boolean>;
    readonly id: Promise<string>;
    clone(): IMediaStream;
}
export interface INamedNodeMap {
    readonly length: Promise<number>;
    getNamedItem(qualifiedName: string): Promise<IAttr | null>;
    getNamedItemNS(namespace: string | null, localName: string): Promise<IAttr | null>;
    item(index: number): Promise<IAttr | null>;
    [Symbol.iterator](): Iterator<IAttr>;
    [index: number]: IAttr;
}
export interface INode {
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
    readonly baseURI: Promise<string>;
    readonly childNodes: ISuperNodeList;
    readonly firstChild: ISuperNode;
    readonly isConnected: Promise<boolean>;
    readonly lastChild: ISuperNode;
    readonly nextSibling: ISuperNode;
    readonly nodeName: Promise<string>;
    readonly nodeType: Promise<number>;
    readonly nodeValue: Promise<string | null>;
    readonly ownerDocument: ISuperDocument;
    readonly parentElement: ISuperElement;
    readonly parentNode: ISuperNode;
    readonly previousSibling: ISuperNode;
    readonly textContent: Promise<string | null>;
    compareDocumentPosition(other: INodeIsolate): Promise<number>;
    contains(other: INodeIsolate | null): Promise<boolean>;
    getRootNode(options?: IGetRootNodeOptions): ISuperNode;
    hasChildNodes(): Promise<boolean>;
    isDefaultNamespace(namespace: string | null): Promise<boolean>;
    isEqualNode(otherNode: INodeIsolate | null): Promise<boolean>;
    isSameNode(otherNode: INodeIsolate | null): Promise<boolean>;
    lookupNamespaceURI(prefix: string | null): Promise<string | null>;
    lookupPrefix(namespace: string | null): Promise<string | null>;
    normalize(): Promise<void>;
}
export interface INodeList {
    readonly length: Promise<number>;
    item(index: number): ISuperNode;
    forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeList) => void, thisArg?: any): Promise<void>;
    entries(): Promise<IterableIterator<[number, ISuperNode]>>;
    keys(): Promise<IterableIterator<number>>;
    values(): Promise<IterableIterator<ISuperNode>>;
    [Symbol.iterator](): Iterator<ISuperNode>;
    [index: number]: ISuperNode;
}
export interface INonDocumentTypeChildNode {
    readonly nextElementSibling: ISuperElement;
    readonly previousElementSibling: ISuperElement;
}
export interface INonElementParentNode {
    getElementById(elementId: string): ISuperElement;
}
export interface IOffscreenCanvas {
    readonly height: Promise<number>;
    readonly width: Promise<number>;
    convertToBlob(options?: IImageEncodeOptions): Promise<IBlob>;
    transferToImageBitmap(): IImageBitmap;
}
export interface IParentNode {
    readonly childElementCount: Promise<number>;
    readonly children: ISuperHTMLCollection;
    readonly firstElementChild: ISuperElement;
    readonly lastElementChild: ISuperElement;
    querySelector(selectors: string): ISuperElement;
    querySelectorAll(selectors: string): ISuperNodeList;
}
export interface IRadioNodeList extends INodeList {
    readonly value: Promise<string>;
    [index: number]: ISuperNode;
}
export interface IRange extends IAbstractRange {
    readonly END_TO_END: number;
    readonly END_TO_START: number;
    readonly START_TO_END: number;
    readonly START_TO_START: number;
    readonly commonAncestorContainer: ISuperNode;
    cloneContents(): IDocumentFragment;
    cloneRange(): IRange;
    collapse(toStart?: boolean): Promise<void>;
    compareBoundaryPoints(how: number, sourceRange: IRange): Promise<number>;
    comparePoint(node: INodeIsolate, offset: number): Promise<number>;
    createContextualFragment(fragment: string): IDocumentFragment;
    deleteContents(): Promise<void>;
    detach(): Promise<void>;
    extractContents(): IDocumentFragment;
    getBoundingClientRect(): IDOMRect;
    getClientRects(): IDOMRectList;
    insertNode(node: INodeIsolate): Promise<void>;
    intersectsNode(node: INodeIsolate): Promise<boolean>;
    isPointInRange(node: INodeIsolate, offset: number): Promise<boolean>;
    selectNode(node: INodeIsolate): Promise<void>;
    selectNodeContents(node: INodeIsolate): Promise<void>;
    setEnd(node: INodeIsolate, offset: number): Promise<void>;
    setEndAfter(node: INodeIsolate): Promise<void>;
    setEndBefore(node: INodeIsolate): Promise<void>;
    setStart(node: INodeIsolate, offset: number): Promise<void>;
    setStartAfter(node: INodeIsolate): Promise<void>;
    setStartBefore(node: INodeIsolate): Promise<void>;
    surroundContents(newParent: INodeIsolate): Promise<void>;
    toString(): Promise<string>;
}
export interface IRequest extends IBody {
    readonly cache: Promise<IRequestCache>;
    readonly credentials: Promise<IRequestCredentials>;
    readonly destination: Promise<IRequestDestination>;
    readonly headers: IHeaders;
    readonly integrity: Promise<string>;
    readonly isHistoryNavigation: Promise<boolean>;
    readonly isReloadNavigation: Promise<boolean>;
    readonly keepalive: Promise<boolean>;
    readonly method: Promise<string>;
    readonly mode: Promise<IRequestMode>;
    readonly redirect: Promise<IRequestRedirect>;
    readonly referrer: Promise<string>;
    readonly referrerPolicy: Promise<IReferrerPolicy>;
    readonly url: Promise<string>;
}
export interface IResponse extends IBody {
    readonly headers: IHeaders;
    readonly ok: Promise<boolean>;
    readonly redirected: Promise<boolean>;
    readonly status: Promise<number>;
    readonly statusText: Promise<string>;
    readonly type: Promise<IResponseType>;
    readonly url: Promise<string>;
}
export interface ISelection {
    readonly anchorNode: ISuperNode;
    readonly anchorOffset: Promise<number>;
    readonly focusNode: ISuperNode;
    readonly focusOffset: Promise<number>;
    readonly isCollapsed: Promise<boolean>;
    readonly rangeCount: Promise<number>;
    readonly type: Promise<string>;
    addRange(range: IRange): Promise<void>;
    collapse(node: INodeIsolate | null, offset?: number): Promise<void>;
    collapseToEnd(): Promise<void>;
    collapseToStart(): Promise<void>;
    containsNode(node: INodeIsolate, allowPartialContainment?: boolean): Promise<boolean>;
    deleteFromDocument(): Promise<void>;
    empty(): Promise<void>;
    extend(node: INodeIsolate, offset?: number): Promise<void>;
    getRangeAt(index: number): IRange;
    modify(alter: string, direction: string, granularity: string): Promise<void>;
    removeAllRanges(): Promise<void>;
    removeRange(range: IRange): Promise<void>;
    selectAllChildren(node: INodeIsolate): Promise<void>;
    setBaseAndExtent(anchorNode: INodeIsolate, anchorOffset: number, focusNode: INodeIsolate, focusOffset: number): Promise<void>;
    setPosition(node: INodeIsolate | null, offset?: number): Promise<void>;
    toString(): Promise<string>;
}
export interface IShadowRoot extends IDocumentFragment, IDocumentFragment, IDocumentOrShadowRoot {
    readonly delegatesFocus: Promise<boolean>;
    readonly host: ISuperElement;
    readonly innerHTML: Promise<string>;
    readonly mode: Promise<IShadowRootMode>;
}
export interface ISlotable {
    readonly assignedSlot: IHTMLSlotElement;
}
export interface IStorage {
    readonly length: Promise<number>;
    clear(): Promise<undefined>;
    getItem(key: string): Promise<string | null>;
    key(index: number): Promise<string | null>;
    removeItem(key: string): Promise<undefined>;
    setItem(key: string, value: string): Promise<undefined>;
}
export interface IStyleSheet {
}
export interface IText extends ICharacterData, ICharacterData, ISlotable {
    readonly wholeText: Promise<string>;
    splitText(offset: number): Promise<ISuperText>;
}
export interface ITextTrack {
}
export interface ITextTrackCue {
    readonly endTime: Promise<number>;
    readonly id: Promise<string>;
    readonly pauseOnExit: Promise<boolean>;
    readonly startTime: Promise<number>;
    readonly track: ITextTrack;
}
export interface ITextTrackCueList {
    readonly length: Promise<number>;
    getCueById(id: string): ITextTrackCue;
    [Symbol.iterator](): Iterator<ITextTrackCue>;
}
export interface ITextTrackList {
}
export interface ITimeRanges {
    readonly length: Promise<number>;
    end(index: number): Promise<number>;
    start(index: number): Promise<number>;
}
export interface IValidityState {
}
export interface IVideoPlaybackQuality {
}
export interface IVideoTrack {
    readonly id: Promise<string>;
    readonly kind: Promise<string>;
    readonly label: Promise<string>;
    readonly language: Promise<string>;
    readonly selected: Promise<boolean>;
}
export interface IVideoTrackList {
    readonly length: Promise<number>;
    readonly selectedIndex: Promise<number>;
    getTrackById(id: string): IVideoTrack;
    [Symbol.iterator](): Iterator<IVideoTrack>;
}
export interface IXMLSerializer {
    serializeToString(root: INodeIsolate): Promise<string>;
}
export interface IXPathEvaluator extends IXPathEvaluatorBase {
}
export interface IXPathEvaluatorBase {
    createExpression(expression: string, resolver?: IXPathNSResolver | null): IXPathExpression;
    evaluate(expression: string, contextNode: INodeIsolate, resolver?: IXPathNSResolver | null, type?: number, result?: IXPathResult | null): IXPathResult;
}
export interface IXPathExpression {
    evaluate(contextNode: INodeIsolate, type?: number, result?: IXPathResult | null): IXPathResult;
}
export interface IXPathResult {
    readonly ANY_TYPE: number;
    readonly ANY_UNORDERED_NODE_TYPE: number;
    readonly BOOLEAN_TYPE: number;
    readonly FIRST_ORDERED_NODE_TYPE: number;
    readonly NUMBER_TYPE: number;
    readonly ORDERED_NODE_ITERATOR_TYPE: number;
    readonly ORDERED_NODE_SNAPSHOT_TYPE: number;
    readonly STRING_TYPE: number;
    readonly UNORDERED_NODE_ITERATOR_TYPE: number;
    readonly UNORDERED_NODE_SNAPSHOT_TYPE: number;
    readonly booleanValue: Promise<boolean>;
    readonly invalidIteratorState: Promise<boolean>;
    readonly numberValue: Promise<number>;
    readonly resultType: Promise<number>;
    readonly singleNodeValue: ISuperNode;
    readonly snapshotLength: Promise<number>;
    readonly stringValue: Promise<string>;
    iterateNext(): ISuperNode;
    snapshotItem(index: number): ISuperNode;
}
export interface IHTMLAnchorElement extends IHTMLElement, IHTMLElement, IHTMLHyperlinkElementUtils {
    readonly download: Promise<string>;
    readonly hreflang: Promise<string>;
    readonly referrerPolicy: Promise<string>;
    readonly rel: Promise<string>;
    readonly relList: IDOMTokenList;
    readonly target: Promise<string>;
    readonly text: Promise<string>;
    readonly type: Promise<string>;
}
export interface IHTMLAreaElement extends IHTMLElement, IHTMLElement, IHTMLHyperlinkElementUtils {
    readonly alt: Promise<string>;
    readonly coords: Promise<string>;
    readonly download: Promise<string>;
    readonly hreflang: Promise<string>;
    readonly noHref: Promise<boolean>;
    readonly referrerPolicy: Promise<string>;
    readonly rel: Promise<string>;
    readonly relList: IDOMTokenList;
    readonly shape: Promise<string>;
    readonly target: Promise<string>;
    readonly type: Promise<string>;
}
export interface IHTMLAudioElement extends IHTMLMediaElement {
}
export interface IHTMLBRElement extends IHTMLElement {
}
export interface IHTMLBaseElement extends IHTMLElement {
    readonly href: Promise<string>;
    readonly target: Promise<string>;
}
export interface IHTMLBodyElement extends IHTMLElement, IHTMLElement {
    readonly aLink: Promise<string>;
    readonly background: Promise<string>;
    readonly bgColor: Promise<string>;
    readonly link: Promise<string>;
    readonly text: Promise<string>;
    readonly vLink: Promise<string>;
}
export interface IHTMLButtonElement extends IHTMLElement {
    readonly autofocus: Promise<boolean>;
    readonly disabled: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly formAction: Promise<string>;
    readonly formEnctype: Promise<string>;
    readonly formMethod: Promise<string>;
    readonly formNoValidate: Promise<boolean>;
    readonly formTarget: Promise<string>;
    readonly labels: ISuperNodeList;
    readonly name: Promise<string>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly value: Promise<string>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
}
export interface IHTMLCanvasElement extends IHTMLElement {
    readonly height: Promise<number>;
    readonly width: Promise<number>;
    captureStream(frameRequestRate?: number): IMediaStream;
    toDataURL(type?: string, quality?: any): Promise<string>;
    transferControlToOffscreen(): IOffscreenCanvas;
}
export interface IHTMLDListElement extends IHTMLElement {
    readonly compact: Promise<boolean>;
}
export interface IHTMLDataElement extends IHTMLElement {
    readonly value: Promise<string>;
}
export interface IHTMLDataListElement extends IHTMLElement {
    readonly options: Promise<ISuperHTMLCollection>;
}
export interface IHTMLDetailsElement extends IHTMLElement {
    readonly open: Promise<boolean>;
}
export interface IHTMLDialogElement extends IHTMLElement {
    readonly open: Promise<boolean>;
    readonly returnValue: Promise<string>;
    close(returnValue?: string): Promise<void>;
    show(): Promise<void>;
    showModal(): Promise<void>;
}
export interface IHTMLDirectoryElement extends IHTMLElement {
    readonly compact: Promise<boolean>;
}
export interface IHTMLDivElement extends IHTMLElement {
    readonly align: Promise<string>;
}
export interface IHTMLElement extends IElement, IElement, IElementCSSInlineStyle, IElementContentEditable, IHTMLOrSVGElement {
    readonly accessKey: Promise<string>;
    readonly autoCapitalize: Promise<string>;
    readonly dir: Promise<string>;
    readonly draggable: Promise<boolean>;
    readonly hidden: Promise<boolean>;
    readonly inert: Promise<boolean>;
    readonly innerText: Promise<string>;
    readonly lang: Promise<string>;
    readonly offsetHeight: Promise<number>;
    readonly offsetLeft: Promise<number>;
    readonly offsetParent: ISuperElement;
    readonly offsetTop: Promise<number>;
    readonly offsetWidth: Promise<number>;
    readonly spellcheck: Promise<boolean>;
    readonly title: Promise<string>;
    readonly translate: Promise<boolean>;
    click(): Promise<void>;
}
export interface IHTMLEmbedElement extends IHTMLElement {
    readonly align: Promise<string>;
    readonly height: Promise<string>;
    readonly name: Promise<string>;
    readonly src: Promise<string>;
    readonly type: Promise<string>;
    readonly width: Promise<string>;
}
export interface IHTMLFieldSetElement extends IHTMLElement {
    readonly disabled: Promise<boolean>;
    readonly elements: ISuperHTMLCollection;
    readonly form: IHTMLFormElement;
    readonly name: Promise<string>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
}
export interface IHTMLFontElement extends IHTMLElement {
    readonly color: Promise<string>;
    readonly face: Promise<string>;
    readonly size: Promise<string>;
}
export interface IHTMLFormElement extends IHTMLElement {
    readonly acceptCharset: Promise<string>;
    readonly action: Promise<string>;
    readonly autocomplete: Promise<string>;
    readonly encoding: Promise<string>;
    readonly enctype: Promise<string>;
    readonly length: Promise<number>;
    readonly name: Promise<string>;
    readonly noValidate: Promise<boolean>;
    readonly target: Promise<string>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
    reset(): Promise<void>;
    submit(): Promise<void>;
}
export interface IHTMLFrameElement extends IHTMLElement {
    readonly contentDocument: ISuperDocument;
    readonly frameBorder: Promise<string>;
    readonly longDesc: Promise<string>;
    readonly marginHeight: Promise<string>;
    readonly marginWidth: Promise<string>;
    readonly name: Promise<string>;
    readonly noResize: Promise<boolean>;
    readonly scrolling: Promise<string>;
    readonly src: Promise<string>;
}
export interface IHTMLFrameSetElement extends IHTMLElement, IHTMLElement {
    readonly cols: Promise<string>;
    readonly rows: Promise<string>;
}
export interface IHTMLHRElement extends IHTMLElement {
}
export interface IHTMLHeadElement extends IHTMLElement {
}
export interface IHTMLHeadingElement extends IHTMLElement {
    readonly align: Promise<string>;
}
export interface IHTMLHtmlElement extends IHTMLElement {
    readonly version: Promise<string>;
}
export interface IHTMLIFrameElement extends IHTMLElement {
    readonly align: Promise<string>;
    readonly allow: Promise<string>;
    readonly allowFullscreen: Promise<boolean>;
    readonly allowPaymentRequest: Promise<boolean>;
    readonly contentDocument: ISuperDocument;
    readonly csp: Promise<string>;
    readonly featurePolicy: IFeaturePolicy;
    readonly frameBorder: Promise<string>;
    readonly height: Promise<string>;
    readonly longDesc: Promise<string>;
    readonly marginHeight: Promise<string>;
    readonly marginWidth: Promise<string>;
    readonly name: Promise<string>;
    readonly referrerPolicy: Promise<string>;
    readonly sandbox: IDOMTokenList;
    readonly scrolling: Promise<string>;
    readonly src: Promise<string>;
    readonly srcdoc: Promise<string>;
    readonly width: Promise<string>;
}
export interface IHTMLImageElement extends IHTMLElement {
    readonly alt: Promise<string>;
    readonly complete: Promise<boolean>;
    readonly crossOrigin: Promise<string | null>;
    readonly currentSrc: Promise<string>;
    readonly decoding: Promise<string>;
    readonly height: Promise<number>;
    readonly isMap: Promise<boolean>;
    readonly naturalHeight: Promise<number>;
    readonly naturalWidth: Promise<number>;
    readonly referrerPolicy: Promise<string>;
    readonly sizes: Promise<string>;
    readonly src: Promise<string>;
    readonly srcset: Promise<string>;
    readonly useMap: Promise<string>;
    readonly width: Promise<number>;
    readonly x: Promise<number>;
    readonly y: Promise<number>;
    decode(): Promise<void>;
}
export interface IHTMLInputElement extends IHTMLElement {
    readonly accept: Promise<string>;
    readonly alt: Promise<string>;
    readonly autocomplete: Promise<string>;
    readonly autofocus: Promise<boolean>;
    readonly checked: Promise<boolean>;
    readonly defaultChecked: Promise<boolean>;
    readonly defaultValue: Promise<string>;
    readonly dirName: Promise<string>;
    readonly disabled: Promise<boolean>;
    readonly files: IFileList;
    readonly form: IHTMLFormElement;
    readonly formAction: Promise<string>;
    readonly formEnctype: Promise<string>;
    readonly formMethod: Promise<string>;
    readonly formNoValidate: Promise<boolean>;
    readonly formTarget: Promise<string>;
    readonly height: Promise<number>;
    readonly indeterminate: Promise<boolean>;
    readonly inputMode: Promise<string>;
    readonly labels: ISuperNodeList;
    readonly list: ISuperHTMLElement;
    readonly max: Promise<string>;
    readonly maxLength: Promise<number>;
    readonly min: Promise<string>;
    readonly minLength: Promise<number>;
    readonly multiple: Promise<boolean>;
    readonly name: Promise<string>;
    readonly pattern: Promise<string>;
    readonly placeholder: Promise<string>;
    readonly readOnly: Promise<boolean>;
    readonly required: Promise<boolean>;
    readonly selectionDirection: Promise<string | null>;
    readonly selectionEnd: Promise<number | null>;
    readonly selectionStart: Promise<number | null>;
    readonly size: Promise<number>;
    readonly src: Promise<string>;
    readonly step: Promise<string>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly value: Promise<string>;
    readonly valueAsDate: Promise<any>;
    readonly valueAsNumber: Promise<number>;
    readonly width: Promise<number>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
    select(): Promise<void>;
    setRangeText(replacement: string, start?: number, end?: number, selectionMode?: ISelectionMode): Promise<void>;
    setSelectionRange(start: number, end: number, direction?: string): Promise<void>;
    stepDown(n?: number): Promise<void>;
    stepUp(n?: number): Promise<void>;
}
export interface IHTMLLIElement extends IHTMLElement {
    readonly type: Promise<string>;
    readonly value: Promise<number>;
}
export interface IHTMLLabelElement extends IHTMLElement {
    readonly control: ISuperHTMLElement;
    readonly form: IHTMLFormElement;
    readonly htmlFor: Promise<string>;
}
export interface IHTMLLegendElement extends IHTMLElement {
    readonly align: Promise<string>;
    readonly form: IHTMLFormElement;
}
export interface IHTMLLinkElement extends IHTMLElement, IHTMLElement, ILinkStyle {
    readonly as: Promise<string>;
    readonly crossOrigin: Promise<string | null>;
    readonly href: Promise<string>;
    readonly hreflang: Promise<string>;
    readonly media: Promise<string>;
    readonly referrerPolicy: Promise<string>;
    readonly rel: Promise<string>;
    readonly relList: IDOMTokenList;
    readonly sizes: IDOMTokenList;
    readonly type: Promise<string>;
}
export interface IHTMLMapElement extends IHTMLElement {
    readonly areas: ISuperHTMLCollection;
    readonly name: Promise<string>;
}
export interface IHTMLMetaElement extends IHTMLElement {
    readonly content: Promise<string>;
    readonly httpEquiv: Promise<string>;
    readonly name: Promise<string>;
    readonly scheme: Promise<string>;
}
export interface IHTMLMeterElement extends IHTMLElement {
    readonly high: Promise<number>;
    readonly labels: ISuperNodeList;
    readonly low: Promise<number>;
    readonly max: Promise<number>;
    readonly min: Promise<number>;
    readonly optimum: Promise<number>;
    readonly value: Promise<number>;
}
export interface IHTMLModElement extends IHTMLElement {
    readonly cite: Promise<string>;
    readonly dateTime: Promise<string>;
}
export interface IHTMLOListElement extends IHTMLElement {
    readonly compact: Promise<boolean>;
    readonly reversed: Promise<boolean>;
    readonly start: Promise<number>;
    readonly type: Promise<string>;
}
export interface IHTMLObjectElement extends IHTMLElement {
    readonly align: Promise<string>;
    readonly archive: Promise<string>;
    readonly border: Promise<string>;
    readonly code: Promise<string>;
    readonly codeBase: Promise<string>;
    readonly codeType: Promise<string>;
    readonly contentDocument: ISuperDocument;
    readonly data: Promise<string>;
    readonly declare: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly height: Promise<string>;
    readonly hspace: Promise<number>;
    readonly name: Promise<string>;
    readonly standby: Promise<string>;
    readonly type: Promise<string>;
    readonly useMap: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly vspace: Promise<number>;
    readonly width: Promise<string>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
}
export interface IHTMLOptGroupElement extends IHTMLElement {
    readonly disabled: Promise<boolean>;
    readonly label: Promise<string>;
}
export interface IHTMLOptionElement extends IHTMLElement {
    readonly defaultSelected: Promise<boolean>;
    readonly disabled: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly index: Promise<number>;
    readonly label: Promise<string>;
    readonly selected: Promise<boolean>;
    readonly text: Promise<string>;
    readonly value: Promise<string>;
}
export interface IHTMLParagraphElement extends IHTMLElement {
    readonly align: Promise<string>;
}
export interface IHTMLParamElement extends IHTMLElement {
    readonly name: Promise<string>;
    readonly type: Promise<string>;
    readonly value: Promise<string>;
    readonly valueType: Promise<string>;
}
export interface IHTMLPreElement extends IHTMLElement {
    readonly width: Promise<number>;
}
export interface IHTMLProgressElement extends IHTMLElement {
    readonly labels: ISuperNodeList;
    readonly max: Promise<number>;
    readonly position: Promise<number>;
    readonly value: Promise<number>;
}
export interface IHTMLQuoteElement extends IHTMLElement {
    readonly cite: Promise<string>;
}
export interface IHTMLScriptElement extends IHTMLElement {
    readonly async: Promise<boolean>;
    readonly charset: Promise<string>;
    readonly crossOrigin: Promise<string | null>;
    readonly defer: Promise<boolean>;
    readonly event: Promise<string>;
    readonly noModule: Promise<boolean>;
    readonly referrerPolicy: Promise<string>;
    readonly src: Promise<string>;
    readonly text: Promise<string>;
    readonly type: Promise<string>;
}
export interface IHTMLSelectElement extends IHTMLElement {
    readonly autocomplete: Promise<string>;
    readonly autofocus: Promise<boolean>;
    readonly disabled: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly labels: ISuperNodeList;
    readonly length: Promise<number>;
    readonly multiple: Promise<boolean>;
    readonly name: Promise<string>;
    readonly options: IHTMLOptionsCollection;
    readonly required: Promise<boolean>;
    readonly selectedIndex: Promise<number>;
    readonly selectedOptions: ISuperHTMLCollection;
    readonly size: Promise<number>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly value: Promise<string>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    item(index: number): ISuperElement;
    namedItem(name: string): IHTMLOptionElement;
    reportValidity(): Promise<boolean>;
    [Symbol.iterator](): Iterator<ISuperElement>;
    [index: number]: ISuperElement;
}
export interface IHTMLSlotElement extends IHTMLElement {
    readonly name: Promise<string>;
    assignedElements(options?: IAssignedNodesOptions): Promise<Iterable<ISuperElement>>;
    assignedNodes(options?: IAssignedNodesOptions): Promise<Iterable<ISuperNode>>;
}
export interface IHTMLSourceElement extends IHTMLElement {
    readonly media: Promise<string>;
    readonly sizes: Promise<string>;
    readonly src: Promise<string>;
    readonly srcset: Promise<string>;
    readonly type: Promise<string>;
}
export interface IHTMLSpanElement extends IHTMLElement {
}
export interface IHTMLStyleElement extends IHTMLElement, IHTMLElement, ILinkStyle {
    readonly media: Promise<string>;
    readonly type: Promise<string>;
}
export interface IHTMLTableCaptionElement extends IHTMLElement {
}
export interface IHTMLTableCellElement extends IHTMLElement {
}
export interface IHTMLTableColElement extends IHTMLElement {
    readonly align: Promise<string>;
    readonly ch: Promise<string>;
    readonly chOff: Promise<string>;
    readonly span: Promise<number>;
    readonly vAlign: Promise<string>;
    readonly width: Promise<string>;
}
export interface IHTMLTableElement extends IHTMLElement {
    readonly align: Promise<string>;
    readonly bgColor: Promise<string>;
    readonly border: Promise<string>;
    readonly caption: IHTMLTableCaptionElement;
    readonly cellPadding: Promise<string>;
    readonly cellSpacing: Promise<string>;
    readonly frame: Promise<string>;
    readonly rows: ISuperHTMLCollection;
    readonly rules: Promise<string>;
    readonly summary: Promise<string>;
    readonly tBodies: ISuperHTMLCollection;
    readonly tFoot: IHTMLTableSectionElement;
    readonly tHead: IHTMLTableSectionElement;
    readonly width: Promise<string>;
}
export interface IHTMLTableRowElement extends IHTMLElement {
    readonly align: Promise<string>;
    readonly bgColor: Promise<string>;
    readonly cells: ISuperHTMLCollection;
    readonly ch: Promise<string>;
    readonly chOff: Promise<string>;
    readonly rowIndex: Promise<number>;
    readonly sectionRowIndex: Promise<number>;
    readonly vAlign: Promise<string>;
    deleteCell(index: number): Promise<void>;
    insertCell(index?: number): IHTMLTableCellElement;
}
export interface IHTMLTableSectionElement extends IHTMLElement {
    readonly align: Promise<string>;
    readonly ch: Promise<string>;
    readonly chOff: Promise<string>;
    readonly rows: ISuperHTMLCollection;
    readonly vAlign: Promise<string>;
}
export interface IHTMLTemplateElement extends IHTMLElement {
    readonly content: IDocumentFragment;
}
export interface IHTMLTextAreaElement extends IHTMLElement {
    readonly autocomplete: Promise<string>;
    readonly autofocus: Promise<boolean>;
    readonly cols: Promise<number>;
    readonly defaultValue: Promise<string>;
    readonly disabled: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly inputMode: Promise<string>;
    readonly labels: ISuperNodeList;
    readonly maxLength: Promise<number>;
    readonly minLength: Promise<number>;
    readonly name: Promise<string>;
    readonly placeholder: Promise<string>;
    readonly readOnly: Promise<boolean>;
    readonly required: Promise<boolean>;
    readonly rows: Promise<number>;
    readonly selectionDirection: Promise<string>;
    readonly selectionEnd: Promise<number>;
    readonly selectionStart: Promise<number>;
    readonly textLength: Promise<number>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly value: Promise<string>;
    readonly willValidate: Promise<boolean>;
    readonly wrap: Promise<string>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
    select(): Promise<void>;
    setCustomValidity(error: string): Promise<void>;
    setRangeText(replacement: string, start?: number, end?: number, selectionMode?: ISelectionMode): Promise<void>;
    setSelectionRange(start: number, end: number, direction?: string): Promise<void>;
}
export interface IHTMLTimeElement extends IHTMLElement {
    readonly dateTime: Promise<string>;
}
export interface IHTMLTitleElement extends IHTMLElement {
    readonly text: Promise<string>;
}
export interface IHTMLTrackElement extends IHTMLElement {
    readonly ERROR: number;
    readonly LOADED: number;
    readonly LOADING: number;
    readonly NONE: number;
    readonly default: Promise<boolean>;
    readonly kind: Promise<string>;
    readonly label: Promise<string>;
    readonly readyState: Promise<number>;
    readonly src: Promise<string>;
    readonly srclang: Promise<string>;
    readonly track: Promise<ITextTrack>;
}
export interface IHTMLUListElement extends IHTMLElement {
    readonly compact: Promise<boolean>;
    readonly type: Promise<string>;
}
export interface IHTMLVideoElement extends IHTMLMediaElement {
    readonly height: Promise<number>;
    readonly poster: Promise<string>;
    readonly videoHeight: Promise<number>;
    readonly videoWidth: Promise<number>;
    readonly width: Promise<number>;
    getVideoPlaybackQuality(): IVideoPlaybackQuality;
}
