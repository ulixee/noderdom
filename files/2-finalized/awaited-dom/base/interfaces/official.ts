// tslint:disable: prettier
/// <reference no-default-lib="true"/>
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { ISuperElement, ISuperHTMLCollection, ISuperHTMLElement, ISuperNodeList, ISuperNode, ISuperDocument, ISuperText } from './super';

export type IDocumentReadyState = 'complete' | 'interactive' | 'loading';

export type IEndingType = 'native' | 'transparent';

export type IFullscreenNavigationUI = 'auto' | 'hide' | 'show';

export type IReferrerPolicy = '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';

export type IRequestCache = 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';

export type IRequestCredentials = 'include' | 'omit' | 'same-origin';

export type IRequestDestination = '' | 'audio' | 'audioworklet' | 'document' | 'embed' | 'font' | 'frame' | 'iframe' | 'image' | 'manifest' | 'object' | 'paintworklet' | 'report' | 'script' | 'sharedworker' | 'style' | 'track' | 'video' | 'worker' | 'xslt';

export type IRequestMode = 'cors' | 'navigate' | 'no-cors' | 'same-origin';

export type IRequestRedirect = 'error' | 'follow' | 'manual';

export type IResponseType = 'basic' | 'cors' | 'default' | 'error' | 'opaque' | 'opaqueredirect';

export type IScrollBehavior = 'auto' | 'smooth';

export type IScrollLogicalPosition = 'center' | 'end' | 'nearest' | 'start';

export type ISelectionMode = 'end' | 'preserve' | 'select' | 'start';

export type IVisibilityState = 'hidden' | 'prerender' | 'visible';

export type IBufferSource = ArrayBufferView | ArrayBuffer;

export type IBlobPart = IBufferSource | IBlob | string;

export type IHeadersInit = Iterable<Iterable<string>> | Record<string, string>;

export type IBodyInit = IBufferSource | string;

export type IRequestInfo = IRequest | string;

export interface IBlobPropertyBag {
  endings?: IEndingType;
  type?: string;
}

export interface IFullscreenOptions {
  navigationUI?: IFullscreenNavigationUI;
}

export interface IGetRootNodeOptions {
  composed?: boolean;
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

export type IXPathNSResolver = ((prefix: string | null) => string | null) | { lookupNamespaceURI(prefix: string | null): string | null };

// Attr //////////

export interface IAttr extends INode {
  readonly localName: Promise<string>;
  readonly name: Promise<string>;
  readonly namespaceURI: Promise<string | null>;
  readonly ownerElement: ISuperElement;
  readonly prefix: Promise<string | null>;
  readonly specified: Promise<boolean>;
  readonly value: Promise<string>;
}

// Blob //////////

export interface IBlob {
  // constructor(blobParts?: Iterable<IBlobPart>, options?: IBlobPropertyBag)

  readonly size: Promise<number>;
  readonly type: Promise<string>;

  arrayBuffer(): Promise<ArrayBuffer>;
  slice(start?: number, end?: number, contentType?: string): Promise<IBlob>;
  text(): Promise<string>;
}

// Body //////////

export interface IBody {
  readonly bodyUsed: Promise<boolean>;

  arrayBuffer(): Promise<ArrayBuffer>;
  json(): Promise<any>;
  text(): Promise<string>;
}

// CharacterData //////////

export interface ICharacterData extends INode, INode, INonDocumentTypeChildNode {
  readonly data: Promise<string>;
  readonly length: Promise<number>;

  substringData(offset: number, count: number): Promise<string>;
}

// DOMImplementation //////////

export interface IDOMImplementation {
  hasFeature(): Promise<boolean>;
}

// DOMRect //////////

export interface IDOMRect {
  // constructor(x?: number, y?: number, width?: number, height?: number)

  readonly height: Promise<number>;
  readonly width: Promise<number>;
  readonly x: Promise<number>;
  readonly y: Promise<number>;
}

// DOMRectList //////////

export interface IDOMRectList {
  readonly length: Promise<number>;

  item(index: number): IDOMRect;

  [Symbol.iterator](): IterableIterator<IDOMRect>;

  [index: number]: IDOMRect;
}

// DOMTokenList //////////

export interface IDOMTokenList {}

// Document //////////

export interface IDocument extends INode, INode, INonElementParentNode, IParentNode, IXPathEvaluatorBase {
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

// DocumentType //////////

export interface IDocumentType extends INode, INode {
  readonly name: Promise<string>;
  readonly publicId: Promise<string>;
  readonly systemId: Promise<string>;
}

// Element //////////

export interface IElement extends INode, INode, INonDocumentTypeChildNode, IParentNode {
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

// FeaturePolicy //////////

export interface IFeaturePolicy {}

// HTMLCollection //////////

export interface IHTMLCollection extends IHTMLCollectionBase {
  namedItem(name: string): ISuperElement;


}

// HTMLCollectionBase //////////

export interface IHTMLCollectionBase {
  readonly length: Promise<number>;

  item(index: number): ISuperElement;

  [Symbol.iterator](): IterableIterator<ISuperElement>;

  [index: number]: ISuperElement;
}

// HTMLOptionsCollection //////////

export interface IHTMLOptionsCollection extends IHTMLCollection {}

// HTMLOrSVGElement //////////

export interface IHTMLOrSVGElement {
  blur(): Promise<void>;
  focus(): Promise<void>;
}

// Headers //////////

export interface IHeaders {
  // constructor(init?: IHeadersInit)

