import { IHTMLCollectionIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import HTMLCollectionIsolateBase, { IHTMLCollectionIsolateProperties } from '../../base/isolate-mixins/HTMLCollectionIsolate';
export declare const getState: <C = IHTMLCollectionIsolate, P = IHTMLCollectionIsolateProperties>(instance: C) => P, setState: <P = IHTMLCollectionIsolateProperties>(instance: IHTMLCollectionIsolate, properties: P) => void;
export default class HTMLCollectionIsolate extends HTMLCollectionIsolateBase implements IHTMLCollectionIsolate {
    namedItem(name: string): ISuperElement;
}
