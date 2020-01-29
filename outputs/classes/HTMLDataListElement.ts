import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLCollection, IHTMLDataListElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLDataListElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDataListElement extends HTMLElement implements IHTMLDataListElement {
    public get options(): IHTMLCollection {
      return InternalHandler.get<IHTMLDataListElement, IHTMLCollection>(this, 'options');
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDataListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLDataListElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDataListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLDataListElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLDataListElementProperties extends IHTMLElementProperties {
  options?: IHTMLCollection;
}

export interface IHTMLDataListElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  options?: IHTMLCollection;
}

export const { getState, setState, setReadonlyOfHTMLDataListElement } = InternalStateGenerator<
  IHTMLDataListElement,
  IHTMLDataListElementProperties,
  IHTMLDataListElementReadonlyProperties
>('HTMLDataListElement');
