import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLFormElement,
  IHTMLLegendElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLLegendElement extends HTMLElement implements IHTMLLegendElement {
  protected readonly _: IHTMLLegendElementRps = {};

  // properties

  public get align(): string {
    return InternalHandler.get<IHTMLLegendElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<IHTMLLegendElement, string>(this, 'align', value);
  }

  public get form(): IHTMLFormElement | null {
    return InternalHandler.get<IHTMLLegendElement, IHTMLFormElement | null>(this, 'form');
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLLegendElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLLegendElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLLegendElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLLegendElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLLegendElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLLegendElementRps extends IHTMLElementRps {
  readonly form?: IHTMLFormElement | null;
}

export function setHTMLLegendElementRps(instance: IHTMLLegendElement, data: IHTMLLegendElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLLegendElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLLegendElement`);
    }
    properties[key] = value;
  });
}
