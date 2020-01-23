import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLUListElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLUListElement extends HTMLElement implements IHTMLUListElement {
  public get compact(): boolean {
    return InternalHandler.get<IHTMLUListElement, boolean>(this, 'compact');
  }

  public set compact(value: boolean) {
    InternalHandler.set<IHTMLUListElement, boolean>(this, 'compact', value);
  }

  public get type(): string {
    return InternalHandler.get<IHTMLUListElement, string>(this, 'type');
  }

  public set type(value: string) {
    InternalHandler.set<IHTMLUListElement, string>(this, 'type', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLUListElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLUListElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLUListElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLUListElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLUListElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLUListElementRps extends IHTMLElementRps {}

export function setHTMLUListElementRps(instance: IHTMLUListElement, data: IHTMLUListElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLUListElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLUListElement`);
    }
    properties[key] = value;
  });
}
