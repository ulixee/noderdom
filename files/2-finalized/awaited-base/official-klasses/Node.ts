import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { INode, INodeList, IDocument, IElement } from '../interfaces/official';
import { IGetRootNodeOptions } from '../interfaces/basic';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<INode, INodeProperties>();
export const awaitedHandler = new AwaitedHandler<INode>('Node', getState, setState);

export function NodeGenerator() {
  return class Node implements INode {
    public static readonly ATTRIBUTE_NODE: number = 2;
    public static readonly CDATA_SECTION_NODE: number = 4;
    public static readonly COMMENT_NODE: number = 8;
    public static readonly DOCUMENT_FRAGMENT_NODE: number = 11;
    public static readonly DOCUMENT_NODE: number = 9;
    public static readonly DOCUMENT_POSITION_CONTAINED_BY: number = 0x10;
    public static readonly DOCUMENT_POSITION_CONTAINS: number = 0x08;
    public static readonly DOCUMENT_POSITION_DISCONNECTED: number = 0x01;
    public static readonly DOCUMENT_POSITION_FOLLOWING: number = 0x04;
    public static readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number = 0x20;
    public static readonly DOCUMENT_POSITION_PRECEDING: number = 0x02;
    public static readonly DOCUMENT_TYPE_NODE: number = 10;
    public static readonly ELEMENT_NODE: number = 1;
    public static readonly ENTITY_NODE: number = 6;
    public static readonly ENTITY_REFERENCE_NODE: number = 5;
    public static readonly NOTATION_NODE: number = 12;
    public static readonly PROCESSING_INSTRUCTION_NODE: number = 7;
    public static readonly TEXT_NODE: number = 3;

    public readonly ATTRIBUTE_NODE: number = 2;
    public readonly CDATA_SECTION_NODE: number = 4;
    public readonly COMMENT_NODE: number = 8;
    public readonly DOCUMENT_FRAGMENT_NODE: number = 11;
    public readonly DOCUMENT_NODE: number = 9;
    public readonly DOCUMENT_POSITION_CONTAINED_BY: number = 0x10;
    public readonly DOCUMENT_POSITION_CONTAINS: number = 0x08;
    public readonly DOCUMENT_POSITION_DISCONNECTED: number = 0x01;
    public readonly DOCUMENT_POSITION_FOLLOWING: number = 0x04;
    public readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number = 0x20;
    public readonly DOCUMENT_POSITION_PRECEDING: number = 0x02;
    public readonly DOCUMENT_TYPE_NODE: number = 10;
    public readonly ELEMENT_NODE: number = 1;
    public readonly ENTITY_NODE: number = 6;
    public readonly ENTITY_REFERENCE_NODE: number = 5;
    public readonly NOTATION_NODE: number = 12;
    public readonly PROCESSING_INSTRUCTION_NODE: number = 7;
    public readonly TEXT_NODE: number = 3;
    constructor() {
      initialize(Node, this);
    }

    // properties

    public get baseURI(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'baseURI', false);
    }

    public get childNodes(): INodeList {
      throw new Error('Node.childNodes getter not implemented');
    }

    public get firstChild(): INode {
      throw new Error('Node.firstChild getter not implemented');
    }

    public get isConnected(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'isConnected', false);
    }

    public get lastChild(): INode {
      throw new Error('Node.lastChild getter not implemented');
    }

    public get nextSibling(): INode {
      throw new Error('Node.nextSibling getter not implemented');
    }

    public get nodeName(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'nodeName', false);
    }

    public get nodeType(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'nodeType', false);
    }

    public get nodeValue(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'nodeValue', true);
    }

    public get ownerDocument(): IDocument {
      throw new Error('Node.ownerDocument getter not implemented');
    }

    public get parentElement(): IElement {
      throw new Error('Node.parentElement getter not implemented');
    }

    public get parentNode(): INode {
      throw new Error('Node.parentNode getter not implemented');
    }

    public get previousSibling(): INode {
      throw new Error('Node.previousSibling getter not implemented');
    }

    public get textContent(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'textContent', true);
    }

    // methods

    public compareDocumentPosition(other: INode): Promise<number> {
      return awaitedHandler.runMethod<number>(this, 'compareDocumentPosition', [other]);
    }

    public contains(other: INode | null): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'contains', [other]);
    }

    public getRootNode(options?: IGetRootNodeOptions): INode {
      throw new Error('Node.getRootNode not implemented');
    }

    public hasChildNodes(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasChildNodes', []);
    }

    public isDefaultNamespace(namespace: string | null): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'isDefaultNamespace', [namespace]);
    }

    public isEqualNode(otherNode: INode | null): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'isEqualNode', [otherNode]);
    }

    public isSameNode(otherNode: INode | null): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'isSameNode', [otherNode]);
    }

    public lookupNamespaceURI(prefix: string | null): Promise<string | null> {
      return awaitedHandler.runMethod<string | null>(this, 'lookupNamespaceURI', [prefix]);
    }

    public lookupPrefix(namespace: string | null): Promise<string | null> {
      return awaitedHandler.runMethod<string | null>(this, 'lookupPrefix', [namespace]);
    }

    public normalize(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'normalize', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface INodeProperties {
  readonly baseURI?: Promise<string>;
  readonly childNodes?: INodeList;
  readonly firstChild?: INode;
  readonly isConnected?: Promise<boolean>;
  readonly lastChild?: INode;
  readonly nextSibling?: INode;
  readonly nodeName?: Promise<string>;
  readonly nodeType?: Promise<number>;
  readonly nodeValue?: Promise<string | null>;
  readonly ownerDocument?: IDocument;
  readonly parentElement?: IElement;
  readonly parentNode?: INode;
  readonly previousSibling?: INode;
  readonly textContent?: Promise<string | null>;
}

export const NodePropertyKeys = ['baseURI', 'childNodes', 'firstChild', 'isConnected', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentElement', 'parentNode', 'previousSibling', 'textContent'];

export const NodeConstantKeys = ['ATTRIBUTE_NODE', 'CDATA_SECTION_NODE', 'COMMENT_NODE', 'DOCUMENT_FRAGMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_POSITION_CONTAINED_BY', 'DOCUMENT_POSITION_CONTAINS', 'DOCUMENT_POSITION_DISCONNECTED', 'DOCUMENT_POSITION_FOLLOWING', 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 'DOCUMENT_POSITION_PRECEDING', 'DOCUMENT_TYPE_NODE', 'ELEMENT_NODE', 'ENTITY_NODE', 'ENTITY_REFERENCE_NODE', 'NOTATION_NODE', 'PROCESSING_INSTRUCTION_NODE', 'TEXT_NODE'];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<INode>, self: INode) {
  initializeConstantsAndProperties<INode>(Klass, self, NodeConstantKeys, NodePropertyKeys);
}
