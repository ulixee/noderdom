import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IDocumentFragment,
  IHTMLTemplateElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLTemplateElement extends HTMLElement implements IHTMLTemplateElement {
  protected readonly _: IHTMLTemplateElementRps = {};

  // properties

  public get content(): IDocumentFragment {
    return InternalHandler.get<IHTMLTemplateElement, IDocumentFragment>(this, 'content');
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLTemplateElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLTemplateElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLTemplateElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLTemplateElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLTemplateElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLTemplateElementRps extends IHTMLElementRps {
  readonly content?: IDocumentFragment;
}

export function setHTMLTemplateElementRps(instance: IHTMLTemplateElement, data: IHTMLTemplateElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLTemplateElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLTemplateElement`);
    }
    properties[key] = value;
  });
}
