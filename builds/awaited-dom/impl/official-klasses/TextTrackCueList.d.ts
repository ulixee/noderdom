import { ITextTrackCueList, ITextTrackCue } from '../../base/interfaces/official';
import { ITextTrackCueListProperties } from '../../base/official-klasses/TextTrackCueList';
export declare const getState: (instance: ITextTrackCueList) => ITextTrackCueListProperties, setState: (instance: ITextTrackCueList, properties: Partial<ITextTrackCueListProperties>) => void;
declare const TextTrackCueListBaseClass: {
    new (): {
        readonly length: Promise<number>;
        getCueById(id: string): ITextTrackCue;
        then<TResult1 = ITextTrackCueList, TResult2 = never>(onfulfilled?: ((value: ITextTrackCueList) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): Iterator<ITextTrackCue, any, undefined>;
    };
};
export default class TextTrackCueList extends TextTrackCueListBaseClass implements ITextTrackCueList {
    getCueById(id: string): ITextTrackCue;
}
export {};
