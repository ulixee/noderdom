import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLCollection,
  IHTMLMapElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLMapElement extends HTMLElement implements IHTMLMapElement {
  protected readonly _: IHTMLMapElementRps = {};

  // properties

  public get areas(): IHTMLCollection {
    return InternalHandler.get<IHTMLMapElement, IHTMLCollection>(this, 'areas');
  }

  public get name(): string {
    return InternalHandler.get<IHTMLMapElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<IHTMLMapElement, string>(this, 'name', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLMapElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLMapElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLMapElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLMapElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLMapElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLMapElementRps extends IHTMLElementRps {
  readonly areas?: IHTMLCollection;
}

export function setHTMLMapElementRps(instance: IHTMLMapElement, data: IHTMLMapElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLMapElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLMapElement`);
    }
    properties[key] = value;
  });
}
