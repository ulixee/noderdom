import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLStyleElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';
import LinkStyle, { ILinkStyleRps, rpLinkStyleKeys } from '../mixins/LinkStyle';

// tslint:disable-next-line:variable-name
const HTMLStyleElementBase = LinkStyle(HTMLElement);

export default class HTMLStyleElement extends HTMLStyleElementBase implements IHTMLStyleElement {
  public get media(): string {
    return InternalHandler.get<IHTMLStyleElement, string>(this, 'media');
  }

  public set media(value: string) {
    InternalHandler.set<IHTMLStyleElement, string>(this, 'media', value);
  }

  public get type(): string {
    return InternalHandler.get<IHTMLStyleElement, string>(this, 'type');
  }

  public set type(value: string) {
    InternalHandler.set<IHTMLStyleElement, string>(this, 'type', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLStyleElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLStyleElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLStyleElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLStyleElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLStyleElementKeys: Set<string> = new Set([...rpHTMLElementKeys, ...rpLinkStyleKeys]);

export interface IHTMLStyleElementRps extends IHTMLElementRps, ILinkStyleRps {}

export function setHTMLStyleElementRps(instance: IHTMLStyleElement, data: IHTMLStyleElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLStyleElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLStyleElement`);
    }
    properties[key] = value;
  });
}
