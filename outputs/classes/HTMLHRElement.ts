import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLHRElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLHRElement extends HTMLElement implements IHTMLHRElement {
  public get align(): string {
    return InternalHandler.get<IHTMLHRElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<IHTMLHRElement, string>(this, 'align', value);
  }

  public get color(): string {
    return InternalHandler.get<IHTMLHRElement, string>(this, 'color');
  }

  public set color(value: string) {
    InternalHandler.set<IHTMLHRElement, string>(this, 'color', value);
  }

  public get noShade(): boolean {
    return InternalHandler.get<IHTMLHRElement, boolean>(this, 'noShade');
  }

  public set noShade(value: boolean) {
    InternalHandler.set<IHTMLHRElement, boolean>(this, 'noShade', value);
  }

  public get size(): string {
    return InternalHandler.get<IHTMLHRElement, string>(this, 'size');
  }

  public set size(value: string) {
    InternalHandler.set<IHTMLHRElement, string>(this, 'size', value);
  }

  public get width(): string {
    return InternalHandler.get<IHTMLHRElement, string>(this, 'width');
  }

  public set width(value: string) {
    InternalHandler.set<IHTMLHRElement, string>(this, 'width', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLHRElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLHRElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLHRElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLHRElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLHRElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLHRElementRps extends IHTMLElementRps {}

export function setHTMLHRElementRps(instance: IHTMLHRElement, data: IHTMLHRElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLHRElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLHRElement`);
    }
    properties[key] = value;
  });
}
