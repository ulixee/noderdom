import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDOMTokenList, IHTMLAnchorElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';
import HTMLHyperlinkElementUtils, { IHTMLHyperlinkElementUtilsRps, rpHTMLHyperlinkElementUtilsKeys } from '../mixins/HTMLHyperlinkElementUtils';

// tslint:disable-next-line:variable-name
const HTMLAnchorElementBase = HTMLHyperlinkElementUtils(HTMLElement);

export default class HTMLAnchorElement extends HTMLAnchorElementBase implements IHTMLAnchorElement {
  protected readonly _: IHTMLAnchorElementRps = {};

  // properties

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
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLAnchorElementKeys: Set<string> = new Set([...rpHTMLElementKeys, ...rpHTMLHyperlinkElementUtilsKeys]);

export interface IHTMLAnchorElementRps extends IHTMLElementRps, IHTMLHyperlinkElementUtilsRps {
  readonly relList?: IDOMTokenList;
}

export function setHTMLAnchorElementRps(instance: IHTMLAnchorElement, data: IHTMLAnchorElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLAnchorElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLAnchorElement`);
    }
    properties[key] = value;
  });
}
