import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLMediaElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLVideoElement } from '../interfaces';
import { IHTMLMediaElementProperties, IHTMLMediaElementReadonlyProperties } from './HTMLMediaElement';

// tslint:disable-next-line:variable-name
export function HTMLVideoElementGenerator(HTMLMediaElement: Constructable<IHTMLMediaElement>) {
  return class HTMLVideoElement extends HTMLMediaElement implements IHTMLVideoElement {
    public get height(): number {
      return InternalHandler.get<IHTMLVideoElement, number>(this, 'height');
    }

    public set height(value: number) {
      InternalHandler.set<IHTMLVideoElement, number>(this, 'height', value);
    }

    public get playsInline(): boolean {
      return InternalHandler.get<IHTMLVideoElement, boolean>(this, 'playsInline');
    }

    public set playsInline(value: boolean) {
      InternalHandler.set<IHTMLVideoElement, boolean>(this, 'playsInline', value);
    }

    public get poster(): string {
      return InternalHandler.get<IHTMLVideoElement, string>(this, 'poster');
    }

    public set poster(value: string) {
      InternalHandler.set<IHTMLVideoElement, string>(this, 'poster', value);
    }

    public get videoHeight(): number {
      return InternalHandler.get<IHTMLVideoElement, number>(this, 'videoHeight');
    }

    public get videoWidth(): number {
      return InternalHandler.get<IHTMLVideoElement, number>(this, 'videoWidth');
    }

    public get width(): number {
      return InternalHandler.get<IHTMLVideoElement, number>(this, 'width');
    }

    public set width(value: number) {
      InternalHandler.set<IHTMLVideoElement, number>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLVideoElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLVideoElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLVideoElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLVideoElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLVideoElementProperties extends IHTMLMediaElementProperties {
  height?: number;
  playsInline?: boolean;
  poster?: string;
  videoHeight?: number;
  videoWidth?: number;
  width?: number;
}

export interface IHTMLVideoElementReadonlyProperties extends IHTMLMediaElementReadonlyProperties {
  videoHeight?: number;
  videoWidth?: number;
}

export const { getState, setState, setReadonlyOfHTMLVideoElement } = InternalStateGenerator<
  IHTMLVideoElement,
  IHTMLVideoElementProperties,
  IHTMLVideoElementReadonlyProperties
>('HTMLVideoElement');
