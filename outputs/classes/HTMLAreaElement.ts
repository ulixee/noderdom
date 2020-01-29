import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IHTMLHyperlinkElementUtils, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDOMTokenList, IHTMLAreaElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';
import { IHTMLHyperlinkElementUtilsProperties, IHTMLHyperlinkElementUtilsReadonlyProperties } from '../mixins/HTMLHyperlinkElementUtils';

// tslint:disable-next-line:variable-name
export function HTMLAreaElementGenerator(HTMLElement: Constructable<IHTMLElement>, HTMLHyperlinkElementUtils: Constructable<IHTMLHyperlinkElementUtils>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(HTMLElement, [HTMLHyperlinkElementUtils]) as unknown) as Constructable<IHTMLElement & IHTMLHyperlinkElementUtils>;

  return class HTMLAreaElement extends Parent implements IHTMLAreaElement {
    public get alt(): string {
      return InternalHandler.get<IHTMLAreaElement, string>(this, 'alt');
    }

    public set alt(value: string) {
      InternalHandler.set<IHTMLAreaElement, string>(this, 'alt', value);
    }

    public get coords(): string {
      return InternalHandler.get<IHTMLAreaElement, string>(this, 'coords');
    }

    public set coords(value: string) {
      InternalHandler.set<IHTMLAreaElement, string>(this, 'coords', value);
    }

    public get noHref(): boolean {
      return InternalHandler.get<IHTMLAreaElement, boolean>(this, 'noHref');
    }

    public set noHref(value: boolean) {
      InternalHandler.set<IHTMLAreaElement, boolean>(this, 'noHref', value);
    }

    public get rel(): string {
      return InternalHandler.get<IHTMLAreaElement, string>(this, 'rel');
    }

    public set rel(value: string) {
      InternalHandler.set<IHTMLAreaElement, string>(this, 'rel', value);
    }

    public get relList(): IDOMTokenList {
      return InternalHandler.get<IHTMLAreaElement, IDOMTokenList>(this, 'relList');
    }

    public get shape(): string {
      return InternalHandler.get<IHTMLAreaElement, string>(this, 'shape');
    }

    public set shape(value: string) {
      InternalHandler.set<IHTMLAreaElement, string>(this, 'shape', value);
    }

    public get target(): string {
      return InternalHandler.get<IHTMLAreaElement, string>(this, 'target');
    }

    public set target(value: string) {
      InternalHandler.set<IHTMLAreaElement, string>(this, 'target', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLAreaElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLAreaElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLAreaElementProperties extends IHTMLElementProperties, IHTMLHyperlinkElementUtilsProperties {
  alt?: string;
  coords?: string;
  noHref?: boolean;
  rel?: string;
  relList?: IDOMTokenList;
  shape?: string;
  target?: string;
}

export interface IHTMLAreaElementReadonlyProperties extends IHTMLElementReadonlyProperties, IHTMLHyperlinkElementUtilsReadonlyProperties {
  relList?: IDOMTokenList;
}

export const { getState, setState, setReadonlyOfHTMLAreaElement } = InternalStateGenerator<
  IHTMLAreaElement,
  IHTMLAreaElementProperties,
  IHTMLAreaElementReadonlyProperties
>('HTMLAreaElement');
