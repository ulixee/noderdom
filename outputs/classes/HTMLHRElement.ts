import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLHRElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLHRElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLHRElement extends HTMLElement implements IHTMLHRElement {
    public get align(): string {
      return InternalHandler.get<IHTMLHRElement, string>(this, 'align');
    }

    public set align(value: string) {
      InternalHandler.set<IHTMLHRElement, string>(this, 'align', value);
    }

    public get color(): string {
      return InternalHandler.get<IHTMLHRElement, string>(this, 'color');
    }

    public set color(value: string) {
      InternalHandler.set<IHTMLHRElement, string>(this, 'color', value);
    }

    public get noShade(): boolean {
      return InternalHandler.get<IHTMLHRElement, boolean>(this, 'noShade');
    }

    public set noShade(value: boolean) {
      InternalHandler.set<IHTMLHRElement, boolean>(this, 'noShade', value);
    }

    public get size(): string {
      return InternalHandler.get<IHTMLHRElement, string>(this, 'size');
    }

    public set size(value: string) {
      InternalHandler.set<IHTMLHRElement, string>(this, 'size', value);
    }

    public get width(): string {
      return InternalHandler.get<IHTMLHRElement, string>(this, 'width');
    }

    public set width(value: string) {
      InternalHandler.set<IHTMLHRElement, string>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHRElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLHRElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLHRElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLHRElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLHRElementProperties extends IHTMLElementProperties {
  align?: string;
  color?: string;
  noShade?: boolean;
  size?: string;
  width?: string;
}

export interface IHTMLHRElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLHRElement } = InternalStateGenerator<
  IHTMLHRElement,
  IHTMLHRElementProperties,
  IHTMLHRElementReadonlyProperties
>('HTMLHRElement');
