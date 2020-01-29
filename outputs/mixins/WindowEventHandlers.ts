import InternalHandler from '../InternalHandler';
import { IWindowEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IEvent, IWindowEventHandlers } from '../interfaces';

export default class WindowEventHandlers implements IWindowEventHandlers {
  public get onafterprint(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onafterprint');
  }

  public set onafterprint(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onafterprint', value);
  }

  public get onbeforeprint(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onbeforeprint');
  }

  public set onbeforeprint(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onbeforeprint', value);
  }

  public get onbeforeunload(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onbeforeunload');
  }

  public set onbeforeunload(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onbeforeunload', value);
  }

  public get onhashchange(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onhashchange');
  }

  public set onhashchange(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onhashchange', value);
  }

  public get onlanguagechange(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onlanguagechange');
  }

  public set onlanguagechange(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onlanguagechange', value);
  }

  public get onmessage(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onmessage');
  }

  public set onmessage(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onmessage', value);
  }

  public get onmessageerror(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onmessageerror');
  }

  public set onmessageerror(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onmessageerror', value);
  }

  public get onoffline(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onoffline');
  }

  public set onoffline(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onoffline', value);
  }

  public get ononline(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'ononline');
  }

  public set ononline(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'ononline', value);
  }

  public get onpagehide(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onpagehide');
  }

  public set onpagehide(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onpagehide', value);
  }

  public get onpageshow(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onpageshow');
  }

  public set onpageshow(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onpageshow', value);
  }

  public get onpopstate(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onpopstate');
  }

  public set onpopstate(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onpopstate', value);
  }

  public get onrejectionhandled(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onrejectionhandled');
  }

  public set onrejectionhandled(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onrejectionhandled', value);
  }

  public get onstorage(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onstorage');
  }

  public set onstorage(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onstorage', value);
  }

  public get onunhandledrejection(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onunhandledrejection');
  }

  public set onunhandledrejection(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onunhandledrejection', value);
  }

  public get onunload(): ((this: IWindowEventHandlers, ev: IEvent) => any) | null {
    return InternalHandler.get<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onunload');
  }

  public set onunload(value: ((this: IWindowEventHandlers, ev: IEvent) => any) | null) {
    InternalHandler.set<IWindowEventHandlers, ((this: IWindowEventHandlers, ev: IEvent) => any) | null>(this, 'onunload', value);
  }

  public addEventListener<K extends keyof IWindowEventHandlersEventMap>(type: K, listener: (this: IWindowEventHandlers, ev: IWindowEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IWindowEventHandlers, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IWindowEventHandlersEventMap>(type: K, listener: (this: IWindowEventHandlers, ev: IWindowEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IWindowEventHandlers, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IWindowEventHandlersProperties {
  onafterprint?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onbeforeprint?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onbeforeunload?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onhashchange?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onlanguagechange?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onmessage?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onmessageerror?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onoffline?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  ononline?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onpagehide?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onpageshow?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onpopstate?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onrejectionhandled?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onstorage?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onunhandledrejection?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
  onunload?: ((this: IWindowEventHandlers, ev: IEvent) => any) | null;
}

export interface IWindowEventHandlersReadonlyProperties {}
