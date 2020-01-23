import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDetailsElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLDetailsElement extends HTMLElement implements IHTMLDetailsElement {
  public get open(): boolean {
    return InternalHandler.get<IHTMLDetailsElement, boolean>(this, 'open');
  }

  public set open(value: boolean) {
    InternalHandler.set<IHTMLDetailsElement, boolean>(this, 'open', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDetailsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLDetailsElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDetailsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLDetailsElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLDetailsElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLDetailsElementRps extends IHTMLElementRps {}

export function setHTMLDetailsElementRps(instance: IHTMLDetailsElement, data: IHTMLDetailsElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLDetailsElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLDetailsElement`);
    }
    properties[key] = value;
  });
}
