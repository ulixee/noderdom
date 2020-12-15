import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTableCaptionElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTableCaptionElementIsolate, IHTMLTableCaptionElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTableCaptionElementIsolate>('HTMLTableCaptionElementIsolate', getState, setState);

export default class HTMLTableCaptionElementIsolate implements IHTMLTableCaptionElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableCaptionElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLTableCaptionElementIsolatePropertyKeys = [];

export const HTMLTableCaptionElementIsolateConstantKeys = [];
