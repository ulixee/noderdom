// tslint:disable: prettier
/// <reference no-default-lib="true"/>
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { INode, IParentNode, IHTMLCollection, IHTMLElement, IDocumentType, IElement, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation, INodeList, INamedNodeMap, IDOMTokenList, IShadowRoot, IAttr, IDOMRect, IDOMRectList, IDocument, ICharacterData, IText } from './official';
import { IDocumentReadyState, IVisibilityState, IFullscreenOptions, IScrollIntoViewOptions, IGetRootNodeOptions } from './basic';
import { IHTMLElementIsolate, IHTMLHeadElementIsolate, IAttrIsolate, ICharacterDataIsolate, IDocumentIsolate, IDocumentTypeIsolate, IElementIsolate, ITextIsolate } from './isolate';

// SuperDocument //////////

export interface ISuperDocument extends INode, IParentNode {
  readonly URL: Promise<string>;
  readonly anchors: IHTMLCollection;
  readonly body: IHTMLElement;
  readonly characterSet: Promise<string>;
  readonly compatMode: Promise<string>;
  readonly contentType: Promise<string>;
  readonly cookie: Promise<string>;
  readonly designMode: Promise<string>;
  readonly dir: Promise<string>;
  readonly doctype: IDocumentType;
  readonly documentElement: IElement;
  readonly documentURI: Promise<string>;
  readonly domain: Promise<string>;
  readonly embeds: IHTMLCollection;
  readonly featurePolicy: IFeaturePolicy;
  readonly forms: IHTMLCollection;
  readonly fullscreenEnabled: Promise<boolean>;
  readonly head: IHTMLHeadElement;
  readonly hidden: Promise<boolean>;
  readonly images: IHTMLCollection;
  readonly implementation: IDOMImplementation;
  readonly lastModified: Promise<string>;
  readonly links: IHTMLCollection;
  readonly location: ILocation;
  readonly plugins: IHTMLCollection;
  readonly readyState: Promise<IDocumentReadyState>;
  readonly referrer: Promise<string>;
  readonly scripts: IHTMLCollection;
  readonly scrollingElement: IElement;
  readonly title: Promise<string>;
  readonly visibilityState: Promise<IVisibilityState>;

  exitFullscreen(): Promise<Promise<void>>;
  exitPointerLock(): Promise<void>;
  getElementsByClassName(classNames: string): Promise<IHTMLCollection>;
  getElementsByName(elementName: string): Promise<INodeList>;
  getElementsByTagName(qualifiedName: string): Promise<IHTMLCollection>;
  getElementsByTagNameNS(namespace: string | null, localName: string): Promise<IHTMLCollection>;
  hasFocus(): Promise<boolean>;
}

// SuperElement //////////

export interface ISuperElement extends IHTMLElementIsolate, IHTMLHeadElementIsolate, INode, IParentNode {
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

  closest(selectors: string): Promise<IElement | null>;
  getAttribute(qualifiedName: string): Promise<string | null>;
  getAttributeNS(namespace: string | null, localName: string): Promise<string | null>;
  getAttributeNames(): Promise<Iterable<string>>;
  getAttributeNode(qualifiedName: string): Promise<IAttr | null>;
  getAttributeNodeNS(namespace: string | null, localName: string): Promise<IAttr | null>;
  getBoundingClientRect(): Promise<IDOMRect>;
  getClientRects(): Promise<IDOMRectList>;
  getElementsByClassName(classNames: string): Promise<IHTMLCollection>;
  getElementsByTagName(qualifiedName: string): Promise<IHTMLCollection>;
  getElementsByTagNameNS(namespace: string | null, localName: string): Promise<IHTMLCollection>;
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

export interface ISuperNode extends IAttrIsolate, ICharacterDataIsolate, IDocumentIsolate, IDocumentTypeIsolate, IElementIsolate, IHTMLElementIsolate, IHTMLHeadElementIsolate, ITextIsolate {
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
  readonly childNodes: INodeList;
  readonly firstChild: INode;
  readonly isConnected: Promise<boolean>;
  readonly lastChild: INode;
  readonly nextSibling: INode;
  readonly nodeName: Promise<string>;
  readonly nodeType: Promise<number>;
  readonly nodeValue: Promise<string | null>;
  readonly ownerDocument: IDocument;
  readonly parentElement: IElement;
  readonly parentNode: INode;
  readonly previousSibling: INode;
  readonly textContent: Promise<string | null>;

  compareDocumentPosition(other: INode): Promise<number>;
  contains(other: INode | null): Promise<boolean>;
  getRootNode(options?: IGetRootNodeOptions): Promise<INode>;
  hasChildNodes(): Promise<boolean>;
  isDefaultNamespace(namespace: string | null): Promise<boolean>;
  isEqualNode(otherNode: INode | null): Promise<boolean>;
  isSameNode(otherNode: INode | null): Promise<boolean>;
  lookupNamespaceURI(prefix: string | null): Promise<string | null>;
  lookupPrefix(namespace: string | null): Promise<string | null>;
  normalize(): Promise<void>;
}

// SuperNodeList //////////

export interface ISuperNodeList {
  readonly length: Promise<number>;

  item(index: number): Promise<INode | null>;

  forEach(callbackfn: (value: INode, key: number, parent: ISuperNodeList) => void, thisArg?: any): void;
  entries(): IterableIterator<[number, INode]>;
  keys(): IterableIterator<number>;
  values(): IterableIterator<INode>;
  [Symbol.iterator](): IterableIterator<INode>;
}

// SuperHTMLCollection //////////

export interface ISuperHTMLCollection {
  namedItem(name: string): Promise<IElement | null>;
}

// SuperText //////////

export interface ISuperText extends ICharacterData, INode {
  // constructor(data?: string)

  readonly wholeText: Promise<string>;

  splitText(offset: number): Promise<IText>;
}

// SuperCharacterData //////////

export interface ISuperCharacterData extends INode, ITextIsolate {
  readonly data: Promise<string>;
  readonly length: Promise<number>;

  substringData(offset: number, count: number): Promise<string>;
}

// SuperStyleSheet //////////

export interface ISuperStyleSheet {}

// HTML ELEMENTS

// SuperHTMLElement //////////

export interface ISuperHTMLElement extends IElement, IHTMLHeadElementIsolate, INode {
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
  readonly offsetParent: IElement;
  readonly offsetTop: Promise<number>;
  readonly offsetWidth: Promise<number>;
  readonly spellcheck: Promise<boolean>;
  readonly title: Promise<string>;
  readonly translate: Promise<boolean>;

  click(): Promise<void>;
}

// SVG ELEMENTS


