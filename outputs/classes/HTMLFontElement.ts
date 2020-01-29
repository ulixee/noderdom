import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFontElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLFontElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFontElement extends HTMLElement implements IHTMLFontElement {
    public get color(): string {
      return InternalHandler.get<IHTMLFontElement, string>(this, 'color');
    }

    public set color(value: string) {
      InternalHandler.set<IHTMLFontElement, string>(this, 'color', value);
    }

    public get face(): string {
      return InternalHandler.get<IHTMLFontElement, string>(this, 'face');
    }

    public set face(value: string) {
      InternalHandler.set<IHTMLFontElement, string>(this, 'face', value);
    }

    public get size(): string {
      return InternalHandler.get<IHTMLFontElement, string>(this, 'size');
    }

    public set size(value: string) {
      InternalHandler.set<IHTMLFontElement, string>(this, 'size', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFontElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLFontElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFontElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLFontElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLFontElementProperties extends IHTMLElementProperties {
  color?: string;
  face?: string;
  size?: string;
}

export interface IHTMLFontElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLFontElement } = InternalStateGenerator<
  IHTMLFontElement,
  IHTMLFontElementProperties,
  IHTMLFontElementReadonlyProperties
>('HTMLFontElement');
