import { IHTMLProgressElementIsolate } from '../../base/interfaces/isolate';
import { ISuperNodeList } from '../../base/interfaces/super';
import HTMLProgressElementIsolateBase, { IHTMLProgressElementIsolateProperties } from '../../base/isolate-mixins/HTMLProgressElementIsolate';
export declare const getState: (instance: IHTMLProgressElementIsolate) => IHTMLProgressElementIsolateProperties, setState: (instance: IHTMLProgressElementIsolate, properties: Partial<IHTMLProgressElementIsolateProperties>) => void, recordProxy: (proxy: IHTMLProgressElementIsolate, instance: IHTMLProgressElementIsolate) => void;
export default class HTMLProgressElementIsolate extends HTMLProgressElementIsolateBase implements IHTMLProgressElementIsolate {
    get labels(): ISuperNodeList;
}
