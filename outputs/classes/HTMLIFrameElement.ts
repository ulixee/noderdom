import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDocument, IWindowProxy, IHTMLIFrameElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLIFrameElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLIFrameElement extends HTMLElement implements IHTMLIFrameElement {
    public get align(): string {
      return InternalHandler.get<IHTMLIFrameElement, string>(this, 'align');
    }

    public set align(value: string) {
      InternalHandler.set<IHTMLIFrameElement, string>(this, 'align', value);
    }

    public get allowFullscreen(): boolean {
      return InternalHandler.get<IHTMLIFrameElement, boolean>(this, 'allowFullscreen');
    }

    public set allowFullscreen(value: boolean) {
      InternalHandler.set<IHTMLIFrameElement, boolean>(this, 'allowFullscreen', value);
    }

    public get contentDocument(): IDocument | null {
      return InternalHandler.get<IHTMLIFrameElement, IDocument | null>(this, 'contentDocument');
    }

    public get contentWindow(): IWindowProxy | null {
      return InternalHandler.get<IHTMLIFrameElement, IWindowProxy | null>(this, 'contentWindow');
    }

    public get frameBorder(): string {
      return InternalHandler.get<IHTMLIFrameElement, string>(this, 'frameBorder');
    }

    public set frameBorder(value: string) {
      InternalHandler.set<IHTMLIFrameElement, string>(this, 'frameBorder', value);
    }

    public get height(): string {
      return InternalHandler.get<IHTMLIFrameElement, string>(this, 'height');
    }

    public set height(value: string) {
      InternalHandler.set<IHTMLIFrameElement, string>(this, 'height', value);
    }

    public get longDesc(): string {
      return InternalHandler.get<IHTMLIFrameElement, string>(this, 'longDesc');
    }

    public set longDesc(value: string) {
      InternalHandler.set<IHTMLIFrameElement, string>(this, 'longDesc', value);
    }

    public get marginHeight(): string {
      return InternalHandler.get<IHTMLIFrameElement, string>(this, 'marginHeight');
    }

    public set marginHeight(value: string) {
      InternalHandler.set<IHTMLIFrameElement, string>(this, 'marginHeight', value);
    }

    public get marginWidth(): string {
      return InternalHandler.get<IHTMLIFrameElement, string>(this, 'marginWidth');
    }

    public set marginWidth(value: string) {
      InternalHandler.set<IHTMLIFrameElement, string>(this, 'marginWidth', value);
    }

    public get name(): string {
      return InternalHandler.get<IHTMLIFrameElement, string>(this, 'name');
    }

    public set name(value: string) {
      InternalHandler.set<IHTMLIFrameElement, string>(this, 'name', value);
    }

    public get scrolling(): string {
      return InternalHandler.get<IHTMLIFrameElement, string>(this, 'scrolling');
    }

    public set scrolling(value: string) {
      InternalHandler.set<IHTMLIFrameElement, string>(this, 'scrolling', value);
    }

    public get src(): string {
      return InternalHandler.get<IHTMLIFrameElement, string>(this, 'src');
    }

    public set src(value: string) {
      InternalHandler.set<IHTMLIFrameElement, string>(this, 'src', value);
    }

    public get srcdoc(): string {
      return InternalHandler.get<IHTMLIFrameElement, string>(this, 'srcdoc');
    }

    public set srcdoc(value: string) {
      InternalHandler.set<IHTMLIFrameElement, string>(this, 'srcdoc', value);
    }

    public get width(): string {
      return InternalHandler.get<IHTMLIFrameElement, string>(this, 'width');
    }

    public set width(value: string) {
      InternalHandler.set<IHTMLIFrameElement, string>(this, 'width', value);
    }

    // methods

    public getSVGDocument(): IDocument | null {
      return InternalHandler.run<IHTMLIFrameElement, IDocument | null>(this, 'getSVGDocument', []);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLIFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLIFrameElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLIFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLIFrameElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLIFrameElementProperties extends IHTMLElementProperties {
  align?: string;
  allowFullscreen?: boolean;
  contentDocument?: IDocument | null;
  contentWindow?: IWindowProxy | null;
  frameBorder?: string;
  height?: string;
  longDesc?: string;
  marginHeight?: string;
  marginWidth?: string;
  name?: string;
  scrolling?: string;
  src?: string;
  srcdoc?: string;
  width?: string;
}

export interface IHTMLIFrameElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  contentDocument?: IDocument | null;
  contentWindow?: IWindowProxy | null;
}

export const { getState, setState, setReadonlyOfHTMLIFrameElement } = InternalStateGenerator<
  IHTMLIFrameElement,
  IHTMLIFrameElementProperties,
  IHTMLIFrameElementReadonlyProperties
>('HTMLIFrameElement');
