// tslint:disable:variable-name
import Constructable from '../Constructable';
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { ISuperCharacterData } from '../interfaces/supers';
import { ITextIsolate } from '../interfaces/isolates';
import { ITextIsolateProperties, ITextIsolateReadonlyProperties, TextIsolatePropertyKeys, TextIsolateConstantKeys } from '../isolates/TextIsolate';

export const { getState, setState, setHiddenState, setReadonlyOfSuperCharacterData } = StateMachine<
  ISuperCharacterData,
  ISuperCharacterDataProperties,
  ISuperCharacterDataReadonlyProperties
>('SuperCharacterData');

export const awaitedHandler = new AwaitedHandler<ISuperCharacterData>('SuperCharacterData', getState, setState);

export function SuperCharacterDataGenerator(TextIsolate: Constructable<ITextIsolate>) {
  return class SuperCharacterData extends TextIsolate implements ISuperCharacterData {
    constructor() {
      super();
      initializeConstantsAndProperties<SuperCharacterData>(SuperCharacterData, this, SuperCharacterDataConstantKeys, SuperCharacterDataPropertyKeys);
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

export interface ISuperCharacterDataReadonlyProperties extends ITextIsolateReadonlyProperties {
  readonly data?: Promise<string>;
  readonly length?: Promise<number>;
}

export interface ISuperCharacterDataProperties extends ISuperCharacterDataReadonlyProperties, ITextIsolateProperties {}

export const SuperCharacterDataPropertyKeys = [...TextIsolatePropertyKeys, 'data', 'length'];

export const SuperCharacterDataConstantKeys = [...TextIsolateConstantKeys];
