import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLOListElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLOListElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLOListElement extends HTMLElement implements IHTMLOListElement {
    public get compact(): boolean {
      return InternalHandler.get<IHTMLOListElement, boolean>(this, 'compact');
    }

    public set compact(value: boolean) {
      InternalHandler.set<IHTMLOListElement, boolean>(this, 'compact', value);
    }

    public get reversed(): boolean {
      return InternalHandler.get<IHTMLOListElement, boolean>(this, 'reversed');
    }

    public set reversed(value: boolean) {
      InternalHandler.set<IHTMLOListElement, boolean>(this, 'reversed', value);
    }

    public get start(): number {
      return InternalHandler.get<IHTMLOListElement, number>(this, 'start');
    }

    public set start(value: number) {
      InternalHandler.set<IHTMLOListElement, number>(this, 'start', value);
    }

    public get type(): string {
      return InternalHandler.get<IHTMLOListElement, string>(this, 'type');
    }

    public set type(value: string) {
      InternalHandler.set<IHTMLOListElement, string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLOListElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLOListElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLOListElementProperties extends IHTMLElementProperties {
  compact?: boolean;
  reversed?: boolean;
  start?: number;
  type?: string;
}

export interface IHTMLOListElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLOListElement } = InternalStateGenerator<
  IHTMLOListElement,
  IHTMLOListElementProperties,
  IHTMLOListElementReadonlyProperties
>('HTMLOListElement');
