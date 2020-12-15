import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLHeadingElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLHeadingElementIsolate, IHTMLHeadingElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLHeadingElementIsolate>('HTMLHeadingElementIsolate', getState, setState);

export default class HTMLHeadingElementIsolate implements IHTMLHeadingElementIsolate {
  public get align(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'align', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHeadingElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly align?: Promise<string>;
}

export const HTMLHeadingElementIsolatePropertyKeys = ['align'];

export const HTMLHeadingElementIsolateConstantKeys = [];
