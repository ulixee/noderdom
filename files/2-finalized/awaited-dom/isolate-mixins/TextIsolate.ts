import StateMachine from '../../awaited-base/StateMachine';
import { ITextIsolate } from '../../awaited-base/interfaces/isolate';
import TextIsolateBase, { ITextIsolateProperties } from '../../awaited-base/isolate-mixins/TextIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ITextIsolate, ITextIsolateProperties>();

export default class TextIsolate extends TextIsolateBase implements ITextIsolate, PromiseLike<ITextIsolate> {}
