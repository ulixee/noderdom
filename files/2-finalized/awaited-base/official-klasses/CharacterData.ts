import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { ICharacterData, INode } from '../interfaces/official';
import { INodeProperties, NodePropertyKeys, NodeConstantKeys } from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ICharacterData, ICharacterDataProperties>();
export const awaitedHandler = new AwaitedHandler<ICharacterData>('CharacterData', getState, setState);

export function CharacterDataGenerator(Node: Constructable<INode>) {
  return class CharacterData extends Node implements ICharacterData {
    constructor() {
      super();
      initialize(CharacterData, this);
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

export interface ICharacterDataProperties extends INodeProperties {
  readonly data?: Promise<string>;
  readonly length?: Promise<number>;
}

export const CharacterDataPropertyKeys = [...NodePropertyKeys, 'data', 'length'];

export const CharacterDataConstantKeys = [...NodeConstantKeys];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<ICharacterData>, self: ICharacterData) {
  initializeConstantsAndProperties<ICharacterData>(Klass, self, CharacterDataConstantKeys, CharacterDataPropertyKeys);
}
