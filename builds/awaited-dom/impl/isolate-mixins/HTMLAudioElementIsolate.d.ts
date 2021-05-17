import { IHTMLAudioElementIsolate } from '../../base/interfaces/isolate';
import HTMLAudioElementIsolateBase, { IHTMLAudioElementIsolateProperties } from '../../base/isolate-mixins/HTMLAudioElementIsolate';
export declare const getState: (instance: IHTMLAudioElementIsolate) => IHTMLAudioElementIsolateProperties, setState: (instance: IHTMLAudioElementIsolate, properties: Partial<IHTMLAudioElementIsolateProperties>) => void;
export default class HTMLAudioElementIsolate extends HTMLAudioElementIsolateBase implements IHTMLAudioElementIsolate {
}
