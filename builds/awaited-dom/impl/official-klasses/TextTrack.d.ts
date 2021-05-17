import { ITextTrack } from '../../base/interfaces/official';
import { ITextTrackProperties } from '../../base/official-klasses/TextTrack';
export declare const getState: (instance: ITextTrack) => ITextTrackProperties, setState: (instance: ITextTrack, properties: Partial<ITextTrackProperties>) => void;
declare const TextTrackBaseClass: {
    new (): {};
};
export default class TextTrack extends TextTrackBaseClass implements ITextTrack {
}
export {};
