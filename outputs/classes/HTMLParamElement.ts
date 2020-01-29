import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLParamElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLParamElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLParamElement extends HTMLElement implements IHTMLParamElement {
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

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLParamElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLParamElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLParamElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLParamElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLParamElementProperties extends IHTMLElementProperties {
  name?: string;
  type?: string;
  value?: string;
  valueType?: string;
}

export interface IHTMLParamElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLParamElement } = InternalStateGenerator<
  IHTMLParamElement,
  IHTMLParamElementProperties,
  IHTMLParamElementReadonlyProperties
>('HTMLParamElement');
