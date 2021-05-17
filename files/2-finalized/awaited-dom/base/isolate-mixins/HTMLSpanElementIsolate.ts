import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLSpanElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLSpanElementIsolate, IHTMLSpanElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLSpanElementIsolate>('HTMLSpanElementIsolate', getState, setState);

export default class HTMLSpanElementIsolate implements IHTMLSpanElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLSpanElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLSpanElementIsolatePropertyKeys = [];

export const HTMLSpanElementIsolateConstantKeys = [];
