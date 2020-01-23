import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLBaseElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLBaseElement extends HTMLElement implements IHTMLBaseElement {
  public get href(): string {
    return InternalHandler.get<IHTMLBaseElement, string>(this, 'href');
  }

  public set href(value: string) {
    InternalHandler.set<IHTMLBaseElement, string>(this, 'href', value);
  }

  public get target(): string {
    return InternalHandler.get<IHTMLBaseElement, string>(this, 'target');
  }

  public set target(value: string) {
    InternalHandler.set<IHTMLBaseElement, string>(this, 'target', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLBaseElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLBaseElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLBaseElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLBaseElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLBaseElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLBaseElementRps extends IHTMLElementRps {}

export function setHTMLBaseElementRps(instance: IHTMLBaseElement, data: IHTMLBaseElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLBaseElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLBaseElement`);
    }
    properties[key] = value;
  });
}
