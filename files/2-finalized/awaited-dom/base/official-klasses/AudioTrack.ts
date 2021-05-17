import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IAudioTrack } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IAudioTrack, IAudioTrackProperties>();
export const awaitedHandler = new AwaitedHandler<IAudioTrack>('AudioTrack', getState, setState);

export function AudioTrackGenerator() {
  return class AudioTrack implements IAudioTrack {
    constructor() {
    }

    // properties

    public get enabled(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'enabled', false);
    }

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

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, AudioTrackPropertyKeys, AudioTrackConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IAudioTrackProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly enabled?: Promise<boolean>;
  readonly id?: Promise<string>;
  readonly kind?: Promise<string>;
  readonly label?: Promise<string>;
  readonly language?: Promise<string>;
}

export const AudioTrackPropertyKeys = ['enabled', 'id', 'kind', 'label', 'language'];

export const AudioTrackConstantKeys = [];
