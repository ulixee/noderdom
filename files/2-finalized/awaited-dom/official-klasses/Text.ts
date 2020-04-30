import StateMachine from '../../awaited-base/StateMachine';
import { IText } from '../../awaited-base/interfaces/official';
import { TextGenerator, initialize, ITextProperties } from '../../awaited-base/official-klasses/Text';
import CharacterData from './CharacterData';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IText, ITextProperties>();
const TextBase = TextGenerator(CharacterData);

export default class Text extends TextBase implements IText {
  constructor(_data?: string) {
    super();
    initialize(Text, this);
  }
}
