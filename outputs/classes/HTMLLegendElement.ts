import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLFormElement, IHTMLLegendElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLLegendElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLLegendElement extends HTMLElement implements IHTMLLegendElement {
    public get align(): string {
      return InternalHandler.get<IHTMLLegendElement, string>(this, 'align');
    }

    public set align(value: string) {
      InternalHandler.set<IHTMLLegendElement, string>(this, 'align', value);
    }

    public get form(): IHTMLFormElement | null {
      return InternalHandler.get<IHTMLLegendElement, IHTMLFormElement | null>(this, 'form');
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLegendElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLLegendElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLLegendElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLLegendElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLLegendElementProperties extends IHTMLElementProperties {
  align?: string;
  form?: IHTMLFormElement | null;
}

export interface IHTMLLegendElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  form?: IHTMLFormElement | null;
}

export const { getState, setState, setReadonlyOfHTMLLegendElement } = InternalStateGenerator<
  IHTMLLegendElement,
  IHTMLLegendElementProperties,
  IHTMLLegendElementReadonlyProperties
>('HTMLLegendElement');
