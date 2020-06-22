import StateMachine from '../../awaited-base/StateMachine';
import { IText } from '../../awaited-base/interfaces/official';
import { TextGenerator, ITextProperties } from '../../awaited-base/official-klasses/Text';
import CharacterData from './CharacterData';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IText, ITextProperties>();
const TextBaseClass = TextGenerator(CharacterData);

export default class Text extends TextBaseClass implements IText {
  constructor(_data?: string) {
    super(_data);
  }
}
