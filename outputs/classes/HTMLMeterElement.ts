import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  INodeList,
  IHTMLMeterElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLMeterElement extends HTMLElement implements IHTMLMeterElement {
  protected readonly _: IHTMLMeterElementRps = {};

  // properties

  public get high(): number {
    return InternalHandler.get<IHTMLMeterElement, number>(this, 'high');
  }

  public set high(value: number) {
    InternalHandler.set<IHTMLMeterElement, number>(this, 'high', value);
  }

  public get labels(): INodeList {
    return InternalHandler.get<IHTMLMeterElement, INodeList>(this, 'labels');
  }

  public get low(): number {
    return InternalHandler.get<IHTMLMeterElement, number>(this, 'low');
  }

  public set low(value: number) {
    InternalHandler.set<IHTMLMeterElement, number>(this, 'low', value);
  }

  public get max(): number {
    return InternalHandler.get<IHTMLMeterElement, number>(this, 'max');
  }

  public set max(value: number) {
    InternalHandler.set<IHTMLMeterElement, number>(this, 'max', value);
  }

  public get min(): number {
    return InternalHandler.get<IHTMLMeterElement, number>(this, 'min');
  }

  public set min(value: number) {
    InternalHandler.set<IHTMLMeterElement, number>(this, 'min', value);
  }

  public get optimum(): number {
    return InternalHandler.get<IHTMLMeterElement, number>(this, 'optimum');
  }

  public set optimum(value: number) {
    InternalHandler.set<IHTMLMeterElement, number>(this, 'optimum', value);
  }

  public get value(): number {
    return InternalHandler.get<IHTMLMeterElement, number>(this, 'value');
  }

  public set value(value: number) {
    InternalHandler.set<IHTMLMeterElement, number>(this, 'value', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLMeterElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLMeterElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLMeterElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLMeterElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLMeterElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLMeterElementRps extends IHTMLElementRps {
  readonly labels?: INodeList;
}

export function setHTMLMeterElementRps(instance: IHTMLMeterElement, data: IHTMLMeterElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLMeterElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLMeterElement`);
    }
    properties[key] = value;
  });
}
