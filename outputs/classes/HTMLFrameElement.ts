import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDocument, IWindowProxy, IHTMLFrameElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLFrameElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLFrameElement extends HTMLElement implements IHTMLFrameElement {
    public get contentDocument(): IDocument | null {
      return InternalHandler.get<IHTMLFrameElement, IDocument | null>(this, 'contentDocument');
    }

    public get contentWindow(): IWindowProxy | null {
      return InternalHandler.get<IHTMLFrameElement, IWindowProxy | null>(this, 'contentWindow');
    }

    public get frameBorder(): string {
      return InternalHandler.get<IHTMLFrameElement, string>(this, 'frameBorder');
    }

    public set frameBorder(value: string) {
      InternalHandler.set<IHTMLFrameElement, string>(this, 'frameBorder', value);
    }

    public get longDesc(): string {
      return InternalHandler.get<IHTMLFrameElement, string>(this, 'longDesc');
    }

    public set longDesc(value: string) {
      InternalHandler.set<IHTMLFrameElement, string>(this, 'longDesc', value);
    }

    public get marginHeight(): string {
      return InternalHandler.get<IHTMLFrameElement, string>(this, 'marginHeight');
    }

    public set marginHeight(value: string) {
      InternalHandler.set<IHTMLFrameElement, string>(this, 'marginHeight', value);
    }

    public get marginWidth(): string {
      return InternalHandler.get<IHTMLFrameElement, string>(this, 'marginWidth');
    }

    public set marginWidth(value: string) {
      InternalHandler.set<IHTMLFrameElement, string>(this, 'marginWidth', value);
    }

    public get name(): string {
      return InternalHandler.get<IHTMLFrameElement, string>(this, 'name');
    }

    public set name(value: string) {
      InternalHandler.set<IHTMLFrameElement, string>(this, 'name', value);
    }

    public get noResize(): boolean {
      return InternalHandler.get<IHTMLFrameElement, boolean>(this, 'noResize');
    }

    public set noResize(value: boolean) {
      InternalHandler.set<IHTMLFrameElement, boolean>(this, 'noResize', value);
    }

    public get scrolling(): string {
      return InternalHandler.get<IHTMLFrameElement, string>(this, 'scrolling');
    }

    public set scrolling(value: string) {
      InternalHandler.set<IHTMLFrameElement, string>(this, 'scrolling', value);
    }

    public get src(): string {
      return InternalHandler.get<IHTMLFrameElement, string>(this, 'src');
    }

    public set src(value: string) {
      InternalHandler.set<IHTMLFrameElement, string>(this, 'src', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLFrameElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLFrameElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLFrameElementProperties extends IHTMLElementProperties {
  contentDocument?: IDocument | null;
  contentWindow?: IWindowProxy | null;
  frameBorder?: string;
  longDesc?: string;
  marginHeight?: string;
  marginWidth?: string;
  name?: string;
  noResize?: boolean;
  scrolling?: string;
  src?: string;
}

export interface IHTMLFrameElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  contentDocument?: IDocument | null;
  contentWindow?: IWindowProxy | null;
}

export const { getState, setState, setReadonlyOfHTMLFrameElement } = InternalStateGenerator<
  IHTMLFrameElement,
  IHTMLFrameElementProperties,
  IHTMLFrameElementReadonlyProperties
>('HTMLFrameElement');
