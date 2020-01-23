import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDialogElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLDialogElement extends HTMLElement implements IHTMLDialogElement {
  public get open(): boolean {
    return InternalHandler.get<IHTMLDialogElement, boolean>(this, 'open');
  }

  public set open(value: boolean) {
    InternalHandler.set<IHTMLDialogElement, boolean>(this, 'open', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDialogElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLDialogElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDialogElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLDialogElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLDialogElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLDialogElementRps extends IHTMLElementRps {}

export function setHTMLDialogElementRps(instance: IHTMLDialogElement, data: IHTMLDialogElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLDialogElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLDialogElement`);
    }
    properties[key] = value;
  });
}
