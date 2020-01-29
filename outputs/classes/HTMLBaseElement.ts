import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLBaseElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLBaseElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLBaseElement extends HTMLElement implements IHTMLBaseElement {
    public get href(): string {
      return InternalHandler.get<IHTMLBaseElement, string>(this, 'href');
    }

    public set href(value: string) {
      InternalHandler.set<IHTMLBaseElement, string>(this, 'href', value);
    }

    public get target(): string {
      return InternalHandler.get<IHTMLBaseElement, string>(this, 'target');
    }

    public set target(value: string) {
      InternalHandler.set<IHTMLBaseElement, string>(this, 'target', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLBaseElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLBaseElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLBaseElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLBaseElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLBaseElementProperties extends IHTMLElementProperties {
  href?: string;
  target?: string;
}

export interface IHTMLBaseElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLBaseElement } = InternalStateGenerator<
  IHTMLBaseElement,
  IHTMLBaseElementProperties,
  IHTMLBaseElementReadonlyProperties
>('HTMLBaseElement');
