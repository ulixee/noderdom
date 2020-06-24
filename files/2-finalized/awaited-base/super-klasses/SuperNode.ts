import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { ISuperNode, ISuperNodeList, ISuperDocument, ISuperElement } from '../interfaces/super';
import { IAttrIsolate, ICharacterDataIsolate, IDocumentIsolate, IDocumentTypeIsolate, IElementIsolate, IHTMLButtonElementIsolate, IHTMLElementIsolate, IHTMLFieldSetElementIsolate, IHTMLFormElementIsolate, IHTMLHeadElementIsolate, IHTMLInputElementIsolate, IHTMLLabelElementIsolate, IHTMLOptGroupElementIsolate, IHTMLOptionElementIsolate, IHTMLSelectElementIsolate, IHTMLTextAreaElementIsolate, INodeIsolate, ITextIsolate } from '../interfaces/isolate';
import { IHTMLOrSVGElement, INonDocumentTypeChildNode, IParentNode, IGetRootNodeOptions } from '../interfaces/official';
import { IAttrIsolateProperties, AttrIsolatePropertyKeys, AttrIsolateConstantKeys } from '../isolate-mixins/AttrIsolate';
import { ICharacterDataIsolateProperties, CharacterDataIsolatePropertyKeys, CharacterDataIsolateConstantKeys } from '../isolate-mixins/CharacterDataIsolate';
import { IDocumentIsolateProperties, DocumentIsolatePropertyKeys, DocumentIsolateConstantKeys } from '../isolate-mixins/DocumentIsolate';
import { IDocumentTypeIsolateProperties, DocumentTypeIsolatePropertyKeys, DocumentTypeIsolateConstantKeys } from '../isolate-mixins/DocumentTypeIsolate';
import { IElementIsolateProperties, ElementIsolatePropertyKeys, ElementIsolateConstantKeys } from '../isolate-mixins/ElementIsolate';
import { IHTMLButtonElementIsolateProperties, HTMLButtonElementIsolatePropertyKeys, HTMLButtonElementIsolateConstantKeys } from '../isolate-mixins/HTMLButtonElementIsolate';
import { IHTMLElementIsolateProperties, HTMLElementIsolatePropertyKeys, HTMLElementIsolateConstantKeys } from '../isolate-mixins/HTMLElementIsolate';
import { IHTMLFieldSetElementIsolateProperties, HTMLFieldSetElementIsolatePropertyKeys, HTMLFieldSetElementIsolateConstantKeys } from '../isolate-mixins/HTMLFieldSetElementIsolate';
import { IHTMLFormElementIsolateProperties, HTMLFormElementIsolatePropertyKeys, HTMLFormElementIsolateConstantKeys } from '../isolate-mixins/HTMLFormElementIsolate';
import { IHTMLHeadElementIsolateProperties, HTMLHeadElementIsolatePropertyKeys, HTMLHeadElementIsolateConstantKeys } from '../isolate-mixins/HTMLHeadElementIsolate';
import { IHTMLInputElementIsolateProperties, HTMLInputElementIsolatePropertyKeys, HTMLInputElementIsolateConstantKeys } from '../isolate-mixins/HTMLInputElementIsolate';
import { IHTMLLabelElementIsolateProperties, HTMLLabelElementIsolatePropertyKeys, HTMLLabelElementIsolateConstantKeys } from '../isolate-mixins/HTMLLabelElementIsolate';
import { IHTMLOptGroupElementIsolateProperties, HTMLOptGroupElementIsolatePropertyKeys, HTMLOptGroupElementIsolateConstantKeys } from '../isolate-mixins/HTMLOptGroupElementIsolate';
import { IHTMLOptionElementIsolateProperties, HTMLOptionElementIsolatePropertyKeys, HTMLOptionElementIsolateConstantKeys } from '../isolate-mixins/HTMLOptionElementIsolate';
import { IHTMLOrSVGElementProperties, HTMLOrSVGElementPropertyKeys, HTMLOrSVGElementConstantKeys } from '../official-mixins/HTMLOrSVGElement';
import { IHTMLSelectElementIsolateProperties, HTMLSelectElementIsolatePropertyKeys, HTMLSelectElementIsolateConstantKeys } from '../isolate-mixins/HTMLSelectElementIsolate';
import { IHTMLTextAreaElementIsolateProperties, HTMLTextAreaElementIsolatePropertyKeys, HTMLTextAreaElementIsolateConstantKeys } from '../isolate-mixins/HTMLTextAreaElementIsolate';
import { INodeIsolateProperties, NodeIsolatePropertyKeys, NodeIsolateConstantKeys } from '../isolate-mixins/NodeIsolate';
import { INonDocumentTypeChildNodeProperties, NonDocumentTypeChildNodePropertyKeys, NonDocumentTypeChildNodeConstantKeys } from '../official-mixins/NonDocumentTypeChildNode';
import { IParentNodeProperties, ParentNodePropertyKeys, ParentNodeConstantKeys } from '../official-mixins/ParentNode';
import { ITextIsolateProperties, TextIsolatePropertyKeys, TextIsolateConstantKeys } from '../isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNode, ISuperNodeProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperNode>('SuperNode', getState, setState);
export const nodeAttacher = new NodeAttacher<ISuperNode>(getState, setState, awaitedHandler);

