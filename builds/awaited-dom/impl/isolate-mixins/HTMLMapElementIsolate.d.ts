import { IHTMLMapElementIsolate } from '../../base/interfaces/isolate';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import HTMLMapElementIsolateBase, { IHTMLMapElementIsolateProperties } from '../../base/isolate-mixins/HTMLMapElementIsolate';
export declare const getState: (instance: IHTMLMapElementIsolate) => IHTMLMapElementIsolateProperties, setState: (instance: IHTMLMapElementIsolate, properties: Partial<IHTMLMapElementIsolateProperties>) => void;
export default class HTMLMapElementIsolate extends HTMLMapElementIsolateBase implements IHTMLMapElementIsolate {
    get areas(): ISuperHTMLCollection;
}
