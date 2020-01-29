import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IHTMLLabelElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLLabelElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLLabelElement extends HTMLElement implements IHTMLLabelElement {
    public get control(): IHTMLElement | null {
      return InternalHandler.get<IHTMLLabelElement, IHTMLElement | null>(this, 'control');
    }

    public get form(): IHTMLFormElement | null {
      return InternalHandler.get<IHTMLLabelElement, IHTMLFormElement | null>(this, 'form');
    }

    public get htmlFor(): string {
      return InternalHandler.get<IHTMLLabelElement, string>(this, 'htmlFor');
    }

    public set htmlFor(value: string) {
      InternalHandler.set<IHTMLLabelElement, string>(this, 'htmlFor', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLabelElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLLabelElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLabelElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLLabelElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLLabelElementProperties extends IHTMLElementProperties {
  control?: IHTMLElement | null;
  form?: IHTMLFormElement | null;
  htmlFor?: string;
}

export interface IHTMLLabelElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  control?: IHTMLElement | null;
  form?: IHTMLFormElement | null;
}

export const { getState, setState, setReadonlyOfHTMLLabelElement } = InternalStateGenerator<
  IHTMLLabelElement,
  IHTMLLabelElementProperties,
  IHTMLLabelElementReadonlyProperties
>('HTMLLabelElement');
