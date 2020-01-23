import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLTableCaptionElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLTableCaptionElement extends HTMLElement implements IHTMLTableCaptionElement {
  public get align(): string {
    return InternalHandler.get<IHTMLTableCaptionElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<IHTMLTableCaptionElement, string>(this, 'align', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLTableCaptionElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLTableCaptionElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLTableCaptionElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLTableCaptionElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLTableCaptionElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLTableCaptionElementRps extends IHTMLElementRps {}

export function setHTMLTableCaptionElementRps(
  instance: IHTMLTableCaptionElement,
  data: IHTMLTableCaptionElementRps,
): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLTableCaptionElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLTableCaptionElement`);
    }
    properties[key] = value;
  });
}
