import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { IVideoTrackList, IVideoTrack } from '../interfaces/official';
export declare const getState: (instance: IVideoTrackList) => IVideoTrackListProperties, setState: (instance: IVideoTrackList, properties: Partial<IVideoTrackListProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IVideoTrackList>;
export declare const nodeFactory: NodeFactory<IVideoTrackList>;
export declare const awaitedIterator: AwaitedIterator<IVideoTrackList, IVideoTrack>;
export declare function VideoTrackListGenerator(): {
    new (): {
        readonly length: Promise<number>;
        readonly selectedIndex: Promise<number>;
        getTrackById(id: string): IVideoTrack;
        then<TResult1 = IVideoTrackList, TResult2 = never>(onfulfilled?: ((value: IVideoTrackList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<IVideoTrack>;
    };
};
export interface IVideoTrackListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
    readonly selectedIndex?: Promise<number>;
}
export declare const VideoTrackListPropertyKeys: string[];
export declare const VideoTrackListConstantKeys: never[];
