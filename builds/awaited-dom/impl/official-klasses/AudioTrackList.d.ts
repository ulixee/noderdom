import { IAudioTrackList, IAudioTrack } from '../../base/interfaces/official';
import { IAudioTrackListProperties } from '../../base/official-klasses/AudioTrackList';
export declare const getState: (instance: IAudioTrackList) => IAudioTrackListProperties, setState: (instance: IAudioTrackList, properties: Partial<IAudioTrackListProperties>) => void;
declare const AudioTrackListBaseClass: {
    new (): {
        readonly length: Promise<number>;
        getTrackById(id: string): IAudioTrack;
        then<TResult1 = IAudioTrackList, TResult2 = never>(onfulfilled?: ((value: IAudioTrackList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<IAudioTrack, any, undefined>;
    };
};
export default class AudioTrackList extends AudioTrackListBaseClass implements IAudioTrackList {
    getTrackById(id: string): IAudioTrack;
}
export {};
