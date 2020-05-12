import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IElementIsolate } from '../interfaces/isolate';
import { INamedNodeMap, IDOMTokenList, IShadowRoot, IAttr, IDOMRect, IDOMRectList } from '../interfaces/official';
import { ISuperElement, ISuperHTMLCollection } from '../interfaces/super';
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

  public closest(selectors: string): Promise<ISuperElement | null> {
    return awaitedHandler.runMethod<ISuperElement | null>(this, 'closest', [selectors]);
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

  public getAttributeNode(qualifiedName: string): Promise<IAttr | null> {
    return awaitedHandler.runMethod<IAttr | null>(this, 'getAttributeNode', [qualifiedName]);
  }

  public getAttributeNodeNS(namespace: string | null, localName: string): Promise<IAttr | null> {
    return awaitedHandler.runMethod<IAttr | null>(this, 'getAttributeNodeNS', [namespace, localName]);
  }

  public getBoundingClientRect(): Promise<IDOMRect> {
    return awaitedHandler.runMethod<IDOMRect>(this, 'getBoundingClientRect', []);
  }

  public getClientRects(): Promise<IDOMRectList> {
    return awaitedHandler.runMethod<IDOMRectList>(this, 'getClientRects', []);
  }

  public getElementsByClassName(classNames: string): Promise<ISuperHTMLCollection> {
    return awaitedHandler.runMethod<ISuperHTMLCollection>(this, 'getElementsByClassName', [classNames]);
  }

  public getElementsByTagName(qualifiedName: string): Promise<ISuperHTMLCollection> {
    return awaitedHandler.runMethod<ISuperHTMLCollection>(this, 'getElementsByTagName', [qualifiedName]);
  }

  public getElementsByTagNameNS(namespace: string | null, localName: string): Promise<ISuperHTMLCollection> {
    return awaitedHandler.runMethod<ISuperHTMLCollection>(this, 'getElementsByTagNameNS', [namespace, localName]);
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
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
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
