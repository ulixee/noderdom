import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLHtmlElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLHtmlElementIsolate, IHTMLHtmlElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLHtmlElementIsolate>('HTMLHtmlElementIsolate', getState, setState);

export default class HTMLHtmlElementIsolate implements IHTMLHtmlElementIsolate {
  public get version(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'version', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHtmlElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly version?: Promise<string>;
}

export const HTMLHtmlElementIsolatePropertyKeys = ['version'];

export const HTMLHtmlElementIsolateConstantKeys = [];
