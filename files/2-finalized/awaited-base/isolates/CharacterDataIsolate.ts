// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import { ICharacterDataIsolate } from '../interfaces/isolates';

export const { getState, setState, setHiddenState, setReadonlyOfCharacterDataIsolate } = StateMachine<
  ICharacterDataIsolate,
  ICharacterDataIsolateProperties,
  ICharacterDataIsolateReadonlyProperties
>('CharacterDataIsolate');

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

export interface ICharacterDataIsolateReadonlyProperties {
  readonly data?: Promise<string>;
  readonly length?: Promise<number>;
}

export interface ICharacterDataIsolateProperties extends ICharacterDataIsolateReadonlyProperties {}

export const CharacterDataIsolatePropertyKeys = ['data', 'length'];

export const CharacterDataIsolateConstantKeys = [];
