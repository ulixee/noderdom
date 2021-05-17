import { IHTMLModElementIsolate } from '../../base/interfaces/isolate';
import HTMLModElementIsolateBase, { IHTMLModElementIsolateProperties } from '../../base/isolate-mixins/HTMLModElementIsolate';
export declare const getState: (instance: IHTMLModElementIsolate) => IHTMLModElementIsolateProperties, setState: (instance: IHTMLModElementIsolate, properties: Partial<IHTMLModElementIsolateProperties>) => void;
export default class HTMLModElementIsolate extends HTMLModElementIsolateBase implements IHTMLModElementIsolate {
}
