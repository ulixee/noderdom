import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IMediaKeys } from '../interfaces/official';
export declare const getState: (instance: IMediaKeys) => IMediaKeysProperties, setState: (instance: IMediaKeys, properties: Partial<IMediaKeysProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IMediaKeys>;
export declare function MediaKeysGenerator(): {
    new (): {};
};
export interface IMediaKeysProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const MediaKeysPropertyKeys: never[];
export declare const MediaKeysConstantKeys: never[];
