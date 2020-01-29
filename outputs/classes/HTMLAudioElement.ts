import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLMediaElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLAudioElement } from '../interfaces';
import { IHTMLMediaElementProperties, IHTMLMediaElementReadonlyProperties } from './HTMLMediaElement';

// tslint:disable-next-line:variable-name
export function HTMLAudioElementGenerator(HTMLMediaElement: Constructable<IHTMLMediaElement>) {
  return class HTMLAudioElement extends HTMLMediaElement implements IHTMLAudioElement {public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAudioElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLAudioElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAudioElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLAudioElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLAudioElementProperties extends IHTMLMediaElementProperties {}

export interface IHTMLAudioElementReadonlyProperties extends IHTMLMediaElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLAudioElement } = InternalStateGenerator<
  IHTMLAudioElement,
  IHTMLAudioElementProperties,
  IHTMLAudioElementReadonlyProperties
>('HTMLAudioElement');
