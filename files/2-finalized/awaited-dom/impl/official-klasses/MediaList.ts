import StateMachine from '../../base/StateMachine';
import { IMediaList } from '../../base/interfaces/official';
import { MediaListGenerator, IMediaListProperties } from '../../base/official-klasses/MediaList';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IMediaList, IMediaListProperties>();
const MediaListBaseClass = MediaListGenerator();

export default class MediaList extends MediaListBaseClass implements IMediaList {}
