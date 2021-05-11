import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLTrackElement, IHTMLElement, ITextTrack } from '../interfaces/official';
import { IHTMLElementProperties } from './HTMLElement';
export declare const getState: (instance: IHTMLTrackElement) => IHTMLTrackElementProperties, setState: (instance: IHTMLTrackElement, properties: Partial<IHTMLTrackElementProperties>) => void, recordProxy: (proxy: IHTMLTrackElement, instance: IHTMLTrackElement) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTrackElement>;
export declare const nodeFactory: NodeFactory<IHTMLTrackElement>;
export declare function HTMLTrackElementGenerator(HTMLElement: Constructable<IHTMLElement>): {
    new (): {
        readonly ERROR: number;
        readonly LOADED: number;
        readonly LOADING: number;
        readonly NONE: number;
        readonly default: Promise<boolean>;
        readonly kind: Promise<string>;
        readonly label: Promise<string>;
        readonly readyState: Promise<number>;
        readonly src: Promise<string>;
        readonly srclang: Promise<string>;
        readonly track: Promise<ITextTrack>;
        then<TResult1 = IHTMLTrackElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTrackElement) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        readonly accessKey: Promise<string>;
        readonly autoCapitalize: Promise<string>;
        readonly dir: Promise<string>;
        readonly draggable: Promise<boolean>;
        readonly hidden: Promise<boolean>;
        readonly inert: Promise<boolean>;
        readonly innerText: Promise<string>;
        readonly lang: Promise<string>;
        readonly offsetHeight: Promise<number>;
        readonly offsetLeft: Promise<number>;
        readonly offsetParent: import("../interfaces/super").ISuperElement;
        readonly offsetTop: Promise<number>;
        readonly offsetWidth: Promise<number>;
        readonly spellcheck: Promise<boolean>;
        readonly title: Promise<string>;
        readonly translate: Promise<boolean>;
        click(): Promise<void>;
        readonly attributes: import("../interfaces/official").INamedNodeMap;
        readonly classList: import("../interfaces/official").IDOMTokenList;
        readonly className: Promise<string>;
        readonly clientHeight: Promise<number>;
        readonly clientLeft: Promise<number>;
        readonly clientTop: Promise<number>;
        readonly clientWidth: Promise<number>;
        readonly id: Promise<string>;
        readonly innerHTML: Promise<string>;
        readonly localName: Promise<string>;
        readonly namespaceURI: Promise<string | null>;
        readonly outerHTML: Promise<string>;
        readonly part: import("../interfaces/official").IDOMTokenList;
        readonly prefix: Promise<string | null>;
        readonly scrollHeight: Promise<number>;
        readonly scrollLeft: Promise<number>;
        readonly scrollTop: Promise<number>;
        readonly scrollWidth: Promise<number>;
        readonly shadowRoot: import("../interfaces/official").IShadowRoot;
        readonly slot: Promise<string>;
        readonly tagName: Promise<string>;
        closest(selectors: string): import("../interfaces/super").ISuperElement;
        getAttribute(qualifiedName: string): Promise<string | null>;
        getAttributeNS(namespace: string | null, localName: string): Promise<string | null>;
        getAttributeNames(): Promise<Iterable<string>>;
        getAttributeNode(qualifiedName: string): Promise<import("../interfaces/official").IAttr | null>;
        getAttributeNodeNS(namespace: string | null, localName: string): Promise<import("../interfaces/official").IAttr | null>;
        getBoundingClientRect(): Promise<import("../interfaces/official").IDOMRect>;
        getClientRects(): Promise<import("../interfaces/official").IDOMRectList>;
        getElementsByClassName(classNames: string): import("../interfaces/super").ISuperHTMLCollection;
        getElementsByTagName(qualifiedName: string): import("../interfaces/super").ISuperHTMLCollection;
        getElementsByTagNameNS(namespace: string | null, localName: string): import("../interfaces/super").ISuperHTMLCollection;
        hasAttribute(qualifiedName: string): Promise<boolean>;
        hasAttributeNS(namespace: string | null, localName: string): Promise<boolean>;
        hasAttributes(): Promise<boolean>;
        hasPointerCapture(pointerId: number): Promise<boolean>;
        matches(selectors: string): Promise<boolean>;
        requestFullscreen(options?: import("../interfaces/official").IFullscreenOptions | undefined): Promise<void>;
        requestPointerLock(): Promise<void>;
        scrollIntoView(arg?: boolean | import("../interfaces/official").IScrollIntoViewOptions | undefined): Promise<void>;
        readonly ATTRIBUTE_NODE: number;
        readonly CDATA_SECTION_NODE: number;
        readonly COMMENT_NODE: number;
        readonly DOCUMENT_FRAGMENT_NODE: number;
        readonly DOCUMENT_NODE: number;
        readonly DOCUMENT_POSITION_CONTAINED_BY: number;
        readonly DOCUMENT_POSITION_CONTAINS: number;
        readonly DOCUMENT_POSITION_DISCONNECTED: number;
        readonly DOCUMENT_POSITION_FOLLOWING: number;
        readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
        readonly DOCUMENT_POSITION_PRECEDING: number;
        readonly DOCUMENT_TYPE_NODE: number;
        readonly ELEMENT_NODE: number;
        readonly ENTITY_NODE: number;
        readonly ENTITY_REFERENCE_NODE: number;
        readonly NOTATION_NODE: number;
        readonly PROCESSING_INSTRUCTION_NODE: number;
        readonly TEXT_NODE: number;
        readonly baseURI: Promise<string>;
        readonly childNodes: import("../interfaces/super").ISuperNodeList;
        readonly firstChild: import("../interfaces/super").ISuperNode;
        readonly isConnected: Promise<boolean>;
        readonly lastChild: import("../interfaces/super").ISuperNode;
        readonly nextSibling: import("../interfaces/super").ISuperNode;
        readonly nodeName: Promise<string>;
        readonly nodeType: Promise<number>;
        readonly nodeValue: Promise<string | null>;
        readonly ownerDocument: import("../interfaces/super").ISuperDocument;
        readonly parentElement: import("../interfaces/super").ISuperElement;
        readonly parentNode: import("../interfaces/super").ISuperNode;
        readonly previousSibling: import("../interfaces/super").ISuperNode;
        readonly textContent: Promise<string | null>;
        compareDocumentPosition(other: import("../interfaces/isolate").INodeIsolate): Promise<number>;
        contains(other: import("../interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        getRootNode(options?: import("../interfaces/official").IGetRootNodeOptions | undefined): import("../interfaces/super").ISuperNode;
        hasChildNodes(): Promise<boolean>;
        isDefaultNamespace(namespace: string | null): Promise<boolean>;
        isEqualNode(otherNode: import("../interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        isSameNode(otherNode: import("../interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        lookupNamespaceURI(prefix: string | null): Promise<string | null>;
        lookupPrefix(namespace: string | null): Promise<string | null>;
        normalize(): Promise<void>;
        readonly nextElementSibling: import("../interfaces/super").ISuperElement;
        readonly previousElementSibling: import("../interfaces/super").ISuperElement;
        readonly childElementCount: Promise<number>;
        readonly children: import("../interfaces/super").ISuperHTMLCollection;
        readonly firstElementChild: import("../interfaces/super").ISuperElement;
        readonly lastElementChild: import("../interfaces/super").ISuperElement;
        querySelector(selectors: string): import("../interfaces/super").ISuperElement;
        querySelectorAll(selectors: string): import("../interfaces/super").ISuperNodeList;
        readonly assignedSlot: import("../interfaces/official").IHTMLSlotElement;
        readonly style: import("../interfaces/official").ICSSStyleDeclaration;
        readonly contentEditable: Promise<string>;
        readonly isContentEditable: Promise<boolean>;
        readonly dataset: Promise<Record<string, string>>;
        readonly nonce: Promise<string>;
        readonly tabIndex: Promise<number>;
        blur(): Promise<void>;
        focus(): Promise<void>;
    };
    readonly ERROR: number;
    readonly LOADED: number;
    readonly LOADING: number;
    readonly NONE: number;
};
export interface IHTMLTrackElementProperties extends IHTMLElementProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    readonly default?: Promise<boolean>;
    readonly kind?: Promise<string>;
    readonly label?: Promise<string>;
    readonly readyState?: Promise<number>;
    readonly src?: Promise<string>;
    readonly srclang?: Promise<string>;
    readonly track?: Promise<ITextTrack>;
}
export declare const HTMLTrackElementPropertyKeys: string[];
export declare const HTMLTrackElementConstantKeys: string[];