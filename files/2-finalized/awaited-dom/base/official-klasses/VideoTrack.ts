import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IVideoTrack } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IVideoTrack, IVideoTrackProperties>();
export const awaitedHandler = new AwaitedHandler<IVideoTrack>('VideoTrack', getState, setState);

export function VideoTrackGenerator() {
  return class VideoTrack implements IVideoTrack {
    constructor() {
    }

    // properties

    public get id(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'id', false);
    }

    public get kind(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'kind', false);
    }

    public get label(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'label', false);
    }

    public get language(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'language', false);
    }

    public get selected(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'selected', false);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, VideoTrackPropertyKeys, VideoTrackConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IVideoTrackProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly id?: Promise<string>;
  readonly kind?: Promise<string>;
  readonly label?: Promise<string>;
  readonly language?: Promise<string>;
  readonly selected?: Promise<boolean>;
}

export const VideoTrackPropertyKeys = ['id', 'kind', 'label', 'language', 'selected'];

export const VideoTrackConstantKeys = [];
