// tslint:disable:variable-name
import Constructable from '../Constructable';
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { ICharacterData, INode } from '../interfaces/dom';
import { INodeProperties, INodeReadonlyProperties, NodePropertyKeys, NodeConstantKeys } from '../classes/Node';

export const { getState, setState, setHiddenState, setReadonlyOfCharacterData } = StateMachine<
  ICharacterData,
  ICharacterDataProperties,
  ICharacterDataReadonlyProperties
>('CharacterData');

export const awaitedHandler = new AwaitedHandler<ICharacterData>('CharacterData', getState, setState);

export function CharacterDataGenerator(Node: Constructable<INode>) {
  return class CharacterData extends Node implements ICharacterData {
    constructor() {
      super();
      initializeConstantsAndProperties<CharacterData>(CharacterData, this, CharacterDataConstantKeys, CharacterDataPropertyKeys);
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
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICharacterDataReadonlyProperties extends INodeReadonlyProperties {
  readonly data?: Promise<string>;
  readonly length?: Promise<number>;
}

export interface ICharacterDataProperties extends ICharacterDataReadonlyProperties, INodeProperties {}

export const CharacterDataPropertyKeys = [...NodePropertyKeys, 'data', 'length'];

export const CharacterDataConstantKeys = [...NodeConstantKeys];
