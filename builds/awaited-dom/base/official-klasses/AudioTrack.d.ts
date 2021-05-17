import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IAudioTrack } from '../interfaces/official';
export declare const getState: (instance: IAudioTrack) => IAudioTrackProperties, setState: (instance: IAudioTrack, properties: Partial<IAudioTrackProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IAudioTrack>;
export declare function AudioTrackGenerator(): {
    new (): {
        readonly enabled: Promise<boolean>;
        readonly id: Promise<string>;
        readonly kind: Promise<string>;
        readonly label: Promise<string>;
        readonly language: Promise<string>;
    };
};
export interface IAudioTrackProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly enabled?: Promise<boolean>;
    readonly id?: Promise<string>;
    readonly kind?: Promise<string>;
    readonly label?: Promise<string>;
    readonly language?: Promise<string>;
}
export declare const AudioTrackPropertyKeys: string[];
export declare const AudioTrackConstantKeys: never[];
