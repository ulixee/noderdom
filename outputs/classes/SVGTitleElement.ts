import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ISVGElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ISVGTitleElement } from '../interfaces';
import { ISVGElementProperties, ISVGElementReadonlyProperties } from './SVGElement';

// tslint:disable-next-line:variable-name
export function SVGTitleElementGenerator(SVGElement: Constructable<ISVGElement>) {
  return class SVGTitleElement extends SVGElement implements ISVGTitleElement {public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGTitleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<ISVGTitleElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGTitleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<ISVGTitleElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ISVGTitleElementProperties extends ISVGElementProperties {}

export interface ISVGTitleElementReadonlyProperties extends ISVGElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfSVGTitleElement } = InternalStateGenerator<
  ISVGTitleElement,
  ISVGTitleElementProperties,
  ISVGTitleElementReadonlyProperties
>('SVGTitleElement');
