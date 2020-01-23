import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLMetaElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLMetaElement extends HTMLElement implements IHTMLMetaElement {
  public get content(): string {
    return InternalHandler.get<IHTMLMetaElement, string>(this, 'content');
  }

  public set content(value: string) {
    InternalHandler.set<IHTMLMetaElement, string>(this, 'content', value);
  }

  public get httpEquiv(): string {
    return InternalHandler.get<IHTMLMetaElement, string>(this, 'httpEquiv');
  }

  public set httpEquiv(value: string) {
    InternalHandler.set<IHTMLMetaElement, string>(this, 'httpEquiv', value);
  }

  public get name(): string {
    return InternalHandler.get<IHTMLMetaElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<IHTMLMetaElement, string>(this, 'name', value);
  }

  public get scheme(): string {
    return InternalHandler.get<IHTMLMetaElement, string>(this, 'scheme');
  }

  public set scheme(value: string) {
    InternalHandler.set<IHTMLMetaElement, string>(this, 'scheme', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLMetaElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLMetaElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLMetaElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLMetaElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLMetaElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLMetaElementRps extends IHTMLElementRps {}

export function setHTMLMetaElementRps(instance: IHTMLMetaElement, data: IHTMLMetaElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLMetaElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLMetaElement`);
    }
    properties[key] = value;
  });
}
