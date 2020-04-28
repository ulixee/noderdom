import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import { IElementIsolate } from '../interfaces/isolate';
import { INamedNodeMap, IDOMTokenList, IShadowRoot, IElement, IAttr, IDOMRect, IDOMRectList, IHTMLCollection } from '../interfaces/official';
import { IFullscreenOptions, IScrollIntoViewOptions } from '../interfaces/basic';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IElementIsolate, IElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IElementIsolate>('ElementIsolate', getState, setState);

export default class ElementIsolate implements IElementIsolate {
  public get attributes(): INamedNodeMap {
    throw new Error('ElementIsolate.attributes getter not implemented');
  }

  public get classList(): IDOMTokenList {
    throw new Error('ElementIsolate.classList getter not implemented');
  }

  public get className(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'className', false);
  }

  public get clientHeight(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'clientHeight', false);
  }

  public get clientLeft(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'clientLeft', false);
  }

  public get clientTop(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'clientTop', false);
  }

  public get clientWidth(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'clientWidth', false);
  }

  public get id(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'id', false);
  }

  public get innerHTML(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'innerHTML', false);
  }

  public get localName(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'localName', false);
  }

  public get namespaceURI(): Promise<string | null> {
    return awaitedHandler.getProperty<string | null>(this, 'namespaceURI', true);
  }

  public get outerHTML(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'outerHTML', false);
  }

  public get part(): IDOMTokenList {
    throw new Error('ElementIsolate.part getter not implemented');
  }

  public get prefix(): Promise<string | null> {
    return awaitedHandler.getProperty<string | null>(this, 'prefix', true);
  }

  public get scrollHeight(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'scrollHeight', false);
  }

  public get scrollLeft(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'scrollLeft', false);
  }

  public get scrollTop(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'scrollTop', false);
  }

  public get scrollWidth(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'scrollWidth', false);
  }

  public get shadowRoot(): IShadowRoot {
    throw new Error('ElementIsolate.shadowRoot getter not implemented');
  }

  public get slot(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'slot', false);
  }

  public get tagName(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'tagName', false);
  }

  // methods

  public closest(selectors: string): IElement {
    throw new Error('ElementIsolate.closest not implemented');
  }

  public getAttribute(qualifiedName: string): Promise<string | null> {
    return awaitedHandler.runMethod<string | null>(this, 'getAttribute', [qualifiedName]);
  }

  public getAttributeNS(namespace: string | null, localName: string): Promise<string | null> {
    return awaitedHandler.runMethod<string | null>(this, 'getAttributeNS', [namespace, localName]);
  }

  public getAttributeNames(): Promise<Iterable<string>> {
    return awaitedHandler.runMethod<Iterable<string>>(this, 'getAttributeNames', []);
  }

  public getAttributeNode(qualifiedName: string): IAttr {
    throw new Error('ElementIsolate.getAttributeNode not implemented');
  }

  public getAttributeNodeNS(namespace: string | null, localName: string): IAttr {
    throw new Error('ElementIsolate.getAttributeNodeNS not implemented');
  }

  public getBoundingClientRect(): IDOMRect {
    throw new Error('ElementIsolate.getBoundingClientRect not implemented');
  }

  public getClientRects(): IDOMRectList {
    throw new Error('ElementIsolate.getClientRects not implemented');
  }

  public getElementsByClassName(classNames: string): IHTMLCollection {
    throw new Error('ElementIsolate.getElementsByClassName not implemented');
  }

  public getElementsByTagName(qualifiedName: string): IHTMLCollection {
    throw new Error('ElementIsolate.getElementsByTagName not implemented');
  }

  public getElementsByTagNameNS(namespace: string | null, localName: string): IHTMLCollection {
    throw new Error('ElementIsolate.getElementsByTagNameNS not implemented');
  }

  public hasAttribute(qualifiedName: string): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'hasAttribute', [qualifiedName]);
  }

  public hasAttributeNS(namespace: string | null, localName: string): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'hasAttributeNS', [namespace, localName]);
  }

  public hasAttributes(): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'hasAttributes', []);
  }

  public hasPointerCapture(pointerId: number): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'hasPointerCapture', [pointerId]);
  }

  public matches(selectors: string): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'matches', [selectors]);
  }

  public requestFullscreen(options?: IFullscreenOptions): Promise<Promise<void>> {
    return awaitedHandler.runMethod<Promise<void>>(this, 'requestFullscreen', [options]);
  }

  public requestPointerLock(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'requestPointerLock', []);
  }

  public scrollIntoView(arg?: boolean | IScrollIntoViewOptions): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'scrollIntoView', [arg]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IElementIsolateProperties {
  readonly attributes?: INamedNodeMap;
  readonly classList?: IDOMTokenList;
  readonly className?: Promise<string>;
  readonly clientHeight?: Promise<number>;
  readonly clientLeft?: Promise<number>;
  readonly clientTop?: Promise<number>;
  readonly clientWidth?: Promise<number>;
  readonly id?: Promise<string>;
  readonly innerHTML?: Promise<string>;
  readonly localName?: Promise<string>;
  readonly namespaceURI?: Promise<string | null>;
  readonly outerHTML?: Promise<string>;
  readonly part?: IDOMTokenList;
  readonly prefix?: Promise<string | null>;
  readonly scrollHeight?: Promise<number>;
  readonly scrollLeft?: Promise<number>;
  readonly scrollTop?: Promise<number>;
  readonly scrollWidth?: Promise<number>;
  readonly shadowRoot?: IShadowRoot;
  readonly slot?: Promise<string>;
  readonly tagName?: Promise<string>;
}

export const ElementIsolatePropertyKeys = ['attributes', 'classList', 'className', 'clientHeight', 'clientLeft', 'clientTop', 'clientWidth', 'id', 'innerHTML', 'localName', 'namespaceURI', 'outerHTML', 'part', 'prefix', 'scrollHeight', 'scrollLeft', 'scrollTop', 'scrollWidth', 'shadowRoot', 'slot', 'tagName'];

export const ElementIsolateConstantKeys = [];
