// tslint:disable:variable-name
import Constructable from '../Constructable';
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IText, ICharacterData } from '../interfaces/dom';
import { ICharacterDataProperties, ICharacterDataReadonlyProperties, CharacterDataPropertyKeys, CharacterDataConstantKeys } from '../classes/CharacterData';

export const { getState, setState, setHiddenState, setReadonlyOfText } = StateMachine<
  IText,
  ITextProperties,
  ITextReadonlyProperties
>('Text');

export const awaitedHandler = new AwaitedHandler<IText>('Text', getState, setState);

export function TextGenerator(CharacterData: Constructable<ICharacterData>) {
  return class Text extends CharacterData implements IText {
    constructor(_data?: string) {
      super();
      initializeConstantsAndProperties<Text>(Text, this, TextConstantKeys, TextPropertyKeys);
    }

    // properties

    public get wholeText(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'wholeText', false);
    }

    // methods

    public splitText(offset: number): Promise<IText> {
      return awaitedHandler.runMethod<IText>(this, 'splitText', [offset]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ITextReadonlyProperties extends ICharacterDataReadonlyProperties {
  readonly wholeText?: Promise<string>;
}

export interface ITextProperties extends ITextReadonlyProperties, ICharacterDataProperties {}

export const TextPropertyKeys = [...CharacterDataPropertyKeys, 'wholeText'];

export const TextConstantKeys = [...CharacterDataConstantKeys];
