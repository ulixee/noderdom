import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import { IHTMLOrSVGElement } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOrSVGElement, IHTMLOrSVGElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLOrSVGElement>('HTMLOrSVGElement', getState, setState);

export default class HTMLOrSVGElement implements IHTMLOrSVGElement {
  public blur(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'blur', []);
  }

  public focus(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'focus', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLOrSVGElementProperties {}

export const HTMLOrSVGElementPropertyKeys = [];

export const HTMLOrSVGElementConstantKeys = [];
