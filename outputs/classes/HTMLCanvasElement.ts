import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IRenderingContext, IBlobCallback, IHTMLCanvasElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLCanvasElement extends HTMLElement implements IHTMLCanvasElement {
  public get height(): number {
    return InternalHandler.get<IHTMLCanvasElement, number>(this, 'height');
  }

  public set height(value: number) {
    InternalHandler.set<IHTMLCanvasElement, number>(this, 'height', value);
  }

  public get width(): number {
    return InternalHandler.get<IHTMLCanvasElement, number>(this, 'width');
  }

  public set width(value: number) {
    InternalHandler.set<IHTMLCanvasElement, number>(this, 'width', value);
  }

  // methods

  public getContext(contextId: string, ...args: any[]): IRenderingContext | null {
    return InternalHandler.run<IHTMLCanvasElement, IRenderingContext | null>(this, 'getContext', [contextId, args]);
  }

  public toBlob(callback: IBlobCallback, type?: string, quality?: any): void {
    InternalHandler.run<IHTMLCanvasElement, void>(this, 'toBlob', [callback, type, quality]);
  }

  public toDataURL(type?: string, quality?: any): string {
    return InternalHandler.run<IHTMLCanvasElement, string>(this, 'toDataURL', [type, quality]);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLCanvasElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLCanvasElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLCanvasElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLCanvasElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLCanvasElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLCanvasElementRps extends IHTMLElementRps {}

export function setHTMLCanvasElementRps(instance: IHTMLCanvasElement, data: IHTMLCanvasElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLCanvasElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLCanvasElement`);
    }
    properties[key] = value;
  });
}
