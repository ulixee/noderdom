import InternalHandler from '../InternalHandler';
import { IEvent, IEventListenerObject } from '../interfaces';

export default class EventListenerObject implements IEventListenerObject {
  public handleEvent(evt: IEvent): void {
    InternalHandler.run<IEventListenerObject, void>(this, 'handleEvent', [evt]);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IEventListenerObjectProperties {}

export interface IEventListenerObjectReadonlyProperties {}
