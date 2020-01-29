import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IElement, IElementCSSInlineStyle, IGlobalEventHandlers, IHTMLOrSVGElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ISVGElement } from '../interfaces';
import { IElementProperties, IElementReadonlyProperties } from './Element';
import { IElementCSSInlineStyleProperties, IElementCSSInlineStyleReadonlyProperties } from '../mixins/ElementCSSInlineStyle';
import { IGlobalEventHandlersProperties, IGlobalEventHandlersReadonlyProperties } from '../mixins/GlobalEventHandlers';
import { IHTMLOrSVGElementProperties, IHTMLOrSVGElementReadonlyProperties } from '../mixins/HTMLOrSVGElement';

// tslint:disable-next-line:variable-name
export function SVGElementGenerator(Element: Constructable<IElement>, ElementCSSInlineStyle: Constructable<IElementCSSInlineStyle>, GlobalEventHandlers: Constructable<IGlobalEventHandlers>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Element, [ElementCSSInlineStyle, GlobalEventHandlers, HTMLOrSVGElement]) as unknown) as Constructable<IElement & IElementCSSInlineStyle & IGlobalEventHandlers & IHTMLOrSVGElement>;

  return class SVGElement extends Parent implements ISVGElement {public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<ISVGElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<ISVGElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ISVGElementProperties extends IElementProperties, IElementCSSInlineStyleProperties, IGlobalEventHandlersProperties, IHTMLOrSVGElementProperties {}

export interface ISVGElementReadonlyProperties extends IElementReadonlyProperties, IElementCSSInlineStyleReadonlyProperties, IGlobalEventHandlersReadonlyProperties, IHTMLOrSVGElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfSVGElement } = InternalStateGenerator<
  ISVGElement,
  ISVGElementProperties,
  ISVGElementReadonlyProperties
>('SVGElement');
