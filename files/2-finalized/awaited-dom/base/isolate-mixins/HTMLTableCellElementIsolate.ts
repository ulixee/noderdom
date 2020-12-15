import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTableCellElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableCellElementIsolate, IHTMLTableCellElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTableCellElementIsolate>('HTMLTableCellElementIsolate', getState, setState);

export default class HTMLTableCellElementIsolate implements IHTMLTableCellElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableCellElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLTableCellElementIsolatePropertyKeys = [];

export const HTMLTableCellElementIsolateConstantKeys = [];
