import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  INodeList,
  IHTMLProgressElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLProgressElement extends HTMLElement implements IHTMLProgressElement {
  protected readonly _: IHTMLProgressElementRps = {};

  // properties

  public get labels(): INodeList {
    return InternalHandler.get<IHTMLProgressElement, INodeList>(this, 'labels');
  }

  public get max(): number {
    return InternalHandler.get<IHTMLProgressElement, number>(this, 'max');
  }

  public set max(value: number) {
    InternalHandler.set<IHTMLProgressElement, number>(this, 'max', value);
  }

  public get position(): number {
    return InternalHandler.get<IHTMLProgressElement, number>(this, 'position');
  }

  public get value(): number {
    return InternalHandler.get<IHTMLProgressElement, number>(this, 'value');
  }

  public set value(value: number) {
    InternalHandler.set<IHTMLProgressElement, number>(this, 'value', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLProgressElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLProgressElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLProgressElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLProgressElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLProgressElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLProgressElementRps extends IHTMLElementRps {
  readonly labels?: INodeList;
  readonly position?: number;
}

export function setHTMLProgressElementRps(instance: IHTMLProgressElement, data: IHTMLProgressElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLProgressElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLProgressElement`);
    }
    properties[key] = value;
  });
}
