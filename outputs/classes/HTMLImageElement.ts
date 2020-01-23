import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IHTMLImageElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLImageElement extends HTMLElement implements IHTMLImageElement {
  protected readonly _: IHTMLImageElementRps = {};

  // properties

  public get align(): string {
    return InternalHandler.get<IHTMLImageElement, string>(this, 'align');
  }

  public set align(value: string) {
    InternalHandler.set<IHTMLImageElement, string>(this, 'align', value);
  }

  public get alt(): string {
    return InternalHandler.get<IHTMLImageElement, string>(this, 'alt');
  }

  public set alt(value: string) {
    InternalHandler.set<IHTMLImageElement, string>(this, 'alt', value);
  }

  public get border(): string {
    return InternalHandler.get<IHTMLImageElement, string>(this, 'border');
  }

  public set border(value: string) {
    InternalHandler.set<IHTMLImageElement, string>(this, 'border', value);
  }

  public get complete(): boolean {
    return InternalHandler.get<IHTMLImageElement, boolean>(this, 'complete');
  }

  public get crossOrigin(): string | null {
    return InternalHandler.get<IHTMLImageElement, string | null>(this, 'crossOrigin');
  }

  public set crossOrigin(value: string | null) {
    InternalHandler.set<IHTMLImageElement, string | null>(this, 'crossOrigin', value);
  }

  public get currentSrc(): string {
    return InternalHandler.get<IHTMLImageElement, string>(this, 'currentSrc');
  }

  public get height(): number {
    return InternalHandler.get<IHTMLImageElement, number>(this, 'height');
  }

  public set height(value: number) {
    InternalHandler.set<IHTMLImageElement, number>(this, 'height', value);
  }

  public get hspace(): number {
    return InternalHandler.get<IHTMLImageElement, number>(this, 'hspace');
  }

  public set hspace(value: number) {
    InternalHandler.set<IHTMLImageElement, number>(this, 'hspace', value);
  }

  public get isMap(): boolean {
    return InternalHandler.get<IHTMLImageElement, boolean>(this, 'isMap');
  }

  public set isMap(value: boolean) {
    InternalHandler.set<IHTMLImageElement, boolean>(this, 'isMap', value);
  }

  public get longDesc(): string {
    return InternalHandler.get<IHTMLImageElement, string>(this, 'longDesc');
  }

  public set longDesc(value: string) {
    InternalHandler.set<IHTMLImageElement, string>(this, 'longDesc', value);
  }

  public get lowsrc(): string {
    return InternalHandler.get<IHTMLImageElement, string>(this, 'lowsrc');
  }

  public set lowsrc(value: string) {
    InternalHandler.set<IHTMLImageElement, string>(this, 'lowsrc', value);
  }

  public get name(): string {
    return InternalHandler.get<IHTMLImageElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<IHTMLImageElement, string>(this, 'name', value);
  }

  public get naturalHeight(): number {
    return InternalHandler.get<IHTMLImageElement, number>(this, 'naturalHeight');
  }

  public get naturalWidth(): number {
    return InternalHandler.get<IHTMLImageElement, number>(this, 'naturalWidth');
  }

  public get sizes(): string {
    return InternalHandler.get<IHTMLImageElement, string>(this, 'sizes');
  }

  public set sizes(value: string) {
    InternalHandler.set<IHTMLImageElement, string>(this, 'sizes', value);
  }

  public get src(): string {
    return InternalHandler.get<IHTMLImageElement, string>(this, 'src');
  }

  public set src(value: string) {
    InternalHandler.set<IHTMLImageElement, string>(this, 'src', value);
  }

  public get srcset(): string {
    return InternalHandler.get<IHTMLImageElement, string>(this, 'srcset');
  }

  public set srcset(value: string) {
    InternalHandler.set<IHTMLImageElement, string>(this, 'srcset', value);
  }

  public get useMap(): string {
    return InternalHandler.get<IHTMLImageElement, string>(this, 'useMap');
  }

  public set useMap(value: string) {
    InternalHandler.set<IHTMLImageElement, string>(this, 'useMap', value);
  }

  public get vspace(): number {
    return InternalHandler.get<IHTMLImageElement, number>(this, 'vspace');
  }

  public set vspace(value: number) {
    InternalHandler.set<IHTMLImageElement, number>(this, 'vspace', value);
  }

  public get width(): number {
    return InternalHandler.get<IHTMLImageElement, number>(this, 'width');
  }

  public set width(value: number) {
    InternalHandler.set<IHTMLImageElement, number>(this, 'width', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLImageElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLImageElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLImageElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLImageElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLImageElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLImageElementRps extends IHTMLElementRps {
  readonly complete?: boolean;
  readonly currentSrc?: string;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
}

export function setHTMLImageElementRps(instance: IHTMLImageElement, data: IHTMLImageElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLImageElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLImageElement`);
    }
    properties[key] = value;
  });
}
