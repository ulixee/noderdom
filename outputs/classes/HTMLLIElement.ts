import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLLIElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLLIElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLLIElement extends HTMLElement implements IHTMLLIElement {
    public get type(): string {
      return InternalHandler.get<IHTMLLIElement, string>(this, 'type');
    }

    public set type(value: string) {
      InternalHandler.set<IHTMLLIElement, string>(this, 'type', value);
    }

    public get value(): number {
      return InternalHandler.get<IHTMLLIElement, number>(this, 'value');
    }

    public set value(value: number) {
      InternalHandler.set<IHTMLLIElement, number>(this, 'value', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLIElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLLIElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLIElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLLIElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLLIElementProperties extends IHTMLElementProperties {
  type?: string;
  value?: number;
}

export interface IHTMLLIElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLLIElement } = InternalStateGenerator<
  IHTMLLIElement,
  IHTMLLIElementProperties,
  IHTMLLIElementReadonlyProperties
>('HTMLLIElement');
