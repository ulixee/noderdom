import { IVideoTrackList, IVideoTrack } from '../../base/interfaces/official';
import { IVideoTrackListProperties } from '../../base/official-klasses/VideoTrackList';
export declare const getState: (instance: IVideoTrackList) => IVideoTrackListProperties, setState: (instance: IVideoTrackList, properties: Partial<IVideoTrackListProperties>) => void;
declare const VideoTrackListBaseClass: {
    new (): {
        readonly length: Promise<number>;
        readonly selectedIndex: Promise<number>;
        getTrackById(id: string): IVideoTrack;
        then<TResult1 = IVideoTrackList, TResult2 = never>(onfulfilled?: ((value: IVideoTrackList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<IVideoTrack, any, undefined>;
    };
};
export default class VideoTrackList extends VideoTrackListBaseClass implements IVideoTrackList {
    getTrackById(id: string): IVideoTrack;
}
export {};
