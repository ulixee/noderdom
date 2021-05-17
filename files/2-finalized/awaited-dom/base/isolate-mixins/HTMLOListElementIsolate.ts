import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLOListElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOListElementIsolate, IHTMLOListElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLOListElementIsolate>('HTMLOListElementIsolate', getState, setState);

export default class HTMLOListElementIsolate implements IHTMLOListElementIsolate {
  public get compact(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'compact', false);
  }

  public get reversed(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'reversed', false);
  }

  public get start(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'start', false);
  }

  public get type(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'type', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLOListElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly compact?: Promise<boolean>;
  readonly reversed?: Promise<boolean>;
  readonly start?: Promise<number>;
  readonly type?: Promise<string>;
}

export const HTMLOListElementIsolatePropertyKeys = ['compact', 'reversed', 'start', 'type'];

export const HTMLOListElementIsolateConstantKeys = [];
