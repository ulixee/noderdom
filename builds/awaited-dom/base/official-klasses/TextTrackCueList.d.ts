import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { ITextTrackCueList, ITextTrackCue } from '../interfaces/official';
export declare const getState: (instance: ITextTrackCueList) => ITextTrackCueListProperties, setState: (instance: ITextTrackCueList, properties: Partial<ITextTrackCueListProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ITextTrackCueList>;
export declare const nodeFactory: NodeFactory<ITextTrackCueList>;
export declare const awaitedIterator: AwaitedIterator<ITextTrackCueList, ITextTrackCue>;
export declare function TextTrackCueListGenerator(): {
    new (): {
        readonly length: Promise<number>;
        getCueById(id: string): ITextTrackCue;
        then<TResult1 = ITextTrackCueList, TResult2 = never>(onfulfilled?: ((value: ITextTrackCueList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<ITextTrackCue>;
    };
};
export interface ITextTrackCueListProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly length?: Promise<number>;
}
export declare const TextTrackCueListPropertyKeys: string[];
export declare const TextTrackCueListConstantKeys: never[];
