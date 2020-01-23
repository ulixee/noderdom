import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  ISVGElement,
} from '../interfaces';
import Element, { IElementRps, rpElementKeys } from './Element';
import ElementCSSInlineStyle, {
  IElementCSSInlineStyleRps,
  rpElementCSSInlineStyleKeys,
} from '../mixins/ElementCSSInlineStyle';
import GlobalEventHandlers, { IGlobalEventHandlersRps, rpGlobalEventHandlersKeys } from '../mixins/GlobalEventHandlers';
import HTMLOrSVGElement, { IHTMLOrSVGElementRps, rpHTMLOrSVGElementKeys } from '../mixins/HTMLOrSVGElement';

// tslint:disable-next-line:variable-name
const SVGElementBase = ElementCSSInlineStyle(GlobalEventHandlers(HTMLOrSVGElement(Element)));

export default class SVGElement extends SVGElementBase implements ISVGElement {
  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: ISVGElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<ISVGElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: ISVGElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<ISVGElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpSVGElementKeys: Set<string> = new Set([
  ...rpElementKeys,
  ...rpElementCSSInlineStyleKeys,
  ...rpGlobalEventHandlersKeys,
  ...rpHTMLOrSVGElementKeys,
]);

export interface ISVGElementRps
  extends IElementRps,
    IElementCSSInlineStyleRps,
    IGlobalEventHandlersRps,
    IHTMLOrSVGElementRps {}

export function setSVGElementRps(instance: ISVGElement, data: ISVGElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpSVGElementKeys.has(key)) {
      throw new Error(`${key} is not a property of SVGElement`);
    }
    properties[key] = value;
  });
}
