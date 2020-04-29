// tslint:disable: prettier
/// <reference no-default-lib="true"/>
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { IElement, IText, IHTMLCollection, IHTMLElement, IDocumentType, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation, INodeList, INamedNodeMap, IDOMTokenList, IShadowRoot, IAttr, IDOMRect, IDOMRectList } from './official';
import { IDocumentReadyState, IVisibilityState, IFullscreenOptions, IScrollIntoViewOptions } from './basic';

// AttrIsolate //////////

export interface IAttrIsolate {
  readonly localName: Promise<string>;
  readonly name: Promise<string>;
  readonly namespaceURI: Promise<string | null>;
  readonly ownerElement: IElement;
  readonly prefix: Promise<string | null>;
  readonly specified: Promise<boolean>;
  readonly value: Promise<string>;
}

// CharacterDataIsolate //////////

export interface ICharacterDataIsolate {
  readonly data: Promise<string>;
  readonly length: Promise<number>;

  substringData(offset: number, count: number): Promise<string>;
}

// TextIsolate //////////

export interface ITextIsolate {
  // constructor(data?: string)

  readonly wholeText: Promise<string>;

  splitText(offset: number): Promise<IText>;
}

// DocumentIsolate //////////

export interface IDocumentIsolate {
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

// DocumentTypeIsolate //////////

export interface IDocumentTypeIsolate {
  readonly name: Promise<string>;
  readonly publicId: Promise<string>;
  readonly systemId: Promise<string>;
}

// ElementIsolate //////////

export interface IElementIsolate {
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

// HTML ELEMENTS

// HTMLElementIsolate //////////

export interface IHTMLElementIsolate {
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

// HTMLHeadElementIsolate //////////

export interface IHTMLHeadElementIsolate {}

// SVG ELEMENTS


