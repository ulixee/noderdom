import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLEmbedElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLEmbedElement extends HTMLElement implements IHTMLEmbedElement {
  public get align(): string {
    return InternalHandler.get<IHTMLEmbedElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<IHTMLEmbedElement, string>(this, 'align', value);
  }

  public get height(): string {
    return InternalHandler.get<IHTMLEmbedElement, string>(this, 'height');
  }

  public set height(value: string) {
    InternalHandler.set<IHTMLEmbedElement, string>(this, 'height', value);
  }

  public get name(): string {
    return InternalHandler.get<IHTMLEmbedElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<IHTMLEmbedElement, string>(this, 'name', value);
  }

  public get src(): string {
    return InternalHandler.get<IHTMLEmbedElement, string>(this, 'src');
  }

  public set src(value: string) {
    InternalHandler.set<IHTMLEmbedElement, string>(this, 'src', value);
  }

  public get type(): string {
    return InternalHandler.get<IHTMLEmbedElement, string>(this, 'type');
  }

  public set type(value: string) {
    InternalHandler.set<IHTMLEmbedElement, string>(this, 'type', value);
  }

  public get width(): string {
    return InternalHandler.get<IHTMLEmbedElement, string>(this, 'width');
  }

  public set width(value: string) {
    InternalHandler.set<IHTMLEmbedElement, string>(this, 'width', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLEmbedElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLEmbedElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLEmbedElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLEmbedElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLEmbedElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLEmbedElementRps extends IHTMLElementRps {}

export function setHTMLEmbedElementRps(instance: IHTMLEmbedElement, data: IHTMLEmbedElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLEmbedElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLEmbedElement`);
    }
    properties[key] = value;
  });
}
