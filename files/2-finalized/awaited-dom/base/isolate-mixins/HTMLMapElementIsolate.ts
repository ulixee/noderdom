import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLMapElementIsolate } from '../interfaces/isolate';
import { ISuperHTMLCollection } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLMapElementIsolate, IHTMLMapElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLMapElementIsolate>('HTMLMapElementIsolate', getState, setState);

export default class HTMLMapElementIsolate implements IHTMLMapElementIsolate {
  public get areas(): ISuperHTMLCollection {
    throw new Error('HTMLMapElementIsolate.areas getter not implemented');
  }

  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLMapElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly areas?: ISuperHTMLCollection;
  readonly name?: Promise<string>;
}

export const HTMLMapElementIsolatePropertyKeys = ['areas', 'name'];

export const HTMLMapElementIsolateConstantKeys = [];
