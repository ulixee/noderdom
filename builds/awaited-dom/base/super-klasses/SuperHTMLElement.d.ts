import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { ISuperHTMLElement, ISuperElement } from '../interfaces/super';
import { IElementIsolate, IHTMLButtonElementIsolate, IHTMLElementIsolate, IHTMLFieldSetElementIsolate, IHTMLFormElementIsolate, IHTMLHeadElementIsolate, IHTMLInputElementIsolate, IHTMLLabelElementIsolate, IHTMLOptGroupElementIsolate, IHTMLOptionElementIsolate, IHTMLSelectElementIsolate, IHTMLTextAreaElementIsolate, INodeIsolate } from '../interfaces/isolate';
import { IHTMLOrSVGElement, INonDocumentTypeChildNode, IParentNode } from '../interfaces/official';
import { IElementIsolateProperties } from '../isolate-mixins/ElementIsolate';
import { IHTMLButtonElementIsolateProperties } from '../isolate-mixins/HTMLButtonElementIsolate';
import { IHTMLElementIsolateProperties } from '../isolate-mixins/HTMLElementIsolate';
import { IHTMLFieldSetElementIsolateProperties } from '../isolate-mixins/HTMLFieldSetElementIsolate';
import { IHTMLFormElementIsolateProperties } from '../isolate-mixins/HTMLFormElementIsolate';
import { IHTMLHeadElementIsolateProperties } from '../isolate-mixins/HTMLHeadElementIsolate';
import { IHTMLInputElementIsolateProperties } from '../isolate-mixins/HTMLInputElementIsolate';
import { IHTMLLabelElementIsolateProperties } from '../isolate-mixins/HTMLLabelElementIsolate';
import { IHTMLOptGroupElementIsolateProperties } from '../isolate-mixins/HTMLOptGroupElementIsolate';
import { IHTMLOptionElementIsolateProperties } from '../isolate-mixins/HTMLOptionElementIsolate';
import { IHTMLOrSVGElementProperties } from '../official-mixins/HTMLOrSVGElement';
import { IHTMLSelectElementIsolateProperties } from '../isolate-mixins/HTMLSelectElementIsolate';
import { IHTMLTextAreaElementIsolateProperties } from '../isolate-mixins/HTMLTextAreaElementIsolate';
import { INodeIsolateProperties } from '../isolate-mixins/NodeIsolate';
import { INonDocumentTypeChildNodeProperties } from '../official-mixins/NonDocumentTypeChildNode';
import { IParentNodeProperties } from '../official-mixins/ParentNode';
export declare const getState: <C = ISuperHTMLElement, P = ISuperHTMLElementProperties>(instance: C) => P, setState: <P = ISuperHTMLElementProperties>(instance: ISuperHTMLElement, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<ISuperHTMLElement>;
export declare const nodeAttacher: NodeAttacher<ISuperHTMLElement>;
export declare function SuperHTMLElementGenerator(ElementIsolate: Constructable<IElementIsolate>, HTMLButtonElementIsolate: Constructable<IHTMLButtonElementIsolate>, HTMLElementIsolate: Constructable<IHTMLElementIsolate>, HTMLFieldSetElementIsolate: Constructable<IHTMLFieldSetElementIsolate>, HTMLFormElementIsolate: Constructable<IHTMLFormElementIsolate>, HTMLHeadElementIsolate: Constructable<IHTMLHeadElementIsolate>, HTMLInputElementIsolate: Constructable<IHTMLInputElementIsolate>, HTMLLabelElementIsolate: Constructable<IHTMLLabelElementIsolate>, HTMLOptGroupElementIsolate: Constructable<IHTMLOptGroupElementIsolate>, HTMLOptionElementIsolate: Constructable<IHTMLOptionElementIsolate>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>, HTMLSelectElementIsolate: Constructable<IHTMLSelectElementIsolate>, HTMLTextAreaElementIsolate: Constructable<IHTMLTextAreaElementIsolate>, NodeIsolate: Constructable<INodeIsolate>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>, ParentNode: Constructable<IParentNode>): {
    new (): {
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
        readonly offsetParent: ISuperElement;
        readonly offsetTop: Promise<number>;
        readonly offsetWidth: Promise<number>;
        readonly spellcheck: Promise<boolean>;
        readonly title: Promise<string>;
        readonly translate: Promise<boolean>;
        click(): Promise<void>;
        then<TResult1 = ISuperHTMLElement, TResult2 = never>(onfulfilled?: ((value: ISuperHTMLElement) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
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
        closest(selectors: string): ISuperElement;
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
        readonly autofocus: Promise<boolean>;
        readonly disabled: Promise<boolean>;
        readonly form: import("../interfaces/official").IHTMLFormElement;
        readonly formAction: Promise<string>;
        readonly formEnctype: Promise<string>;
        readonly formMethod: Promise<string>;
        readonly formNoValidate: Promise<boolean>;
        readonly formTarget: Promise<string>;
        readonly labels: import("../interfaces/super").ISuperNodeList;
        readonly name: Promise<string>;
        readonly type: Promise<string>;
        readonly validationMessage: Promise<string>;
        readonly validity: Promise<import("../interfaces/official").IValidityState>;
        readonly value: Promise<string>;
        readonly willValidate: Promise<boolean>;
        checkValidity: (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>);
        reportValidity: (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>);
        readonly elements: import("../interfaces/super").ISuperHTMLCollection;
        readonly accept: Promise<string>;
        readonly alt: Promise<string>;
        readonly autocomplete: Promise<string>;
        readonly checked: Promise<boolean>;
        readonly defaultChecked: Promise<boolean>;
        readonly defaultValue: Promise<string>;
        readonly dirName: Promise<string>;
        readonly height: Promise<number>;
        readonly indeterminate: Promise<boolean>;
        readonly inputMode: Promise<string>;
        readonly list: ISuperHTMLElement;
        readonly max: Promise<string>;
        readonly maxLength: Promise<number>;
        readonly min: Promise<string>;
        readonly minLength: Promise<number>;
        readonly multiple: Promise<boolean>;
        readonly pattern: Promise<string>;
        readonly placeholder: Promise<string>;
        readonly readOnly: Promise<boolean>;
        readonly required: Promise<boolean>;
        readonly selectionDirection: Promise<string | null>;
        readonly selectionEnd: Promise<number | null>;
        readonly selectionStart: Promise<number | null>;
        readonly size: Promise<number>;
        readonly src: Promise<string>;
        readonly step: Promise<string>;
        readonly valueAsDate: Promise<any>;
        readonly valueAsNumber: Promise<number>;
        readonly width: Promise<number>;
        select: (() => Promise<void>) & (() => Promise<void>);
        setRangeText: ((replacement: string, start?: number | undefined, end?: number | undefined, selectionMode?: "end" | "preserve" | "select" | "start" | undefined) => Promise<void>) & ((replacement: string, start?: number | undefined, end?: number | undefined, selectionMode?: "end" | "preserve" | "select" | "start" | undefined) => Promise<void>);
        setSelectionRange: ((start: number, end: number, direction?: string | undefined) => Promise<void>) & ((start: number, end: number, direction?: string | undefined) => Promise<void>);
        stepDown(n?: number | undefined): Promise<void>;
        stepUp(n?: number | undefined): Promise<void>;
        readonly control: ISuperHTMLElement;
        readonly htmlFor: Promise<string>;
        readonly label: Promise<string>;
        readonly defaultSelected: Promise<boolean>;
        readonly index: Promise<number>;
        readonly selected: Promise<boolean>;
        readonly text: Promise<string>;
        blur(): Promise<void>;
        focus(): Promise<void>;
        readonly length: Promise<number>;
        readonly options: import("../interfaces/official").IHTMLOptionsCollection;
        readonly selectedIndex: Promise<number>;
        readonly selectedOptions: import("../interfaces/super").ISuperHTMLCollection;
        item(index: number): ISuperElement;
        namedItem(name: string): import("../interfaces/official").IHTMLOptionElement;
        [Symbol.iterator](): IterableIterator<ISuperElement>;
        readonly cols: Promise<number>;
        readonly rows: Promise<number>;
        readonly textLength: Promise<number>;
        readonly wrap: Promise<string>;
        setCustomValidity(error: string): Promise<void>;
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
        readonly parentElement: ISuperElement;
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
        readonly nextElementSibling: ISuperElement;
        readonly previousElementSibling: ISuperElement;
        readonly childElementCount: Promise<number>;
        readonly children: import("../interfaces/super").ISuperHTMLCollection;
        readonly firstElementChild: ISuperElement;
        readonly lastElementChild: ISuperElement;
        querySelector(selectors: string): ISuperElement;
        querySelectorAll(selectors: string): import("../interfaces/super").ISuperNodeList;
    };
};
export interface ISuperHTMLElementProperties extends IElementIsolateProperties, IHTMLButtonElementIsolateProperties, IHTMLElementIsolateProperties, IHTMLFieldSetElementIsolateProperties, IHTMLFormElementIsolateProperties, IHTMLHeadElementIsolateProperties, IHTMLInputElementIsolateProperties, IHTMLLabelElementIsolateProperties, IHTMLOptGroupElementIsolateProperties, IHTMLOptionElementIsolateProperties, IHTMLOrSVGElementProperties, IHTMLSelectElementIsolateProperties, IHTMLTextAreaElementIsolateProperties, INodeIsolateProperties, INonDocumentTypeChildNodeProperties, IParentNodeProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly accessKey?: Promise<string>;
    readonly autoCapitalize?: Promise<string>;
    readonly dir?: Promise<string>;
    readonly draggable?: Promise<boolean>;
    readonly hidden?: Promise<boolean>;
    readonly inert?: Promise<boolean>;
    readonly innerText?: Promise<string>;
    readonly lang?: Promise<string>;
    readonly offsetHeight?: Promise<number>;
    readonly offsetLeft?: Promise<number>;
    readonly offsetParent?: ISuperElement;
    readonly offsetTop?: Promise<number>;
    readonly offsetWidth?: Promise<number>;
    readonly spellcheck?: Promise<boolean>;
    readonly title?: Promise<string>;
    readonly translate?: Promise<boolean>;
}
export declare const SuperHTMLElementPropertyKeys: string[];
export declare const SuperHTMLElementConstantKeys: string[];
