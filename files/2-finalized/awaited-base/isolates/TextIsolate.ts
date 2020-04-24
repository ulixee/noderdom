// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import { ITextIsolate } from '../interfaces/isolates';
import { IText } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfTextIsolate } = StateMachine<
  ITextIsolate,
  ITextIsolateProperties,
  ITextIsolateReadonlyProperties
>('TextIsolate');

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

export interface ITextIsolateReadonlyProperties {
  readonly wholeText?: Promise<string>;
}

export interface ITextIsolateProperties extends ITextIsolateReadonlyProperties {}

export const TextIsolatePropertyKeys = ['wholeText'];

export const TextIsolateConstantKeys = [];
