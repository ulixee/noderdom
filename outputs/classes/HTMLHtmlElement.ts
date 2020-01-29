import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLHtmlElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLHtmlElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHtmlElement extends HTMLElement implements IHTMLHtmlElement {
    public get version(): string {
      return InternalHandler.get<IHTMLHtmlElement, string>(this, 'version');
    }

    public set version(value: string) {
      InternalHandler.set<IHTMLHtmlElement, string>(this, 'version', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHtmlElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLHtmlElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHtmlElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLHtmlElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLHtmlElementProperties extends IHTMLElementProperties {
  version?: string;
}

export interface IHTMLHtmlElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLHtmlElement } = InternalStateGenerator<
  IHTMLHtmlElement,
  IHTMLHtmlElementProperties,
  IHTMLHtmlElementReadonlyProperties
>('HTMLHtmlElement');
