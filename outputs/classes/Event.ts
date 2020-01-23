import InternalHandler from '../InternalHandler';
import { IEventTarget, IEventInit, IEvent } from '../interfaces';

export default class Event implements IEvent {
  public static readonly AT_TARGET: number = 2;
  public static readonly BUBBLING_PHASE: number = 3;
  public static readonly CAPTURING_PHASE: number = 1;
  public static readonly NONE: number = 0;

  public readonly AT_TARGET: number = 2;
  public readonly BUBBLING_PHASE: number = 3;
  public readonly CAPTURING_PHASE: number = 1;
  public readonly NONE: number = 0;

  // store readonly properties

  protected readonly _: IEventRps = {};

  // constructor required for this class

  constructor(type: string, eventInitDict?: IEventInit) {
    InternalHandler.construct(this, [type, eventInitDict]);
  }

  // properties

  public get bubbles(): boolean {
    return InternalHandler.get<IEvent, boolean>(this, 'bubbles');
  }

  public get cancelBubble(): boolean {
    return InternalHandler.get<IEvent, boolean>(this, 'cancelBubble');
  }

  public set cancelBubble(value: boolean) {
    InternalHandler.set<IEvent, boolean>(this, 'cancelBubble', value);
  }

  public get cancelable(): boolean {
    return InternalHandler.get<IEvent, boolean>(this, 'cancelable');
  }

  public get composed(): boolean {
    return InternalHandler.get<IEvent, boolean>(this, 'composed');
  }

  public get currentTarget(): IEventTarget | null {
    return InternalHandler.get<IEvent, IEventTarget | null>(this, 'currentTarget');
  }

  public get defaultPrevented(): boolean {
    return InternalHandler.get<IEvent, boolean>(this, 'defaultPrevented');
  }

  public get eventPhase(): number {
    return InternalHandler.get<IEvent, number>(this, 'eventPhase');
  }

  public get isTrusted(): boolean {
    return InternalHandler.get<IEvent, boolean>(this, 'isTrusted');
  }

  public get returnValue(): boolean {
    return InternalHandler.get<IEvent, boolean>(this, 'returnValue');
  }

  public set returnValue(value: boolean) {
    InternalHandler.set<IEvent, boolean>(this, 'returnValue', value);
  }

  public get srcElement(): IEventTarget | null {
    return InternalHandler.get<IEvent, IEventTarget | null>(this, 'srcElement');
  }

  public get target(): IEventTarget | null {
    return InternalHandler.get<IEvent, IEventTarget | null>(this, 'target');
  }

  public get timeStamp(): number {
    return InternalHandler.get<IEvent, number>(this, 'timeStamp');
  }

  public get type(): string {
    return InternalHandler.get<IEvent, string>(this, 'type');
  }

  // methods

  public composedPath(): Iterable<IEventTarget> {
    return InternalHandler.run<IEvent, Iterable<IEventTarget>>(this, 'composedPath', []);
  }

  public initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void {
    InternalHandler.run<IEvent, void>(this, 'initEvent', [type, bubbles, cancelable]);
  }

  public preventDefault(): void {
    InternalHandler.run<IEvent, void>(this, 'preventDefault', []);
  }

  public stopImmediatePropagation(): void {
    InternalHandler.run<IEvent, void>(this, 'stopImmediatePropagation', []);
  }

  public stopPropagation(): void {
    InternalHandler.run<IEvent, void>(this, 'stopPropagation', []);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpEventKeys: Set<string> = new Set([]);

export interface IEventRps {
  readonly bubbles?: boolean;
  readonly cancelable?: boolean;
  readonly composed?: boolean;
  readonly currentTarget?: IEventTarget | null;
  readonly defaultPrevented?: boolean;
  readonly eventPhase?: number;
  readonly isTrusted?: boolean;
  readonly srcElement?: IEventTarget | null;
  readonly target?: IEventTarget | null;
  readonly timeStamp?: number;
  readonly type?: string;
}

export function setEventRps(instance: IEvent, data: IEventRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpEventKeys.has(key)) {
      throw new Error(`${key} is not a property of Event`);
    }
    properties[key] = value;
  });
}
