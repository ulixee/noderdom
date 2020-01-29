import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, ILinkStyle, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDOMTokenList, IHTMLLinkElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';
import { ILinkStyleProperties, ILinkStyleReadonlyProperties } from '../mixins/LinkStyle';

// tslint:disable-next-line:variable-name
export function HTMLLinkElementGenerator(HTMLElement: Constructable<IHTMLElement>, LinkStyle: Constructable<ILinkStyle>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(HTMLElement, [LinkStyle]) as unknown) as Constructable<IHTMLElement & ILinkStyle>;

  return class HTMLLinkElement extends Parent implements IHTMLLinkElement {
    public get charset(): string {
      return InternalHandler.get<IHTMLLinkElement, string>(this, 'charset');
    }

    public set charset(value: string) {
      InternalHandler.set<IHTMLLinkElement, string>(this, 'charset', value);
    }

    public get crossOrigin(): string | null {
      return InternalHandler.get<IHTMLLinkElement, string | null>(this, 'crossOrigin');
    }

    public set crossOrigin(value: string | null) {
      InternalHandler.set<IHTMLLinkElement, string | null>(this, 'crossOrigin', value);
    }

    public get href(): string {
      return InternalHandler.get<IHTMLLinkElement, string>(this, 'href');
    }

    public set href(value: string) {
      InternalHandler.set<IHTMLLinkElement, string>(this, 'href', value);
    }

    public get hreflang(): string {
      return InternalHandler.get<IHTMLLinkElement, string>(this, 'hreflang');
    }

    public set hreflang(value: string) {
      InternalHandler.set<IHTMLLinkElement, string>(this, 'hreflang', value);
    }

    public get media(): string {
      return InternalHandler.get<IHTMLLinkElement, string>(this, 'media');
    }

    public set media(value: string) {
      InternalHandler.set<IHTMLLinkElement, string>(this, 'media', value);
    }

    public get rel(): string {
      return InternalHandler.get<IHTMLLinkElement, string>(this, 'rel');
    }

    public set rel(value: string) {
      InternalHandler.set<IHTMLLinkElement, string>(this, 'rel', value);
    }

    public get relList(): IDOMTokenList {
      return InternalHandler.get<IHTMLLinkElement, IDOMTokenList>(this, 'relList');
    }

    public get rev(): string {
      return InternalHandler.get<IHTMLLinkElement, string>(this, 'rev');
    }

    public set rev(value: string) {
      InternalHandler.set<IHTMLLinkElement, string>(this, 'rev', value);
    }

    public get target(): string {
      return InternalHandler.get<IHTMLLinkElement, string>(this, 'target');
    }

    public set target(value: string) {
      InternalHandler.set<IHTMLLinkElement, string>(this, 'target', value);
    }

    public get type(): string {
      return InternalHandler.get<IHTMLLinkElement, string>(this, 'type');
    }

    public set type(value: string) {
      InternalHandler.set<IHTMLLinkElement, string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLinkElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLLinkElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLinkElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLLinkElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLLinkElementProperties extends IHTMLElementProperties, ILinkStyleProperties {
  charset?: string;
  crossOrigin?: string | null;
  href?: string;
  hreflang?: string;
  media?: string;
  rel?: string;
  relList?: IDOMTokenList;
  rev?: string;
  target?: string;
  type?: string;
}

export interface IHTMLLinkElementReadonlyProperties extends IHTMLElementReadonlyProperties, ILinkStyleReadonlyProperties {
  relList?: IDOMTokenList;
}

export const { getState, setState, setReadonlyOfHTMLLinkElement } = InternalStateGenerator<
  IHTMLLinkElement,
  IHTMLLinkElementProperties,
  IHTMLLinkElementReadonlyProperties
>('HTMLLinkElement');
