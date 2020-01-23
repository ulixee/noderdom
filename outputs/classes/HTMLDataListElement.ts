import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLCollection, IHTMLDataListElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLDataListElement extends HTMLElement implements IHTMLDataListElement {
  protected readonly _: IHTMLDataListElementRps = {};

  // properties

  public get options(): IHTMLCollection {
    return InternalHandler.get<IHTMLDataListElement, IHTMLCollection>(this, 'options');
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDataListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLDataListElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDataListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLDataListElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLDataListElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLDataListElementRps extends IHTMLElementRps {
  readonly options?: IHTMLCollection;
}

export function setHTMLDataListElementRps(instance: IHTMLDataListElement, data: IHTMLDataListElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLDataListElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLDataListElement`);
    }
    properties[key] = value;
  });
}
