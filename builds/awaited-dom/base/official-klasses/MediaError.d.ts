import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IMediaError } from '../interfaces/official';
export declare const getState: (instance: IMediaError) => IMediaErrorProperties, setState: (instance: IMediaError, properties: Partial<IMediaErrorProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IMediaError>;
export declare function MediaErrorGenerator(): {
    new (): {
        readonly MEDIA_ERR_ABORTED: number;
        readonly MEDIA_ERR_DECODE: number;
        readonly MEDIA_ERR_NETWORK: number;
        readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    };
    readonly MEDIA_ERR_ABORTED: number;
    readonly MEDIA_ERR_DECODE: number;
    readonly MEDIA_ERR_NETWORK: number;
    readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number;
};
export interface IMediaErrorProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const MediaErrorPropertyKeys: never[];
export declare const MediaErrorConstantKeys: string[];
