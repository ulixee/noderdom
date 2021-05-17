import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IStyleSheetIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IStyleSheetIsolate, IStyleSheetIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IStyleSheetIsolate>('StyleSheetIsolate', getState, setState);

export default class StyleSheetIsolate implements IStyleSheetIsolate {}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IStyleSheetIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const StyleSheetIsolatePropertyKeys = [];

export const StyleSheetIsolateConstantKeys = [];
