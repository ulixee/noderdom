import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLVideoElement,
} from '../interfaces';
import HTMLMediaElement, { IHTMLMediaElementRps, rpHTMLMediaElementKeys } from './HTMLMediaElement';

export default class HTMLVideoElement extends HTMLMediaElement implements IHTMLVideoElement {
  protected readonly _: IHTMLVideoElementRps = {};

  // properties

  public get height(): number {
    return InternalHandler.get<IHTMLVideoElement, number>(this, 'height');
  }

  public set height(value: number) {
    InternalHandler.set<IHTMLVideoElement, number>(this, 'height', value);
  }

  public get playsInline(): boolean {
    return InternalHandler.get<IHTMLVideoElement, boolean>(this, 'playsInline');
  }

  public set playsInline(value: boolean) {
    InternalHandler.set<IHTMLVideoElement, boolean>(this, 'playsInline', value);
  }

  public get poster(): string {
    return InternalHandler.get<IHTMLVideoElement, string>(this, 'poster');
  }

  public set poster(value: string) {
    InternalHandler.set<IHTMLVideoElement, string>(this, 'poster', value);
  }

  public get videoHeight(): number {
    return InternalHandler.get<IHTMLVideoElement, number>(this, 'videoHeight');
  }

  public get videoWidth(): number {
    return InternalHandler.get<IHTMLVideoElement, number>(this, 'videoWidth');
  }

  public get width(): number {
    return InternalHandler.get<IHTMLVideoElement, number>(this, 'width');
  }

  public set width(value: number) {
    InternalHandler.set<IHTMLVideoElement, number>(this, 'width', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLVideoElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLVideoElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLVideoElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLVideoElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLVideoElementKeys: Set<string> = new Set([...rpHTMLMediaElementKeys]);

export interface IHTMLVideoElementRps extends IHTMLMediaElementRps {
  readonly videoHeight?: number;
  readonly videoWidth?: number;
}

export function setHTMLVideoElementRps(instance: IHTMLVideoElement, data: IHTMLVideoElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLVideoElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLVideoElement`);
    }
    properties[key] = value;
  });
}
