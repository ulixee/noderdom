import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, INodeList, IHTMLProgressElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLProgressElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLProgressElement extends HTMLElement implements IHTMLProgressElement {
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

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLProgressElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLProgressElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLProgressElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLProgressElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLProgressElementProperties extends IHTMLElementProperties {
  labels?: INodeList;
  max?: number;
  position?: number;
  value?: number;
}

export interface IHTMLProgressElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  labels?: INodeList;
  position?: number;
}

export const { getState, setState, setReadonlyOfHTMLProgressElement } = InternalStateGenerator<
  IHTMLProgressElement,
  IHTMLProgressElementProperties,
  IHTMLProgressElementReadonlyProperties
>('HTMLProgressElement');
