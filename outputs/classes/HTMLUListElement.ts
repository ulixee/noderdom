import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLUListElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLUListElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLUListElement extends HTMLElement implements IHTMLUListElement {
    public get compact(): boolean {
      return InternalHandler.get<IHTMLUListElement, boolean>(this, 'compact');
    }

    public set compact(value: boolean) {
      InternalHandler.set<IHTMLUListElement, boolean>(this, 'compact', value);
    }

    public get type(): string {
      return InternalHandler.get<IHTMLUListElement, string>(this, 'type');
    }

    public set type(value: string) {
      InternalHandler.set<IHTMLUListElement, string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLUListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLUListElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLUListElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLUListElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLUListElementProperties extends IHTMLElementProperties {
  compact?: boolean;
  type?: string;
}

export interface IHTMLUListElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLUListElement } = InternalStateGenerator<
  IHTMLUListElement,
  IHTMLUListElementProperties,
  IHTMLUListElementReadonlyProperties
>('HTMLUListElement');
