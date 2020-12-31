import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLMeterElementIsolate } from '../interfaces/isolate';
import { ISuperNodeList } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLMeterElementIsolate, IHTMLMeterElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLMeterElementIsolate>('HTMLMeterElementIsolate', getState, setState);

export default class HTMLMeterElementIsolate implements IHTMLMeterElementIsolate {
  public get high(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'high', false);
  }

  public get labels(): ISuperNodeList {
    throw new Error('HTMLMeterElementIsolate.labels getter not implemented');
  }

  public get low(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'low', false);
  }

  public get max(): Promise<string> | Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'max', false);
  }

  public get min(): Promise<string> | Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'min', false);
  }

  public get optimum(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'optimum', false);
  }

  public get value(): Promise<string> | Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'value', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLMeterElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly high?: Promise<number>;
  readonly labels?: ISuperNodeList;
  readonly low?: Promise<number>;
  readonly max?: Promise<string> | Promise<number>;
  readonly min?: Promise<string> | Promise<number>;
  readonly optimum?: Promise<number>;
  readonly value?: Promise<string> | Promise<number>;
}

export const HTMLMeterElementIsolatePropertyKeys = ['high', 'labels', 'low', 'max', 'min', 'optimum', 'value'];

export const HTMLMeterElementIsolateConstantKeys = [];
