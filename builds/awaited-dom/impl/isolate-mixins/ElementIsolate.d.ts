import { IElementIsolate } from '../../base/interfaces/isolate';
import { INamedNodeMap, IDOMTokenList, IShadowRoot } from '../../base/interfaces/official';
import { ISuperElement, ISuperHTMLCollection } from '../../base/interfaces/super';
import ElementIsolateBase, { IElementIsolateProperties } from '../../base/isolate-mixins/ElementIsolate';
export declare const getState: (instance: IElementIsolate) => IElementIsolateProperties, setState: (instance: IElementIsolate, properties: Partial<IElementIsolateProperties>) => void;
export default class ElementIsolate extends ElementIsolateBase implements IElementIsolate {
    get attributes(): INamedNodeMap;
    get classList(): IDOMTokenList;
    get part(): IDOMTokenList;
    get shadowRoot(): IShadowRoot;
    closest(selectors: string): ISuperElement;
    getElementsByClassName(classNames: string): ISuperHTMLCollection;
    getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
    getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
}
