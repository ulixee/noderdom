import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLMarqueeElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLMarqueeElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMarqueeElement extends HTMLElement implements IHTMLMarqueeElement {
    public get behavior(): string {
      return InternalHandler.get<IHTMLMarqueeElement, string>(this, 'behavior');
    }

    public set behavior(value: string) {
      InternalHandler.set<IHTMLMarqueeElement, string>(this, 'behavior', value);
    }

    public get bgColor(): string {
      return InternalHandler.get<IHTMLMarqueeElement, string>(this, 'bgColor');
    }

    public set bgColor(value: string) {
      InternalHandler.set<IHTMLMarqueeElement, string>(this, 'bgColor', value);
    }

    public get direction(): string {
      return InternalHandler.get<IHTMLMarqueeElement, string>(this, 'direction');
    }

    public set direction(value: string) {
      InternalHandler.set<IHTMLMarqueeElement, string>(this, 'direction', value);
    }

    public get height(): string {
      return InternalHandler.get<IHTMLMarqueeElement, string>(this, 'height');
    }

    public set height(value: string) {
      InternalHandler.set<IHTMLMarqueeElement, string>(this, 'height', value);
    }

    public get hspace(): number {
      return InternalHandler.get<IHTMLMarqueeElement, number>(this, 'hspace');
    }

    public set hspace(value: number) {
      InternalHandler.set<IHTMLMarqueeElement, number>(this, 'hspace', value);
    }

    public get scrollAmount(): number {
      return InternalHandler.get<IHTMLMarqueeElement, number>(this, 'scrollAmount');
    }

    public set scrollAmount(value: number) {
      InternalHandler.set<IHTMLMarqueeElement, number>(this, 'scrollAmount', value);
    }

    public get scrollDelay(): number {
      return InternalHandler.get<IHTMLMarqueeElement, number>(this, 'scrollDelay');
    }

    public set scrollDelay(value: number) {
      InternalHandler.set<IHTMLMarqueeElement, number>(this, 'scrollDelay', value);
    }

    public get trueSpeed(): boolean {
      return InternalHandler.get<IHTMLMarqueeElement, boolean>(this, 'trueSpeed');
    }

    public set trueSpeed(value: boolean) {
      InternalHandler.set<IHTMLMarqueeElement, boolean>(this, 'trueSpeed', value);
    }

    public get vspace(): number {
      return InternalHandler.get<IHTMLMarqueeElement, number>(this, 'vspace');
    }

    public set vspace(value: number) {
      InternalHandler.set<IHTMLMarqueeElement, number>(this, 'vspace', value);
    }

    public get width(): string {
      return InternalHandler.get<IHTMLMarqueeElement, string>(this, 'width');
    }

    public set width(value: string) {
      InternalHandler.set<IHTMLMarqueeElement, string>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMarqueeElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLMarqueeElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMarqueeElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLMarqueeElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLMarqueeElementProperties extends IHTMLElementProperties {
  behavior?: string;
  bgColor?: string;
  direction?: string;
  height?: string;
  hspace?: number;
  scrollAmount?: number;
  scrollDelay?: number;
  trueSpeed?: boolean;
  vspace?: number;
  width?: string;
}

export interface IHTMLMarqueeElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLMarqueeElement } = InternalStateGenerator<
  IHTMLMarqueeElement,
  IHTMLMarqueeElementProperties,
  IHTMLMarqueeElementReadonlyProperties
>('HTMLMarqueeElement');
