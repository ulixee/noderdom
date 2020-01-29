import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLTableCaptionElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLTableCaptionElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableCaptionElement extends HTMLElement implements IHTMLTableCaptionElement {
    public get align(): string {
      return InternalHandler.get<IHTMLTableCaptionElement, string>(this, 'align');
    }

    public set align(value: string) {
      InternalHandler.set<IHTMLTableCaptionElement, string>(this, 'align', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCaptionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLTableCaptionElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTableCaptionElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLTableCaptionElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLTableCaptionElementProperties extends IHTMLElementProperties {
  align?: string;
}

export interface IHTMLTableCaptionElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLTableCaptionElement } = InternalStateGenerator<
  IHTMLTableCaptionElement,
  IHTMLTableCaptionElementProperties,
  IHTMLTableCaptionElementReadonlyProperties
>('HTMLTableCaptionElement');