  append(name: string, value: string): Promise<void>;
  delete(name: string): Promise<void>;
  get(name: string): Promise<string | null>;
  has(name: string): Promise<boolean>;
  set(name: string, value: string): Promise<void>;

  forEach(callbackfn: (value: string, key: string, parent: IHeaders) => void, thisArg?: any): Promise<void>;
  entries(): Promise<IterableIterator<[string, string]>>;
  keys(): Promise<IterableIterator<string>>;
  values(): Promise<IterableIterator<string>>;
  [Symbol.iterator](): IterableIterator<[string, string]>;
}

// Location //////////

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

// NamedNodeMap //////////

export interface INamedNodeMap {
  readonly length: Promise<number>;

  getNamedItem(qualifiedName: string): Promise<IAttr | null>;
  getNamedItemNS(namespace: string | null, localName: string): Promise<IAttr | null>;
  item(index: number): Promise<IAttr | null>;

  [Symbol.iterator](): IterableIterator<IAttr>;

  [index: number]: IAttr;
}

// Node //////////

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

  compareDocumentPosition(other: ISuperNode): Promise<number>;
  contains(other: ISuperNode | null): Promise<boolean>;
  getRootNode(options?: IGetRootNodeOptions): ISuperNode;
  hasChildNodes(): Promise<boolean>;
  isDefaultNamespace(namespace: string | null): Promise<boolean>;
  isEqualNode(otherNode: ISuperNode | null): Promise<boolean>;
  isSameNode(otherNode: ISuperNode | null): Promise<boolean>;
  lookupNamespaceURI(prefix: string | null): Promise<string | null>;
  lookupPrefix(namespace: string | null): Promise<string | null>;
  normalize(): Promise<void>;
}

// NodeList //////////

export interface INodeList {
  readonly length: Promise<number>;

  item(index: number): ISuperNode;

  forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeList) => void, thisArg?: any): Promise<void>;
  entries(): Promise<IterableIterator<[number, ISuperNode]>>;
  keys(): Promise<IterableIterator<number>>;
  values(): Promise<IterableIterator<ISuperNode>>;
  [Symbol.iterator](): IterableIterator<ISuperNode>;

  [index: number]: ISuperNode;
}

// NonDocumentTypeChildNode //////////

export interface INonDocumentTypeChildNode {
  readonly nextElementSibling: ISuperElement;
  readonly previousElementSibling: ISuperElement;
}

// NonElementParentNode //////////

export interface INonElementParentNode {
  getElementById(elementId: string): ISuperElement;
}

// ParentNode //////////

export interface IParentNode {
  readonly childElementCount: Promise<number>;
  readonly children: ISuperHTMLCollection;
  readonly firstElementChild: ISuperElement;
  readonly lastElementChild: ISuperElement;

  querySelector(selectors: string): ISuperElement;
  querySelectorAll(selectors: string): ISuperNodeList;
}

// RadioNodeList //////////

export interface IRadioNodeList extends INodeList {
  readonly value: Promise<string>;
}

// Request //////////

export interface IRequest extends IBody {
  // constructor(input: IRequestInfo, init?: IRequestInit)

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

// Response //////////

export interface IResponse extends IBody {
  // constructor(body?: IBodyInit | null, init?: IResponseInit)

  readonly headers: IHeaders;
  readonly ok: Promise<boolean>;
  readonly redirected: Promise<boolean>;
  readonly status: Promise<number>;
  readonly statusText: Promise<string>;
  readonly type: Promise<IResponseType>;
  readonly url: Promise<string>;
}

// ShadowRoot //////////

export interface IShadowRoot {}

// StyleSheet //////////

export interface IStyleSheet {}

// Text //////////

export interface IText extends ICharacterData, ICharacterData {
  // constructor(data?: string)

  readonly wholeText: Promise<string>;

  splitText(offset: number): Promise<ISuperText>;
}

// ValidityState //////////

export interface IValidityState {}

// XPathEvaluatorBase //////////

export interface IXPathEvaluatorBase {
  createExpression(expression: string, resolver?: IXPathNSResolver | null): IXPathExpression;
  evaluate(expression: string, contextNode: ISuperNode, resolver?: IXPathNSResolver | null, type?: number, result?: IXPathResult | null): IXPathResult;
}

// XPathExpression //////////

export interface IXPathExpression {
  evaluate(contextNode: ISuperNode, type?: number, result?: IXPathResult | null): IXPathResult;
}

// XPathResult //////////

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

// HTML ELEMENTS

// HTMLButtonElement //////////

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

// HTMLElement //////////

export interface IHTMLElement extends IElement, IElement, IHTMLOrSVGElement {
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

// HTMLFieldSetElement //////////

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

// HTMLFormElement //////////

export interface IHTMLFormElement extends IHTMLElement {}

// HTMLHeadElement //////////

export interface IHTMLHeadElement extends IHTMLElement {}

// HTMLInputElement //////////

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

// HTMLLabelElement //////////

export interface IHTMLLabelElement extends IHTMLElement {
  readonly control: ISuperHTMLElement;
  readonly form: IHTMLFormElement;
  readonly htmlFor: Promise<string>;
}

// HTMLOptGroupElement //////////

export interface IHTMLOptGroupElement extends IHTMLElement {
  readonly disabled: Promise<boolean>;
  readonly label: Promise<string>;
}

// HTMLOptionElement //////////

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

// HTMLSelectElement //////////

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

  [Symbol.iterator](): IterableIterator<ISuperElement>;

  [index: number]: ISuperElement;
}

// HTMLTextAreaElement //////////

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

// SVG ELEMENTS


