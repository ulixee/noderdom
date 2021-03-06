import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { INodeIsolate } from '../interfaces/isolate';
import { ISuperNodeList, ISuperNode, ISuperDocument, ISuperElement } from '../interfaces/super';
import { IGetRootNodeOptions } from '../interfaces/official';
export declare const getState: (instance: INodeIsolate) => INodeIsolateProperties, setState: (instance: INodeIsolate, properties: Partial<INodeIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<INodeIsolate>;
export default class NodeIsolate implements INodeIsolate {
    static readonly ATTRIBUTE_NODE: number;
    static readonly CDATA_SECTION_NODE: number;
    static readonly COMMENT_NODE: number;
    static readonly DOCUMENT_FRAGMENT_NODE: number;
    static readonly DOCUMENT_NODE: number;
    static readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    static readonly DOCUMENT_POSITION_CONTAINS: number;
    static readonly DOCUMENT_POSITION_DISCONNECTED: number;
    static readonly DOCUMENT_POSITION_FOLLOWING: number;
    static readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    static readonly DOCUMENT_POSITION_PRECEDING: number;
    static readonly DOCUMENT_TYPE_NODE: number;
    static readonly ELEMENT_NODE: number;
    static readonly ENTITY_NODE: number;
    static readonly ENTITY_REFERENCE_NODE: number;
    static readonly NOTATION_NODE: number;
    static readonly PROCESSING_INSTRUCTION_NODE: number;
    static readonly TEXT_NODE: number;
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
    get baseURI(): Promise<string>;
    get childNodes(): ISuperNodeList;
    get firstChild(): ISuperNode;
    get isConnected(): Promise<boolean>;
    get lastChild(): ISuperNode;
    get nextSibling(): ISuperNode;
    get nodeName(): Promise<string>;
    get nodeType(): Promise<number>;
    get nodeValue(): Promise<string | null>;
    get ownerDocument(): ISuperDocument;
    get parentElement(): ISuperElement;
    get parentNode(): ISuperNode;
    get previousSibling(): ISuperNode;
    get textContent(): Promise<string | null>;
    compareDocumentPosition(other: INodeIsolate): Promise<number>;
    contains(other: INodeIsolate | null): Promise<boolean>;
    getRootNode(options?: IGetRootNodeOptions): ISuperNode;
    hasChildNodes(): Promise<boolean>;
    isDefaultNamespace(namespace: string | null): Promise<boolean>;
    isEqualNode(otherNode: INodeIsolate | null): Promise<boolean>;
    isSameNode(otherNode: INodeIsolate | null): Promise<boolean>;
    lookupNamespaceURI(prefix: string | null): Promise<string | null>;
    lookupPrefix(namespace: string | null): Promise<string | null>;
    normalize(): Promise<void>;
}
export interface INodeIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly baseURI?: Promise<string>;
    readonly childNodes?: ISuperNodeList;
    readonly firstChild?: ISuperNode;
    readonly isConnected?: Promise<boolean>;
    readonly lastChild?: ISuperNode;
    readonly nextSibling?: ISuperNode;
    readonly nodeName?: Promise<string>;
    readonly nodeType?: Promise<number>;
    readonly nodeValue?: Promise<string | null>;
    readonly ownerDocument?: ISuperDocument;
    readonly parentElement?: ISuperElement;
    readonly parentNode?: ISuperNode;
    readonly previousSibling?: ISuperNode;
    readonly textContent?: Promise<string | null>;
}
export declare const NodeIsolatePropertyKeys: string[];
export declare const NodeIsolateConstantKeys: string[];
