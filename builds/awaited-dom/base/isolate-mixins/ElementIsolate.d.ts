import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IElementIsolate } from '../interfaces/isolate';
import { INamedNodeMap, IDOMTokenList, IShadowRoot, IAttr, IDOMRect, IDOMRectList, IFullscreenOptions, IScrollIntoViewOptions } from '../interfaces/official';
import { ISuperElement, ISuperHTMLCollection } from '../interfaces/super';
export declare const getState: (instance: IElementIsolate) => IElementIsolateProperties, setState: (instance: IElementIsolate, properties: Partial<IElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IElementIsolate>;
export default class ElementIsolate implements IElementIsolate {
    get attributes(): INamedNodeMap;
    get classList(): IDOMTokenList;
    get className(): Promise<string>;
    get clientHeight(): Promise<number>;
    get clientLeft(): Promise<number>;
    get clientTop(): Promise<number>;
    get clientWidth(): Promise<number>;
    get id(): Promise<string>;
    get innerHTML(): Promise<string>;
    get localName(): Promise<string>;
    get namespaceURI(): Promise<string | null>;
    get outerHTML(): Promise<string>;
    get part(): IDOMTokenList;
    get prefix(): Promise<string | null>;
    get scrollHeight(): Promise<number>;
    get scrollLeft(): Promise<number>;
    get scrollTop(): Promise<number>;
    get scrollWidth(): Promise<number>;
    get shadowRoot(): IShadowRoot;
    get slot(): Promise<string>;
    get tagName(): Promise<string>;
    closest(selectors: string): ISuperElement;
    getAttribute(qualifiedName: string): Promise<string | null>;
    getAttributeNS(namespace: string | null, localName: string): Promise<string | null>;
    getAttributeNames(): Promise<Iterable<string>>;
    getAttributeNode(qualifiedName: string): Promise<IAttr | null>;
    getAttributeNodeNS(namespace: string | null, localName: string): Promise<IAttr | null>;
    getBoundingClientRect(): Promise<IDOMRect>;
    getClientRects(): Promise<IDOMRectList>;
    getElementsByClassName(classNames: string): ISuperHTMLCollection;
    getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
    getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
    hasAttribute(qualifiedName: string): Promise<boolean>;
    hasAttributeNS(namespace: string | null, localName: string): Promise<boolean>;
    hasAttributes(): Promise<boolean>;
    hasPointerCapture(pointerId: number): Promise<boolean>;
    matches(selectors: string): Promise<boolean>;
    requestFullscreen(options?: IFullscreenOptions): Promise<void>;
    requestPointerLock(): Promise<void>;
    scrollIntoView(arg?: boolean | IScrollIntoViewOptions): Promise<void>;
}
export interface IElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly attributes?: INamedNodeMap;
    readonly classList?: IDOMTokenList;
    readonly className?: Promise<string>;
    readonly clientHeight?: Promise<number>;
    readonly clientLeft?: Promise<number>;
    readonly clientTop?: Promise<number>;
    readonly clientWidth?: Promise<number>;
    readonly id?: Promise<string>;
    readonly innerHTML?: Promise<string>;
    readonly localName?: Promise<string>;
    readonly namespaceURI?: Promise<string | null>;
    readonly outerHTML?: Promise<string>;
    readonly part?: IDOMTokenList;
    readonly prefix?: Promise<string | null>;
    readonly scrollHeight?: Promise<number>;
    readonly scrollLeft?: Promise<number>;
    readonly scrollTop?: Promise<number>;
    readonly scrollWidth?: Promise<number>;
    readonly shadowRoot?: IShadowRoot;
    readonly slot?: Promise<string>;
    readonly tagName?: Promise<string>;
}
export declare const ElementIsolatePropertyKeys: string[];
export declare const ElementIsolateConstantKeys: never[];
