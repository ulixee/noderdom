import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLFormElement,
  IHTMLElement,
  IHTMLLabelElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLLabelElement extends HTMLElement implements IHTMLLabelElement {
  protected readonly _: IHTMLLabelElementRps = {};

  // properties

  public get control(): IHTMLElement | null {
    return InternalHandler.get<IHTMLLabelElement, IHTMLElement | null>(this, 'control');
  }

  public get form(): IHTMLFormElement | null {
    return InternalHandler.get<IHTMLLabelElement, IHTMLFormElement | null>(this, 'form');
  }

  public get htmlFor(): string {
    return InternalHandler.get<IHTMLLabelElement, string>(this, 'htmlFor');
  }

  public set htmlFor(value: string) {
    InternalHandler.set<IHTMLLabelElement, string>(this, 'htmlFor', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLLabelElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLLabelElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLLabelElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLLabelElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLLabelElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLLabelElementRps extends IHTMLElementRps {
  readonly control?: IHTMLElement | null;
  readonly form?: IHTMLFormElement | null;
}

export function setHTMLLabelElementRps(instance: IHTMLLabelElement, data: IHTMLLabelElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLLabelElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLLabelElement`);
    }
    properties[key] = value;
  });
}
