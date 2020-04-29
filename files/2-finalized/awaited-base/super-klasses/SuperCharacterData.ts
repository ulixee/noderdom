import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import { ISuperCharacterData } from '../interfaces/super';
import { INode } from '../interfaces/official';
import { ITextIsolate } from '../interfaces/isolate';
import { INodeProperties, NodePropertyKeys, NodeConstantKeys } from '../official-klasses/Node';
import { ITextIsolateProperties, TextIsolatePropertyKeys, TextIsolateConstantKeys } from '../isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperCharacterData, ISuperCharacterDataProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperCharacterData>('SuperCharacterData', getState, setState);

export function SuperCharacterDataGenerator(Node: Constructable<INode>, TextIsolate: Constructable<ITextIsolate>) {
  const Parent = (ClassMixer(Node, [TextIsolate]) as unknown) as Constructable<INode & ITextIsolate>;

  return class SuperCharacterData extends Parent implements ISuperCharacterData {
    constructor() {
      super();
      initialize(SuperCharacterData, this);
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

export interface ISuperCharacterDataProperties extends INodeProperties, ITextIsolateProperties {
  readonly data?: Promise<string>;
  readonly length?: Promise<number>;
}

export const SuperCharacterDataPropertyKeys = [...NodePropertyKeys, ...TextIsolatePropertyKeys, 'data', 'length'];

export const SuperCharacterDataConstantKeys = [...NodeConstantKeys, ...TextIsolateConstantKeys];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<ISuperCharacterData>, self: ISuperCharacterData) {
  initializeConstantsAndProperties<ISuperCharacterData>(Klass, self, SuperCharacterDataConstantKeys, SuperCharacterDataPropertyKeys);
}
