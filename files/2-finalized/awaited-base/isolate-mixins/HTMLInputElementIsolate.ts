import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import NodeAttacher from '../NodeAttacher';
import { IHTMLInputElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLInputElementIsolate, IHTMLInputElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLInputElementIsolate>('HTMLInputElementIsolate', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLInputElementIsolate>('createHTMLInputElementIsolate', getState, setState, awaitedHandler);

export default class HTMLInputElementIsolate implements IHTMLInputElementIsolate, PromiseLike<IHTMLInputElementIsolate> {
  public select(): Promise<void> {
    return awaitedHandler.runMethod<void>(this, 'select', []);
  }

  public then<TResult1 = IHTMLInputElementIsolate, TResult2 = never>(onfulfilled?: ((value: IHTMLInputElementIsolate) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
    return nodeAttacher.attach(this).then(onfulfilled, onrejected);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLInputElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLInputElementIsolatePropertyKeys = [];

export const HTMLInputElementIsolateConstantKeys = [];
