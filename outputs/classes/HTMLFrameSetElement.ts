import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IWindowEventHandlers, IHTMLFrameSetElementEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFrameSetElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';
import { IWindowEventHandlersProperties, IWindowEventHandlersReadonlyProperties } from '../mixins/WindowEventHandlers';

// tslint:disable-next-line:variable-name
export function HTMLFrameSetElementGenerator(HTMLElement: Constructable<IHTMLElement>, WindowEventHandlers: Constructable<IWindowEventHandlers>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(HTMLElement, [WindowEventHandlers]) as unknown) as Constructable<IHTMLElement & IWindowEventHandlers>;

  return class HTMLFrameSetElement extends Parent implements IHTMLFrameSetElement {
    public get cols(): string {
      return InternalHandler.get<IHTMLFrameSetElement, string>(this, 'cols');
    }

    public set cols(value: string) {
      InternalHandler.set<IHTMLFrameSetElement, string>(this, 'cols', value);
    }

    public get rows(): string {
      return InternalHandler.get<IHTMLFrameSetElement, string>(this, 'rows');
    }

    public set rows(value: string) {
      InternalHandler.set<IHTMLFrameSetElement, string>(this, 'rows', value);
    }

    public addEventListener<K extends keyof IHTMLFrameSetElementEventMap>(type: K, listener: (this: IHTMLFrameSetElement, ev: IHTMLFrameSetElementEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLFrameSetElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IHTMLFrameSetElementEventMap>(type: K, listener: (this: IHTMLFrameSetElement, ev: IHTMLFrameSetElementEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLFrameSetElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLFrameSetElementProperties extends IHTMLElementProperties, IWindowEventHandlersProperties {
  cols?: string;
  rows?: string;
}

export interface IHTMLFrameSetElementReadonlyProperties extends IHTMLElementReadonlyProperties, IWindowEventHandlersReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLFrameSetElement } = InternalStateGenerator<
  IHTMLFrameSetElement,
  IHTMLFrameSetElementProperties,
  IHTMLFrameSetElementReadonlyProperties
>('HTMLFrameSetElement');
