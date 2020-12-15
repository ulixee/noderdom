import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLHRElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLHRElementIsolate, IHTMLHRElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLHRElementIsolate>('HTMLHRElementIsolate', getState, setState);

export default class HTMLHRElementIsolate implements IHTMLHRElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHRElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLHRElementIsolatePropertyKeys = [];

export const HTMLHRElementIsolateConstantKeys = [];
