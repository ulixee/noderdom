import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ISVGGraphicsElement, IWindowEventHandlers, ISVGSVGElementEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ISVGNumber, IElement, ISVGSVGElement } from '../interfaces';
import { ISVGGraphicsElementProperties, ISVGGraphicsElementReadonlyProperties } from './SVGGraphicsElement';
import { IWindowEventHandlersProperties, IWindowEventHandlersReadonlyProperties } from '../mixins/WindowEventHandlers';

// tslint:disable-next-line:variable-name
export function SVGSVGElementGenerator(SVGGraphicsElement: Constructable<ISVGGraphicsElement>, WindowEventHandlers: Constructable<IWindowEventHandlers>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(SVGGraphicsElement, [WindowEventHandlers]) as unknown) as Constructable<ISVGGraphicsElement & IWindowEventHandlers>;

  return class SVGSVGElement extends Parent implements ISVGSVGElement {
    public createSVGNumber(): ISVGNumber {
      return InternalHandler.run<ISVGSVGElement, ISVGNumber>(this, 'createSVGNumber', []);
    }

    public forceRedraw(): void {
      InternalHandler.run<ISVGSVGElement, void>(this, 'forceRedraw', []);
    }

    public getElementById(elementId: string): IElement {
      return InternalHandler.run<ISVGSVGElement, IElement>(this, 'getElementById', [elementId]);
    }

    public suspendRedraw(maxWaitMilliseconds: number): number {
      return InternalHandler.run<ISVGSVGElement, number>(this, 'suspendRedraw', [maxWaitMilliseconds]);
    }

    public unsuspendRedraw(suspendHandleID: number): void {
      InternalHandler.run<ISVGSVGElement, void>(this, 'unsuspendRedraw', [suspendHandleID]);
    }

    public unsuspendRedrawAll(): void {
      InternalHandler.run<ISVGSVGElement, void>(this, 'unsuspendRedrawAll', []);
    }

    public addEventListener<K extends keyof ISVGSVGElementEventMap>(type: K, listener: (this: ISVGSVGElement, ev: ISVGSVGElementEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<ISVGSVGElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof ISVGSVGElementEventMap>(type: K, listener: (this: ISVGSVGElement, ev: ISVGSVGElementEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<ISVGSVGElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ISVGSVGElementProperties extends ISVGGraphicsElementProperties, IWindowEventHandlersProperties {}

export interface ISVGSVGElementReadonlyProperties extends ISVGGraphicsElementReadonlyProperties, IWindowEventHandlersReadonlyProperties {}

export const { getState, setState, setReadonlyOfSVGSVGElement } = InternalStateGenerator<
  ISVGSVGElement,
  ISVGSVGElementProperties,
  ISVGSVGElementReadonlyProperties
>('SVGSVGElement');
