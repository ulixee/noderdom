import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLOptGroupElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLOptGroupElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLOptGroupElement extends HTMLElement implements IHTMLOptGroupElement {
    public get disabled(): boolean {
      return InternalHandler.get<IHTMLOptGroupElement, boolean>(this, 'disabled');
    }

    public set disabled(value: boolean) {
      InternalHandler.set<IHTMLOptGroupElement, boolean>(this, 'disabled', value);
    }

    public get label(): string {
      return InternalHandler.get<IHTMLOptGroupElement, string>(this, 'label');
    }

    public set label(value: string) {
      InternalHandler.set<IHTMLOptGroupElement, string>(this, 'label', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptGroupElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLOptGroupElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLOptGroupElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLOptGroupElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLOptGroupElementProperties extends IHTMLElementProperties {
  disabled?: boolean;
  label?: string;
}

export interface IHTMLOptGroupElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLOptGroupElement } = InternalStateGenerator<
  IHTMLOptGroupElement,
  IHTMLOptGroupElementProperties,
  IHTMLOptGroupElementReadonlyProperties
>('HTMLOptGroupElement');
