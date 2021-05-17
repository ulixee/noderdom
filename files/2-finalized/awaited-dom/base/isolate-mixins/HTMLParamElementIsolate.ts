import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLParamElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLParamElementIsolate, IHTMLParamElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLParamElementIsolate>('HTMLParamElementIsolate', getState, setState);

export default class HTMLParamElementIsolate implements IHTMLParamElementIsolate {
  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get type(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'type', false);
  }

  public get value(): Promise<string> | Promise<number> {
    return awaitedHandler.getProperty<string>(this, 'value', false);
  }

  public get valueType(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'valueType', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLParamElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly name?: Promise<string>;
  readonly type?: Promise<string>;
  readonly value?: Promise<string> | Promise<number>;
  readonly valueType?: Promise<string>;
}

export const HTMLParamElementIsolatePropertyKeys = ['name', 'type', 'value', 'valueType'];

export const HTMLParamElementIsolateConstantKeys = [];
