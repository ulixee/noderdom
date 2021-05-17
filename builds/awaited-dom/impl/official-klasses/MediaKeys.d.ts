import { IMediaKeys } from '../../base/interfaces/official';
import { IMediaKeysProperties } from '../../base/official-klasses/MediaKeys';
export declare const getState: (instance: IMediaKeys) => IMediaKeysProperties, setState: (instance: IMediaKeys, properties: Partial<IMediaKeysProperties>) => void;
declare const MediaKeysBaseClass: {
    new (): {};
};
export default class MediaKeys extends MediaKeysBaseClass implements IMediaKeys {
}
export {};
