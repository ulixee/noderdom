import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { ISuperHTMLElement, ISuperElement } from '../interfaces/super';
import { IElementIsolate, IHTMLElementIsolate, IHTMLHeadElementIsolate, IHTMLInputElementIsolate, INodeIsolate } from '../interfaces/isolate';
import { IHTMLOrSVGElement, IParentNode } from '../interfaces/official';
import { IElementIsolateProperties, ElementIsolatePropertyKeys, ElementIsolateConstantKeys } from '../isolate-mixins/ElementIsolate';
import { IHTMLElementIsolateProperties, HTMLElementIsolatePropertyKeys, HTMLElementIsolateConstantKeys } from '../isolate-mixins/HTMLElementIsolate';
import { IHTMLHeadElementIsolateProperties, HTMLHeadElementIsolatePropertyKeys, HTMLHeadElementIsolateConstantKeys } from '../isolate-mixins/HTMLHeadElementIsolate';
import { IHTMLInputElementIsolateProperties, HTMLInputElementIsolatePropertyKeys, HTMLInputElementIsolateConstantKeys } from '../isolate-mixins/HTMLInputElementIsolate';
import { IHTMLOrSVGElementProperties, HTMLOrSVGElementPropertyKeys, HTMLOrSVGElementConstantKeys } from '../official-mixins/HTMLOrSVGElement';
import { INodeIsolateProperties, NodeIsolatePropertyKeys, NodeIsolateConstantKeys } from '../isolate-mixins/NodeIsolate';
import { IParentNodeProperties, ParentNodePropertyKeys, ParentNodeConstantKeys } from '../official-mixins/ParentNode';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLElement, ISuperHTMLElementProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperHTMLElement>('SuperHTMLElement', getState, setState);
export const nodeAttacher = new NodeAttacher<ISuperHTMLElement>('createSuperHTMLElement', getState, setState, awaitedHandler);

export function SuperHTMLElementGenerator(ElementIsolate: Constructable<IElementIsolate>, HTMLElementIsolate: Constructable<IHTMLElementIsolate>, HTMLHeadElementIsolate: Constructable<IHTMLHeadElementIsolate>, HTMLInputElementIsolate: Constructable<IHTMLInputElementIsolate>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>, NodeIsolate: Constructable<INodeIsolate>, ParentNode: Constructable<IParentNode>) {
  const Parent = (ClassMixer(ElementIsolate, [HTMLElementIsolate, HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLOrSVGElement, NodeIsolate, ParentNode]) as unknown) as Constructable<IElementIsolate & IHTMLElementIsolate & IHTMLHeadElementIsolate & IHTMLInputElementIsolate & IHTMLOrSVGElement & INodeIsolate & IParentNode>;

  return class SuperHTMLElement extends Parent implements ISuperHTMLElement, PromiseLike<ISuperHTMLElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<SuperHTMLElement>(this, SuperHTMLElementConstantKeys, SuperHTMLElementPropertyKeys);
    }

    // properties

    public get accessKey(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'accessKey', false);
    }

    public get autoCapitalize(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'autoCapitalize', false);
    }

    public get dir(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'dir', false);
    }

    public get draggable(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'draggable', false);
    }

    public get hidden(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'hidden', false);
    }

    public get inert(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'inert', false);
    }

    public get innerText(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'innerText', false);
    }

    public get lang(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'lang', false);
    }

    public get offsetHeight(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'offsetHeight', false);
    }

    public get offsetLeft(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'offsetLeft', false);
    }

    public get offsetParent(): ISuperElement {
      throw new Error('SuperHTMLElement.offsetParent getter not implemented');
    }

    public get offsetTop(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'offsetTop', false);
    }

    public get offsetWidth(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'offsetWidth', false);
    }

    public get spellcheck(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'spellcheck', false);
    }

    public get title(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'title', false);
    }

    public get translate(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'translate', false);
    }

    // methods

    public click(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'click', []);
    }

    public then<TResult1 = ISuperHTMLElement, TResult2 = never>(onfulfilled?: ((value: ISuperHTMLElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperHTMLElementProperties extends IElementIsolateProperties, IHTMLElementIsolateProperties, IHTMLHeadElementIsolateProperties, IHTMLInputElementIsolateProperties, IHTMLOrSVGElementProperties, INodeIsolateProperties, IParentNodeProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly accessKey?: Promise<string>;
  readonly autoCapitalize?: Promise<string>;
  readonly dir?: Promise<string>;
  readonly draggable?: Promise<boolean>;
  readonly hidden?: Promise<boolean>;
  readonly inert?: Promise<boolean>;
  readonly innerText?: Promise<string>;
  readonly lang?: Promise<string>;
  readonly offsetHeight?: Promise<number>;
  readonly offsetLeft?: Promise<number>;
  readonly offsetParent?: ISuperElement;
  readonly offsetTop?: Promise<number>;
  readonly offsetWidth?: Promise<number>;
  readonly spellcheck?: Promise<boolean>;
  readonly title?: Promise<string>;
  readonly translate?: Promise<boolean>;
}

export const SuperHTMLElementPropertyKeys = [...ElementIsolatePropertyKeys, ...HTMLElementIsolatePropertyKeys, ...HTMLHeadElementIsolatePropertyKeys, ...HTMLInputElementIsolatePropertyKeys, ...HTMLOrSVGElementPropertyKeys, ...NodeIsolatePropertyKeys, ...ParentNodePropertyKeys, 'accessKey', 'autoCapitalize', 'dir', 'draggable', 'hidden', 'inert', 'innerText', 'lang', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'spellcheck', 'title', 'translate'];

export const SuperHTMLElementConstantKeys = [...ElementIsolateConstantKeys, ...HTMLElementIsolateConstantKeys, ...HTMLHeadElementIsolateConstantKeys, ...HTMLInputElementIsolateConstantKeys, ...HTMLOrSVGElementConstantKeys, ...NodeIsolateConstantKeys, ...ParentNodeConstantKeys];