export function SuperNodeGenerator(AttrIsolate: Constructable<IAttrIsolate>, CharacterDataIsolate: Constructable<ICharacterDataIsolate>, DocumentIsolate: Constructable<IDocumentIsolate>, DocumentTypeIsolate: Constructable<IDocumentTypeIsolate>, ElementIsolate: Constructable<IElementIsolate>, HTMLButtonElementIsolate: Constructable<IHTMLButtonElementIsolate>, HTMLElementIsolate: Constructable<IHTMLElementIsolate>, HTMLFieldSetElementIsolate: Constructable<IHTMLFieldSetElementIsolate>, HTMLFormElementIsolate: Constructable<IHTMLFormElementIsolate>, HTMLHeadElementIsolate: Constructable<IHTMLHeadElementIsolate>, HTMLInputElementIsolate: Constructable<IHTMLInputElementIsolate>, HTMLLabelElementIsolate: Constructable<IHTMLLabelElementIsolate>, HTMLOptGroupElementIsolate: Constructable<IHTMLOptGroupElementIsolate>, HTMLOptionElementIsolate: Constructable<IHTMLOptionElementIsolate>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>, HTMLSelectElementIsolate: Constructable<IHTMLSelectElementIsolate>, HTMLTextAreaElementIsolate: Constructable<IHTMLTextAreaElementIsolate>, NodeIsolate: Constructable<INodeIsolate>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>, ParentNode: Constructable<IParentNode>, TextIsolate: Constructable<ITextIsolate>) {
  const Parent = (ClassMixer(AttrIsolate, [CharacterDataIsolate, DocumentIsolate, DocumentTypeIsolate, ElementIsolate, HTMLButtonElementIsolate, HTMLElementIsolate, HTMLFieldSetElementIsolate, HTMLFormElementIsolate, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLLabelElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLSelectElementIsolate, HTMLTextAreaElementIsolate, NodeIsolate, NonDocumentTypeChildNode, ParentNode, TextIsolate]) as unknown) as Constructable<IAttrIsolate & ICharacterDataIsolate & IDocumentIsolate & IDocumentTypeIsolate & IElementIsolate & IHTMLButtonElementIsolate & IHTMLElementIsolate & IHTMLFieldSetElementIsolate & IHTMLFormElementIsolate & IHTMLHeadElementIsolate & IHTMLInputElementIsolate & IHTMLLabelElementIsolate & IHTMLOptGroupElementIsolate & IHTMLOptionElementIsolate & IHTMLOrSVGElement & IHTMLSelectElementIsolate & IHTMLTextAreaElementIsolate & INodeIsolate & INonDocumentTypeChildNode & IParentNode & ITextIsolate>;

  return class SuperNode extends Parent implements ISuperNode, PromiseLike<ISuperNode> {
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
      initializeConstantsAndProperties<SuperNode>(this, SuperNodeConstantKeys, SuperNodePropertyKeys);
      setState(this, {
        createInstanceName: 'createSuperNode',
      });
    }

    // properties

    public get baseURI(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'baseURI', false);
    }

    public get childNodes(): ISuperNodeList {
      throw new Error('SuperNode.childNodes getter not implemented');
    }

    public get firstChild(): ISuperNode {
      throw new Error('SuperNode.firstChild getter not implemented');
    }

    public get isConnected(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'isConnected', false);
    }

    public get lastChild(): ISuperNode {
      throw new Error('SuperNode.lastChild getter not implemented');
    }

    public get nextSibling(): ISuperNode {
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

    public get ownerDocument(): ISuperDocument {
      throw new Error('SuperNode.ownerDocument getter not implemented');
    }

    public get parentElement(): ISuperElement {
      throw new Error('SuperNode.parentElement getter not implemented');
    }

    public get parentNode(): ISuperNode {
      throw new Error('SuperNode.parentNode getter not implemented');
    }

    public get previousSibling(): ISuperNode {
      throw new Error('SuperNode.previousSibling getter not implemented');
    }

    public get textContent(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'textContent', true);
    }

    // methods

    public compareDocumentPosition(other: ISuperNode): Promise<number> {
      return awaitedHandler.runMethod<number>(this, 'compareDocumentPosition', [other]);
    }

    public contains(other: ISuperNode | null): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'contains', [other]);
    }

    public getRootNode(options?: IGetRootNodeOptions): ISuperNode {
      throw new Error('SuperNode.getRootNode not implemented');
    }

    public hasChildNodes(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasChildNodes', []);
    }

    public isDefaultNamespace(namespace: string | null): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'isDefaultNamespace', [namespace]);
    }

    public isEqualNode(otherNode: ISuperNode | null): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'isEqualNode', [otherNode]);
    }

    public isSameNode(otherNode: ISuperNode | null): Promise<boolean> {
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

    public then<TResult1 = ISuperNode, TResult2 = never>(onfulfilled?: ((value: ISuperNode) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperNodeProperties extends IAttrIsolateProperties, ICharacterDataIsolateProperties, IDocumentIsolateProperties, IDocumentTypeIsolateProperties, IElementIsolateProperties, IHTMLButtonElementIsolateProperties, IHTMLElementIsolateProperties, IHTMLFieldSetElementIsolateProperties, IHTMLFormElementIsolateProperties, IHTMLHeadElementIsolateProperties, IHTMLInputElementIsolateProperties, IHTMLLabelElementIsolateProperties, IHTMLOptGroupElementIsolateProperties, IHTMLOptionElementIsolateProperties, IHTMLOrSVGElementProperties, IHTMLSelectElementIsolateProperties, IHTMLTextAreaElementIsolateProperties, INodeIsolateProperties, INonDocumentTypeChildNodeProperties, IParentNodeProperties, ITextIsolateProperties {
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

export const SuperNodePropertyKeys = [...AttrIsolatePropertyKeys, ...CharacterDataIsolatePropertyKeys, ...DocumentIsolatePropertyKeys, ...DocumentTypeIsolatePropertyKeys, ...ElementIsolatePropertyKeys, ...HTMLButtonElementIsolatePropertyKeys, ...HTMLElementIsolatePropertyKeys, ...HTMLFieldSetElementIsolatePropertyKeys, ...HTMLFormElementIsolatePropertyKeys, ...HTMLHeadElementIsolatePropertyKeys, ...HTMLInputElementIsolatePropertyKeys, ...HTMLLabelElementIsolatePropertyKeys, ...HTMLOptGroupElementIsolatePropertyKeys, ...HTMLOptionElementIsolatePropertyKeys, ...HTMLOrSVGElementPropertyKeys, ...HTMLSelectElementIsolatePropertyKeys, ...HTMLTextAreaElementIsolatePropertyKeys, ...NodeIsolatePropertyKeys, ...NonDocumentTypeChildNodePropertyKeys, ...ParentNodePropertyKeys, ...TextIsolatePropertyKeys, 'baseURI', 'childNodes', 'firstChild', 'isConnected', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentElement', 'parentNode', 'previousSibling', 'textContent'];

export const SuperNodeConstantKeys = [...AttrIsolateConstantKeys, ...CharacterDataIsolateConstantKeys, ...DocumentIsolateConstantKeys, ...DocumentTypeIsolateConstantKeys, ...ElementIsolateConstantKeys, ...HTMLButtonElementIsolateConstantKeys, ...HTMLElementIsolateConstantKeys, ...HTMLFieldSetElementIsolateConstantKeys, ...HTMLFormElementIsolateConstantKeys, ...HTMLHeadElementIsolateConstantKeys, ...HTMLInputElementIsolateConstantKeys, ...HTMLLabelElementIsolateConstantKeys, ...HTMLOptGroupElementIsolateConstantKeys, ...HTMLOptionElementIsolateConstantKeys, ...HTMLOrSVGElementConstantKeys, ...HTMLSelectElementIsolateConstantKeys, ...HTMLTextAreaElementIsolateConstantKeys, ...NodeIsolateConstantKeys, ...NonDocumentTypeChildNodeConstantKeys, ...ParentNodeConstantKeys, ...TextIsolateConstantKeys, 'ATTRIBUTE_NODE', 'CDATA_SECTION_NODE', 'COMMENT_NODE', 'DOCUMENT_FRAGMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_POSITION_CONTAINED_BY', 'DOCUMENT_POSITION_CONTAINS', 'DOCUMENT_POSITION_DISCONNECTED', 'DOCUMENT_POSITION_FOLLOWING', 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 'DOCUMENT_POSITION_PRECEDING', 'DOCUMENT_TYPE_NODE', 'ELEMENT_NODE', 'ENTITY_NODE', 'ENTITY_REFERENCE_NODE', 'NOTATION_NODE', 'PROCESSING_INSTRUCTION_NODE', 'TEXT_NODE'];
