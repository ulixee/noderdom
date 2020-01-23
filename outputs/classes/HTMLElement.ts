import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IElement, IHTMLElement } from '../interfaces';
import Element, { IElementRps, rpElementKeys } from './Element';
import ElementCSSInlineStyle, { IElementCSSInlineStyleRps, rpElementCSSInlineStyleKeys } from '../mixins/ElementCSSInlineStyle';
import ElementContentEditable, { IElementContentEditableRps, rpElementContentEditableKeys } from '../mixins/ElementContentEditable';
import GlobalEventHandlers, { IGlobalEventHandlersRps, rpGlobalEventHandlersKeys } from '../mixins/GlobalEventHandlers';
import HTMLOrSVGElement, { IHTMLOrSVGElementRps, rpHTMLOrSVGElementKeys } from '../mixins/HTMLOrSVGElement';

// tslint:disable-next-line:variable-name
const HTMLElementBase = ElementCSSInlineStyle(ElementContentEditable(GlobalEventHandlers(HTMLOrSVGElement(Element))));

export default class HTMLElement extends HTMLElementBase implements IHTMLElement {
  protected readonly _: IHTMLElementRps = {};

  // properties

  public get accessKey(): string {
    return InternalHandler.get<IHTMLElement, string>(this, 'accessKey');
  }

  public set accessKey(value: string) {
    InternalHandler.set<IHTMLElement, string>(this, 'accessKey', value);
  }

  public get dir(): string {
    return InternalHandler.get<IHTMLElement, string>(this, 'dir');
  }

  public set dir(value: string) {
    InternalHandler.set<IHTMLElement, string>(this, 'dir', value);
  }

  public get draggable(): boolean {
    return InternalHandler.get<IHTMLElement, boolean>(this, 'draggable');
  }

  public set draggable(value: boolean) {
    InternalHandler.set<IHTMLElement, boolean>(this, 'draggable', value);
  }

  public get hidden(): boolean {
    return InternalHandler.get<IHTMLElement, boolean>(this, 'hidden');
  }

  public set hidden(value: boolean) {
    InternalHandler.set<IHTMLElement, boolean>(this, 'hidden', value);
  }

  public get lang(): string {
    return InternalHandler.get<IHTMLElement, string>(this, 'lang');
  }

  public set lang(value: string) {
    InternalHandler.set<IHTMLElement, string>(this, 'lang', value);
  }

  public get offsetHeight(): number {
    return InternalHandler.get<IHTMLElement, number>(this, 'offsetHeight');
  }

  public get offsetLeft(): number {
    return InternalHandler.get<IHTMLElement, number>(this, 'offsetLeft');
  }

  public get offsetParent(): IElement | null {
    return InternalHandler.get<IHTMLElement, IElement | null>(this, 'offsetParent');
  }

  public get offsetTop(): number {
    return InternalHandler.get<IHTMLElement, number>(this, 'offsetTop');
  }

  public get offsetWidth(): number {
    return InternalHandler.get<IHTMLElement, number>(this, 'offsetWidth');
  }

  public get title(): string {
    return InternalHandler.get<IHTMLElement, string>(this, 'title');
  }

  public set title(value: string) {
    InternalHandler.set<IHTMLElement, string>(this, 'title', value);
  }

  public get translate(): boolean {
    return InternalHandler.get<IHTMLElement, boolean>(this, 'translate');
  }

  public set translate(value: boolean) {
    InternalHandler.set<IHTMLElement, boolean>(this, 'translate', value);
  }

  // methods

  public click(): void {
    InternalHandler.run<IHTMLElement, void>(this, 'click', []);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLElementKeys: Set<string> = new Set([...rpElementKeys, ...rpElementCSSInlineStyleKeys, ...rpElementContentEditableKeys, ...rpGlobalEventHandlersKeys, ...rpHTMLOrSVGElementKeys]);

export interface IHTMLElementRps extends IElementRps, IElementCSSInlineStyleRps, IElementContentEditableRps, IGlobalEventHandlersRps, IHTMLOrSVGElementRps {
  readonly offsetHeight?: number;
  readonly offsetLeft?: number;
  readonly offsetParent?: IElement | null;
  readonly offsetTop?: number;
  readonly offsetWidth?: number;
}

export function setHTMLElementRps(instance: IHTMLElement, data: IHTMLElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLElement`);
    }
    properties[key] = value;
  });
}
