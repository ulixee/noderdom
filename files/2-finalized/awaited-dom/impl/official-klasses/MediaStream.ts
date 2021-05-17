import StateMachine from '../../base/StateMachine';
import { IMediaStream } from '../../base/interfaces/official';
import { MediaStreamGenerator, IMediaStreamProperties } from '../../base/official-klasses/MediaStream';
import { createMediaStream } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IMediaStream, IMediaStreamProperties>();
const MediaStreamBaseClass = MediaStreamGenerator();

export default class MediaStream extends MediaStreamBaseClass implements IMediaStream {
  public clone(): IMediaStream {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createMediaStream(awaitedPath.addMethod(this, 'clone', ), awaitedOptions);
  }
}
