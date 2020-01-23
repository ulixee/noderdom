import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLParagraphElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLParagraphElement extends HTMLElement implements IHTMLParagraphElement {
  public get align(): string {
    return InternalHandler.get<IHTMLParagraphElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<IHTMLParagraphElement, string>(this, 'align', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLParagraphElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLParagraphElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLParagraphElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLParagraphElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLParagraphElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLParagraphElementRps extends IHTMLElementRps {}

export function setHTMLParagraphElementRps(instance: IHTMLParagraphElement, data: IHTMLParagraphElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLParagraphElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLParagraphElement`);
    }
    properties[key] = value;
  });
}
