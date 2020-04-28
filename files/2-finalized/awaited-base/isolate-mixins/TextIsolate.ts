import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import { ITextIsolate } from '../interfaces/isolate';
import { IText } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ITextIsolate, ITextIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<ITextIsolate>('TextIsolate', getState, setState);

export default class TextIsolate implements ITextIsolate {
  public get wholeText(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'wholeText', false);
  }

  // methods

  public splitText(offset: number): Promise<IText> {
    return awaitedHandler.runMethod<IText>(this, 'splitText', [offset]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ITextIsolateProperties {
  readonly wholeText?: Promise<string>;
}

export const TextIsolatePropertyKeys = ['wholeText'];

export const TextIsolateConstantKeys = [];
