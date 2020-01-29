import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IWindowEventHandlers, IHTMLBodyElementEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLBodyElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';
import { IWindowEventHandlersProperties, IWindowEventHandlersReadonlyProperties } from '../mixins/WindowEventHandlers';

// tslint:disable-next-line:variable-name
export function HTMLBodyElementGenerator(HTMLElement: Constructable<IHTMLElement>, WindowEventHandlers: Constructable<IWindowEventHandlers>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(HTMLElement, [WindowEventHandlers]) as unknown) as Constructable<IHTMLElement & IWindowEventHandlers>;

  return class HTMLBodyElement extends Parent implements IHTMLBodyElement {
    public get aLink(): string {
      return InternalHandler.get<IHTMLBodyElement, string>(this, 'aLink');
    }

    public set aLink(value: string) {
      InternalHandler.set<IHTMLBodyElement, string>(this, 'aLink', value);
    }

    public get background(): string {
      return InternalHandler.get<IHTMLBodyElement, string>(this, 'background');
    }

    public set background(value: string) {
      InternalHandler.set<IHTMLBodyElement, string>(this, 'background', value);
    }

    public get bgColor(): string {
      return InternalHandler.get<IHTMLBodyElement, string>(this, 'bgColor');
    }

    public set bgColor(value: string) {
      InternalHandler.set<IHTMLBodyElement, string>(this, 'bgColor', value);
    }

    public get link(): string {
      return InternalHandler.get<IHTMLBodyElement, string>(this, 'link');
    }

    public set link(value: string) {
      InternalHandler.set<IHTMLBodyElement, string>(this, 'link', value);
    }

    public get text(): string {
      return InternalHandler.get<IHTMLBodyElement, string>(this, 'text');
    }

    public set text(value: string) {
      InternalHandler.set<IHTMLBodyElement, string>(this, 'text', value);
    }

    public get vLink(): string {
      return InternalHandler.get<IHTMLBodyElement, string>(this, 'vLink');
    }

    public set vLink(value: string) {
      InternalHandler.set<IHTMLBodyElement, string>(this, 'vLink', value);
    }

    public addEventListener<K extends keyof IHTMLBodyElementEventMap>(type: K, listener: (this: IHTMLBodyElement, ev: IHTMLBodyElementEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLBodyElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IHTMLBodyElementEventMap>(type: K, listener: (this: IHTMLBodyElement, ev: IHTMLBodyElementEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLBodyElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLBodyElementProperties extends IHTMLElementProperties, IWindowEventHandlersProperties {
  aLink?: string;
  background?: string;
  bgColor?: string;
  link?: string;
  text?: string;
  vLink?: string;
}

export interface IHTMLBodyElementReadonlyProperties extends IHTMLElementReadonlyProperties, IWindowEventHandlersReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLBodyElement } = InternalStateGenerator<
  IHTMLBodyElement,
  IHTMLBodyElementProperties,
  IHTMLBodyElementReadonlyProperties
>('HTMLBodyElement');
