import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import NodeAttacher from '../NodeAttacher';
import { IHTMLOrSVGElement } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOrSVGElement, IHTMLOrSVGElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLOrSVGElement>('HTMLOrSVGElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLOrSVGElement>('createHTMLOrSVGElement', getState, setState, awaitedHandler);

export default class HTMLOrSVGElement implements IHTMLOrSVGElement, PromiseLike<IHTMLOrSVGElement> {
  public blur(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'blur', []);
  }

  public focus(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'focus', []);
  }

  public then<TResult1 = IHTMLOrSVGElement, TResult2 = never>(onfulfilled?: ((value: IHTMLOrSVGElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
    return nodeAttacher.attach(this).then(onfulfilled, onrejected);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLOrSVGElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLOrSVGElementPropertyKeys = [];

export const HTMLOrSVGElementConstantKeys = [];
