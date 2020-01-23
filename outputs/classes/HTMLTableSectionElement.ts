import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLCollection,
  IHTMLElement,
  IHTMLTableSectionElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLTableSectionElement extends HTMLElement implements IHTMLTableSectionElement {
  protected readonly _: IHTMLTableSectionElementRps = {};

  // properties

  public get align(): string {
    return InternalHandler.get<IHTMLTableSectionElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<IHTMLTableSectionElement, string>(this, 'align', value);
  }

  public get ch(): string {
    return InternalHandler.get<IHTMLTableSectionElement, string>(this, 'ch');
  }

  public set ch(value: string) {
    InternalHandler.set<IHTMLTableSectionElement, string>(this, 'ch', value);
  }

  public get chOff(): string {
    return InternalHandler.get<IHTMLTableSectionElement, string>(this, 'chOff');
  }

  public set chOff(value: string) {
    InternalHandler.set<IHTMLTableSectionElement, string>(this, 'chOff', value);
  }

  public get rows(): IHTMLCollection {
    return InternalHandler.get<IHTMLTableSectionElement, IHTMLCollection>(this, 'rows');
  }

  public get vAlign(): string {
    return InternalHandler.get<IHTMLTableSectionElement, string>(this, 'vAlign');
  }

  public set vAlign(value: string) {
    InternalHandler.set<IHTMLTableSectionElement, string>(this, 'vAlign', value);
  }

  // methods

  public deleteRow(index: number): void {
    InternalHandler.run<IHTMLTableSectionElement, void>(this, 'deleteRow', [index]);
  }

  public insertRow(index?: number): IHTMLElement {
    return InternalHandler.run<IHTMLTableSectionElement, IHTMLElement>(this, 'insertRow', [index]);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLTableSectionElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLTableSectionElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLTableSectionElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLTableSectionElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLTableSectionElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLTableSectionElementRps extends IHTMLElementRps {
  readonly rows?: IHTMLCollection;
}

export function setHTMLTableSectionElementRps(
  instance: IHTMLTableSectionElement,
  data: IHTMLTableSectionElementRps,
): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLTableSectionElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLTableSectionElement`);
    }
    properties[key] = value;
  });
}
