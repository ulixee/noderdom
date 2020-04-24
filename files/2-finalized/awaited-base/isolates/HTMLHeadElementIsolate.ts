// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import { IHTMLHeadElementIsolate } from '../interfaces/isolates';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLHeadElementIsolate } = StateMachine<
  IHTMLHeadElementIsolate,
  IHTMLHeadElementIsolateProperties,
  IHTMLHeadElementIsolateReadonlyProperties
>('HTMLHeadElementIsolate');

export const awaitedHandler = new AwaitedHandler<IHTMLHeadElementIsolate>('HTMLHeadElementIsolate', getState, setState);

export default class HTMLHeadElementIsolate implements IHTMLHeadElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHeadElementIsolateReadonlyProperties {}

export interface IHTMLHeadElementIsolateProperties extends IHTMLHeadElementIsolateReadonlyProperties {}

export const HTMLHeadElementIsolatePropertyKeys = [];

export const HTMLHeadElementIsolateConstantKeys = [];
