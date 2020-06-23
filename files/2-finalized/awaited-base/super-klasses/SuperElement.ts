import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { ISuperElement, ISuperHTMLCollection } from '../interfaces/super';
import { IElementIsolate, IHTMLElementIsolate, IHTMLHeadElementIsolate, IHTMLInputElementIsolate, INodeIsolate } from '../interfaces/isolate';
import { IHTMLOrSVGElement, INonDocumentTypeChildNode, IParentNode, INamedNodeMap, IDOMTokenList, IShadowRoot, IAttr, IDOMRect, IDOMRectList, IFullscreenOptions, IScrollIntoViewOptions } from '../interfaces/official';
import { IElementIsolateProperties, ElementIsolatePropertyKeys, ElementIsolateConstantKeys } from '../isolate-mixins/ElementIsolate';
import { IHTMLElementIsolateProperties, HTMLElementIsolatePropertyKeys, HTMLElementIsolateConstantKeys } from '../isolate-mixins/HTMLElementIsolate';
import { IHTMLHeadElementIsolateProperties, HTMLHeadElementIsolatePropertyKeys, HTMLHeadElementIsolateConstantKeys } from '../isolate-mixins/HTMLHeadElementIsolate';
import { IHTMLInputElementIsolateProperties, HTMLInputElementIsolatePropertyKeys, HTMLInputElementIsolateConstantKeys } from '../isolate-mixins/HTMLInputElementIsolate';
import { IHTMLOrSVGElementProperties, HTMLOrSVGElementPropertyKeys, HTMLOrSVGElementConstantKeys } from '../official-mixins/HTMLOrSVGElement';
import { INodeIsolateProperties, NodeIsolatePropertyKeys, NodeIsolateConstantKeys } from '../isolate-mixins/NodeIsolate';
import { INonDocumentTypeChildNodeProperties, NonDocumentTypeChildNodePropertyKeys, NonDocumentTypeChildNodeConstantKeys } from '../official-mixins/NonDocumentTypeChildNode';
import { IParentNodeProperties, ParentNodePropertyKeys, ParentNodeConstantKeys } from '../official-mixins/ParentNode';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperElement, ISuperElementProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperElement>('SuperElement', getState, setState);
export const nodeAttacher = new NodeAttacher<ISuperElement>(getState, setState, awaitedHandler);

