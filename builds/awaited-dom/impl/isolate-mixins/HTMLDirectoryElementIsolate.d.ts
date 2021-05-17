import { IHTMLDirectoryElementIsolate } from '../../base/interfaces/isolate';
import HTMLDirectoryElementIsolateBase, { IHTMLDirectoryElementIsolateProperties } from '../../base/isolate-mixins/HTMLDirectoryElementIsolate';
export declare const getState: (instance: IHTMLDirectoryElementIsolate) => IHTMLDirectoryElementIsolateProperties, setState: (instance: IHTMLDirectoryElementIsolate, properties: Partial<IHTMLDirectoryElementIsolateProperties>) => void;
export default class HTMLDirectoryElementIsolate extends HTMLDirectoryElementIsolateBase implements IHTMLDirectoryElementIsolate {
}
