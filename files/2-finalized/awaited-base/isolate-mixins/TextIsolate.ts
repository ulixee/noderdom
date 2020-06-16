import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import NodeAttacher from '../NodeAttacher';
import { ITextIsolate } from '../interfaces/isolate';
import { ISuperText } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ITextIsolate, ITextIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<ITextIsolate>('TextIsolate', getState, setState);
export const nodeAttacher = new NodeAttacher<ITextIsolate>('createTextIsolate', getState, setState, awaitedHandler);

export default class TextIsolate implements ITextIsolate, PromiseLike<ITextIsolate> {
  public get wholeText(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'wholeText', false);
  }

  // methods

  public splitText(offset: number): Promise<ISuperText> {
    return awaitedHandler.runMethod<ISuperText>(this, 'splitText', [offset]);
  }

  public then<TResult1 = ITextIsolate, TResult2 = never>(onfulfilled?: ((value: ITextIsolate) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
    return nodeAttacher.attach(this).then(onfulfilled, onrejected);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ITextIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly wholeText?: Promise<string>;
}

export const TextIsolatePropertyKeys = ['wholeText'];

export const TextIsolateConstantKeys = [];
