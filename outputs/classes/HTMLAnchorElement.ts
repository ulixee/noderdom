import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IHTMLHyperlinkElementUtils, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDOMTokenList, IHTMLAnchorElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';
import { IHTMLHyperlinkElementUtilsProperties, IHTMLHyperlinkElementUtilsReadonlyProperties } from '../mixins/HTMLHyperlinkElementUtils';

// tslint:disable-next-line:variable-name
export function HTMLAnchorElementGenerator(HTMLElement: Constructable<IHTMLElement>, HTMLHyperlinkElementUtils: Constructable<IHTMLHyperlinkElementUtils>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(HTMLElement, [HTMLHyperlinkElementUtils]) as unknown) as Constructable<IHTMLElement & IHTMLHyperlinkElementUtils>;

  return class HTMLAnchorElement extends Parent implements IHTMLAnchorElement {
    public get charset(): string {
      return InternalHandler.get<IHTMLAnchorElement, string>(this, 'charset');
    }

    public set charset(value: string) {
      InternalHandler.set<IHTMLAnchorElement, string>(this, 'charset', value);
    }

    public get coords(): string {
      return InternalHandler.get<IHTMLAnchorElement, string>(this, 'coords');
    }

    public set coords(value: string) {
      InternalHandler.set<IHTMLAnchorElement, string>(this, 'coords', value);
    }

    public get download(): string {
      return InternalHandler.get<IHTMLAnchorElement, string>(this, 'download');
    }

    public set download(value: string) {
      InternalHandler.set<IHTMLAnchorElement, string>(this, 'download', value);
    }

    public get hreflang(): string {
      return InternalHandler.get<IHTMLAnchorElement, string>(this, 'hreflang');
    }

    public set hreflang(value: string) {
      InternalHandler.set<IHTMLAnchorElement, string>(this, 'hreflang', value);
    }

    public get name(): string {
      return InternalHandler.get<IHTMLAnchorElement, string>(this, 'name');
    }

    public set name(value: string) {
      InternalHandler.set<IHTMLAnchorElement, string>(this, 'name', value);
    }

    public get rel(): string {
      return InternalHandler.get<IHTMLAnchorElement, string>(this, 'rel');
    }

    public set rel(value: string) {
      InternalHandler.set<IHTMLAnchorElement, string>(this, 'rel', value);
    }

    public get relList(): IDOMTokenList {
      return InternalHandler.get<IHTMLAnchorElement, IDOMTokenList>(this, 'relList');
    }

    public get rev(): string {
      return InternalHandler.get<IHTMLAnchorElement, string>(this, 'rev');
    }

    public set rev(value: string) {
      InternalHandler.set<IHTMLAnchorElement, string>(this, 'rev', value);
    }

    public get shape(): string {
      return InternalHandler.get<IHTMLAnchorElement, string>(this, 'shape');
    }

    public set shape(value: string) {
      InternalHandler.set<IHTMLAnchorElement, string>(this, 'shape', value);
    }

    public get target(): string {
      return InternalHandler.get<IHTMLAnchorElement, string>(this, 'target');
    }

    public set target(value: string) {
      InternalHandler.set<IHTMLAnchorElement, string>(this, 'target', value);
    }

    public get text(): string {
      return InternalHandler.get<IHTMLAnchorElement, string>(this, 'text');
    }

    public set text(value: string) {
      InternalHandler.set<IHTMLAnchorElement, string>(this, 'text', value);
    }

    public get type(): string {
      return InternalHandler.get<IHTMLAnchorElement, string>(this, 'type');
    }

    public set type(value: string) {
      InternalHandler.set<IHTMLAnchorElement, string>(this, 'type', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAnchorElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLAnchorElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAnchorElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLAnchorElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLAnchorElementProperties extends IHTMLElementProperties, IHTMLHyperlinkElementUtilsProperties {
  charset?: string;
  coords?: string;
  download?: string;
  hreflang?: string;
  name?: string;
  rel?: string;
  relList?: IDOMTokenList;
  rev?: string;
  shape?: string;
  target?: string;
  text?: string;
  type?: string;
}

export interface IHTMLAnchorElementReadonlyProperties extends IHTMLElementReadonlyProperties, IHTMLHyperlinkElementUtilsReadonlyProperties {
  relList?: IDOMTokenList;
}

export const { getState, setState, setReadonlyOfHTMLAnchorElement } = InternalStateGenerator<
  IHTMLAnchorElement,
  IHTMLAnchorElementProperties,
  IHTMLAnchorElementReadonlyProperties
>('HTMLAnchorElement');
