import { IHTMLCollectionBaseIsolate } from '../../base/interfaces/isolate';
import HTMLCollectionBaseIsolateBase, { IHTMLCollectionBaseIsolateProperties } from '../../base/isolate-mixins/HTMLCollectionBaseIsolate';
export declare const getState: <C = IHTMLCollectionBaseIsolate, P = IHTMLCollectionBaseIsolateProperties>(instance: C) => P, setState: <P = IHTMLCollectionBaseIsolateProperties>(instance: IHTMLCollectionBaseIsolate, properties: P) => void;
export default class HTMLCollectionBaseIsolate extends HTMLCollectionBaseIsolateBase implements IHTMLCollectionBaseIsolate {
}
