import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  ISVGGraphicsElement,
} from '../interfaces';
import SVGElement, { ISVGElementRps, rpSVGElementKeys } from './SVGElement';
import SVGTests, { ISVGTestsRps, rpSVGTestsKeys } from '../mixins/SVGTests';

// tslint:disable-next-line:variable-name
const SVGGraphicsElementBase = SVGTests(SVGElement);

export default class SVGGraphicsElement extends SVGGraphicsElementBase implements ISVGGraphicsElement {
  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: ISVGGraphicsElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<ISVGGraphicsElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: ISVGGraphicsElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<ISVGGraphicsElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpSVGGraphicsElementKeys: Set<string> = new Set([...rpSVGElementKeys, ...rpSVGTestsKeys]);

export interface ISVGGraphicsElementRps extends ISVGElementRps, ISVGTestsRps {}

export function setSVGGraphicsElementRps(instance: ISVGGraphicsElement, data: ISVGGraphicsElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpSVGGraphicsElementKeys.has(key)) {
      throw new Error(`${key} is not a property of SVGGraphicsElement`);
    }
    properties[key] = value;
  });
}
