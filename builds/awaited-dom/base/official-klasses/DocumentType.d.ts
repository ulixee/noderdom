import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IDocumentType, INode } from '../interfaces/official';
import { INodeProperties } from './Node';
export declare const getState: <C = IDocumentType, P = IDocumentTypeProperties>(instance: C) => P, setState: <P = IDocumentTypeProperties>(instance: IDocumentType, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<IDocumentType>;
export declare const nodeAttacher: NodeAttacher<IDocumentType>;
export declare function DocumentTypeGenerator(Node: Constructable<INode>): {
    new (): {
        readonly name: Promise<string>;
        readonly publicId: Promise<string>;
        readonly systemId: Promise<string>;
        then<TResult1 = IDocumentType, TResult2 = never>(onfulfilled?: ((value: IDocumentType) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
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
    };
};
export interface IDocumentTypeProperties extends INodeProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly name?: Promise<string>;
    readonly publicId?: Promise<string>;
    readonly systemId?: Promise<string>;
}
export declare const DocumentTypePropertyKeys: string[];
export declare const DocumentTypeConstantKeys: string[];
