import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLSourceElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLSourceElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLSourceElement extends HTMLElement implements IHTMLSourceElement {
    public get media(): string {
      return InternalHandler.get<IHTMLSourceElement, string>(this, 'media');
    }

    public set media(value: string) {
      InternalHandler.set<IHTMLSourceElement, string>(this, 'media', value);
    }

    public get sizes(): string {
      return InternalHandler.get<IHTMLSourceElement, string>(this, 'sizes');
    }

    public set sizes(value: string) {
      InternalHandler.set<IHTMLSourceElement, string>(this, 'sizes', value);
    }

    public get src(): string {
      return InternalHandler.get<IHTMLSourceElement, string>(this, 'src');
    }

    public set src(value: string) {
      InternalHandler.set<IHTMLSourceElement, string>(this, 'src', value);
    }

    public get srcset(): string {
      return InternalHandler.get<IHTMLSourceElement, string>(this, 'srcset');
    }

    public set srcset(value: string) {
      InternalHandler.set<IHTMLSourceElement, string>(this, 'srcset', value);
    }

    public get type(): string {
      return InternalHandler.get<IHTMLSourceElement, string>(this, 'type');
    }

    public set type(value: string) {
      InternalHandler.set<IHTMLSourceElement, string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSourceElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLSourceElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSourceElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLSourceElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLSourceElementProperties extends IHTMLElementProperties {
  media?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  type?: string;
}

export interface IHTMLSourceElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLSourceElement } = InternalStateGenerator<
  IHTMLSourceElement,
  IHTMLSourceElementProperties,
  IHTMLSourceElementReadonlyProperties
>('HTMLSourceElement');
