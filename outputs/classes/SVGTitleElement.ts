import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  ISVGTitleElement,
} from '../interfaces';
import SVGElement, { ISVGElementRps, rpSVGElementKeys } from './SVGElement';

export default class SVGTitleElement extends SVGElement implements ISVGTitleElement {
  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: ISVGTitleElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<ISVGTitleElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: ISVGTitleElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<ISVGTitleElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpSVGTitleElementKeys: Set<string> = new Set([...rpSVGElementKeys]);

export interface ISVGTitleElementRps extends ISVGElementRps {}

export function setSVGTitleElementRps(instance: ISVGTitleElement, data: ISVGTitleElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpSVGTitleElementKeys.has(key)) {
      throw new Error(`${key} is not a property of SVGTitleElement`);
    }
    properties[key] = value;
  });
}
