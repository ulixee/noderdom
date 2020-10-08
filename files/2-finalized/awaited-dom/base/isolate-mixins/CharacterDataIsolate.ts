import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { ICharacterDataIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICharacterDataIsolate, ICharacterDataIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<ICharacterDataIsolate>('CharacterDataIsolate', getState, setState);

export default class CharacterDataIsolate implements ICharacterDataIsolate {
  public get data(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'data', false);
  }

  public get length(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'length', false);
  }

  // methods

  public substringData(offset: number, count: number): Promise<string> {
    return awaitedHandler.runMethod<string>(this, 'substringData', [offset, count]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICharacterDataIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly data?: Promise<string>;
  readonly length?: Promise<number>;
}

export const CharacterDataIsolatePropertyKeys = ['data', 'length'];

export const CharacterDataIsolateConstantKeys = [];
