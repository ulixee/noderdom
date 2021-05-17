import { IDocumentIsolate } from '../../base/interfaces/isolate';
import { ISuperHTMLCollection, ISuperHTMLElement, ISuperElement, ISuperNodeList } from '../../base/interfaces/super';
import { IDocumentType, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation } from '../../base/interfaces/official';
import DocumentIsolateBase, { IDocumentIsolateProperties } from '../../base/isolate-mixins/DocumentIsolate';
export declare const getState: (instance: IDocumentIsolate) => IDocumentIsolateProperties, setState: (instance: IDocumentIsolate, properties: Partial<IDocumentIsolateProperties>) => void;
export default class DocumentIsolate extends DocumentIsolateBase implements IDocumentIsolate {
    get anchors(): ISuperHTMLCollection;
    get body(): ISuperHTMLElement;
    get doctype(): IDocumentType;
    get documentElement(): ISuperElement;
    get embeds(): ISuperHTMLCollection;
    get featurePolicy(): IFeaturePolicy;
    get forms(): ISuperHTMLCollection;
    get head(): IHTMLHeadElement;
    get images(): ISuperHTMLCollection;
    get implementation(): IDOMImplementation;
    get links(): ISuperHTMLCollection;
    get location(): ILocation;
    get plugins(): ISuperHTMLCollection;
    get scripts(): ISuperHTMLCollection;
    get scrollingElement(): ISuperElement;
    getElementsByClassName(classNames: string): ISuperHTMLCollection;
    getElementsByName(elementName: string): ISuperNodeList;
    getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
    getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
}
