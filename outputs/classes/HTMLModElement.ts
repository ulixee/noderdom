import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLModElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLModElement extends HTMLElement implements IHTMLModElement {
  public get cite(): string {
    return InternalHandler.get<IHTMLModElement, string>(this, 'cite');
  }

  public set cite(value: string) {
    InternalHandler.set<IHTMLModElement, string>(this, 'cite', value);
  }

  public get dateTime(): string {
    return InternalHandler.get<IHTMLModElement, string>(this, 'dateTime');
  }

  public set dateTime(value: string) {
    InternalHandler.set<IHTMLModElement, string>(this, 'dateTime', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLModElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLModElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLModElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLModElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLModElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLModElementRps extends IHTMLElementRps {}

export function setHTMLModElementRps(instance: IHTMLModElement, data: IHTMLModElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLModElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLModElement`);
    }
    properties[key] = value;
  });
}
