import { IHTMLMeterElementIsolate } from '../../base/interfaces/isolate';
import { ISuperNodeList } from '../../base/interfaces/super';
import HTMLMeterElementIsolateBase, { IHTMLMeterElementIsolateProperties } from '../../base/isolate-mixins/HTMLMeterElementIsolate';
export declare const getState: (instance: IHTMLMeterElementIsolate) => IHTMLMeterElementIsolateProperties, setState: (instance: IHTMLMeterElementIsolate, properties: Partial<IHTMLMeterElementIsolateProperties>) => void;
export default class HTMLMeterElementIsolate extends HTMLMeterElementIsolateBase implements IHTMLMeterElementIsolate {
    get labels(): ISuperNodeList;
}
