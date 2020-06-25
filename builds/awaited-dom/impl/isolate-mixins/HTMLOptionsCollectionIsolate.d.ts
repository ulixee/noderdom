import { IHTMLOptionsCollectionIsolate } from '../../base/interfaces/isolate';
import HTMLOptionsCollectionIsolateBase, { IHTMLOptionsCollectionIsolateProperties } from '../../base/isolate-mixins/HTMLOptionsCollectionIsolate';
export declare const getState: <C = IHTMLOptionsCollectionIsolate, P = IHTMLOptionsCollectionIsolateProperties>(instance: C) => P, setState: <P = IHTMLOptionsCollectionIsolateProperties>(instance: IHTMLOptionsCollectionIsolate, properties: P) => void;
export default class HTMLOptionsCollectionIsolate extends HTMLOptionsCollectionIsolateBase implements IHTMLOptionsCollectionIsolate {
}
