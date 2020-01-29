import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, INodeList, IHTMLMeterElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLMeterElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMeterElement extends HTMLElement implements IHTMLMeterElement {
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

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMeterElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLMeterElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMeterElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLMeterElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLMeterElementProperties extends IHTMLElementProperties {
  high?: number;
  labels?: INodeList;
  low?: number;
  max?: number;
  min?: number;
  optimum?: number;
  value?: number;
}

export interface IHTMLMeterElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  labels?: INodeList;
}

export const { getState, setState, setReadonlyOfHTMLMeterElement } = InternalStateGenerator<
  IHTMLMeterElement,
  IHTMLMeterElementProperties,
  IHTMLMeterElementReadonlyProperties
>('HTMLMeterElement');