export function SuperElementGenerator(ElementIsolate: Constructable<IElementIsolate>, HTMLElementIsolate: Constructable<IHTMLElementIsolate>, HTMLHeadElementIsolate: Constructable<IHTMLHeadElementIsolate>, HTMLInputElementIsolate: Constructable<IHTMLInputElementIsolate>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>, NodeIsolate: Constructable<INodeIsolate>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>, ParentNode: Constructable<IParentNode>) {
  const Parent = (ClassMixer(ElementIsolate, [HTMLElementIsolate, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLOrSVGElement, NodeIsolate, NonDocumentTypeChildNode, ParentNode]) as unknown) as Constructable<IElementIsolate & IHTMLElementIsolate & IHTMLHeadElementIsolate & IHTMLInputElementIsolate & IHTMLOrSVGElement & INodeIsolate & INonDocumentTypeChildNode & IParentNode>;

  return class SuperElement extends Parent implements ISuperElement, PromiseLike<ISuperElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<SuperElement>(this, SuperElementConstantKeys, SuperElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createSuperElement',
      });
    }

    // properties

    public get attributes(): INamedNodeMap {
      throw new Error('SuperElement.attributes getter not implemented');
    }

    public get classList(): IDOMTokenList {
      throw new Error('SuperElement.classList getter not implemented');
    }

    public get className(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'className', false);
    }

    public get clientHeight(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'clientHeight', false);
    }

    public get clientLeft(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'clientLeft', false);
    }

    public get clientTop(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'clientTop', false);
    }

    public get clientWidth(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'clientWidth', false);
    }

    public get id(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'id', false);
    }

    public get innerHTML(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'innerHTML', false);
    }

    public get localName(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'localName', false);
    }

    public get namespaceURI(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'namespaceURI', true);
    }

    public get outerHTML(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'outerHTML', false);
    }

    public get part(): IDOMTokenList {
      throw new Error('SuperElement.part getter not implemented');
    }

    public get prefix(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'prefix', true);
    }

    public get scrollHeight(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'scrollHeight', false);
    }

    public get scrollLeft(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'scrollLeft', false);
    }

    public get scrollTop(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'scrollTop', false);
    }

    public get scrollWidth(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'scrollWidth', false);
    }

    public get shadowRoot(): IShadowRoot {
      throw new Error('SuperElement.shadowRoot getter not implemented');
    }

    public get slot(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'slot', false);
    }

    public get tagName(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'tagName', false);
    }

    // methods

    public closest(selectors: string): ISuperElement {
      throw new Error('SuperElement.closest not implemented');
    }

    public getAttribute(qualifiedName: string): Promise<string | null> {
      return awaitedHandler.runMethod<string | null>(this, 'getAttribute', [qualifiedName]);
    }

    public getAttributeNS(namespace: string | null, localName: string): Promise<string | null> {
      return awaitedHandler.runMethod<string | null>(this, 'getAttributeNS', [namespace, localName]);
    }

    public getAttributeNames(): Promise<Iterable<string>> {
      return awaitedHandler.runMethod<Iterable<string>>(this, 'getAttributeNames', []);
    }

    public getAttributeNode(qualifiedName: string): Promise<IAttr | null> {
      return awaitedHandler.runMethod<IAttr | null>(this, 'getAttributeNode', [qualifiedName]);
    }

    public getAttributeNodeNS(namespace: string | null, localName: string): Promise<IAttr | null> {
      return awaitedHandler.runMethod<IAttr | null>(this, 'getAttributeNodeNS', [namespace, localName]);
    }

    public getBoundingClientRect(): Promise<IDOMRect> {
      return awaitedHandler.runMethod<IDOMRect>(this, 'getBoundingClientRect', []);
    }

    public getClientRects(): Promise<IDOMRectList> {
      return awaitedHandler.runMethod<IDOMRectList>(this, 'getClientRects', []);
    }

    public getElementsByClassName(classNames: string): ISuperHTMLCollection {
      throw new Error('SuperElement.getElementsByClassName not implemented');
    }

    public getElementsByTagName(qualifiedName: string): ISuperHTMLCollection {
      throw new Error('SuperElement.getElementsByTagName not implemented');
    }

    public getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection {
      throw new Error('SuperElement.getElementsByTagNameNS not implemented');
    }

    public hasAttribute(qualifiedName: string): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasAttribute', [qualifiedName]);
    }

    public hasAttributeNS(namespace: string | null, localName: string): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasAttributeNS', [namespace, localName]);
    }

    public hasAttributes(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasAttributes', []);
    }

    public hasPointerCapture(pointerId: number): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasPointerCapture', [pointerId]);
    }

    public matches(selectors: string): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'matches', [selectors]);
    }

    public requestFullscreen(options?: IFullscreenOptions): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'requestFullscreen', [options]);
    }

    public requestPointerLock(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'requestPointerLock', []);
    }

    public scrollIntoView(arg?: boolean | IScrollIntoViewOptions): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'scrollIntoView', [arg]);
    }

    public then<TResult1 = ISuperElement, TResult2 = never>(onfulfilled?: ((value: ISuperElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperElementProperties extends IElementIsolateProperties, IHTMLElementIsolateProperties, IHTMLHeadElementIsolateProperties, IHTMLInputElementIsolateProperties, IHTMLOrSVGElementProperties, INodeIsolateProperties, INonDocumentTypeChildNodeProperties, IParentNodeProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly attributes?: INamedNodeMap;
  readonly classList?: IDOMTokenList;
  readonly className?: Promise<string>;
  readonly clientHeight?: Promise<number>;
  readonly clientLeft?: Promise<number>;
  readonly clientTop?: Promise<number>;
  readonly clientWidth?: Promise<number>;
  readonly id?: Promise<string>;
  readonly innerHTML?: Promise<string>;
  readonly localName?: Promise<string>;
  readonly namespaceURI?: Promise<string | null>;
  readonly outerHTML?: Promise<string>;
  readonly part?: IDOMTokenList;
  readonly prefix?: Promise<string | null>;
  readonly scrollHeight?: Promise<number>;
  readonly scrollLeft?: Promise<number>;
  readonly scrollTop?: Promise<number>;
  readonly scrollWidth?: Promise<number>;
  readonly shadowRoot?: IShadowRoot;
  readonly slot?: Promise<string>;
  readonly tagName?: Promise<string>;
}

export const SuperElementPropertyKeys = [...ElementIsolatePropertyKeys, ...HTMLElementIsolatePropertyKeys, ...HTMLHeadElementIsolatePropertyKeys, ...HTMLInputElementIsolatePropertyKeys, ...HTMLOrSVGElementPropertyKeys, ...NodeIsolatePropertyKeys, ...NonDocumentTypeChildNodePropertyKeys, ...ParentNodePropertyKeys, 'attributes', 'classList', 'className', 'clientHeight', 'clientLeft', 'clientTop', 'clientWidth', 'id', 'innerHTML', 'localName', 'namespaceURI', 'outerHTML', 'part', 'prefix', 'scrollHeight', 'scrollLeft', 'scrollTop', 'scrollWidth', 'shadowRoot', 'slot', 'tagName'];

export const SuperElementConstantKeys = [...ElementIsolateConstantKeys, ...HTMLElementIsolateConstantKeys, ...HTMLHeadElementIsolateConstantKeys, ...HTMLInputElementIsolateConstantKeys, ...HTMLOrSVGElementConstantKeys, ...NodeIsolateConstantKeys, ...NonDocumentTypeChildNodeConstantKeys, ...ParentNodeConstantKeys];
