import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import NodeAttacher from '../NodeAttacher';
import { IHTMLHeadElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLHeadElementIsolate, IHTMLHeadElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLHeadElementIsolate>('HTMLHeadElementIsolate', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLHeadElementIsolate>('createHTMLHeadElementIsolate', getState, setState, awaitedHandler);

export default class HTMLHeadElementIsolate implements IHTMLHeadElementIsolate, PromiseLike<IHTMLHeadElementIsolate> {
  public then<TResult1 = IHTMLHeadElementIsolate, TResult2 = never>(onfulfilled?: ((value: IHTMLHeadElementIsolate) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
    return nodeAttacher.attach(this).then(onfulfilled, onrejected);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHeadElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLHeadElementIsolatePropertyKeys = [];

export const HTMLHeadElementIsolateConstantKeys = [];
