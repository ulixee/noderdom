import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLProgressElementIsolate } from '../interfaces/isolate';
import { ISuperNodeList } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLProgressElementIsolate, IHTMLProgressElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLProgressElementIsolate>('HTMLProgressElementIsolate', getState, setState);

export default class HTMLProgressElementIsolate implements IHTMLProgressElementIsolate {
  public get labels(): ISuperNodeList {
    throw new Error('HTMLProgressElementIsolate.labels getter not implemented');
  }

  public get max(): Promise<string> | Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'max', false);
  }

  public get position(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'position', false);
  }

  public get value(): Promise<string> | Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'value', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLProgressElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly labels?: ISuperNodeList;
  readonly max?: Promise<string> | Promise<number>;
  readonly position?: Promise<number>;
  readonly value?: Promise<string> | Promise<number>;
}

export const HTMLProgressElementIsolatePropertyKeys = ['labels', 'max', 'position', 'value'];

export const HTMLProgressElementIsolateConstantKeys = [];
