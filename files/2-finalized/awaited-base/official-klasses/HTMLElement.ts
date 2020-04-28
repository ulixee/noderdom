import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { IHTMLElement, IElement } from '../interfaces/official';
import { IElementProperties, ElementPropertyKeys, ElementConstantKeys } from './Element';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLElement, IHTMLElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLElement>('HTMLElement', getState, setState);

export function HTMLElementGenerator(Element: Constructable<IElement>) {
  return class HTMLElement extends Element implements IHTMLElement {
    constructor() {
      super();
      initialize(HTMLElement, this);
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
      throw new Error('HTMLElement.offsetParent getter not implemented');
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

export interface IHTMLElementProperties extends IElementProperties {
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

export const HTMLElementPropertyKeys = [...ElementPropertyKeys, 'accessKey', 'autoCapitalize', 'dir', 'draggable', 'hidden', 'inert', 'innerText', 'lang', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'spellcheck', 'title', 'translate'];

export const HTMLElementConstantKeys = [...ElementConstantKeys];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<IHTMLElement>, self: IHTMLElement) {
  initializeConstantsAndProperties<IHTMLElement>(Klass, self, HTMLElementConstantKeys, HTMLElementPropertyKeys);
}
