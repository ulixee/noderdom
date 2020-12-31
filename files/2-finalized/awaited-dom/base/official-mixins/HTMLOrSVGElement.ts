import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLOrSVGElement, IDOMStringMap } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLOrSVGElement, IHTMLOrSVGElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLOrSVGElement>('HTMLOrSVGElement', getState, setState);

export default class HTMLOrSVGElement implements IHTMLOrSVGElement {
  public get dataset(): IDOMStringMap {
    throw new Error('HTMLOrSVGElement.dataset getter not implemented');
  }

  public get nonce(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'nonce', false);
  }

  public get tabIndex(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'tabIndex', false);
  }

  // methods

  public blur(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'blur', []);
  }

  public focus(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'focus', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLOrSVGElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly dataset?: IDOMStringMap;
  readonly nonce?: Promise<string>;
  readonly tabIndex?: Promise<number>;
}

export const HTMLOrSVGElementPropertyKeys = ['dataset', 'nonce', 'tabIndex'];

export const HTMLOrSVGElementConstantKeys = [];
