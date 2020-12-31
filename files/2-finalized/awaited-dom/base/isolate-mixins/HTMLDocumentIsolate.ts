import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLDocumentIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLDocumentIsolate, IHTMLDocumentIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLDocumentIsolate>('HTMLDocumentIsolate', getState, setState);

export default class HTMLDocumentIsolate implements IHTMLDocumentIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDocumentIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLDocumentIsolatePropertyKeys = [];

export const HTMLDocumentIsolateConstantKeys = [];
