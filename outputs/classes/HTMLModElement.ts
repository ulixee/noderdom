import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLModElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLModElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLModElement extends HTMLElement implements IHTMLModElement {
    public get cite(): string {
      return InternalHandler.get<IHTMLModElement, string>(this, 'cite');
    }

    public set cite(value: string) {
      InternalHandler.set<IHTMLModElement, string>(this, 'cite', value);
    }

    public get dateTime(): string {
      return InternalHandler.get<IHTMLModElement, string>(this, 'dateTime');
    }

    public set dateTime(value: string) {
      InternalHandler.set<IHTMLModElement, string>(this, 'dateTime', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLModElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLModElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLModElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLModElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLModElementProperties extends IHTMLElementProperties {
  cite?: string;
  dateTime?: string;
}

export interface IHTMLModElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLModElement } = InternalStateGenerator<
  IHTMLModElement,
  IHTMLModElementProperties,
  IHTMLModElementReadonlyProperties
>('HTMLModElement');
