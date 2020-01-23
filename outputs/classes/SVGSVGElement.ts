import InternalHandler from '../InternalHandler';
import {
  ISVGSVGElementEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  ISVGNumber,
  IElement,
  ISVGSVGElement,
} from '../interfaces';
import SVGGraphicsElement, { ISVGGraphicsElementRps, rpSVGGraphicsElementKeys } from './SVGGraphicsElement';
import WindowEventHandlers, { IWindowEventHandlersRps, rpWindowEventHandlersKeys } from '../mixins/WindowEventHandlers';

// tslint:disable-next-line:variable-name
const SVGSVGElementBase = WindowEventHandlers(SVGGraphicsElement);

export default class SVGSVGElement extends SVGSVGElementBase implements ISVGSVGElement {
  public createSVGNumber(): ISVGNumber {
    return InternalHandler.run<ISVGSVGElement, ISVGNumber>(this, 'createSVGNumber', []);
  }

  public forceRedraw(): void {
    InternalHandler.run<ISVGSVGElement, void>(this, 'forceRedraw', []);
  }

  public getElementById(elementId: string): IElement {
    return InternalHandler.run<ISVGSVGElement, IElement>(this, 'getElementById', [elementId]);
  }

  public suspendRedraw(maxWaitMilliseconds: number): number {
    return InternalHandler.run<ISVGSVGElement, number>(this, 'suspendRedraw', [maxWaitMilliseconds]);
  }

  public unsuspendRedraw(suspendHandleID: number): void {
    InternalHandler.run<ISVGSVGElement, void>(this, 'unsuspendRedraw', [suspendHandleID]);
  }

  public unsuspendRedrawAll(): void {
    InternalHandler.run<ISVGSVGElement, void>(this, 'unsuspendRedrawAll', []);
  }

  public addEventListener<K extends keyof ISVGSVGElementEventMap>(
    type: K,
    listener: (this: ISVGSVGElement, ev: ISVGSVGElementEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<ISVGSVGElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof ISVGSVGElementEventMap>(
    type: K,
    listener: (this: ISVGSVGElement, ev: ISVGSVGElementEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<ISVGSVGElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpSVGSVGElementKeys: Set<string> = new Set([...rpSVGGraphicsElementKeys, ...rpWindowEventHandlersKeys]);

export interface ISVGSVGElementRps extends ISVGGraphicsElementRps, IWindowEventHandlersRps {}

export function setSVGSVGElementRps(instance: ISVGSVGElement, data: ISVGSVGElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpSVGSVGElementKeys.has(key)) {
      throw new Error(`${key} is not a property of SVGSVGElement`);
    }
    properties[key] = value;
  });
}
