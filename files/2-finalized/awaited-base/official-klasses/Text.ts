import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IText, ICharacterData } from '../interfaces/official';
import { ISuperText } from '../interfaces/super';
import { ICharacterDataProperties, CharacterDataPropertyKeys, CharacterDataConstantKeys } from './CharacterData';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IText, ITextProperties>();
export const awaitedHandler = new AwaitedHandler<IText>('Text', getState, setState);

export function TextGenerator(CharacterData: Constructable<ICharacterData>) {
  return class Text extends CharacterData implements IText {
    constructor(_data?: string) {
      super();
      initializeConstantsAndProperties<Text>(this, TextConstantKeys, TextPropertyKeys);
    }

    // properties

    public get wholeText(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'wholeText', false);
    }

    // methods

    public splitText(offset: number): Promise<ISuperText> {
      return awaitedHandler.runMethod<ISuperText>(this, 'splitText', [offset]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ITextProperties extends ICharacterDataProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly wholeText?: Promise<string>;
}

export const TextPropertyKeys = [...CharacterDataPropertyKeys, 'wholeText'];

export const TextConstantKeys = [...CharacterDataConstantKeys];
