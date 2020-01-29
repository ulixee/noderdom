import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ICharacterData, ISlotable, IText } from '../interfaces';
import { ICharacterDataProperties, ICharacterDataReadonlyProperties } from './CharacterData';
import { ISlotableProperties, ISlotableReadonlyProperties } from '../mixins/Slotable';

// tslint:disable-next-line:variable-name
export function TextGenerator(CharacterData: Constructable<ICharacterData>, Slotable: Constructable<ISlotable>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(CharacterData, [Slotable]) as unknown) as Constructable<ICharacterData & ISlotable>;

  return class Text extends Parent implements IText {
    constructor(data?: string) {
      super();
      InternalHandler.construct(this, [data]);
    }

    // properties

    public get wholeText(): string {
      return InternalHandler.get<IText, string>(this, 'wholeText');
    }

    // methods

    public splitText(offset: number): IText {
      return InternalHandler.run<IText, IText>(this, 'splitText', [offset]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ITextProperties extends ICharacterDataProperties, ISlotableProperties {
  wholeText?: string;
}

export interface ITextReadonlyProperties extends ICharacterDataReadonlyProperties, ISlotableReadonlyProperties {
  wholeText?: string;
}

export const { getState, setState, setReadonlyOfText } = InternalStateGenerator<
  IText,
  ITextProperties,
  ITextReadonlyProperties
>('Text');
