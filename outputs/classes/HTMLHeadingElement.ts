import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLHeadingElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLHeadingElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHeadingElement extends HTMLElement implements IHTMLHeadingElement {
    public get align(): string {
      return InternalHandler.get<IHTMLHeadingElement, string>(this, 'align');
    }

    public set align(value: string) {
      InternalHandler.set<IHTMLHeadingElement, string>(this, 'align', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHeadingElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLHeadingElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHeadingElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLHeadingElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLHeadingElementProperties extends IHTMLElementProperties {
  align?: string;
}

export interface IHTMLHeadingElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLHeadingElement } = InternalStateGenerator<
  IHTMLHeadingElement,
  IHTMLHeadingElementProperties,
  IHTMLHeadingElementReadonlyProperties
>('HTMLHeadingElement');
