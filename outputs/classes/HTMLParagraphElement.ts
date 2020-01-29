import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLParagraphElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLParagraphElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLParagraphElement extends HTMLElement implements IHTMLParagraphElement {
    public get align(): string {
      return InternalHandler.get<IHTMLParagraphElement, string>(this, 'align');
    }

    public set align(value: string) {
      InternalHandler.set<IHTMLParagraphElement, string>(this, 'align', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLParagraphElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLParagraphElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLParagraphElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLParagraphElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLParagraphElementProperties extends IHTMLElementProperties {
  align?: string;
}

export interface IHTMLParagraphElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLParagraphElement } = InternalStateGenerator<
  IHTMLParagraphElement,
  IHTMLParagraphElementProperties,
  IHTMLParagraphElementReadonlyProperties
>('HTMLParagraphElement');
