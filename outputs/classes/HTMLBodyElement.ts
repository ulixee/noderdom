import InternalHandler from '../InternalHandler';
import { IHTMLBodyElementEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLBodyElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';
import WindowEventHandlers, { IWindowEventHandlersRps, rpWindowEventHandlersKeys } from '../mixins/WindowEventHandlers';

// tslint:disable-next-line:variable-name
const HTMLBodyElementBase = WindowEventHandlers(HTMLElement);

export default class HTMLBodyElement extends HTMLBodyElementBase implements IHTMLBodyElement {
  public get aLink(): string {
    return InternalHandler.get<IHTMLBodyElement, string>(this, 'aLink');
  }

  public set aLink(value: string) {
    InternalHandler.set<IHTMLBodyElement, string>(this, 'aLink', value);
  }

  public get background(): string {
    return InternalHandler.get<IHTMLBodyElement, string>(this, 'background');
  }

  public set background(value: string) {
    InternalHandler.set<IHTMLBodyElement, string>(this, 'background', value);
  }

  public get bgColor(): string {
    return InternalHandler.get<IHTMLBodyElement, string>(this, 'bgColor');
  }

  public set bgColor(value: string) {
    InternalHandler.set<IHTMLBodyElement, string>(this, 'bgColor', value);
  }

  public get link(): string {
    return InternalHandler.get<IHTMLBodyElement, string>(this, 'link');
  }

  public set link(value: string) {
    InternalHandler.set<IHTMLBodyElement, string>(this, 'link', value);
  }

  public get text(): string {
    return InternalHandler.get<IHTMLBodyElement, string>(this, 'text');
  }

  public set text(value: string) {
    InternalHandler.set<IHTMLBodyElement, string>(this, 'text', value);
  }

  public get vLink(): string {
    return InternalHandler.get<IHTMLBodyElement, string>(this, 'vLink');
  }

  public set vLink(value: string) {
    InternalHandler.set<IHTMLBodyElement, string>(this, 'vLink', value);
  }

  public addEventListener<K extends keyof IHTMLBodyElementEventMap>(type: K, listener: (this: IHTMLBodyElement, ev: IHTMLBodyElementEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLBodyElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IHTMLBodyElementEventMap>(type: K, listener: (this: IHTMLBodyElement, ev: IHTMLBodyElementEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLBodyElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLBodyElementKeys: Set<string> = new Set([...rpHTMLElementKeys, ...rpWindowEventHandlersKeys]);

export interface IHTMLBodyElementRps extends IHTMLElementRps, IWindowEventHandlersRps {}

export function setHTMLBodyElementRps(instance: IHTMLBodyElement, data: IHTMLBodyElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLBodyElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLBodyElement`);
    }
    properties[key] = value;
  });
}
