import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IDocument,
  IWindowProxy,
  IHTMLFrameElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLFrameElement extends HTMLElement implements IHTMLFrameElement {
  protected readonly _: IHTMLFrameElementRps = {};

  // properties

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

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLFrameElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLFrameElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLFrameElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLFrameElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLFrameElementRps extends IHTMLElementRps {
  readonly contentDocument?: IDocument | null;
  readonly contentWindow?: IWindowProxy | null;
}

export function setHTMLFrameElementRps(instance: IHTMLFrameElement, data: IHTMLFrameElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLFrameElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLFrameElement`);
    }
    properties[key] = value;
  });
}
