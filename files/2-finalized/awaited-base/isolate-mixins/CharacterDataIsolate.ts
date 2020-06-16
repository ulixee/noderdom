import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import NodeAttacher from '../NodeAttacher';
import { ICharacterDataIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICharacterDataIsolate, ICharacterDataIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<ICharacterDataIsolate>('CharacterDataIsolate', getState, setState);
export const nodeAttacher = new NodeAttacher<ICharacterDataIsolate>('createCharacterDataIsolate', getState, setState, awaitedHandler);

export default class CharacterDataIsolate implements ICharacterDataIsolate, PromiseLike<ICharacterDataIsolate> {
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

  public then<TResult1 = ICharacterDataIsolate, TResult2 = never>(onfulfilled?: ((value: ICharacterDataIsolate) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
    return nodeAttacher.attach(this).then(onfulfilled, onrejected);
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
