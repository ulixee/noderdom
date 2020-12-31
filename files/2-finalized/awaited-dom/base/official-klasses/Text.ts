import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import { IText, ICharacterData, ISlotable } from '../interfaces/official';
import { ISuperText } from '../interfaces/super';
import { ICharacterDataProperties, CharacterDataPropertyKeys, CharacterDataConstantKeys } from './CharacterData';
import { ISlotableProperties, SlotablePropertyKeys, SlotableConstantKeys } from '../official-mixins/Slotable';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IText, ITextProperties>();
export const awaitedHandler = new AwaitedHandler<IText>('Text', getState, setState);

export function TextGenerator(CharacterData: Constructable<ICharacterData>, Slotable: Constructable<ISlotable>) {
  const Parent = (ClassMixer(CharacterData, [Slotable]) as unknown) as Constructable<ICharacterData & ISlotable>;

  return class Text extends Parent implements IText {
    constructor(_data?: string) {
      super(_data);
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

export interface ITextProperties extends ICharacterDataProperties, ISlotableProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly wholeText?: Promise<string>;
}

export const TextPropertyKeys = [...CharacterDataPropertyKeys, ...SlotablePropertyKeys, 'wholeText'];

export const TextConstantKeys = [...CharacterDataConstantKeys, ...SlotableConstantKeys];
