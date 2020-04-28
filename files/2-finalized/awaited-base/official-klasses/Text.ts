import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { IText, ICharacterData } from '../interfaces/official';
import { ICharacterDataProperties, CharacterDataPropertyKeys, CharacterDataConstantKeys } from './CharacterData';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IText, ITextProperties>();
export const awaitedHandler = new AwaitedHandler<IText>('Text', getState, setState);

export function TextGenerator(CharacterData: Constructable<ICharacterData>) {
  return class Text extends CharacterData implements IText {
    constructor(_data?: string) {
      super();
      initialize(Text, this);
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

export interface ITextProperties extends ICharacterDataProperties {
  readonly wholeText?: Promise<string>;
}

export const TextPropertyKeys = [...CharacterDataPropertyKeys, 'wholeText'];

export const TextConstantKeys = [...CharacterDataConstantKeys];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<IText>, self: IText) {
  initializeConstantsAndProperties<IText>(Klass, self, TextConstantKeys, TextPropertyKeys);
}
