import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLHeadElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLHeadElementIsolate, IHTMLHeadElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLHeadElementIsolate>('HTMLHeadElementIsolate', getState, setState);

export default class HTMLHeadElementIsolate implements IHTMLHeadElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHeadElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLHeadElementIsolatePropertyKeys = [];

export const HTMLHeadElementIsolateConstantKeys = [];
