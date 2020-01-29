import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IEventTarget, IDocument, INode, IElement, INodeList, IGetRootNodeOptions } from '../interfaces';
import { IEventTargetProperties, IEventTargetReadonlyProperties } from './EventTarget';

// tslint:disable-next-line:variable-name
export function NodeGenerator(EventTarget: Constructable<IEventTarget>) {
  return class Node extends EventTarget implements INode {
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

    // properties

    public get baseURI(): string {
      return InternalHandler.get<INode, string>(this, 'baseURI');
    }

    public get childNodes(): INodeList {
      return InternalHandler.get<INode, INodeList>(this, 'childNodes');
    }

    public get firstChild(): INode | null {
      return InternalHandler.get<INode, INode | null>(this, 'firstChild');
    }

    public get isConnected(): boolean {
      return InternalHandler.get<INode, boolean>(this, 'isConnected');
    }

    public get lastChild(): INode | null {
      return InternalHandler.get<INode, INode | null>(this, 'lastChild');
    }

    public get nextSibling(): INode | null {
      return InternalHandler.get<INode, INode | null>(this, 'nextSibling');
    }

    public get nodeName(): string {
      return InternalHandler.get<INode, string>(this, 'nodeName');
    }

    public get nodeType(): number {
      return InternalHandler.get<INode, number>(this, 'nodeType');
    }

    public get nodeValue(): string | null {
      return InternalHandler.get<INode, string | null>(this, 'nodeValue');
    }

    public set nodeValue(value: string | null) {
      InternalHandler.set<INode, string | null>(this, 'nodeValue', value);
    }

    public get ownerDocument(): IDocument | null {
      return InternalHandler.get<INode, IDocument | null>(this, 'ownerDocument');
    }

    public get parentElement(): IElement | null {
      return InternalHandler.get<INode, IElement | null>(this, 'parentElement');
    }

    public get parentNode(): INode | null {
      return InternalHandler.get<INode, INode | null>(this, 'parentNode');
    }

    public get previousSibling(): INode | null {
      return InternalHandler.get<INode, INode | null>(this, 'previousSibling');
    }

    public get textContent(): string | null {
      return InternalHandler.get<INode, string | null>(this, 'textContent');
    }

    public set textContent(value: string | null) {
      InternalHandler.set<INode, string | null>(this, 'textContent', value);
    }

    // methods

    public appendChild(node: INode): INode {
      return InternalHandler.run<INode, INode>(this, 'appendChild', [node]);
    }

    public cloneNode(deep?: boolean): INode {
      return InternalHandler.run<INode, INode>(this, 'cloneNode', [deep]);
    }

    public compareDocumentPosition(other: INode): number {
      return InternalHandler.run<INode, number>(this, 'compareDocumentPosition', [other]);
    }

    public contains(other: INode | null): boolean {
      return InternalHandler.run<INode, boolean>(this, 'contains', [other]);
    }

    public getRootNode(options?: IGetRootNodeOptions): INode {
      return InternalHandler.run<INode, INode>(this, 'getRootNode', [options]);
    }

    public hasChildNodes(): boolean {
      return InternalHandler.run<INode, boolean>(this, 'hasChildNodes', []);
    }

    public insertBefore(node: INode, child: INode | null): INode {
      return InternalHandler.run<INode, INode>(this, 'insertBefore', [node, child]);
    }

    public isDefaultNamespace(namespace: string | null): boolean {
      return InternalHandler.run<INode, boolean>(this, 'isDefaultNamespace', [namespace]);
    }

    public isEqualNode(otherNode: INode | null): boolean {
      return InternalHandler.run<INode, boolean>(this, 'isEqualNode', [otherNode]);
    }

    public isSameNode(otherNode: INode | null): boolean {
      return InternalHandler.run<INode, boolean>(this, 'isSameNode', [otherNode]);
    }

    public lookupNamespaceURI(prefix: string | null): string | null {
      return InternalHandler.run<INode, string | null>(this, 'lookupNamespaceURI', [prefix]);
    }

    public lookupPrefix(namespace: string | null): string | null {
      return InternalHandler.run<INode, string | null>(this, 'lookupPrefix', [namespace]);
    }

    public normalize(): void {
      InternalHandler.run<INode, void>(this, 'normalize', []);
    }

    public removeChild(child: INode): INode {
      return InternalHandler.run<INode, INode>(this, 'removeChild', [child]);
    }

    public replaceChild(node: INode, child: INode): INode {
      return InternalHandler.run<INode, INode>(this, 'replaceChild', [node, child]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface INodeProperties extends IEventTargetProperties {
  baseURI?: string;
  childNodes?: INodeList;
  firstChild?: INode | null;
  isConnected?: boolean;
  lastChild?: INode | null;
  nextSibling?: INode | null;
  nodeName?: string;
  nodeType?: number;
  nodeValue?: string | null;
  ownerDocument?: IDocument | null;
  parentElement?: IElement | null;
  parentNode?: INode | null;
  previousSibling?: INode | null;
  textContent?: string | null;
}

export interface INodeReadonlyProperties extends IEventTargetReadonlyProperties {
  baseURI?: string;
  childNodes?: INodeList;
  firstChild?: INode | null;
  isConnected?: boolean;
  lastChild?: INode | null;
  nextSibling?: INode | null;
  nodeName?: string;
  nodeType?: number;
  ownerDocument?: IDocument | null;
  parentElement?: IElement | null;
  parentNode?: INode | null;
  previousSibling?: INode | null;
}

export const { getState, setState, setReadonlyOfNode } = InternalStateGenerator<
  INode,
  INodeProperties,
  INodeReadonlyProperties
>('Node');
