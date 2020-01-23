import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLParamElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLParamElement extends HTMLElement implements IHTMLParamElement {
  public get name(): string {
    return InternalHandler.get<IHTMLParamElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<IHTMLParamElement, string>(this, 'name', value);
  }

  public get type(): string {
    return InternalHandler.get<IHTMLParamElement, string>(this, 'type');
  }

  public set type(value: string) {
    InternalHandler.set<IHTMLParamElement, string>(this, 'type', value);
  }

  public get value(): string {
    return InternalHandler.get<IHTMLParamElement, string>(this, 'value');
  }

  public set value(value: string) {
    InternalHandler.set<IHTMLParamElement, string>(this, 'value', value);
  }

  public get valueType(): string {
    return InternalHandler.get<IHTMLParamElement, string>(this, 'valueType');
  }

  public set valueType(value: string) {
    InternalHandler.set<IHTMLParamElement, string>(this, 'valueType', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLParamElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLParamElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLParamElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLParamElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLParamElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLParamElementRps extends IHTMLElementRps {}

export function setHTMLParamElementRps(instance: IHTMLParamElement, data: IHTMLParamElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLParamElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLParamElement`);
    }
    properties[key] = value;
  });
}
