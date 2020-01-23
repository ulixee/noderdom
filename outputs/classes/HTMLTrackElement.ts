import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLTrackElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLTrackElement extends HTMLElement implements IHTMLTrackElement {
  public static readonly ERROR: number = 3;
  public static readonly LOADED: number = 2;
  public static readonly LOADING: number = 1;
  public static readonly NONE: number = 0;

  public readonly ERROR: number = 3;
  public readonly LOADED: number = 2;
  public readonly LOADING: number = 1;
  public readonly NONE: number = 0;

  // store readonly properties

  protected readonly _: IHTMLTrackElementRps = {};

  // properties

  public get default(): boolean {
    return InternalHandler.get<IHTMLTrackElement, boolean>(this, 'default');
  }

  public set default(value: boolean) {
    InternalHandler.set<IHTMLTrackElement, boolean>(this, 'default', value);
  }

  public get kind(): string {
    return InternalHandler.get<IHTMLTrackElement, string>(this, 'kind');
  }

  public set kind(value: string) {
    InternalHandler.set<IHTMLTrackElement, string>(this, 'kind', value);
  }

  public get label(): string {
    return InternalHandler.get<IHTMLTrackElement, string>(this, 'label');
  }

  public set label(value: string) {
    InternalHandler.set<IHTMLTrackElement, string>(this, 'label', value);
  }

  public get readyState(): number {
    return InternalHandler.get<IHTMLTrackElement, number>(this, 'readyState');
  }

  public get src(): string {
    return InternalHandler.get<IHTMLTrackElement, string>(this, 'src');
  }

  public set src(value: string) {
    InternalHandler.set<IHTMLTrackElement, string>(this, 'src', value);
  }

  public get srclang(): string {
    return InternalHandler.get<IHTMLTrackElement, string>(this, 'srclang');
  }

  public set srclang(value: string) {
    InternalHandler.set<IHTMLTrackElement, string>(this, 'srclang', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLTrackElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLTrackElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLTrackElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLTrackElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLTrackElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLTrackElementRps extends IHTMLElementRps {
  readonly readyState?: number;
}

export function setHTMLTrackElementRps(instance: IHTMLTrackElement, data: IHTMLTrackElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLTrackElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLTrackElement`);
    }
    properties[key] = value;
  });
}
