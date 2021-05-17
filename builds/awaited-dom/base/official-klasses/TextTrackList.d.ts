import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ITextTrackList } from '../interfaces/official';
export declare const getState: (instance: ITextTrackList) => ITextTrackListProperties, setState: (instance: ITextTrackList, properties: Partial<ITextTrackListProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ITextTrackList>;
export declare function TextTrackListGenerator(): {
    new (): {};
};
export interface ITextTrackListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const TextTrackListPropertyKeys: never[];
export declare const TextTrackListConstantKeys: never[];
