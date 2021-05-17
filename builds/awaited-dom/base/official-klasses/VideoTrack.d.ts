import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IVideoTrack } from '../interfaces/official';
export declare const getState: (instance: IVideoTrack) => IVideoTrackProperties, setState: (instance: IVideoTrack, properties: Partial<IVideoTrackProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IVideoTrack>;
export declare function VideoTrackGenerator(): {
    new (): {
        readonly id: Promise<string>;
        readonly kind: Promise<string>;
        readonly label: Promise<string>;
        readonly language: Promise<string>;
        readonly selected: Promise<boolean>;
    };
};
export interface IVideoTrackProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly id?: Promise<string>;
    readonly kind?: Promise<string>;
    readonly label?: Promise<string>;
    readonly language?: Promise<string>;
    readonly selected?: Promise<boolean>;
}
export declare const VideoTrackPropertyKeys: string[];
export declare const VideoTrackConstantKeys: never[];
