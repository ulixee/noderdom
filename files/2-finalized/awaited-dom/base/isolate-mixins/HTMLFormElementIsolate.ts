import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLFormElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLFormElementIsolate, IHTMLFormElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLFormElementIsolate>('HTMLFormElementIsolate', getState, setState);

export default class HTMLFormElementIsolate implements IHTMLFormElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFormElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLFormElementIsolatePropertyKeys = [];

export const HTMLFormElementIsolateConstantKeys = [];
