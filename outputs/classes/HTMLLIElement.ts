import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLLIElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLLIElement extends HTMLElement implements IHTMLLIElement {
  public get type(): string {
    return InternalHandler.get<IHTMLLIElement, string>(this, 'type');
  }

  public set type(value: string) {
    InternalHandler.set<IHTMLLIElement, string>(this, 'type', value);
  }

  public get value(): number {
    return InternalHandler.get<IHTMLLIElement, number>(this, 'value');
  }

  public set value(value: number) {
    InternalHandler.set<IHTMLLIElement, number>(this, 'value', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLLIElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLLIElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLLIElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLLIElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLLIElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLLIElementRps extends IHTMLElementRps {}

export function setHTMLLIElementRps(instance: IHTMLLIElement, data: IHTMLLIElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLLIElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLLIElement`);
    }
    properties[key] = value;
  });
}
