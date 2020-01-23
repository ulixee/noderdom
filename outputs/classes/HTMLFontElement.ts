import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFontElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLFontElement extends HTMLElement implements IHTMLFontElement {
  public get color(): string {
    return InternalHandler.get<IHTMLFontElement, string>(this, 'color');
  }

  public set color(value: string) {
    InternalHandler.set<IHTMLFontElement, string>(this, 'color', value);
  }

  public get face(): string {
    return InternalHandler.get<IHTMLFontElement, string>(this, 'face');
  }

  public set face(value: string) {
    InternalHandler.set<IHTMLFontElement, string>(this, 'face', value);
  }

  public get size(): string {
    return InternalHandler.get<IHTMLFontElement, string>(this, 'size');
  }

  public set size(value: string) {
    InternalHandler.set<IHTMLFontElement, string>(this, 'size', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFontElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLFontElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFontElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLFontElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLFontElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLFontElementRps extends IHTMLElementRps {}

export function setHTMLFontElementRps(instance: IHTMLFontElement, data: IHTMLFontElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLFontElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLFontElement`);
    }
    properties[key] = value;
  });
}
