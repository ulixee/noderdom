import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLAudioElement } from '../interfaces';
import HTMLMediaElement, { IHTMLMediaElementRps, rpHTMLMediaElementKeys } from './HTMLMediaElement';

export default class HTMLAudioElement extends HTMLMediaElement implements IHTMLAudioElement {public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAudioElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLAudioElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAudioElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLAudioElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLAudioElementKeys: Set<string> = new Set([...rpHTMLMediaElementKeys]);

export interface IHTMLAudioElementRps extends IHTMLMediaElementRps {}

export function setHTMLAudioElementRps(instance: IHTMLAudioElement, data: IHTMLAudioElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLAudioElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLAudioElement`);
    }
    properties[key] = value;
  });
}
