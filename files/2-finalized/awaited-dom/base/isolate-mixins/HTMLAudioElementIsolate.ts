import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLAudioElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLAudioElementIsolate, IHTMLAudioElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLAudioElementIsolate>('HTMLAudioElementIsolate', getState, setState);

export default class HTMLAudioElementIsolate implements IHTMLAudioElementIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLAudioElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLAudioElementIsolatePropertyKeys = [];

export const HTMLAudioElementIsolateConstantKeys = [];
