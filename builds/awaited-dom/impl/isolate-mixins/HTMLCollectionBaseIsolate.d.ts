import { IHTMLCollectionBaseIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import HTMLCollectionBaseIsolateBase, { IHTMLCollectionBaseIsolateProperties } from '../../base/isolate-mixins/HTMLCollectionBaseIsolate';
export declare const getState: (instance: IHTMLCollectionBaseIsolate) => IHTMLCollectionBaseIsolateProperties, setState: (instance: IHTMLCollectionBaseIsolate, properties: Partial<IHTMLCollectionBaseIsolateProperties>) => void;
export default class HTMLCollectionBaseIsolate extends HTMLCollectionBaseIsolateBase implements IHTMLCollectionBaseIsolate {
    item(index: number): ISuperElement;
}
