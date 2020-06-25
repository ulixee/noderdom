import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLTextAreaElement, IHTMLElement, IHTMLFormElement, IValidityState } from '../interfaces/official';
import { ISuperNodeList } from '../interfaces/super';
import { IHTMLElementProperties } from './HTMLElement';
export declare const getState: <C = IHTMLTextAreaElement, P = IHTMLTextAreaElementProperties>(instance: C) => P, setState: <P = IHTMLTextAreaElementProperties>(instance: IHTMLTextAreaElement, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTextAreaElement>;
export declare const nodeAttacher: NodeAttacher<IHTMLTextAreaElement>;
export declare function HTMLTextAreaElementGenerator(HTMLElement: Constructable<IHTMLElement>): {
    new (): {
        readonly autocomplete: Promise<string>;
        readonly autofocus: Promise<boolean>;
        readonly cols: Promise<number>;
        readonly defaultValue: Promise<string>;
        readonly disabled: Promise<boolean>;
        readonly form: IHTMLFormElement;
        readonly inputMode: Promise<string>;
        readonly labels: ISuperNodeList;
        readonly maxLength: Promise<number>;
        readonly minLength: Promise<number>;
        readonly name: Promise<string>;
        readonly placeholder: Promise<string>;
        readonly readOnly: Promise<boolean>;
        readonly required: Promise<boolean>;
        readonly rows: Promise<number>;
        readonly selectionDirection: Promise<string>;
        readonly selectionEnd: Promise<number>;
        readonly selectionStart: Promise<number>;
        readonly textLength: Promise<number>;
        readonly type: Promise<string>;
        readonly validationMessage: Promise<string>;
        readonly validity: Promise<IValidityState>;
        readonly value: Promise<string>;
        readonly willValidate: Promise<boolean>;
        readonly wrap: Promise<string>;
        checkValidity(): Promise<boolean>;
        reportValidity(): Promise<boolean>;
        select(): Promise<void>;
        setCustomValidity(error: string): Promise<void>;
        setRangeText(replacement: string, start?: number | undefined, end?: number | undefined, selectionMode?: "end" | "preserve" | "select" | "start" | undefined): Promise<void>;
        setSelectionRange(start: number, end: number, direction?: string | undefined): Promise<void>;
        then<TResult1 = IHTMLTextAreaElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTextAreaElement) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
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
        readonly childNodes: ISuperNodeList;
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
        compareDocumentPosition(other: import("../interfaces/super").ISuperNode): Promise<number>;
        contains(other: import("../interfaces/super").ISuperNode | null): Promise<boolean>;
        getRootNode(options?: import("../interfaces/official").IGetRootNodeOptions | undefined): import("../interfaces/super").ISuperNode;
        hasChildNodes(): Promise<boolean>;
        isDefaultNamespace(namespace: string | null): Promise<boolean>;
        isEqualNode(otherNode: import("../interfaces/super").ISuperNode | null): Promise<boolean>;
        isSameNode(otherNode: import("../interfaces/super").ISuperNode | null): Promise<boolean>;
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
        querySelectorAll(selectors: string): ISuperNodeList;
        blur(): Promise<void>;
        focus(): Promise<void>;
    };
};
export interface IHTMLTextAreaElementProperties extends IHTMLElementProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly autocomplete?: Promise<string>;
    readonly autofocus?: Promise<boolean>;
    readonly cols?: Promise<number>;
    readonly defaultValue?: Promise<string>;
    readonly disabled?: Promise<boolean>;
    readonly form?: IHTMLFormElement;
    readonly inputMode?: Promise<string>;
    readonly labels?: ISuperNodeList;
    readonly maxLength?: Promise<number>;
    readonly minLength?: Promise<number>;
    readonly name?: Promise<string>;
    readonly placeholder?: Promise<string>;
    readonly readOnly?: Promise<boolean>;
    readonly required?: Promise<boolean>;
    readonly rows?: Promise<number>;
    readonly selectionDirection?: Promise<string>;
    readonly selectionEnd?: Promise<number>;
    readonly selectionStart?: Promise<number>;
    readonly textLength?: Promise<number>;
    readonly type?: Promise<string>;
    readonly validationMessage?: Promise<string>;
    readonly validity?: Promise<IValidityState>;
    readonly value?: Promise<string>;
    readonly willValidate?: Promise<boolean>;
    readonly wrap?: Promise<string>;
}
export declare const HTMLTextAreaElementPropertyKeys: string[];
export declare const HTMLTextAreaElementConstantKeys: string[];
