import { IHTMLVideoElementIsolate } from '../../base/interfaces/isolate';
import { IVideoPlaybackQuality } from '../../base/interfaces/official';
import HTMLVideoElementIsolateBase, { IHTMLVideoElementIsolateProperties } from '../../base/isolate-mixins/HTMLVideoElementIsolate';
export declare const getState: (instance: IHTMLVideoElementIsolate) => IHTMLVideoElementIsolateProperties, setState: (instance: IHTMLVideoElementIsolate, properties: Partial<IHTMLVideoElementIsolateProperties>) => void;
export default class HTMLVideoElementIsolate extends HTMLVideoElementIsolateBase implements IHTMLVideoElementIsolate {
    getVideoPlaybackQuality(): IVideoPlaybackQuality;
}
