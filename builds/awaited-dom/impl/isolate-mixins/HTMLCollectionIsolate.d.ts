import { IHTMLCollectionIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import HTMLCollectionIsolateBase, { IHTMLCollectionIsolateProperties } from '../../base/isolate-mixins/HTMLCollectionIsolate';
export declare const getState: (instance: IHTMLCollectionIsolate) => IHTMLCollectionIsolateProperties, setState: (instance: IHTMLCollectionIsolate, properties: Partial<IHTMLCollectionIsolateProperties>) => void;
export default class HTMLCollectionIsolate extends HTMLCollectionIsolateBase implements IHTMLCollectionIsolate {
    namedItem(name: string): ISuperElement;
}
