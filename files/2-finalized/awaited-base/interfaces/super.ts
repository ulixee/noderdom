// tslint:disable: prettier
/// <reference no-default-lib="true"/>
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { INodeIsolate, IElementIsolate, IHTMLElementIsolate, IHTMLHeadElementIsolate, IHTMLInputElementIsolate, IAttrIsolate, ICharacterDataIsolate, IDocumentIsolate, IDocumentTypeIsolate, ITextIsolate, IHTMLCollectionBaseIsolate } from './isolate';
import { IParentNode, IDocumentType, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation, IHTMLOrSVGElement, INamedNodeMap, IDOMTokenList, IShadowRoot, IAttr, IDOMRect, IDOMRectList } from './official';
import { IDocumentReadyState, IVisibilityState, IFullscreenOptions, IScrollIntoViewOptions, IGetRootNodeOptions } from './basic';

// SuperDocument //////////

export interface ISuperDocument extends INodeIsolate, IParentNode {
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

  exitFullscreen(): Promise<Promise<void>>;
  exitPointerLock(): Promise<void>;
  getElementsByClassName(classNames: string): ISuperHTMLCollection;
  getElementsByName(elementName: string): ISuperNodeList;
  getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
  getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
  hasFocus(): Promise<boolean>;
}

// SuperElement //////////

export interface ISuperElement extends IElementIsolate, IHTMLElementIsolate, IHTMLHeadElementIsolate, IHTMLInputElementIsolate, IHTMLOrSVGElement, INodeIsolate, IParentNode {
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

  closest(selectors: string): Promise<ISuperElement | null>;
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
  requestFullscreen(options?: IFullscreenOptions): Promise<Promise<void>>;
  requestPointerLock(): Promise<void>;
  scrollIntoView(arg?: boolean | IScrollIntoViewOptions): Promise<void>;
}

// SuperNode //////////

export interface ISuperNode extends IAttrIsolate, ICharacterDataIsolate, IDocumentIsolate, IDocumentTypeIsolate, IElementIsolate, IHTMLElementIsolate, IHTMLHeadElementIsolate, IHTMLInputElementIsolate, IHTMLOrSVGElement, INodeIsolate, IParentNode, ITextIsolate {
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
  getRootNode(options?: IGetRootNodeOptions): Promise<ISuperNode>;
  hasChildNodes(): Promise<boolean>;
  isDefaultNamespace(namespace: string | null): Promise<boolean>;
  isEqualNode(otherNode: ISuperNode | null): Promise<boolean>;
  isSameNode(otherNode: ISuperNode | null): Promise<boolean>;
  lookupNamespaceURI(prefix: string | null): Promise<string | null>;
  lookupPrefix(namespace: string | null): Promise<string | null>;
  normalize(): Promise<void>;
}

// SuperNodeList //////////

export interface ISuperNodeList {
  readonly length: Promise<number>;

  item(index: number): Promise<ISuperNode | null>;

  forEach(callbackfn: (value: ISuperNode, key: number, parent: ISuperNodeList) => void, thisArg?: any): Promise<void>;
  entries(): Promise<IterableIterator<[number, ISuperNode]>>;
  keys(): Promise<IterableIterator<number>>;
  values(): Promise<IterableIterator<ISuperNode>>;
  [Symbol.iterator](): IterableIterator<ISuperNode>;
}

// SuperHTMLCollection //////////

export interface ISuperHTMLCollection extends IHTMLCollectionBaseIsolate {
  namedItem(name: string): Promise<ISuperElement | null>;

  [Symbol.iterator](): IterableIterator<ISuperElement>;
}

// SuperText //////////

export interface ISuperText extends ICharacterDataIsolate, INodeIsolate {
  // constructor(data?: string)

  readonly wholeText: Promise<string>;

  splitText(offset: number): Promise<ISuperText>;
}

// SuperCharacterData //////////

export interface ISuperCharacterData extends ICharacterDataIsolate, INodeIsolate, ITextIsolate {
  readonly data: Promise<string>;
  readonly length: Promise<number>;

  substringData(offset: number, count: number): Promise<string>;
}

// SuperStyleSheet //////////

export interface ISuperStyleSheet {}

// HTML ELEMENTS

// SuperHTMLElement //////////

export interface ISuperHTMLElement extends IElementIsolate, IHTMLElementIsolate, IHTMLHeadElementIsolate, IHTMLInputElementIsolate, IHTMLOrSVGElement, INodeIsolate, IParentNode {
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

// SVG ELEMENTS


