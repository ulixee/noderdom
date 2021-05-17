import { IHTMLBaseElementIsolate } from '../../base/interfaces/isolate';
import HTMLBaseElementIsolateBase, { IHTMLBaseElementIsolateProperties } from '../../base/isolate-mixins/HTMLBaseElementIsolate';
export declare const getState: (instance: IHTMLBaseElementIsolate) => IHTMLBaseElementIsolateProperties, setState: (instance: IHTMLBaseElementIsolate, properties: Partial<IHTMLBaseElementIsolateProperties>) => void;
export default class HTMLBaseElementIsolate extends HTMLBaseElementIsolateBase implements IHTMLBaseElementIsolate {
}
