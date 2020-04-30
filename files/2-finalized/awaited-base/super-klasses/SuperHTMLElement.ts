import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import { ISuperHTMLElement, ISuperElement } from '../interfaces/super';
import { IElement, IHTMLOrSVGElement, INode } from '../interfaces/official';
import { IHTMLHeadElementIsolate, IHTMLInputElementIsolate } from '../interfaces/isolate';
import { IElementProperties, ElementPropertyKeys, ElementConstantKeys } from '../official-klasses/Element';
import { IHTMLHeadElementIsolateProperties, HTMLHeadElementIsolatePropertyKeys, HTMLHeadElementIsolateConstantKeys } from '../isolate-mixins/HTMLHeadElementIsolate';
import { IHTMLInputElementIsolateProperties, HTMLInputElementIsolatePropertyKeys, HTMLInputElementIsolateConstantKeys } from '../isolate-mixins/HTMLInputElementIsolate';
import { IHTMLOrSVGElementProperties, HTMLOrSVGElementPropertyKeys, HTMLOrSVGElementConstantKeys } from '../official-mixins/HTMLOrSVGElement';
import { INodeProperties, NodePropertyKeys, NodeConstantKeys } from '../official-klasses/Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLElement, ISuperHTMLElementProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperHTMLElement>('SuperHTMLElement', getState, setState);

export function SuperHTMLElementGenerator(Element: Constructable<IElement>, HTMLHeadElementIsolate: Constructable<IHTMLHeadElementIsolate>, HTMLInputElementIsolate: Constructable<IHTMLInputElementIsolate>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>, Node: Constructable<INode>) {
  const Parent = (ClassMixer(Element, [HTMLHeadElementIsolate, HTMLInputElementIsolate, HTMLOrSVGElement, Node]) as unknown) as Constructable<IElement & IHTMLHeadElementIsolate & IHTMLInputElementIsolate & IHTMLOrSVGElement & INode>;

  return class SuperHTMLElement extends Parent implements ISuperHTMLElement {
    constructor() {
      super();
      initialize(SuperHTMLElement, this);
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
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperHTMLElementProperties extends IElementProperties, IHTMLHeadElementIsolateProperties, IHTMLInputElementIsolateProperties, IHTMLOrSVGElementProperties, INodeProperties {
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

export const SuperHTMLElementPropertyKeys = [...ElementPropertyKeys, ...HTMLHeadElementIsolatePropertyKeys, ...HTMLInputElementIsolatePropertyKeys, ...HTMLOrSVGElementPropertyKeys, ...NodePropertyKeys, 'accessKey', 'autoCapitalize', 'dir', 'draggable', 'hidden', 'inert', 'innerText', 'lang', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'spellcheck', 'title', 'translate'];

export const SuperHTMLElementConstantKeys = [...ElementConstantKeys, ...HTMLHeadElementIsolateConstantKeys, ...HTMLInputElementIsolateConstantKeys, ...HTMLOrSVGElementConstantKeys, ...NodeConstantKeys];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<ISuperHTMLElement>, self: ISuperHTMLElement) {
  initializeConstantsAndProperties<ISuperHTMLElement>(Klass, self, SuperHTMLElementConstantKeys, SuperHTMLElementPropertyKeys);
}
