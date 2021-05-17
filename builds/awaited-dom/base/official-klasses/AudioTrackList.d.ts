import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { IAudioTrackList, IAudioTrack } from '../interfaces/official';
export declare const getState: (instance: IAudioTrackList) => IAudioTrackListProperties, setState: (instance: IAudioTrackList, properties: Partial<IAudioTrackListProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IAudioTrackList>;
export declare const nodeFactory: NodeFactory<IAudioTrackList>;
export declare const awaitedIterator: AwaitedIterator<IAudioTrackList, IAudioTrack>;
export declare function AudioTrackListGenerator(): {
    new (): {
        readonly length: Promise<number>;
        getTrackById(id: string): IAudioTrack;
        then<TResult1 = IAudioTrackList, TResult2 = never>(onfulfilled?: ((value: IAudioTrackList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<IAudioTrack>;
    };
};
export interface IAudioTrackListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
}
export declare const AudioTrackListPropertyKeys: string[];
export declare const AudioTrackListConstantKeys: never[];
