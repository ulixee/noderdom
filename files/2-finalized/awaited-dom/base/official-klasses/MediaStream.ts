import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IMediaStream } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IMediaStream, IMediaStreamProperties>();
export const awaitedHandler = new AwaitedHandler<IMediaStream>('MediaStream', getState, setState);

export function MediaStreamGenerator() {
  return class MediaStream implements IMediaStream {
    constructor(_stream?: IMediaStream) {
      initializeConstantsAndProperties<MediaStream>(this, MediaStreamConstantKeys, MediaStreamPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IMediaStreamProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const MediaStreamPropertyKeys = [];

export const MediaStreamConstantKeys = [];
