import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLQuoteElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLQuoteElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLQuoteElement extends HTMLElement implements IHTMLQuoteElement {
    public get cite(): string {
      return InternalHandler.get<IHTMLQuoteElement, string>(this, 'cite');
    }

    public set cite(value: string) {
      InternalHandler.set<IHTMLQuoteElement, string>(this, 'cite', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLQuoteElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLQuoteElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLQuoteElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLQuoteElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLQuoteElementProperties extends IHTMLElementProperties {
  cite?: string;
}

export interface IHTMLQuoteElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLQuoteElement } = InternalStateGenerator<
  IHTMLQuoteElement,
  IHTMLQuoteElementProperties,
  IHTMLQuoteElementReadonlyProperties
>('HTMLQuoteElement');
