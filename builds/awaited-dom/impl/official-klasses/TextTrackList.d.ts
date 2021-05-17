import { ITextTrackList } from '../../base/interfaces/official';
import { ITextTrackListProperties } from '../../base/official-klasses/TextTrackList';
export declare const getState: (instance: ITextTrackList) => ITextTrackListProperties, setState: (instance: ITextTrackList, properties: Partial<ITextTrackListProperties>) => void;
declare const TextTrackListBaseClass: {
    new (): {};
};
export default class TextTrackList extends TextTrackListBaseClass implements ITextTrackList {
}
export {};
