import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { ISuperCharacterData } from '../interfaces/super';
import { ITextIsolate } from '../interfaces/isolate';
import { ITextIsolateProperties, TextIsolatePropertyKeys, TextIsolateConstantKeys } from '../isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperCharacterData, ISuperCharacterDataProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperCharacterData>('SuperCharacterData', getState, setState);

export function SuperCharacterDataGenerator(TextIsolate: Constructable<ITextIsolate>) {
  return class SuperCharacterData extends TextIsolate implements ISuperCharacterData {
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

export interface ISuperCharacterDataProperties extends ITextIsolateProperties {
  readonly data?: Promise<string>;
  readonly length?: Promise<number>;
}

export const SuperCharacterDataPropertyKeys = [...TextIsolatePropertyKeys, 'data', 'length'];

export const SuperCharacterDataConstantKeys = [...TextIsolateConstantKeys];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<ISuperCharacterData>, self: ISuperCharacterData) {
  initializeConstantsAndProperties<ISuperCharacterData>(Klass, self, SuperCharacterDataConstantKeys, SuperCharacterDataPropertyKeys);
}
