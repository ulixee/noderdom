import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ISVGElement, ISVGTests, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ISVGGraphicsElement } from '../interfaces';
import { ISVGElementProperties, ISVGElementReadonlyProperties } from './SVGElement';
import { ISVGTestsProperties, ISVGTestsReadonlyProperties } from '../mixins/SVGTests';

// tslint:disable-next-line:variable-name
export function SVGGraphicsElementGenerator(SVGElement: Constructable<ISVGElement>, SVGTests: Constructable<ISVGTests>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(SVGElement, [SVGTests]) as unknown) as Constructable<ISVGElement & ISVGTests>;

  return class SVGGraphicsElement extends Parent implements ISVGGraphicsElement {public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGGraphicsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<ISVGGraphicsElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGGraphicsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<ISVGGraphicsElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ISVGGraphicsElementProperties extends ISVGElementProperties, ISVGTestsProperties {}

export interface ISVGGraphicsElementReadonlyProperties extends ISVGElementReadonlyProperties, ISVGTestsReadonlyProperties {}

export const { getState, setState, setReadonlyOfSVGGraphicsElement } = InternalStateGenerator<
  ISVGGraphicsElement,
  ISVGGraphicsElementProperties,
  ISVGGraphicsElementReadonlyProperties
>('SVGGraphicsElement');
