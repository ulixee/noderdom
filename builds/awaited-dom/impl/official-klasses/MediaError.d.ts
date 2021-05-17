import { IMediaError } from '../../base/interfaces/official';
import { IMediaErrorProperties } from '../../base/official-klasses/MediaError';
export declare const getState: (instance: IMediaError) => IMediaErrorProperties, setState: (instance: IMediaError, properties: Partial<IMediaErrorProperties>) => void;
declare const MediaErrorBaseClass: {
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
export default class MediaError extends MediaErrorBaseClass implements IMediaError {
}
export {};
