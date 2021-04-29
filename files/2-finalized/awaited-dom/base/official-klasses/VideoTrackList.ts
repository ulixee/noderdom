import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { IVideoTrackList, IVideoTrack } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IVideoTrackList, IVideoTrackListProperties>();
export const awaitedHandler = new AwaitedHandler<IVideoTrackList>('VideoTrackList', getState, setState);
export const nodeFactory = new NodeFactory<IVideoTrackList>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<IVideoTrackList, IVideoTrack>(getState, setState, awaitedHandler);

export function VideoTrackListGenerator() {
  return class VideoTrackList implements IVideoTrackList, PromiseLike<IVideoTrackList> {
    constructor() {
      initializeConstantsAndProperties<VideoTrackList>(this, VideoTrackListConstantKeys, VideoTrackListPropertyKeys);
      setState(this, {
        createInstanceName: 'createVideoTrackList',
        createIterableName: 'createVideoTrack',
      });
    }

    // properties

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    public get selectedIndex(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'selectedIndex', false);
    }

    // methods

    public getTrackById(id: string): IVideoTrack {
      throw new Error('VideoTrackList.getTrackById not implemented');
    }

    public then<TResult1 = IVideoTrackList, TResult2 = never>(onfulfilled?: ((value: IVideoTrackList) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): IterableIterator<IVideoTrack> {
      return awaitedIterator.iterateNodePointers(this)[Symbol.iterator]();
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IVideoTrackListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly length?: Promise<number>;
  readonly selectedIndex?: Promise<number>;
}

export const VideoTrackListPropertyKeys = ['length', 'selectedIndex'];

export const VideoTrackListConstantKeys = [];
