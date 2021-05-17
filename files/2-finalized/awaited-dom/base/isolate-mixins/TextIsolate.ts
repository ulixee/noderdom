import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { ITextIsolate } from '../interfaces/isolate';
import { ISuperText } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ITextIsolate, ITextIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<ITextIsolate>('TextIsolate', getState, setState);

export default class TextIsolate implements ITextIsolate {
  public get wholeText(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'wholeText', false);
  }

  // methods

  public splitText(offset: number): Promise<ISuperText> {
    return awaitedHandler.runMethod<ISuperText>(this, 'splitText', [offset]);
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
