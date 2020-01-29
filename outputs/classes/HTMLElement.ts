import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IElement, IElementCSSInlineStyle, IElementContentEditable, IGlobalEventHandlers, IHTMLOrSVGElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLElement } from '../interfaces';
import { IElementProperties, IElementReadonlyProperties } from './Element';
import { IElementCSSInlineStyleProperties, IElementCSSInlineStyleReadonlyProperties } from '../mixins/ElementCSSInlineStyle';
import { IElementContentEditableProperties, IElementContentEditableReadonlyProperties } from '../mixins/ElementContentEditable';
import { IGlobalEventHandlersProperties, IGlobalEventHandlersReadonlyProperties } from '../mixins/GlobalEventHandlers';
import { IHTMLOrSVGElementProperties, IHTMLOrSVGElementReadonlyProperties } from '../mixins/HTMLOrSVGElement';

// tslint:disable-next-line:variable-name
export function HTMLElementGenerator(Element: Constructable<IElement>, ElementCSSInlineStyle: Constructable<IElementCSSInlineStyle>, ElementContentEditable: Constructable<IElementContentEditable>, GlobalEventHandlers: Constructable<IGlobalEventHandlers>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Element, [ElementCSSInlineStyle, ElementContentEditable, GlobalEventHandlers, HTMLOrSVGElement]) as unknown) as Constructable<IElement & IElementCSSInlineStyle & IElementContentEditable & IGlobalEventHandlers & IHTMLOrSVGElement>;

  return class HTMLElement extends Parent implements IHTMLElement {
    public get accessKey(): string {
      return InternalHandler.get<IHTMLElement, string>(this, 'accessKey');
    }

    public set accessKey(value: string) {
      InternalHandler.set<IHTMLElement, string>(this, 'accessKey', value);
    }

    public get dir(): string {
      return InternalHandler.get<IHTMLElement, string>(this, 'dir');
    }

    public set dir(value: string) {
      InternalHandler.set<IHTMLElement, string>(this, 'dir', value);
    }

    public get draggable(): boolean {
      return InternalHandler.get<IHTMLElement, boolean>(this, 'draggable');
    }

    public set draggable(value: boolean) {
      InternalHandler.set<IHTMLElement, boolean>(this, 'draggable', value);
    }

    public get hidden(): boolean {
      return InternalHandler.get<IHTMLElement, boolean>(this, 'hidden');
    }

    public set hidden(value: boolean) {
      InternalHandler.set<IHTMLElement, boolean>(this, 'hidden', value);
    }

    public get lang(): string {
      return InternalHandler.get<IHTMLElement, string>(this, 'lang');
    }

    public set lang(value: string) {
      InternalHandler.set<IHTMLElement, string>(this, 'lang', value);
    }

    public get offsetHeight(): number {
      return InternalHandler.get<IHTMLElement, number>(this, 'offsetHeight');
    }

    public get offsetLeft(): number {
      return InternalHandler.get<IHTMLElement, number>(this, 'offsetLeft');
    }

    public get offsetParent(): IElement | null {
      return InternalHandler.get<IHTMLElement, IElement | null>(this, 'offsetParent');
    }

    public get offsetTop(): number {
      return InternalHandler.get<IHTMLElement, number>(this, 'offsetTop');
    }

    public get offsetWidth(): number {
      return InternalHandler.get<IHTMLElement, number>(this, 'offsetWidth');
    }

    public get title(): string {
      return InternalHandler.get<IHTMLElement, string>(this, 'title');
    }

    public set title(value: string) {
      InternalHandler.set<IHTMLElement, string>(this, 'title', value);
    }

    public get translate(): boolean {
      return InternalHandler.get<IHTMLElement, boolean>(this, 'translate');
    }

    public set translate(value: boolean) {
      InternalHandler.set<IHTMLElement, boolean>(this, 'translate', value);
    }

    // methods

    public click(): void {
      InternalHandler.run<IHTMLElement, void>(this, 'click', []);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLElementProperties extends IElementProperties, IElementCSSInlineStyleProperties, IElementContentEditableProperties, IGlobalEventHandlersProperties, IHTMLOrSVGElementProperties {
  accessKey?: string;
  dir?: string;
  draggable?: boolean;
  hidden?: boolean;
  lang?: string;
  offsetHeight?: number;
  offsetLeft?: number;
  offsetParent?: IElement | null;
  offsetTop?: number;
  offsetWidth?: number;
  title?: string;
  translate?: boolean;
}

export interface IHTMLElementReadonlyProperties extends IElementReadonlyProperties, IElementCSSInlineStyleReadonlyProperties, IElementContentEditableReadonlyProperties, IGlobalEventHandlersReadonlyProperties, IHTMLOrSVGElementReadonlyProperties {
  offsetHeight?: number;
  offsetLeft?: number;
  offsetParent?: IElement | null;
  offsetTop?: number;
  offsetWidth?: number;
}

export const { getState, setState, setReadonlyOfHTMLElement } = InternalStateGenerator<
  IHTMLElement,
  IHTMLElementProperties,
  IHTMLElementReadonlyProperties
>('HTMLElement');
