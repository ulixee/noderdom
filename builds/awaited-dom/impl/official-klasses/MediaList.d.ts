import { IMediaList } from '../../base/interfaces/official';
import { IMediaListProperties } from '../../base/official-klasses/MediaList';
export declare const getState: (instance: IMediaList) => IMediaListProperties, setState: (instance: IMediaList, properties: Partial<IMediaListProperties>) => void;
declare const MediaListBaseClass: {
    new (): {
        [index: number]: string;
        readonly length: Promise<number>;
        appendMedium(medium: string): Promise<void>;
        deleteMedium(medium: string): Promise<void>;
        item(index: number): Promise<string | null>;
        then<TResult1 = IMediaList, TResult2 = never>(onfulfilled?: ((value: IMediaList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<string, any, undefined>;
    };
};
export default class MediaList extends MediaListBaseClass implements IMediaList {
}
export {};
