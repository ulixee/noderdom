// tslint:disable:variable-name
import Constructable from '../Constructable';
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IElement } from '../interfaces/dom';
import { ISuperHTMLElement } from '../interfaces/supers';
import { IHTMLHeadElementIsolate } from '../interfaces/isolates';
import { IHTMLHeadElementIsolateProperties, IHTMLHeadElementIsolateReadonlyProperties, HTMLHeadElementIsolatePropertyKeys, HTMLHeadElementIsolateConstantKeys } from '../isolates/HTMLHeadElementIsolate';

export const { getState, setState, setHiddenState, setReadonlyOfSuperHTMLElement } = StateMachine<
  ISuperHTMLElement,
  ISuperHTMLElementProperties,
  ISuperHTMLElementReadonlyProperties
>('SuperHTMLElement');

export const awaitedHandler = new AwaitedHandler<ISuperHTMLElement>('SuperHTMLElement', getState, setState);

export function SuperHTMLElementGenerator(HTMLHeadElementIsolate: Constructable<IHTMLHeadElementIsolate>) {
  return class SuperHTMLElement extends HTMLHeadElementIsolate implements ISuperHTMLElement {
    constructor() {
      super();
      initializeConstantsAndProperties<SuperHTMLElement>(SuperHTMLElement, this, SuperHTMLElementConstantKeys, SuperHTMLElementPropertyKeys);
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

    public get offsetParent(): IElement {
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

export interface ISuperHTMLElementReadonlyProperties extends IHTMLHeadElementIsolateReadonlyProperties {
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
  readonly offsetParent?: IElement;
  readonly offsetTop?: Promise<number>;
  readonly offsetWidth?: Promise<number>;
  readonly spellcheck?: Promise<boolean>;
  readonly title?: Promise<string>;
  readonly translate?: Promise<boolean>;
}

export interface ISuperHTMLElementProperties extends ISuperHTMLElementReadonlyProperties, IHTMLHeadElementIsolateProperties {}

export const SuperHTMLElementPropertyKeys = [...HTMLHeadElementIsolatePropertyKeys, 'accessKey', 'autoCapitalize', 'dir', 'draggable', 'hidden', 'inert', 'innerText', 'lang', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'spellcheck', 'title', 'translate'];

export const SuperHTMLElementConstantKeys = [...HTMLHeadElementIsolateConstantKeys];
