import InternalHandler from '../InternalHandler';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDOMTokenList, IHTMLAreaElement } from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';
import HTMLHyperlinkElementUtils, { IHTMLHyperlinkElementUtilsRps, rpHTMLHyperlinkElementUtilsKeys } from '../mixins/HTMLHyperlinkElementUtils';

// tslint:disable-next-line:variable-name
const HTMLAreaElementBase = HTMLHyperlinkElementUtils(HTMLElement);

export default class HTMLAreaElement extends HTMLAreaElementBase implements IHTMLAreaElement {
  protected readonly _: IHTMLAreaElementRps = {};

  // properties

  public get alt(): string {
    return InternalHandler.get<IHTMLAreaElement, string>(this, 'alt');
  }

  public set alt(value: string) {
    InternalHandler.set<IHTMLAreaElement, string>(this, 'alt', value);
  }

  public get coords(): string {
    return InternalHandler.get<IHTMLAreaElement, string>(this, 'coords');
  }

  public set coords(value: string) {
    InternalHandler.set<IHTMLAreaElement, string>(this, 'coords', value);
  }

  public get noHref(): boolean {
    return InternalHandler.get<IHTMLAreaElement, boolean>(this, 'noHref');
  }

  public set noHref(value: boolean) {
    InternalHandler.set<IHTMLAreaElement, boolean>(this, 'noHref', value);
  }

  public get rel(): string {
    return InternalHandler.get<IHTMLAreaElement, string>(this, 'rel');
  }

  public set rel(value: string) {
    InternalHandler.set<IHTMLAreaElement, string>(this, 'rel', value);
  }

  public get relList(): IDOMTokenList {
    return InternalHandler.get<IHTMLAreaElement, IDOMTokenList>(this, 'relList');
  }

  public get shape(): string {
    return InternalHandler.get<IHTMLAreaElement, string>(this, 'shape');
  }

  public set shape(value: string) {
    InternalHandler.set<IHTMLAreaElement, string>(this, 'shape', value);
  }

  public get target(): string {
    return InternalHandler.get<IHTMLAreaElement, string>(this, 'target');
  }

  public set target(value: string) {
    InternalHandler.set<IHTMLAreaElement, string>(this, 'target', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    InternalHandler.run<IHTMLAreaElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLAreaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    InternalHandler.run<IHTMLAreaElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLAreaElementKeys: Set<string> = new Set([...rpHTMLElementKeys, ...rpHTMLHyperlinkElementUtilsKeys]);

export interface IHTMLAreaElementRps extends IHTMLElementRps, IHTMLHyperlinkElementUtilsRps {
  readonly relList?: IDOMTokenList;
}

export function setHTMLAreaElementRps(instance: IHTMLAreaElement, data: IHTMLAreaElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLAreaElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLAreaElement`);
    }
    properties[key] = value;
  });
}
