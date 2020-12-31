import StateMachine from '../../base/StateMachine';
import { IText } from '../../base/interfaces/official';
import { TextGenerator, ITextProperties } from '../../base/official-klasses/Text';
import CharacterData from './CharacterData';
import Slotable from '../official-mixins/Slotable';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IText, ITextProperties>();
const TextBaseClass = TextGenerator(CharacterData, Slotable);

export default class Text extends TextBaseClass implements IText {
  constructor(_data?: string) {
    super(_data);
  }
}
