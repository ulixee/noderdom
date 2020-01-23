import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDivElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLDivElement extends HTMLElement implements IHTMLDivElement {
  public get align(): string {
    return InternalHandler.get<IHTMLDivElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<IHTMLDivElement, string>(this, 'align', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDivElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLDivElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDivElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLDivElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLDivElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLDivElementRps extends IHTMLElementRps {}

export function setHTMLDivElementRps(instance: IHTMLDivElement, data: IHTMLDivElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLDivElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLDivElement`);
    }
    properties[key] = value;
  });
}
