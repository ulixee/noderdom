import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLOptionsCollectionIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptionsCollectionIsolate, IHTMLOptionsCollectionIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLOptionsCollectionIsolate>('HTMLOptionsCollectionIsolate', getState, setState);

export default class HTMLOptionsCollectionIsolate implements IHTMLOptionsCollectionIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLOptionsCollectionIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLOptionsCollectionIsolatePropertyKeys = [];

export const HTMLOptionsCollectionIsolateConstantKeys = [];
