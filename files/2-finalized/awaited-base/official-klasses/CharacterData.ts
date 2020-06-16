import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { ICharacterData, INode } from '../interfaces/official';
import { INodeProperties, NodePropertyKeys, NodeConstantKeys } from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICharacterData, ICharacterDataProperties>();
export const awaitedHandler = new AwaitedHandler<ICharacterData>('CharacterData', getState, setState);
export const nodeAttacher = new NodeAttacher<ICharacterData>('createCharacterData', getState, setState, awaitedHandler);

export function CharacterDataGenerator(Node: Constructable<INode>) {
  return class CharacterData extends Node implements ICharacterData, PromiseLike<ICharacterData> {
    constructor() {
      super();
      initializeConstantsAndProperties<CharacterData>(this, CharacterDataConstantKeys, CharacterDataPropertyKeys);
    }

    // properties

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

    public then<TResult1 = ICharacterData, TResult2 = never>(onfulfilled?: ((value: ICharacterData) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICharacterDataProperties extends INodeProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly data?: Promise<string>;
  readonly length?: Promise<number>;
}

export const CharacterDataPropertyKeys = [...NodePropertyKeys, 'data', 'length'];

export const CharacterDataConstantKeys = [...NodeConstantKeys];
