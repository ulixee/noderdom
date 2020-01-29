import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLCollection, IHTMLMapElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLMapElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMapElement extends HTMLElement implements IHTMLMapElement {
    public get areas(): IHTMLCollection {
      return InternalHandler.get<IHTMLMapElement, IHTMLCollection>(this, 'areas');
    }

    public get name(): string {
      return InternalHandler.get<IHTMLMapElement, string>(this, 'name');
    }

    public set name(value: string) {
      InternalHandler.set<IHTMLMapElement, string>(this, 'name', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMapElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLMapElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMapElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLMapElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLMapElementProperties extends IHTMLElementProperties {
  areas?: IHTMLCollection;
  name?: string;
}

export interface IHTMLMapElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  areas?: IHTMLCollection;
}

export const { getState, setState, setReadonlyOfHTMLMapElement } = InternalStateGenerator<
  IHTMLMapElement,
  IHTMLMapElementProperties,
  IHTMLMapElementReadonlyProperties
>('HTMLMapElement');
