import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLHeadingElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLHeadingElement extends HTMLElement implements IHTMLHeadingElement {
  public get align(): string {
    return InternalHandler.get<IHTMLHeadingElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<IHTMLHeadingElement, string>(this, 'align', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLHeadingElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLHeadingElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLHeadingElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLHeadingElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLHeadingElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLHeadingElementRps extends IHTMLElementRps {}

export function setHTMLHeadingElementRps(instance: IHTMLHeadingElement, data: IHTMLHeadingElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLHeadingElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLHeadingElement`);
    }
    properties[key] = value;
  });
}
