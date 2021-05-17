import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ITextTrack } from '../interfaces/official';
export declare const getState: (instance: ITextTrack) => ITextTrackProperties, setState: (instance: ITextTrack, properties: Partial<ITextTrackProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ITextTrack>;
export declare function TextTrackGenerator(): {
    new (): {};
};
export interface ITextTrackProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const TextTrackPropertyKeys: never[];
export declare const TextTrackConstantKeys: never[];
