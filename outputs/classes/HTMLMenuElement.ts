import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLMenuElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLMenuElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMenuElement extends HTMLElement implements IHTMLMenuElement {
    public get compact(): boolean {
      return InternalHandler.get<IHTMLMenuElement, boolean>(this, 'compact');
    }

    public set compact(value: boolean) {
      InternalHandler.set<IHTMLMenuElement, boolean>(this, 'compact', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMenuElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLMenuElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMenuElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLMenuElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLMenuElementProperties extends IHTMLElementProperties {
  compact?: boolean;
}

export interface IHTMLMenuElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLMenuElement } = InternalStateGenerator<
  IHTMLMenuElement,
  IHTMLMenuElementProperties,
  IHTMLMenuElementReadonlyProperties
>('HTMLMenuElement');
