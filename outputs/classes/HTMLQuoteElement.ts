import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLQuoteElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLQuoteElement extends HTMLElement implements IHTMLQuoteElement {
  public get cite(): string {
    return InternalHandler.get<IHTMLQuoteElement, string>(this, 'cite');
  }

  public set cite(value: string) {
    InternalHandler.set<IHTMLQuoteElement, string>(this, 'cite', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLQuoteElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLQuoteElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLQuoteElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLQuoteElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLQuoteElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLQuoteElementRps extends IHTMLElementRps {}

export function setHTMLQuoteElementRps(instance: IHTMLQuoteElement, data: IHTMLQuoteElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLQuoteElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLQuoteElement`);
    }
    properties[key] = value;
  });
}
