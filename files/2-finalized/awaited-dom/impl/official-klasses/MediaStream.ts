import StateMachine from '../../base/StateMachine';
import { IMediaStream } from '../../base/interfaces/official';
import { MediaStreamGenerator, IMediaStreamProperties } from '../../base/official-klasses/MediaStream';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IMediaStream, IMediaStreamProperties>();
const MediaStreamBaseClass = MediaStreamGenerator();

export default class MediaStream extends MediaStreamBaseClass implements IMediaStream {}
