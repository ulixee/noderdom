import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import { IText, ICharacterData, ISlotable } from '../interfaces/official';
import { ISuperText } from '../interfaces/super';
import { ICharacterDataProperties, CharacterDataPropertyKeys, CharacterDataConstantKeys } from './CharacterData';
import { ISlotableProperties, SlotablePropertyKeys, SlotableConstantKeys } from '../official-mixins/Slotable';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IText, ITextProperties>();
export const awaitedHandler = new AwaitedHandler<IText>('Text', getState, setState);

export function TextGenerator(CharacterData: Constructable<ICharacterData>, Slotable: Constructable<ISlotable>) {
  const Parent = (ClassMixer(CharacterData, [Slotable]) as unknown) as Constructable<ICharacterData & ISlotable>;

  return class Text extends Parent implements IText {
    constructor(_data?: string) {
      super(_data);
    }

    // properties

    public get wholeText(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'wholeText', false);
    }

    // methods

    public splitText(offset: number): Promise<ISuperText> {
      return awaitedHandler.runMethod<ISuperText>(this, 'splitText', [offset]);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, TextPropertyKeys, TextConstantKeys);
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
