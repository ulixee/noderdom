import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDirectoryElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLDirectoryElement extends HTMLElement implements IHTMLDirectoryElement {
  public get compact(): boolean {
    return InternalHandler.get<IHTMLDirectoryElement, boolean>(this, 'compact');
  }

  public set compact(value: boolean) {
    InternalHandler.set<IHTMLDirectoryElement, boolean>(this, 'compact', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDirectoryElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLDirectoryElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDirectoryElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLDirectoryElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLDirectoryElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLDirectoryElementRps extends IHTMLElementRps {}

export function setHTMLDirectoryElementRps(instance: IHTMLDirectoryElement, data: IHTMLDirectoryElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLDirectoryElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLDirectoryElement`);
    }
    properties[key] = value;
  });
}
