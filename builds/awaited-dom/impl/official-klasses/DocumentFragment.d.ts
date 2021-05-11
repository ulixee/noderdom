import { IDocumentFragment } from '../../base/interfaces/official';
import { IDocumentFragmentProperties } from '../../base/official-klasses/DocumentFragment';
export declare const getState: (instance: IDocumentFragment) => IDocumentFragmentProperties, setState: (instance: IDocumentFragment, properties: Partial<IDocumentFragmentProperties>) => void, recordProxy: (proxy: IDocumentFragment, instance: IDocumentFragment) => void;
declare const DocumentFragmentBaseClass: {
    new (): {
        then<TResult1 = IDocumentFragment, TResult2 = never>(onfulfilled?: ((value: IDocumentFragment) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
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
        readonly parentElement: import("../../base/interfaces/super").ISuperElement;
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
        getElementById(elementId: string): import("../../base/interfaces/super").ISuperElement;
        readonly childElementCount: Promise<number>;
        readonly children: import("../../base/interfaces/super").ISuperHTMLCollection;
        readonly firstElementChild: import("../../base/interfaces/super").ISuperElement;
        readonly lastElementChild: import("../../base/interfaces/super").ISuperElement;
        querySelector(selectors: string): import("../../base/interfaces/super").ISuperElement;
        querySelectorAll(selectors: string): import("../../base/interfaces/super").ISuperNodeList;
    };
};
export default class DocumentFragment extends DocumentFragmentBaseClass implements IDocumentFragment {
    constructor();
}
export {};