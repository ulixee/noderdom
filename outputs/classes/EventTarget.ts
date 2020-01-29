import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IEventListenerOrEventListenerObject, IAddEventListenerOptions, IEventListenerOptions, IEvent, IEventTarget } from '../interfaces';

export default class EventTarget implements IEventTarget {
  public addEventListener(type: string, callback: IEventListenerOrEventListenerObject | null, options?: IAddEventListenerOptions | boolean): void {
    InternalHandler.run<IEventTarget, void>(this, 'addEventListener', [type, callback, options]);
  }

  public dispatchEvent(event: IEvent): boolean {
    return InternalHandler.run<IEventTarget, boolean>(this, 'dispatchEvent', [event]);
  }

  public removeEventListener(type: string, callback: IEventListenerOrEventListenerObject | null, options?: IEventListenerOptions | boolean): void {
    InternalHandler.run<IEventTarget, void>(this, 'removeEventListener', [type, callback, options]);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IEventTargetProperties {}

export interface IEventTargetReadonlyProperties {}

export const { getState, setState, setReadonlyOfEventTarget } = InternalStateGenerator<
  IEventTarget,
  IEventTargetProperties,
  IEventTargetReadonlyProperties
>('EventTarget');
