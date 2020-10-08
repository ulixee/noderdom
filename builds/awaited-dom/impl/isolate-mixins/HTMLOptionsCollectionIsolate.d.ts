import { IHTMLOptionsCollectionIsolate } from '../../base/interfaces/isolate';
import HTMLOptionsCollectionIsolateBase, { IHTMLOptionsCollectionIsolateProperties } from '../../base/isolate-mixins/HTMLOptionsCollectionIsolate';
export declare const getState: (instance: IHTMLOptionsCollectionIsolate) => IHTMLOptionsCollectionIsolateProperties, setState: (instance: IHTMLOptionsCollectionIsolate, properties: Partial<IHTMLOptionsCollectionIsolateProperties>) => void, recordProxy: (proxy: IHTMLOptionsCollectionIsolate, instance: IHTMLOptionsCollectionIsolate) => void;
export default class HTMLOptionsCollectionIsolate extends HTMLOptionsCollectionIsolateBase implements IHTMLOptionsCollectionIsolate {
}
