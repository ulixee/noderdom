import StateMachine from '../../base/StateMachine';
import { IMediaError } from '../../base/interfaces/official';
import { MediaErrorGenerator, IMediaErrorProperties } from '../../base/official-klasses/MediaError';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IMediaError, IMediaErrorProperties>();
const MediaErrorBaseClass = MediaErrorGenerator();

export default class MediaError extends MediaErrorBaseClass implements IMediaError {}
