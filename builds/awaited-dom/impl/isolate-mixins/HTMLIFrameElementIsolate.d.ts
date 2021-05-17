import { IHTMLIFrameElementIsolate } from '../../base/interfaces/isolate';
import { ISuperDocument } from '../../base/interfaces/super';
import { IFeaturePolicy, IDOMTokenList } from '../../base/interfaces/official';
import HTMLIFrameElementIsolateBase, { IHTMLIFrameElementIsolateProperties } from '../../base/isolate-mixins/HTMLIFrameElementIsolate';
export declare const getState: (instance: IHTMLIFrameElementIsolate) => IHTMLIFrameElementIsolateProperties, setState: (instance: IHTMLIFrameElementIsolate, properties: Partial<IHTMLIFrameElementIsolateProperties>) => void;
export default class HTMLIFrameElementIsolate extends HTMLIFrameElementIsolateBase implements IHTMLIFrameElementIsolate {
    get contentDocument(): ISuperDocument;
    get featurePolicy(): IFeaturePolicy;
    get sandbox(): IDOMTokenList;
}
