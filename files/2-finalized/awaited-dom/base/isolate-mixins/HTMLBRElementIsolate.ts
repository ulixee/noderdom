import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLBRElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLBRElementIsolate, IHTMLBRElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLBRElementIsolate>('HTMLBRElementIsolate', getState, setState);

export default class HTMLBRElementIsolate implements IHTMLBRElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLBRElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLBRElementIsolatePropertyKeys = [];

export const HTMLBRElementIsolateConstantKeys = [];
