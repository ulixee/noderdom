import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLHtmlElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLHtmlElement extends HTMLElement implements IHTMLHtmlElement {
  public get version(): string {
    return InternalHandler.get<IHTMLHtmlElement, string>(this, 'version');
  }

  public set version(value: string) {
    InternalHandler.set<IHTMLHtmlElement, string>(this, 'version', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLHtmlElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLHtmlElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLHtmlElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLHtmlElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLHtmlElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLHtmlElementRps extends IHTMLElementRps {}

export function setHTMLHtmlElementRps(instance: IHTMLHtmlElement, data: IHTMLHtmlElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLHtmlElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLHtmlElement`);
    }
    properties[key] = value;
  });
}
