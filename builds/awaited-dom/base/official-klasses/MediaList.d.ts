import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { IMediaList } from '../interfaces/official';
export declare const getState: (instance: IMediaList) => IMediaListProperties, setState: (instance: IMediaList, properties: Partial<IMediaListProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IMediaList>;
export declare const nodeFactory: NodeFactory<IMediaList>;
export declare const awaitedIterator: AwaitedIterator<IMediaList, string>;
export declare function MediaListGenerator(): {
    new (): {
        [index: number]: string;
        readonly length: Promise<number>;
        appendMedium(medium: string): Promise<void>;
        deleteMedium(medium: string): Promise<void>;
        item(index: number): Promise<string | null>;
        then<TResult1 = IMediaList, TResult2 = never>(onfulfilled?: ((value: IMediaList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<string>;
    };
};
export interface IMediaListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
}
export declare const MediaListPropertyKeys: string[];
export declare const MediaListConstantKeys: never[];
