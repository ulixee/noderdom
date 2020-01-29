import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLEmbedElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLEmbedElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLEmbedElement extends HTMLElement implements IHTMLEmbedElement {
    public get align(): string {
      return InternalHandler.get<IHTMLEmbedElement, string>(this, 'align');
    }

    public set align(value: string) {
      InternalHandler.set<IHTMLEmbedElement, string>(this, 'align', value);
    }

    public get height(): string {
      return InternalHandler.get<IHTMLEmbedElement, string>(this, 'height');
    }

    public set height(value: string) {
      InternalHandler.set<IHTMLEmbedElement, string>(this, 'height', value);
    }

    public get name(): string {
      return InternalHandler.get<IHTMLEmbedElement, string>(this, 'name');
    }

    public set name(value: string) {
      InternalHandler.set<IHTMLEmbedElement, string>(this, 'name', value);
    }

    public get src(): string {
      return InternalHandler.get<IHTMLEmbedElement, string>(this, 'src');
    }

    public set src(value: string) {
      InternalHandler.set<IHTMLEmbedElement, string>(this, 'src', value);
    }

    public get type(): string {
      return InternalHandler.get<IHTMLEmbedElement, string>(this, 'type');
    }

    public set type(value: string) {
      InternalHandler.set<IHTMLEmbedElement, string>(this, 'type', value);
    }

    public get width(): string {
      return InternalHandler.get<IHTMLEmbedElement, string>(this, 'width');
    }

    public set width(value: string) {
      InternalHandler.set<IHTMLEmbedElement, string>(this, 'width', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLEmbedElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLEmbedElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLEmbedElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLEmbedElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLEmbedElementProperties extends IHTMLElementProperties {
  align?: string;
  height?: string;
  name?: string;
  src?: string;
  type?: string;
  width?: string;
}

export interface IHTMLEmbedElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLEmbedElement } = InternalStateGenerator<
  IHTMLEmbedElement,
  IHTMLEmbedElementProperties,
  IHTMLEmbedElementReadonlyProperties
>('HTMLEmbedElement');
