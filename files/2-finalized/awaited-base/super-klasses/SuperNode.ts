import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import { ISuperNode } from '../interfaces/super';
import { IAttrIsolate, ICharacterDataIsolate, IDocumentIsolate, IDocumentTypeIsolate, IElementIsolate, IHTMLElementIsolate, IHTMLHeadElementIsolate, ITextIsolate } from '../interfaces/isolate';
import { INodeList, INode, IDocument, IElement } from '../interfaces/official';
import { IGetRootNodeOptions } from '../interfaces/basic';
import { IAttrIsolateProperties, AttrIsolatePropertyKeys, AttrIsolateConstantKeys } from '../isolate-mixins/AttrIsolate';
import { ICharacterDataIsolateProperties, CharacterDataIsolatePropertyKeys, CharacterDataIsolateConstantKeys } from '../isolate-mixins/CharacterDataIsolate';
import { IDocumentIsolateProperties, DocumentIsolatePropertyKeys, DocumentIsolateConstantKeys } from '../isolate-mixins/DocumentIsolate';
import { IDocumentTypeIsolateProperties, DocumentTypeIsolatePropertyKeys, DocumentTypeIsolateConstantKeys } from '../isolate-mixins/DocumentTypeIsolate';
import { IElementIsolateProperties, ElementIsolatePropertyKeys, ElementIsolateConstantKeys } from '../isolate-mixins/ElementIsolate';
import { IHTMLElementIsolateProperties, HTMLElementIsolatePropertyKeys, HTMLElementIsolateConstantKeys } from '../isolate-mixins/HTMLElementIsolate';
import { IHTMLHeadElementIsolateProperties, HTMLHeadElementIsolatePropertyKeys, HTMLHeadElementIsolateConstantKeys } from '../isolate-mixins/HTMLHeadElementIsolate';
import { ITextIsolateProperties, TextIsolatePropertyKeys, TextIsolateConstantKeys } from '../isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNode, ISuperNodeProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperNode>('SuperNode', getState, setState);

export function SuperNodeGenerator(AttrIsolate: Constructable<IAttrIsolate>, CharacterDataIsolate: Constructable<ICharacterDataIsolate>, DocumentIsolate: Constructable<IDocumentIsolate>, DocumentTypeIsolate: Constructable<IDocumentTypeIsolate>, ElementIsolate: Constructable<IElementIsolate>, HTMLElementIsolate: Constructable<IHTMLElementIsolate>, HTMLHeadElementIsolate: Constructable<IHTMLHeadElementIsolate>, TextIsolate: Constructable<ITextIsolate>) {
  const Parent = (ClassMixer(AttrIsolate, [CharacterDataIsolate, DocumentIsolate, DocumentTypeIsolate, ElementIsolate, HTMLElementIsolate, HTMLHeadElementIsolate, TextIsolate]) as unknown) as Constructable<IAttrIsolate & ICharacterDataIsolate & IDocumentIsolate & IDocumentTypeIsolate & IElementIsolate & IHTMLElementIsolate & IHTMLHeadElementIsolate & ITextIsolate>;

  return class SuperNode extends Parent implements ISuperNode {
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
      super();
      initialize(SuperNode, this);
    }

    // properties

    public get baseURI(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'baseURI', false);
    }

    public get childNodes(): INodeList {
      throw new Error('SuperNode.childNodes getter not implemented');
    }

    public get firstChild(): INode {
      throw new Error('SuperNode.firstChild getter not implemented');
    }

    public get isConnected(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'isConnected', false);
    }

    public get lastChild(): INode {
      throw new Error('SuperNode.lastChild getter not implemented');
    }

    public get nextSibling(): INode {
      throw new Error('SuperNode.nextSibling getter not implemented');
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
      throw new Error('SuperNode.ownerDocument getter not implemented');
    }

    public get parentElement(): IElement {
      throw new Error('SuperNode.parentElement getter not implemented');
    }

    public get parentNode(): INode {
      throw new Error('SuperNode.parentNode getter not implemented');
    }

    public get previousSibling(): INode {
      throw new Error('SuperNode.previousSibling getter not implemented');
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

    public getRootNode(options?: IGetRootNodeOptions): Promise<INode> {
      return awaitedHandler.runMethod<INode>(this, 'getRootNode', [options]);
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

export interface ISuperNodeProperties extends IAttrIsolateProperties, ICharacterDataIsolateProperties, IDocumentIsolateProperties, IDocumentTypeIsolateProperties, IElementIsolateProperties, IHTMLElementIsolateProperties, IHTMLHeadElementIsolateProperties, ITextIsolateProperties {
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

export const SuperNodePropertyKeys = [...AttrIsolatePropertyKeys, ...CharacterDataIsolatePropertyKeys, ...DocumentIsolatePropertyKeys, ...DocumentTypeIsolatePropertyKeys, ...ElementIsolatePropertyKeys, ...HTMLElementIsolatePropertyKeys, ...HTMLHeadElementIsolatePropertyKeys, ...TextIsolatePropertyKeys, 'baseURI', 'childNodes', 'firstChild', 'isConnected', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentElement', 'parentNode', 'previousSibling', 'textContent'];

export const SuperNodeConstantKeys = [...AttrIsolateConstantKeys, ...CharacterDataIsolateConstantKeys, ...DocumentIsolateConstantKeys, ...DocumentTypeIsolateConstantKeys, ...ElementIsolateConstantKeys, ...HTMLElementIsolateConstantKeys, ...HTMLHeadElementIsolateConstantKeys, ...TextIsolateConstantKeys, 'ATTRIBUTE_NODE', 'CDATA_SECTION_NODE', 'COMMENT_NODE', 'DOCUMENT_FRAGMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_POSITION_CONTAINED_BY', 'DOCUMENT_POSITION_CONTAINS', 'DOCUMENT_POSITION_DISCONNECTED', 'DOCUMENT_POSITION_FOLLOWING', 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 'DOCUMENT_POSITION_PRECEDING', 'DOCUMENT_TYPE_NODE', 'ELEMENT_NODE', 'ENTITY_NODE', 'ENTITY_REFERENCE_NODE', 'NOTATION_NODE', 'PROCESSING_INSTRUCTION_NODE', 'TEXT_NODE'];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<ISuperNode>, self: ISuperNode) {
  initializeConstantsAndProperties<ISuperNode>(Klass, self, SuperNodeConstantKeys, SuperNodePropertyKeys);
}
