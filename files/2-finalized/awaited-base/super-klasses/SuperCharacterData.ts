import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import { ISuperCharacterData } from '../interfaces/super';
import { ICharacterDataIsolate, INodeIsolate, ITextIsolate } from '../interfaces/isolate';
import { ICharacterDataIsolateProperties, CharacterDataIsolatePropertyKeys, CharacterDataIsolateConstantKeys } from '../isolate-mixins/CharacterDataIsolate';
import { INodeIsolateProperties, NodeIsolatePropertyKeys, NodeIsolateConstantKeys } from '../isolate-mixins/NodeIsolate';
import { ITextIsolateProperties, TextIsolatePropertyKeys, TextIsolateConstantKeys } from '../isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperCharacterData, ISuperCharacterDataProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperCharacterData>('SuperCharacterData', getState, setState);

export function SuperCharacterDataGenerator(CharacterDataIsolate: Constructable<ICharacterDataIsolate>, NodeIsolate: Constructable<INodeIsolate>, TextIsolate: Constructable<ITextIsolate>) {
  const Parent = (ClassMixer(CharacterDataIsolate, [NodeIsolate, TextIsolate]) as unknown) as Constructable<ICharacterDataIsolate & INodeIsolate & ITextIsolate>;

  return class SuperCharacterData extends Parent implements ISuperCharacterData {
    constructor() {
      super();
      initializeConstantsAndProperties<SuperCharacterData>(this, SuperCharacterDataConstantKeys, SuperCharacterDataPropertyKeys);
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

export interface ISuperCharacterDataProperties extends ICharacterDataIsolateProperties, INodeIsolateProperties, ITextIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly data?: Promise<string>;
  readonly length?: Promise<number>;
}

export const SuperCharacterDataPropertyKeys = [...CharacterDataIsolatePropertyKeys, ...NodeIsolatePropertyKeys, ...TextIsolatePropertyKeys, 'data', 'length'];

export const SuperCharacterDataConstantKeys = [...CharacterDataIsolateConstantKeys, ...NodeIsolateConstantKeys, ...TextIsolateConstantKeys];
