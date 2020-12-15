import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTableColElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableColElementIsolate, IHTMLTableColElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTableColElementIsolate>('HTMLTableColElementIsolate', getState, setState);

export default class HTMLTableColElementIsolate implements IHTMLTableColElementIsolate {
  public get align(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'align', false);
  }

  public get ch(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'ch', false);
  }

  public get chOff(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'chOff', false);
  }

  public get span(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'span', false);
  }

  public get vAlign(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'vAlign', false);
  }

  public get width(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'width', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableColElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly align?: Promise<string>;
  readonly ch?: Promise<string>;
  readonly chOff?: Promise<string>;
  readonly span?: Promise<number>;
  readonly vAlign?: Promise<string>;
  readonly width?: Promise<number> | Promise<string>;
}

export const HTMLTableColElementIsolatePropertyKeys = ['align', 'ch', 'chOff', 'span', 'vAlign', 'width'];

export const HTMLTableColElementIsolateConstantKeys = [];
