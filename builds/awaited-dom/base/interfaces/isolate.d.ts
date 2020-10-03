/// <reference no-default-lib="true"/>
import { ISuperNodeList, ISuperNode, ISuperDocument, ISuperElement, ISuperHTMLCollection, ISuperHTMLElement, ISuperText } from './super';
import { IGetRootNodeOptions, INamedNodeMap, IDOMTokenList, IShadowRoot, IAttr, IDOMRect, IDOMRectList, IFullscreenOptions, IScrollIntoViewOptions, IHTMLFormElement, IValidityState, ISelectionMode, IHTMLOptionsCollection, IHTMLOptionElement, IDocumentType, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation, IDocumentReadyState, IVisibilityState } from './official';
export interface INodeIsolate {
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
    readonly firstChild: ISuperNode;
    readonly isConnected: Promise<boolean>;
    readonly lastChild: ISuperNode;
    readonly nextSibling: ISuperNode;
    readonly nodeName: Promise<string>;
    readonly nodeType: Promise<number>;
    readonly nodeValue: Promise<string | null>;
    readonly ownerDocument: ISuperDocument;
    readonly parentElement: ISuperElement;
    readonly parentNode: ISuperNode;
    readonly previousSibling: ISuperNode;
    readonly textContent: Promise<string | null>;
    compareDocumentPosition(other: ISuperNode): Promise<number>;
    contains(other: ISuperNode | null): Promise<boolean>;
    getRootNode(options?: IGetRootNodeOptions): ISuperNode;
    hasChildNodes(): Promise<boolean>;
    isDefaultNamespace(namespace: string | null): Promise<boolean>;
    isEqualNode(otherNode: ISuperNode | null): Promise<boolean>;
    isSameNode(otherNode: ISuperNode | null): Promise<boolean>;
    lookupNamespaceURI(prefix: string | null): Promise<string | null>;
    lookupPrefix(namespace: string | null): Promise<string | null>;
    normalize(): Promise<void>;
}
export interface IElementIsolate {
    readonly attributes: INamedNodeMap;
    readonly classList: IDOMTokenList;
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
    readonly part: IDOMTokenList;
    readonly prefix: Promise<string | null>;
    readonly scrollHeight: Promise<number>;
    readonly scrollLeft: Promise<number>;
    readonly scrollTop: Promise<number>;
    readonly scrollWidth: Promise<number>;
    readonly shadowRoot: IShadowRoot;
    readonly slot: Promise<string>;
    readonly tagName: Promise<string>;
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
export interface IAttrIsolate {
    readonly localName: Promise<string>;
    readonly name: Promise<string>;
    readonly namespaceURI: Promise<string | null>;
    readonly ownerElement: ISuperElement;
    readonly prefix: Promise<string | null>;
    readonly specified: Promise<boolean>;
    readonly value: Promise<string>;
}
export interface ICharacterDataIsolate {
    readonly data: Promise<string>;
    readonly length: Promise<number>;
    substringData(offset: number, count: number): Promise<string>;
}
export interface ITextIsolate {
    readonly wholeText: Promise<string>;
    splitText(offset: number): Promise<ISuperText>;
}
export interface IDocumentIsolate {
    readonly URL: Promise<string>;
    readonly anchors: ISuperHTMLCollection;
    readonly body: ISuperHTMLElement;
    readonly characterSet: Promise<string>;
    readonly compatMode: Promise<string>;
    readonly contentType: Promise<string>;
    readonly cookie: Promise<string>;
    readonly designMode: Promise<string>;
    readonly dir: Promise<string>;
    readonly doctype: IDocumentType;
    readonly documentElement: ISuperElement;
    readonly documentURI: Promise<string>;
    readonly domain: Promise<string>;
    readonly embeds: ISuperHTMLCollection;
    readonly featurePolicy: IFeaturePolicy;
    readonly forms: ISuperHTMLCollection;
    readonly fullscreenEnabled: Promise<boolean>;
    readonly head: IHTMLHeadElement;
    readonly hidden: Promise<boolean>;
    readonly images: ISuperHTMLCollection;
    readonly implementation: IDOMImplementation;
    readonly lastModified: Promise<string>;
    readonly links: ISuperHTMLCollection;
    readonly location: ILocation;
    readonly plugins: ISuperHTMLCollection;
    readonly readyState: Promise<IDocumentReadyState>;
    readonly referrer: Promise<string>;
    readonly scripts: ISuperHTMLCollection;
    readonly scrollingElement: ISuperElement;
    readonly title: Promise<string>;
    readonly visibilityState: Promise<IVisibilityState>;
    exitFullscreen(): Promise<void>;
    exitPointerLock(): Promise<void>;
    getElementsByClassName(classNames: string): ISuperHTMLCollection;
    getElementsByName(elementName: string): ISuperNodeList;
    getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
    getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
    hasFocus(): Promise<boolean>;
}
export interface IDocumentTypeIsolate {
    readonly name: Promise<string>;
    readonly publicId: Promise<string>;
    readonly systemId: Promise<string>;
}
export interface IRadioNodeListIsolate {
    readonly value: Promise<string>;
}
export interface INodeListIsolate {
    readonly length: Promise<number>;
    item(index: number): ISuperNode;
    forEach(callbackfn: (value: ISuperNode, key: number, parent: INodeListIsolate) => void, thisArg?: any): Promise<void>;
    entries(): Promise<IterableIterator<[number, ISuperNode]>>;
    keys(): Promise<IterableIterator<number>>;
    values(): Promise<IterableIterator<ISuperNode>>;
    [Symbol.iterator](): IterableIterator<ISuperNode>;
    [index: number]: ISuperNode;
}
export interface IHTMLCollectionBaseIsolate {
    readonly length: Promise<number>;
    item(index: number): ISuperElement;
    [Symbol.iterator](): IterableIterator<ISuperElement>;
    [index: number]: ISuperElement;
}
export interface IHTMLOptionsCollectionIsolate {
}
export interface IHTMLCollectionIsolate {
    namedItem(name: string): ISuperElement;
}
export interface IHTMLElementIsolate {
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
}
export interface IHTMLButtonElementIsolate {
    readonly autofocus: Promise<boolean>;
    readonly disabled: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly formAction: Promise<string>;
    readonly formEnctype: Promise<string>;
    readonly formMethod: Promise<string>;
    readonly formNoValidate: Promise<boolean>;
    readonly formTarget: Promise<string>;
    readonly labels: ISuperNodeList;
    readonly name: Promise<string>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly value: Promise<string>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
}
export interface IHTMLFieldSetElementIsolate {
    readonly disabled: Promise<boolean>;
    readonly elements: ISuperHTMLCollection;
    readonly form: IHTMLFormElement;
    readonly name: Promise<string>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
}
export interface IHTMLFormElementIsolate {
}
export interface IHTMLHeadElementIsolate {
}
export interface IHTMLInputElementIsolate {
    readonly accept: Promise<string>;
    readonly alt: Promise<string>;
    readonly autocomplete: Promise<string>;
    readonly autofocus: Promise<boolean>;
    readonly checked: Promise<boolean>;
    readonly defaultChecked: Promise<boolean>;
    readonly defaultValue: Promise<string>;
    readonly dirName: Promise<string>;
    readonly disabled: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly formAction: Promise<string>;
    readonly formEnctype: Promise<string>;
    readonly formMethod: Promise<string>;
    readonly formNoValidate: Promise<boolean>;
    readonly formTarget: Promise<string>;
    readonly height: Promise<number>;
    readonly indeterminate: Promise<boolean>;
    readonly inputMode: Promise<string>;
    readonly labels: ISuperNodeList;
    readonly list: ISuperHTMLElement;
    readonly max: Promise<string>;
    readonly maxLength: Promise<number>;
    readonly min: Promise<string>;
    readonly minLength: Promise<number>;
    readonly multiple: Promise<boolean>;
    readonly name: Promise<string>;
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
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly value: Promise<string>;
    readonly valueAsDate: Promise<any>;
    readonly valueAsNumber: Promise<number>;
    readonly width: Promise<number>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
    select(): Promise<void>;
    setRangeText(replacement: string, start?: number, end?: number, selectionMode?: ISelectionMode): Promise<void>;
    setSelectionRange(start: number, end: number, direction?: string): Promise<void>;
    stepDown(n?: number): Promise<void>;
    stepUp(n?: number): Promise<void>;
}
export interface IHTMLLabelElementIsolate {
    readonly control: ISuperHTMLElement;
    readonly form: IHTMLFormElement;
    readonly htmlFor: Promise<string>;
}
export interface IHTMLOptGroupElementIsolate {
    readonly disabled: Promise<boolean>;
    readonly label: Promise<string>;
}
export interface IHTMLOptionElementIsolate {
    readonly defaultSelected: Promise<boolean>;
    readonly disabled: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly index: Promise<number>;
    readonly label: Promise<string>;
    readonly selected: Promise<boolean>;
    readonly text: Promise<string>;
    readonly value: Promise<string>;
}
export interface IHTMLSelectElementIsolate {
    readonly autocomplete: Promise<string>;
    readonly autofocus: Promise<boolean>;
    readonly disabled: Promise<boolean>;
    readonly form: IHTMLFormElement;
    readonly labels: ISuperNodeList;
    readonly length: Promise<number>;
    readonly multiple: Promise<boolean>;
    readonly name: Promise<string>;
    readonly options: IHTMLOptionsCollection;
    readonly required: Promise<boolean>;
    readonly selectedIndex: Promise<number>;
    readonly selectedOptions: ISuperHTMLCollection;
    readonly size: Promise<number>;
    readonly type: Promise<string>;
    readonly validationMessage: Promise<string>;
    readonly validity: Promise<IValidityState>;
    readonly value: Promise<string>;
    readonly willValidate: Promise<boolean>;
    checkValidity(): Promise<boolean>;
    item(index: number): ISuperElement;
    namedItem(name: string): IHTMLOptionElement;
    reportValidity(): Promise<boolean>;
    [Symbol.iterator](): IterableIterator<ISuperElement>;
    [index: number]: ISuperElement;
}
export interface IHTMLTextAreaElementIsolate {
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
    readonly selectionDirection: Promise<string | null>;
    readonly selectionEnd: Promise<number | null>;
    readonly selectionStart: Promise<number | null>;
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
    setRangeText(replacement: string, start?: number, end?: number, selectionMode?: ISelectionMode): Promise<void>;
    setSelectionRange(start: number, end: number, direction?: string): Promise<void>;
}
