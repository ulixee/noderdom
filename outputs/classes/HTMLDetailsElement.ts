import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDetailsElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLDetailsElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDetailsElement extends HTMLElement implements IHTMLDetailsElement {
    public get open(): boolean {
      return InternalHandler.get<IHTMLDetailsElement, boolean>(this, 'open');
    }

    public set open(value: boolean) {
      InternalHandler.set<IHTMLDetailsElement, boolean>(this, 'open', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDetailsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLDetailsElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDetailsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLDetailsElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLDetailsElementProperties extends IHTMLElementProperties {
  open?: boolean;
}

export interface IHTMLDetailsElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLDetailsElement } = InternalStateGenerator<
  IHTMLDetailsElement,
  IHTMLDetailsElementProperties,
  IHTMLDetailsElementReadonlyProperties
>('HTMLDetailsElement');
