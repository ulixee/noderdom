import { ISuperHTMLElement, ISuperElement } from '../../base/interfaces/super';
import { ISuperHTMLElementProperties } from '../../base/super-klasses/SuperHTMLElement';
export declare const getState: (instance: ISuperHTMLElement) => ISuperHTMLElementProperties, setState: (instance: ISuperHTMLElement, properties: Partial<ISuperHTMLElementProperties>) => void, recordProxy: (proxy: ISuperHTMLElement, instance: ISuperHTMLElement) => void;
declare const SuperHTMLElementBaseClass: {
    new (): {
        [index: number]: ISuperElement;
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
        readonly style: import("../../base/interfaces/official").ICSSStyleDeclaration;
        readonly contentEditable: Promise<string>;
        readonly isContentEditable: Promise<boolean>;
        readonly attributes: import("../../base/interfaces/official").INamedNodeMap;
        readonly classList: import("../../base/interfaces/official").IDOMTokenList;
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
        readonly part: import("../../base/interfaces/official").IDOMTokenList;
        readonly prefix: Promise<string | null>;
        readonly scrollHeight: Promise<number>;
        readonly scrollLeft: Promise<number>;
        readonly scrollTop: Promise<number>;
        readonly scrollWidth: Promise<number>;
        readonly shadowRoot: import("../../base/interfaces/official").IShadowRoot;
        readonly slot: Promise<string>;
        readonly tagName: Promise<string>;
        closest(selectors: string): ISuperElement;
        getAttribute(qualifiedName: string): Promise<string | null>;
        getAttributeNS(namespace: string | null, localName: string): Promise<string | null>;
        getAttributeNames(): Promise<Iterable<string>>;
        getAttributeNode(qualifiedName: string): Promise<import("../../base/interfaces/official").IAttr | null>;
        getAttributeNodeNS(namespace: string | null, localName: string): Promise<import("../../base/interfaces/official").IAttr | null>;
        getBoundingClientRect(): Promise<import("../../base/interfaces/official").IDOMRect>;
        getClientRects(): Promise<import("../../base/interfaces/official").IDOMRectList>;
        getElementsByClassName(classNames: string): import("../../base/interfaces/super").ISuperHTMLCollection;
        getElementsByTagName(qualifiedName: string): import("../../base/interfaces/super").ISuperHTMLCollection;
        getElementsByTagNameNS(namespace: string | null, localName: string): import("../../base/interfaces/super").ISuperHTMLCollection;
        hasAttribute(qualifiedName: string): Promise<boolean>;
        hasAttributeNS(namespace: string | null, localName: string): Promise<boolean>;
        hasAttributes(): Promise<boolean>;
        hasPointerCapture(pointerId: number): Promise<boolean>;
        matches(selectors: string): Promise<boolean>;
        requestFullscreen(options?: import("../../base/interfaces/official").IFullscreenOptions | undefined): Promise<void>;
        requestPointerLock(): Promise<void>;
        scrollIntoView(arg?: boolean | import("../../base/interfaces/official").IScrollIntoViewOptions | undefined): Promise<void>;
        readonly download: Promise<string>;
        readonly hreflang: Promise<string>;
        readonly referrerPolicy: Promise<string>;
        readonly rel: Promise<string>;
        readonly relList: import("../../base/interfaces/official").IDOMTokenList;
        readonly target: Promise<string>;
        readonly text: Promise<string>;
        readonly type: Promise<string>;
        readonly alt: Promise<string>;
        readonly coords: Promise<string>;
        readonly noHref: Promise<boolean>;
        readonly shape: Promise<string>;
        readonly href: Promise<string>;
        readonly aLink: Promise<string>;
        readonly background: Promise<string>;
        readonly bgColor: Promise<string>;
        readonly link: Promise<string>;
        readonly vLink: Promise<string>;
        readonly autofocus: Promise<boolean>;
        readonly disabled: Promise<boolean>;
        readonly form: import("../../base/interfaces/official").IHTMLFormElement;
        readonly formAction: Promise<string>;
        readonly formEnctype: Promise<string>;
        readonly formMethod: Promise<string>;
        readonly formNoValidate: Promise<boolean>;
        readonly formTarget: Promise<string>;
        readonly labels: import("../../base/interfaces/super").ISuperNodeList;
        readonly name: Promise<string>;
        readonly validationMessage: Promise<string>;
        readonly validity: Promise<import("../../base/interfaces/official").IValidityState>;
        readonly value: Promise<string> | Promise<number>;
        readonly willValidate: Promise<boolean>;
        checkValidity: (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>);
        reportValidity: (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>) & (() => Promise<boolean>);
        readonly height: Promise<string> | Promise<number>;
        readonly width: Promise<string> | Promise<number>;
        captureStream: ((frameRequestRate?: number | undefined) => import("../../base/interfaces/official").IMediaStream) & (() => import("../../base/interfaces/official").IMediaStream);
        toDataURL(type?: string | undefined, quality?: any): Promise<string>;
        transferControlToOffscreen(): import("../../base/interfaces/official").IOffscreenCanvas;
        readonly compact: Promise<boolean>;
        readonly options: Promise<import("../../base/interfaces/super").ISuperHTMLCollection> | import("../../base/interfaces/official").IHTMLOptionsCollection;
        readonly open: Promise<boolean>;
        readonly returnValue: Promise<string>;
        close(returnValue?: string | undefined): Promise<void>;
        show(): Promise<void>;
        showModal(): Promise<void>;
        readonly align: Promise<string>;
        readonly src: Promise<string>;
        readonly elements: import("../../base/interfaces/super").ISuperHTMLCollection;
        readonly color: Promise<string>;
        readonly face: Promise<string>;
        readonly size: Promise<string> | Promise<number>;
        readonly acceptCharset: Promise<string>;
        readonly action: Promise<string>;
        readonly autocomplete: Promise<string>;
        readonly encoding: Promise<string>;
        readonly enctype: Promise<string>;
        readonly length: Promise<number>;
        readonly noValidate: Promise<boolean>;
        reset(): Promise<void>;
        submit(): Promise<void>;
        readonly contentDocument: import("../../base/interfaces/super").ISuperDocument;
        readonly frameBorder: Promise<string>;
        readonly longDesc: Promise<string>;
        readonly marginHeight: Promise<string>;
        readonly marginWidth: Promise<string>;
        readonly noResize: Promise<boolean>;
        readonly scrolling: Promise<string>;
        readonly cols: Promise<string> | Promise<number>;
        readonly rows: Promise<string> | Promise<number> | import("../../base/interfaces/super").ISuperHTMLCollection;
        readonly version: Promise<string>;
        readonly allow: Promise<string>;
        readonly allowFullscreen: Promise<boolean>;
        readonly allowPaymentRequest: Promise<boolean>;
        readonly csp: Promise<string>;
        readonly featurePolicy: import("../../base/interfaces/official").IFeaturePolicy;
        readonly sandbox: import("../../base/interfaces/official").IDOMTokenList;
        readonly srcdoc: Promise<string>;
        readonly complete: Promise<boolean>;
        readonly crossOrigin: Promise<string | null>;
        readonly currentSrc: Promise<string>;
        readonly decoding: Promise<string>;
        readonly isMap: Promise<boolean>;
        readonly naturalHeight: Promise<number>;
        readonly naturalWidth: Promise<number>;
        readonly sizes: Promise<string> | import("../../base/interfaces/official").IDOMTokenList;
        readonly srcset: Promise<string>;
        readonly useMap: Promise<string>;
        readonly x: Promise<number>;
        readonly y: Promise<number>;
        decode(): Promise<void>;
        readonly accept: Promise<string>;
        readonly checked: Promise<boolean>;
        readonly defaultChecked: Promise<boolean>;
        readonly defaultValue: Promise<string>;
        readonly dirName: Promise<string>;
        readonly files: import("../../base/interfaces/official").IFileList;
        readonly indeterminate: Promise<boolean>;
        readonly inputMode: Promise<string>;
        readonly list: ISuperHTMLElement;
        readonly max: Promise<string> | Promise<number>;
        readonly maxLength: Promise<number>;
        readonly min: Promise<string> | Promise<number>;
        readonly minLength: Promise<number>;
        readonly multiple: Promise<boolean>;
        readonly pattern: Promise<string>;
        readonly placeholder: Promise<string>;
        readonly readOnly: Promise<boolean>;
        readonly required: Promise<boolean>;
        readonly selectionDirection: Promise<string | null>;
        readonly selectionEnd: Promise<number | null>;
        readonly selectionStart: Promise<number | null>;
        readonly step: Promise<string>;
        readonly valueAsDate: Promise<any>;
        readonly valueAsNumber: Promise<number>;
        select: (() => Promise<void>) & (() => Promise<void>);
        setRangeText: ((replacement: string, start?: number | undefined, end?: number | undefined, selectionMode?: "end" | "preserve" | "select" | "start" | undefined) => Promise<void>) & ((replacement: string, start?: number | undefined, end?: number | undefined, selectionMode?: "end" | "preserve" | "select" | "start" | undefined) => Promise<void>);
        setSelectionRange: ((start: number, end: number, direction?: string | undefined) => Promise<void>) & ((start: number, end: number, direction?: string | undefined) => Promise<void>);
        stepDown(n?: number | undefined): Promise<void>;
        stepUp(n?: number | undefined): Promise<void>;
        readonly control: ISuperHTMLElement;
        readonly htmlFor: Promise<string>;
        readonly as: Promise<string>;
        readonly media: Promise<string>;
        readonly areas: import("../../base/interfaces/super").ISuperHTMLCollection;
        readonly HAVE_CURRENT_DATA: number;
        readonly HAVE_ENOUGH_DATA: number;
        readonly HAVE_FUTURE_DATA: number;
        readonly HAVE_METADATA: number;
        readonly HAVE_NOTHING: number;
        readonly NETWORK_EMPTY: number;
        readonly NETWORK_IDLE: number;
        readonly NETWORK_LOADING: number;
        readonly NETWORK_NO_SOURCE: number;
        readonly audioTracks: import("../../base/interfaces/official").IAudioTrackList;
        readonly autoplay: Promise<boolean>;
        readonly buffered: import("../../base/interfaces/official").ITimeRanges;
        readonly controls: Promise<boolean>;
        readonly controlsList: import("../../base/interfaces/official").IDOMTokenList;
        readonly currentTime: Promise<number>;
        readonly defaultMuted: Promise<boolean>;
        readonly defaultPlaybackRate: Promise<number>;
        readonly disableRemotePlayback: Promise<boolean>;
        readonly duration: Promise<number>;
        readonly ended: Promise<boolean>;
        readonly error: import("../../base/interfaces/official").IMediaError;
        readonly loop: Promise<boolean>;
        readonly mediaKeys: import("../../base/interfaces/official").IMediaKeys;
        readonly muted: Promise<boolean>;
        readonly networkState: Promise<number>;
        readonly playbackRate: Promise<number>;
        readonly played: import("../../base/interfaces/official").ITimeRanges;
        readonly preload: Promise<string>;
        readonly readyState: Promise<number> | Promise<import("../../base/interfaces/official").IDocumentReadyState>;
        readonly seekable: import("../../base/interfaces/official").ITimeRanges;
        readonly seeking: Promise<boolean>;
        readonly sinkId: Promise<string>;
        readonly textTracks: import("../../base/interfaces/official").ITextTrackList;
        readonly videoTracks: import("../../base/interfaces/official").IVideoTrackList;
        readonly volume: Promise<number>;
        canPlayType(type: string): Promise<import("../../base/interfaces/official").ICanPlayTypeResult>;
        load(): Promise<void>;
        pause(): Promise<void>;
        play(): Promise<void>;
        setSinkId(sinkId: string): Promise<void>;
        readonly content: Promise<string> | import("../../base/interfaces/official").IDocumentFragment;
        readonly httpEquiv: Promise<string>;
        readonly scheme: Promise<string>;
        readonly high: Promise<number>;
        readonly low: Promise<number>;
        readonly optimum: Promise<number>;
        readonly cite: Promise<string>;
        readonly dateTime: Promise<string>;
        readonly reversed: Promise<boolean>;
        readonly start: Promise<number>;
        readonly archive: Promise<string>;
        readonly border: Promise<string>;
        readonly code: Promise<string>;
        readonly codeBase: Promise<string>;
        readonly codeType: Promise<string>;
        readonly data: Promise<string>;
        readonly declare: Promise<boolean>;
        readonly hspace: Promise<number>;
        readonly standby: Promise<string>;
        readonly vspace: Promise<number>;
        readonly label: Promise<string>;
        readonly defaultSelected: Promise<boolean>;
        readonly index: Promise<number>;
        readonly selected: Promise<boolean>;
        readonly dataset: Promise<Record<string, string>>;
        readonly nonce: Promise<string>;
        readonly tabIndex: Promise<number>;
        blur(): Promise<void>;
        focus(): Promise<void>;
        readonly valueType: Promise<string>;
        readonly position: Promise<number>;
        readonly async: Promise<boolean>;
        readonly charset: Promise<string>;
        readonly defer: Promise<boolean>;
        readonly event: Promise<string>;
        readonly noModule: Promise<boolean>;
        readonly selectedIndex: Promise<number>;
        readonly selectedOptions: import("../../base/interfaces/super").ISuperHTMLCollection;
        item(index: number): ISuperElement;
        namedItem(name: string): import("../../base/interfaces/official").IHTMLOptionElement;
        [Symbol.iterator](): IterableIterator<ISuperElement>;
        assignedElements(options?: import("../../base/interfaces/official").IAssignedNodesOptions | undefined): Promise<Iterable<ISuperElement>>;
        assignedNodes(options?: import("../../base/interfaces/official").IAssignedNodesOptions | undefined): Promise<Iterable<import("../../base/interfaces/super").ISuperNode>>;
        readonly ch: Promise<string>;
        readonly chOff: Promise<string>;
        readonly span: Promise<number>;
        readonly vAlign: Promise<string>;
        readonly caption: import("../../base/interfaces/official").IHTMLTableCaptionElement;
        readonly cellPadding: Promise<string>;
        readonly cellSpacing: Promise<string>;
        readonly frame: Promise<string>;
        readonly rules: Promise<string>;
        readonly summary: Promise<string>;
        readonly tBodies: import("../../base/interfaces/super").ISuperHTMLCollection;
        readonly tFoot: import("../../base/interfaces/official").IHTMLTableSectionElement;
        readonly tHead: import("../../base/interfaces/official").IHTMLTableSectionElement;
        readonly cells: import("../../base/interfaces/super").ISuperHTMLCollection;
        readonly rowIndex: Promise<number>;
        readonly sectionRowIndex: Promise<number>;
        deleteCell(index: number): Promise<void>;
        insertCell(index?: number | undefined): import("../../base/interfaces/official").IHTMLTableCellElement;
        readonly textLength: Promise<number>;
        readonly wrap: Promise<string>;
        setCustomValidity(error: string): Promise<void>;
        readonly ERROR: number;
        readonly LOADED: number;
        readonly LOADING: number;
        readonly NONE: number;
        readonly default: Promise<boolean>;
        readonly kind: Promise<string>;
        readonly srclang: Promise<string>;
        readonly track: Promise<import("../../base/interfaces/official").ITextTrack>;
        readonly poster: Promise<string>;
        readonly videoHeight: Promise<number>;
        readonly videoWidth: Promise<number>;
        getVideoPlaybackQuality(): import("../../base/interfaces/official").IVideoPlaybackQuality;
        readonly sheet: import("../../base/interfaces/super").ISuperStyleSheet;
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
        readonly childNodes: import("../../base/interfaces/super").ISuperNodeList;
        readonly firstChild: import("../../base/interfaces/super").ISuperNode;
        readonly isConnected: Promise<boolean>;
        readonly lastChild: import("../../base/interfaces/super").ISuperNode;
        readonly nextSibling: import("../../base/interfaces/super").ISuperNode;
        readonly nodeName: Promise<string>;
        readonly nodeType: Promise<number>;
        readonly nodeValue: Promise<string | null>;
        readonly ownerDocument: import("../../base/interfaces/super").ISuperDocument;
        readonly parentElement: ISuperElement;
        readonly parentNode: import("../../base/interfaces/super").ISuperNode;
        readonly previousSibling: import("../../base/interfaces/super").ISuperNode;
        readonly textContent: Promise<string | null>;
        compareDocumentPosition(other: import("../../base/interfaces/isolate").INodeIsolate): Promise<number>;
        contains(other: import("../../base/interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        getRootNode(options?: import("../../base/interfaces/official").IGetRootNodeOptions | undefined): import("../../base/interfaces/super").ISuperNode;
        hasChildNodes(): Promise<boolean>;
        isDefaultNamespace(namespace: string | null): Promise<boolean>;
        isEqualNode(otherNode: import("../../base/interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        isSameNode(otherNode: import("../../base/interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        lookupNamespaceURI(prefix: string | null): Promise<string | null>;
        lookupPrefix(namespace: string | null): Promise<string | null>;
        normalize(): Promise<void>;
        readonly nextElementSibling: ISuperElement;
        readonly previousElementSibling: ISuperElement;
        readonly childElementCount: Promise<number>;
        readonly children: import("../../base/interfaces/super").ISuperHTMLCollection;
        readonly firstElementChild: ISuperElement;
        readonly lastElementChild: ISuperElement;
        querySelector(selectors: string): ISuperElement;
        querySelectorAll(selectors: string): import("../../base/interfaces/super").ISuperNodeList;
        readonly assignedSlot: import("../../base/interfaces/official").IHTMLSlotElement;
    };
};
export default class SuperHTMLElement extends SuperHTMLElementBaseClass implements ISuperHTMLElement {
    constructor();
    get offsetParent(): ISuperElement;
}
export {};
