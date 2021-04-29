import StateMachine from '../../base/StateMachine';
import { ITextTrackCueList, ITextTrackCue } from '../../base/interfaces/official';
import { TextTrackCueListGenerator, ITextTrackCueListProperties } from '../../base/official-klasses/TextTrackCueList';
import { createTextTrackCue } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ITextTrackCueList, ITextTrackCueListProperties>();
const TextTrackCueListBaseClass = TextTrackCueListGenerator();

export default class TextTrackCueList extends TextTrackCueListBaseClass implements ITextTrackCueList {
  public getCueById(id: string): ITextTrackCue {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createTextTrackCue(awaitedPath.addMethod(this, 'getCueById', id), awaitedOptions);
  }
}
