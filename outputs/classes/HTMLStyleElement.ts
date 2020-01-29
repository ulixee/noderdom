import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, ILinkStyle, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLStyleElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';
import { ILinkStyleProperties, ILinkStyleReadonlyProperties } from '../mixins/LinkStyle';

// tslint:disable-next-line:variable-name
export function HTMLStyleElementGenerator(HTMLElement: Constructable<IHTMLElement>, LinkStyle: Constructable<ILinkStyle>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(HTMLElement, [LinkStyle]) as unknown) as Constructable<IHTMLElement & ILinkStyle>;

  return class HTMLStyleElement extends Parent implements IHTMLStyleElement {
    public get media(): string {
      return InternalHandler.get<IHTMLStyleElement, string>(this, 'media');
    }

    public set media(value: string) {
      InternalHandler.set<IHTMLStyleElement, string>(this, 'media', value);
    }

    public get type(): string {
      return InternalHandler.get<IHTMLStyleElement, string>(this, 'type');
    }

    public set type(value: string) {
      InternalHandler.set<IHTMLStyleElement, string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLStyleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLStyleElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLStyleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLStyleElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLStyleElementProperties extends IHTMLElementProperties, ILinkStyleProperties {
  media?: string;
  type?: string;
}

export interface IHTMLStyleElementReadonlyProperties extends IHTMLElementReadonlyProperties, ILinkStyleReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLStyleElement } = InternalStateGenerator<
  IHTMLStyleElement,
  IHTMLStyleElementProperties,
  IHTMLStyleElementReadonlyProperties
>('HTMLStyleElement');
