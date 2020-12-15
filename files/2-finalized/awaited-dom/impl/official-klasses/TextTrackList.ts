import StateMachine from '../../base/StateMachine';
import { ITextTrackList } from '../../base/interfaces/official';
import { TextTrackListGenerator, ITextTrackListProperties } from '../../base/official-klasses/TextTrackList';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ITextTrackList, ITextTrackListProperties>();
const TextTrackListBaseClass = TextTrackListGenerator();

export default class TextTrackList extends TextTrackListBaseClass implements ITextTrackList {}
