import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLDirectoryElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLDirectoryElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLDirectoryElement extends HTMLElement implements IHTMLDirectoryElement {
    public get compact(): boolean {
      return InternalHandler.get<IHTMLDirectoryElement, boolean>(this, 'compact');
    }

    public set compact(value: boolean) {
      InternalHandler.set<IHTMLDirectoryElement, boolean>(this, 'compact', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDirectoryElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLDirectoryElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLDirectoryElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLDirectoryElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLDirectoryElementProperties extends IHTMLElementProperties {
  compact?: boolean;
}

export interface IHTMLDirectoryElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLDirectoryElement } = InternalStateGenerator<
  IHTMLDirectoryElement,
  IHTMLDirectoryElementProperties,
  IHTMLDirectoryElementReadonlyProperties
>('HTMLDirectoryElement');
