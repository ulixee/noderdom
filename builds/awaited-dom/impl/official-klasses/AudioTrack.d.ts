import { IAudioTrack } from '../../base/interfaces/official';
import { IAudioTrackProperties } from '../../base/official-klasses/AudioTrack';
export declare const getState: (instance: IAudioTrack) => IAudioTrackProperties, setState: (instance: IAudioTrack, properties: Partial<IAudioTrackProperties>) => void;
declare const AudioTrackBaseClass: {
    new (): {
        readonly enabled: Promise<boolean>;
        readonly id: Promise<string>;
        readonly kind: Promise<string>;
        readonly label: Promise<string>;
        readonly language: Promise<string>;
    };
};
export default class AudioTrack extends AudioTrackBaseClass implements IAudioTrack {
}
export {};
