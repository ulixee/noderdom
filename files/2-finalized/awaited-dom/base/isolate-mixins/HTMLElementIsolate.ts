import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLElementIsolate } from '../interfaces/isolate';
import { ISuperElement } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLElementIsolate, IHTMLElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLElementIsolate>('HTMLElementIsolate', getState, setState);

export default class HTMLElementIsolate implements IHTMLElementIsolate {
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
    throw new Error('HTMLElementIsolate.offsetParent getter not implemented');
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
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLElementIsolateProperties {
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

export const HTMLElementIsolatePropertyKeys = ['accessKey', 'autoCapitalize', 'dir', 'draggable', 'hidden', 'inert', 'innerText', 'lang', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'spellcheck', 'title', 'translate'];

export const HTMLElementIsolateConstantKeys = [];
