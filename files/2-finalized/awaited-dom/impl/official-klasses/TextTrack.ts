import StateMachine from '../../base/StateMachine';
import { ITextTrack } from '../../base/interfaces/official';
import { TextTrackGenerator, ITextTrackProperties } from '../../base/official-klasses/TextTrack';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ITextTrack, ITextTrackProperties>();
const TextTrackBaseClass = TextTrackGenerator();

export default class TextTrack extends TextTrackBaseClass implements ITextTrack {}
