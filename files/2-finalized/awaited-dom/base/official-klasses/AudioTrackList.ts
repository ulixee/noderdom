import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { IAudioTrackList, IAudioTrack } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IAudioTrackList, IAudioTrackListProperties>();
export const awaitedHandler = new AwaitedHandler<IAudioTrackList>('AudioTrackList', getState, setState);
export const nodeAttacher = new NodeAttacher<IAudioTrackList>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<IAudioTrackList, IAudioTrack>(getState, setState, awaitedHandler);

export function AudioTrackListGenerator() {
  return class AudioTrackList implements IAudioTrackList, PromiseLike<IAudioTrackList> {
    constructor() {
      initializeConstantsAndProperties<AudioTrackList>(this, AudioTrackListConstantKeys, AudioTrackListPropertyKeys);
      setState(this, {
        createInstanceName: 'createAudioTrackList',
        createIterableName: 'createAudioTrack',
      });
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public getTrackById(id: string): IAudioTrack {
      throw new Error('AudioTrackList.getTrackById not implemented');
    }

    public then<TResult1 = IAudioTrackList, TResult2 = never>(onfulfilled?: ((value: IAudioTrackList) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): IterableIterator<IAudioTrack> {
      return awaitedIterator.iterateAttached(this)[Symbol.iterator]();
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IAudioTrackListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly length?: Promise<number>;
}

export const AudioTrackListPropertyKeys = ['length'];

export const AudioTrackListConstantKeys = [];
