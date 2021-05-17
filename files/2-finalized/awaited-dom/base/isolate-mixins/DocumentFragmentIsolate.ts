import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IDocumentFragmentIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentFragmentIsolate, IDocumentFragmentIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IDocumentFragmentIsolate>('DocumentFragmentIsolate', getState, setState);

export default class DocumentFragmentIsolate implements IDocumentFragmentIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDocumentFragmentIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const DocumentFragmentIsolatePropertyKeys = [];

export const DocumentFragmentIsolateConstantKeys = [];
