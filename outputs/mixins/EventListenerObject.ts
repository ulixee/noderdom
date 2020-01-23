import InternalHandler from '../InternalHandler';
import { IEvent, IEventListenerObject } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function EventListenerObject<TBase extends Constructor>(base: TBase) {
  return class extends base implements IEventListenerObject {
    public handleEvent(evt: IEvent): void {
      InternalHandler.run<IEventListenerObject, void>(this, 'handleEvent', [evt]);
    }
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpEventListenerObjectKeys: Set<string> = new Set([]);

export interface IEventListenerObjectRps {}
