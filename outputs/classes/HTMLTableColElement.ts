import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLTableColElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLTableColElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableColElement extends HTMLElement implements IHTMLTableColElement {
    public get align(): string {
      return InternalHandler.get<IHTMLTableColElement, string>(this, 'align');
    }

    public set align(value: string) {
      InternalHandler.set<IHTMLTableColElement, string>(this, 'align', value);
    }

    public get ch(): string {
      return InternalHandler.get<IHTMLTableColElement, string>(this, 'ch');
    }

    public set ch(value: string) {
      InternalHandler.set<IHTMLTableColElement, string>(this, 'ch', value);
    }

    public get chOff(): string {
      return InternalHandler.get<IHTMLTableColElement, string>(this, 'chOff');
    }

    public set chOff(value: string) {
      InternalHandler.set<IHTMLTableColElement, string>(this, 'chOff', value);
    }

    public get span(): number {
      return InternalHandler.get<IHTMLTableColElement, number>(this, 'span');
    }

    public set span(value: number) {
      InternalHandler.set<IHTMLTableColElement, number>(this, 'span', value);
    }

    public get vAlign(): string {
      return InternalHandler.get<IHTMLTableColElement, string>(this, 'vAlign');
    }

    public set vAlign(value: string) {
      InternalHandler.set<IHTMLTableColElement, string>(this, 'vAlign', value);
    }

    public get width(): string {
      return InternalHandler.get<IHTMLTableColElement, string>(this, 'width');
    }

    public set width(value: string) {
      InternalHandler.set<IHTMLTableColElement, string>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableColElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLTableColElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableColElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLTableColElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLTableColElementProperties extends IHTMLElementProperties {
  align?: string;
  ch?: string;
  chOff?: string;
  span?: number;
  vAlign?: string;
  width?: string;
}

export interface IHTMLTableColElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLTableColElement } = InternalStateGenerator<
  IHTMLTableColElement,
  IHTMLTableColElementProperties,
  IHTMLTableColElementReadonlyProperties
>('HTMLTableColElement');
